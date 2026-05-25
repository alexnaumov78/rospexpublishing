/* ════════════════════════════════════════════
   ROSPEX PUBLISHING — Main JavaScript
   ════════════════════════════════════════════ */

/* ─── i18n ─── */
let currentLang = localStorage.getItem('rp_lang') || 'en';
function t(key) { return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || key; }

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('rp_lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  document.documentElement.lang = lang;
}

/* ─── Read More / Read Less (book descriptions) ─── */
function toggleDesc(btn) {
  const block = btn.closest('.expandable-desc');
  const extra = block.querySelector('.desc-extra');
  if (!extra) return;
  const isHidden = extra.style.display === 'none' || extra.style.display === '';
  extra.style.display = isHidden ? 'block' : 'none';
  const span = btn.querySelector('[data-i18n]');
  if (span) {
    const newKey = isHidden ? 'read_less' : 'read_more';
    span.setAttribute('data-i18n', newKey);
    span.textContent = t(newKey);
  }
}

/* ─── Notify Modal ─── */
function openNotifyModal(bookTitle) {
  const modal = document.getElementById('notify-modal');
  if (!modal) return;
  document.getElementById('notify-modal-book').textContent = bookTitle;
  document.getElementById('notify-modal-confirm').style.display = 'none';
  document.getElementById('notify-modal-email').value = '';
  modal.classList.add('open');
}
function closeNotifyModal() { const m = document.getElementById('notify-modal'); if (m) m.classList.remove('open'); }
function submitNotifyModal() {
  const email = document.getElementById('notify-modal-email').value;
  if (!email || !email.includes('@')) return;
  document.getElementById('notify-modal-confirm').style.display = 'block';
}

/* Inline notify form */
function submitNotify() {
  const email = document.getElementById('notify-email-input').value;
  if (!email || !email.includes('@')) return;
  const msg = document.getElementById('notify-confirm-msg');
  if (msg) msg.style.display = 'block';
  document.getElementById('notify-email-input').value = '';
}

/* ─── Learn More Modal ─── */
function openLearnMoreModal() {
  const m = document.getElementById('learn-more-modal');
  if (m) m.classList.add('open');
}
function closeLearnMoreModal() {
  const m = document.getElementById('learn-more-modal');
  if (m) m.classList.remove('open');
}

/* ─── PDF Preview ─── */
let pdfDoc = null, pdfCurrentPage = 1, pdfTotalPages = 50;

async function openPreview(pdfPath, bookTitle) {
  const modal = document.getElementById('preview-modal');
  if (!modal) return;
  modal.classList.add('open');
  document.getElementById('preview-title').textContent = bookTitle + ' - Preview';
  const container = document.getElementById('pdf-canvas-container');
  container.innerHTML = '<div style="padding:36px;text-align:center;color:#8DADC4;font-size:13px;">Loading preview…</div>';

  if (typeof pdfjsLib === 'undefined') {
    container.innerHTML = `<div style="padding:36px;text-align:center;color:#8DADC4;">
      <p style="font-size:14px;color:#DDB865;margin-bottom:10px;">Preview coming soon</p>
      <p style="font-size:12px;">The preview PDF will be available here shortly.</p>
    </div>`;
    return;
  }
  try {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    pdfDoc = await pdfjsLib.getDocument(pdfPath).promise;
    pdfTotalPages = Math.min(pdfDoc.numPages, 50);
    pdfCurrentPage = 1;
    await renderPDFPage(1);
  } catch(e) {
    container.innerHTML = `<div style="padding:36px;text-align:center;color:#8DADC4;">
      <p style="font-size:14px;color:#DDB865;margin-bottom:10px;">Preview not yet available</p>
      <p style="font-size:12px;">The preview file will be placed here before launch.</p>
    </div>`;
  }
}
async function renderPDFPage(pageNum) {
  if (!pdfDoc) return;
  const page = await pdfDoc.getPage(pageNum);
  const container = document.getElementById('pdf-canvas-container');
  const viewport = page.getViewport({ scale: 1.3 });
  container.innerHTML = '';
  const canvas = document.createElement('canvas');
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  container.appendChild(canvas);
  await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
  document.getElementById('pdf-page-info').textContent = 'Page ' + pageNum + ' of ' + pdfTotalPages + ' (preview)';
}
function pdfPrevPage() { if (pdfCurrentPage > 1) { pdfCurrentPage--; renderPDFPage(pdfCurrentPage); } }
function pdfNextPage() { if (pdfCurrentPage < pdfTotalPages) { pdfCurrentPage++; renderPDFPage(pdfCurrentPage); } }
function closePreview() { const m = document.getElementById('preview-modal'); if (m) m.classList.remove('open'); }

/* ─── Contact Form ─── */
const FORMSPREE_FORM_ID = 'YOUR_FORM_ID';  // <- REPLACE with your Formspree ID
const CONTACT_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

async function submitContactForm(event) {
  event.preventDefault();
  const form = event.target;
  const status = document.getElementById('form-status');
  const submitBtn = form.querySelector('button[type="submit"]');

  const fname   = form.querySelector('[name="first_name"]').value.trim();
  const lname   = form.querySelector('[name="last_name"]').value.trim();
  const email   = form.querySelector('[name="email"]').value.trim();
  const reason  = form.querySelector('[name="reason"]').value;
  const message = form.querySelector('[name="message"]').value.trim();

  if (!fname || !lname || !email || !reason || !message) {
    status.className = 'form-status error';
    status.textContent = 'Please fill in all required fields.';
    return false;
  }
  if (!email.includes('@')) {
    status.className = 'form-status error';
    status.textContent = 'Please enter a valid email address.';
    return false;
  }

  if (FORMSPREE_FORM_ID === 'YOUR_FORM_ID') {
    const subjectFull = `[${reason}] ${form.querySelector('[name="subject"]').value || 'Contact from rospexpublishing.com'}`;
    const body = `From: ${fname} ${lname} <${email}>%0D%0AReason: ${reason}%0D%0A%0D%0A${message}`;
    window.location.href = `mailto:alex.naumov@rospex.com?subject=${encodeURIComponent(subjectFull)}&body=${body}`;
    status.className = 'form-status success';
    status.textContent = t('contact_success');
    return false;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = '…';
  try {
    const formData = new FormData(form);
    formData.append('_subject', `[${reason}] Contact from rospexpublishing.com`);
    formData.append('_replyto', email);
    const response = await fetch(CONTACT_ENDPOINT, {
      method: 'POST', body: formData,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      status.className = 'form-status success';
      status.textContent = t('contact_success');
      form.reset();
    } else { throw new Error('fail'); }
  } catch (err) {
    status.className = 'form-status error';
    status.textContent = t('contact_error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = t('contact_submit');
  }
  return false;
}

/* ─── Init ─── */
document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
  });
  document.querySelectorAll('.modal-backdrop').forEach(el => {
    el.addEventListener('click', e => { if (e.target === el) el.classList.remove('open'); });
  });
  const year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();
  const contactForm = document.getElementById('contact-form');
  if (contactForm) contactForm.addEventListener('submit', submitContactForm);
});
