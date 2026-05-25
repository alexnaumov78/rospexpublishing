import Stripe from 'stripe';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { Resend } from 'resend';
import { put, head } from '@vercel/blob';
import { createHmac } from 'crypto';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const resend  = new Resend(process.env.RESEND_API_KEY);

const MASTER_PDFS = {
  'qft-vol1-ru': {
    url:          'https://wuoucjncdd6n4che.public.blob.vercel-storage.com/QFT_D-Naumov_Vol1_RUS_light-qfg9827med5x1g29Jd3IAU6ZpTh1de.pdf',
    filename:     'QFT-Volume-I-Naumov.pdf',
    title:        'Квантовая теория поля, Том I',
  },
  'qft-vol2-ru': {
    url:          'https://wuoucjncdd6n4che.public.blob.vercel-storage.com/QFT_D-Naumov_Vol2_RUS_light-nEn9BwZkJuZ7XMQ7SqjxrBmvc3BMXq.pdf',
    filename:     'QFT-Volume-II-Naumov.pdf',
    title:        'Квантовая теория поля, Том II',
  },
};

const PRODUCTS = {
  'qft-vol1-ru': {
    pdfs:         ['qft-vol1-ru'],
    name:         'Quantum Field Theory, Volume I (Russian Edition)',
    displayTitle: 'Quantum Field Theory for Experimentalists and Beyond',
    subtitle:     'Volume I (Russian Edition) · Dmitry V. Naumov',
    coverUrl:     'https://www.rospexpublishing.com/assets/images/covers/qft-vol1-ru.png',
  },
  'qft-vol2-ru': {
    pdfs:         ['qft-vol2-ru'],
    name:         'Quantum Field Theory, Volume II (Russian Edition)',
    displayTitle: 'Quantum Field Theory for Experimentalists and Beyond',
    subtitle:     'Volume II (Russian Edition) · Dmitry V. Naumov',
    coverUrl:     'https://www.rospexpublishing.com/assets/images/covers/qft-vol2-ru.png',
  },
  'qft-bundle-ru': {
    pdfs:         ['qft-vol1-ru', 'qft-vol2-ru'],
    name:         'Quantum Field Theory, Volumes I & II (Russian Edition)',
    displayTitle: 'Quantum Field Theory for Experimentalists and Beyond',
    subtitle:     'Volumes I & II (Russian Edition) · Dmitry V. Naumov',
    coverUrl:     'https://www.rospexpublishing.com/assets/images/covers/qft-bundle-ru.png',
  },
};

async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end',  () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

function makeDownloadToken(blobUrl, expiryMs) {
  const payload = `${blobUrl}|${expiryMs}`;
  const sig = createHmac('sha256', process.env.PDF_OWNER_PASSWORD).update(payload).digest('hex');
  return Buffer.from(payload).toString('base64url') + '.' + sig;
}

async function fetchMasterPdf(url) {
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`fetch master PDF failed: HTTP ${resp.status}`);
  return Buffer.from(await resp.arrayBuffer());
}

async function applyWatermarks(pdfBytes, buyerName, buyerEmail, txId, purchaseDate) {
  const pdfDoc = await PDFDocument.load(pdfBytes, { ignoreEncryption: true });
  const pages  = pdfDoc.getPages();
  const font   = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const visibleText   = `Licensed to: ${buyerName}  ·  ${buyerEmail}  ·  ${purchaseDate}`;
  const invisibleText = `${buyerEmail}|${txId}`;

  for (const page of pages) {
    const { width, height } = page.getSize();

    // Layer 1: visible footer
    const fontSize  = 7;
    const textWidth = font.widthOfTextAtSize(visibleText, fontSize);
    page.drawText(visibleText, {
      x:       Math.max(0, (width - textWidth) / 2),
      y:       10,
      size:    fontSize,
      font,
      color:   rgb(0.55, 0.55, 0.55),
      opacity: 0.65,
    });

    // Layer 2a: invisible watermark in top margin
    page.drawText(invisibleText, {
      x:       8,
      y:       height - 6,
      size:    3.5,
      font,
      color:   rgb(1, 1, 1),
      opacity: 0.02,
    });
  }

  // Layer 2b: embed buyer identity in PDF metadata
  pdfDoc.setTitle(`Licensed to ${buyerName}`);
  pdfDoc.setAuthor('Dmitry V. Naumov / Rospex Publishing');
  pdfDoc.setSubject(`TxID:${txId} | ${buyerEmail} | ${purchaseDate}`);
  pdfDoc.setKeywords([txId, buyerEmail, buyerName, purchaseDate]);
  pdfDoc.setCreationDate(new Date());
  pdfDoc.setModificationDate(new Date());

  return Buffer.from(await pdfDoc.save());
}

async function encryptPdf(pdfBuffer, userPassword) {
  const uploadResp = await fetch('https://api.pdf.co/v1/file/upload/base64', {
    method:  'POST',
    headers: { 'x-api-key': process.env.PDFCO_API_KEY, 'Content-Type': 'application/json' },
    body:    JSON.stringify({ name: 'protected.pdf', file: pdfBuffer.toString('base64') }),
  });
  const uploadData = await uploadResp.json();
  if (!uploadData.url) throw new Error(`PDF.co upload failed: ${JSON.stringify(uploadData)}`);

  const encResp = await fetch('https://api.pdf.co/v1/pdf/security/add', {
    method:  'POST',
    headers: { 'x-api-key': process.env.PDFCO_API_KEY, 'Content-Type': 'application/json' },
    body:    JSON.stringify({
      url:                 uploadData.url,
      ownerPassword:       process.env.PDF_OWNER_PASSWORD,
      userPassword:        userPassword,
      EncryptionAlgorithm: 'AES256',
      async:               false,
    }),
  });
  const encData = await encResp.json();
  if (!encData.url) throw new Error(`PDF.co encryption failed: ${JSON.stringify(encData)}`);

  const dlResp = await fetch(encData.url);
  if (!dlResp.ok) throw new Error(`PDF.co download failed: HTTP ${dlResp.status}`);
  return Buffer.from(await dlResp.arrayBuffer());
}

async function alreadyProcessed(blobPath) {
  try { await head(blobPath); return true; }
  catch { return false; }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const rawBody = await getRawBody(req);
  const sig     = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('[STRIPE SIG] Failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type !== 'checkout.session.completed') {
    return res.status(200).json({ received: true, ignored: event.type });
  }

  const session      = event.data.object;
  const buyerEmail   = session.customer_details?.email || session.customer_email;
  const buyerName    = session.customer_details?.name  || 'Valued Customer';
  const txId         = session.id;
  const productId    = session.metadata?.product_id;
  const purchaseDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  console.log('[ORDER]', { txId, productId, buyerEmail, buyerName });

  if (!productId || !PRODUCTS[productId]) {
    console.error('[PRODUCT] Unknown product_id:', productId);
    return res.status(400).json({ error: 'Unknown product' });
  }

  try {
    const product    = PRODUCTS[productId];
    const deliveries = [];

    for (const pdfKey of product.pdfs) {
      const master   = MASTER_PDFS[pdfKey];
      const blobPath = `deliveries/${txId}/${master.filename}`;

      let storedUrl;
      if (await alreadyProcessed(blobPath)) {
        console.log('[IDEMPOTENT] Already processed:', master.filename);
        const meta = await head(blobPath);
        storedUrl  = meta.url;
      } else {
        console.log('[STAGE 1] Fetching master PDF:', master.filename);
        const pdfBytes = await fetchMasterPdf(master.url);

        console.log('[STAGE 2] Applying watermarks');
        const watermarked = await applyWatermarks(pdfBytes, buyerName, buyerEmail, txId, purchaseDate);

        console.log('[STAGE 3] Encrypting via PDF.co');
        const encrypted = await encryptPdf(watermarked, buyerEmail);

        console.log('[STAGE 4] Storing in blob');
        const stored = await put(blobPath, encrypted, {
          access:          'public',
          contentType:     'application/pdf',
          addRandomSuffix: false,
        });
        storedUrl = stored.url;
      }

      const expiryMs = Date.now() + 72 * 60 * 60 * 1000;
      const token    = makeDownloadToken(storedUrl, expiryMs);

      deliveries.push({
        filename:    master.filename,
        volumeLabel: master.title,
        downloadUrl: `https://www.rospexpublishing.com/api/download?token=${token}`,
      });
    }

    console.log('[STAGE 5] Sending email');
    await sendEmail(buyerEmail, buyerName, txId, purchaseDate, product, deliveries);

    console.log('[DONE]', txId);
    return res.status(200).json({ success: true });

  } catch (err) {
    console.error('[ERROR]', err.message, err.stack);
    return res.status(500).json({ error: err.message });
  }
}

async function sendEmail(buyerEmail, buyerName, txId, purchaseDate, product, deliveries) {
  const isBundle  = deliveries.length > 1;

  const buttons = deliveries.map((d, i) => `
    <tr>
      <td style="padding:0 24px ${i < deliveries.length - 1 ? '10' : '4'}px;">
        <a href="${d.downloadUrl}"
           style="display:block;background-color:#1A6B4A;color:#ffffff;padding:14px 24px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:bold;text-align:center;font-family:Arial,Helvetica,sans-serif;">
          ⬇ ${isBundle ? `Download ${d.volumeLabel} (PDF)` : 'Click here to download your e-book (PDF)'}
        </a>
      </td>
    </tr>`).join('');

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#0A1628;font-family:Georgia,serif;color:#C8D8E8;">

<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0A1628;">
<tr><td align="center" style="padding:24px 16px 40px;">

  <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

    <!-- Wordmark -->
    <tr>
      <td style="padding:0 0 6px;text-align:center;">
        <a href="https://www.rospexpublishing.com" style="text-decoration:none;">
          <span style="font-family:Georgia,serif;font-size:13px;letter-spacing:3px;text-transform:uppercase;color:#DDB865;">ROSPEX PUBLISHING</span>
        </a>
      </td>
    </tr>

    <!-- Thank you line -->
    <tr>
      <td style="padding:0 0 24px;text-align:center;">
        <p style="margin:0;font-size:15px;color:#8DADC4;">
          Thank you for your purchase from
          <a href="https://www.rospexpublishing.com" style="color:#DDB865;text-decoration:none;">Rospex Publishing</a>
        </p>
      </td>
    </tr>

    <!-- Main card -->
    <tr>
      <td>
        <table width="100%" cellpadding="0" cellspacing="0" border="0"
               style="background-color:#0F2035;border:1px solid #1E3048;border-radius:8px;">

          <!-- Cover image -->
          <tr>
            <td style="padding:28px 24px 16px;text-align:center;">
              <img src="${product.coverUrl}"
                   alt="${product.displayTitle}"
                   width="160"
                   style="max-width:160px;height:auto;border-radius:4px;display:block;margin:0 auto;" />
            </td>
          </tr>

          <!-- Book title -->
          <tr>
            <td style="padding:0 24px 24px;text-align:center;">
              <p style="margin:0 0 6px;font-size:16px;font-weight:bold;color:#DDB865;font-family:Georgia,serif;">${product.displayTitle}</p>
              <p style="margin:0;font-size:13px;color:#8DADC4;font-family:Arial,Helvetica,sans-serif;">${product.subtitle}</p>
            </td>
          </tr>

          <!-- Divider -->
          <tr><td style="padding:0 24px;"><div style="border-top:1px solid #1E3048;"></div></td></tr>

          <!-- YOUR DOWNLOAD label -->
          <tr>
            <td style="padding:20px 24px 4px;">
              <p style="margin:0 0 4px;font-size:10px;color:#6A8AA0;text-transform:uppercase;letter-spacing:2px;font-family:Arial,Helvetica,sans-serif;">Your Download</p>
              <p style="margin:0 0 16px;font-size:13px;color:#8DADC4;font-family:Arial,Helvetica,sans-serif;">Ready to read on any device, fully offline.</p>
            </td>
          </tr>

          <!-- Download button(s) -->
          ${buttons}

          <!-- Expiry note -->
          <tr>
            <td style="padding:12px 24px 24px;">
              <p style="margin:0;font-size:12px;color:#6A8AA0;line-height:1.7;font-family:Arial,Helvetica,sans-serif;">
                Your link expires in 72 hours. If you miss it, contact us at
                <a href="mailto:books@rospexpublishing.com" style="color:#DDB865;text-decoration:none;">books@rospexpublishing.com</a>
                with your order reference below and we will generate a new link for you at no charge.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>

    <!-- OPENING YOUR FILE -->
    <tr>
      <td style="padding:12px 0 0;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0"
               style="background-color:#0F2035;border:1px solid #1E3048;border-radius:8px;">
          <tr>
            <td style="padding:20px 24px;">
              <p style="margin:0 0 12px;font-size:12px;font-weight:bold;color:#DDB865;text-transform:uppercase;letter-spacing:1px;font-family:Arial,Helvetica,sans-serif;">🔒 Opening Your File</p>
              <p style="margin:0 0 10px;font-size:13px;color:#C8D8E8;line-height:1.7;font-family:Arial,Helvetica,sans-serif;">
                Your PDF is protected with AES-256 encryption. When your reader asks for a password,
                enter the email address you used for this purchase:
              </p>
              <p style="margin:0 0 14px;font-size:15px;font-weight:bold;color:#DDB865;font-family:Arial,Helvetica,sans-serif;">${buyerEmail}</p>
              <p style="margin:0;font-size:12px;color:#8DADC4;line-height:1.7;font-family:Arial,Helvetica,sans-serif;">
                We added password protection to honor your rights as a licensee and the author's rights as
                the creator. The file is otherwise fully functional: bookmarked, searchable, navigable by
                table of contents; and it opens on any device or PDF app, online or offline.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- YOUR LICENSE -->
    <tr>
      <td style="padding:12px 0 0;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0"
               style="background-color:#0F2035;border:1px solid #1E3048;border-radius:8px;">
          <tr>
            <td style="padding:20px 24px;">
              <p style="margin:0 0 12px;font-size:12px;font-weight:bold;color:#DDB865;text-transform:uppercase;letter-spacing:1px;font-family:Arial,Helvetica,sans-serif;">📋 Your License</p>
              <p style="margin:0;font-size:12px;color:#8DADC4;line-height:1.7;font-family:Arial,Helvetica,sans-serif;">
                This copy is licensed exclusively to you. It may not be shared, forwarded, or posted in
                any public space. Each file carries both visible and invisible watermarks uniquely tied
                to this purchase. They protect both your rights as a licensee and the author's rights.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Divider -->
    <tr><td style="padding:28px 0 0;"><div style="border-top:1px solid #1E3048;"></div></td></tr>

    <!-- ABOUT ROSPEX PUBLISHING -->
    <tr>
      <td style="padding:20px 0 0;">
        <p style="margin:0 0 2px;font-size:10px;color:#6A8AA0;text-transform:uppercase;letter-spacing:2px;font-family:Arial,Helvetica,sans-serif;">About Rospex Publishing</p>
        <a href="https://www.rospexpublishing.com" style="text-decoration:none;">
          <p style="margin:0 0 10px;font-size:12px;color:#DDB865;font-family:Arial,Helvetica,sans-serif;">rospexpublishing.com</p>
        </a>
        <p style="margin:0;font-size:12px;color:#8DADC4;line-height:1.7;font-family:Arial,Helvetica,sans-serif;">
          An independent digital publisher of curated science and education books in physics,
          astrophysics, cosmology, and modern science, by Russia's leading researchers,
          made accessible to readers everywhere.
        </p>
      </td>
    </tr>

    <!-- Order details -->
    <tr>
      <td style="padding:20px 0 0;">
        <p style="margin:0;font-size:12px;color:#6A8AA0;line-height:2.0;font-family:Arial,Helvetica,sans-serif;">
          Order reference: ${txId}<br>
          Purchase date: ${purchaseDate}<br>
          Questions? <a href="mailto:books@rospexpublishing.com" style="color:#DDB865;text-decoration:none;">books@rospexpublishing.com</a>
        </p>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding:20px 0 0;">
        <div style="border-top:1px solid #1E3048;margin:0 0 16px;"></div>
        <p style="margin:0;font-size:11px;color:#4A6A80;line-height:1.8;font-family:Arial,Helvetica,sans-serif;">
          Rospex Holdings LLC ·
          <a href="https://www.rospexpublishing.com" style="color:#4A6A80;text-decoration:none;">rospexpublishing.com</a><br>
          This email was sent to ${buyerEmail} following a purchase on rospexpublishing.com.
        </p>
      </td>
    </tr>

  </table>

</td></tr>
</table>

</body>
</html>`;

  await resend.emails.send({
    from:    'Rospex Publishing <books@rospexpublishing.com>',
    to:      buyerEmail,
    replyTo: 'books@rospexpublishing.com',
    subject: `Your download: ${product.name}`,
    html,
  });
}
