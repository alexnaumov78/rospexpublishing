/* ════════════════════════════════════════════
   ROSPEX PUBLISHING — Main JavaScript
   ════════════════════════════════════════════ */

/* ─── Language ─── */
let currentLang = localStorage.getItem('rp_lang') || 'en';

function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('rp_lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (el.tagName === 'INPUT' && el.placeholder !== undefined) {
      el.placeholder = t(key);
    } else {
      el.innerHTML = t(key);
    }
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  document.documentElement.lang = lang;
}

/* ─── Cart ─── */
let cart = JSON.parse(localStorage.getItem('rp_cart') || '[]');

function updateCartUI() {
  const count = cart.length;
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.classList.toggle('visible', count > 0);
  });
}

function addToCart(id, title, price, lang) {
  if (cart.find(i => i.id === id)) return;
  cart.push({ id, title, price, lang });
  localStorage.setItem('rp_cart', JSON.stringify(cart));
  updateCartUI();
  showCartAdded(title);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  localStorage.setItem('rp_cart', JSON.stringify(cart));
  updateCartUI();
  renderCartModal();
}

function showCartAdded(title) {
  const toast = document.getElementById('cart-toast');
  if (!toast) return;
  toast.textContent = '✓ Added: ' + title;
  toast.style.opacity = '1';
  setTimeout(() => { toast.style.opacity = '0'; }, 2500);
}

function renderCartModal() {
  const body = document.getElementById('cart-body');
  if (!body) return;
  if (cart.length === 0) {
    body.innerHTML = '<div class="cart-empty">' + t('modal_cart_empty') + '</div>';
    document.getElementById('cart-footer').style.display = 'none';
    return;
  }
  let html = '';
  let total = 0;
  cart.forEach(item => {
    total += parseFloat(item.price);
    html += `<div class="cart-item">
      <div class="cart-item-info">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-sub">${item.lang}</div>
      </div>
      <div class="cart-item-price">$${parseFloat(item.price).toFixed(2)}</div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" title="Remove">×</button>
    </div>`;
  });
  body.innerHTML = html;
  document.getElementById('cart-total-val').textContent = '$' + total.toFixed(2);
  document.getElementById('cart-footer').style.display = 'flex';
}

function openCartModal() {
  document.getElementById('cart-modal').classList.add('open');
  renderCartModal();
}
function closeCartModal() { document.getElementById('cart-modal').classList.remove('open'); }

/* ─── Buy Modal ─── */
function openBuyModal(title, googleUrl) {
  document.getElementById('modal-book-title').textContent = title;
  document.getElementById('modal-google-link').href = googleUrl || '#';
  document.getElementById('buy-modal').classList.add('open');
}
function closeBuyModal() { document.getElementById('buy-modal').classList.remove('open'); }

/* ─── Notify Modal ─── */
function openNotifyModal(book) {
  document.getElementById('notify-modal-book').textContent = '📖 ' + book;
  document.getElementById('notify-modal-confirm').style.display = 'none';
  document.getElementById('notify-modal-email').value = '';
  document.getElementById('notify-modal').classList.add('open');
}
function closeNotifyModal() { document.getElementById('notify-modal').classList.remove('open'); }

function submitNotifyModal() {
  const email = document.getElementById('notify-modal-email').value;
  if (!email || !email.includes('@')) return;
  document.getElementById('notify-modal-confirm').style.display = 'block';
}

function submitNotify() {
  const email = document.getElementById('notify-email-input').value;
  if (!email || !email.includes('@')) return;
  document.getElementById('notify-confirm-msg').style.display = 'block';
  document.getElementById('notify-email-input').value = '';
}

/* ─── PDF Preview ─── */
let pdfDoc = null, pdfCurrentPage = 1, pdfTotalPages = 50;

async function openPreview(pdfPath, bookTitle) {
  document.getElementById('preview-modal').classList.add('open');
  document.getElementById('preview-title').textContent = bookTitle + ' — Preview';
  const container = document.getElementById('pdf-canvas-container');
  container.innerHTML = '<div style="padding:40px;text-align:center;color:#7A93AA;font-size:14px;">Loading preview…</div>';

  if (typeof pdfjsLib === 'undefined') {
    container.innerHTML = `<div style="padding:40px;text-align:center;color:#7A93AA;">
      <p style="font-size:15px;color:#DDB865;margin-bottom:12px;">📄 Preview coming soon</p>
      <p style="font-size:13px;">The preview PDF will be available here shortly.<br>You can browse or purchase the full book in the meantime.</p>
    </div>`;
    return;
  }
  try {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    pdfDoc = await pdfjsLib.getDocument(pdfPath).promise;
    pdfTotalPages = Math.min(pdfDoc.numPages, 50);
    pdfCurrentPage = 1;
    renderPDFPage(1);
  } catch(e) {
    container.innerHTML = `<div style="padding:40px;text-align:center;color:#7A93AA;">
      <p style="font-size:15px;color:#DDB865;margin-bottom:12px;">📄 Preview not yet available</p>
      <p style="font-size:13px;">The preview file will be placed here before launch.<br>Purchase the full book now to read immediately.</p>
    </div>`;
  }
}

async function renderPDFPage(pageNum) {
  if (!pdfDoc) return;
  const page = await pdfDoc.getPage(pageNum);
  const container = document.getElementById('pdf-canvas-container');
  const viewport = page.getViewport({ scale: 1.4 });
  container.innerHTML = '';
  const canvas = document.createElement('canvas');
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  container.appendChild(canvas);
  await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
  document.getElementById('pdf-page-info').textContent = `Page ${pageNum} of ${pdfTotalPages} (preview)`;
}

function pdfPrevPage() {
  if (pdfCurrentPage <= 1) return;
  pdfCurrentPage--;
  renderPDFPage(pdfCurrentPage);
}
function pdfNextPage() {
  if (pdfCurrentPage >= pdfTotalPages) return;
  pdfCurrentPage++;
  renderPDFPage(pdfCurrentPage);
}

function closePreview() { document.getElementById('preview-modal').classList.remove('open'); }

/* ─── Init ─── */
document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
  updateCartUI();

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
  });

  document.querySelectorAll('.modal-backdrop').forEach(el => {
    el.addEventListener('click', e => { if (e.target === el) el.classList.remove('open'); });
  });

  const year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();
});
