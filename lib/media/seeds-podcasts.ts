import type { CurationTheme } from './curation';

// Podcasts channel — 5 curated themes.
// Items are real shows present in lib/media/generated-podcasts.ts (iTunes Search API: real
// names, hosts, genres). Our take statements are factual descriptors (format, host, genre,
// launch era) — no fabricated episode quotes, ratings, or listener counts.

export const PODCASTS_THEMES: CurationTheme[] = [
  {
    channel: 'podcasts',
    slug: 'scripted-fiction',
    title: 'Scripted Fiction Podcasts: Radio Drama, Reborn',
    mood: ['immersive'],
    intro:
      'The audio drama never died — it moved to podcasts. Welcome to Night Vale, The Magnus Archives, Homecoming, Alice Isn’t Dead, Limetown, The Bright Sessions, Within the Wires, The Truth. Written, acted, scored.',
    thesis:
      'Good audio fiction respects the ear: a single clear voice, sound design that earns its place, and an ending. We separate the genuinely crafted (Night Vale’s deadpan tone, Magnus’ slow horror) from the merely atmospheric.',
    audience: 'Fiction listeners; commuters; fans of horror, sci-fi, and twisty mystery.',
    criteria: 'Scripted, acted, and scored (not a recorded reading) · A defined arc or episode structure · Real, findable show (iTunes-listed) with a back catalog · Sound design that serves the story',
    tags: ['fiction', 'audio-drama', 'horror'],
    items: ['Welcome to Night Vale', 'The Magnus Archives', 'Homecoming', 'Alice Isn’t Dead', 'Limetown', 'The Bright Sessions', 'Within the Wires', 'The Truth', 'Passing Strangers'],
    editorialNotes: {
      'Welcome to Night Vale': 'A fictional desert town’s community radio, launched 2012. Deadpan surreal tone; one of the shows that proved fiction podcasts could build a large audience.',
      'The Magnus Archives': 'Horror anthology with an overarching mythos, launched 2016. Slow-build cosmic horror; a frequent recommendation for the genre.',
      Homecoming: 'Psychological thriller, launched 2016. Adapted into the 2018 Amazon series starring Julia Roberts.',
      'Alice Isn’t Dead': 'A truck-driver mystery, launched 2016, from the Night Vale team.',
      Limetown: 'A missing-persons mystery, launched 2015. Adapted into a 2019 Facebook Watch series.',
      'The Bright Sessions': 'Superpowered therapy sessions, launched 2015. A character-driven sci-fi drama.',
      'Within the Wires': 'Epistolary audio (letters, tapes, instructions), launched 2017, from the Night Vale team.',
      'The Truth': 'Short, self-contained "movies for your ears," launched 2012. One of the longer-running fiction shows.',
      'Passing Strangers': 'A brief two-hander romance, launched 2019, from The Truth.',
    },
    faq: [
      { q: 'Where do I start?', a: 'Night Vale for tone and comedy; Magnus for slow horror; Homecoming for a tight thriller. All have clear episode ones.' },
      { q: 'Are these finished?', a: 'Most have complete runs or are ongoing. We note where a show ended so you are not left mid-arc.' },
    ],
    related: ['film-tv-recap', 'mystery-podcasts'],
  },
  {
    channel: 'podcasts',
    slug: 'movie-tv-podcasts',
    title: 'Film & TV Podcasts: The Rewatch Culture',
    mood: ['social'],
    intro:
      'The recap and review show is its own genre now. How Did This Get Made?, Blank Check, The Rewatchables, Scriptnotes, You Must Remember This, The Big Picture, Watch What Crappens, Pop Culture Happy Hour.',
    thesis:
      'A great film podcast has a point of view, not just a rundown. We favor shows with a thesis (Blank Check’s director deep-dives, The Rewatchables’ "why does this hold up") over generic weekly reviews.',
    audience: 'Film/TV fans; cinephiles; people who want context, not just ratings.',
    criteria: 'A clear format and recurring point of view · Hosts with real film/TV literacy · A back catalog that is actually findable · Not a trailer-for-trailer news recap',
    tags: ['film', 'tv', 'recap'],
    items: ['How Did This Get Made?', 'Blank Check with Griffin & David', 'The Rewatchables', 'Scriptnotes', 'You Must Remember This', 'The Big Picture', 'Watch What Crappens', 'Pop Culture Happy Hour'],
    editorialNotes: {
      'How Did This Get Made?': 'Paul Scheer, Jason Mantzoukas, June Diane Raphael riff on bad movies, launched 2010. Long-running and format-clear.',
      'Blank Check with Griffin & David': 'A director filmography per season (started with Spielberg), launched 2014. Deep-dive, not recap.',
      'The Rewatchables': 'Bill Simmons’s crew on "movies we can’t stop watching," launched 2016. The "does it hold up" frame.',
      Scriptnotes: 'Screenwriters John August and Craig Mazin on craft, launched 2011. Industry-insider, not review.',
      'You Must Remember This': 'Karina Longworth’s Hollywood history, launched 2014. Narrative, researched, solo-hosted.',
      'The Big Picture': 'Sean Fennessey / The Ringer on film, launched 2018. Current and canon mixed.',
      'Watch What Crappens': 'Bravo reality recap, launched 2014. Niche but format-distinct.',
      'Pop Culture Happy Hour': 'NPR’s wide pop-culture roundtable, launched 2010. Broad, not film-only.',
    },
    faq: [
      { q: 'I want craft, not gossip — which?', a: 'Scriptnotes for writing; You Must Remember This for history; Blank Check for director studies.' },
      { q: 'Which is most current?', a: 'The Big Picture and Pop Culture Happy Hour track new releases; The Rewatchables deliberately does not.' },
    ],
    related: ['scripted-fiction', 'games-podcasts'],
  },
  {
    channel: 'podcasts',
    slug: 'games-podcasts',
    title: 'Games Podcasts: The Medium Talks About Itself',
    mood: ['social'],
    intro:
      'Game journalism found a home in audio. Giant Bombcast, The Game Informer Show, Waypoint Radio, Kinda Funny Games Daily, Idle Thumbs, Designer Notes, Triple Click, Xbox Expansion Pass.',
    thesis:
      'The best games podcast is a conversation, not a review aggregate. We pick shows with durable hosts and a real point of view (Designer Notes’ developer interviews, Triple Click’s three-host essay format).',
    audience: 'Players; indie-curious listeners; industry watchers.',
    criteria: 'Consistent hosts and a recognizable format · Covers craft and culture, not only release dates · Findable back catalog · Not a trailer feed',
    tags: ['games', 'interview', 'culture'],
    items: ['Giant Bombcast', 'The Game Informer Show', 'Waypoint Radio', 'Kinda Funny Games Daily', 'The Idle Thumbs Podcast', 'Designer Notes', 'Triple Click', 'Xbox Expansion Pass'],
    editorialNotes: {
      'Giant Bombcast': 'The long-running flagship of Giant Bomb, launched 2008. Conversational, expansive, influential on the format.',
      'The Game Informer Show': 'From the magazine, launched 2013. News-plus-discussion.',
      'Waypoint Radio': 'Vice’s games-and-culture show, launched 2016. Politics and culture angle.',
      'Kinda Funny Games Daily': 'Daily games talk from the Kinda Funny team, launched 2014.',
      'The Idle Thumbs Podcast': 'Developer-led conversation, launched 2008. One of the original games-discussion shows.',
      'Designer Notes': 'Soren Johnson’s developer-interview show, launched 2015. Craft-focused.',
      'Triple Click': 'Three-host games essay show from Defector, launched 2021. Themed deep dives.',
      'Xbox Expansion Pass': 'Official Xbox show, launched 2017. Platform-specific.',
    },
    faq: [
      { q: 'Industry or fan?', a: 'Idle Thumbs and Designer Notes lean developer; Giant Bombcast and Triple Click are fan-plus-craft. Xbox Expansion Pass is first-party.' },
      { q: 'Best for indie discovery?', a: 'Waypoint Radio and Triple Click regularly cover smaller releases the news shows skip.' },
    ],
    related: ['movie-tv-podcasts', 'scripted-fiction'],
  },
  {
    channel: 'podcasts',
    slug: 'mystery-podcasts',
    title: 'True-Crime & Mystery Podcasts: The Reported Kind',
    mood: ['immersive'],
    intro:
      'The genre that broke podcasting open. Serial, S-Town, Criminal, Revisionist History, Invisibilia, Heavyweight, Reply All — reported, produced, and careful (mostly).',
    thesis:
      'The reported mystery earns trust by showing its work. We separate rigorous reporting (Serial’s documentation, Criminal’s range) from the exploitative true-crime glut, and we say which shows respect the people in them.',
    audience: 'Nonfiction listeners; mystery fans; commuting deep-divers.',
    criteria: 'Reported and produced, not a monologue · Clear sourcing and a defensible method · Respect for subjects (not exploitation) · Findable, well-indexed back catalog',
    tags: ['true-crime', 'mystery', 'reported'],
    items: ['Serial', 'S-Town', 'Criminal', 'Revisionist History', 'Invisibilia', 'Heavyweight', 'Reply All'],
    editorialNotes: {
      Serial: 'Season 1 (2014) reinvigorated the form; a reported reinvestigation of a single case. The show that proved podcasts could be mass-media.',
      'S-Town': 'From the Serial team (2017); one story, not a series of cases. A production landmark.',
      Criminal: 'Phoebe Judge hosted, launched 2014. A wide range of crime-and-justice stories, not only murders.',
      'Revisionist History': 'Malcolm Gladwell, launched 2016. Re-examining overlooked events; not strictly crime.',
      Invisibilia: 'NPR, launched 2015. The invisible forces that shape behavior; science-and-society.',
      Heavyweight: 'Jonathan Goldstein, launched 2018. Small personal mysteries and reconciliations.',
      'Reply All': 'Gimlet, launched 2014. Internet-culture mysteries ("Yes Yes No"); ended 2022.',
    },
    faq: [
      { q: 'Which respects the people involved?', a: 'Criminal and Heavyweight are careful by design; we flag the more sensational shows so you choose your comfort level.' },
      { q: 'Where to start?', a: 'Serial S1 for the cultural moment; Criminal for standalone episodes; Revisionist History for ideas over cases.' },
    ],
    related: ['scripted-fiction', 'design-culture-podcasts'],
  },
  {
    channel: 'podcasts',
    slug: 'design-culture-podcasts',
    title: 'Design & Culture Podcasts: How Things Are Made',
    mood: ['cerebral'],
    intro:
      'The shows about the made world. 99% Invisible, Radiolab, This American Life, Conan O’Brien Needs a Friend, The Adventure Zone, WTF with Marc Maron, Office Ladies, Call Her Daddy, The Joe Rogan Experience.',
    thesis:
      'A culture podcast lives or dies on the host’s curiosity. We group the design-and-society shows (99% Invisible, Radiolab) separately from the interview shows (WTF, Conan) and name what each is actually for.',
    audience: 'Curious generalists; interview-show fans; design and society listeners.',
    criteria: 'A clear subject (design, science, interview, comedy) · Host with a real point of view · Produced, not a raw room recording · Findable catalog',
    tags: ['design', 'culture', 'interview'],
    items: ['99% Invisible', 'Radiolab', 'This American Life', 'Conan O’Brien Needs a Friend', 'The Adventure Zone', 'WTF with Marc Maron', 'Office Ladies', 'Call Her Daddy', 'The Joe Rogan Experience'],
    editorialNotes: {
      '99% Invisible': 'Roman Mars’s show on design and architecture, launched 2010. The most-downloaded independent podcast for years.',
      Radiolab: 'Jad Abumrad and Robert Krulwich, launched 2002. Science-and-philosophy, heavily produced.',
      'This American Life': 'Ira Glass, radio since 1995, podcast form early. The template for narrative nonfiction audio.',
      'Conan O’Brien Needs a Friend': 'Launched 2018. Celeb interview with a comic frame.',
      'The Adventure Zone': 'The McElroy family’s actual-play TTRPG show, launched 2014. A gateway into audio gaming for many.',
      'WTF with Marc Maron': 'Launched 2009. Long-form comic interviews; the Obama (2015) episode is often cited.',
      'Office Ladies': 'The Office (US) rewatch with Jenna Fischer and Angela Kinsey, launched 2019.',
      'Call Her Daddy': 'Alex Cooper, launched 2018. Comedy-interview, explicitly adult.',
      'The Joe Rogan Experience': 'Launched 2009. Long-form wide-range interviews; explicitly long and unscripted.',
    },
    faq: [
      { q: 'Design vs interview?', a: '99% Invisible and Radiolab are produced narratives; WTF, Conan, and Call Her Daddy are interviews. Pick by whether you want a story or a conversation.' },
      { q: 'Too long?', a: 'Rogan and Conan run 1–3 hours; 99% Invisible and Radiolab are ~30–60 min. We note length so you match your commute.' },
    ],
    related: ['mystery-podcasts', 'movie-tv-podcasts'],
  },
];
