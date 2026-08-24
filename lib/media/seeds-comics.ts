import type { CurationTheme } from './curation';

// Comics & Graphic Novels channel — 5 curated themes.
// Items below are real works present in lib/media/generated-comics.ts (AniList manga +
// public bibliographic records for Western comics). Our take statements are bibliographic /
// award / adaptation facts only — no fabricated reader quotes or ratings.

export const COMICS_THEMES: CurationTheme[] = [
  {
    channel: 'comics',
    slug: 'manga-masterworks',
    title: 'Manga Masterworks: The Canon Western Readers Actually Rate',
    mood: ['cerebral'],
    intro:
      'Manga is a distinct reading form with its own pacing and grammar. These are the long-form works that recur on serious "best of" lists and carry the highest community scores on AniList — not the current seasonal chart, but the books people re-read.',
    thesis:
      'A great manga is built on restraint: hundreds of pages where a single panel does the work a splash page does elsewhere. We lead with the works that earned durable reputations, then separate the genre-defining from the merely popular.',
    audience: 'Adult and older-teen readers open to dense, serialized storytelling; film/TV fans of the adaptations.',
    criteria: 'Durable reputation across multiple "best manga" surveys, not a single season’s hype · AniList community score 80+ where available, or major award recognition · A complete or substantially complete run you can actually finish · English publication that is findable in libraries and bookshops',
    tags: ['manga', 'drama', 'canon'],
    items: ['Monster', '20th Century Boys', 'Berserk', 'Vagabond', 'Goodnight Punpun', 'Akira', 'Ghost in the Shell', 'Vinland Saga', 'BLAME!', 'Planetes'],
    editorialNotes: {
      Monster: 'Naoki Urasawa’s 1994–2001 suspense manga; AniList community score 90/100. Frequently named on "best manga" lists for its slow-burn detective plotting.',
      '20th Century Boys': 'Urasawa again (1999–2006); AniList 88/100. A mystery told across decades that rewards readers who like puzzle-box structure.',
      Berserk: 'Kentaro Miura’s dark-fantasy saga (1989–); AniList 92/100. The black-and-white artwork is routinely cited as influential on later fantasy games and animation.',
      Vagabond: 'Takehiko Inoue’s samurai retelling (1998–); AniList 91/100. Adapted from Eiji Yoshikawa’s novel Musashi — a book-to-manga link.',
      'Goodnight Punpun': 'Inio Asano (2007–2013); AniList 88/100. A stark coming-of-age work; not for every mood, and we say so.',
      Akira: 'Katsuhiro Otomo (1982–1990); AniList 84/100. The 1988 film adaptation is a cornerstone of global anime recognition.',
      'Ghost in the Shell': 'Masamune Shirow (1989); AniList 74/100. The 1995 film directed by Mamoru Oshii is the more famous entry point.',
      'Vinland Saga': 'Makoto Yukimura (2005–); AniList 90/100. Adaptation aired 2019–2023.',
      'BLAME!': 'Tsutomu Nihei (1997–2003); AniList 81/100. Wordless, architectural sci-fi; the 2017 Netflix film condenses it.',
      Planetes: 'Yukimura again (1999–2004); AniList 80/100. Hard-sf about orbital debris; adapted into an anime (2003–2004).',
    },
    faq: [
      { q: 'Where should a first-time manga reader start?', a: 'Monster or 20th Century Boys for mystery; Vagabond for historical weight; Planetes for grounded sci-fi. Avoid starting on the densest (BLAME!) unless the art style is the draw.' },
      { q: 'Are these finished?', a: 'Most are. Berserk and Vagabond are long-running; we note where a run is open so you are not left hanging mid-cliff.' },
    ],
    related: ['page-to-screen-comics', 'superhero-deconstructions'],
  },
  {
    channel: 'comics',
    slug: 'superhero-deconstructions',
    title: 'Superhero Deconstructions: When Capes Get Serious',
    mood: ['cerebral'],
    intro:
      'The superhero form is also the form that turns on itself. These are the books that took the costume apart — Watchmen, The Killing Joke, V for Vendetta, Preacher — and the ones that rebuilt it for adults (Saga, The Old Guard, Hellboy).',
    thesis:
      'A deconstruction works when it respects the form it is bending. We separate genuine rethinks (Watchmen) from stylish violence (some 1980s "grim" books) and from the modern books that simply assume an adult reader.',
    audience: 'Readers who like the films but want the source; lapsed superhero fans; adaptation trackers.',
    criteria: 'Direct influence on later film/TV (Watchmen→HBO, V for Vendetta→film) · A clear argument about the genre, not just tonal darkness · Findable in print and in libraries · Creator credited, not a house style',
    tags: ['superhero', 'deconstruction', 'adaptation'],
    items: ['Watchmen', 'Batman: The Killing Joke', 'V for Vendetta', 'Preacher', 'Saga', 'The Old Guard', 'Hellboy', 'Y: The Last Man'],
    editorialNotes: {
      Watchmen: 'Alan Moore & Dave Gibbons, DC (1986). Regularly atop "greatest graphic novels" lists; the 2009 film and 2019 HBO series both draw directly on it.',
      'Batman: The Killing Joke': 'Moore & Brian Bolland, DC (1988). Landmark Batman work; adapted into the 2016 animated film.',
      'V for Vendetta': 'Moore & David Lloyd, DC (1982–1989). The 2005 film starring Natalie Portman is the common entry point.',
      Preacher: 'Garth Ennis & Steve Dillon, Vertigo (1995–2000). Adapted into the AMC series (2016–2019).',
      Saga: 'Brian K. Vaughan & Fiona Staples, Image (2012–); multiple Eisner Awards. A sci-fi/fantasy epic that assumes adult readers.',
      'The Old Guard': 'Greg Rucka & Leandro Fernández, Image (2017). Adapted into the 2020 Netflix film starring Charlize Theron.',
      Hellboy: 'Mike Mignola, Dark Horse (1993–). Two film adaptations (2004; reboot 2019).',
      'Y: The Last Man': 'Vaughan & Pia Guerra, Vertigo (2002–2008). Adapted into the FX/Hulu series (2021).',
    },
    faq: [
      { q: 'Watchmen first, or the film?', a: 'The book is the reference. The 2009 film is a near-panel-by-panel adaptation; the HBO series is a sequel/remix. Read the book, then pick your adaptation.' },
      { q: 'Is Saga appropriate for kids?', a: 'No. It is explicitly adult — sexual content and graphic violence. We flag it so the "epic sci-fi" label is not read as all-ages.' },
    ],
    related: ['manga-masterworks', 'page-to-screen-comics'],
  },
  {
    channel: 'comics',
    slug: 'graphic-memoir',
    title: 'Graphic Memoir: True Stories in Panels',
    mood: ['tender'],
    intro:
      'The memoir form is where the literary graphic novel earned its awards. Maus won a Pulitzer; Fun Home became a Tony-winning musical; Persepolis became an animated film. These are nonfiction, drawn.',
    thesis:
      'A graphic memoir earns trust through specificity — a real place, a real time, a real body. We favor the books that are taught and cited, not the ones that trade on trauma as style.',
    audience: 'Nonfiction readers; book clubs; readers wary of superheroes but curious about the form.',
    criteria: 'Nonfiction / autobiographical basis · Major recognition (Pulitzer, Eisner, curriculum adoption) · A point of view that could not be a prose book · In print and widely findable',
    tags: ['memoir', 'nonfiction', 'award'],
    items: ['Maus', 'Fun Home', 'Persepolis', 'Blankets', 'Daytripper', 'The Arrival', 'Habibi', 'Building Stories'],
    editorialNotes: {
      Maus: 'Art Spiegelman, published 1980–1991. Won the 1992 Pulitzer Prize (Special Award) — the first graphic work to do so. A Holocaust memoir in animal metaphor.',
      'Fun Home': 'Alison Bechdel (2006). Adapted into the 2015 Tony-winning musical; a landmark of the graphic memoir.',
      Persepolis: 'Marjane Satrapi, 2000–2003. Adapted into the acclaimed 2007 animated film; a memoir of the Iranian Revolution.',
      Blankets: 'Craig Thompson (2003). Won the 2004 Eisner Award for Best Graphic Album; an autobiographical coming-of-age story.',
      Daytripper: 'Fábio Moon & Gabriel Bá (2010). Won Eisner Awards; a meditation on life and death, one issue per stage.',
      'The Arrival': 'Shaun Tan (2006). Wordless; a story of immigration told entirely in images.',
      Habibi: 'Craig Thompson (2011). A long-form fable drawing on Islamic art and calligraphy.',
      'Building Stories': 'Chris Ware (2012). A box of printed objects rather than a single bound book — awarded the 2013 Eisner for Best Graphic Album.',
    },
    faq: [
      { q: 'Are these sad on purpose?', a: 'Some are. Maus and Persepolis carry historical weight; Daytripper and Building Stories are more contemplative than grim. We note the tone so you choose by mood.' },
      { q: 'Why is The Arrival wordless?', a: 'It is a deliberate choice about immigration — the reader, like the migrant, has no language key. That is the point, not a gimmick.' },
    ],
    related: ['literary-fiction-books', 'indie-comics'],
  },
  {
    channel: 'comics',
    slug: 'indie-comics',
    title: 'Indie & Alternative Comics: Outside the Big Two',
    mood: ['rebellious'],
    intro:
      'Away from Marvel and DC, a whole alternative tradition exists — black-and-white, self-published, queer, punk, literary. Love and Rockets, Black Hole, Ghost World, A Contract with God (the book that named the "graphic novel").',
    thesis:
      'Indie comics reward patience with voice. The draw is a singular creator’s sensibility, not a shared universe. We pick the books that defined thealternative lane and still read as themselves.',
    audience: 'Literary readers; alternative-culture fans; anyone tired of event comics.',
    criteria: 'Creator-owned, not work-for-hire · Historical role in opening the form (A Contract with God, Love and Rockets) · In print or reliably reissued · A voice that does not exist at the big publishers',
    tags: ['indie', 'alternative', 'literary'],
    items: ['Love and Rockets', 'Black Hole', 'Ghost World', 'A Contract with God', 'Scott Pilgrim', 'Sin City', '300', 'From Hell'],
    editorialNotes: {
      'Love and Rockets': 'Jaime and Gilbert Hernandez, serialized from 1981. A foundational alternative-comics serial; decades-long creator-owned work.',
      'Black Hole': 'Charles Burns (1995–2005). A body-horror allegory of adolescence; widely taught in comics courses.',
      'Ghost World': 'Daniel Clowes (1993–1997). Adapted into the 2001 film with Thora Birch and Scarlett Johansson.',
      'A Contract with God': 'Will Eisner (1978). Often credited with popularizing the term "graphic novel."',
      'Scott Pilgrim': 'Bryan Lee O’Malley (2004–2010). Adapted into the 2010 film Scott Pilgrim vs. the World.',
      'Sin City': 'Frank Miller (1991–2000). Adapted into the 2005–2014 film series.',
      '300': 'Frank Miller (1998). Adapted into the 2006 film.',
      'From Hell': 'Alan Moore & Eddie Campbell (1989–1996). A speculative account of the Jack the Ripper case; adapted into the 2001 film.',
    },
    faq: [
      { q: 'What does "indie" mean here?', a: 'Creator-owned and published outside the superhero houses — often black-and-white, often literary or personal. The opposite of a shared universe.' },
      { q: 'Where to start?', a: 'Ghost World for dry wit; Black Hole for unease; Love and Rockets for the long arc of a community.' },
    ],
    related: ['graphic-memoir', 'superhero-deconstructions'],
  },
  {
    channel: 'comics',
    slug: 'page-to-screen-comics',
    title: 'Page to Screen: Comics That Became Film & TV',
    mood: ['cerebral'],
    intro:
      'The adaptation pipeline runs both ways. These are the comics and graphic novels that became notable films or series — Watchmen, The Sandman, Persepolis, Saga (optioned), Preacher, Y: The Last Man, The Old Guard, V for Vendetta.',
    thesis:
      'A comic adaptation is judged on what it keeps. We pair the book with its screen version and say which one to meet first — usually the book, because the screen version is a remix, not a copy.',
    audience: 'Adaptation fans; readers who saw the show and want the source; film/TV curation crossover.',
    criteria: 'An actual released adaptation (film or series), not just an option · A recognizable change between page and screen worth noting · The book is findable in print · We state which to consume first',
    tags: ['adaptation', 'superhero', 'page-to-screen'],
    items: ['Watchmen', 'Sandman', 'Persepolis', 'Preacher', 'Y: The Last Man', 'The Old Guard', 'V for Vendetta', 'Hellboy', 'Maus', 'Fun Home'],
    editorialNotes: {
      Watchmen: 'Book (1986) → HBO series (2019) is a sequel, not a retelling; the 2009 film is the closer adaptation. Read the book first.',
      Sandman: 'Neil Gaiman, DC/Vertigo (1989–1996) → Netflix series (2022–). The book is the canon; the show adapts early volumes faithfully.',
      Persepolis: 'Book (2000–2003) → animated film (2007), co-directed by Satrapi. The film is the author’s own adaptation.',
      Preacher: 'Book (1995–2000) → AMC series (2016–2019). The show trims and rearranges; the book is the full arc.',
      'Y: The Last Man': 'Book (2002–2008) → FX/Hulu series (2021, one season). The comic completed its run; the show did not.',
      'The Old Guard': 'Book (2017) → Netflix film (2020). The film is a focused first-chapter adaptation.',
      'V for Vendetta': 'Book (1982–1989) → film (2005). Read or watch first, both hold up.',
      Hellboy: 'Book (1993–) → films (2004; 2019 reboot). The del Toro films are the known screen version.',
      Maus: 'Book (1980–1991) → no narrative film; taught widely. We note the absence so expectations are set.',
      'Fun Home': 'Book (2006) → Tony-winning musical (2015), not a film. We name the actual adaptation.',
    },
    faq: [
      { q: 'Book or screen first?', a: 'Almost always the book. Exceptions: V for Vendetta (either order) and Persepolis (the film is the author’s own).' },
      { q: 'Why include Maus and Fun Home if they are not films?', a: 'Because the "page to screen" question includes stage and curriculum adaptation; we name exactly what exists instead of implying a film that is not there.' },
    ],
    related: ['superhero-deconstructions', 'manga-masterworks'],
  },
];
