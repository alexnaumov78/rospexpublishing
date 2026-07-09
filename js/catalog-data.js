/* ════════════════════════════════════════════════════════════════════════
   ROSPEX PUBLISHING — Catalog search index
   One entry per book. Powers client-side search (js/search.js). No dependencies.

   To add a new book: copy a block, fill in the fields, and (importantly) give it
   good `kw_en` / `kw_ru` topic keywords — those are what make search feel smart.
   Fields:
     id        unique slug
     url       book page (null if not yet a page, e.g. Coming Soon)
     cover     cover image path (relative to site root)
     cat       category id: c1..c6 (name is pulled from i18n cat_cX_name)
     audience  "textbook" | "popular"
     price     current display price (string)  · priceOld optional (strikethrough)
     coming    true = Coming Soon (rendered non-clickable)
     title_en / title_ru, author_en / author_ru  (both scripts are indexed)
     kw_en / kw_ru  curated topic keywords (space-separated, indexed heavily)
   ════════════════════════════════════════════════════════════════════════ */

const CATALOG_BOOKS = [
  /* ── C1 · Quantum & Particle Physics ─────────────────────────────────── */
  {
    id: "qft-vol1", url: "books/qft-volume-1.html", cover: "assets/images/covers/qft-vol1-ru.png",
    cat: "c1", audience: "textbook", price: "$26.99", priceOld: "$34.99",
    title_en: "Quantum Field Theory for Experimentalists and Beyond, Volume I",
    title_ru: "Квантовая теория поля для экспериментаторов и не только, Том I",
    author_en: "Dmitry V. Naumov", author_ru: "Д. В. Наумов",
    kw_en: "quantum field theory qft particle physics relativistic quantum mechanics klein-gordon dirac equation canonical quantization propagators s-matrix special relativity feynman graduate physics high energy",
    kw_ru: "квантовая теория поля физика частиц релятивистская квантовая механика уравнение дирака каноническое квантование пропагаторы теория относительности фейнман физика высоких энергий"
  },
  {
    id: "qft-vol2", url: "books/qft-volume-2.html", cover: "assets/images/covers/qft-vol2-ru.png",
    cat: "c1", audience: "textbook", price: "$26.99", priceOld: "$34.99",
    title_en: "Quantum Field Theory for Experimentalists and Beyond, Volume II",
    title_ru: "Квантовая теория поля для экспериментаторов и не только, Том II",
    author_en: "Dmitry V. Naumov", author_ru: "Д. В. Наумов",
    kw_en: "quantum electrodynamics qed path integrals gauge theory yang-mills higgs mechanism standard model renormalization deep inelastic scattering cross sections anomalies beyond standard model",
    kw_ru: "квантовая электродинамика континуальные интегралы калибровочная теория янга-миллса хиггс стандартная модель перенормировка сечения аномалии за пределами стандартной модели"
  },
  {
    id: "qft-bundle", url: "books/qft-bundle.html", cover: "assets/images/covers/qft-bundle-ru.png",
    cat: "c1", audience: "textbook", price: "$47.99", priceOld: "$59.99",
    title_en: "QFT Complete Edition: Volumes I and II",
    title_ru: "КТП, полное издание: тома I и II",
    author_en: "Dmitry V. Naumov", author_ru: "Д. В. Наумов",
    kw_en: "quantum field theory complete edition bundle set both volumes qft qed standard model",
    kw_ru: "квантовая теория поля полное издание комплект набор оба тома ктп стандартная модель"
  },
  {
    id: "qm-lectures", url: "books/quantum-mechanics.html", cover: "assets/images/covers/qm-lectures-ru.jpg",
    cat: "c1", audience: "textbook", price: "$15.99",
    title_en: "Lectures on Quantum Mechanics",
    title_ru: "Лекции по квантовой механике",
    author_en: "V. G. Serbo, I. B. Khriplovich", author_ru: "В. Г. Сербо, И. Б. Хриплович",
    kw_en: "quantum mechanics schrodinger equation atomic physics wave function novosibirsk nsu lectures textbook",
    kw_ru: "квантовая механика уравнение шрёдингера атомная физика волновая функция новосибирск нгу лекции учебник"
  },
  {
    id: "epp-lectures", url: "books/elementary-particle-physics.html", cover: "assets/images/covers/epp-lectures-ru.jpg",
    cat: "c1", audience: "textbook", price: "$12.99",
    title_en: "Lectures on Elementary Particle Physics",
    title_ru: "Лекции по физике элементарных частиц",
    author_en: "V. G. Serbo, A. S. Rudenko", author_ru: "В. Г. Сербо, А. С. Руденко",
    kw_en: "elementary particle physics particles standard model introductory course quarks leptons bosons novosibirsk nsu",
    kw_ru: "физика элементарных частиц элементарные частицы стандартная модель кварки лептоны бозоны новосибирск нгу"
  },

  /* ── C2 · Classical & Theoretical Physics ────────────────────────────── */
  {
    id: "mech-problems", url: "books/mechanics-problems.html", cover: "assets/images/covers/mech-problems-ru.jpg",
    cat: "c2", audience: "textbook", price: "$17.99",
    title_en: "Collected Problems in Classical Mechanics",
    title_ru: "Сборник задач по классической механике",
    author_en: "G. L. Kotkin, V. G. Serbo", author_ru: "Г. Л. Коткин, В. Г. Сербо",
    kw_en: "classical mechanics problem book problems exercises lagrangian hamiltonian oscillations mechanics novosibirsk nsu",
    kw_ru: "классическая механика сборник задач задачи упражнения лагранжиан гамильтониан колебания механика новосибирск нгу"
  },
  {
    id: "analytical-mech", url: "books/analytical-mechanics.html", cover: "assets/images/covers/analytical-mech-ru.jpg",
    cat: "c2", audience: "textbook", price: "$14.99",
    title_en: "Lectures on Analytical Mechanics",
    title_ru: "Лекции по аналитической механике",
    author_en: "G. L. Kotkin, V. G. Serbo, A. I. Chernykh", author_ru: "Г. Л. Коткин, В. Г. Сербо, А. И. Черных",
    kw_en: "analytical mechanics lagrangian hamiltonian variational principle theoretical mechanics lectures novosibirsk nsu",
    kw_ru: "аналитическая механика лагранжиан гамильтониан вариационный принцип теоретическая механика лекции новосибирск нгу"
  },

  /* ── C3 · Astronomy, Astrophysics & Cosmology ────────────────────────── */
  {
    id: "astronomy-book", url: "books/astronomy-book.html", cover: "assets/images/covers/astronomy-book-ru.jpg",
    cat: "c3", audience: "popular", price: "$14.99",
    title_en: "All Astronomy in One Book",
    title_ru: "Вся астрономия в одной книге",
    author_en: "V. S. Kesselman", author_ru: "В. С. Кессельман",
    kw_en: "astronomy stars planets galaxies cosmos universe telescopes constellations popular science readers guide",
    kw_ru: "астрономия звёзды планеты галактики космос вселенная телескопы созвездия научно-популярная"
  },
  {
    id: "solar-neutrino", url: null, cover: "assets/images/covers/solar-neutrino-ru.png",
    cat: "c3", audience: "popular", price: "$19.99", coming: true,
    title_en: "Solar Neutrino",
    title_ru: "Солнечное нейтрино",
    author_en: "Dmitry V. Naumov", author_ru: "Д. В. Наумов",
    kw_en: "neutrino solar neutrino sun particle physics astrophysics popular science children",
    kw_ru: "нейтрино солнечное нейтрино солнце физика частиц астрофизика научно-популярная детям"
  },

  /* ── C4 · Earth & Planetary Sciences ─────────────────────────────────── */
  {
    id: "geology-earth", url: "books/geology-earth.html", cover: "assets/images/covers/geology-earth-ru.jpg",
    cat: "c4", audience: "textbook", price: "$22.99",
    title_en: "Geological Evolution of the Earth",
    title_ru: "Геологическая эволюция Земли",
    author_en: "M. I. Kuzmin, V. V. Yarmolyuk et al.", author_ru: "М. И. Кузьмин, В. В. Ярмолюк и др. (А. Р. Оганов)",
    kw_en: "geology earth plate tectonics supercontinents paleogeography geological evolution mantle plumes planetary science ras monograph oganov",
    kw_ru: "геология земля тектоника плит суперконтиненты палеогеография геологическая эволюция мантийные плюмы науки о земле ран монография оганов"
  },

  /* ── C5 · Biophysics & Life Sciences ─────────────────────────────────── */
  {
    id: "biophys-v1", url: "books/biophysics-vol-1.html", cover: "assets/images/covers/biophys-v1-ru.jpg",
    cat: "c5", audience: "textbook", price: "$21.99",
    title_en: "Biophysics, Vol. I — Theoretical Biophysics",
    title_ru: "Биофизика. Том I. Теоретическая биофизика",
    author_en: "A. B. Rubin", author_ru: "А. Б. Рубин",
    kw_en: "biophysics theoretical biophysics thermodynamics kinetics molecular biophysics biopolymers biology life sciences",
    kw_ru: "биофизика теоретическая биофизика термодинамика кинетика молекулярная биофизика биополимеры биология науки о жизни"
  },
  {
    id: "biophys-v2", url: "books/biophysics-vol-2.html", cover: "assets/images/covers/biophys-v2-ru.jpg",
    cat: "c5", audience: "textbook", price: "$21.99",
    title_en: "Biophysics, Vol. II — Membrane Processes",
    title_ru: "Биофизика. Том II. Биофизика мембранных процессов",
    author_en: "A. B. Rubin", author_ru: "А. Б. Рубин",
    kw_en: "biophysics cell membrane transport ion channels bioenergetics cellular processes biology life sciences",
    kw_ru: "биофизика клетка мембрана транспорт ионные каналы биоэнергетика клеточные процессы биология"
  },
  {
    id: "biophys-v3", url: "books/biophysics-vol-3.html", cover: "assets/images/covers/biophys-v3-ru.jpg",
    cat: "c5", audience: "textbook", price: "$21.99",
    title_en: "Biophysics, Vol. III — Photobiological Mechanisms",
    title_ru: "Биофизика. Том III. Механизмы фотобиологических процессов",
    author_en: "A. B. Rubin", author_ru: "А. Б. Рубин",
    kw_en: "biophysics photosynthesis photobiology charge transfer vision cellular processes biology life sciences",
    kw_ru: "биофизика фотосинтез фотобиология перенос заряда зрение клеточные процессы биология"
  },

  /* ── C6 · History of Science & Popular Reading ───────────────────────── */
  {
    id: "physics-book", url: "books/physics-book.html", cover: "assets/images/covers/physics-book-ru.jpg",
    cat: "c6", audience: "popular", price: "$14.99",
    title_en: "All of Physics in One Book: From the Flat Earth to the Big Bang",
    title_ru: "Вся физика в одной книге: от плоской Земли до Большого взрыва",
    author_en: "V. S. Kesselman", author_ru: "В. С. Кессельман",
    kw_en: "physics history of physics big bang popular science readers guide general physics",
    kw_ru: "физика история физики большой взрыв научно-популярная общая физика"
  },
  {
    id: "history-physics", url: "books/history-physics.html", cover: "assets/images/covers/history-physics-ru.jpg",
    cat: "c6", audience: "popular", price: "$15.99",
    title_en: "Another History of Physics",
    title_ru: "Другая история физики",
    author_en: "V. S. Kesselman", author_ru: "В. С. Кессельман",
    kw_en: "history of physics popular science scientists discoveries ideas physics",
    kw_ru: "история физики научно-популярная учёные открытия идеи физика"
  },
  {
    id: "lives-physicists", url: "books/lives-physicists.html", cover: "assets/images/covers/lives-physicists-ru.jpg",
    cat: "c6", audience: "popular", price: "$15.99",
    title_en: "Lives of Famous Physicists and Astronomers",
    title_ru: "Жизнеописания знаменитых физиков и астрономов",
    author_en: "V. S. Kesselman", author_ru: "В. С. Кессельман",
    kw_en: "biographies physicists astronomers history of science lives scientists popular science",
    kw_ru: "биографии физики астрономы история науки жизнеописания учёные научно-популярная"
  },
  {
    id: "believing-impossible", url: "books/believing-impossible.html", cover: "assets/images/covers/believing-impossible-ru.jpg",
    cat: "c6", audience: "popular", price: "$12.99",
    title_en: "Believing the Impossible: An Upgrade for Common Sense",
    title_ru: "Поверить в невозможное: апгрейд здравого смысла",
    author_en: "V. S. Kesselman", author_ru: "В. С. Кессельман",
    kw_en: "common sense relativity quantum counterintuitive modern physics popular science",
    kw_ru: "здравый смысл теория относительности квантовая контринтуитивная современная физика научно-популярная"
  }
];

/* expose for search.js (plain scripts share global scope, but be explicit) */
if (typeof window !== "undefined") window.CATALOG_BOOKS = CATALOG_BOOKS;
