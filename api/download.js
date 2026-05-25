import { createHmac } from 'crypto';

export default async function handler(req, res) {
  const { token } = req.query;
  if (!token) return res.status(400).send('Missing token.');

  try {
    const dotIdx = token.lastIndexOf('.');
    if (dotIdx === -1) return res.status(400).send('Invalid token.');

    const payloadB64 = token.slice(0, dotIdx);
    const sig        = token.slice(dotIdx + 1);
    const payload    = Buffer.from(payloadB64, 'base64url').toString();

    const expectedSig = createHmac('sha256', process.env.PDF_OWNER_PASSWORD)
      .update(payload)
      .digest('hex');

    if (sig !== expectedSig) return res.status(403).send('Invalid download link.');

    const lastPipe = payload.lastIndexOf('|');
    const blobUrl  = payload.slice(0, lastPipe);
    const expiry   = parseInt(payload.slice(lastPipe + 1));

    if (isNaN(expiry) || Date.now() > expiry) {
      return res.status(410).send(
        'This download link has expired (72-hour limit). ' +
        'Please contact books@rospexpublishing.com with your order reference.'
      );
    }

    const pdfResp = await fetch(blobUrl, {
  headers: { Authorization: `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}` }
});
    if (!pdfResp.ok) return res.status(404).send('File not found.');

    const filename = decodeURIComponent(blobUrl.split('/').pop().split('?')[0]);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

    const buf = await pdfResp.arrayBuffer();
    res.send(Buffer.from(buf));

  } catch (err) {
    console.error('Download error:', err);
    res.status(500).send('An error occurred. Please contact books@rospexpublishing.com.');
  }
}
