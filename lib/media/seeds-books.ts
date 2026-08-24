import type { CurationTheme } from './curation';

// Books & Literature — 5 editorial themes.
// 诚信原则：thesis/intro/audience/criteria/alternatives 均为编辑部基于公开事实的策展判断；
// editorialNotes（Our take）只陈述客观事实（出版年、奖项、改编关系），绝不虚构读者评价或第一身经历。
export const BOOKS_THEMES: CurationTheme[] = [
  {
    slug: 'page-to-screen',
    channel: 'books',
    title: 'Page to Screen: Beloved Books That Became Film & TV',
    thesis:
      'The adaptation is a second reading, not a lesser one. These are books whose screen versions North American audiences know as well as the page — and the interesting part is where the two disagree.',
    intro:
      'A curation of novels and memoirs that became landmark film and television. We are not ranking "better than the book" — we are tracing how a story mutates across forms, and why some adaptations quietly become the definitive version for a whole generation.',
    audience:
      'For readers who loved the book and want to understand the adaptation, and for viewers who met the story on screen and are curious where it came from. Equally good for book clubs, film students, and anyone who has ever argued about whether the movie "got it right." Skip it only if you want pure literary snobbery or pure film discourse — this list lives in the overlap.',
    criteria:
      'We picked books whose adaptations are culturally load-bearing in North America, not just any optioned property. Each entry had to have a screen version that people actually debate. We dropped straight-to-streaming adaptations nobody remembers and kept the ones that sparked "the book was better / no, the film was" conversations that are still going.',
    alternatives:
      'If you want the source without the screen, drill into our Fantasy & Sci-Fi Foundations list. If you want adaptations that started as comics instead of prose, see Comics That Became Film & TV. We would rather you find the cross-medium thread that fits your mood than the most "important" book on paper.',
    tags: ['adaptation', 'literary-fiction', 'film-tv', 'cross-media'],
    mood: ['focused', 'reflective'],
    items: [
      'The Lord of the Rings',
      'Harry Potter and the Sorcerer’s Stone',
      'The Handmaid’s Tale',
      'Dune',
      'The Shining',
      'Gone Girl',
      'The Martian',
      'Never Let Me Go',
      'The Goldfinch',
      'Big Little Lies',
    ],
    editorialNotes: {
      'The Lord of the Rings':
        'Tolkien’s 1954–1955 trilogy is the template for modern fantasy adaptation; Jackson’s films (2001–2003) are themselves a cultural reference point. The book’s appendices and pacing differ sharply from the films’ compression of decades into a single arc.',
      'Dune':
        'Herbert’s 1965 novel won the inaugural Nebula and shared the Hugo. Two major adaptations exist — Lynch’s 1984 version and Villeneuve’s 2021/2024 films — which themselves make a useful study in how adaptation tone shifts with era.',
      'The Handmaid’s Tale':
        'Atwood’s 1985 novel predates its screen life by three decades; the Hulu series (2017–) refreshed it for a new political moment. The book is a single sustained voice; the series necessarily multiplies perspective.',
    },
    faq: [
      { q: 'Why pair the book and the adaptation instead of choosing one?', a: 'Because the interesting editorial work is in the gap between them. A list that just says "read this" ignores that most North Americans met these stories on screen first.' },
      { q: 'Are these spoiler-free?', a: 'We describe the adaptation relationship, not plot turns. If you have not read or watched, nothing here ruins either.' },
      { q: 'Where do the book facts come from?', a: 'Standard bibliographic record — author, first-publish year, and documented awards are public facts. We do not invent reader reactions or review scores.' },
    ],
    related: ['adaptation-from-page', 'graphic-adjacent', 'fantasy-scifi-foundations'],
  },
  {
    slug: 'modern-literary-fiction',
    channel: 'books',
    title: 'Modern Literary Fiction: The 21st-Century Canon',
    thesis:
      'The "literary canon" used to mean the dead. This list is the living one — prize-winners and bestsellers from the last twenty-five years that critics keep returning to.',
    intro:
      'A curation of contemporary literary fiction that has already outlasted its publication year. These are the novels that win the Pulitzer and the Booker and then stay in print, taught, and argued about.',
    audience:
      'For readers who want to know what "good" means right now, not in 1950. Good for book-club leaders, returning readers who lost the thread after college, and anyone tired of algorithmic "also bought" loops. Skip it if you want plot-driven escape — these reward attention, not speed.',
    criteria:
      'We prioritized documented prize recognition (Pulitzer, Booker, Women’s Prize) and sustained critical attention over sales alone. We kept books that do something formally interesting — fragmentation, second-person, non-linear time — and dropped competent-but-forgettable bestsellers.',
    alternatives:
      'If you want the genre side of the same era, see Fantasy & Sci-Fi Foundations. If you want shorter forms, see Short Stories & Collections. For cross-media, Page to Screen is the natural bridge.',
    tags: ['literary-fiction', 'contemporary', 'prize-winning'],
    mood: ['reflective', 'slow'],
    items: [
      'The Road',
      'A Visit from the Goon Squad',
      'The Underground Railroad',
      'The Overstory',
      'The Sellout',
      'Lincoln in the Bardo',
      'The Song of Achilles',
      'A Little Life',
      'Normal People',
      'Tomorrow, and Tomorrow, and Tomorrow',
    ],
    editorialNotes: {
      'The Road':
        'McCarthy’s 2006 novel won the 2007 Pulitzer. Its stripped, biblical prose is a known divide — readers either find it hypnotic or thin. The film (2013) softened it.',
      'The Overstory':
        'Powers’ 2018 novel won the 2019 Pulitzer. Its structure braids nine strangers into a single argument about trees; the form is the point.',
      'A Little Life':
        'Yanagihara’s 2015 novel was shortlisted for the Booker and became a word-of-mouth phenomenon — a case study in how a difficult book becomes a bestseller without a film.',
    },
    faq: [
      { q: 'Is "canon" too strong for books this recent?', a: 'We mean canon in the making — works already carried by prizes, syllabi, and repeated citation. Twenty-five years is enough to see which debuts stuck.' },
      { q: 'These are heavy. Any lighter entry points?', a: 'Normal People and Tomorrow, and Tomorrow, and Tomorrow are the most page-turny; The Sellout is the funniest (and a Booker winner).' },
    ],
    related: ['short-stories-collections', 'fantasy-scifi-foundations'],
  },
  {
    slug: 'fantasy-scifi-foundations',
    channel: 'books',
    title: 'Fantasy & Sci-Fi Foundations',
    thesis:
      'Most of what streams, plays, and sells as "IP" started here, on the page. These are the foundational texts that every later adaptation is in conversation with.',
    intro:
      'A curation of speculative fiction that became the substrate for film, games, and television. Not a "best of" — a "where it came from" list, with the adaptation history noted where it exists.',
    audience:
      'For fans who want to read the source before the screen, and for gamers curious why every RPG has a "chosen one." Good for worldbuilding nerds and anyone who liked the show and wants the deeper cut. Skip it if you only watch and never read — this list assumes you will open the book.',
    criteria:
      'We picked books whose influence is measurable — directly adapted, or so archetypal that later media quotes them unconsciously. We kept a mix of doorstoppers (Lord of the Rings) and tight classics (Left Hand of Darkness) and dropped franchise spin-offs that add nothing.',
    alternatives:
      'If you want the screen versions, Page to Screen covers the adapted subset. If you want the games, our Games channel has the adaptation lineage. For pure literary weight, Modern Literary Fiction is the counterpoint.',
    tags: ['fantasy', 'science-fiction', 'adaptation', 'worldbuilding'],
    mood: ['immersive', 'epic'],
    items: [
      'A Game of Thrones',
      'The Hobbit',
      'Foundation',
      'Neuromancer',
      'Hyperion',
      'The Name of the Wind',
      'Mistborn: The Final Empire',
      'The Left Hand of Darkness',
      'Children of Time',
      'Piranesi',
    ],
    editorialNotes: {
      'Neuromancer':
        'Gibson’s 1984 novel swept the Nebula, Hugo, and Philip K. Dick awards and named "cyberspace." Its DNA is in every cyberpunk game and film since.',
      'The Left Hand of Darkness':
        'Le Guin’s 1969 novel won both the Hugo and Nebula. Its treatment of gender as fluid was radical for the era and remains a teaching text.',
      'Foundation':
        'Asimov’s 1951 collection of connected stories became the template for "fall of empire" sci-fi and was adapted into the Apple TV+ series (2021–).',
    },
    faq: [
      { q: 'Why are these "foundations" and not just popular sci-fi?', a: 'Because later writers, showrunners, and game designers cite them directly. The list is built on lineage, not just quality.' },
      { q: 'I have not read genre fiction. Where to start?', a: 'The Hobbit is the gentlest on-ramp; Piranesi is the shortest and most literary; Neuromancer is the one everyone quotes.' },
    ],
    related: ['page-to-screen', 'graphic-adjacent'],
  },
  {
    slug: 'graphic-adjacent',
    channel: 'books',
    title: 'Graphic-Adjacent: Novels That Became Comics',
    thesis:
      'Some writers refuse to stay in one form. This list gathers authors — Gaiman above all — whose prose keeps sliding into panels, and whose "novels" often arrive illustrated.',
    intro:
      'A curation of books by writers who work across prose and comics, including titles that exist in both a prose and a graphic form. The through-line is the artist who will not pick a medium.',
    audience:
      'For readers who liked a Gaiman novel and wondered where to go next, and for comics fans curious about the prose behind the panels. Good for people who like their stories illustrated but still want sentences. Skip it if you want strict prose-only literary fiction.',
    criteria:
      'We centered on authors with genuine cross-form output (Gaiman, Moore) rather than one-off adaptations. We kept titles that meaningfully exist in both forms — prose original later drawn, or illustrated editions — and dropped straight prose with no comic life.',
    alternatives:
      'For the comics themselves, see our Comics channel. For pure prose fantasy, Fantasy & Sci-Fi Foundations. The overlap is the point of this list.',
    tags: ['fantasy', 'graphic-novel', 'cross-media', 'mythology'],
    mood: ['whimsical', 'immersive'],
    items: [
      'American Gods',
      'The Sandman',
      'Good Omens',
      'The Graveyard Book',
      'Stardust',
      'Coraline',
      'The League of Extraordinary Gentlemen',
      'V for Vendetta',
      'From Hell',
      'The Sleeper and the Spindle',
    ],
    editorialNotes: {
      'The Sandman':
        'Gaiman’s comics series (1989–1996) won the 1991 World Fantasy Award — a rare comics intrusion into a prose prize. The prose "The Sandman: Book of Dreams" anthology and the Netflix series (2022–) extend the same world.',
      'Coraline':
        'Gaiman’s 2002 novella was illustrated by the author’s frequent collaborator Dave McKean in some editions and adapted into the 2009 stop-motion film — a clean case of one story in three forms.',
      'Good Omens':
        'Gaiman and Pratchett’s 1990 novel was co-adapted by Gaiman for Amazon (2019); Gaiman later wrote a comic prequel. The cross-form life is the whole identity.',
    },
    faq: [
      { q: 'Is this just Neil Gaiman?', a: 'He is the spine because his output is the clearest cross-form case, but Moore and Pratchett entries broaden it. We led with the strongest example, not a monoculture.' },
      { q: 'Are the comic versions better than the prose?', a: 'Different jobs. We note where each exists; the list refuses to rank them because the form changes the argument.' },
    ],
    related: ['page-to-screen', 'comics-adapted'],
  },
  {
    slug: 'short-stories-collections',
    channel: 'books',
    title: 'Short Stories & Collections: The Form at Its Best',
    thesis:
      'The novel gets the headlines; the short story does the real work. These collections are where modern fiction actually experiments.',
    intro:
      'A curation of short-story collections and linked tales — from Joycean modernism to contemporary speculative flashes. The short form is where writers risk the most per page.',
    audience:
      'For readers with short attention spans and high standards, and for anyone who wants to sample a writer before committing to a 600-page novel. Good for bedside tables and commutes. Skip it if you need a single sustained arc — these are bites, not feasts.',
    criteria:
      'We picked collections that are themselves coherent arguments, not random reprints — linked cycles (Olive Kitteridge), debut bursts (Tenth of December), formal play (Cosmicomics). We dropped anthologies assembled by others rather than authored as a unit.',
    alternatives:
      'If you want the longer form, Modern Literary Fiction is the novel counterpart. For bite-sized screen, Podcasts has the narrative-fiction equivalent.',
    tags: ['short-stories', 'literary-fiction', 'experimental'],
    mood: ['reflective', 'fragmented'],
    items: [
      'Tenth of December',
      'Interpreter of Maladies',
      'Olive Kitteridge',
      'Her Body and Other Parties',
      'The Thing Around Your Neck',
      'Dubliners',
      'The Complete Stories',
      'Friday Black',
      'Invisible Cities',
      'Cosmicomics',
    ],
    editorialNotes: {
      'Dubliners':
        'Joyce’s 1914 collection is the foundation of literary modernism in short form; "The Dead" is the most taught short story in university syllabi.',
      'Olive Kitteridge':
        'Strout’s 2008 linked stories won the Pulitzer and became an HBO miniseries (2014) — a rare case of the short form driving a prestige adaptation.',
      'Invisible Cities':
        'Calvino’s 1972 book reads as 55 linked prose poems narrated by Marco Polo; it is assigned in architecture and writing programs as much as literature.',
    },
    faq: [
      { q: 'Why collect short stories instead of just reading one author’s best?', a: 'Because a collection is a sequence the author chose. The order is part of the meaning, which is why we curate the book, not the hit single.' },
      { q: 'Where do the publication facts come from?', a: 'Author and first-publish year are standard bibliographic record. We state them; we do not invent critical reception.' },
    ],
    related: ['modern-literary-fiction', 'narrative-fiction'],
  },
];
