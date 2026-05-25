import Stripe from 'stripe';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { Resend } from 'resend';
import { put, head } from '@vercel/blob';
import { createHmac } from 'crypto';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const resend  = new Resend(process.env.RESEND_API_KEY);

const MASTER_PDFS = {
  'qft-vol1-ru': {
    url:      'https://wuoucjncdd6n4che.public.blob.vercel-storage.com/QFT_D-Naumov_Vol1_RUS_light-qfg9827med5x1g29Jd3IAU6ZpTh1de.pdf',
    filename: 'QFT-Volume-I-Naumov.pdf',
    title:    'Квантовая теория поля, Том I',
  },
  'qft-vol2-ru': {
    url:      'https://wuoucjncdd6n4che.public.blob.vercel-storage.com/QFT_D-Naumov_Vol2_RUS_light-nEn9BwZkJuZ7XMQ7SqjxrBmvc3BMXq.pdf',
    filename: 'QFT-Volume-II-Naumov.pdf',
    title:    'Квантовая теория поля, Том II',
  },
};

const PRODUCTS = {
  'qft-vol1-ru':   { pdfs: ['qft-vol1-ru'],                name: 'Quantum Field Theory, Volume I (Russian Edition)' },
  'qft-vol2-ru':   { pdfs: ['qft-vol2-ru'],                name: 'Quantum Field Theory, Volume II (Russian Edition)' },
  'qft-bundle-ru': { pdfs: ['qft-vol1-ru', 'qft-vol2-ru'], name: 'Quantum Field Theory, Volumes I & II (Russian Edition)' },
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
  // Step 1: upload to PDF.co
  const uploadResp = await fetch('https://api.pdf.co/v1/file/upload/base64', {
    method:  'POST',
    headers: { 'x-api-key': process.env.PDFCO_API_KEY, 'Content-Type': 'application/json' },
    body:    JSON.stringify({
      name: 'protected.pdf',
      file: pdfBuffer.toString('base64'),
    }),
  });
  const uploadData = await uploadResp.json();
  if (!uploadData.url) throw new Error(`PDF.co upload failed: ${JSON.stringify(uploadData)}`);

  // Step 2: request AES-256 encryption
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

  // Step 3: download encrypted PDF
  const dlResp = await fetch(encData.url);
  if (!dlResp.ok) throw new Error(`PDF.co download failed: HTTP ${dlResp.status}`);
  return Buffer.from(await dlResp.arrayBuffer());
}

async function alreadyProcessed(blobPath) {
  try {
    await head(blobPath);
    return true;
  } catch {
    return false;
  }
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
        title:       master.title,
        downloadUrl: `https://www.rospexpublishing.com/api/download?token=${token}`,
      });
    }

    console.log('[STAGE 5] Sending email');
    await sendEmail(buyerEmail, buyerName, txId, purchaseDate, product.name, deliveries);

    console.log('[DONE]', txId);
    return res.status(200).json({ success: true });

  } catch (err) {
    console.error('[ERROR]', err.message, err.stack);
    return res.status(500).json({ error: err.message });
  }
}

async function sendEmail(buyerEmail, buyerName, txId, purchaseDate, productName, deliveries) {
  const buttons = deliveries.map(d => `
    <p style="margin:0 0 16px;">
      <a href="${d.downloadUrl}"
         style="display:inline-block;background:#1A6B4A;color:#fff;padding:13px 28px;border-radius:6px;text-decoration:none;font-weight:600;font-size:14px;">
        ⬇ ${d.filename}
      </a><br>
      <span style="font-size:11px;color:#6A8AA0;">Link expires in 72 hours</span>
    </p>`).join('');

  const html = `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#0A1628;font-family:Georgia,serif;color:#C8D8E8;">
<div style="max-width:600px;margin:0 auto;padding:40px 24px;">
  <h1 style="color:#DDB865;font-size:22px;margin:0 0 8px;">Your purchase is ready</h1>
  <p style="color:#8DADC4;font-size:14px;margin:0 0 32px;">Thank you, ${buyerName}. Your files are ready to download.</p>
  <div style="background:#0F2035;border:1px solid #1E3048;border-radius:8px;padding:24px;margin:0 0 20px;">
    <p style="margin:0 0 4px;font-size:11px;color:#6A8AA0;text-transform:uppercase;letter-spacing:1px;">YOUR PURCHASE</p>
    <p style="margin:0 0 20px;font-size:15px;color:#C8D8E8;">${productName}</p>
    ${buttons}
  </div>
  <div style="background:#0F2035;border:1px solid #1E3048;border-radius:8px;padding:18px;margin:0 0 20px;">
    <p style="margin:0 0 6px;font-size:13px;color:#DDB865;">🔒 Your PDF password</p>
    <p style="margin:0;font-size:13px;color:#C8D8E8;">Your PDF is protected. When prompted, enter the email address you used for this purchase:<br>
    <strong style="color:#DDB865;">${buyerEmail}</strong></p>
  </div>
  <div style="background:#0F2035;border:1px solid #1E3048;border-radius:8px;padding:18px;margin:0 0 24px;">
    <p style="margin:0;font-size:12px;color:#8DADC4;line-height:1.7;">
      This copy is licensed to you personally. Each copy carries a unique identifier
      linked to this purchase. We ask that you keep it for your own use.
    </p>
  </div>
  <p style="font-size:12px;color:#6A8AA0;line-height:1.8;">
    Order reference: ${txId}<br>Purchase date: ${purchaseDate}<br>
    Questions? <a href="mailto:alex.naumov@rospex.com" style="color:#DDB865;">alex.naumov@rospex.com</a>
  </p>
  <hr style="border:none;border-top:1px solid #1E3048;margin:24px 0;">
  <p style="font-size:11px;color:#4A6A80;">Rospex Holdings LLC · rospexpublishing.com<br>
  This email was sent to ${buyerEmail} following a purchase on rospexpublishing.com.</p>
</div></body></html>`;

  // NOTE: 'from' uses onboarding@resend.dev until Resend domain verification completes.
  // Switch to 'books@rospexpublishing.com' once Resend shows "Verified".
  await resend.emails.send({
    from:    'Rospex Publishing <onboarding@resend.dev>',
    to:      buyerEmail,
    replyTo: 'alex.naumov@rospex.com',
    subject: `Your download: ${productName}`,
    html,
  });
}
