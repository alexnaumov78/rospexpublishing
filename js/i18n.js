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
    hero_sub:    "Curated digital editions of science textbooks and popular reading from Russia's leading authors: physics, astronomy, biophysics, and the earth sciences.",
    hero_cta1:   "Browse All Books",
    hero_cta2:   "Our Authors",

    /* CATALOG */
    avail_label:   "Available Now",
    avail_title:   "Quantum Field Theory Series",
    avail_sub:     "Two comprehensive graduate-level volumes, rigorous and practical, written for physicists who work with experiment.",
    coming_label:  "Coming Soon",
    coming_title:  "Upcoming Releases",
    coming_sub:    "English editions of the QFT series and the Solar Neutrino popular science book.",
    iiki_label:    "From the IIKI Catalog",
    iiki_title:    "Russian Science & Popular Reading",
    iiki_sub:      "Graduate textbooks and monographs from Novosibirsk State University and Moscow State University, in Russian.",

    /* BOOKS – shared labels */
    qft_title_en:    "Quantum Field Theory for Experimentalists and Beyond",
    qft_title_ru:    "Quantum Field Theory for Experimentalists and Beyond",
    qft_author:      "Dmitry V. Naumov",
    qft_vol1_fulltitle:   "Quantum Field Theory for Experimentalists and Beyond, Volume I",
    qft_vol2_fulltitle:   "Quantum Field Theory for Experimentalists and Beyond, Volume II",
    qft_bundle_fulltitle: "QFT Complete Edition: Volumes I and II",
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
    btn_preview:     "Preview",
    preview_note_generic: "Opening pages only — protected preview",
    toc_h: "Table of Contents (Russian)",
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
    gp_comparison:          "Both volumes here for $47.99, a $12 saving vs. Google Play.",
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
    footer_copy:          "Rospex Holdings LLC. All rights reserved.",
    footer_link_refund: 'Delivery & Refunds',
    rp_label: 'Buying from us',
    rp_title: 'Delivery & Refund Policy',
    rp_delivery_h: 'How delivery works',
    rp_delivery_p1: 'Immediately after payment, we email you a secure download link (to the address you enter at checkout). The link stays valid for 72 hours. Your PDF is personalized with your name and email and protected with a password. The password is simply the email address you used at checkout.',
    rp_delivery_p2: 'If the email does not arrive within 15 minutes, please check your spam folder, then write to books@rospexpublishing.com and we will resend it promptly.',
    rp_refund_h: 'Refunds',
    rp_refund_p1: 'We offer a full refund within 14 days of purchase if you were charged but did not receive the book, if the file is defective and we cannot fix it, or if you accidentally bought the same title twice.',
    rp_refund_p2: 'Because each book is a digital file delivered instantly and personalized to the buyer, we cannot routinely refund purchases once the file has been downloaded. That said, we are a small publisher and would rather be fair than formal. If something is not right, write to us and we will find a solution.',
    rp_how_h: 'How to request a refund',
    rp_how_p1: 'Email books@rospexpublishing.com from the address you used at checkout (or mention it), with the book title and the purchase date. Refunds go back to the original payment method via Stripe and typically appear within 5 to 10 business days.',
    rp_region_h: 'Regional availability',
    rp_region_p1: 'Due to territorial publishing rights, our digital editions are not sold in Russia or CIS countries, and payments from these regions cannot be processed.',
    trust_line: 'Instant email delivery · Personalized PDF · <a href="../refund-policy.html" style="color:var(--gold-lt)">14-day refund policy</a>',
    family_label:         "Part of the Rospex family:",

    /* MODALS */
    modal_close:      "Close",

    /* ══════════ IIKI EXPANSION (EN) ══════════ */

    /* NAV + HERO (hero_sub rewritten in place above? — kept here for the new label) */
    nav_categories: "Categories",

    /* BROWSE BY CATEGORY (homepage section) */
    browse_cat_label: "Browse the Catalog",
    browse_cat_title: "Browse by Category",
    browse_cat_sub:   "Six subject areas across physics, the life sciences, and the history of science, from graduate textbooks to popular reading.",
    search_placeholder: "Search books, authors, topics…",
    search_results_for: "results for",
    search_no_results: "No matches. Try another word, or browse by category:",

    /* CATEGORY NAMES + ONE-LINE BLURBS */
    cat_c1_name:  "Quantum & Particle Physics",
    cat_c1_blurb: "Quantum mechanics, quantum field theory, and the physics of elementary particles.",
    cat_c2_name:  "Classical & Theoretical Physics",
    cat_c2_blurb: "Classical, analytical, and theoretical mechanics: the foundations of physics.",
    cat_c3_name:  "Astronomy, Astrophysics & Cosmology",
    cat_c3_blurb: "Stars, galaxies, neutrinos, and the structure and history of the Universe.",
    cat_c4_name:  "Earth & Planetary Sciences",
    cat_c4_blurb: "Geology, geophysics, and the sciences of the Earth and the planets.",
    cat_c5_name:  "Biophysics & Life Sciences",
    cat_c5_blurb: "The physics of living systems, from molecules and membranes to photosynthesis and vision.",
    cat_c6_name:  "History of Science & Popular Reading",
    cat_c6_blurb: "Popular science and the history of scientific ideas, for curious readers of all backgrounds.",

    /* CATALOG UI */
    catalog_title:          "Catalog",
    catalog_filter_all:     "All",
    catalog_filter_textbook:"Textbooks",
    catalog_filter_popular: "Popular Science",
    audience_textbook:      "Textbook",
    audience_popular:       "Popular Science",
    coming_soon_badge:      "Coming soon",

    /* NSU CURRICULUM RAIL */
    nsu_rail_label: "Part of the NSU mechanics → QFT sequence",

    /* ── BOOK 1: Collected Problems in Classical Mechanics (mech_problems) ── */
    mech_problems_title: "Collected Problems in Classical Mechanics",
    mech_problems_short: "The classic Novosibirsk problem book: 13 thematic sections, every problem worked through in full.",
    mech_problems_about_p1: "One of the most enduring physics problem books to come out of Novosibirsk State University. Begun in 1966 by Gleb Kotkin as a system of assignments “in the spirit of the Landau–Lifshitz course” and refined with Valery Serbo over more than half a century of teaching, this fifth Russian edition (2021, 404 pp.) is the most complete to date.",
    mech_problems_about_p2: "Thirteen sections track the standard theoretical-mechanics syllabus, from one-dimensional motion and central fields to canonical transformations and adiabatic invariants. Crucially, each problem is followed by a full worked solution, so the book serves both as an exercise set and as a self-study companion. By coverage it corresponds to Landau–Lifshitz’s Mechanics and Goldstein’s Classical Mechanics; the Russian original behind Oxford’s Exploring Classical Mechanics (2020).",
    mech_problems_kp1: "Thirteen graded sections, from Newtonian motion to adiabatic invariants",
    mech_problems_kp2: "Every problem followed by a complete worked solution",
    mech_problems_kp3: "Coverage matched to Landau–Lifshitz and Goldstein",
    mech_problems_kp4: "The Russian original behind Oxford’s Exploring Classical Mechanics (2020)",
    mech_problems_audience: "Physics and mathematics undergraduates, graduate students, and lecturers. Opening sections need only Newtonian mechanics; Lagrangian and Hamiltonian methods are introduced progressively.",

    /* ── BOOK 2: Lectures on Analytical Mechanics (analytical_mech) ── */
    analytical_mech_title: "Lectures on Analytical Mechanics",
    analytical_mech_short: "A modern NSU lecture course in analytical mechanics, the gateway to field theory, quantum mechanics, and statistical physics.",
    analytical_mech_about_p1: "Lectures on Analytical Mechanics distils decades of teaching by the Novosibirsk State University theory group into a single graduate-bridging course. Written by Gleb Kotkin, Valery Serbo, and Alexander Chernykh, this third edition (2022, 272 pp.) presents analytical mechanics not as an end in itself but as the foundation for the rest of theoretical physics.",
    analytical_mech_about_p2: "Five chapters carry the reader from Newtonian central-field motion and scattering through Lagrangian mechanics, oscillations, the Hamiltonian formalism, and rigid-body dynamics. A distinctive feature of this edition is roughly ten new illustrative sections (the classical Zeeman effect, an EPR/NMR model, the Penning trap, Lagrange points, and an introduction to dynamical chaos), with seminar-tested problems at every step.",
    analytical_mech_kp1: "Lagrangian and Hamiltonian formalism, oscillations, and rigid-body motion",
    analytical_mech_kp2: "Framed explicitly as preparation for field theory, QM, and statistical physics",
    analytical_mech_kp3: "~10 new applied sections (Zeeman effect, Penning trap, dynamical chaos)",
    analytical_mech_kp4: "Seminar-tested problems integrated with every topic",
    analytical_mech_audience: "Upper-division physics and mathematics undergraduates, graduate students, and lecturers. Prerequisites: introductory mechanics, calculus, and linear algebra.",

    /* ── BOOK 3: Lectures on Quantum Mechanics (qm_lectures) ── */
    qm_lectures_title: "Lectures on Quantum Mechanics",
    qm_lectures_short: "A Novosibirsk lecture course in quantum mechanics by Serbo and Khriplovich, the quantum step toward field theory and particle physics.",
    qm_lectures_about_p1: "Lectures on Quantum Mechanics by V. G. Serbo and I. B. Khriplovich (2023, 266 pp.) grows out of many years of lectures and seminars on the Physics Faculty of Novosibirsk State University. It is written in the clear, physically motivated style of the Novosibirsk school, pairing each topic with problems tested in the classroom.",
    qm_lectures_about_p2: "The course is the quantum-mechanics link in the NSU sequence that runs from classical and analytical mechanics through quantum mechanics to elementary particle physics and quantum field theory. Co-authored by Iosif Khriplovich, a corresponding member of the Russian Academy of Sciences and a Pomeranchuk Prize laureate known for his work on atomic parity violation, it carries the authority of one of the leading Soviet and Russian schools of theoretical physics.",
    qm_lectures_kp1: "A complete one-course treatment of non-relativistic quantum mechanics",
    qm_lectures_kp2: "Problems tested over many years of NSU seminars",
    qm_lectures_kp3: "Prepares directly for elementary particle physics and QFT",
    qm_lectures_kp4: "Co-authored by I. B. Khriplovich, Corresponding Member of the RAS",
    qm_lectures_audience: "Physics undergraduates and graduate students, and lecturers. Prerequisites: classical and analytical mechanics, calculus, and linear algebra.",

    /* ── BOOK 4: Lectures on Elementary Particle Physics (epp_lectures) ── */
    epp_lectures_title: "Lectures on Elementary Particle Physics",
    epp_lectures_short: "A hands-on introductory course from NSU and the Budker Institute, bridging quantum field theory and real accelerator experiments.",
    epp_lectures_about_p1: "Lectures on Elementary Particle Physics (Introductory Course) by V. G. Serbo and A. S. Rudenko (2025, 232 pp.) distils the authors’ long experience teaching the one-semester particle-physics course to fourth-year physics students at Novosibirsk State University. Its defining feature is its connection to the Budker Institute of Nuclear Physics (BINP), the base institute for the course.",
    epp_lectures_about_p2: "Rather than a purely formal treatment of quantum field theory, the book keeps a constant link to real experimental processes measured on BINP’s colliders. Beginning with familiar objects worked through in deliberate detail, it builds the apparatus of relativistic field theory (the Lagrangian formalism and conservation laws, scalar and Dirac fields, and the Feynman-diagram technique) and culminates in a student project computing real cross sections and event rates. A concluding “Supplements” section offers mini-reviews tied to modern experiment.",
    epp_lectures_kp1: "Experiment-anchored: tied to the Budker INP and real collider processes",
    epp_lectures_kp2: "Genuinely introductory, paced from familiar objects to advanced material",
    epp_lectures_kp3: "Learn to draw and compute Feynman diagrams",
    epp_lectures_kp4: "A required project: compute cross sections and event rates for a real accelerator",
    epp_lectures_audience: "Fourth-year physics undergraduates, graduate students, and lecturers. Prerequisites: general physics, classical and quantum mechanics, and special relativity.",

    /* ── BOOK 5: Biophysics, Vol. I — Theoretical Biophysics (biophys_v1) ── */
    biophys_v1_title: "Biophysics, Vol. I: Theoretical Biophysics",
    biophys_v1_short: "Volume I of Academician Rubin’s standard textbook: kinetics, thermodynamics, mathematical modelling, and molecular biophysics.",
    biophys_v1_about_p1: "The opening volume of Academician Andrey B. Rubin’s three-volume Biophysics, the foundational Russian-language textbook of the discipline (4th edition, 2013, 472 pp.; recommended for the Biology direction and the Biophysics specialty). It develops the theoretical apparatus on which the cellular, membrane, and photobiological material of Volumes II and III rests.",
    biophys_v1_about_p2: "Part I, Biophysics of complex systems, covers the kinetics of biological processes (dynamic models, biological triggers, oscillations, deterministic chaos) and the thermodynamics of open systems near and far from equilibrium. Part II, Molecular biophysics, treats the spatial organisation of biopolymers, intramolecular interactions, conformational energy, protein folding, and the dynamic properties of globular proteins. A strong mathematical-modelling thread runs throughout, a hallmark of the Moscow biophysics school.",
    biophys_v1_kp1: "Kinetics of biological processes: triggers, oscillations, deterministic chaos",
    biophys_v1_kp2: "Thermodynamics of open systems near and far from equilibrium",
    biophys_v1_kp3: "Molecular biophysics: biopolymer conformations and protein folding",
    biophys_v1_kp4: "A strong mathematical-modelling thread throughout",
    biophys_v1_audience: "University students and postgraduates in Biology and Biophysics, and researchers in physico-chemical biology. Assumes the standard first–third-year university grounding in biology, physics, chemistry, and calculus.",

    /* ── BOOK 6: Biophysics, Vol. II — Cellular & Membrane Processes (biophys_v2) ── */
    biophys_v2_title: "Biophysics, Vol. II: Biophysics of Cellular Processes, Membrane Processes",
    biophys_v2_short: "Volume II, the cellular and membrane core: transport, bioelectrogenesis, ion channels, bioenergetics, and muscle contraction.",
    biophys_v2_about_p1: "The central volume of Academician Andrey B. Rubin’s three-volume Biophysics (4th edition, 2013, 384 pp.). Building on the theoretical apparatus of Volume I, it turns to the physico-chemical mechanisms of the most important processes in living cells.",
    biophys_v2_about_p2: "It covers the molecular organisation and conformational properties of biological membranes; the transport of non-electrolytes and ions (electrodiffusion, ion channels, selectivity and gating, the Hodgkin–Huxley model of excitable membranes, and active transport); and energy transformation in biomembranes, including electron transport, proton translocation, and the ATPase molecular motor, together with the physics of muscle contraction and intracellular signalling. The treatment combines rigorous physico-chemical models with quantitative, often mathematically modelled, descriptions.",
    biophys_v2_kp1: "Membrane structure, transport, and bioelectrogenesis",
    biophys_v2_kp2: "Ion channels: selectivity, gating, and the Hodgkin–Huxley model",
    biophys_v2_kp3: "Bioenergetics: electron transport and the ATPase molecular motor",
    biophys_v2_kp4: "Muscle contraction and the actin–myosin motor",
    biophys_v2_audience: "University students and postgraduates in Biology and Biophysics, and researchers in membrane biophysics, neurophysiology, and bioenergetics. Helpful to have read Volume I.",

    /* ── BOOK 7: Biophysics, Vol. III — Photobiological Processes (biophys_v3) ── */
    biophys_v3_title: "Biophysics, Vol. III: Biophysics of Cellular Processes, Photobiological Mechanisms",
    biophys_v3_short: "Volume III, the photobiological capstone: charge transfer in biopolymers, the primary processes of photosynthesis, and vision.",
    biophys_v3_about_p1: "The concluding volume of Academician Andrey B. Rubin’s three-volume Biophysics (4th edition, 2013, 480 pp.). It carries the reader from the quantum-mechanical foundations of biomolecular electronics to the primary acts of photosynthesis and vision, reflecting Rubin’s own principal research field, the biophysics of photosynthesis.",
    biophys_v3_about_p2: "It opens with the electronic properties of biopolymers (the quantum description of molecules, mechanisms of charge transfer and energy migration through tunnelling and the Marcus and Jortner theories, and enzymatic catalysis), then treats the primary processes of photosynthesis (antenna complexes, reaction centres, photosystems I and II) and the primary photoprocesses of biological systems (bacteriorhodopsin, rhodopsin and vision, phytochromes, and photodestruction). The treatment is strongly physical and quantitative, integrating quantum theory, laser-spectroscopy data, and mathematical modelling.",
    biophys_v3_kp1: "Quantum foundations of charge transfer in biopolymers (Marcus/Jortner theory)",
    biophys_v3_kp2: "Primary processes of photosynthesis: antenna complexes, reaction centres, PS I & II",
    biophys_v3_kp3: "Photoreception: bacteriorhodopsin, rhodopsin, and vision",
    biophys_v3_kp4: "Photoregulation and photodestructive processes",
    biophys_v3_audience: "University students and postgraduates in Biology and Biophysics, and researchers in photobiology and photosynthesis. The quantum chapters assume comfort with introductory QM; helpful to have read Volumes I–II.",

    /* ── AUTHOR: Serbo (auth_serbo) ── */
    auth_serbo_name:  "Valery G. Serbo",
    auth_serbo_title: "Professor of Theoretical Physics, Novosibirsk State University; Senior Researcher, Sobolev Institute of Mathematics, SB RAS",
    auth_serbo_creds: "Doctor of Physical and Mathematical Sciences (1984); Professor (1986); Honorary Professor of NSU (2011)",
    auth_serbo_bio_p1: "Valery Georgievich Serbo (b. 1939) is a Soviet and Russian theoretical physicist whose entire career has been based in the Novosibirsk scientific centre. He is Professor at the Chair of Theoretical Physics of Novosibirsk State University and a senior researcher in the Theoretical Physics Laboratory of the S. L. Sobolev Institute of Mathematics, SB RAS, within the theory community linked to the Budker Institute of Nuclear Physics.",
    auth_serbo_bio_p2: "He is best known as a co-originator of the photon–photon (γγ) collider concept, and his research spans the quantum electrodynamics of high-energy processes, the equivalent-photon method, and, in recent years, the physics of “twisted” (vortex) photons, electrons, and neutrons. He is the author or co-author of more than 200 scientific publications.",
    auth_serbo_bio_p3: "As a teacher, Serbo has lectured at NSU on analytical mechanics, quantum mechanics, and particle physics, and held visiting positions at Minnesota, Leipzig, Dresden, Milan, Paris, Heidelberg, Brookhaven, and SLAC. He is co-author of the widely used Novosibirsk physics textbooks, the English editions of which were published by Oxford University Press.",

    /* ── AUTHOR: Kotkin (auth_kotkin) ── */
    auth_kotkin_name:  "Gleb L. Kotkin (1934–2020)",
    auth_kotkin_title: "Professor of Theoretical Physics, Novosibirsk State University",
    auth_kotkin_creds: "Candidate of Physical and Mathematical Sciences; Professor (1992); medal “For Valorous Labour”",
    auth_kotkin_bio_p1: "Gleb Leonidovich Kotkin (1934–2020) was a Russian theoretical physicist and one of the most respected teachers at the Faculty of Physics of Novosibirsk State University. A 1958 graduate of Moscow State University, he joined NSU in 1961 and worked there for nearly six decades, rising from assistant to professor of the Department of Theoretical Physics.",
    auth_kotkin_bio_p2: "His research lay in high-energy and elementary-particle physics, and at NSU he taught the core courses in statistical physics, analytical mechanics, and the theory of oscillations. He is best known internationally for the Collection of Problems in Classical Mechanics, co-authored with V. G. Serbo, which ran to five Russian editions and was translated into English, Spanish, and French. A pioneer of computer-modelling laboratory courses in the USSR, he is remembered for his deep physical intuition and personal modesty; a lecture hall at NSU is named in his honour.",
    auth_kotkin_bio_p3: "",

    /* ── AUTHOR: Chernykh (auth_chernykh) ── */
    auth_chernykh_name:  "Alexander I. Chernykh",
    auth_chernykh_title: "Lecturer, Novosibirsk State University",
    auth_chernykh_creds: "PhD (Candidate of Physical and Mathematical Sciences); specialist in numerical modelling",
    auth_chernykh_bio_p1: "Alexander Ivanovich Chernykh holds a PhD in physics and mathematics and specialises in numerical modelling. He teaches in the Novosibirsk State University physics programme, where his courses include methods of mathematical physics, analytical mechanics, statistical physics, and general relativity.",
    auth_chernykh_bio_p2: "He is a co-author of Lectures on Analytical Mechanics (with G. L. Kotkin and V. G. Serbo) and of the English-language problem collection Mathematical Methods of Physics: Problems with Solutions (Jenny Stanford / Routledge, 2023), produced by the Novosibirsk Akademgorodok theoretical-physics group.",
    auth_chernykh_bio_p3: "",

    /* ── AUTHOR: Khriplovich (auth_khriplovich) ── */
    auth_khriplovich_name:  "Iosif B. Khriplovich (1937–2024)",
    auth_khriplovich_title: "Theoretical physicist; Budker Institute of Nuclear Physics and Novosibirsk State University",
    auth_khriplovich_creds: "Corresponding Member of the RAS (2000); Silver Dirac Medal (2004); Pomeranchuk Prize (2005)",
    auth_khriplovich_bio_p1: "Iosif Bentsionovich Khriplovich (1937–2024) was a distinguished Soviet and Russian theoretical physicist. He worked at the Budker Institute of Nuclear Physics in Novosibirsk from 1959, held the chair of theoretical physics at Novosibirsk State University, and later worked in St. Petersburg.",
    auth_khriplovich_bio_p2: "He was elected a Corresponding Member of the Russian Academy of Sciences in 2000 and is especially known for his work on atomic parity violation, which provided some of the first tests of the electroweak theory in atoms. His honours include the Silver Dirac Medal (2004) and the Pomeranchuk Prize (2005). With V. G. Serbo he co-authored Lectures on Quantum Mechanics, drawn from their teaching at NSU.",
    auth_khriplovich_bio_p3: "",

    /* ── AUTHOR: Rudenko (auth_rudenko) ── */
    auth_rudenko_name:  "Aleksandr S. Rudenko",
    auth_rudenko_title: "Theoretical physicist, Novosibirsk State University and the Budker Institute of Nuclear Physics, SB RAS",
    auth_rudenko_creds: "Candidate of Physical and Mathematical Sciences; particle physics, QFT, and early-Universe cosmology",
    auth_rudenko_bio_p1: "Aleksandr Sergeevich Rudenko is a theoretical physicist at Novosibirsk State University and the Budker Institute of Nuclear Physics of the Siberian Branch of the Russian Academy of Sciences. At NSU he is associated with the Theoretical Physics and Elementary Particle Physics sections and the Laboratory of Cosmology and Elementary Particle Physics.",
    auth_rudenko_bio_p2: "His research spans elementary particle physics and quantum field theory (meson form factors, e⁺ e⁻ annihilation processes, and precision electroweak measurements) as well as early-Universe cosmology, including inflation, dark matter, and domain-wall evolution. His extensive experience lecturing on the elementary-particle-physics course at NSU underpins the 2025 textbook co-authored with Professor V. G. Serbo.",
    auth_rudenko_bio_p3: "",

    /* ── AUTHOR: Rubin (auth_rubin) ── */
    auth_rubin_name:  "Andrey B. Rubin",
    auth_rubin_title: "Head, Department of Biophysics, Faculty of Biology, Lomonosov Moscow State University",
    auth_rubin_creds: "Academician of the RAS (2022); Doctor of Biological Sciences (1969); Professor; USSR State Prize; RAS Timiryazev Prize (2016)",
    auth_rubin_bio_p1: "Andrey Borisovich Rubin (b. 1937, Moscow) is a Soviet and Russian biophysicist, Full Member (Academician) of the Russian Academy of Sciences. Since 1976 he has headed the Department of Biophysics of the Faculty of Biology at Lomonosov Moscow State University, a chair he has led for nearly half a century.",
    auth_rubin_bio_p2: "His research lies at the confluence of biology, physics, mathematics, and physical chemistry: the biophysics of photosynthesis, membrane biophysics, the kinetics and thermodynamics of electron-transport processes, and the mathematical modelling of biological systems. He proposed a new concept of the physiological-biochemical regulation of the primary processes of photosynthesis and advanced the theory of the photoconformational transition in photoactive proteins.",
    auth_rubin_bio_p3: "Rubin is the principal architect of biophysics education in Russia and the author of the standard textbook Biophysics. He has authored or co-authored some 900 scientific papers, 40 monographs, and 35 patents, and has trained 19 doctors and more than 50 candidates of science. His honours include the USSR State Prize, the RAS Timiryazev Prize (2016), and the titles Honoured Scientist of the Russian Federation and Honoured Professor of MSU.",
    geol_earth_title: "Geological Evolution of the Earth: From Cosmic Dust to the Abode of Humanity",
    geol_earth_short: "A 2026 Russian Academy of Sciences collective monograph on the geological history of Earth.",
    geol_earth_about_p1: "A flagship 2026 synthesis of Earth's geological evolution, written by a ten-strong collective of Russian Academy of Sciences authors and edited by academicians M. I. Kuzmin and V. V. Yarmolyuk. It traces the planet from its origin in cosmic dust through the Hadean, Archean, Proterozoic and Phanerozoic to the emergence of Homo sapiens.",
    geol_earth_about_p2: "The book integrates plate and plume tectonics, mantle geochemistry, paleomagnetism, supercontinent cycles (Kenorland, Nuna, Rodinia, Pangaea), absolute paleotectonic reconstructions, metallogeny and the co-evolution of the biosphere. Among its ten authors is the crystallographer Artem R. Oganov. It is densely referenced and richly illustrated in colour.",
    geol_earth_kp1: "Earth's history from accretion to the noosphere, stage by stage",
    geol_earth_kp2: "Plate and plume tectonics, supercontinent cycles, and absolute reconstructions",
    geol_earth_kp3: "Mantle geochemistry, paleomagnetism, and metallogeny",
    geol_earth_kp4: "A ten-author RAS collective, edited by academicians Kuzmin and Yarmolyuk",
    geol_earth_audience: "Graduate students, researchers, and university faculty in the earth sciences, and scientifically literate readers drawn to the history of the planet.",
    astro_book_title: "All Astronomy in One Book: A Reader's Guide to Astronomy",
    astro_book_short: "The great discoveries of astronomy, and how astronomers actually measure the cosmos.",
    astro_book_about_p1: "Vladimir Kesselman's popular guide to astronomy gathers the field's most important discoveries, from antiquity to the present day, into a single readable volume. Its distinctive emphasis is on method: how scientists determine the distances, sizes, masses and compositions of objects that lie unimaginably far from Earth.",
    astro_book_about_p2: "Along the way the book explains the origin of the Solar System, the life of stars, and the structure of galaxies and the Universe, keeping the mathematics light and the narrative clear. It is written for the curious general reader rather than the specialist.",
    astro_book_kp1: "The major discoveries of astronomy, from antiquity to today",
    astro_book_kp2: "How distances, masses and compositions of distant objects are measured",
    astro_book_kp3: "The origin of the Solar System, stars, and galaxies",
    astro_book_kp4: "Clear, largely non-mathematical popular science",
    astro_book_audience: "General readers curious about astronomy; students and teachers looking for an accessible overview.",
    phys_book_title: "All of Physics in One Book: From the Flat Earth to the Big Bang",
    phys_book_short: "The whole story of physics in one book, from the flat Earth to the Big Bang.",
    phys_book_about_p1: "Vladimir Kesselman's sweeping popular history carries the reader across the entire development of physics, from the ancient picture of a flat Earth to modern cosmology and the Big Bang. It is organised as a single continuous narrative rather than a textbook.",
    phys_book_about_p2: "The book shows how ideas about matter, motion, light, energy and the Universe were built, overturned and rebuilt, connecting mechanics, thermodynamics, electromagnetism, relativity and quantum theory into one accessible story. The mathematics is kept light throughout.",
    phys_book_kp1: "The full arc of physics, from antiquity to modern cosmology",
    phys_book_kp2: "How key ideas were formed, overturned and rebuilt",
    phys_book_kp3: "Mechanics, electromagnetism, relativity and quantum theory in one narrative",
    phys_book_kp4: "Accessible popular science, light on mathematics",
    phys_book_audience: "General readers, students and teachers who want the big picture of physics in a single volume.",
    hist_phys_title: "Another History of Physics",
    hist_phys_short: "A fresh, unconventional retelling of how physics really developed.",
    hist_phys_about_p1: "In Another History of Physics, Vladimir Kesselman revisits the story of the science from unexpected angles, highlighting the false starts, disputes and forgotten contributors that the standard textbook account tends to smooth over.",
    hist_phys_about_p2: "The result is a more human and more surprising history: how discoveries were actually made, who really made them, and how much of the accepted narrative deserves a second look. It is written for the general reader in Kesselman's clear, narrative style.",
    hist_phys_kp1: "Physics history told from unconventional angles",
    hist_phys_kp2: "False starts, priority disputes and forgotten contributors",
    hist_phys_kp3: "How discoveries were really made, and by whom",
    hist_phys_kp4: "Kesselman's clear, narrative popular-science style",
    hist_phys_audience: "Readers who already enjoy popular science and want a fresh perspective on the history of physics.",
    lives_phys_title: "Lives of Famous Physicists and Astronomers",
    lives_phys_short: "Vivid biographies of the scientists who shaped physics and astronomy.",
    lives_phys_about_p1: "This collection of biographical portraits brings to life the physicists and astronomers whose ideas built the modern picture of the world. Kesselman tells their stories as human lives: the struggles, rivalries, luck and persistence behind the famous results.",
    lives_phys_about_p2: "More than a gallery of names, the book connects each life to the science it produced, so the reader comes away understanding both the people and their discoveries. It is written in an accessible, narrative style.",
    lives_phys_kp1: "Biographical portraits of leading physicists and astronomers",
    lives_phys_kp2: "The human stories behind famous discoveries",
    lives_phys_kp3: "Each life connected to the science it produced",
    lives_phys_kp4: "Accessible, narrative popular science",
    lives_phys_audience: "General readers who enjoy the history of science through the lives of its makers.",
    believe_imp_title: "Believing the Impossible: An Upgrade for Common Sense",
    believe_imp_short: "A guided upgrade for everyday common sense, using the counter-intuitive truths of modern science.",
    believe_imp_about_p1: "Modern physics is full of results that seem impossible: time that slows, particles in two places at once, a Universe with a beginning. In Believing the Impossible, Vladimir Kesselman treats these not as paradoxes to be feared but as an invitation to upgrade ordinary common sense.",
    believe_imp_about_p2: "Step by step, the book shows why the counter-intuitive conclusions of relativity, quantum theory and cosmology are in fact reasonable once the right questions are asked. It is a workout for the scientifically curious mind, written without heavy mathematics.",
    believe_imp_kp1: "Why the 'impossible' results of modern physics make sense",
    believe_imp_kp2: "Relativity, quantum theory and cosmology for the general reader",
    believe_imp_kp3: "A step-by-step upgrade of everyday intuition",
    believe_imp_kp4: "Kesselman's newest popular-science title (2025)",
    believe_imp_audience: "Curious general readers who want to understand modern physics without the mathematics.",
    auth_kesselman_name: "V. S. Kesselman",
    auth_kesselman_title: "Popular-science author (history of physics and astronomy)",
    auth_kesselman_creds: "Candidate of Physical-Mathematical Sciences · graduate of the MSU Physics Faculty",
    auth_kesselman_bio_p1: "Vladimir Samuilovich Kesselman (b. 1941) is a graduate of the Physics Faculty of Moscow State University who worked on low-energy ion-matter interactions and the early Solar System before turning to writing.",
    auth_kesselman_bio_p2: "Writing for the general reader, he has become one of Russia's most prolific popular-science authors, with some twenty accessible books that carry non-specialists through the whole sweep of physics and astronomy.",
    auth_kuzmin_name: "M. I. Kuzmin",
    auth_kuzmin_title: "Geochemist · A. P. Vinogradov Institute of Geochemistry, SB RAS",
    auth_kuzmin_creds: "Academician of the RAS · Doctor of Geological-Mineralogical Sciences · State Prize (1997); Demidov Prize (2007)",
    auth_kuzmin_bio_p1: "Mikhail Ivanovich Kuzmin is a geochemist and full member of the Russian Academy of Sciences, a leading researcher at the A. P. Vinogradov Institute of Geochemistry (SB RAS) in Irkutsk.",
    auth_kuzmin_bio_p2: "He has authored and co-authored more than 460 publications, including some twenty monographs, and is a foreign member of the Mongolian Academy of Sciences.",
    auth_yarmolyuk_name: "V. V. Yarmolyuk",
    auth_yarmolyuk_title: "Geologist · Institute of Geology of Ore Deposits (IGEM RAS)",
    auth_yarmolyuk_creds: "Academician of the RAS · Doctor of Geological-Mineralogical Sciences · State Prize laureate",
    auth_yarmolyuk_bio_p1: "Vladimir Viktorovich Yarmolyuk (b. 1945) is a full member of the Russian Academy of Sciences and a specialist in geology, geodynamics and magmatism at the Institute of Geology of Ore Deposits, Petrography, Mineralogy and Geochemistry (IGEM RAS).",
    auth_yarmolyuk_bio_p2: "His work centres on continental magmatism, mantle plumes and the geodynamics of Central Asia; he is a laureate of the State Prize of the Russian Federation.",
    auth_oganov_name: "A. R. Oganov",
    auth_oganov_title: "Professor, Skolkovo Institute of Science and Technology (Skoltech)",
    auth_oganov_creds: "Crystallographer and materials scientist · Member of Academia Europaea · Highly Cited Researcher",
    auth_oganov_bio_p1: "Artem Romaevich Oganov (b. 1975) is a crystallographer and materials scientist, professor at Skoltech and a member of Academia Europaea.",
    auth_oganov_bio_p2: "His USPEX method predicts the crystal structures of materials from first principles and is used by thousands of researchers worldwide; he is a repeatedly Highly Cited Researcher.",
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
    hero_sub:    "Тщательно отобранные цифровые издания научных учебников и научно-популярных книг ведущих авторов России: физика, астрономия, биофизика и науки о Земле.",
    hero_cta1:   "Все книги",
    hero_cta2:   "Наши авторы",

    /* CATALOG */
    avail_label:   "Доступно сейчас",
    avail_title:   "Серия «Квантовая теория поля»",
    avail_sub:     "Два фундаментальных тома аспирантского уровня, строгих и практичных, написанных для физиков-экспериментаторов.",
    coming_label:  "Скоро",
    coming_title:  "Готовятся к выходу",
    coming_sub:    "Англоязычные издания серии КТП и книга «Солнечное нейтрино».",
    iiki_label:    "Из каталога ИИКИ",
    iiki_title:    "Российская наука и научно-популярные книги",
    iiki_sub:      "Учебники и монографии уровня магистратуры и аспирантуры от Новосибирского и Московского университетов, на русском языке.",

    /* BOOKS */
    qft_title_en:    "Квантовая теория поля для экспериментаторов и не только",
    qft_title_ru:    "Квантовая теория поля для экспериментаторов и не только",
    qft_author:      "Наумов Дмитрий Вадимович",
    qft_vol1_fulltitle:   "Квантовая теория поля для экспериментаторов и не только. Том I",
    qft_vol2_fulltitle:   "Квантовая теория поля для экспериментаторов и не только. Том II",
    qft_bundle_fulltitle: "Квантовая теория поля: комплект (Том I и II)",
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
    btn_preview:     "Предпросмотр",
    preview_note_generic: "Только первые страницы — защищённый просмотр",
    toc_h: "Содержание",
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
    gp_comparison:          "Оба тома здесь за $47.99, экономия $12 по сравнению с Google Play.",
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
    course_desc_p6: "Особенность курса состоит в редком сочетании широты охвата, современного содержания и необычного угла зрения. Книга не ограничивается формальной «теоретической теорией»: квантовая теория поля здесь показана как живая наука, связанная с экспериментом, наблюдаемыми величинами и реальными физическими задачами.",
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


    /* AUTHOR (authors.html) */
    author_label:    "Об авторе",
    author_title:    "Наумов Дмитрий Вадимович",
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
    footer_copy:          "Rospex Holdings LLC. Все права защищены.",
    footer_link_refund: 'Доставка и возврат',
    rp_label: 'Покупка у нас',
    rp_title: 'Доставка и возврат средств',
    rp_delivery_h: 'Как происходит доставка',
    rp_delivery_p1: 'Сразу после оплаты мы отправляем защищённую ссылку для скачивания на email, указанный при оформлении. Ссылка действует 72 часа. Ваш PDF персонализирован (имя и email покупателя) и защищён паролем. Пароль — это просто адрес электронной почты, указанный при покупке.',
    rp_delivery_p2: 'Если письмо не пришло в течение 15 минут, проверьте папку «Спам», а затем напишите на books@rospexpublishing.com — мы оперативно отправим ссылку повторно.',
    rp_refund_h: 'Возврат средств',
    rp_refund_p1: 'Мы вернём полную стоимость в течение 14 дней с момента покупки, если оплата прошла, но книга не была получена; если файл повреждён и мы не смогли это исправить; или если вы случайно купили одну и ту же книгу дважды.',
    rp_refund_p2: 'Поскольку книга — это цифровой файл с мгновенной доставкой, персонализированный под покупателя, мы, как правило, не возвращаем средства после скачивания файла. При этом мы — небольшое издательство и предпочитаем честность формальностям: если что-то не так, напишите нам, и мы найдём решение.',
    rp_how_h: 'Как запросить возврат',
    rp_how_p1: 'Напишите на books@rospexpublishing.com с адреса, использованного при покупке (или укажите его), назвав книгу и дату покупки. Возврат производится на исходный способ оплаты через Stripe и обычно занимает 5–10 рабочих дней.',
    rp_region_h: 'Региональная доступность',
    rp_region_p1: 'Из-за территориальных издательских прав наши цифровые издания не продаются в России и странах СНГ; платежи из этих регионов не обрабатываются.',
    trust_line: 'Мгновенная доставка на email · Персонализированный PDF · <a href="../refund-policy.html" style="color:var(--gold-lt)">14 дней на возврат</a>',
    family_label:         "Часть семьи Rospex:",

    /* MODALS */
    modal_close:      "Закрыть",

    /* ══════════ IIKI EXPANSION (RU) ══════════ */

    /* NAV */
    nav_categories: "Категории",

    /* BROWSE BY CATEGORY */
    browse_cat_label: "Каталог по разделам",
    browse_cat_title: "По разделам",
    browse_cat_sub:   "Шесть предметных областей: от физики и наук о жизни до истории науки, от аспирантских учебников до научно-популярного чтения.",
    search_placeholder: "Поиск: книги, авторы, темы…",
    search_results_for: "результатов по запросу",
    search_no_results: "Ничего не найдено. Попробуйте другое слово или выберите раздел:",

    /* CATEGORY NAMES + BLURBS */
    cat_c1_name:  "Квантовая физика и физика частиц",
    cat_c1_blurb: "Квантовая механика, квантовая теория поля и физика элементарных частиц.",
    cat_c2_name:  "Классическая и теоретическая физика",
    cat_c2_blurb: "Классическая, аналитическая и теоретическая механика, фундамент физики.",
    cat_c3_name:  "Астрономия, астрофизика и космология",
    cat_c3_blurb: "Звёзды, галактики, нейтрино, строение и история Вселенной.",
    cat_c4_name:  "Науки о Земле и планетах",
    cat_c4_blurb: "Геология, геофизика и науки о Земле и планетах.",
    cat_c5_name:  "Биофизика и науки о жизни",
    cat_c5_blurb: "Физика живых систем: от молекул и мембран до фотосинтеза и зрения.",
    cat_c6_name:  "История науки и научно-популярное",
    cat_c6_blurb: "Научно-популярные книги и история научных идей для любознательных читателей.",

    /* CATALOG UI */
    catalog_title:          "Каталог",
    catalog_filter_all:     "Все",
    catalog_filter_textbook:"Учебники",
    catalog_filter_popular: "Научпоп",
    audience_textbook:      "Учебник",
    audience_popular:       "Научпоп",
    coming_soon_badge:      "Скоро",

    /* NSU CURRICULUM RAIL */
    nsu_rail_label: "Часть курса НГУ: механика → КТП",

    /* ── BOOK 1: mech_problems ── */
    mech_problems_title: "Сборник задач по классической механике",
    mech_problems_short: "Классический новосибирский задачник: 13 тематических разделов, каждая задача с полным решением.",
    mech_problems_about_p1: "Один из самых долговечных задачников по физике, вышедших из Новосибирского государственного университета. Возникший в 1966 году из системы заданий Глеба Коткина «в духе курса Ландау и Лифшица» и отточенный вместе с Валерием Сербо за более чем полвека преподавания, это пятое русское издание (2021, 404 с.), самое полное на сегодняшний день.",
    mech_problems_about_p2: "Тринадцать разделов следуют стандартному курсу теоретической механики: от одномерного движения и центральных полей до канонических преобразований и адиабатических инвариантов. Каждая задача сопровождается полным разбором решения, поэтому книга служит и сборником упражнений, и пособием для самостоятельной работы. По охвату она соответствует «Механике» Ландау–Лифшица и «Классической механике» Голдстейна; это русский оригинал оксфордского издания Exploring Classical Mechanics (2020).",
    mech_problems_kp1: "Тринадцать разделов по нарастающей: от законов Ньютона до адиабатических инвариантов",
    mech_problems_kp2: "Каждая задача сопровождается полным решением",
    mech_problems_kp3: "Охват согласован с Ландау–Лифшицем и Голдстейном",
    mech_problems_kp4: "Русский оригинал оксфордского Exploring Classical Mechanics (2020)",
    mech_problems_audience: "Студенты, аспиранты и преподаватели, физики и математики. Первые разделы решаются на основе механики Ньютона; методы Лагранжа и Гамильтона вводятся постепенно.",

    /* ── BOOK 2: analytical_mech ── */
    analytical_mech_title: "Лекции по аналитической механике",
    analytical_mech_short: "Современный курс лекций НГУ по аналитической механике, ворота в теорию поля, квантовую механику и статистическую физику.",
    analytical_mech_about_p1: "«Лекции по аналитической механике» вобрали в себя десятилетия преподавания теоретической группы Новосибирского государственного университета. Написанные Глебом Коткиным, Валерием Сербо и Александром Черных, это третье издание (2022, 272 с.) представляет аналитическую механику не как самоцель, а как фундамент для всей теоретической физики.",
    analytical_mech_about_p2: "Пять глав ведут читателя от движения в центральном поле и рассеяния через лагранжеву механику, колебания, гамильтонов формализм и движение твёрдого тела. Отличительная черта издания: около десяти новых иллюстративных разделов (классический эффект Зеемана, модель ЭПР/ЯМР, ловушка Пеннинга, точки Лагранжа и введение в динамический хаос) с задачами, апробированными на семинарах.",
    analytical_mech_kp1: "Лагранжев и гамильтонов формализм, колебания и движение твёрдого тела",
    analytical_mech_kp2: "Явно подаётся как подготовка к теории поля, КМ и статистической физике",
    analytical_mech_kp3: "~10 новых прикладных разделов (эффект Зеемана, ловушка Пеннинга, хаос)",
    analytical_mech_kp4: "Задачи, апробированные на семинарах, к каждой теме",
    analytical_mech_audience: "Студенты старших курсов, аспиранты и преподаватели, физики и математики. Требуется вводный курс механики, математический анализ и линейная алгебра.",

    /* ── BOOK 3: qm_lectures ── */
    qm_lectures_title: "Лекции по квантовой механике",
    qm_lectures_short: "Новосибирский курс лекций по квантовой механике Сербо и Хрипловича, квантовый шаг к теории поля и физике частиц.",
    qm_lectures_about_p1: "«Лекции по квантовой механике» В. Г. Сербо и И. Б. Хрипловича (2023, 266 с.) выросли из многолетнего опыта чтения лекций и проведения семинаров на физическом факультете Новосибирского государственного университета. Книга написана в ясном, физически содержательном стиле новосибирской школы, и к каждой теме приведены задачи, апробированные в аудитории.",
    qm_lectures_about_p2: "Курс служит квантово-механическим звеном новосибирской цепочки от классической и аналитической механики через квантовую механику к физике элементарных частиц и квантовой теории поля. Один из авторов, Иосиф Хриплович, член-корреспондент РАН и лауреат премии Померанчука, известный работами по нарушению чётности в атомах, придаёт книге авторитет одной из ведущих школ теоретической физики.",
    qm_lectures_kp1: "Полный односеместровый курс нерелятивистской квантовой механики",
    qm_lectures_kp2: "Задачи, проверенные многолетними семинарами НГУ",
    qm_lectures_kp3: "Готовит непосредственно к физике частиц и КТП",
    qm_lectures_kp4: "Соавтор: И. Б. Хриплович, член-корреспондент РАН",
    qm_lectures_audience: "Студенты и аспиранты-физики, преподаватели. Требуется знание классической и аналитической механики, математического анализа и линейной алгебры.",

    /* ── BOOK 4: epp_lectures ── */
    epp_lectures_title: "Лекции по физике элементарных частиц",
    epp_lectures_short: "Практический начальный курс НГУ и Института ядерной физики им. Будкера, мост между квантовой теорией поля и реальными экспериментами на ускорителях.",
    epp_lectures_about_p1: "«Лекции по физике элементарных частиц (начальный курс)» В. Г. Сербо и А. С. Руденко (2025, 232 с.) обобщают многолетний опыт авторов по чтению односеместрового курса физики частиц для студентов 4-го курса физического факультета НГУ. Определяющая особенность курса: связь с Институтом ядерной физики им. Г. И. Будкера (ИЯФ), базовым институтом для студентов.",
    epp_lectures_about_p2: "Вместо чисто формального изложения квантовой теории поля книга постоянно связана с реальными процессами, измеряемыми на коллайдерах ИЯФ. Начиная со знакомых объектов, разбираемых с особой тщательностью, она выстраивает аппарат релятивистской теории поля (лагранжев формализм и законы сохранения, скалярные и дираковские поля, технику диаграмм Фейнмана) и завершается студенческим проектом по вычислению реальных сечений и числа событий. Заключительный раздел «Дополнения» содержит мини-обзоры, связанные с современным экспериментом.",
    epp_lectures_kp1: "Привязка к эксперименту: ИЯФ им. Будкера и реальные процессы на коллайдерах",
    epp_lectures_kp2: "По-настоящему начальный курс: от знакомых объектов к более сложному материалу",
    epp_lectures_kp3: "Научиться рисовать и вычислять диаграммы Фейнмана",
    epp_lectures_kp4: "Обязательный проект: расчёт сечений и числа событий на реальном ускорителе",
    epp_lectures_audience: "Студенты 4-го курса, аспиранты и преподаватели, физики. Требуется общая физика, классическая и квантовая механика, специальная теория относительности.",

    /* ── BOOK 5: biophys_v1 ── */
    biophys_v1_title: "Биофизика. Том I. Теоретическая биофизика",
    biophys_v1_short: "Том I фундаментального учебника академика Рубина: кинетика, термодинамика, математическое моделирование и молекулярная биофизика.",
    biophys_v1_about_p1: "Первый том трёхтомной «Биофизики» академика Андрея Б. Рубина, основополагающего русскоязычного учебника дисциплины (4-е изд., 2013, 472 с.; рекомендован для направления «Биология» и специальности «Биофизика»). В нём развивается теоретический аппарат, на котором строится материал II и III томов о клеточных, мембранных и фотобиологических процессах.",
    biophys_v1_about_p2: "Часть I, «Биофизика сложных систем», охватывает кинетику биологических процессов (динамические модели, биологические триггеры, колебания, детерминированный хаос) и термодинамику открытых систем вблизи и вдали от равновесия. Часть II, «Молекулярная биофизика», рассматривает пространственную организацию биополимеров, внутримолекулярные взаимодействия, конформационную энергию, фолдинг белков и динамические свойства глобулярных белков. Сквозная линия математического моделирования служит отличительной чертой московской школы биофизики.",
    biophys_v1_kp1: "Кинетика биологических процессов: триггеры, колебания, детерминированный хаос",
    biophys_v1_kp2: "Термодинамика открытых систем вблизи и вдали от равновесия",
    biophys_v1_kp3: "Молекулярная биофизика: конформации биополимеров и фолдинг белков",
    biophys_v1_kp4: "Сквозная линия математического моделирования",
    biophys_v1_audience: "Студенты и аспиранты по биологии и биофизике, научные сотрудники в области физико-химической биологии. Предполагается стандартная подготовка 1–3 курсов по биологии, физике, химии и математическому анализу.",

    /* ── BOOK 6: biophys_v2 ── */
    biophys_v2_title: "Биофизика. Том II. Биофизика клеточных процессов. Биофизика мембранных процессов",
    biophys_v2_short: "Том II, клеточно-мембранное ядро: транспорт, биоэлектрогенез, ионные каналы, биоэнергетика и мышечное сокращение.",
    biophys_v2_about_p1: "Центральный том трёхтомной «Биофизики» академика Андрея Б. Рубина (4-е изд., 2013, 384 с.). Опираясь на теоретический аппарат первого тома, он обращается к физико-химическим механизмам важнейших процессов в живых клетках.",
    biophys_v2_about_p2: "Рассматриваются молекулярная организация и конформационные свойства биологических мембран; транспорт неэлектролитов и ионов (электродиффузия, ионные каналы, селективность и воротный механизм, модель Ходжкина–Хаксли для возбудимых мембран, активный транспорт); а также преобразование энергии в биомембранах (электронный транспорт, перенос протонов, АТФазный молекулярный мотор) наряду с физикой мышечного сокращения и внутриклеточной сигнализацией. Изложение сочетает строгие физико-химические модели с количественными, часто математически моделируемыми описаниями.",
    biophys_v2_kp1: "Строение мембран, транспорт и биоэлектрогенез",
    biophys_v2_kp2: "Ионные каналы: селективность, воротный механизм, модель Ходжкина–Хаксли",
    biophys_v2_kp3: "Биоэнергетика: электронный транспорт и АТФазный молекулярный мотор",
    biophys_v2_kp4: "Мышечное сокращение и актин-миозиновый мотор",
    biophys_v2_audience: "Студенты и аспиранты по биологии и биофизике, исследователи в области мембранной биофизики, нейрофизиологии и биоэнергетики. Желательно знакомство с томом I.",

    /* ── BOOK 7: biophys_v3 ── */
    biophys_v3_title: "Биофизика. Том III. Биофизика клеточных процессов. Механизмы первичных фотобиологических процессов",
    biophys_v3_short: "Том III, фотобиологическая кульминация: перенос заряда в биополимерах, первичные процессы фотосинтеза и зрение.",
    biophys_v3_about_p1: "Заключительный том трёхтомной «Биофизики» академика Андрея Б. Рубина (4-е изд., 2013, 480 с.). Он ведёт читателя от квантово-механических основ биомолекулярной электроники к первичным актам фотосинтеза и зрения, отражая главную область исследований самого Рубина, биофизику фотосинтеза.",
    biophys_v3_about_p2: "Книга открывается электронными свойствами биополимеров: квантовым описанием молекул, механизмами переноса заряда и миграции энергии (туннелирование, теории Маркуса и Жортнера) и ферментативным катализом, а затем рассматривает первичные процессы фотосинтеза (антенные комплексы, реакционные центры, фотосистемы I и II) и первичные фотопроцессы биологических систем (бактериородопсин, родопсин и зрение, фитохромы, фотодеструкция). Изложение строго физическое и количественное, объединяющее квантовую теорию, данные лазерной спектроскопии и математическое моделирование.",
    biophys_v3_kp1: "Квантовые основы переноса заряда в биополимерах (теория Маркуса/Жортнера)",
    biophys_v3_kp2: "Первичные процессы фотосинтеза: антенные комплексы, реакционные центры, ФС I и II",
    biophys_v3_kp3: "Фоторецепция: бактериородопсин, родопсин и зрение",
    biophys_v3_kp4: "Фоторегуляторные и фотодеструктивные процессы",
    biophys_v3_audience: "Студенты и аспиранты по биологии и биофизике, исследователи в области фотобиологии и фотосинтеза. Квантовые главы требуют знакомства с основами КМ; желательно знакомство с томами I–II.",

    /* ── AUTHOR: Serbo ── */
    auth_serbo_name:  "Сербо Валерий Георгиевич",
    auth_serbo_title: "Профессор кафедры теоретической физики НГУ; старший научный сотрудник Института математики им. С. Л. Соболева СО РАН",
    auth_serbo_creds: "Доктор физико-математических наук (1984); профессор (1986); почётный профессор НГУ (2011)",
    auth_serbo_bio_p1: "Валерий Георгиевич Сербо (р. 1939) — советский и российский физик-теоретик, вся научная карьера которого связана с Новосибирским научным центром. Профессор кафедры теоретической физики Новосибирского государственного университета и старший научный сотрудник лаборатории теоретической физики Института математики им. С. Л. Соболева СО РАН — в теоретическом сообществе, связанном с Институтом ядерной физики им. Г. И. Будкера.",
    auth_serbo_bio_p2: "Наиболее известен как соавтор идеи фотон-фотонного (γγ) коллайдера. Его исследования охватывают квантовую электродинамику процессов высоких энергий, метод эквивалентных фотонов, а в последние годы физику «закрученных» (вихревых) фотонов, электронов и нейтронов. Автор и соавтор более 200 научных работ.",
    auth_serbo_bio_p3: "Как преподаватель Сербо читал в НГУ курсы аналитической механики, квантовой механики и физики частиц и приглашался в университеты Миннесоты, Лейпцига, Дрездена, Милана, Парижа и Гейдельберга, а также в Брукхейвен и SLAC. Соавтор широко используемых новосибирских учебников по физике, английские издания которых вышли в Oxford University Press.",

    /* ── AUTHOR: Kotkin ── */
    auth_kotkin_name:  "Коткин Глеб Леонидович",
    auth_kotkin_title: "Профессор кафедры теоретической физики НГУ",
    auth_kotkin_creds: "Кандидат физико-математических наук; профессор (1992); медаль «За доблестный труд»",
    auth_kotkin_bio_p1: "Глеб Леонидович Коткин (1934–2020) — российский физик-теоретик и один из самых уважаемых преподавателей физического факультета Новосибирского государственного университета. Окончив МГУ в 1958 году, в 1961 году он пришёл в НГУ, где проработал почти шесть десятилетий, пройдя путь от ассистента до профессора кафедры теоретической физики.",
    auth_kotkin_bio_p2: "Его научные интересы относились к физике высоких энергий и физике элементарных частиц; в НГУ он читал основные курсы статистической физики, аналитической механики и теории колебаний. Международную известность ему принёс «Сборник задач по классической механике», написанный совместно с В. Г. Сербо, выдержавший пять русских изданий и переведённый на английский, испанский и французский языки. Пионер компьютерных практикумов в СССР, он запомнился глубокой физической интуицией и личной скромностью; в его честь названа аудитория НГУ.",
    auth_kotkin_bio_p3: "",

    /* ── AUTHOR: Chernykh ── */
    auth_chernykh_name:  "Черных Александр Иванович",
    auth_chernykh_title: "Преподаватель Новосибирского государственного университета",
    auth_chernykh_creds: "Кандидат физико-математических наук; специалист по численному моделированию",
    auth_chernykh_bio_p1: "Александр Иванович Черных, кандидат физико-математических наук, специалист по численному моделированию. Преподаёт на физическом факультете Новосибирского государственного университета; среди его курсов — методы математической физики, аналитическая механика, статистическая физика и общая теория относительности.",
    auth_chernykh_bio_p2: "Соавтор «Лекций по аналитической механике» (вместе с Г. Л. Коткиным и В. Г. Сербо) и англоязычного сборника задач Mathematical Methods of Physics: Problems with Solutions (Jenny Stanford / Routledge, 2023), подготовленного теоретической группой новосибирского Академгородка.",
    auth_chernykh_bio_p3: "",

    /* ── AUTHOR: Khriplovich ── */
    auth_khriplovich_name:  "Хриплович Иосиф Бенционович",
    auth_khriplovich_title: "Физик-теоретик; Институт ядерной физики им. Г. И. Будкера и Новосибирский государственный университет",
    auth_khriplovich_creds: "Член-корреспондент РАН (2000); серебряная медаль Дирака (2004); премия Померанчука (2005)",
    auth_khriplovich_bio_p1: "Иосиф Бенционович Хриплович (1937–2024) был выдающимся советским и российским физиком-теоретиком. С 1959 года работал в Институте ядерной физики им. Г. И. Будкера в Новосибирске, возглавлял кафедру теоретической физики Новосибирского государственного университета, а позднее работал в Санкт-Петербурге.",
    auth_khriplovich_bio_p2: "В 2000 году избран членом-корреспондентом Российской академии наук. Особенно известен работами по нарушению чётности в атомах, давшими одни из первых проверок электрослабой теории в атомных системах. Среди наград серебряная медаль Дирака (2004) и премия Померанчука (2005). Совместно с В. Г. Сербо он написал «Лекции по квантовой механике» на основе их преподавания в НГУ.",
    auth_khriplovich_bio_p3: "",

    /* ── AUTHOR: Rudenko ── */
    auth_rudenko_name:  "Руденко Александр Сергеевич",
    auth_rudenko_title: "Физик-теоретик, Новосибирский государственный университет и Институт ядерной физики им. Г. И. Будкера СО РАН",
    auth_rudenko_creds: "Кандидат физико-математических наук; физика частиц, КТП и космология ранней Вселенной",
    auth_rudenko_bio_p1: "Александр Сергеевич Руденко, физик-теоретик Новосибирского государственного университета и Института ядерной физики им. Г. И. Будкера СО РАН. В НГУ связан с кафедрами теоретической физики и физики элементарных частиц и Лабораторией космологии и физики элементарных частиц.",
    auth_rudenko_bio_p2: "Область его исследований охватывает физику элементарных частиц и квантовую теорию поля (формфакторы мезонов, процессы e⁺ e⁻-аннигиляции и прецизионные электрослабые измерения), а также космологию ранней Вселенной, включая инфляцию, тёмную материю и эволюцию доменных стенок. Многолетний опыт чтения курса физики элементарных частиц в НГУ лёг в основу учебного пособия 2025 года, написанного совместно с профессором В. Г. Сербо.",
    auth_rudenko_bio_p3: "",

    /* ── AUTHOR: Rubin ── */
    auth_rubin_name:  "Рубин Андрей Борисович",
    auth_rubin_title: "Заведующий кафедрой биофизики биологического факультета МГУ им. М. В. Ломоносова",
    auth_rubin_creds: "Академик РАН (2022); доктор биологических наук (1969); профессор; Государственная премия СССР; премия им. К. А. Тимирязева РАН (2016)",
    auth_rubin_bio_p1: "Андрей Борисович Рубин (р. 1937, Москва) — советский и российский биофизик, академик Российской академии наук. С 1976 года заведует кафедрой биофизики биологического факультета МГУ им. М. В. Ломоносова, которой руководит уже почти полвека.",
    auth_rubin_bio_p2: "Его научные интересы лежат на стыке биологии, физики, математики и физической химии: биофизика фотосинтеза, биофизика мембран, кинетика и термодинамика процессов электронного транспорта, математическое моделирование биологических систем. Он предложил новую концепцию физиолого-биохимической регуляции первичных процессов фотосинтеза и обосновал теорию фотоконформационного перехода в фоточувствительных белках.",
    auth_rubin_bio_p3: "Рубин является основоположником биофизического образования в России и автором стандартного учебника «Биофизика». Он автор и соавтор около 900 научных работ, 40 монографий и 35 патентов, подготовил 19 докторов и более 50 кандидатов наук. Среди наград: Государственная премия СССР, премия им. К. А. Тимирязева РАН (2016), звания заслуженного деятеля науки РФ и заслуженного профессора МГУ.",
    geol_earth_title: "Геологическая эволюция Земли: от космической пыли до обители человечества",
    geol_earth_short: "Коллективная монография РАН (2026) о геологической истории Земли.",
    geol_earth_about_p1: "Флагманский синтез 2026 года о геологической эволюции Земли, написанный коллективом из десяти авторов Российской академии наук под редакцией академиков М. И. Кузьмина и В. В. Ярмолюка. Книга прослеживает путь планеты от зарождения в космической пыли через хадей, архей, протерозой и фанерозой до появления Homo sapiens.",
    geol_earth_about_p2: "В монографии объединены тектоника плит и плюмов, геохимия мантии, палеомагнетизм, циклы суперконтинентов (Кенорленд, Нуна, Родиния, Пангея), абсолютные палеотектонические реконструкции, металлогения и совместная эволюция биосферы. Среди десяти авторов — кристаллограф А. Р. Оганов. Плотный научный аппарат и цветные иллюстрации.",
    geol_earth_kp1: "История Земли от аккреции до ноосферы, этап за этапом",
    geol_earth_kp2: "Тектоника плит и плюмов, циклы суперконтинентов и абсолютные реконструкции",
    geol_earth_kp3: "Геохимия мантии, палеомагнетизм и металлогения",
    geol_earth_kp4: "Коллектив из десяти авторов РАН под редакцией академиков Кузьмина и Ярмолюка",
    geol_earth_audience: "Аспиранты, исследователи и преподаватели в области наук о Земле, а также подготовленные читатели, которым интересна история планеты.",
    astro_book_title: "Вся астрономия в одной книге (книга для чтения по астрономии)",
    astro_book_short: "Великие открытия астрономии и то, как учёные измеряют космос.",
    astro_book_about_p1: "Научно-популярная книга Владимира Кессельмана собирает важнейшие открытия астрономии — от древности до наших дней — в одном увлекательном томе. Её особенность — акцент на методе: как учёные определяют расстояния, размеры, массы и состав объектов, удалённых от Земли на непредставимые расстояния.",
    astro_book_about_p2: "Попутно книга объясняет происхождение Солнечной системы, жизнь звёзд, строение галактик и Вселенной, сохраняя минимум математики и ясность изложения. Она написана для любознательного читателя, а не для специалиста.",
    astro_book_kp1: "Главные открытия астрономии — от древности до наших дней",
    astro_book_kp2: "Как измеряют расстояния, массы и состав далёких объектов",
    astro_book_kp3: "Происхождение Солнечной системы, звёзд и галактик",
    astro_book_kp4: "Ясная, почти без формул, научно-популярная книга",
    astro_book_audience: "Широкий круг читателей, интересующихся астрономией; школьники, студенты и преподаватели, которым нужен доступный обзор.",
    phys_book_title: "Вся физика в одной книге: от плоской Земли до Большого взрыва",
    phys_book_short: "Вся история физики в одной книге — от плоской Земли до Большого взрыва.",
    phys_book_about_p1: "Масштабная научно-популярная история Владимира Кессельмана проводит читателя через всё развитие физики — от древнего представления о плоской Земле до современной космологии и Большого взрыва. Это единое связное повествование, а не учебник.",
    phys_book_about_p2: "Книга показывает, как строились, опровергались и перестраивались представления о материи, движении, свете, энергии и Вселенной, объединяя механику, термодинамику, электромагнетизм, теорию относительности и квантовую теорию в одну доступную историю. Математики — минимум.",
    phys_book_kp1: "Вся дуга физики — от древности до современной космологии",
    phys_book_kp2: "Как формировались, опровергались и перестраивались ключевые идеи",
    phys_book_kp3: "Механика, электромагнетизм, относительность и квантовая теория в одном рассказе",
    phys_book_kp4: "Доступная научно-популярная книга, почти без формул",
    phys_book_audience: "Широкий круг читателей, школьники, студенты и преподаватели, которым нужна общая картина физики в одном томе.",
    hist_phys_title: "Другая история физики",
    hist_phys_short: "Свежий, нестандартный рассказ о том, как на самом деле развивалась физика.",
    hist_phys_about_p1: "В «Другой истории физики» Владимир Кессельман пересматривает историю науки под неожиданными углами, обращая внимание на тупики, споры и забытых участников, которых обычно сглаживает учебное изложение.",
    hist_phys_about_p2: "Получается более человечная и более удивительная история: как на самом деле совершались открытия, кто их действительно сделал и насколько привычный рассказ заслуживает второго взгляда. Написано для широкого читателя в ясной повествовательной манере Кессельмана.",
    hist_phys_kp1: "История физики под нестандартными углами",
    hist_phys_kp2: "Тупики, споры о приоритете и забытые участники",
    hist_phys_kp3: "Как на самом деле совершались открытия — и кем",
    hist_phys_kp4: "Ясный повествовательный научно-популярный стиль Кессельмана",
    hist_phys_audience: "Читателям, уже любящим научпоп и желающим по-новому взглянуть на историю физики.",
    lives_phys_title: "Жизнеописания знаменитых физиков и астрономов",
    lives_phys_short: "Живые биографии учёных, определивших физику и астрономию.",
    lives_phys_about_p1: "Этот сборник биографических портретов оживляет физиков и астрономов, чьи идеи построили современную картину мира. Кессельман рассказывает их истории как человеческие судьбы — с борьбой, соперничеством, удачей и упорством за знаменитыми результатами.",
    lives_phys_about_p2: "Это не просто галерея имён: книга связывает каждую судьбу с наукой, которую она породила, так что читатель понимает и людей, и их открытия. Написано в доступной повествовательной манере.",
    lives_phys_kp1: "Биографические портреты ведущих физиков и астрономов",
    lives_phys_kp2: "Человеческие истории за знаменитыми открытиями",
    lives_phys_kp3: "Каждая судьба связана с созданной наукой",
    lives_phys_kp4: "Доступная повествовательная научно-популярная книга",
    lives_phys_audience: "Широкий круг читателей, которым интересна история науки через судьбы её творцов.",
    believe_imp_title: "Поверить в невозможное: апгрейд здравого смысла",
    believe_imp_short: "Апгрейд повседневного здравого смысла с помощью контринтуитивных истин современной науки.",
    believe_imp_about_p1: "Современная физика полна результатов, которые кажутся невозможными: время замедляется, частица находится сразу в двух местах, у Вселенной есть начало. В книге «Поверить в невозможное» Владимир Кессельман рассматривает их не как пугающие парадоксы, а как приглашение обновить обычный здравый смысл.",
    believe_imp_about_p2: "Шаг за шагом книга показывает, почему контринтуитивные выводы теории относительности, квантовой теории и космологии на самом деле разумны, если задать правильные вопросы. Это тренировка для любознательного ума, без тяжёлой математики.",
    believe_imp_kp1: "Почему «невозможные» результаты современной физики имеют смысл",
    believe_imp_kp2: "Относительность, квантовая теория и космология для широкого читателя",
    believe_imp_kp3: "Пошаговый апгрейд повседневной интуиции",
    believe_imp_kp4: "Новейшая научно-популярная книга Кессельмана (2025)",
    believe_imp_audience: "Любознательным читателям, желающим понять современную физику без математики.",
    auth_kesselman_name: "В. С. Кессельман",
    auth_kesselman_title: "Автор научно-популярных книг (история физики и астрономии)",
    auth_kesselman_creds: "Кандидат физико-математических наук · выпускник физфака МГУ",
    auth_kesselman_bio_p1: "Владимир Самуилович Кессельман (р. 1941) окончил физический факультет МГУ, занимался взаимодействием ионов низких энергий с веществом и ранней историей Солнечной системы, а затем обратился к литературной работе.",
    auth_kesselman_bio_p2: "Обращаясь к широкому читателю, он стал одним из самых плодовитых российских популяризаторов науки — около двадцати доступных книг, проводящих неспециалиста через всю физику и астрономию.",
    auth_kuzmin_name: "М. И. Кузьмин",
    auth_kuzmin_title: "Геохимик · Институт геохимии им. А. П. Виноградова СО РАН",
    auth_kuzmin_creds: "Академик РАН · доктор геолого-минералогических наук · Государственная премия (1997); Демидовская премия (2007)",
    auth_kuzmin_bio_p1: "Михаил Иванович Кузьмин — геохимик, академик РАН, главный научный сотрудник Института геохимии им. А. П. Виноградова СО РАН в Иркутске.",
    auth_kuzmin_bio_p2: "Автор и соавтор более 460 публикаций, в том числе около двадцати монографий; иностранный член Академии наук Монголии.",
    auth_yarmolyuk_name: "В. В. Ярмолюк",
    auth_yarmolyuk_title: "Геолог · Институт геологии рудных месторождений (ИГЕМ РАН)",
    auth_yarmolyuk_creds: "Академик РАН · доктор геолого-минералогических наук · лауреат Государственной премии",
    auth_yarmolyuk_bio_p1: "Владимир Викторович Ярмолюк (р. 1945) — академик РАН, специалист в области геологии, геодинамики и магматизма в Институте геологии рудных месторождений, петрографии, минералогии и геохимии (ИГЕМ РАН).",
    auth_yarmolyuk_bio_p2: "Его работы посвящены континентальному магматизму, мантийным плюмам и геодинамике Центральной Азии; лауреат Государственной премии РФ.",
    auth_oganov_name: "А. Р. Оганов",
    auth_oganov_title: "Профессор Сколковского института науки и технологий (Сколтех)",
    auth_oganov_creds: "Кристаллограф и материаловед · член Academia Europaea · высокоцитируемый исследователь",
    auth_oganov_bio_p1: "Артём Ромаевич Оганов (р. 1975) — кристаллограф и материаловед, профессор Сколтеха, член Academia Europaea.",
    auth_oganov_bio_p2: "Его метод USPEX предсказывает кристаллические структуры материалов из первых принципов и используется тысячами исследователей по всему миру; неоднократно входит в число самых цитируемых учёных.",
  }
};

/* ════════════════════════════════════════════
   REVIEWS — single source of truth
   ────────────────────────────────────────────
   Each review object renders bilingually on book detail pages
   (filtered by `books`). Reviews do NOT render on the homepage.
   See field documentation in the original baseline; restored intact
   after the IIKI i18n expansion.
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
             "<p>This textbook differs from known books on quantum field theory and elementary particle physics in the breadth of material covered (from the foundations of relativistic quantum mechanics to renormalization and quantum anomalies) and in its original manner of presenting individual topics.</p>" +
             "<p>An important and attractive feature of this textbook is the presence not only of a large number of carefully selected and instructive problems, but also of detailed solutions to those problems. One more attractive feature should be noted: this course is not a purely theoretical exercise; it bears directly on the daily work of modern experimental and theoretical physicists, and one feels in it the breath of modern physics.</p>" +
             "<p>The excellent illustrations and the very interesting historical material deserve special mention. The book uses QR codes that allow readers to access animations of complex concepts. The language of the textbook is far from dry academicism; it is close to the conversational language of lectures, simple and precise.</p>",
    full_ru: "<p>Предлагаемое учебное пособие является оригинальной разработкой, основанной на многолетнем опыте преподавания автором соответствующих курсов в Объединённом институте ядерных исследований (ОИЯИ, Дубна). Оно соответствует высоким требованиям, предъявляемым к уровню знаний студентов и аспирантов, работающих в ОИЯИ.</p>" +
             "<p>Несмотря на наличие таких прекрасных пособий по данному предмету, как Берестецкий, Лифшиц, Питаевский <em>Квантовая электродинамика</em> и Пескин, Шрёдер <em>Введение в квантовую теорию поля</em>, данная книга окажется чрезвычайно полезной не только для студентов и аспирантов, но и для работающих физиков по целому ряду причин.</p>" +
             "<p>Этот учебник отличается от известных книг по квантовой теории поля и физике элементарных частиц широтой охватываемого материала (от основ релятивистской квантовой механики до перенормировок и квантовых аномалий) и оригинальной манерой изложения отдельных тем.</p>" +
             "<p>Важной и привлекательной особенностью данного пособия является наличие не только большого числа тщательно отобранных и поучительных задач, но и подробных решений этих задач. Этот курс не относится к варианту чисто теоретической теории, он имеет непосредственное отношение к повседневной жизни современных физиков-экспериментаторов и физиков-теоретиков, в нём чувствуется дыхание современной физики.</p>" +
             "<p>Особо следует отметить прекрасные иллюстрации и наличие очень интересных исторических сведений. В книге используются QR-коды, которые позволяют читателям получать доступ к анимациям сложных концепций. Язык учебника далёк от сухого академизма, он близок к разговорному языку лекций, прост и точен.</p>"
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
    full_en: "<p>A few words about the remarkable book by my colleague, Doctor of Physical and Mathematical Sciences, Deputy Director of the V. P. Dzhelepov Laboratory of Nuclear Problems, Dmitry Vadimovich Naumov, <em>Quantum Field Theory for Experimentalists and Beyond</em>.</p>" +
             "<p>I would call this creation of a brilliant human mind a Guidebook to modern elementary particle physics and its deep theoretical foundations. It is precisely a Guidebook, led by a wise teacher-guide invisibly present beside the reader, intimately familiar not only with the problems and complexities of modern precision experiments, but also with all the pitfalls of the difficult and at times sharply contradictory landscape of field theory.</p>" +
             "<p>The author cares deeply about what he is telling, and equally deeply about those who are listening. For this reason he supplements each chapter with a substantial set of problems, a list of useful literature, varied and richly illustrated examples, and an outstanding innovation in the form of QR codes that direct the reader to online video materials prepared by the author.</p>",
    full_ru: "<p>Хочется сказать несколько слов о замечательной книге моего коллеги, доктора физико-математических наук, заместителя директора Лаборатории ядерных проблем им. В. П. Джелепова, Дмитрия Вадимовича Наумова «Квантовая теория поля для экспериментаторов и не только».</p>" +
             "<p>Я бы назвал это творение блестящего ума человеческого Путеводителем по современной физике элементарных частиц и её глубинным теоретическим основам. Это именно Путеводитель, возглавляемый незримо присутствующим рядом с читателем мудрым гидом-учителем, хорошо знающим не только проблемы и сложности современных прецизионных экспериментов, но и все подводные камни непростого и порой крайне противоречивого теоретико-полевого ландшафта.</p>" +
             "<p>Автор Книги очень неравнодушен к тому, что он рассказывает, он также неравнодушен и к тем, кто его слушает. По этой причине он каждую главу дополняет большим числом задач, списком полезной литературы, разнообразными красочно оформленными примерами и выдающимся ноу-хау в виде QR-кодов, отсылающих читателя к подготовленным автором видеоматериалам.</p>"
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
             "<p>One can also note a rare strength of the book: one of the most difficult topics of quantum field theory, the theory of renormalization and quantum anomalies, is presented here clearly and accessibly, without losing rigour.</p>" +
             "<p>At the same time this is a textbook of a new time: it contains not only superb illustrations, but also QR codes with animations and illustrative material, problems, and even topics for independent research. This book can confidently be recommended to those who intend not only to study quantum field theory, but also to put it to use in practice.</p>",
    full_ru: "<p>Перед вами необычный учебник по квантовой теории поля. Он сочетает строгость формулировок и, в то же время, доступность изложения, ясное объяснение физической природы обсуждаемых явлений; в нём также рассказывается и о драматической истории рождения квантовой теории. Книга особенно ценна тем, что показывает квантовую теорию поля как рабочий инструмент не только для теоретиков, но и для экспериментаторов. Большое место в ней занимают вычисления реальных физических процессов и работа с диаграммами Фейнмана.</p>" +
             "<p>Можно также отметить редкое достоинство книги: одна из самых сложных тем квантовой теории поля — теория перенормировок и квантовые аномалии — изложена здесь ясно и доступно, без потери строгости.</p>" +
             "<p>В то же время это учебник нового времени: в нём есть не только замечательные иллюстрации, но и QR-коды с анимациями и наглядными материалами, задачи и даже темы для самостоятельных исследований. Эту книгу можно смело рекомендовать тем, кто собирается не только изучить квантовую теорию поля, но и применять её на практике.</p>"
  }
];
