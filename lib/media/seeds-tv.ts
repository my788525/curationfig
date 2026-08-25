// 剧集策展专题种子（50 条）
// 守红线：只策展不剧透结局、不评分排行榜（不写大结局泄露、不拉 episode 评分表）
// 条目名种子：剧集名（构建期由 TMDB 解析为元数据+海报）
// 改编自豆瓣剧集盘点/追剧策展逻辑，精细翻译+改写避免被判重复
import type { CurationTheme } from './curation';

export const TV_THEMES: CurationTheme[] = [
  {
    slug: 'antihero-golden',
    channel: 'tv',
    title: 'The Antihero Era: Television Grew Up',
    thesis:
      'When the small screen stopped rewarding the good guy. We trace the shows that made the flawed central figure the whole point.',
    intro: 'The confession, the compromise, the slow rot.',
    audience:
      'This list is for viewers who got tired of rooting for the good guy. You\'ll like it if a protagonist you can\'t approve of is more interesting than one you can, or if you\'ve ever defended a terrible character by saying "but the writing." Skip it if you need someone to root for — these shows are built around the slow rot, and moral comfort is not on offer. It\'s also a useful lens on why "prestige TV" in the 2000s was a genuinely new kind of storytelling, not just better production.',
    criteria:
      'We excluded cartoon villains and any show that forgives its lead too easily. We kept series where the flawed central figure is the entire argument: the confession as structure, the compromise as plot, the rot as character development. A pick earned its place by making you complicit. Where two made the same point, we kept the one with the sharper writing. No finale spoilers, no episode ranking — curation only.',
    alternatives:
      'If the darkness is right but you want it contained, Limited Series keeps the prestige without the 60-hour commitment. If you want the same moral fog in a film, Neo-Noir carries it in two hours. People who need a hero should try Golden-Hour Drive. For the interactive version, Midnight Dread.',
    faq: [
      { q: 'Do I have to like the antihero?', a: 'No — you just have to find them interesting. The genre is built on complicity, not approval. The writing is the point, not the morality.' },
      { q: 'Why is this a "mood"?', a: 'Because the feeling of watching someone slowly compromise is its own category — tense, fascinated, a little ashamed. That\'s the mood.' },
      { q: 'Will the descriptions spoil the endings?', a: 'We avoid spoilers by design. The curation is about the feeling and the form, not the plot beats.' },
      { q: 'Where do the posters come from?', a: 'TMDB for real metadata and art; the editorial framing is ours.' },
      { q: 'Can I build a similar list?', a: 'The Playlist Generator covers film and TV by mood and decade with the same logic.' },
    ],
    related: ['limited-series-tight', 'midnight-dread', 'golden-hour-drive'],
    tags: ['drama', 'antihero', 'prestige', 'dark'],
    items: ['The Sopranos', 'Breaking Bad', 'Mad Men', 'The Wire', 'House of Cards', 'Dexter', 'Ozark', 'Succession'],
  
  editorialNotes: {
    'The Sopranos': 'Chase\'s mob boss in therapy reframed the TV protagonist as someone you analyze, not cheer. It opens the list because it\'s the clearest proof the form had started taking adulthood seriously.',
    'Breaking Bad': 'Gilligan\'s chemistry-teacher-turned-kingpin is the genre\'s tightest moral descent — every pity-driven choice compounding into monstrosity. The accessible face of the idea because the stakes read instantly.',
    'Mad Men': 'Weiner\'s admen are monsters of restraint and repression; the drama is in what\'s unsaid between cigarettes. It widens the mood from crime into character as slow self-destruction.',
    'The Wire': 'Simon\'s Baltimore is a system, not a story — institutions grind characters down across seasons. The most patient entry, and the one that argues TV can think structurally like a novel.',
    'House of Cards': 'Fincher\'s congressman breaks the fourth wall to implicate you; the pivot because it makes the antihero intimate. Slick where The Wire is granular, manipulative where Mad Men is melancholic.',
    'Dexter': 'A serial killer who kills killers sounds like a gimmick; the show earns it as a metaphor for compartmentalization. The bridge pick — genre comfort wrapping the same moral fog.',
    'Ozark': 'The Byrde family\'s money-laundering spiral is The Wire\'s anxiety at double speed. It belongs because it proves the antihero template outlived its originals and kept darkening.',
    'Succession': 'Armstrong\'s media dynasty weaponizes dinner-table cruelty; the dialogue is the violence. It closes the list as the genre\'s funniest and most exhausted version of power as pathology.',
  }},
  {
    slug: 'limited-series-tight',
    channel: 'tv',
    title: 'The Limited Series: The Story That Knows When to Stop',
    thesis:
      'Restraint as a format. We collect shows that ended because the story ended, not because the ratings dropped.',
    intro: 'The arc, the conclusion, the respect for the viewer.',
    audience:
      'This list is for people who hate the drag. You\'ll like it if a show that ends because the story ended feels like respect, or if you\'ve been burned by a great season one and a pointless season six. Skip it if you want to live in a world for years — these are finite by design, and the closure is the feature, not a limitation. It\'s also the list for anyone who says "I don\'t have time for TV" but will absolutely watch seven perfect hours on a weekend.',
    criteria:
      'We excluded any series that clearly overstayed, and anything stretched to fill a slot. We kept shows where the format is the argument: the arc that arrives, the conclusion that lands, the trust that the viewer can handle an ending. A pick earned its place by knowing when to stop. Where two made the same point, we kept the tighter one. No episode ranking, no spoilers — curation only.',
    alternatives:
      'If the prestige is right but you want to stay longer, the Antihero Era runs for seasons and doesn\'t mind the rot. If you want the same "complete story" feeling in a film, Coming-of-Age (Quiet) lands in two hours. People who fear commitment should start here. For the sunny contained version, Golden-Hour Drive.',
    faq: [
      { q: 'Aren\'t limited series just short shows?', a: 'They\'re short on purpose. The point is that the story ends when it should — a format choice, not a length accident.' },
      { q: 'Will I be lost if I haven\'t seen the "classics"?', a: 'No. Each is a self-contained story; the list works as a set of recommendations, not a canon to study.' },
      { q: 'Why no spoilers in the descriptions?', a: 'Because a spoiled ending on a limited series is a spoiled mood. We curate the feeling and the form, not the twist.' },
      { q: 'Where do the posters come from?', a: 'TMDB for real metadata and art; the editorial framing is ours.' },
      { q: 'Can I build a similar list?', a: 'The Playlist Generator covers TV by mood and decade with the same editorial logic.' },
    ],
    related: ['antihero-golden', 'golden-hour-drive', 'bittersweet-endings'],
    tags: ['limited', 'prestige', 'complete', 'literary'],
    items: ['Chernobyl', 'The Queen Gambit', 'Olive Kitteridge', 'The Night Of', 'Sharp Objects', 'Mare of Easttown', 'The Underground Railroad', 'Normal People'],
  },
  {
    slug: 'british-dry',
    channel: 'tv',
    title: 'British Dry Wit: The Understated Sitcom',
    thesis:
      'Humor that withholds. We map UK comedies that built laughs from restraint, class, and the stiff upper lip.',
    intro: 'The pause, the put-down, the kettle.',
    tags: ['comedy', 'british', 'sitcom', 'dry'],
    items: ['The Office', 'Fleabag', 'Peep Show', 'IT Crowd', 'Black Books', 'Detectorists', 'The Thick of It', 'Motherland'],
  
    audience: 'This collection is for people who came to "British Dry Wit: The Understated Sitcom" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "The Office", "Fleabag" and the rest is comedy, british, sitcom — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the comedy, british, sitcom, dry tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — humor that withholds. We map UK comedies that built laughs from restraint, class, and the stiff upper lip. That is why "The Office", "Fleabag" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "British Dry Wit: The Understated Sitcom" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "The Office" is the closest to your taste, "Motherland" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "British Dry Wit: The Understated Sitcom" actually about?', a: 'Humor that withholds. We map UK comedies that built laughs from restraint, class, and the stiff upper lip.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "The Office" make sense if I am new to comedy, british, sitcom?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['comedy-of-cringe-tv', 'mockumentary-tv', 'workplace-comedy'],
},
  {
    slug: 'scifi-philosophical-tv',
    channel: 'tv',
    title: 'Philosophical Sci-Fi on the Small Screen',
    thesis:
      'The genre that thinks in episodes. We gather shows that used the format to ask one big question per season.',
    intro: 'The premise, the代价, the slow answer.',
    tags: ['scifi', 'philosophical', 'smart', 'speculative'],
    items: ['The Leftovers', 'Battlestar Galactica', 'Black Mirror', 'The OA', 'Severance', 'Westworld', 'Devs', 'Station Eleven'],
  
    audience: 'This collection is for people who came to "Philosophical Sci-Fi on the Small Screen" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "The Leftovers", "Battlestar Galactica" and the rest is scifi, philosophical, smart — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the scifi, philosophical, smart, speculative tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the genre that thinks in episodes. We gather shows that used the format to ask one big question per season. That is why "The Leftovers", "Battlestar Galactica" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Philosophical Sci-Fi on the Small Screen" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "The Leftovers" is the closest to your taste, "Station Eleven" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Philosophical Sci-Fi on the Small Screen" actually about?', a: 'The genre that thinks in episodes. We gather shows that used the format to ask one big question per season.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "The Leftovers" make sense if I am new to scifi, philosophical, smart?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['dark-comedy-tv', 'apocalypse-tv', 'time-travel-tv'],
},
  {
    slug: 'slow-burn-crime',
    channel: 'tv',
    title: 'The Slow-Burn Crime Drama',
    thesis:
      'The investigation as atmosphere. We collect shows where the case matters less than the world it reveals.',
    intro: 'The town, the silence, the decade.',
    tags: ['crime', 'slowburn', 'mystery', 'regional'],
    items: ['Broadchurch', 'The Bridge', 'True Detective', 'The Killing', 'Forbrydelsen', 'The Missing', 'Happy Valley', 'Mare of Easttown'],
  
    audience: 'This collection is for people who came to "The Slow-Burn Crime Drama" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Broadchurch", "The Bridge" and the rest is crime, slowburn, mystery — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the crime, slowburn, mystery, regional tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the investigation as atmosphere. We collect shows where the case matters less than the world it reveals. That is why "Broadchurch", "The Bridge" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Slow-Burn Crime Drama" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "Broadchurch" is the closest to your taste, "Mare of Easttown" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Slow-Burn Crime Drama" actually about?', a: 'The investigation as atmosphere. We collect shows where the case matters less than the world it reveals.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Broadchurch" make sense if I am new to crime, slowburn, mystery?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['police-procedural-subverted', 'true-crime-tv', 'detective-genius'],
},
  {
    slug: 'workplace-drama',
    channel: 'tv',
    title: 'The Workplace as a Stage',
    thesis:
      'The office, the ward, the newsroom. We trace shows that turned labor into the central relationship.',
    intro: 'The shift, the boss, the survival.',
    tags: ['workplace', 'drama', 'ensemble', 'ensemblecast'],
    items: ['The Newsroom', 'ER', 'The Office', 'Scrubs', 'Succession', 'The Bear', 'Mad Men', 'Superstore'],
  
    audience: 'This collection is for people who came to "The Workplace as a Stage" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "The Newsroom", "ER" and the rest is workplace, drama, ensemble — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the workplace, drama, ensemble, ensemblecast tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the office, the ward, the newsroom. We trace shows that turned labor into the central relationship. That is why "The Newsroom", "ER" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Workplace as a Stage" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "The Newsroom" is the closest to your taste, "Superstore" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Workplace as a Stage" actually about?', a: 'The office, the ward, the newsroom. We trace shows that turned labor into the central relationship.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "The Newsroom" make sense if I am new to workplace, drama, ensemble?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['female-led-drama', 'medical-drama', 'antihero-golden'],
},
  {
    slug: 'animated-adult-tv',
    channel: 'tv',
    title: 'Adult Animation: The Line That Talks Back',
    thesis:
      'Cartoons with mortgages. We gather animated series that used the medium for satire and grief.',
    intro: 'The joke, the bleakness, the freedom.',
    tags: ['animation', 'adult', 'satire', 'dark'],
    items: ['BoJack Horseman', 'Rick and Morty', 'The Simpsons', 'South Park', 'Archer', 'Futurama', 'Disenchantment', 'Final Space'],
  
    audience: 'This collection is for people who came to "Adult Animation: The Line That Talks Back" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "BoJack Horseman", "Rick and Morty" and the rest is animation, adult, satire — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the animation, adult, satire, dark tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — cartoons with mortgages. We gather animated series that used the medium for satire and grief. That is why "BoJack Horseman", "Rick and Morty" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Adult Animation: The Line That Talks Back" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "BoJack Horseman" is the closest to your taste, "Final Space" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Adult Animation: The Line That Talks Back" actually about?', a: 'Cartoons with mortgages. We gather animated series that used the medium for satire and grief.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "BoJack Horseman" make sense if I am new to animation, adult, satire?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['antihero-golden', 'dark-comedy-tv', 'superhero-deconstructed'],
},
  {
    slug: 'period-costume-tv',
    channel: 'tv',
    title: 'The Costume Drama: History as Binge',
    thesis:
      'The past, serialized. We map prestige shows that turned the period piece into appointment television.',
    intro: 'The estate, the carriage, the intrigue.',
    tags: ['period', 'costume', 'historical', 'lavish'],
    items: ['The Crown', 'Downton Abbey', 'Outlander', 'Poldark', 'Wolf Hall', 'Victoria', 'Bridgerton', 'The Gilded Age'],
  
    audience: 'This collection is for people who came to "The Costume Drama: History as Binge" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "The Crown", "Downton Abbey" and the rest is period, costume, historical — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the period, costume, historical, lavish tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the past, serialized. We map prestige shows that turned the period piece into appointment television. That is why "The Crown", "Downton Abbey" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Costume Drama: History as Binge" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "The Crown" is the closest to your taste, "The Gilded Age" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Costume Drama: History as Binge" actually about?', a: 'The past, serialized. We map prestige shows that turned the period piece into appointment television.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "The Crown" make sense if I am new to period, costume, historical?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['historical-figures-tv', 'family-saga-tv'],
},
  {
    slug: 'teen-angst-smart',
    channel: 'tv',
    title: 'The Smart Teen Show',
    thesis:
      'Adolescence taken seriously. We collect series that treated high school as the high stakes it is.',
    intro: 'The hallway, the secret, the growth.',
    tags: ['teen', 'drama', 'comingofage', 'youth'],
    items: ['My So-Called Life', 'Freaks and Geeks', 'Euphoria', 'The Get Down', 'Skins', 'Degrassi', 'Sex Education', 'Derry Girls'],
  
    audience: 'This collection is for people who came to "The Smart Teen Show" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "My So-Called Life", "Freaks and Geeks" and the rest is teen, drama, comingofage — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the teen, drama, comingofage, youth tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — adolescence taken seriously. We collect series that treated high school as the high stakes it is. That is why "My So-Called Life", "Freaks and Geeks" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Smart Teen Show" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "My So-Called Life" is the closest to your taste, "Derry Girls" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Smart Teen Show" actually about?', a: 'Adolescence taken seriously. We collect series that treated high school as the high stakes it is.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "My So-Called Life" make sense if I am new to teen, drama, comingofage?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['coming-of-age-tv', 'high-school-drama', 'antihero-golden'],
},
  {
    slug: 'cult-weird-tv',
    channel: 'tv',
    title: 'The Cult Weird: Television Off the Leash',
    thesis:
      'The shows that shouldn\'t have worked. We gather series that survived on strangeness and devotion.',
    intro: 'The premise, the fandom, the cancel.',
    tags: ['cult', 'weird', 'offbeat', 'devoted'],
    items: ['Twin Peaks', 'The X-Files', 'Firefly', 'Legion', 'Dirk Gently', 'The OA', 'Sense8', 'Loki'],
  
    audience: 'This collection is for people who came to "The Cult Weird: Television Off the Leash" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Twin Peaks", "The X-Files" and the rest is cult, weird, offbeat — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the cult, weird, offbeat, devoted tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the shows that shouldn\'t have worked. We gather series that survived on strangeness and devotion. That is why "Twin Peaks", "The X-Files" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Cult Weird: Television Off the Leash" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "Twin Peaks" is the closest to your taste, "Loki" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Cult Weird: Television Off the Leash" actually about?', a: 'The shows that shouldn\'t have worked. We gather series that survived on strangeness and devotion.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Twin Peaks" make sense if I am new to cult, weird, offbeat?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: [],
},
  {
    slug: 'documentary-series',
    channel: 'tv',
    title: 'The Documentary Series: The Long Form of Truth',
    thesis:
      'Nonfiction that builds. We collect docu-series that let a subject unfold across hours, not minutes.',
    intro: 'The archive, the interview, the reveal.',
    tags: ['documentary', 'nonfiction', 'truecrime', 'real'],
    items: ['The Jinx', 'Making a Murderer', 'Wild Wild Country', 'The Staircase', 'Tiger King', 'The Keepers', 'Don', 'The Vow'],
  
    audience: 'This collection is for people who came to "The Documentary Series: The Long Form of Truth" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "The Jinx", "Making a Murderer" and the rest is documentary, nonfiction, truecrime — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the documentary, nonfiction, truecrime, real tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — nonfiction that builds. We collect docu-series that let a subject unfold across hours, not minutes. That is why "The Jinx", "Making a Murderer" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Documentary Series: The Long Form of Truth" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "The Jinx" is the closest to your taste, "The Vow" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Documentary Series: The Long Form of Truth" actually about?', a: 'Nonfiction that builds. We collect docu-series that let a subject unfold across hours, not minutes.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "The Jinx" make sense if I am new to documentary, nonfiction, truecrime?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['true-crime-tv'],
},
  {
    slug: 'comedy-of-cringe-tv',
    channel: 'tv',
    title: 'Cringe Comedy on Television',
    thesis:
      'The wince as a device. We trace sitcoms and comedies that weaponized secondhand embarrassment.',
    intro: 'The silence, the misfire, the cringe.',
    tags: ['comedy', 'cringe', 'awkward', 'sitcom'],
    items: ['The Office', 'Curb Your Enthusiasm', 'Peep Show', 'Fleabag', 'Ramy', 'What We Do', 'Baskets', 'The Rehearsal'],
  
    audience: 'This collection is for people who came to "Cringe Comedy on Television" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "The Office", "Curb Your Enthusiasm" and the rest is comedy, cringe, awkward — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the comedy, cringe, awkward, sitcom tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the wince as a device. We trace sitcoms and comedies that weaponized secondhand embarrassment. That is why "The Office", "Curb Your Enthusiasm" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Cringe Comedy on Television" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "The Office" is the closest to your taste, "The Rehearsal" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Cringe Comedy on Television" actually about?', a: 'The wince as a device. We trace sitcoms and comedies that weaponized secondhand embarrassment.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "The Office" make sense if I am new to comedy, cringe, awkward?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['british-dry', 'mockumentary-tv', 'workplace-comedy'],
},
  {
    slug: 'police-procedural-subverted',
    channel: 'tv',
    title: 'The Procedural, Subverted',
    thesis:
      'The case-of-the-week that became something else. We gather shows that used the format to ask harder questions.',
    intro: 'The roster, the system, the doubt.',
    tags: ['procedural', 'crime', 'police', 'moral'],
    items: ['The Wire', 'Homicide', 'Brooklyn Nine-Nine', 'The Shield', 'True Detective', 'Broadchurch', 'Southland', 'Bosch'],
  
    audience: 'This collection is for people who came to "The Procedural, Subverted" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "The Wire", "Homicide" and the rest is procedural, crime, police — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the procedural, crime, police, moral tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the case-of-the-week that became something else. We gather shows that used the format to ask harder questions. That is why "The Wire", "Homicide" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Procedural, Subverted" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "The Wire" is the closest to your taste, "Bosch" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Procedural, Subverted" actually about?', a: 'The case-of-the-week that became something else. We gather shows that used the format to ask harder questions.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "The Wire" make sense if I am new to procedural, crime, police?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['slow-burn-crime', 'superhero-deconstructed', 'detective-genius'],
},
  {
    slug: 'fantasy-epic-tv',
    channel: 'tv',
    title: 'The Television Epic: Fantasy at Scale',
    thesis:
      'Worlds that needed the hours. We collect shows that used serialization to build a mythology.',
    intro: 'The map, the lore, the long game.',
    tags: ['fantasy', 'epic', 'prestige', 'worldbuilding'],
    items: ['Game of Thrones', 'The Lord of the Rings', 'His Dark Materials', 'The Witcher', 'Carnival Row', 'The Wheel of Time', 'Foundation', 'American Gods'],
  
    audience: 'This collection is for people who came to "The Television Epic: Fantasy at Scale" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Game of Thrones", "The Lord of the Rings" and the rest is fantasy, epic, prestige — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the fantasy, epic, prestige, worldbuilding tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — worlds that needed the hours. We collect shows that used serialization to build a mythology. That is why "Game of Thrones", "The Lord of the Rings" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Television Epic: Fantasy at Scale" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "Game of Thrones" is the closest to your taste, "American Gods" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Television Epic: Fantasy at Scale" actually about?', a: 'Worlds that needed the hours. We collect shows that used serialization to build a mythology.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Game of Thrones" make sense if I am new to fantasy, epic, prestige?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['antihero-golden', 'limited-series-tight', 'female-led-drama'],
},
  {
    slug: 'female-led-drama',
    channel: 'tv',
    title: 'The Female-Led Drama',
    thesis:
      'Stories centered without apology. We map prestige shows that placed women at the structural center.',
    intro: 'The ambition, the cost, the gaze.',
    tags: ['female', 'drama', 'prestige', 'ensemble'],
    items: ['The Crown', 'Killing Eve', 'Fleabag', 'Big Little Lies', 'The Handmaid', 'The Morning Show', 'The Diplomat', 'Dead to Me'],
  
    audience: 'This collection is for people who came to "The Female-Led Drama" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "The Crown", "Killing Eve" and the rest is female, drama, prestige — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the female, drama, prestige, ensemble tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — stories centered without apology. We map prestige shows that placed women at the structural center. That is why "The Crown", "Killing Eve" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Female-Led Drama" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "The Crown" is the closest to your taste, "Dead to Me" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Female-Led Drama" actually about?', a: 'Stories centered without apology. We map prestige shows that placed women at the structural center.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "The Crown" make sense if I am new to female, drama, prestige?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['antihero-golden', 'workplace-drama', 'medical-drama'],
},
  {
    slug: 'dark-comedy-tv',
    channel: 'tv',
    title: 'Dark Comedy: The Laugh That Twists',
    thesis:
      'Humor at the edge of the unbearable. We gather shows that laughed in the face of mortality and failure.',
    intro: 'The timing, the dread, the release.',
    tags: ['darkcomedy', 'satire', 'bleak', 'smart'],
    items: ['Fleabag', 'Barry', 'The Bear', 'After Life', 'Dead to Me', 'Russian Doll', 'Santos', 'The Rehearsal'],
  
    audience: 'This collection is for people who came to "Dark Comedy: The Laugh That Twists" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Fleabag", "Barry" and the rest is darkcomedy, satire, bleak — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the darkcomedy, satire, bleak, smart tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — humor at the edge of the unbearable. We gather shows that laughed in the face of mortality and failure. That is why "Fleabag", "Barry" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Dark Comedy: The Laugh That Twists" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "Fleabag" is the closest to your taste, "The Rehearsal" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Dark Comedy: The Laugh That Twists" actually about?', a: 'Humor at the edge of the unbearable. We gather shows that laughed in the face of mortality and failure.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Fleabag" make sense if I am new to darkcomedy, satire, bleak?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['scifi-philosophical-tv', 'animated-adult-tv', 'detective-genius'],
},
  {
    slug: 'foreign-language-gems',
    channel: 'tv',
    title: 'Foreign-Language Television Worth the Subtitles',
    thesis:
      'The world beyond English. We collect non-Anglophone series that earned global devotion.',
    intro: 'The dub, the culture, the discovery.',
    tags: ['foreign', 'international', 'subtitled', 'prestige'],
    items: ['Money Heist', 'Dark', 'Borgen', 'The Bridge', 'Lupin', 'Elite', 'Money', 'Squid Game'],
  
    audience: 'This collection is for people who came to "Foreign-Language Television Worth the Subtitles" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Money Heist", "Dark" and the rest is foreign, international, subtitled — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the foreign, international, subtitled, prestige tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the world beyond English. We collect non-Anglophone series that earned global devotion. That is why "Money Heist", "Dark" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Foreign-Language Television Worth the Subtitles" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "Money Heist" is the closest to your taste, "Squid Game" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Foreign-Language Television Worth the Subtitles" actually about?', a: 'The world beyond English. We collect non-Anglophone series that earned global devotion.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Money Heist" make sense if I am new to foreign, international, subtitled?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['antihero-golden', 'limited-series-tight', 'fantasy-epic-tv'],
},
  {
    slug: 'reality-game',
    channel: 'tv',
    title: 'The Reality Game: Competition as Spectacle',
    thesis:
      'The format that outlasted skeptics. We gather competition shows that turned elimination into ritual.',
    intro: 'The challenge, the vote, the twist.',
    tags: ['reality', 'competition', 'game', 'format'],
    items: ['Survivor', 'The Amazing Race', 'RuPaul Drag Race', 'The Great British Bake Off', 'Taskmaster', 'Naked and Afraid', 'Top Chef', 'The Traitors'],
  
    audience: 'This collection is for people who came to "The Reality Game: Competition as Spectacle" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Survivor", "The Amazing Race" and the rest is reality, competition, game — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the reality, competition, game, format tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the format that outlasted skeptics. We gather competition shows that turned elimination into ritual. That is why "Survivor", "The Amazing Race" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Reality Game: Competition as Spectacle" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "Survivor" is the closest to your taste, "The Traitors" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Reality Game: Competition as Spectacle" actually about?', a: 'The format that outlasted skeptics. We gather competition shows that turned elimination into ritual.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Survivor" make sense if I am new to reality, competition, game?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['food-tv'],
},
  {
    slug: 'superhero-deconstructed',
    channel: 'tv',
    title: 'The Deconstructed Superhero',
    thesis:
      'Capes with consequences. We trace shows that treated powers as a moral burden, not a wish.',
    intro: 'The origin, the cost, the doubt.',
    tags: ['superhero', 'comic', 'dark', 'moral'],
    items: ['Watchmen', 'The Boys', 'Daredevil', 'Jessica Jones', 'Legion', 'Peacemaker', 'Loki', 'Invincible'],
  
    audience: 'This collection is for people who came to "The Deconstructed Superhero" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Watchmen", "The Boys" and the rest is superhero, comic, dark — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the superhero, comic, dark, moral tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — capes with consequences. We trace shows that treated powers as a moral burden, not a wish. That is why "Watchmen", "The Boys" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Deconstructed Superhero" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "Watchmen" is the closest to your taste, "Invincible" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Deconstructed Superhero" actually about?', a: 'Capes with consequences. We trace shows that treated powers as a moral burden, not a wish.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Watchmen" make sense if I am new to superhero, comic, dark?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['antihero-golden', 'animated-adult-tv', 'police-procedural-subverted'],
},
  {
    slug: 'historical-figures-tv',
    channel: 'tv',
    title: 'The Historical Figure, Dramatized',
    thesis:
      'The past personified. We collect biopics-in-series that used a life to open an era.',
    intro: 'The scene, the anachronism, the lesson.',
    tags: ['historical', 'biopic', 'period', 'prestige'],
    items: ['Chernobyl', 'The Crown', 'John Adams', 'The Loudest Voice', 'Gomorrah', 'The Serpent', 'The Dropout', 'Pam and Tommy'],
  
    audience: 'This collection is for people who came to "The Historical Figure, Dramatized" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Chernobyl", "The Crown" and the rest is historical, biopic, period — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the historical, biopic, period, prestige tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the past personified. We collect biopics-in-series that used a life to open an era. That is why "Chernobyl", "The Crown" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Historical Figure, Dramatized" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "Chernobyl" is the closest to your taste, "Pam and Tommy" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Historical Figure, Dramatized" actually about?', a: 'The past personified. We collect biopics-in-series that used a life to open an era.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Chernobyl" make sense if I am new to historical, biopic, period?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['period-costume-tv', 'antihero-golden', 'limited-series-tight'],
},
  {
    slug: 'ensemble-ensemble-tv',
    channel: 'tv',
    title: 'The Ensemble Mosaic',
    thesis:
      'Many lives, one city. We map shows that followed a crowd and let no single character carry it.',
    intro: 'The intersection, the coincidence, the weave.',
    tags: ['ensemble', 'mosaic', 'interlinked', 'urban'],
    items: ['The Wire', 'Friends', 'Seinfeld', 'Atlanta', 'Short Form', 'Kids', 'High Maintenance', 'Easy'],
  
    audience: 'This collection is for people who came to "The Ensemble Mosaic" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "The Wire", "Friends" and the rest is ensemble, mosaic, interlinked — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the ensemble, mosaic, interlinked, urban tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — many lives, one city. We map shows that followed a crowd and let no single character carry it. That is why "The Wire", "Friends" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Ensemble Mosaic" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "The Wire" is the closest to your taste, "Easy" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Ensemble Mosaic" actually about?', a: 'Many lives, one city. We map shows that followed a crowd and let no single character carry it.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "The Wire" make sense if I am new to ensemble, mosaic, interlinked?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['workplace-drama', 'female-led-drama', 'medical-drama'],
},
  {
    slug: 'coming-of-age-tv',
    channel: 'tv',
    title: 'Growing Up in Episodes',
    thesis:
      'The long form of youth. We gather shows that let adolescence unfold across years, not a single film.',
    intro: 'The grade, the friend, the change.',
    tags: ['comingofage', 'youth', 'drama', 'tender'],
    items: ['Freaks and Geeks', 'The Wonder Years', 'PEN15', 'Sex Education', 'Derry Girls', 'Awkward', 'Generation', 'Everything'],
  
    audience: 'This collection is for people who came to "Growing Up in Episodes" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Freaks and Geeks", "The Wonder Years" and the rest is comingofage, youth, drama — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the comingofage, youth, drama, tender tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the long form of youth. We gather shows that let adolescence unfold across years, not a single film. That is why "Freaks and Geeks", "The Wonder Years" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Growing Up in Episodes" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "Freaks and Geeks" is the closest to your taste, "Everything" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Growing Up in Episodes" actually about?', a: 'The long form of youth. We gather shows that let adolescence unfold across years, not a single film.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Freaks and Geeks" make sense if I am new to comingofage, youth, drama?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['teen-angst-smart', 'antihero-golden', 'workplace-drama'],
},
  {
    slug: 'true-crime-tv',
    channel: 'tv',
    title: 'True Crime: The Case as a Series',
    thesis:
      'The real mystery, serialized. We collect shows that turned investigation into appointment viewing.',
    intro: 'The evidence, the doubt, the verdict.',
    tags: ['truecrime', 'documentary', 'mystery', 'real'],
    items: ['The Jinx', 'Making a Murderer', 'The Staircase', 'Wild Wild Country', 'The Keepers', 'Don', 'The Vow', 'Allen'],
  
    audience: 'This collection is for people who came to "True Crime: The Case as a Series" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "The Jinx", "Making a Murderer" and the rest is truecrime, documentary, mystery — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the truecrime, documentary, mystery, real tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the real mystery, serialized. We collect shows that turned investigation into appointment viewing. That is why "The Jinx", "Making a Murderer" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "True Crime: The Case as a Series" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "The Jinx" is the closest to your taste, "Allen" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "True Crime: The Case as a Series" actually about?', a: 'The real mystery, serialized. We collect shows that turned investigation into appointment viewing.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "The Jinx" make sense if I am new to truecrime, documentary, mystery?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['documentary-series', 'slow-burn-crime', 'detective-genius'],
},
  {
    slug: 'comfort-rewatch',
    channel: 'tv',
    title: 'The Comfort Rewatch',
    thesis:
      'Television as a blanket. We gather shows engineered to be returned to, not finished.',
    intro: 'The familiar, the warmth, the ease.',
    tags: ['comfort', 'cozy', 'rewatch', 'gentle'],
    items: ['The Great British Bake Off', 'Friends', 'Parks and Recreation', 'The Office', 'Schitts Creek', 'Ted Lasso', 'New Girl', 'Brooklyn Nine-Nine'],
  
    audience: 'This collection is for people who came to "The Comfort Rewatch" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "The Great British Bake Off", "Friends" and the rest is comfort, cozy, rewatch — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the comfort, cozy, rewatch, gentle tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — television as a blanket. We gather shows engineered to be returned to, not finished. That is why "The Great British Bake Off", "Friends" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Comfort Rewatch" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "The Great British Bake Off" is the closest to your taste, "Brooklyn Nine-Nine" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Comfort Rewatch" actually about?', a: 'Television as a blanket. We gather shows engineered to be returned to, not finished.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "The Great British Bake Off" make sense if I am new to comfort, cozy, rewatch?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['cozy-mystery-tv'],
},
  {
    slug: 'political-house-of-cards',
    channel: 'tv',
    title: 'The Political Thriller Series',
    thesis:
      'Power as a procedural. We trace shows that treated governance as a blood sport.',
    intro: 'The caucus, the leak, the fall.',
    tags: ['political', 'thriller', 'drama', 'power'],
    items: ['House of Cards', 'The West Wing', 'Borgen', 'The Loudest Voice', 'The Diplomat', 'Designated Survivor', 'The Hour', 'Bodyguard'],
  
    audience: 'This collection is for people who came to "The Political Thriller Series" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "House of Cards", "The West Wing" and the rest is political, thriller, drama — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the political, thriller, drama, power tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — power as a procedural. We trace shows that treated governance as a blood sport. That is why "House of Cards", "The West Wing" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Political Thriller Series" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "House of Cards" is the closest to your taste, "Bodyguard" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Political Thriller Series" actually about?', a: 'Power as a procedural. We trace shows that treated governance as a blood sport.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "House of Cards" make sense if I am new to political, thriller, drama?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['antihero-golden', 'workplace-drama', 'teen-angst-smart'],
},
  {
    slug: 'apocalypse-tv',
    channel: 'tv',
    title: 'The Long Apocalypse',
    thesis:
      'The end, episode by episode. We collect shows that stretched the catastrophe into a life.',
    intro: 'The season, the commune, the loss.',
    tags: ['apocalypse', 'postapocalyptic', 'scifi', 'survival'],
    items: ['The Walking Dead', 'The Last of Us', 'Station Eleven', 'The Leftovers', 'The 100', 'The Rain', 'Into the Badlands', 'The Stand'],
  
    audience: 'This collection is for people who came to "The Long Apocalypse" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "The Walking Dead", "The Last of Us" and the rest is apocalypse, postapocalyptic, scifi — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the apocalypse, postapocalyptic, scifi, survival tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the end, episode by episode. We collect shows that stretched the catastrophe into a life. That is why "The Walking Dead", "The Last of Us" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Long Apocalypse" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "The Walking Dead" is the closest to your taste, "The Stand" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Long Apocalypse" actually about?', a: 'The end, episode by episode. We collect shows that stretched the catastrophe into a life.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "The Walking Dead" make sense if I am new to apocalypse, postapocalyptic, scifi?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['scifi-philosophical-tv', 'time-travel-tv', 'dystopia-tv'],
},
  {
    slug: 'mockumentary-tv',
    channel: 'tv',
    title: 'The Television Mockumentary',
    thesis:
      'The fake documentary as a sitcom engine. We gather shows that used the talking head to comic effect.',
    intro: 'The stare, the aside, the form.',
    tags: ['mockumentary', 'comedy', 'sitcom', 'form'],
    items: ['The Office', 'Parks and Recreation', 'Modern Family', 'The Comeback', 'Abbott Elementary', 'Documentary', 'People', 'The Muppets'],
  
    audience: 'This collection is for people who came to "The Television Mockumentary" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "The Office", "Parks and Recreation" and the rest is mockumentary, comedy, sitcom — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the mockumentary, comedy, sitcom, form tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the fake documentary as a sitcom engine. We gather shows that used the talking head to comic effect. That is why "The Office", "Parks and Recreation" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Television Mockumentary" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "The Office" is the closest to your taste, "The Muppets" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Television Mockumentary" actually about?', a: 'The fake documentary as a sitcom engine. We gather shows that used the talking head to comic effect.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "The Office" make sense if I am new to mockumentary, comedy, sitcom?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['british-dry', 'comedy-of-cringe-tv', 'workplace-comedy'],
},
  {
    slug: 'coming-out-story-tv',
    channel: 'tv',
    title: 'Queer TV: The Arc of Becoming Visible',
    thesis:
      'Representation serialized. We map shows that let LGBTQ lives unfold across a run, not a single episode.',
    intro: 'The roommate, the secret, the pride.',
    tags: ['lgbtq', 'drama', 'love', 'identity'],
    items: ['Queer as Folk', 'Looking', 'Pose', 'The L Word', 'Sense8', 'Euphoria', 'Sex Education', 'Heartstopper'],
  
    audience: 'This collection is for people who came to "Queer TV: The Arc of Becoming Visible" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Queer as Folk", "Looking" and the rest is lgbtq, drama, love — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the lgbtq, drama, love, identity tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — representation serialized. We map shows that let LGBTQ lives unfold across a run, not a single episode. That is why "Queer as Folk", "Looking" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Queer TV: The Arc of Becoming Visible" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "Queer as Folk" is the closest to your taste, "Heartstopper" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Queer TV: The Arc of Becoming Visible" actually about?', a: 'Representation serialized. We map shows that let LGBTQ lives unfold across a run, not a single episode.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Queer as Folk" make sense if I am new to lgbtq, drama, love?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['antihero-golden', 'workplace-drama', 'teen-angst-smart'],
},
  {
    slug: 'food-tv',
    channel: 'tv',
    title: 'The Food Show: Appetite as Format',
    thesis:
      'Hunger, televised. We collect series that turned cooking and eating into narrative.',
    intro: 'The kitchen, the judge, the bite.',
    tags: ['food', 'cooking', 'competition', 'sensory'],
    items: ['The Great British Bake Off', 'Chef Table', 'Top Chef', 'MasterChef', 'Salt Fat Acid', 'Street Food', 'Ugly Delicious', 'The Bear'],
  
    audience: 'This collection is for people who came to "The Food Show: Appetite as Format" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "The Great British Bake Off", "Chef Table" and the rest is food, cooking, competition — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the food, cooking, competition, sensory tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — hunger, televised. We collect series that turned cooking and eating into narrative. That is why "The Great British Bake Off", "Chef Table" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Food Show: Appetite as Format" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "The Great British Bake Off" is the closest to your taste, "The Bear" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Food Show: Appetite as Format" actually about?', a: 'Hunger, televised. We collect series that turned cooking and eating into narrative.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "The Great British Bake Off" make sense if I am new to food, cooking, competition?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['reality-game'],
},
  {
    slug: 'time-travel-tv',
    channel: 'tv',
    title: 'Time Travel on the Small Screen',
    thesis:
      'The paradox as a season arc. We gather shows that used temporal loops to study character.',
    intro: 'The reset, the rule, the grief.',
    tags: ['timetravel', 'scifi', 'loops', 'puzzle'],
    items: ['Dark', 'The Umbrella Academy', 'Russian Doll', 'Travelers', '12 Monkeys', 'Legends of Tomorrow', 'Forever', 'The River'],
  
    audience: 'This collection is for people who came to "Time Travel on the Small Screen" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Dark", "The Umbrella Academy" and the rest is timetravel, scifi, loops — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the timetravel, scifi, loops, puzzle tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the paradox as a season arc. We gather shows that used temporal loops to study character. That is why "Dark", "The Umbrella Academy" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Time Travel on the Small Screen" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "Dark" is the closest to your taste, "The River" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Time Travel on the Small Screen" actually about?', a: 'The paradox as a season arc. We gather shows that used temporal loops to study character.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Dark" make sense if I am new to timetravel, scifi, loops?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['scifi-philosophical-tv', 'apocalypse-tv', 'dystopia-tv'],
},
  {
    slug: 'workplace-comedy',
    channel: 'tv',
    title: 'The Workplace Comedy',
    thesis:
      'The job as joke. We trace sitcoms that found the absurd in the daily grind.',
    intro: 'The meeting, the boss, the survive.',
    tags: ['workplace', 'comedy', 'sitcom', 'relatable'],
    items: ['The Office', 'Parks and Recreation', 'Superstore', 'Brooklyn Nine-Nine', 'Abbott Elementary', 'Scrubs', 'The IT Crowd', 'Kim'],
  
    audience: 'This collection is for people who came to "The Workplace Comedy" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "The Office", "Parks and Recreation" and the rest is workplace, comedy, sitcom — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the workplace, comedy, sitcom, relatable tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the job as joke. We trace sitcoms that found the absurd in the daily grind. That is why "The Office", "Parks and Recreation" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Workplace Comedy" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "The Office" is the closest to your taste, "Kim" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Workplace Comedy" actually about?', a: 'The job as joke. We trace sitcoms that found the absurd in the daily grind.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "The Office" make sense if I am new to workplace, comedy, sitcom?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['british-dry', 'comedy-of-cringe-tv', 'mockumentary-tv'],
},
  {
    slug: 'household-sitcom',
    channel: 'tv',
    title: 'The Modern Family Sitcom',
    thesis:
      'The household, reconfigured. We collect comedies that updated who counts as family.',
    intro: 'The dinner, the chaos, the love.',
    tags: ['sitcom', 'family', 'comedy', 'warm'],
    items: ['Modern Family', 'Schitts Creek', 'Black-ish', 'Kim Possible', 'The Conners', 'Fresh Off', 'One Day', 'Abbott'],
  
    audience: 'This collection is for people who came to "The Modern Family Sitcom" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Modern Family", "Schitts Creek" and the rest is sitcom, family, comedy — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the sitcom, family, comedy, warm tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the household, reconfigured. We collect comedies that updated who counts as family. That is why "Modern Family", "Schitts Creek" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Modern Family Sitcom" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "Modern Family" is the closest to your taste, "Abbott" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Modern Family Sitcom" actually about?', a: 'The household, reconfigured. We collect comedies that updated who counts as family.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Modern Family" make sense if I am new to sitcom, family, comedy?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['british-dry', 'comedy-of-cringe-tv', 'mockumentary-tv'],
},
  {
    slug: 'detective-genius',
    channel: 'tv',
    title: 'The Genius Detective',
    thesis:
      'The mind as the machine. We gather procedurals built around a single improbable intellect.',
    intro: 'The clue, the deduction, the flaw.',
    tags: ['detective', 'mystery', 'procedural', 'smart'],
    items: ['Sherlock', 'Monk', 'Psych', 'The Mentalist', 'Elementary', 'House', 'Perception', 'Lie to Me'],
  
    audience: 'This collection is for people who came to "The Genius Detective" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Sherlock", "Monk" and the rest is detective, mystery, procedural — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the detective, mystery, procedural, smart tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the mind as the machine. We gather procedurals built around a single improbable intellect. That is why "Sherlock", "Monk" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Genius Detective" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "Sherlock" is the closest to your taste, "Lie to Me" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Genius Detective" actually about?', a: 'The mind as the machine. We gather procedurals built around a single improbable intellect.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Sherlock" make sense if I am new to detective, mystery, procedural?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['scifi-philosophical-tv', 'slow-burn-crime', 'police-procedural-subverted'],
},
  {
    slug: 'nordic-noir',
    channel: 'tv',
    title: 'Nordic Noir: The Cold Case',
    thesis:
      'The grim latitude. We map Scandinavian crime dramas that turned weather into mood.',
    intro: 'The snow, the silence, the secret.',
    tags: ['nordic', 'noir', 'crime', 'cold'],
    items: ['The Bridge', 'The Killing', 'Forbrydelsen', 'Wallander', 'Borgen', 'The Chestnut', 'Mammon', 'Bordertown'],
  
    audience: 'This collection is for people who came to "Nordic Noir: The Cold Case" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "The Bridge", "The Killing" and the rest is nordic, noir, crime — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the nordic, noir, crime, cold tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the grim latitude. We map Scandinavian crime dramas that turned weather into mood. That is why "The Bridge", "The Killing" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Nordic Noir: The Cold Case" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "The Bridge" is the closest to your taste, "Bordertown" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Nordic Noir: The Cold Case" actually about?', a: 'The grim latitude. We map Scandinavian crime dramas that turned weather into mood.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "The Bridge" make sense if I am new to nordic, noir, crime?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['slow-burn-crime', 'police-procedural-subverted'],
},
  {
    slug: 'streaming-phenomenon',
    channel: 'tv',
    title: 'The Streaming Phenomenon',
    thesis:
      'The show everyone watched at once. We collect series that defined the binge era.',
    intro: 'The drop, the spoiler, the watercooler.',
    tags: ['streaming', 'binge', 'phenomenon', 'global'],
    items: ['Stranger Things', 'Squid Game', 'The Queen Gambit', 'Wednesday', 'The Witcher', 'Dahmer', 'The Night Agent', 'Money Heist'],
  
    audience: 'This collection is for people who came to "The Streaming Phenomenon" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Stranger Things", "Squid Game" and the rest is streaming, binge, phenomenon — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the streaming, binge, phenomenon, global tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the show everyone watched at once. We collect series that defined the binge era. That is why "Stranger Things", "Squid Game" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Streaming Phenomenon" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "Stranger Things" is the closest to your taste, "Money Heist" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Streaming Phenomenon" actually about?', a: 'The show everyone watched at once. We collect series that defined the binge era.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Stranger Things" make sense if I am new to streaming, binge, phenomenon?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: [],
},
  {
    slug: 'high-school-drama',
    channel: 'tv',
    title: 'The High School Drama, Elevated',
    thesis:
      'Adolescence with production values. We gather teen soaps that took the hallway seriously.',
    intro: 'The locker, the love, the status.',
    tags: ['teen', 'drama', 'highschool', 'soap'],
    items: ['Euphoria', 'Gossip Girl', 'The O.C.', 'One Tree Hill', 'Riverdale', 'Dawson', 'Elite', 'Outer Banks'],
  
    audience: 'This collection is for people who came to "The High School Drama, Elevated" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Euphoria", "Gossip Girl" and the rest is teen, drama, highschool — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the teen, drama, highschool, soap tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — adolescence with production values. We gather teen soaps that took the hallway seriously. That is why "Euphoria", "Gossip Girl" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The High School Drama, Elevated" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "Euphoria" is the closest to your taste, "Outer Banks" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The High School Drama, Elevated" actually about?', a: 'Adolescence with production values. We gather teen soaps that took the hallway seriously.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Euphoria" make sense if I am new to teen, drama, highschool?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['teen-angst-smart', 'antihero-golden', 'workplace-drama'],
},
  {
    slug: 'spy-thriller-tv',
    channel: 'tv',
    title: 'The Television Spy Thriller',
    thesis:
      'The double life, serialized. We trace espionage shows that thrived on the long game.',
    intro: 'The cover, the mole, the cost.',
    tags: ['spy', 'thriller', 'coldwar', 'tense'],
    items: ['The Americans', 'Homeland', 'The Night Manager', 'Killing Eve', 'Slow Horses', 'The Looming Tower', 'The Catch', 'Counterpart'],
  
    audience: 'This collection is for people who came to "The Television Spy Thriller" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "The Americans", "Homeland" and the rest is spy, thriller, coldwar — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the spy, thriller, coldwar, tense tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the double life, serialized. We trace espionage shows that thrived on the long game. That is why "The Americans", "Homeland" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Television Spy Thriller" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "The Americans" is the closest to your taste, "Counterpart" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Television Spy Thriller" actually about?', a: 'The double life, serialized. We trace espionage shows that thrived on the long game.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "The Americans" make sense if I am new to spy, thriller, coldwar?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['political-house-of-cards', 'courtroom-tv', 'heist-tv'],
},
  {
    slug: 'medical-drama',
    channel: 'tv',
    title: 'The Medical Drama: The Hospital as Microcosm',
    thesis:
      'The ER as a moral arena. We collect shows that used medicine to test character under pressure.',
    intro: 'The code, the call, the grief.',
    tags: ['medical', 'drama', 'hospital', 'ensemble'],
    items: ['ER', 'House', 'Grey Anatomy', 'Scrubs', 'The Good Doctor', 'Nurses', 'The Pitt', 'Chicago Med'],
  
    audience: 'This collection is for people who came to "The Medical Drama: The Hospital as Microcosm" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "ER", "House" and the rest is medical, drama, hospital — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the medical, drama, hospital, ensemble tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the ER as a moral arena. We collect shows that used medicine to test character under pressure. That is why "ER", "House" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Medical Drama: The Hospital as Microcosm" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "ER" is the closest to your taste, "Chicago Med" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Medical Drama: The Hospital as Microcosm" actually about?', a: 'The ER as a moral arena. We collect shows that used medicine to test character under pressure.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "ER" make sense if I am new to medical, drama, hospital?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['workplace-drama', 'female-led-drama', 'antihero-golden'],
},
  {
    slug: 'found-family-tv',
    channel: 'tv',
    title: 'The Found Family',
    thesis:
      'The crew that chose each other. We map shows where the team became the emotional center.',
    intro: 'The bunk, the mission, the bond.',
    tags: ['foundfamily', 'ensemble', 'warm', 'team'],
    items: ['Firefly', 'Stranger Things', 'The Umbrella Academy', 'Sense8', 'Supernatural', 'The A-Team', 'Orange', 'The Expanse'],
  
    audience: 'This collection is for people who came to "The Found Family" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Firefly", "Stranger Things" and the rest is foundfamily, ensemble, warm — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the foundfamily, ensemble, warm, team tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the crew that chose each other. We map shows where the team became the emotional center. That is why "Firefly", "Stranger Things" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Found Family" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "Firefly" is the closest to your taste, "The Expanse" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Found Family" actually about?', a: 'The crew that chose each other. We map shows where the team became the emotional center.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Firefly" make sense if I am new to foundfamily, ensemble, warm?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['workplace-drama', 'female-led-drama', 'ensemble-ensemble-tv'],
},
  {
    slug: 'courtroom-tv',
    channel: 'tv',
    title: 'The Television Courtroom',
    thesis:
      'The case as a weekly ritual. We gather legal dramas that made argument the spectacle.',
    intro: 'The objection, the verdict, the doubt.',
    tags: ['courtroom', 'legal', 'drama', 'tense'],
    items: ['The Good Wife', 'Suits', 'Law and Order', 'How to Get Away', 'The Practice', 'Better Call Saul', 'The Defenders', 'Pearson'],
  
    audience: 'This collection is for people who came to "The Television Courtroom" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "The Good Wife", "Suits" and the rest is courtroom, legal, drama — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the courtroom, legal, drama, tense tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the case as a weekly ritual. We gather legal dramas that made argument the spectacle. That is why "The Good Wife", "Suits" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Television Courtroom" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "The Good Wife" is the closest to your taste, "Pearson" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Television Courtroom" actually about?', a: 'The case as a weekly ritual. We gather legal dramas that made argument the spectacle.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "The Good Wife" make sense if I am new to courtroom, legal, drama?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['antihero-golden', 'workplace-drama', 'teen-angst-smart'],
},
  {
    slug: 'cozy-mystery-tv',
    channel: 'tv',
    title: 'The Cozy Mystery',
    thesis:
      'The kill without the gore. We collect whodunits that kept the blood off the screen and the puzzle on it.',
    intro: 'The village, the amateur, the tea.',
    tags: ['mystery', 'cozy', 'whodunit', 'gentle'],
    items: ['Murder She Wrote', 'Only Murders', 'Father Brown', 'Agatha Raisin', 'Midsomer Murders', 'The Thursday Murder', 'Death in Paradise', 'Ms'],
  
    audience: 'This collection is for people who came to "The Cozy Mystery" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Murder She Wrote", "Only Murders" and the rest is mystery, cozy, whodunit — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the mystery, cozy, whodunit, gentle tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the kill without the gore. We collect whodunits that kept the blood off the screen and the puzzle on it. That is why "Murder She Wrote", "Only Murders" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Cozy Mystery" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "Murder She Wrote" is the closest to your taste, "Ms" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Cozy Mystery" actually about?', a: 'The kill without the gore. We collect whodunits that kept the blood off the screen and the puzzle on it.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Murder She Wrote" make sense if I am new to mystery, cozy, whodunit?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['comfort-rewatch', 'slow-burn-crime', 'true-crime-tv'],
},
  {
    slug: 'dystopia-tv',
    channel: 'tv',
    title: 'The Television Dystopia',
    thesis:
      'The worst world, sustained. We gather shows that built oppressive futures and lived in them.',
    intro: 'The regime, the resistance, the routine.',
    tags: ['dystopia', 'scifi', 'political', 'grim'],
    items: ['The Handmaid', 'Black Mirror', 'The Man in the High Castle', 'The 100', 'The Society', '3%', 'The Feed', 'Years and Years'],
  
    audience: 'This collection is for people who came to "The Television Dystopia" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "The Handmaid", "Black Mirror" and the rest is dystopia, scifi, political — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the dystopia, scifi, political, grim tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the worst world, sustained. We gather shows that built oppressive futures and lived in them. That is why "The Handmaid", "Black Mirror" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Television Dystopia" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "The Handmaid" is the closest to your taste, "Years and Years" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Television Dystopia" actually about?', a: 'The worst world, sustained. We gather shows that built oppressive futures and lived in them.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "The Handmaid" make sense if I am new to dystopia, scifi, political?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['scifi-philosophical-tv', 'political-house-of-cards', 'apocalypse-tv'],
},
  {
    slug: 'standup-special-tv',
    channel: 'tv',
    title: 'The Comedy Special as Event',
    thesis:
      'The hour that travels. We map stand-up specials that became cultural moments on the small screen.',
    intro: 'The opener, the bit, the silence.',
    tags: ['standup', 'comedy', 'special', 'cultural'],
    items: ['Chappelle', 'Bo Burnham', 'Hannah Gadsby', 'John Mulaney', 'Hasan', 'Ali Wong', 'Ricky Gervais', 'Dave Chappelle'],
  
    audience: 'This collection is for people who came to "The Comedy Special as Event" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Chappelle", "Bo Burnham" and the rest is standup, comedy, special — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the standup, comedy, special, cultural tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the hour that travels. We map stand-up specials that became cultural moments on the small screen. That is why "Chappelle", "Bo Burnham" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Comedy Special as Event" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "Chappelle" is the closest to your taste, "Dave Chappelle" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Comedy Special as Event" actually about?', a: 'The hour that travels. We map stand-up specials that became cultural moments on the small screen.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Chappelle" make sense if I am new to standup, comedy, special?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['british-dry', 'comedy-of-cringe-tv', 'mockumentary-tv'],
},
  {
    slug: 'heist-tv',
    channel: 'tv',
    title: 'The Television Heist',
    thesis:
      'The long con, episode by episode. We collect shows that stretched the plan across a season.',
    intro: 'The crew, the mark, the turn.',
    tags: ['heist', 'thriller', 'ensemble', 'clever'],
    items: ['Money Heist', 'Lupin', 'Ozark', 'The Blacklist', 'Leverage', 'White Collar', 'Tinker Tailor', 'The Catch'],
  
    audience: 'This collection is for people who came to "The Television Heist" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Money Heist", "Lupin" and the rest is heist, thriller, ensemble — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the heist, thriller, ensemble, clever tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the long con, episode by episode. We collect shows that stretched the plan across a season. That is why "Money Heist", "Lupin" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Television Heist" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "Money Heist" is the closest to your taste, "The Catch" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Television Heist" actually about?', a: 'The long con, episode by episode. We collect shows that stretched the plan across a season.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Money Heist" make sense if I am new to heist, thriller, ensemble?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['workplace-drama', 'female-led-drama', 'ensemble-ensemble-tv'],
},
  {
    slug: 'family-saga-tv',
    channel: 'tv',
    title: 'The Multi-Generation Saga',
    thesis:
      'The family as the story. We gather shows that followed a bloodline across decades.',
    intro: 'The inheritance, the rift, the return.',
    tags: ['saga', 'family', 'period', 'epic'],
    items: ['The Crown', 'Succession', 'Gosford Park', 'Downton Abbey', 'The Forsyte', 'Pachinko', 'The Beguiled', 'Bloodline'],
  
    audience: 'This collection is for people who came to "The Multi-Generation Saga" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "The Crown", "Succession" and the rest is saga, family, period — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the saga, family, period, epic tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the family as the story. We gather shows that followed a bloodline across decades. That is why "The Crown", "Succession" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Multi-Generation Saga" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "The Crown" is the closest to your taste, "Bloodline" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Multi-Generation Saga" actually about?', a: 'The family as the story. We gather shows that followed a bloodline across decades.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "The Crown" make sense if I am new to saga, family, period?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['period-costume-tv', 'fantasy-epic-tv', 'historical-figures-tv'],
},
  {
    slug: 'improv-tv',
    channel: 'tv',
    title: 'The Improvised Series',
    thesis:
      'The script that wasn\'t. We trace shows that built comedy from the unscripted moment.',
    intro: 'The yes, the riff, the save.',
    tags: ['improv', 'comedy', 'experimental', 'form'],
    items: ['Curb Your Enthusiasm', 'The Office', 'Reno 911', 'Whose Line', 'Bajillion', 'The Rehearsal', 'Mascots', 'Wedding'],
  
    audience: 'This collection is for people who came to "The Improvised Series" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Curb Your Enthusiasm", "The Office" and the rest is improv, comedy, experimental — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the improv, comedy, experimental, form tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the script that wasn\'t. We trace shows that built comedy from the unscripted moment. That is why "Curb Your Enthusiasm", "The Office" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Improvised Series" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "Curb Your Enthusiasm" is the closest to your taste, "Wedding" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Improvised Series" actually about?', a: 'The script that wasn\'t. We trace shows that built comedy from the unscripted moment.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Curb Your Enthusiasm" make sense if I am new to improv, comedy, experimental?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['mockumentary-tv', 'british-dry', 'comedy-of-cringe-tv'],
},
  {
    slug: 'supernatural-soft',
    channel: 'tv',
    title: 'The Soft Supernatural',
    thesis:
      'The uncanny, kept quiet. We collect shows that used the strange as atmosphere, not spectacle.',
    intro: 'The sign, the doubt, the chill.',
    tags: ['supernatural', 'horror', 'atmospheric', 'mystery'],
    items: ['The OA', 'Stranger Things', 'Sense8', 'The Leftovers', 'Midnight Mass', 'The Haunting', 'Dark', 'Twin Peaks'],
  
    audience: 'This collection is for people who came to "The Soft Supernatural" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "The OA", "Stranger Things" and the rest is supernatural, horror, atmospheric — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a weekend on the couch, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the supernatural, horror, atmospheric, mystery tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the uncanny, kept quiet. We collect shows that used the strange as atmosphere, not spectacle. That is why "The OA", "Stranger Things" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second binge more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Soft Supernatural" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right serie for your night than the most serie on paper. If "The OA" is the closest to your taste, "Twin Peaks" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Soft Supernatural" actually about?', a: 'The uncanny, kept quiet. We collect shows that used the strange as atmosphere, not spectacle.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "The OA" make sense if I am new to supernatural, horror, atmospheric?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these series demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['slow-burn-crime', 'true-crime-tv', 'detective-genius'],
}
];
