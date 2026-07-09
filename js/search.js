/* ════════════════════════════════════════════════════════════════════════
   ROSPEX PUBLISHING — Catalog search (client-side, zero dependencies)

   Loads after i18n.js, main.js and catalog-data.js, so it can use:
     TRANSLATIONS, currentLang, t()   (from i18n.js / main.js)
     CATALOG_BOOKS                     (from catalog-data.js)

   Features: bilingual (EN+RU indexed together), accent-insensitive, prefix +
   substring + typo-tolerant (bounded Levenshtein) matching, a small synonym map,
   stopword filtering, weighted field ranking, category-grouped results with
   match highlighting. Static category cards stay in the HTML (SEO) and are just
   hidden while searching.
   ════════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var MIN_CHARS = 2;

  /* Small synonym / abbreviation map (normalized keys). Values expand the query. */
  var SYNONYMS = {
    qft: ["quantum", "field", "theory"], ктп: ["квантовая", "теория", "поля"],
    qed: ["quantum", "electrodynamics"], кэд: ["квантовая", "электродинамика"],
    sm: ["standard", "model"], gr: ["relativity"],
    math: ["mathematics"], maths: ["mathematics"], мат: ["математика"],
    nsu: ["novosibirsk"], нгу: ["новосибирск"],
    bio: ["biophysics", "biology"], био: ["биофизика", "биология"],
    qm: ["quantum", "mechanics"]
  };

  /* ── text utilities ──────────────────────────────────────────────────── */
  function normalize(s) {
    return (s == null ? "" : String(s))
      .normalize("NFD").replace(/[̀-ͯ]/g, "") // strip accents
      .replace(/ё/g, "е").toLowerCase();
  }
  /* stopwords (EN + RU) — kept out of the index and queries so words like
     "the" / "of" / "и" don't create spurious matches (e.g. "theory"→"the"). */
  var STOPWORDS = {
    the:1, of:1, in:1, on:1, for:1, and:1, to:1, an:1, from:1, with:1, by:1, as:1, at:1, or:1, its:1,
    во:1, по:1, на:1, для:1, от:1, до:1, из:1, за:1, не:1, об:1, же:1
  };
  function tokenize(s) {
    return (normalize(s).match(/[\p{L}\p{N}]+/gu) || [])
      .filter(function (x) { return x.length > 1 && !STOPWORDS[x]; });
  }
  function escapeHtml(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  /* bounded Levenshtein: returns max+1 if distance exceeds max */
  function lev(a, b, max) {
    var la = a.length, lb = b.length;
    if (Math.abs(la - lb) > max) return max + 1;
    var prev = []; for (var j = 0; j <= lb; j++) prev[j] = j;
    for (var i = 1; i <= la; i++) {
      var cur = [i], best = i;
      for (var k = 1; k <= lb; k++) {
        var cost = a.charAt(i - 1) === b.charAt(k - 1) ? 0 : 1;
        var v = Math.min(prev[k] + 1, cur[k - 1] + 1, prev[k - 1] + cost);
        cur[k] = v; if (v < best) best = v;
      }
      if (best > max) return max + 1;
      prev = cur;
    }
    return prev[lb];
  }

  /* how well a single query form matches one field token: 0..1 */
  function tokenScore(q, f) {
    if (q === f) return 1;
    if (q.length >= 2 && f.indexOf(q) === 0) return 0.9;      // prefix: quant→quantum
    if (f.length >= 4 && q.indexOf(f) === 0) return 0.8;      // query longer (plural): quantums→quantum
    if (q.length >= 4 && f.indexOf(q) !== -1) return 0.7;     // substring (min 4 avoids short-token noise)
    var th = q.length >= 11 ? 2 : (q.length >= 4 ? 1 : 0);    // typo tolerance: 1 edit, 2 only for long words
    if (th > 0 && Math.abs(q.length - f.length) <= th) {
      var d = lev(q, f, th); if (d <= th) return 0.6 - 0.1 * (d - 1);
    }
    return 0;
  }

  /* ── build the index once ────────────────────────────────────────────── */
  var FIELD_WEIGHTS = { title: 3.0, author: 2.6, kw: 2.0, cat: 1.1, audience: 0.8 };
  var INDEX = [];
  function tr(lang, key) { return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || ""; }

  function buildIndex() {
    INDEX = CATALOG_BOOKS.map(function (b) {
      var catEn = tr("en", "cat_" + b.cat + "_name"), catRu = tr("ru", "cat_" + b.cat + "_name");
      var audKey = b.audience === "popular" ? "audience_popular" : "audience_textbook";
      return {
        book: b,
        fields: {
          title: tokenize(b.title_en + " " + b.title_ru),
          author: tokenize(b.author_en + " " + b.author_ru),
          kw: tokenize((b.kw_en || "") + " " + (b.kw_ru || "")),
          cat: tokenize(catEn + " " + catRu),
          audience: tokenize(tr("en", audKey) + " " + tr("ru", audKey))
        },
        titleNorm: normalize(b.title_en + " ¦ " + b.title_ru + " ¦ " + b.author_en + " ¦ " + b.author_ru)
      };
    });
  }

  function scoreBook(entry, qForms, qNorm) {
    var total = 0;
    /* AND semantics: every query token must match something */
    for (var i = 0; i < qForms.length; i++) {
      var forms = qForms[i];          // [original, ...synonyms]
      var bestForToken = 0;
      for (var f = 0; f < forms.length; f++) {
        var q = forms[f];
        for (var field in FIELD_WEIGHTS) {
          var toks = entry.fields[field], w = FIELD_WEIGHTS[field];
          for (var k = 0; k < toks.length; k++) {
            var s = tokenScore(q, toks[k]) * w;
            if (s > bestForToken) bestForToken = s;
          }
        }
      }
      if (bestForToken === 0) return 0;   // this query token matched nothing → drop book
      total += bestForToken;
    }
    if (qNorm && entry.titleNorm.indexOf(qNorm) !== -1) total += 4; // exact phrase bonus
    return total;
  }

  function search(query) {
    var raw = tokenize(query);
    if (!raw.length) return [];
    var qForms = raw.map(function (tk) {
      var syn = SYNONYMS[tk]; return syn ? [tk].concat(syn) : [tk];
    });
    var qNorm = normalize(query).replace(/\s+/g, " ").trim();
    var out = [];
    for (var i = 0; i < INDEX.length; i++) {
      var sc = scoreBook(INDEX[i], qForms, qNorm);
      if (sc > 0) out.push({ book: INDEX[i].book, score: sc });
    }
    out.sort(function (a, b) { return b.score - a.score || a.book.title_en.localeCompare(b.book.title_en); });
    return out;
  }

  /* ── rendering ───────────────────────────────────────────────────────── */
  function titleOf(b) { return currentLang === "ru" ? b.title_ru : b.title_en; }
  function authorOf(b) { return currentLang === "ru" ? b.author_ru : b.author_en; }

  function highlight(text, rawTokens) {
    var esc = escapeHtml(text);
    var toks = rawTokens.filter(function (x) { return x.length >= 2; })
      .sort(function (a, b) { return b.length - a.length; })
      .map(function (x) { return x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); });
    if (!toks.length) return esc;
    try {
      var re = new RegExp("(" + toks.join("|") + ")", "gi");
      return esc.replace(re, "<mark>$1</mark>");
    } catch (e) { return esc; }
  }

  function priceHtml(b) {
    if (b.coming) return '<span class="price-coming">' + escapeHtml(b.price) + "</span>";
    var old = b.priceOld
      ? '<span style="text-decoration:line-through;color:var(--muted);font-size:0.75em;margin-right:5px;font-weight:normal">' + escapeHtml(b.priceOld) + "</span>"
      : "";
    return '<div class="book-price">' + old + escapeHtml(b.price) + "</div>";
  }

  function cardHtml(b, rawTokens) {
    var audClass = b.audience === "popular" ? "badge-audience badge-audience-pop" : "badge-audience";
    var audLabel = t(b.audience === "popular" ? "audience_popular" : "audience_textbook");
    var badges =
      '<span class="badge badge-ru">' + t("lang_val_ru") + "</span>" +
      '<span class="' + audClass + '">' + audLabel + "</span>";
    var inner =
      '<div class="book-cover"><img src="' + b.cover + '" alt="' + escapeHtml(titleOf(b)) + '" loading="lazy">' +
        (b.coming ? '<div class="coming-overlay">' + t("coming_label") + "</div>" : "") + "</div>" +
      '<div class="book-body">' +
        '<div class="book-badges">' + badges + "</div>" +
        '<div class="book-title">' + highlight(titleOf(b), rawTokens) + "</div>" +
        '<div class="book-author">' + highlight(authorOf(b), rawTokens) + "</div>" +
        '<div class="book-footer">' + priceHtml(b) + "</div>" +
      "</div>";
    if (b.coming || !b.url) return '<div class="book-card" style="opacity:.9">' + inner + "</div>";
    return '<a href="' + b.url + '" class="book-card book-card-link">' + inner + "</a>";
  }

  function render(query, results, rawTokens, dom) {
    if (!results.length) {
      var chips = ["c1", "c2", "c3", "c4", "c5", "c6"].map(function (c) {
        return '<button type="button" class="cat-chip" data-cat="' + c + '">' + t("cat_" + c + "_name") + "</button>";
      }).join("");
      dom.results.innerHTML =
        '<div class="search-empty"><p>' + t("search_no_results") + "</p>" +
        '<div class="cat-chip-row">' + chips + "</div></div>";
    } else {
      /* group by category, categories ordered by their best score */
      var groups = {}, order = [];
      results.forEach(function (r) {
        var c = r.book.cat;
        if (!groups[c]) { groups[c] = []; order.push(c); }
        groups[c].push(r.book);
      });
      var html = '<div class="search-results-meta">' + results.length + " " +
        t("search_results_for") + ' “' + escapeHtml(query.trim()) + '”</div>';
      order.forEach(function (c) {
        html += '<section class="catalog-section"><div class="catalog-section-head">' +
          '<h3 class="catalog-section-title">' + t("cat_" + c + "_name") + "</h3></div>" +
          '<div class="books-grid">' +
          groups[c].map(function (b) { return cardHtml(b, rawTokens); }).join("") +
          "</div></section>";
      });
      dom.results.innerHTML = html;
    }
    /* no-results category chips → clear search & jump to that section */
    Array.prototype.forEach.call(dom.results.querySelectorAll(".cat-chip"), function (chip) {
      chip.addEventListener("click", function () {
        clearSearch(dom);
        var el = document.getElementById(chip.getAttribute("data-cat"));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function showBrowse(dom, browse) {
    dom.sections.forEach(function (s) { s.style.display = browse ? "" : "none"; });
    dom.results.hidden = browse;
    dom.clear.style.display = browse ? "none" : "";
  }

  function clearSearch(dom) {
    dom.input.value = "";
    dom.results.innerHTML = "";
    showBrowse(dom, true);
  }

  var lastTerm = "";
  function run(dom) {
    var q = dom.input.value.trim();
    dom.clear.style.display = q ? "" : "none";
    if (q.length < MIN_CHARS) { showBrowse(dom, true); lastTerm = ""; return; }
    var rawTokens = normalize(q).match(/[\p{L}\p{N}]+/gu) || [];
    var results = search(q);
    render(q, results, rawTokens, dom);
    showBrowse(dom, false);
    trackSearch(q, results.length);
  }

  /* Plausible custom event (debounced) — mirrors the site's analytics approach */
  var trackTimer = null;
  function trackSearch(term, count) {
    if (term === lastTerm) return;
    clearTimeout(trackTimer);
    trackTimer = setTimeout(function () {
      lastTerm = term;
      if (typeof window.plausible === "function") {
        window.plausible("Catalog Search", { props: { query: term.toLowerCase(), results: count } });
      }
    }, 900);
  }

  /* ── init ────────────────────────────────────────────────────────────── */
  document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("catalog-search-input");
    if (!input || typeof CATALOG_BOOKS === "undefined") return; // not the catalog page
    var dom = {
      input: input,
      clear: document.getElementById("catalog-search-clear"),
      results: document.getElementById("search-results"),
      sections: Array.prototype.slice.call(document.querySelectorAll("#catalog .catalog-section"))
    };
    buildIndex();
    showBrowse(dom, true);

    input.addEventListener("input", function () { run(dom); });
    input.addEventListener("search", function () { run(dom); }); // clear (×) on type=search
    dom.clear.addEventListener("click", function () { clearSearch(dom); input.focus(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.activeElement === input) clearSearch(dom);
    });
    /* re-render results in the new language when the user toggles EN/RU */
    Array.prototype.forEach.call(document.querySelectorAll(".lang-btn"), function (btn) {
      btn.addEventListener("click", function () { if (dom.input.value.trim().length >= MIN_CHARS) run(dom); });
    });
  });
})();
