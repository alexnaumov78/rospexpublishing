/* ════════════════════════════════════════════
   ROSPEX PUBLISHING — i18n Translations
   ════════════════════════════════════════════ */

const TRANSLATIONS = {
  en: {
    /* NAV */
    nav_books:   "Books",
    nav_authors: "Authors",
    nav_about:   "About Us",
    nav_contact: "Contact",
    nav_browse:  "Browse Books",

    /* HERO */
    hero_eyebrow: "Science and Education Books",
    hero_h1:     "Russia's best science books for curious readers everywhere",
    hero_sub:    "Curated textbooks and popular science in physics, astrophysics, cosmology, particle physics, and modern science, by Russia's leading scientists and researchers, available worldwide.",
    hero_cta1:   "Browse All Books",
    hero_cta2:   "Our Authors",

    /* CATALOG */
    avail_label:   "Available Now",
    avail_title:   "Quantum Field Theory Series",
    avail_sub:     "Two comprehensive graduate-level volumes, rigorous and practical, written for physicists who work with experiment.",
    coming_label:  "Coming Soon",
    coming_title:  "Upcoming Releases",
    coming_sub:    "English editions of the QFT series and the Solar Neutrino popular science book. Sign up to be notified at launch.",

    /* BOOKS – shared labels */
    qft_title_en:    "Quantum Field Theory for Experimentalists and Beyond",
    qft_title_ru:    "Quantum Field Theory for Experimentalists and Beyond",
    qft_author:      "Dmitry V. Naumov",
    qft1_ru_desc:    "554 pages. Foundations through advanced QFT: Feynman diagrams, renormalization, gauge theories. Written for physicists who work with experiment.",
    qft2_ru_desc:    "514 pages. Path integrals, QED, non-abelian gauge theories, and the Standard Model.",
    bundle_ru_title: "QFT Complete Edition: Volumes I and II",
    bundle_ru_desc:  "Both volumes at a reduced price. 1,068 pages, from foundations to the Standard Model.",
    bundle_save:     "Bundle",
    qft_en_desc:     "Complete English translation of the two-volume series. Expected in 3 to 4 weeks.",
    solar_ru_title:  "Solar Neutrino",
    solar_ru_desc:   "Popular science for curious readers of all ages. Neutrino physics explained by a world-leading expert. Russian edition.",
    solar_en_title:  "Solar Neutrino",
    solar_en_desc:   "Popular science for curious readers of all ages. Neutrino physics explained by a world-leading expert. English edition.",
    btn_buy:         "Buy Now",
    btn_buy_bundle:  "Buy Bundle",
    btn_notify:      "Notify Me",
    btn_preview:     "Preview",
    btn_preview_vol1: "Preview Vol. I",
    btn_preview_vol2: "Preview Vol. II",

    /* BOOK PAGE – subtitles (Change 1) */
    qft1_book_subtitle:    "Volume 1. Practical course with examples, problems, and solutions",
    qft2_book_subtitle:    "Volume 2. Practical course with examples, problems, and solutions",
    bundle_book_subtitle:  "Volumes 1 and 2. Practical course with examples, problems, and solutions",

    /* BOOK PAGE – price block labels (Changes 2, 3) */
    digital_edition:        "Digital Edition (PDF)",
    digital_edition_bundle: "Complete Digital Edition (2 PDFs)",
    promo_code_note:        "If you have a promotional code, you can enter it on the checkout page after clicking Buy Now.",
    /* LTO 2026-06-12 → 2026-07-12 — remove these three on July 13 revert */
    lto_label:              "Limited-time offer, ends July 12",
    gp_comparison:          "Both volumes here for $47.99 — save $12 vs. Google Play.",
    bundle_meta_badge:      "Bundle: Both Volumes",

    /* BOOK PAGE – section headings */
    about_this_book:       "About This Book",
    about_the_series:      "About the Series",
    book_description_h:    "Book Description",
    what_you_will_learn:   "What You Will Learn",
    vol1_covers_h:         "Volume I covers",
    vol2_covers_h:         "Volume II covers",
    format_note_h:         "Format Note",
    about_the_author_h:    "About the Author",
    read_more:             "Read More",
    read_less:             "Show Less",

    /* BOOK PAGE – spec table labels */
    spec_language:   "Language",
    spec_pages:      "Pages",
    spec_total_pages:"Total pages",
    spec_isbn:       "ISBN",
    spec_format:     "Format",
    spec_publisher:  "Publisher",
    spec_series:     "Series",
    spec_see_also:   "See also",
    spec_also_avail: "Also available",
    lang_val_ru:     "Russian",
    fmt_val_pdf:     "Fixed-Layout PDF",
    fmt_val_2pdf:    "2 x Fixed-Layout PDF",
    pub_val:         "Rospex Publishing",

    /* BOOK PAGE – upsell links */
    also_bundle_link: "QFT Bundle (Vol. I and II), $47.99",
    bundle_delivery:  "Both PDFs delivered to your email within minutes of purchase.",
    whats_included:   "What's included",

    /* VOL 1 – About This Book (Change 9) */
    qft1_about_p1: "Volume I of the two-volume graduate textbook on quantum field theory, written by Dmitry V. Naumov, Breakthrough Prize laureate and Deputy Director of the Dzhelepov Laboratory of Nuclear Problems at JINR, Dubna.",
    qft1_about_p2: "This volume covers the foundational structure of QFT through its advanced formalism: canonical quantization, propagators, the S-matrix, Feynman diagram techniques, loop corrections, renormalization, and gauge field theory. Unlike many introductory treatments, this textbook is written for physicists who work with experiment; every formalism is grounded in physical reasoning, not axiomatic abstraction.",

    /* VOL 1 – Book Description (Change 4) */
    qft1_desc_p1: "This volume opens with the mathematical language of modern physics: classical field theory, Lagrangians, and Noether's theorem. The exposition proceeds with canonical quantization of scalar, spinor, and vector fields, building toward the full apparatus of relativistic quantum mechanics.",
    qft1_desc_p2: "The second part develops the S-matrix formalism, the LSZ reduction theorem, and the Feynman diagram technique from first principles. Every step of the derivation is shown explicitly, with examples drawn from real physical processes.",
    qft1_desc_p3: "Renormalization theory is developed in full, including regularization methods, running coupling constants, and the treatment of infrared and ultraviolet divergences.",
    qft1_desc_p4: "The final chapters address abelian gauge theories and quantum electrodynamics. Ward identities, symmetry constraints, and radiative corrections are developed in connection with observable physical quantities.",
    qft1_desc_p5: "Throughout, the author's approach is deliberately physical: mathematics is in service of understanding. The course has been taught at Moscow State University and JINR for over 20 years, and this volume reflects that experience: clear, rigorous, and connected to experiment at every step.",

    /* VOL 1 – What You Will Learn */
    qft1_learn_1: "Classical field theory: Lagrangians, Noether's theorem, symmetry currents",
    qft1_learn_2: "Canonical quantization of scalar, spinor, and vector fields",
    qft1_learn_3: "The S-matrix, LSZ reduction, and scattering amplitudes",
    qft1_learn_4: "Feynman rules: derivation, application, and physical interpretation",
    qft1_learn_5: "One-loop corrections, regularization, and renormalization theory",
    qft1_learn_6: "Abelian gauge theories and quantum electrodynamics (QED)",
    qft1_learn_7: "Ward identities, symmetry constraints, and radiative corrections",

    /* VOL 2 – About This Book */
    qft2_about_p1: "Volume II of the two-volume graduate textbook on quantum field theory, written by Dmitry V. Naumov, Breakthrough Prize laureate and Deputy Director of the Dzhelepov Laboratory of Nuclear Problems at JINR, Dubna.",
    qft2_about_p2: "This volume continues from Volume I with the path integral formulation of quantum field theory, non-abelian gauge theories, and the construction of the Standard Model of particle physics. The approach is the same throughout: every formalism is grounded in physical reasoning, aimed at physicists who work with experiment.",

    /* VOL 2 – Book Description */
    qft2_desc_p1: "Volume II opens with the path integral formalism, which provides a unified framework for quantization, generating functionals, and the derivation of Feynman rules for gauge theories.",
    qft2_desc_p2: "The core of this volume is the theory of non-abelian gauge fields: Yang-Mills theories, the Faddeev-Popov quantization procedure, BRST symmetry, and ghost fields. These tools are applied to the construction of the Standard Model of particle physics.",
    qft2_desc_p3: "Quantum chromodynamics and the electroweak theory are developed in detail, covering the full gauge structure of the Standard Model and the origin of particle masses.",
    qft2_desc_p4: "Spontaneous symmetry breaking, the Higgs mechanism, and the structure of gauge boson masses are treated systematically. The final chapters address renormalization of gauge theories and asymptotic freedom.",
    qft2_desc_p5: "As in Volume I, the exposition is anchored in physical intuition and experimental relevance. Each formalism is presented as a tool for understanding real physics, with the connection to measurable quantities maintained throughout.",

    /* VOL 2 – What You Will Learn */
    qft2_learn_1: "Path integral formalism and generating functionals",
    qft2_learn_2: "Non-abelian gauge theories and Yang-Mills theory",
    qft2_learn_3: "Faddeev-Popov quantization procedure and BRST symmetry",
    qft2_learn_4: "Electroweak theory and quantum chromodynamics (QCD)",
    qft2_learn_5: "Spontaneous symmetry breaking and the Higgs mechanism",
    qft2_learn_6: "Renormalization group and asymptotic freedom",
    qft2_learn_7: "Structure and applications of the Standard Model",

    /* BUNDLE – About the Series */
    bundle_about_p1: "The complete two-volume graduate textbook on quantum field theory by Dmitry V. Naumov, Breakthrough Prize laureate (2016), EPS Prize winner (2023), and Deputy Director of the Dzhelepov Laboratory of Nuclear Problems at JINR, Dubna.",
    bundle_about_p2: "Together, the two volumes form a complete program from the foundations of QFT through the full Standard Model. The series is distinguished by its rigorous treatment grounded in physical reasoning, written for physicists who work with experiment.",

    /* BUNDLE – Book Description */
    bundle_desc_p1: "The complete two-volume course in quantum field theory by Dmitry V. Naumov, designed for graduate students and research physicists who require a rigorous, complete, and practically oriented treatment of the subject.",
    bundle_desc_p2: "Volume I builds the full QFT apparatus from classical field theory through canonical quantization, Feynman diagrams, renormalization theory, and quantum electrodynamics. Volume II continues with path integrals, non-abelian gauge theories, the Standard Model, and the Higgs mechanism.",
    bundle_desc_p3: "Together, the two volumes constitute a self-contained graduate course of over 1,000 pages. The approach throughout is that of a physicist who works with experiment: every piece of formalism is motivated by physical reasoning, and the connection to measurable quantities is never lost from sight.",
    bundle_desc_p4: "The course has been taught at Moscow State University and JINR for over 20 years. These textbooks are the result of that teaching, refined across many cohorts of students and aimed at physicists who want to genuinely master the subject in full.",

    /* BUNDLE – Vol I / II covers */
    bundle_vol1_l1: "Classical field theory, canonical quantization, Feynman rules",
    bundle_vol1_l2: "Loop corrections, regularization, renormalization theory",
    bundle_vol1_l3: "Abelian gauge theories and quantum electrodynamics",
    bundle_vol2_l1: "Path integral formalism and generating functionals",
    bundle_vol2_l2: "Non-abelian gauge theories, Yang-Mills, BRST symmetry",
    bundle_vol2_l3: "Spontaneous symmetry breaking and the Higgs mechanism",
    bundle_vol2_l4: "Electroweak theory, QCD, renormalization group",


    /* BOOK DESCRIPTION – shared across all 3 pages (from author's final text) */
    course_desc_p1: "One of the deepest frustrations in learning quantum field theory is that the formalism tends to obscure the physics. You learn to grind through long derivations, but at some point a familiar feeling sets in: you can calculate, but you don&#8217;t fully understand what you&#8217;re calculating, or why the theory is built the way it is. Why do fields sit at the heart of the theory? How do particles emerge from them? Why do we choose one Lagrangian over another? Where do the infinities come from, and where do they go? Along the way, the connection to reality, observables and experiment, gets lost somewhere in the algebra.",
    course_desc_p2: "<em>Quantum Field Theory for Experimentalists and <strong>Beyond</strong></em> is a complete QFT course by Dmitry V. Naumov, one of the rare physicists equally at home deriving Lagrangians at a blackboard and analyzing data at a detector. Naumov is a laureate of the <strong>Breakthrough Prize in Fundamental Physics</strong> (2016) and the European Physical Society Prize (2023) as part of the Daya Bay collaboration. He heads the Neutrino Program at JINR, holds a Doctor of Physical and Mathematical Sciences degree, and has authored more than 200 scientific papers. The Breakthrough Prize is one of the most prestigious awards in science; the number of its laureates who have written QFT textbooks can be counted on one hand.",
    course_desc_p3: "This course is built on a simple but powerful conviction: <strong>understanding <em>why</em> matters as much as knowing <em>how to calculate</em></strong>. Formalism is consistently anchored to physical meaning, observable quantities, and real calculations, reflecting the author&#8217;s background as an experimentalist who knows exactly what you need to understand to make sense of data from a real detector. The book is written in a lively, engaging style, with insightful historical digressions, firsthand stories from the author&#8217;s scientific career, and a rare ability to make difficult ideas genuinely clear, without ever dumbing them down.",
    course_desc_p4: "<strong>Volume 1 builds the foundation</strong>: special and general relativity, non-relativistic quantum mechanics, relativistic wave equations, classical fields, canonical quantization, Green&#8217;s functions, propagators, and the S-matrix.",
    course_desc_p5: "<strong>Volume 2 turns that foundation into a practical working toolkit</strong>: it derives the Feynman rules for quantum electrodynamics, performs explicit calculations of real physical processes, constructs the electroweak theory and the Standard Model, and explores in depth renormalization, vacuum polarization, the Lamb shift, the anomalous magnetic moment, quantum anomalies, and physics beyond the Standard Model.",
    course_desc_p6: "What sets this course apart is its rare combination of breadth, modern content, and an experimentalist&#8217;s perspective that most QFT textbooks simply don&#8217;t have. This book does not limit quantum field theory to a formal theoretical edifice, but presents it as a living science, connected to experiment, observables, and real physical problems.",
    course_desc_p7: "Detailed derivations with no key steps omitted sit alongside clear, rigorous explanations. Historical and physical context illuminates not just the formulas, but the logic of how the ideas developed. Alongside the core foundations of QFT, the book covers contemporary topics including the Standard Model, renormalization, quantum anomalies, and physics beyond the Standard Model.",
    course_desc_p8: "The book includes a wide range of problems and examples at varying levels of difficulty. QR codes embedded throughout the text provide direct access to the author&#8217;s original animations and visualizations of complex processes: bringing to life what is often impossible to convey with formulas alone.",
    course_desc_p9: "Multiple research projects born from this course have grown into published scientific papers.",
    course_desc_p10: "The book is based on lectures the author has delivered for over 20 years at Moscow State University and JINR. Reviewed by E.T. Akhmedov (Landau Department of Theoretical Physics, MIPT) and V.G. Serbo (NSU).",
    course_desc_p11: "<em>This course is for students, graduate students, experimentalists, and everyone who needs quantum field theory not as a formal academic subject, but as a working tool of modern physics.</em>",

    /* FORMAT NOTE */
    format_note_v1v2: "Fixed-layout PDF preserving all mathematical typesetting, Feynman diagrams, and figures exactly as in the print edition. Best on tablet or laptop. Not optimized for e-ink readers.",
    format_note_bundle: "Both volumes are fixed-layout PDFs delivered separately to your email. All mathematical typesetting, Feynman diagrams, and figures are preserved exactly as in the print editions. Best on tablet or laptop. Not optimized for e-ink readers.",

    /* ABOUT THE AUTHOR – new expanded bio (Changes 6, 7) */
    author_book_bio_p1: "Dmitry V. Naumov is a physicist who works both as a theorist and experimentalist, a rare combination in modern physics. He is a leading expert in neutrino physics, elementary particle physics, and astrophysics, and heads the Neutrino Programme at the Joint Institute for Nuclear Research (JINR) in Dubna, Russia. He holds a Doctor of Physical and Mathematical Sciences degree and is the author of more than 200 scientific papers.",
    author_book_bio_p2: "Naumov is a laureate of the Breakthrough Prize in Fundamental Physics (2016) and the European Physical Society Prize (2023), both awarded as part of the Daya Bay collaboration for the precise measurement of the neutrino mixing angle θ₁₃. The Breakthrough Prize is one of the most prestigious awards in science.",
    author_book_bio_p3: "He has lectured on quantum field theory at Moscow State University and JINR for over 20 years. This textbook is the result of those lectures: a course designed to make QFT genuinely understandable and practically usable for experimentalists and theorists alike.",

    /* Change 8 – link text */
    read_more_author: "Read More about the Author",

    /* FOR AUTHORS CTA */
    fa_label:    "For Authors",
    fa_title:    "Publishing with Rospex",
    fa_text:     "We work with researchers and educators on serious science and education books. Independent, transparent, with global digital distribution. We invite proposals.",
    fa_btn:      "Learn More",
    fa_contact:  "Contact Us",

    /* AUTHORS PAGE — bottom publishing CTA (was hardcoded English) */
    authors_bottom_title: "Interested in publishing with us?",
    authors_bottom_text:  "We invite researchers and educators with serious scientific or educational works to reach out. We focus on digital distribution with global reach and straightforward revenue sharing. Contact us to discuss your project.",

    /* REVIEWS / ACCLAIM */
    reviews_label:        "Acclaim from Physicists",
    reviews_title:        "What readers and reviewers say",
    reviews_sub:          "Independent feedback from physicists and readers of the Quantum Field Theory series.",
    reviews_label_book:   "Reviews",
    reviews_title_book:   "What reviewers say",
    review_read_full:     "Read Full Review",
    review_read_less:     "Show Less",
    review_translated_note: "Translated from Russian.",

    /* LEARN MORE MODAL */
    lm_title:   "Publishing with Rospex",
    lm_intro:   "We work with researchers and educators on serious science and education books. Here is how the process works:",
    lm_h1:      "Distribution channels",
    lm_p1:      "Your book appears on rospexpublishing.com for direct sales, and on major international platforms including Google Play Books, Amazon Kindle, and Kobo. You retain your existing distribution in Russia and CIS.",
    lm_h2:      "Rights and agreement",
    lm_p2:      "A standard publishing agreement covers digital distribution outside Russia and CIS, with 2 to 3 year terms and quarterly transparent reporting. Authors confirm in writing that they hold the digital rights being granted. We can help negotiate with existing publishers if rights are held by them.",
    lm_h3:      "Royalties",
    lm_p3:      "You get a bigger share of the net proceeds on direct sales through rospexpublishing.com. Platform fees apply on top for other channels (Google, Amazon, Kobo, etc.). Payments are made quarterly or as agreed with full reporting.",
    lm_h4:      "Marketing support",
    lm_p4:      "We handle metadata, product pages, and launch coordination. We provide recommendations for promotion through your own networks (academic, social media, talks) and can help amplify announcements at launch.",
    lm_note:    "Important: authors must confirm in writing they hold the digital distribution rights being granted. If a publisher holds those rights, we can help with the negotiation.",
    lm_close:   "Close",
    lm_contact: "Contact Us",

    /* NOTIFY */
    notify_label: "Stay Updated",
    notify_title: "Get notified at launch",
    notify_sub:   "Be the first to know when English editions and new titles become available.",
    notify_btn:   "Notify Me",
    notify_ok:    "You are on the list. We will email you at launch.",

    /* AUTHOR (authors.html) */
    author_label:    "Featured Author",
    author_title:    "Dmitry V. Naumov",
    prize1_label:    "Prize",    prize1_val: "Breakthrough Prize in Fundamental Physics, 2016",
    prize2_label:    "Prize",    prize2_val: "European Physical Society Prize, 2023",
    pubs_label:      "Publications", pubs_val: "200+ peer-reviewed scientific papers",
    pos_label:       "Position", pos_val: "Deputy Director, Dzhelepov Laboratory of Nuclear Problems, JINR",
    bio1: "Dmitry V. Naumov holds a <strong>Doctor of Physical and Mathematical Sciences</strong> degree and serves as Deputy Director at the Dzhelepov Laboratory of Nuclear Problems at the <strong>Joint Institute for Nuclear Research (JINR)</strong> in Dubna, Russia.",
    bio_new: "Dmitry V. Naumov is a physicist who works both as a theorist and experimentalist, a rare combination in modern physics. He is a leading expert in neutrino physics, elementary particle physics, and astrophysics, and heads the Neutrino Programme at JINR. He has lectured on quantum field theory at Moscow State University and JINR for over 20 years.",
    bio2: "He is a laureate of the <strong>Breakthrough Prize in Fundamental Physics (2016)</strong>, awarded to the Daya Bay collaboration for the discovery of electron neutrino disappearance and precise measurement of the mixing angle. In 2023 he received the <strong>European Physical Society Prize</strong> for contributions to neutrino physics.",
    bio3: "Naumov has authored over <strong>200 scientific publications</strong> and brings the same rigorous approach to his textbooks, written as complete treatments for physicists who wish to master the subject in full.",
    link_web:         "naumov.jinr.ru",
    link_inspire:     "INSPIRE-HEP profile",
    link_neutrinohit: "neutrinohit.github.io",
    link_yt:          "YouTube Channel",
    link_tg:          "Telegram: NeutrinoHit",
    link_all_authors: "View All Authors",

    /* AUTHORS PAGE PLACEHOLDERS */
    auth_intro_title: "The people behind our books",
    auth_intro_text:  "Rospex Publishing works with leading researchers and educators. We are actively expanding our author roster. More renowned scientists and educators are joining in the coming months.",
    auth_books_label:    "Books by this author",
    placeholder_tag:     "Joining Soon",
    placeholder_name:    "Renowned Author",
    placeholder_field_a: "Astrophysics and Cosmology",
    placeholder_field_b: "Particle Physics and High Energy",
    placeholder_field_c: "Popular Science and Education",
    placeholder_text:    "We are in active discussions with leading Russian scientists and educators about bringing their work to international readers. Profiles will be added as agreements are finalized.",

    /* PUBLISHER */
    pub_label:    "About Us",
    pub_title:    "Rospex Publishing",
    pub_sub_p1:   "An independent publisher of digital books on science and education, operating globally.",
    pub_sub_p2:   "We are a small, specialized showcase of strong authors, not a mass publisher covering everything. Our focus is curated textbooks and popular science in physics, astrophysics, cosmology, particle physics, and modern science.",
    pub_sub_p3:   "Our readers are Russian-speaking scientists, students, teachers, parents, schoolchildren, and curious minds worldwide who want quality science literature in Russian, with English translations becoming available for selected titles.",
    pub_sub_p4:   "Our mission is to make strong Russian-language science books accessible to readers everywhere, in a clear legal format with transparent payment and respect for author rights.",
    pub_c1_title: "Global Distribution",   pub_c1_text: "We sell to readers in 135+ countries. All major payment methods accepted via Stripe.",
    pub_c2_title: "Fixed-Layout PDF",      pub_c2_text: "Our e-books are high-quality typeset PDFs preserving all mathematical notation and diagrams. Best on tablet or desktop.",
    pub_c3_title: "Secure Downloads",      pub_c3_text: "Purchases are delivered as personalized, watermarked PDF links within minutes of payment.",
    pub_c4_title: "Instant Delivery",      pub_c4_text: "Your book arrives by email within minutes of payment. No account required.",

    /* CONTACT PAGE */
    contact_title:          "Get in touch",
    contact_intro:          "We welcome inquiries from authors interested in publishing with us, readers with feedback or questions, and anyone who has noticed errors in our books or on this site. We respond within a few business days.",
    contact_first_name:     "First Name",
    contact_last_name:      "Last Name",
    contact_email:          "Email",
    contact_reason:         "Reason for Contacting",
    contact_reason_select:  "Please select…",
    contact_reason_1:       "I'd like to publish my book with Rospex",
    contact_reason_2:       "Feedback or general inquiry",
    contact_reason_3:       "I noticed an error in a book or on this site",
    contact_reason_4:       "Something else",
    contact_subject:        "Subject",
    contact_subject_help:   "Optional: a short summary",
    contact_message:        "Message",
    contact_message_placeholder: "Please share the details of your inquiry…",
    contact_submit:         "Send Message",
    contact_success:        "Thank you. Your message has been sent. We will respond within a few business days.",
    contact_error:          "Something went wrong. Please try again or write directly to alex.naumov@rospex.com",
    contact_required:       "required",

    /* FOOTER */
    footer_desc:          "An independent publisher of digital books on science and education, operating globally. A curated showcase of Russia's leading science authors for readers worldwide.",
    footer_col2:          "Contact and Info",
    footer_link_contact:  "Contact Us",
    footer_link_authors:  "All Authors",
    footer_link_about:    "About Us",
    footer_link_notify:   "Launch Notifications",
    footer_copy:          "Rospex Holdings LLC. All rights reserved.",
    family_label:         "Part of the Rospex family:",

    /* MODALS */
    modal_notify_sub: "Enter your email and we will send one notification when this book launches.",
    modal_close:      "Close",
  },

  ru: {
    /* NAV */
    nav_books:   "Книги",
    nav_authors: "Авторы",
    nav_about:   "О нас",
    nav_contact: "Контакты",
    nav_browse:  "Все книги",

    /* HERO */
    hero_eyebrow: "Научные и образовательные книги",
    hero_h1:     "Лучшие научные книги из России для любознательных читателей по всему миру",
    hero_sub:    "Тщательно отобранные учебники и научно-популярные книги по физике, астрофизике, космологии, физике частиц и современной науке, от ведущих учёных и исследователей России, доступные по всему миру.",
    hero_cta1:   "Все книги",
    hero_cta2:   "Наши авторы",

    /* CATALOG */
    avail_label:   "Доступно сейчас",
    avail_title:   "Серия «Квантовая теория поля»",
    avail_sub:     "Два фундаментальных тома аспирантского уровня, строгих и практичных, написанных для физиков-экспериментаторов.",
    coming_label:  "Скоро",
    coming_title:  "Готовятся к выходу",
    coming_sub:    "Англоязычные издания серии КТП и книга «Солнечное нейтрино». Подпишитесь на уведомление о выходе.",

    /* BOOKS */
    qft_title_en:    "Квантовая теория поля для экспериментаторов и не только",
    qft_title_ru:    "Квантовая теория поля для экспериментаторов и не только",
    qft_author:      "Дмитрий В. Наумов",
    qft1_ru_desc:    "554 страницы. От основ до продвинутых методов КТП: диаграммы Фейнмана, перенормировка, калибровочные теории.",
    qft2_ru_desc:    "514 страниц. Интеграл по траекториям, КЭД, неабелевы калибровочные теории и Стандартная модель.",
    bundle_ru_title: "КТП, полное издание: тома I и II",
    bundle_ru_desc:  "Оба тома по сниженной цене. 1 068 страниц, от основ до Стандартной модели.",
    bundle_save:     "Комплект",
    qft_en_desc:     "Полный английский перевод двухтомной серии. Ожидается через 3-4 недели.",
    solar_ru_title:  "Солнечное нейтрино",
    solar_ru_desc:   "Научно-популярная книга для читателей всех возрастов. Физика нейтрино от ведущего мирового эксперта. Русское издание.",
    solar_en_title:  "Solar Neutrino",
    solar_en_desc:   "Научно-популярная книга на английском языке. Ожидается через 2-3 месяца.",
    btn_buy:         "Купить",
    btn_buy_bundle:  "Купить комплект",
    btn_notify:      "Уведомить меня",
    btn_preview:     "Предпросмотр",
    btn_preview_vol1: "Просмотр Том I",
    btn_preview_vol2: "Просмотр Том II",

    /* BOOK PAGE – subtitles */
    qft1_book_subtitle:    "Том 1. Практический курс с примерами, задачами и решениями",
    qft2_book_subtitle:    "Том 2. Практический курс с примерами, задачами и решениями",
    bundle_book_subtitle:  "Тома 1 и 2. Практический курс с примерами, задачами и решениями",

    /* BOOK PAGE – price block labels */
    digital_edition:        "Цифровое издание (PDF)",
    digital_edition_bundle: "Полное цифровое издание (2 PDF)",
    promo_code_note:        "Если у вас есть промокод, введите его на странице оплаты после нажатия кнопки «Купить».",
    /* LTO 2026-06-12 → 2026-07-12 — remove these three on July 13 revert */
    lto_label:              "Промо-акция до 12 июля",
    gp_comparison:          "Оба тома здесь за $47.99 — экономия $12 по сравнению с Google Play.",
    bundle_meta_badge:      "Комплект: оба тома",

    /* BOOK PAGE – section headings */
    about_this_book:       "О книге",
    about_the_series:      "О серии",
    book_description_h:    "Описание книги",
    what_you_will_learn:   "Чему вы научитесь",
    vol1_covers_h:         "Том I охватывает",
    vol2_covers_h:         "Том II охватывает",
    format_note_h:         "О формате",
    about_the_author_h:    "Об авторе",
    read_more:             "Читать далее",
    read_less:             "Свернуть",

    /* BOOK PAGE – spec table labels */
    spec_language:    "Язык",
    spec_pages:       "Страниц",
    spec_total_pages: "Всего страниц",
    spec_isbn:        "ISBN",
    spec_format:      "Формат",
    spec_publisher:   "Издатель",
    spec_series:      "Серия",
    spec_see_also:    "Смотрите также",
    spec_also_avail:  "Также доступно",
    lang_val_ru:      "Русский",
    fmt_val_pdf:      "PDF с фиксированной версткой",
    fmt_val_2pdf:     "2 PDF с фиксированной версткой",
    pub_val:          "Rospex Publishing",

    /* BOOK PAGE – upsell links */
    also_bundle_link: "Комплект КТП (Тома I и II), $47.99",
    bundle_delivery:  "Оба PDF доставляются на email в течение нескольких минут после оплаты.",
    whats_included:   "Что включено",

    /* VOL 1 – About This Book */
    qft1_about_p1: "Том I двухтомного аспирантского учебника по квантовой теории поля, написанного Дмитрием В. Наумовым, лауреатом премии «Прорыв» и заместителем директора Лаборатории ядерных проблем ОИЯИ в Дубне.",
    qft1_about_p2: "Том охватывает фундаментальную структуру КТП через её продвинутый формализм: каноническое квантование, пропагаторы, матрицу рассеяния, технику диаграмм Фейнмана, петлевые поправки, перенормировку и теорию калибровочных полей. В отличие от многих вводных курсов, этот учебник написан для физиков-экспериментаторов; каждый формализм опирается на физические рассуждения, а не на аксиоматические абстракции.",

    /* VOL 1 – Book Description */
    qft1_desc_p1: "Книга открывается математическим языком современной физики: классической теорией поля, лагранжианами и теоремой Нётер. Далее систематически развивается каноническое квантование скалярных, спинорных и векторных полей, что закладывает фундамент релятивистской квантовой механики.",
    qft1_desc_p2: "Вторая часть посвящена формализму матрицы рассеяния, теореме редукции ЛСЗ и технике диаграмм Фейнмана. Каждый шаг вывода представлен в явном виде, а примеры взяты из реальных физических процессов.",
    qft1_desc_p3: "Теория перенормировки развита полностью: методы регуляризации, бегущие константы связи, обращение с инфракрасными и ультрафиолетовыми расходимостями.",
    qft1_desc_p4: "Заключительные главы посвящены абелевым калибровочным теориям и квантовой электродинамике. Тождества Уорда, симметрийные ограничения и радиационные поправки рассматриваются в связи с экспериментально измеримыми величинами.",
    qft1_desc_p5: "На протяжении всего изложения подход автора намеренно физический: математика служит пониманию. Курс читается в МГУ и ОИЯИ уже более 20 лет, и этот том отражает накопленный опыт: чёткое, строгое, неразрывно связанное с экспериментом изложение.",

    /* VOL 1 – What You Will Learn */
    qft1_learn_1: "Классическая теория поля: лагранжианы, теорема Нётер, токи симметрии",
    qft1_learn_2: "Каноническое квантование скалярных, спинорных и векторных полей",
    qft1_learn_3: "Матрица рассеяния, ЛСЗ-редукция и амплитуды рассеяния",
    qft1_learn_4: "Правила Фейнмана: вывод, применение и физическая интерпретация",
    qft1_learn_5: "Однопетлевые поправки, регуляризация и теория перенормировки",
    qft1_learn_6: "Абелевы калибровочные теории и квантовая электродинамика (КЭД)",
    qft1_learn_7: "Тождества Уорда, симметрийные ограничения и радиационные поправки",

    /* VOL 2 – About This Book */
    qft2_about_p1: "Том II двухтомного аспирантского учебника по квантовой теории поля, написанного Дмитрием В. Наумовым, лауреатом премии «Прорыв» и заместителем директора Лаборатории ядерных проблем ОИЯИ в Дубне.",
    qft2_about_p2: "Том продолжает первый с формализма интеграла по траекториям, неабелевых калибровочных теорий и построения Стандартной модели физики элементарных частиц. Подход тот же на протяжении всего изложения: каждый формализм опирается на физические рассуждения, ориентированные на физиков-экспериментаторов.",

    /* VOL 2 – Book Description */
    qft2_desc_p1: "Второй том открывается формализмом интеграла по траекториям, предоставляющим единую основу для квантования, производящих функционалов и вывода правил Фейнмана для калибровочных теорий.",
    qft2_desc_p2: "Ядро тома составляет теория неабелевых калибровочных полей: теории Янга-Миллса, процедура квантования Фаддеева-Попова, БРСТ-симметрия и поля-духи. Эти инструменты применяются при построении Стандартной модели физики элементарных частиц.",
    qft2_desc_p3: "Квантовая хромодинамика и электрослабая теория рассматриваются в деталях, охватывая полную калибровочную структуру Стандартной модели и природу масс частиц.",
    qft2_desc_p4: "Спонтанное нарушение симметрии, механизм Хиггса и структура масс калибровочных бозонов рассматриваются систематически. В заключительных главах обсуждаются перенормировка калибровочных теорий и асимптотическая свобода.",
    qft2_desc_p5: "Как и в первом томе, изложение опирается на физическую интуицию и экспериментальную значимость. Каждый формализм представлен как инструмент понимания реальной физики, и связь с измеримыми величинами поддерживается на протяжении всего курса.",

    /* VOL 2 – What You Will Learn */
    qft2_learn_1: "Формализм интеграла по траекториям и производящие функционалы",
    qft2_learn_2: "Неабелевы калибровочные теории и теория Янга-Миллса",
    qft2_learn_3: "Процедура квантования Фаддеева-Попова и БРСТ-симметрия",
    qft2_learn_4: "Электрослабая теория и квантовая хромодинамика (КХД)",
    qft2_learn_5: "Спонтанное нарушение симметрии и механизм Хиггса",
    qft2_learn_6: "Ренормализационная группа и асимптотическая свобода",
    qft2_learn_7: "Структура и применения Стандартной модели",

    /* BUNDLE – About the Series */
    bundle_about_p1: "Полный двухтомный аспирантский учебник по квантовой теории поля Дмитрия В. Наумова, лауреата премии «Прорыв» (2016), лауреата Премии ЕФО (2023) и заместителя директора Лаборатории ядерных проблем ОИЯИ в Дубне.",
    bundle_about_p2: "Вместе оба тома образуют полную программу: от основ КТП до Стандартной модели. Серия выделяется строгим изложением, опирающимся на физические рассуждения, написанным для физиков-экспериментаторов.",

    /* BUNDLE – Book Description */
    bundle_desc_p1: "Полный двухтомный курс квантовой теории поля Дмитрия В. Наумова, предназначенный для аспирантов и физиков-исследователей, которым необходимо строгое, полное и практически ориентированное изложение предмета.",
    bundle_desc_p2: "Первый том строит полный аппарат КТП: от классической теории поля через каноническое квантование, диаграммы Фейнмана, теорию перенормировки до квантовой электродинамики. Второй том продолжает изложение: интегралы по траекториям, неабелевы калибровочные теории, Стандартная модель и механизм Хиггса.",
    bundle_desc_p3: "Вместе оба тома образуют самодостаточный аспирантский курс объёмом более 1000 страниц. Подход на протяжении всего изложения соответствует взгляду физика-экспериментатора: каждый формализм мотивирован физическими соображениями, и связь с измеримыми величинами никогда не теряется.",
    bundle_desc_p4: "Курс читается в МГУ и ОИЯИ уже более 20 лет. Данные учебники являются результатом этого преподавания, отточенным на многих поколениях студентов и направленным на физиков, стремящихся по-настоящему овладеть предметом.",

    /* BUNDLE – Vol I / II covers */
    bundle_vol1_l1: "Классическая теория поля, каноническое квантование, правила Фейнмана",
    bundle_vol1_l2: "Петлевые поправки, регуляризация, теория перенормировки",
    bundle_vol1_l3: "Абелевы калибровочные теории и квантовая электродинамика",
    bundle_vol2_l1: "Формализм интеграла по траекториям и производящие функционалы",
    bundle_vol2_l2: "Неабелевы калибровочные теории, Янг-Миллс, БРСТ-симметрия",
    bundle_vol2_l3: "Спонтанное нарушение симметрии и механизм Хиггса",
    bundle_vol2_l4: "Электрослабая теория, КХД, ренормализационная группа",


    /* BOOK DESCRIPTION – shared across all 3 pages */
    course_desc_p1: "Одна из главных трудностей при изучении квантовой теории поля состоит в том, что формализм часто заслоняет физический смысл. Читатель учится выполнять длинные выкладки, но не всегда понимает, что всё это означает и почему теория устроена именно так: почему в центре теории оказываются поля, как из них возникают частицы, почему выбирается тот или иной лагранжиан, откуда возникают и куда исчезают бесконечности. Часто теряется и связь с реальностью: с наблюдаемыми величинами и экспериментом.",
    course_desc_p2: "«Квантовая теория поля для экспериментаторов и не только» — это полный курс КТП Дмитрия В. Наумова, одного из редких физиков, кто одинаково свободно работает у доски с лагранжианами и у детектора с данными. Автор книги — лауреат <strong>Breakthrough Prize in Fundamental Physics (2016)</strong> и премии Европейского физического общества <strong>(2023)</strong> в составе коллаборации Daya Bay, руководитель Нейтринной программы ОИЯИ, доктор физико-математических наук и автор более 200 научных работ. Breakthrough Prize — одна из самых престижных научных премий. Её лауреатов-авторов учебников по КТП можно пересчитать по пальцам одной руки.",
    course_desc_p3: "Курс написан так, что даются не только ответы на вопрос «<em>как считать</em>», но и объясняется, <strong>почему</strong> теория устроена именно так. Формализм постоянно связывается с физическим смыслом, наблюдаемыми величинами и реальными вычислениями, потому что автор сам экспериментатор и знает, что именно нужно понять, чтобы работать с данными реального детектора. Книга написана живым языком: с историческими отступлениями, авторскими историями из первых рук и редкой для учебника способностью объяснять сложное, но не упрощая.",
    course_desc_p4: "<strong>Первый том выстраивает фундамент</strong>: специальная и общая теория относительности, нерелятивистская квантовая механика, релятивистские волновые уравнения, классические поля, каноническое квантование, функции Грина, пропагаторы и S-матрица.",
    course_desc_p5: "<strong>Второй том превращает этот фундамент в рабочий аппарат</strong>: выводятся правила Фейнмана для квантовой электродинамики, вычисляются наблюдаемые для физических процессов, строится электрослабая теория и Стандартная модель, подробно обсуждаются перенормировка, вакуумная поляризация, лэмбовский сдвиг, аномальный магнитный момент, квантовые аномалии и физика за пределами Стандартной модели.",
    course_desc_p6: "Особенность курса — редкое сочетание широты охвата, современного содержания и необычного угла зрения. Книга не ограничивается формальной «теоретической теорией»: квантовая теория поля здесь показана как живая наука, связанная с экспериментом, наблюдаемыми величинами и реальными физическими задачами.",
    course_desc_p7: "Подробные выкладки для каждого ключевого шага сочетаются с доступными, но качественными объяснениями; исторический и физический контекст помогает понять не только формулы, но и логику развития идей. В курс включены как базовые разделы КТП, так и современные темы: Стандартная модель, перенормировка, квантовые аномалии, физика за пределами Стандартной модели.",
    course_desc_p8: "Книга содержит большое количество задач и примеров разного уровня сложности. Множественные QR-коды в тексте дают прямой доступ к авторским анимациям и визуализациям сложных процессов, чтобы увидеть то, что трудно передать одними формулами.",
    course_desc_p9: "Некоторые учебные проекты, начатые на этом курсе, выросли в настоящие научные статьи студентов.",
    course_desc_p10: "Книга основана на лекциях, которые автор читал более 20 лет в МГУ и ОИЯИ. Рецензенты: Э.Т. Ахмедов (кафедра теоретической физики им. Ландау, МФТИ) и В.Г. Сербо (НГУ).",
    course_desc_p11: "<em>Это курс для студентов, аспирантов, экспериментаторов и всех, кому квантовая теория поля нужна не как формальный предмет, а как рабочий инструмент современной физики.</em>",

    /* FORMAT NOTE */
    format_note_v1v2:   "PDF с фиксированной версткой, сохраняющий всю математическую типографику, диаграммы Фейнмана и рисунки в точности как в печатном издании. Оптимально для планшета или ноутбука. Не оптимизирован для устройств на электронных чернилах.",
    format_note_bundle: "Оба тома доставляются в виде отдельных PDF с фиксированной версткой на ваш email. Вся математическая типографика, диаграммы Фейнмана и рисунки сохраняются в точности как в печатных изданиях. Оптимально для планшета или ноутбука. Не оптимизирован для устройств на электронных чернилах.",

    /* ABOUT THE AUTHOR – new bio */
    author_book_bio_p1: "Дмитрий В. Наумов является физиком, работающим как теоретик и экспериментатор одновременно, что представляет редкое сочетание в современной физике. Он ведущий специалист в области физики нейтрино, физики элементарных частиц и астрофизики, а также руководитель Нейтринной программы Объединённого института ядерных исследований (ОИЯИ) в Дубне, Россия. Наумов является доктором физико-математических наук и автором более 200 научных работ.",
    author_book_bio_p2: "Наумов является лауреатом премии «Прорыв» по фундаментальной физике (2016) и Премии Европейского физического общества (2023), присуждённых в составе коллаборации Daya Bay за точное измерение угла нейтринного смешивания θ₁₃. Премия «Прорыв» является одной из наиболее престижных научных наград в мире.",
    author_book_bio_p3: "На протяжении более 20 лет Наумов читает лекции по квантовой теории поля в МГУ и ОИЯИ. Данный учебник является итогом этих лекций: курс, созданный для того, чтобы КТП стала по-настоящему понятной и практически применимой для экспериментаторов и теоретиков в равной мере.",

    read_more_author: "Подробнее об авторе",

    /* FOR AUTHORS CTA */
    fa_label:    "Авторам",
    fa_title:    "Издавайтесь с Rospex",
    fa_text:     "Мы работаем с учёными и преподавателями над серьёзной научной и образовательной литературой. Независимое издательство, прозрачные условия, глобальная цифровая дистрибуция. Принимаем заявки.",
    fa_btn:      "Подробнее",
    fa_contact:  "Связаться",

    /* AUTHORS PAGE — bottom publishing CTA */
    authors_bottom_title: "Хотите издаваться с нами?",
    authors_bottom_text:  "Приглашаем исследователей и преподавателей с серьёзными научными и образовательными работами обратиться к нам. Мы специализируемся на цифровой дистрибуции с глобальным охватом и прозрачным распределением доходов. Свяжитесь с нами, чтобы обсудить ваш проект.",

    /* REVIEWS / ACCLAIM */
    reviews_label:        "Отзывы физиков",
    reviews_title:        "Что говорят читатели и рецензенты",
    reviews_sub:          "Независимые отзывы физиков и читателей о серии «Квантовая теория поля».",
    reviews_label_book:   "Отзывы",
    reviews_title_book:   "Что говорят рецензенты",
    review_read_full:     "Читать полностью",
    review_read_less:     "Свернуть",
    review_translated_note: "Перевод с русского.",

    /* LEARN MORE MODAL */
    lm_title:   "Издание с Rospex",
    lm_intro:   "Мы работаем с учёными и преподавателями над серьёзной научной и образовательной литературой. Вот как устроен процесс:",
    lm_h1:      "Каналы дистрибуции",
    lm_p1:      "Ваша книга появится на rospexpublishing.com для прямых продаж и на крупных международных платформах, включая Google Play Books, Amazon Kindle и Kobo. Существующая дистрибуция в России и СНГ остаётся за вами.",
    lm_h2:      "Права и договор",
    lm_p2:      "Стандартный издательский договор охватывает цифровую дистрибуцию за пределами России и СНГ, сроком на 2-3 года, с ежеквартальной прозрачной отчётностью. Автор письменно подтверждает, что обладает передаваемыми цифровыми правами. При необходимости помогаем вести переговоры с действующим издательством.",
    lm_h3:      "Роялти",
    lm_p3:      "Вы получаете бóльшую долю чистой выручки от прямых продаж через rospexpublishing.com. Для других каналов (Google, Amazon, Kobo и др.) сверху применяются комиссии платформ. Выплаты производятся ежеквартально или по договорённости, с полной отчётностью.",
    lm_h4:      "Поддержка маркетинга",
    lm_p4:      "Мы оформляем метаданные, страницы товара, координируем запуск. Даём рекомендации по продвижению через ваши сети (академические, социальные, выступления) и помогаем с анонсами при запуске.",
    lm_note:    "Важно: автор должен письменно подтвердить, что обладает передаваемыми цифровыми правами. Если права у издательства, мы можем помочь с переговорами.",
    lm_close:   "Закрыть",
    lm_contact: "Связаться",

    /* NOTIFY */
    notify_label: "Будьте в курсе",
    notify_title: "Получите уведомление о выходе",
    notify_sub:   "Узнайте первыми, когда выйдут новые книги.",
    notify_btn:   "Уведомить меня",
    notify_ok:    "Вы в списке. Напишем при выходе книги.",

    /* AUTHOR (authors.html) */
    author_label:    "Об авторе",
    author_title:    "Дмитрий В. Наумов",
    prize1_label:    "Премия", prize1_val: "Премия «Прорыв» по фундаментальной физике, 2016",
    prize2_label:    "Премия", prize2_val: "Премия Европейского физического общества, 2023",
    pubs_label:      "Публикации", pubs_val: "200+ рецензируемых научных работ",
    pos_label:       "Должность", pos_val: "Заместитель директора ЛЯП им. Джелепова, ОИЯИ",
    bio1: "Дмитрий В. Наумов является <strong>доктором физико-математических наук</strong> и заместителем директора Лаборатории ядерных проблем им. Джелепова <strong>Объединённого института ядерных исследований (ОИЯИ)</strong> в Дубне, Россия.",
    bio_new: "Дмитрий В. Наумов является физиком, работающим как теоретик и экспериментатор одновременно, что представляет редкое сочетание в современной физике. Он ведущий специалист в области физики нейтрино, физики элементарных частиц и астрофизики, а также руководитель Нейтринной программы ОИЯИ. На протяжении более 20 лет он читает лекции по квантовой теории поля в МГУ и ОИЯИ.",
    bio2: "Наумов является лауреатом <strong>премии «Прорыв» по фундаментальной физике (2016)</strong>, присуждённой коллаборации Daya Bay за открытие исчезновения электронных нейтрино и точное измерение угла смешивания. В 2023 году он был удостоен <strong>Премии Европейского физического общества</strong> за вклад в физику нейтрино.",
    bio3: "Наумов является автором более <strong>200 научных публикаций</strong> и применяет тот же строгий подход в своих учебниках, созданных как полные курсы для физиков, стремящихся освоить предмет в полном объёме.",
    link_web:         "naumov.jinr.ru",
    link_inspire:     "Профиль INSPIRE-HEP",
    link_neutrinohit: "neutrinohit.github.io",
    link_yt:          "Канал на YouTube",
    link_tg:          "Telegram: NeutrinoHit",
    link_all_authors: "Все авторы",

    /* AUTHORS PAGE PLACEHOLDERS */
    auth_intro_title: "Люди, стоящие за нашими книгами",
    auth_intro_text:  "Rospex Publishing работает с ведущими учёными и преподавателями. Мы активно расширяем состав авторов. В ближайшие месяцы к нам присоединятся новые известные учёные и педагоги.",
    auth_books_label:    "Книги этого автора",
    placeholder_tag:     "Скоро в каталоге",
    placeholder_name:    "Известный автор",
    placeholder_field_a: "Астрофизика и космология",
    placeholder_field_b: "Физика частиц и высоких энергий",
    placeholder_field_c: "Научпоп и образование",
    placeholder_text:    "Мы ведём активные переговоры с ведущими российскими учёными и преподавателями о том, чтобы сделать их работы доступными международным читателям. Профили будут добавлены по мере заключения соглашений.",

    /* PUBLISHER */
    pub_label:    "О нас",
    pub_title:    "Rospex Publishing",
    pub_sub_p1:   "Независимое издательство цифровых книг по науке и образованию, работающее по всему миру.",
    pub_sub_p2:   "Наш каталог представляет собой небольшую специализированную витрину сильных авторов, не массовое издательство обо всём. Фокус: тщательно отобранные учебники и научпоп по физике, астрофизике, космологии, физике частиц и современной науке.",
    pub_sub_p3:   "Наши читатели: русскоязычные учёные, студенты, преподаватели, родители, школьники и любознательные умы по всему миру, желающие читать качественную научную литературу на русском языке. Для избранных книг будут доступны переводы на английский.",
    pub_sub_p4:   "Наша миссия: сделать сильные русскоязычные научные книги доступными читателям везде, в нормальном легальном формате, с прозрачной оплатой и уважением к правам авторов.",
    pub_c1_title: "Глобальная дистрибуция",       pub_c1_text: "Продаём читателям из 135+ стран. Все основные способы оплаты через Stripe.",
    pub_c2_title: "PDF с фиксированной версткой",  pub_c2_text: "Книги, высококачественные PDF с сохранением формул и диаграмм. Оптимально для планшета.",
    pub_c3_title: "Защищённая загрузка",           pub_c3_text: "Персонализированные PDF-ссылки в течение нескольких минут после оплаты.",
    pub_c4_title: "Мгновенная доставка",           pub_c4_text: "Книга придёт на email в течение нескольких минут после оплаты.",

    /* CONTACT PAGE */
    contact_title:          "Связаться с нами",
    contact_intro:          "Мы приветствуем обращения авторов, заинтересованных в публикации, читателей с вопросами и отзывами, а также всех, кто заметил ошибки в наших книгах или на сайте. Мы отвечаем в течение нескольких рабочих дней.",
    contact_first_name:     "Имя",
    contact_last_name:      "Фамилия",
    contact_email:          "Email",
    contact_reason:         "Тема обращения",
    contact_reason_select:  "Выберите…",
    contact_reason_1:       "Хочу издать книгу с Rospex",
    contact_reason_2:       "Отзыв или общий вопрос",
    contact_reason_3:       "Заметил ошибку в книге или на сайте",
    contact_reason_4:       "Другое",
    contact_subject:        "Заголовок",
    contact_subject_help:   "Необязательно: краткое описание",
    contact_message:        "Сообщение",
    contact_message_placeholder: "Опишите детали вашего обращения…",
    contact_submit:         "Отправить",
    contact_success:        "Спасибо. Ваше сообщение отправлено. Мы ответим в течение нескольких рабочих дней.",
    contact_error:          "Что-то пошло не так. Попробуйте снова или напишите напрямую на alex.naumov@rospex.com",
    contact_required:       "обязательно",

    /* FOOTER */
    footer_desc:          "Независимое издательство цифровых книг по науке и образованию, работающее по всему миру. Тщательно отобранные книги ведущих российских научных авторов для читателей повсюду.",
    footer_col2:          "Контакты и ссылки",
    footer_link_contact:  "Связаться с нами",
    footer_link_authors:  "Все авторы",
    footer_link_about:    "О нас",
    footer_link_notify:   "Уведомить о выходе",
    footer_copy:          "Rospex Holdings LLC. Все права защищены.",
    family_label:         "Часть семьи Rospex:",

    /* MODALS */
    modal_notify_sub: "Введите email, и мы напишем одно уведомление при выходе книги.",
    modal_close:      "Закрыть",
  }
};

/* ════════════════════════════════════════════
   REVIEWS — single source of truth
   ────────────────────────────────────────────
   Each review object renders bilingually on book detail pages
   (filtered by `books` array). Reviews do NOT render on the
   homepage — the homepage is positioned as a multi-author publisher
   showcase, so book-specific reviews live on book pages only.

   Required fields per object:
     id             stable identifier
     author         display name in English/Latin (e.g. "V. A. Bednyakov")
     author_ru      Russian/Cyrillic rendering (e.g. "В. А. Бедняков")
     personal_url   URL of reviewer's official/personal page
                    — the name AND a small link below the affiliation both go here
     personal_host  display label for the small link (e.g. "bedny.jinr.ru")
     source_url     URL or local path to the original review (opens in new tab)
                    — for PDFs, a path under assets/reviews/; for web pages, an https URL
     source_label_en, source_label_ru  label for the "View original" link
                                       (e.g. "Original (PDF)" or "Original on naumov.jinr.ru")
     affiliation_en, affiliation_ru
     date           ISO YYYY-MM-DD — leave as empty string "" if the source has no date
     rating         integer 1..5 (5 gold stars rendered)
     books          array — which books this review applies to. Values:
                    "qft-vol1", "qft-vol2", "qft-bundle", "all-qft"
     quote_en, quote_ru   pull-quote (1–2 sentences) — shown immediately
     full_en, full_ru     full review HTML (paragraphs in <p>…</p>) — shown after toggle
     original_lang        "en" or "ru" — if reader's lang differs, a translation note is shown
   ════════════════════════════════════════════ */
const REVIEWS = [
  /* ── Akhmedov — Head of the Landau Department of Theoretical Physics, MIPT ── */
  {
    id: "akhmedov-2026-02-22",
    author: "Emil T. Akhmedov",
    author_ru: "Эмиль Т. Ахмедов",
    personal_url: "https://inspirehep.net/authors/1034455",
    personal_host: "inspirehep.net",
    source_url: "../assets/reviews/Official_Review_by_Akhmedov.pdf",
    source_label_en: "Original review (PDF)",
    source_label_ru: "Оригинал рецензии (PDF)",
    affiliation_en: "Doctor of Physical and Mathematical Sciences, Professor; Head of the L. D. Landau Department of Theoretical Physics, MIPT",
    affiliation_ru: "Доктор физико-математических наук, профессор; заведующий кафедрой теоретической физики им. Л. Д. Ландау, МФТИ",
    date: "2026-02-22",
    rating: 5,
    books: ["all-qft"],
    original_lang: "ru",
    quote_en: "Particular value is given to this work by the fact that it was written by a practicing experimental physicist, while textbooks on quantum field theory have traditionally been created by theorists.",
    quote_ru: "Особую ценность этой работе придаёт тот факт, что она написана практикующим физиком-экспериментатором, в то время как традиционно учебники по квантовой теории поля создаются теоретиками.",
    full_en: "<p>This textbook is based on the author's many years of experience teaching lectures at the Joint Institute for Nuclear Research (JINR, Dubna) and at M. V. Lomonosov Moscow State University. It fully meets the high requirements for training students and graduate students specializing in high-energy physics and related disciplines.</p>" +
             "<p>Particular value is given to this work by the fact that it was written by a practicing experimental physicist, while textbooks on quantum field theory have traditionally been created by theorists. This unique perspective makes the material extraordinarily useful not only for students, but also for established scientists, allowing them to better understand the connection between abstract theoretical constructions and real experimental problems.</p>" +
             "<p>Among the textbook's undoubted strengths:</p>" +
             "<ul><li><strong>Breadth of scope:</strong> the book will be useful not only to specialists in elementary particle physics, but also to researchers from other areas of physics.</li>" +
             "<li><strong>Accessibility of exposition:</strong> the author moves masterfully from the simple to the complex, first giving an intuitive understanding of a phenomenon and then reinforcing it with rigorous derivations. The boundaries of applicability of approximations are discussed in detail, and all stages of calculations are carefully worked through.</li>" +
             "<li><strong>Emphasis on physical intuition:</strong> a vivid example is the detailed treatment of wave packets in place of plane waves, which clarifies the specifics of fermionic commutation relations and the correct construction of scattering amplitudes. Another is the discussion of the interaction potential energy between charges in different theories in the non-relativistic approximation.</li>" +
             "<li><strong>Connection with experiment:</strong> the book provides detailed treatments of the fundamental experiments that laid the foundations of modern elementary particle physics.</li>" +
             "<li><strong>Practical orientation:</strong> an important feature is the large number of carefully selected problems with detailed solutions, which is indispensable for independent study.</li>" +
             "<li><strong>Modern format:</strong> the textbook includes high-quality illustrations, interesting historical excursions, and the use of QR codes for access to animations, which significantly enhances the clarity of complex concepts.</li></ul>" +
             "<p>After my reading of the manuscript, the author was informed of some minor inaccuracies, which were promptly and competently corrected.</p>" +
             "<p>Taking all of the above into account, this textbook will undoubtedly fill an important niche in scientific and educational literature and will be in demand by a wide audience. I look forward with great pleasure to the publication of this truly thorough work.</p>",
    full_ru: "<p>Данное пособие основано на многолетнем опыте чтения автором лекций в Объединённом институте ядерных исследований (ОИЯИ, Дубна) и в МГУ имени М. В. Ломоносова. Оно полностью соответствует высоким требованиям к подготовке студентов и аспирантов, специализирующихся в области физики высоких энергий и смежных дисциплин.</p>" +
             "<p>Особую ценность этой работе придаёт тот факт, что она написана практикующим физиком-экспериментатором, в то время как традиционно учебники по квантовой теории поля создаются теоретиками. Такой уникальный взгляд делает материал чрезвычайно полезным не только для учащихся, но и для состоявшихся учёных, позволяя им глубже понять связь абстрактных теоретических построений с реальными экспериментальными задачами.</p>" +
             "<p>К несомненным достоинствам пособия относятся:</p>" +
             "<ul><li><strong>Широта охвата:</strong> книга будет полезна не только специалистам по физике элементарных частиц, но и исследователям из других областей физики.</li>" +
             "<li><strong>Доступность изложения:</strong> автор мастерски переходит от простого к сложному, сначала давая интуитивное понимание явления, а затем подкрепляя его строгими выкладками. Детально обсуждаются границы применимости приближений и тщательно разбираются все этапы вычислений.</li>" +
             "<li><strong>Акцент на физическую интуицию:</strong> ярким примером является подробный разбор использования волновых пакетов вместо плоских волн, что проясняет специфику коммутационных соотношений для фермионов и корректное построение амплитуд рассеяния. Другим примером является обсуждение потенциальной энергии взаимодействия между зарядами в различных теориях в нерелятивистском приближении.</li>" +
             "<li><strong>Связь с экспериментом:</strong> в книге детально разбираются фундаментальные эксперименты, заложившие основы современной физики элементарных частиц.</li>" +
             "<li><strong>Практическая направленность:</strong> важной особенностью является наличие большого числа тщательно отобранных задач с подробными решениями, что незаменимо для самостоятельной работы.</li>" +
             "<li><strong>Современный формат:</strong> пособие включает качественные иллюстрации, интересные исторические экскурсы, а также использование QR-кодов для доступа к анимационным материалам, что значительно повышает наглядность сложных концепций.</li></ul>" +
             "<p>После моего ознакомления с рукописью автору были указаны на некоторые частные погрешности, которые были им оперативно и качественно исправлены.</p>" +
             "<p>Учитывая всё вышесказанное, данное учебное пособие, без сомнения, заполнит важную нишу в научно-образовательной литературе и будет востребовано широкой аудиторией. Я с большим удовольствием ожидаю публикацию этой действительно основательной работы.</p>"
  },

  /* ── Serbo — Professor, Department of Theoretical Physics, Novosibirsk State University ── */
  {
    id: "serbo-2026-02-20",
    author: "Valeriy G. Serbo",
    author_ru: "Валерий Г. Сербо",
    personal_url: "https://pure.nsu.ru/portal/en/persons/--(47efdb2a-9705-463d-945a-777e36661e83).html",
    personal_host: "pure.nsu.ru",
    source_url: "../assets/reviews/Official_Review_by_Serbo.pdf",
    source_label_en: "Original review (PDF)",
    source_label_ru: "Оригинал рецензии (PDF)",
    affiliation_en: "Doctor of Physical and Mathematical Sciences, Professor of the Department of Theoretical Physics, Novosibirsk State University",
    affiliation_ru: "Доктор физико-математических наук, профессор кафедры теоретической физики Новосибирского государственного университета",
    date: "2026-02-20",
    rating: 5,
    books: ["all-qft"],
    original_lang: "ru",
    quote_en: "This course is not a purely theoretical exercise; it bears directly on the daily work of modern experimental and theoretical physicists, and one feels in it the breath of modern physics.",
    quote_ru: "Этот курс не относится к варианту чисто теоретической теории, он имеет непосредственное отношение к повседневной жизни современных физиков-экспериментаторов и физиков-теоретиков, в нём чувствуется дыхание современной физики.",
    full_en: "<p>The proposed textbook is an original work based on the author's many years of experience teaching the corresponding courses at the Joint Institute for Nuclear Research (JINR, Dubna). It meets the high requirements expected of the knowledge of students and graduate students working at JINR.</p>" +
             "<p>Despite the existence of such excellent texts on this subject as Berestetskii, Lifshitz, Pitaevskii's <em>Quantum Electrodynamics</em> and Peskin and Schroeder's <em>An Introduction to Quantum Field Theory</em>, this book will prove extraordinarily useful not only to students and graduate students but also to working physicists, for a number of reasons. Some sections of the textbook may also be useful for students of other specialties.</p>" +
             "<p>This textbook differs from known books on quantum field theory and elementary particle physics in the breadth of material covered (from the foundations of relativistic quantum mechanics to renormalization and quantum anomalies) and in its original manner of presenting individual topics. Let me give concrete examples.</p>" +
             "<p>The chapter on the relativistic Klein–Fock–Gordon equation is written in a lively and engaging way, with a detailed analysis of the problems that arise in the relativistic equation compared with the analogous non-relativistic Schrödinger equation.</p>" +
             "<p>In the chapter on the Standard Model, the exposition begins with the choice of a model Lagrangian with a single generation of leptons. The properties of such a model are then studied in detail. Only afterwards does the transition take place to the realistic model with three generations of quarks and the derivation of the Feynman rules. This approach is fully justified, as it allows the reader to be gradually introduced into the complex world of the Standard Model.</p>" +
             "<p>In the chapter on neutrino and antineutrino scattering on electrons, all the complex calculations are given with sufficient completeness for the beginner to follow every step. For a number of reactions, qualitative considerations are given that help the reader picture the result more clearly.</p>" +
             "<p>The chapter on deep-inelastic scattering of charged leptons on a nucleon offers a detailed analysis not only of the theoretical problems of such processes, but also an excellent overview of a large body of experimental data from various experimental groups. Likewise, in the chapter devoted to quantum anomalies, both the theoretical questions related to chiral anomalies, decays of neutral pions, and triangle diagrams in the Standard Model, and the corresponding experiments, are discussed in detail. The author's magnificent ability to describe complex experiments in simple language, highlighting what matters and leaving aside inessential details, deserves particular note.</p>" +
             "<p>An important and attractive feature of this textbook is the presence not only of a large number of carefully selected and instructive problems, but also of detailed solutions to those problems, which will undoubtedly prove very useful to a wide range of readers. One more attractive feature should be noted: this course is not a purely theoretical exercise; it bears directly on the daily work of modern experimental and theoretical physicists, and one feels in it the breath of modern physics.</p>" +
             "<p>The excellent illustrations and the very interesting historical material that helps to understand the genesis of many complex concepts of modern elementary particle physics deserve special mention. Moreover, the book uses QR codes that allow readers, with a mobile phone, to access animations of complex concepts, making the study of the material still more illustrative. The language of the textbook is far from dry academicism; it is close to the conversational language of lectures, simple and precise.</p>" +
             "<p>Additionally, I would like to note that after a careful reading of the manuscript I noted some minor inaccuracies and small errors, which were corrected by the author.</p>",
    full_ru: "<p>Предлагаемое учебное пособие является оригинальной разработкой, основанной на многолетнем опыте преподавания автором соответствующих курсов в Объединённом институте ядерных исследований (ОИЯИ, Дубна). Оно соответствует высоким требованиям, предъявляемым к уровню знаний студентов и аспирантов, работающих в ОИЯИ.</p>" +
             "<p>Несмотря на наличие таких прекрасных пособий по данному предмету, как Берестецкий, Лифшиц, Питаевский <em>Квантовая электродинамика</em> и Пескин, Шрёдер <em>Введение в квантовую теорию поля</em>, данная книга окажется чрезвычайно полезной не только для студентов и аспирантов, но и для работающих физиков по целому ряду причин. Некоторые разделы этого учебного пособия могут оказаться полезными и для студентов других специальностей.</p>" +
             "<p>Этот учебник отличается от известных книг по квантовой теории поля и физике элементарных частиц широтой охватываемого материала (от основ релятивистской квантовой механики до перенормировок и квантовых аномалий) и оригинальной манерой изложения отдельных тем. Приведу конкретные примеры.</p>" +
             "<p>Глава о релятивистском уравнении Клейна–Фока–Гордона написана живо и интересно, с детальным разбором проблем, которые обнаруживаются в релятивистском уравнении по сравнению с аналогичным нерелятивистским уравнением Шрёдингера.</p>" +
             "<p>В главе про Стандартную модель изложение начинается с выбора модельного лагранжиана с одним поколением лептонов. Затем подробно изучаются свойства такой модели. И только потом происходит переход к реалистической модели с тремя поколениями кварков и с выводом правил Фейнмана. Такой подход вполне оправдан, так как позволяет постепенно вводить читателя в сложный мир Стандартной модели.</p>" +
             "<p>В главе про рассеяние нейтрино и антинейтрино на электроне все сложные расчёты приведены с достаточной полнотой, чтобы начинающий читатель мог проследить все этапы вычислений. Для ряда реакций приведены качественные соображения, помогающие более наглядно представить полученный результат.</p>" +
             "<p>В главе про глубоконеупругое рассеяние заряженных лептонов на нуклоне дан детальный разбор не только теоретических проблем таких процессов, но и отличный обзор большого набора экспериментальных данных различных экспериментальных групп. Точно так же в главе, посвящённой квантовым аномалиям, подробно разбираются как теоретические вопросы, связанные с киральными аномалиями, распадами нейтральных пионов и треугольными диаграммами в Стандартной модели, так и соответствующие эксперименты. Следует отметить великолепное умение автора рассказывать о сложных экспериментах простым языком, выделяя главное и опуская несущественные детали.</p>" +
             "<p>Важной и привлекательной особенностью данного пособия является наличие не только большого числа тщательно отобранных и поучительных задач, но и подробных решений этих задач, что несомненно окажется очень полезным для целого ряда читателей. Важно отметить ещё одну привлекательную особенность этого пособия. Этот курс не относится к варианту чисто теоретической теории, он имеет непосредственное отношение к повседневной жизни современных физиков-экспериментаторов и физиков-теоретиков, в нём чувствуется дыхание современной физики.</p>" +
             "<p>Особо следует отметить прекрасные иллюстрации и наличие очень интересных исторических сведений, помогающих понять генезис многих сложных понятий современной физики элементарных частиц. Более того, в книге используются QR-коды, которые позволяют читателям с помощью мобильного телефона получать доступ к анимациям сложных концепций, что делает изучение материала ещё более наглядным. Язык учебника далёк от сухого академизма, он близок к разговорному языку лекций, прост и точен.</p>" +
             "<p>Дополнительно хочу сообщить, что после внимательного прочтения рукописи я отметил некоторые погрешности и небольшие ошибки, которые были исправлены автором.</p>"
  },

  /* ── Bednyakov — published on naumov.jinr.ru/1145/ ── */
  {
    id: "bednyakov-2026-05-25",
    author: "Vadim A. Bednyakov",
    author_ru: "Вадим А. Бедняков",
    personal_url: "https://bedny.jinr.ru/",
    personal_host: "bedny.jinr.ru",
    source_url: "https://naumov.jinr.ru/1145/",
    source_label_en: "Original on naumov.jinr.ru",
    source_label_ru: "Оригинал на naumov.jinr.ru",
    affiliation_en: "Doctor of Physical and Mathematical Sciences, V. P. Dzhelepov Laboratory of Nuclear Problems, JINR",
    affiliation_ru: "Доктор физико-математических наук, Лаборатория ядерных проблем им. В. П. Джелепова, ОИЯИ",
    date: "2026-05-25",
    rating: 5,
    books: ["all-qft"],
    original_lang: "ru",
    quote_en: "I would call this creation of a brilliant human mind a Guidebook to modern elementary particle physics and its deep theoretical foundations.",
    quote_ru: "Я бы назвал это творение блестящего ума человеческого Путеводителем по современной физике элементарных частиц и её глубинным теоретическим основам.",
    full_en: "<p>A few words about the remarkable book by my colleague, Doctor of Physical and Mathematical Sciences, Deputy Director of the V. P. Dzhelepov Laboratory of Nuclear Problems — Dmitry Vadimovich Naumov, <em>Quantum Field Theory for Experimentalists and Beyond</em>.</p>" +
             "<p>Formally, this is a substantial, near the limit of the possible, printed construction of 1,000+ pages, modestly called a textbook. One can agree with that designation only as a nod to the centuries-old tradition of writing educational literature.</p>" +
             "<p>I would call this creation of a brilliant human mind a Guidebook to modern elementary particle physics and its deep theoretical foundations. It is precisely a Guidebook, led by a wise teacher-guide invisibly present beside the reader, intimately familiar not only with the problems and complexities of modern precision experiments, but also with all the pitfalls of the difficult and at times sharply contradictory landscape of field theory.</p>" +
             "<p>The structure of this Guidebook reflects a modern tendency of physical science itself — the mutually enriching union of new with old, of the well-known and accepted with what is only being born today at the most advanced frontiers of experimental and theoretical elementary particle physics, neutrino physics, and astrophysics.</p>" +
             "<p>The author cares deeply about what he is telling, and equally deeply about those who are listening. For this reason he supplements each chapter of his engaging narrative with a substantial set of problems, a list of useful literature, varied and richly illustrated examples, and, in my view, an outstanding innovation in the form of QR codes. These instantly direct the interested reader to online resources containing video materials prepared by the author, which make even the most challenging propositions and facts visible and more understandable. In great measure this technique widens the horizon of the Book and, in my view, gives it the status of a Guidebook to the Map of Science mentioned above.</p>" +
             "<p>In closing, I want to note that these 1,000 pages were written by the author practically before my eyes — in the office opposite mine, where he superbly combined the responsible and multifaceted work of a Deputy Director of LNP with the no less responsible and meticulous work of creating the Book that you, dear reader, are holding in your hands.</p>",
    full_ru: "<p>Хочется сказать несколько слов о замечательной книге моего коллеги, доктора физико-математических наук, заместителя директора Лаборатории ядерных проблем им. В. П. Джелепова — Дмитрия Вадимовича Наумова «Квантовая теория поля для экспериментаторов и не только».</p>" +
             "<p>С формальной точки зрения — это увесистая, на грани возможного, печатная конструкция из 1000+ страниц, скромно называемая учебником. С этим, если и можно согласиться, то лишь отдавая дань многовековой традиции написания учебной литературы.</p>" +
             "<p>Я бы назвал это творение блестящего ума человеческого Путеводителем по современной физике элементарных частиц и её глубинным теоретическим основам. Это именно Путеводитель, возглавляемый незримо присутствующим рядом с читателем мудрым гидом-учителем, хорошо знающим не только проблемы и сложности современных прецизионных экспериментов, но и все подводные камни непростого и порой крайне противоречивого теоретико-полевого ландшафта.</p>" +
             "<p>Структура этого Путеводителя отражает современную тенденцию самой физической науки — взаимообогащающее единство нового со старым, хорошо известного и общепринятого с тем, что только рождается сегодня на самых передовых рубежах экспериментальной и теоретической физики элементарных частиц, физики нейтрино и астрофизики.</p>" +
             "<p>Автор Книги очень неравнодушен к тому, что он рассказывает, он также неравнодушен и к тем, кто его слушает. По этой причине он каждую главу своего увлекательного повествования дополняет большим числом задач, списком полезной литературы, разнообразными красочно оформленными примерами и, с моей точки зрения, выдающимся ноу-хау в виде QR-кодов. Они мгновенно отсылают заинтересованного читателя к интернет-ресурсам, где содержатся подготовленные автором видеоматериалы, делающие не самые простые научные положения и факты наглядными и более понятными. В значительной степени этот приём расширяет горизонт Книги и, с моей точки зрения, придаёт ей статус упомянутого выше Путеводителя по Карте Науки.</p>" +
             "<p>В заключение хочется отметить, что эти 1000 страниц написаны автором практически на моих глазах — в кабинете напротив, где он прекрасно совмещал ответственную и многоплановую работу заместителя директора ЛЯП с не менее ответственной и тщательной работой по созданию Книги, которую вы, дорогой читатель, держите в своих руках.</p>"
  },

  /* ── Kazakov — published on naumov.jinr.ru/1323/ (no explicit date on source) ── */
  {
    id: "kazakov-2026",
    author: "Dmitry I. Kazakov",
    author_ru: "Дмитрий И. Казаков",
    personal_url: "https://new.ras.ru/academy-new/staff/chlen-korrespondent-ran/kazakov-dmitriy-igorevich/",
    personal_host: "new.ras.ru",
    source_url: "https://naumov.jinr.ru/1323/",
    source_label_en: "Original on naumov.jinr.ru",
    source_label_ru: "Оригинал на naumov.jinr.ru",
    affiliation_en: "Doctor of Physical and Mathematical Sciences, Corresponding Member of the Russian Academy of Sciences, Director of the Bogoliubov Laboratory of Theoretical Physics, JINR",
    affiliation_ru: "Доктор физико-математических наук, член-корреспондент РАН, директор Лаборатории теоретической физики им. Боголюбова, ОИЯИ",
    date: "",
    rating: 5,
    books: ["all-qft"],
    original_lang: "ru",
    quote_en: "The book is especially valuable because it shows quantum field theory as a working tool not only for theorists, but also for experimentalists.",
    quote_ru: "Книга особенно ценна тем, что показывает квантовую теорию поля как рабочий инструмент не только для теоретиков, но и для экспериментаторов.",
    full_en: "<p>Before you is an unusual textbook on quantum field theory. It combines rigour of formulation with accessibility of exposition, and a clear explanation of the physical nature of the phenomena discussed; it also tells the dramatic history of the birth of quantum theory. The book is especially valuable because it shows quantum field theory as a working tool not only for theorists, but also for experimentalists. A large place in it is given to calculations of real physical processes and work with Feynman diagrams.</p>" +
             "<p>One can also note a rare strength of the book: one of the most difficult topics of quantum field theory — the theory of renormalization and quantum anomalies — is presented here clearly and accessibly, without losing rigour.</p>" +
             "<p>At the same time this is a textbook of a new time: it contains not only superb illustrations, but also QR codes with animations and illustrative material, problems, and even topics for independent research. This book can confidently be recommended to those who intend not only to study quantum field theory, but also to put it to use in practice.</p>",
    full_ru: "<p>Перед вами необычный учебник по квантовой теории поля. Он сочетает строгость формулировок и, в то же время, доступность изложения, ясное объяснение физической природы обсуждаемых явлений; в нём также рассказывается и о драматической истории рождения квантовой теории. Книга особенно ценна тем, что показывает квантовую теорию поля как рабочий инструмент не только для теоретиков, но и для экспериментаторов. Большое место в ней занимают вычисления реальных физических процессов и работа с диаграммами Фейнмана.</p>" +
             "<p>Можно также отметить редкое достоинство книги: одна из самых сложных тем квантовой теории поля — теория перенормировок и квантовые аномалии — изложена здесь ясно и доступно, без потери строгости.</p>" +
             "<p>В то же время это учебник нового времени: в нём есть не только замечательные иллюстрации, но и QR-коды с анимациями и наглядными материалами, задачи и даже темы для самостоятельных исследований. Эту книгу можно смело рекомендовать тем, кто собирается не только изучить квантовую теорию поля, но и применять её на практике.</p>"
  }
];
