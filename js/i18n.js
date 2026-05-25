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
    bundle_save:     "Bundle, save 14%",
    qft_en_desc:     "Complete English translation of the two-volume series. Expected in 3 to 4 weeks.",
    solar_ru_title:  "Solar Neutrino",
    solar_ru_desc:   "Popular science for curious readers of all ages. Neutrino physics explained by a world-leading expert. Russian edition.",
    solar_en_title:  "Solar Neutrino",
    solar_en_desc:   "Popular science for curious readers of all ages. Neutrino physics explained by a world-leading expert. English edition.",
    btn_buy:         "Buy Now",
    btn_buy_bundle:  "Buy Bundle",
    btn_notify:      "Notify Me",
    btn_preview:     "Preview",

    /* BOOK PAGE – subtitles (Change 1) */
    qft1_book_subtitle:    "Volume 1. Practical course with examples, problems, and solutions",
    qft2_book_subtitle:    "Volume 2. Practical course with examples, problems, and solutions",
    bundle_book_subtitle:  "Volumes 1 and 2. Practical course with examples, problems, and solutions",

    /* BOOK PAGE – price block labels (Changes 2, 3) */
    digital_edition:        "Digital Edition (PDF)",
    digital_edition_bundle: "Complete Digital Edition (2 PDFs)",
    promo_code_note:        "If you have a promotional code, you can enter it on the checkout page after clicking Buy Now.",

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
    also_bundle_link: "QFT Bundle (Vol. I and II), $59.99, save 14%",
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

    /* LEARN MORE MODAL */
    lm_title:   "Publishing with Rospex",
    lm_intro:   "We work with researchers and educators on serious science and education books. Here is how the process works:",
    lm_h1:      "Distribution channels",
    lm_p1:      "Your book appears on rospexpublishing.com for direct sales, and on major international platforms including Google Play Books, Amazon Kindle, and Kobo. You retain your existing distribution in Russia and CIS.",
    lm_h2:      "Rights and agreement",
    lm_p2:      "A standard publishing agreement covers digital distribution outside Russia and CIS, with 2 to 3 year terms and quarterly transparent reporting. Authors confirm in writing that they hold the digital rights being granted. We can help negotiate with existing publishers if rights are held by them.",
    lm_h3:      "Royalties",
    lm_p3:      "65% of net revenue on direct sales through rospexpublishing.com. Platform fees apply on top for other channels (Google, Amazon, Kobo). Payments are made quarterly with full reporting.",
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
    bundle_save:     "Комплект, скидка 14%",
    qft_en_desc:     "Полный английский перевод двухтомной серии. Ожидается через 3-4 недели.",
    solar_ru_title:  "Солнечное нейтрино",
    solar_ru_desc:   "Научно-популярная книга для читателей всех возрастов. Физика нейтрино от ведущего мирового эксперта. Русское издание.",
    solar_en_title:  "Solar Neutrino",
    solar_en_desc:   "Научно-популярная книга на английском языке. Ожидается через 2-3 месяца.",
    btn_buy:         "Купить",
    btn_buy_bundle:  "Купить комплект",
    btn_notify:      "Уведомить меня",
    btn_preview:     "Предпросмотр",

    /* BOOK PAGE – subtitles */
    qft1_book_subtitle:    "Том 1. Практический курс с примерами, задачами и решениями",
    qft2_book_subtitle:    "Том 2. Практический курс с примерами, задачами и решениями",
    bundle_book_subtitle:  "Тома 1 и 2. Практический курс с примерами, задачами и решениями",

    /* BOOK PAGE – price block labels */
    digital_edition:        "Цифровое издание (PDF)",
    digital_edition_bundle: "Полное цифровое издание (2 PDF)",
    promo_code_note:        "Если у вас есть промокод, введите его на странице оплаты после нажатия кнопки «Купить».",

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
    also_bundle_link: "Комплект КТП (Тома I и II), $59.99, скидка 14%",
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

    /* LEARN MORE MODAL */
    lm_title:   "Издание с Rospex",
    lm_intro:   "Мы работаем с учёными и преподавателями над серьёзной научной и образовательной литературой. Вот как устроен процесс:",
    lm_h1:      "Каналы дистрибуции",
    lm_p1:      "Ваша книга появится на rospexpublishing.com для прямых продаж и на крупных международных платформах, включая Google Play Books, Amazon Kindle и Kobo. Существующая дистрибуция в России и СНГ остаётся за вами.",
    lm_h2:      "Права и договор",
    lm_p2:      "Стандартный издательский договор охватывает цифровую дистрибуцию за пределами России и СНГ, сроком на 2-3 года, с ежеквартальной прозрачной отчётностью. Автор письменно подтверждает, что обладает передаваемыми цифровыми правами. При необходимости помогаем вести переговоры с действующим издательством.",
    lm_h3:      "Роялти",
    lm_p3:      "65% чистой выручки от прямых продаж на rospexpublishing.com. Для других каналов (Google, Amazon, Kobo) дополнительно применяются комиссии платформ. Выплаты ежеквартально с полной отчётностью.",
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
