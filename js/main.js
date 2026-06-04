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
  /* Re-render reviews since their content is language-dependent and not handled by data-i18n. */
  renderAllReviewContainers();
}

/* ─── Reviews rendering ─── */
/* A container marked <div class="reviews-grid" data-reviews-for="..."></div> will be populated.
   data-reviews-for accepts: "all" (everything), or a comma-separated list matching the `books`
   field on each review object (e.g. "qft-vol1", "all-qft"). A review with "all-qft" matches any
   QFT-related filter. */
function reviewMatchesFilter(review, filter) {
  if (!filter || filter === 'all') return true;
  const wanted = filter.split(',').map(s => s.trim());
  if (review.books.includes('all-qft') && wanted.some(w => w.startsWith('qft'))) return true;
  return review.books.some(b => wanted.includes(b));
}

function renderStars(rating) {
  /* 5 gold-filled stars for rating=5; partials use grey for missing.
     SVG path is a clean star — keeps stroke crisp at any size. */
  const starSvg = (filled) => {
    const color = filled ? 'var(--gold)' : 'var(--border)';
    return `<svg class="review-star" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="${color}" d="M12 2.5l2.94 6.34 6.96.62-5.27 4.64 1.6 6.82L12 17.4l-6.23 3.52 1.6-6.82L2.1 9.46l6.96-.62z"/>
    </svg>`;
  };
  let out = '<div class="review-stars" aria-label="' + rating + ' out of 5">';
  for (let i = 1; i <= 5; i++) out += starSvg(i <= rating);
  out += '</div>';
  return out;
}

function formatReviewDate(iso, lang) {
  /* "2026-05-25" → "May 25, 2026" (en) or "25 мая 2026" (ru) */
  if (!iso || !/^\d{4}-\d{2}-\d{2}$/.test(iso)) return iso || '';
  const [y, m, d] = iso.split('-').map(Number);
  const months_en = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const months_ru = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
  if (lang === 'ru') return `${d} ${months_ru[m-1]} ${y}`;
  return `${months_en[m-1]} ${d}, ${y}`;
}

function renderReviewCard(review, lang) {
  const isRu = lang === 'ru';
  const quote = isRu ? review.quote_ru : review.quote_en;
  const full  = isRu ? review.full_ru  : review.full_en;
  const authorName = isRu ? review.author_ru : review.author;
  const affiliation = isRu ? review.affiliation_ru : review.affiliation_en;
  const sourceLabel = isRu ? (review.source_label_ru || 'Оригинал') : (review.source_label_en || 'Original');
  const dateStr = formatReviewDate(review.date, lang);
  const showTranslatedNote = review.original_lang && review.original_lang !== lang;
  const translatedNote = showTranslatedNote
    ? `<div class="review-translated-note">${t('review_translated_note')}</div>`
    : '';
  /* Name → personal site if URL provided, otherwise plain text. */
  const authorHtml = review.personal_url
    ? `<a class="review-author" href="${review.personal_url}" target="_blank" rel="noopener noreferrer">${authorName}</a>`
    : `<span class="review-author">${authorName}</span>`;
  /* Small link below affiliation showing the personal-site host. */
  const personalLinkHtml = review.personal_url
    ? `<a class="review-personal-link" href="${review.personal_url}" target="_blank" rel="noopener noreferrer">
         <svg class="review-link-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
         <span>${review.personal_host}</span>
       </a>`
    : '';
  /* Source link near the toggle. */
  const sourceLinkHtml = review.source_url
    ? `<a class="review-source-link" href="${review.source_url}" target="_blank" rel="noopener noreferrer">
         <svg class="review-link-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zM19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z"/></svg>
         <span>${sourceLabel}</span>
       </a>`
    : '';
  const dateBlock = dateStr ? `<div class="review-date">${dateStr}</div>` : '';
  return `
    <article class="review-card" data-review-id="${review.id}">
      ${renderStars(review.rating)}
      <blockquote class="review-quote">${quote}</blockquote>
      <div class="review-full" hidden>${full}${translatedNote}</div>
      <div class="review-actions">
        <button type="button" class="review-toggle" onclick="toggleReview(this)">
          <span class="review-toggle-text">${t('review_read_full')}</span>
          <span class="review-toggle-chevron" aria-hidden="true">▾</span>
        </button>
        ${sourceLinkHtml}
      </div>
      <div class="review-meta">
        ${authorHtml}
        <div class="review-affiliation">${affiliation}</div>
        ${personalLinkHtml}
        ${dateBlock}
      </div>
    </article>
  `;
}

function renderReviewsInto(container) {
  const filter = container.getAttribute('data-reviews-for') || 'all';
  const matched = (typeof REVIEWS !== 'undefined' ? REVIEWS : [])
    .filter(r => reviewMatchesFilter(r, filter))
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''));   /* newest first; empty dates sort last */
  if (matched.length === 0) {
    container.innerHTML = '';
    /* Hide the parent section gracefully when no review is applicable. */
    const section = container.closest('.reviews-section, .reviews-section-book');
    if (section) section.style.display = 'none';
    return;
  }
  /* Show the section in case it was previously hidden. */
  const section = container.closest('.reviews-section, .reviews-section-book');
  if (section) section.style.display = '';
  container.innerHTML = matched.map(r => renderReviewCard(r, currentLang)).join('');
  container.setAttribute('data-count', String(matched.length));
}

function renderAllReviewContainers() {
  document.querySelectorAll('.reviews-grid').forEach(renderReviewsInto);
  /* Also render the average rating into any .book-rating containers on this page. */
  renderAllBookRatings();
}

/* ─── Book card rating display ─── */
/* For each .book-rating[data-rating-for="…"], compute the average of all matching
   REVIEWS and render a "5.0 ★" pattern. Used on the homepage book cards. */
function renderAllBookRatings() {
  document.querySelectorAll('.book-rating').forEach(el => {
    const bookId = el.getAttribute('data-rating-for');
    if (!bookId) return;
    const matched = (typeof REVIEWS !== 'undefined' ? REVIEWS : [])
      .filter(r => reviewMatchesFilter(r, bookId));
    if (matched.length === 0) {
      el.innerHTML = '';
      return;
    }
    const avg = matched.reduce((s, r) => s + (r.rating || 0), 0) / matched.length;
    const display = avg.toFixed(1);  /* "5.0" */
    el.innerHTML = `
      <span class="book-rating-value">${display}</span>
      <svg class="book-rating-star" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M12 2.5l2.94 6.34 6.96.62-5.27 4.64 1.6 6.82L12 17.4l-6.23 3.52 1.6-6.82L2.1 9.46l6.96-.62z"/>
      </svg>
      <span class="book-rating-count">(${matched.length})</span>
    `;
  });
}

function toggleReview(btn) {
  const card = btn.closest('.review-card');
  const full = card.querySelector('.review-full');
  const textSpan = btn.querySelector('.review-toggle-text');
  const isHidden = full.hasAttribute('hidden');
  if (isHidden) {
    full.removeAttribute('hidden');
    btn.classList.add('open');
    textSpan.textContent = t('review_read_less');
  } else {
    full.setAttribute('hidden', '');
    btn.classList.remove('open');
    textSpan.textContent = t('review_read_full');
  }
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

  /* Block right-click / drag inside the preview region (anti-copy deterrent). */
  if (!container.dataset.guarded) {
    container.addEventListener('contextmenu', e => e.preventDefault());
    container.addEventListener('dragstart', e => e.preventDefault());
    container.dataset.guarded = '1';
  }

  if (typeof pdfjsLib === 'undefined') {
    container.innerHTML = `<div style="padding:36px;text-align:center;color:#8DADC4;">
      <p style="font-size:14px;color:#DDB865;margin-bottom:10px;">Preview unavailable</p>
      <p style="font-size:12px;">The preview viewer could not load. Please check your connection and try again.</p>
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
      <p style="font-size:14px;color:#DDB865;margin-bottom:10px;">Preview unavailable</p>
      <p style="font-size:12px;">We couldn't load this preview right now. Please try again later.</p>
    </div>`;
  }
}
async function renderPDFPage(pageNum) {
  if (!pdfDoc) return;
  const page = await pdfDoc.getPage(pageNum);
  const container = document.getElementById('pdf-canvas-container');
  container.innerHTML = '';
  const base = page.getViewport({ scale: 1 });

  /* Fit the WHOLE page within the modal — scale to whichever of width or height
     is the binding constraint, so the page is fully visible with no vertical
     scroll on any screen. */
  const availW = (container.clientWidth || 640) - 2;

  /* Available height = 94vh minus the modal's fixed overhead (padding + title +
     controls + body margin). Computed from stable elements so it is correct even
     on the first render, when the body still holds the short "Loading…" text and
     measuring the body directly would be misleading. */
  let availH = Math.round((window.innerHeight || 800) * 0.94) - 130;
  const modal = container.closest('.preview-modal');
  const body = container.closest('.modal-body');
  if (modal) {
    const ms = getComputedStyle(modal);
    const ovh = (el) => {
      if (!el) return 0;
      const s = getComputedStyle(el);
      return el.getBoundingClientRect().height + parseFloat(s.marginTop || 0) + parseFloat(s.marginBottom || 0);
    };
    const padV = parseFloat(ms.paddingTop) + parseFloat(ms.paddingBottom);
    const titleEl = modal.querySelector('#preview-title');
    const controlsEl = modal.querySelector('.preview-controls');
    const bodyMt = body ? parseFloat(getComputedStyle(body).marginTop || 0) : 0;
    availH = Math.round((window.innerHeight || 800) * 0.94) - padV - ovh(titleEl) - ovh(controlsEl) - bodyMt - 8;
  }

  const scale = Math.min(availW / base.width, availH / base.height, 2);
  const dpr = window.devicePixelRatio || 1;
  const viewport = page.getViewport({ scale });
  const canvas = document.createElement('canvas');
  canvas.width = Math.floor(viewport.width * dpr);
  canvas.height = Math.floor(viewport.height * dpr);
  canvas.style.width = Math.floor(viewport.width) + 'px';
  canvas.style.height = Math.floor(viewport.height) + 'px';
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  container.appendChild(canvas);
  await page.render({ canvasContext: ctx, viewport }).promise;
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
  renderAllReviewContainers();
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
