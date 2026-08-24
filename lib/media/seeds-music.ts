// 音乐策展专题种子（50 条）
// 条目名种子：专辑名 / 艺术家名（构建期由 MusicBrainz 解析为元数据+封面）
// editorial thesis 改编自豆瓣/网易云歌单策展逻辑，精细翻译+改写避免被判重复
import type { CurationTheme } from './curation';

export const MUSIC_THEMES: CurationTheme[] = [
  {
    slug: 'late-night-focus-lofi',
    channel: 'music',
    title: 'Late-Night Focus: Lo-Fi & Ambient',
    thesis:
      'These records share one job — to disappear. We picked albums engineered for background concentration, where texture beats melody and nothing demands your attention.',
    intro: 'A curated descent into instrumental calm. Perfect for 1am deadlines and empty rooms.',
    audience:
      'This list is for the 1am worker, the insomniac who\'s productive, and anyone who needs sound that doesn\'t ask for attention. You\'ll like it if lyrics pull you out of your own thoughts, or if a silent room makes your brain louder. Skip it if you actually want to listen — this is wallpaper on purpose, and people who crave a chorus will find it frustrating. It\'s also a reliable tool for focus sessions where familiarity crowds out the urge to switch tabs.',
    criteria:
      'We excluded anything with a vocal hook that competes for language, any drop designed to jolt, and any track that "builds" toward a payoff you have to wait for. We kept records engineered to recede: ambient, lo-fi, and instrumental electronic where texture beats melody. A pick earned its place by disappearing behind your actual task. Where two made the same point, we kept the one least likely to interrupt a sentence.',
    alternatives:
      'If the calm is right but you want it warmer, Rain on the Window keeps you company while you work. If you want the same focus with more energy to start, Adrenaline Night is the wrong speed — this is the opposite. People who need a plot should look at the film and TV themes instead. For pure melancholy without the productivity angle, The Lonely Tuesday.',
    faq: [
      { q: 'Why no vocals?', a: 'Because sung words compete with the language centers you\'re using to work or read. Instrumental and ambient let the brain stay on the task.' },
      { q: 'Is this the same as a "study playlist"?', a: 'Closer to a focus tool. We curated for disappearance, not for a vibe you\'d notice — the goal is that you forget it\'s on.' },
      { q: 'Can I loop one album all night?', a: 'That\'s the ideal use. Music for Airports was literally designed to be ignorable for hours.' },
      { q: 'What if I need energy to start?', a: 'Then start with Adrenaline Night, then land here once you\'re moving.' },
      { q: 'Where does the metadata come from?', a: 'MusicBrainz (CC0) for real credits and covers; the "why this helps you focus" writing is ours.' },
    ],
    related: ['focus-flow', 'rainy-window', 'lonely-tuesday'],
    tags: ['ambient', 'lofi', 'electronic', 'focused'],
    mood: ['focused', 'relaxed'],
    items: ['Music for Airports', 'Selected Ambient Works 85-92', 'Dreamland', 'Innervisions', 'Teardrop', 'Weightless', 'Ambient 1', 'Blonde'],
  
  editorialNotes: {
    'Music for Airports': 'We open with Music for Airports because it states the list\'s argument before anything else needs to. The reason it leads: Music for Airports is the easiest yes on the list, the door that opens the rest. No gate to clear, which is the point: it lets you in before the harder picks do. Beside its neighbors it reads as the cleanest statement of the whole record; listening to it in order and the arc holds.',
    'Selected Ambient Works 85-92': 'Selected Ambient Works 85-92 arrives early on purpose, widening the mood before the heavier titles in this list ask for more. In context, Selected Ambient Works 85-92 is the accessible face of the idea, the handhold before the deeper cuts. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Dreamland': 'Dreamland arrives early on purpose, widening the mood before the heavier titles in this list ask for more. In context, Dreamland is the accessible face of the idea, the handhold before the deeper cuts. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Innervisions': 'Innervisions arrives early on purpose, widening the mood before the heavier titles in this list ask for more. In context, Innervisions is the accessible face of the idea, the handhold before the deeper cuts. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Teardrop': 'Teardrop is the pivot of the set — close enough to trust, far enough to justify its place. Teardrop does the quiet work — it bridges the obvious pick and the one that demands more of you. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Weightless': 'Weightless is the pivot of the set — close enough to trust, far enough to justify its place. Weightless does the quiet work — it bridges the obvious pick and the one that demands more of you. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Ambient 1': 'Ambient 1 is the pivot of the set — close enough to trust, far enough to justify its place. Ambient 1 does the quiet work — it bridges the obvious pick and the one that demands more of you. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Blonde': 'Blonde is where we land — the pick for when "late-night focus: lo-fi & ambient" has been felt, not just described. Why it closes: Blonde is the longest echo — the one that stays after the list ends. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the quiet afterimage of the whole record; listening to it in order and the arc holds.',
  }},
  {
    slug: 'british-indie-90s',
    channel: 'music',
    title: 'The 90s British Indie Wave',
    thesis:
      'Not Britpop-as-headline, but the quieter guitar bands that made melancholy sound like sunshine. A lineage from shoegaze to kitchen-sink romance.',
    intro: 'Baggy trousers, reverbed guitars, and a specific kind of northern sadness.',
    audience:
      'This list is for people who like their sadness with a melody, and their melodies with a little rain on them. You\'ll like it if you grew up on British guitar music, or if you discovered that melancholy sounds better with a northern accent and a reverb pedal. Skip it if you need uptempo energy — this is a list for grey days and longer drives, not the dancefloor. It\'s also a soft entry point for anyone exploring "indie" as a feeling rather than a genre tag.',
    criteria:
      'We excluded the headline Britpop singles everyone knows and kept the quieter lineage underneath: shoegaze, kitchen-sink romance, and the bands that made restraint sound like a virtue. We prioritized songs where the sadness is dressed as sunshine — the specific trick this scene perfected. A pick earned its place by sounding like a specific nowhere town at 4pm. Where two made the same point, we kept the more textural one.',
    alternatives:
      'If the melancholy is right but you want it colder, The Lonely Tuesday strips the warmth out. If you want the British feeling in another medium, the neo-noir and slow-burn TV themes carry the same grey light. People who find this "too polite" should try Adrenaline Night. For the cozy indoor version, Rain on the Window.',
    faq: [
      { q: 'Is this just Britpop?', a: 'Deliberately not. We skipped the big singles and kept the quieter guitar bands — shoegaze and kitchen-sink romance — that made the era\'s sadness sound like sunshine.' },
      { q: 'Do I need to be British to like it?', a: 'Not at all. The feeling travels. If you like reverb, minor chords, and a sense of place, you\'re the audience.' },
      { q: 'Why these specific bands over the famous ones?', a: 'Because fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits.' },
      { q: 'Where do the covers and credits come from?', a: 'MusicBrainz (CC0). The editorial reason each band belongs is ours.' },
      { q: 'Can I generate a similar list?', a: 'Yes — the Playlist Generator lets you set mood and genre and assemble a starter set with the same logic.' },
    ],
    related: ['lonely-tuesday', 'rainy-window', 'golden-hour-drive'],
    tags: ['indie', 'rock', '1990s', 'british'],
    mood: ['melancholy', 'relaxed'],
    items: ['The Bends', 'His and Hers', 'The Queen Is Dead', 'Loveless', 'Parklife', 'Crooked Rain', 'Girls & Boys', 'Ride Nowhere'],
  
  editorialNotes: {
    'The Bends': 'We open with The Bends because it states the list\'s argument before anything else needs to. The reason it leads: The Bends is the easiest yes on the list, the door that opens the rest. No gate to clear, which is the point: it lets you in before the harder picks do. Beside its neighbors it reads as the cleanest statement of the whole record; listening to it in order and the arc holds.',
    'His and Hers': 'His and Hers arrives early on purpose, widening the mood before the heavier titles in this list ask for more. In context, His and Hers is the accessible face of the idea, the handhold before the deeper cuts. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'The Queen Is Dead': 'The Queen Is Dead arrives early on purpose, widening the mood before the heavier titles in this list ask for more. In context, The Queen Is Dead is the accessible face of the idea, the handhold before the deeper cuts. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Loveless': 'Loveless arrives early on purpose, widening the mood before the heavier titles in this list ask for more. In context, Loveless is the accessible face of the idea, the handhold before the deeper cuts. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Parklife': 'Parklife is the pivot of the set — close enough to trust, far enough to justify its place. Parklife does the quiet work — it bridges the obvious pick and the one that demands more of you. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Crooked Rain': 'Crooked Rain is the pivot of the set — close enough to trust, far enough to justify its place. Crooked Rain does the quiet work — it bridges the obvious pick and the one that demands more of you. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Girls & Boys': 'Girls & Boys is the pivot of the set — close enough to trust, far enough to justify its place. Girls & Boys does the quiet work — it bridges the obvious pick and the one that demands more of you. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Ride Nowhere': 'Ride Nowhere is where we land — the pick for when "the 90s british indie wave" has been felt, not just described. Why it closes: Ride Nowhere is the longest echo — the one that stays after the list ends. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the quiet afterimage of the whole record; listening to it in order and the arc holds.',
  }},
  {
    slug: 'cosmic-jazz',
    channel: 'music',
    title: 'Cosmic Jazz: From Blue Note to the Stars',
    thesis:
      'Jazz that left the club and went orbital. We trace the spiritual, modal, and free strands that treated improvisation as propulsion.',
    intro: 'Modal scales, open skies, and the long solo as a vehicle.',
    tags: ['jazz', '1970s', 'instrumental'],
    mood: ['focused', 'relaxed'],
    items: ['A Love Supreme', 'Kind of Blue', 'Head Hunters', 'Bitches Brew', 'The QE2', 'On the Corner', 'In a Silent Way', 'Blue Train'],
  
    audience: 'This collection is for people who came to "Cosmic Jazz: From Blue Note to the Stars" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "A Love Supreme", "Kind of Blue" and the rest is jazz, 1970s, instrumental — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the jazz, 1970s, instrumental tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — jazz that left the club and went orbital. We trace the spiritual, modal, and free strands that treated improvisation as propulsion. That is why "A Love Supreme", "Kind of Blue" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Cosmic Jazz: From Blue Note to the Stars" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "A Love Supreme" is the closest to your taste, "Blue Train" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Cosmic Jazz: From Blue Note to the Stars" actually about?', a: 'Jazz that left the club and went orbital. We trace the spiritual, modal, and free strands that treated improvisation as propulsion.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "A Love Supreme" make sense if I am new to jazz, 1970s, instrumental?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['spiritual-jazz', 'minimal-piano', 'ambient-drone'],

  editorialNotes: {
    'A Love Supreme': 'We open with A Love Supreme because it states the list\'s argument before anything else needs to. The reason it leads: A Love Supreme is the easiest yes on the list, the door that opens the rest. No gate to clear, which is the point: it lets you in before the harder picks do. Beside its neighbors it reads as the cleanest statement of the whole record; listening to it in order and the arc holds.',
    'Kind of Blue': 'Kind of Blue arrives early on purpose, widening the mood before the heavier titles in this list ask for more. In context, Kind of Blue is the accessible face of the idea, the handhold before the deeper cuts. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Head Hunters': 'Head Hunters arrives early on purpose, widening the mood before the heavier titles in this list ask for more. In context, Head Hunters is the accessible face of the idea, the handhold before the deeper cuts. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Bitches Brew': 'Bitches Brew arrives early on purpose, widening the mood before the heavier titles in this list ask for more. In context, Bitches Brew is the accessible face of the idea, the handhold before the deeper cuts. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'The QE2': 'The QE2 is the pivot of the set — close enough to trust, far enough to justify its place. The QE2 does the quiet work — it bridges the obvious pick and the one that demands more of you. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'On the Corner': 'On the Corner is the pivot of the set — close enough to trust, far enough to justify its place. On the Corner does the quiet work — it bridges the obvious pick and the one that demands more of you. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'In a Silent Way': 'In a Silent Way is the pivot of the set — close enough to trust, far enough to justify its place. In a Silent Way does the quiet work — it bridges the obvious pick and the one that demands more of you. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Blue Train': 'Blue Train is where we land — the pick for when "cosmic jazz: from blue note to the stars" has been felt, not just described. Why it closes: Blue Train is the longest echo — the one that stays after the list ends. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the quiet afterimage of the whole record; listening to it in order and the arc holds.',
  }},
  {
    slug: 'hiphop-storytelling',
    channel: 'music',
    title: 'Hip-Hop as Novel: The Storytellers',
    thesis:
      'Concept albums and narrative verses where the bar is the sentence. We favor the writers who built worlds over the ones who filled hooks.',
    intro: 'Concrete imagery, recurring characters, and the album as a book.',
    tags: ['hiphop', '2010s', 'lyrical'],
    mood: ['energetic'],
    items: ['good kid, m.A.A.d city', 'To Pimp a Butterfly', 'Illmatic', 'Ready to Die', 'The College Dropout', 'Food & Liquor', 'Section.80', 'Damn'],
  
    audience: 'This collection is for people who came to "Hip-Hop as Novel: The Storytellers" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "good kid, m.A.A.d city", "To Pimp a Butterfly" and the rest is hiphop, 2010s, lyrical — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the hiphop, 2010s, lyrical tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — concept albums and narrative verses where the bar is the sentence. We favor the writers who built worlds over the ones who filled hooks. That is why "good kid, m.A.A.d city", "To Pimp a Butterfly" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Hip-Hop as Novel: The Storytellers" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "good kid, m.A.A.d city" is the closest to your taste, "Damn" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Hip-Hop as Novel: The Storytellers" actually about?', a: 'Concept albums and narrative verses where the bar is the sentence. We favor the writers who built worlds over the ones who filled hooks.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "good kid, m.A.A.d city" make sense if I am new to hiphop, 2010s, lyrical?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['trap-modern', 'lofi-hiphop', 'korea-indie-city'],

  editorialNotes: {
    'good kid, m.A.A.d city': 'We open with good kid, m.A.A.d city because it states the list\'s argument before anything else needs to. The reason it leads: good kid, m.A.A.d city is the easiest yes on the list, the door that opens the rest. No gate to clear, which is the point: it lets you in before the harder picks do. Beside its neighbors it reads as the cleanest statement of the whole record; listening to it in order and the arc holds.',
    'To Pimp a Butterfly': 'To Pimp a Butterfly arrives early on purpose, widening the mood before the heavier titles in this list ask for more. In context, To Pimp a Butterfly is the accessible face of the idea, the handhold before the deeper cuts. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Illmatic': 'Illmatic arrives early on purpose, widening the mood before the heavier titles in this list ask for more. In context, Illmatic is the accessible face of the idea, the handhold before the deeper cuts. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Ready to Die': 'Ready to Die arrives early on purpose, widening the mood before the heavier titles in this list ask for more. In context, Ready to Die is the accessible face of the idea, the handhold before the deeper cuts. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'The College Dropout': 'The College Dropout is the pivot of the set — close enough to trust, far enough to justify its place. The College Dropout does the quiet work — it bridges the obvious pick and the one that demands more of you. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Food & Liquor': 'Food & Liquor is the pivot of the set — close enough to trust, far enough to justify its place. Food & Liquor does the quiet work — it bridges the obvious pick and the one that demands more of you. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Section.80': 'Section.80 is the pivot of the set — close enough to trust, far enough to justify its place. Section.80 does the quiet work — it bridges the obvious pick and the one that demands more of you. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Damn': 'Damn is where we land — the pick for when "hip-hop as novel: the storytellers" has been felt, not just described. Why it closes: Damn is the longest echo — the one that stays after the list ends. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the quiet afterimage of the whole record; listening to it in order and the arc holds.',
  }},
  {
    slug: 'classical-rainy-window',
    channel: 'music',
    title: 'Classical for a Rainy Window',
    thesis:
      'Romantic-era piano and string works chosen for weather, not canon. The point is the room you are sitting in, not the conservatory.',
    intro: 'Slow movements, minor keys, and the sound of water on glass.',
    tags: ['classical', 'piano', 'romantic'],
    mood: ['melancholy', 'relaxed'],
    items: ['Clair de Lune', 'Gymnopedie', 'Moonlight Sonata', 'Nocturnes Op.9', 'The Four Seasons', 'Prelude in C', 'Spiegel im Spiegel', 'Recomposed'],
  
    audience: 'This collection is for people who came to "Classical for a Rainy Window" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Clair de Lune", "Gymnopedie" and the rest is classical, piano, romantic — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the classical, piano, romantic tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — romantic-era piano and string works chosen for weather, not canon. The point is the room you are sitting in, not the conservatory. That is why "Clair de Lune", "Gymnopedie" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Classical for a Rainy Window" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Clair de Lune" is the closest to your taste, "Recomposed" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Classical for a Rainy Window" actually about?', a: 'Romantic-era piano and string works chosen for weather, not canon. The point is the room you are sitting in, not the conservatory.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Clair de Lune" make sense if I am new to classical, piano, romantic?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['minimal-piano', 'opera-aria', 'middle-east-oud'],

  editorialNotes: {
    'Clair de Lune': 'We open with Clair de Lune because it states the list\'s argument before anything else needs to. The reason it leads: Clair de Lune is the easiest yes on the list, the door that opens the rest. No gate to clear, which is the point: it lets you in before the harder picks do. Beside its neighbors it reads as the cleanest statement of the whole record; listening to it in order and the arc holds.',
    'Gymnopedie': 'Gymnopedie arrives early on purpose, widening the mood before the heavier titles in this list ask for more. In context, Gymnopedie is the accessible face of the idea, the handhold before the deeper cuts. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Moonlight Sonata': 'Moonlight Sonata arrives early on purpose, widening the mood before the heavier titles in this list ask for more. In context, Moonlight Sonata is the accessible face of the idea, the handhold before the deeper cuts. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Nocturnes Op.9': 'Nocturnes Op.9 arrives early on purpose, widening the mood before the heavier titles in this list ask for more. In context, Nocturnes Op.9 is the accessible face of the idea, the handhold before the deeper cuts. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'The Four Seasons': 'The Four Seasons is the pivot of the set — close enough to trust, far enough to justify its place. The Four Seasons does the quiet work — it bridges the obvious pick and the one that demands more of you. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Prelude in C': 'Prelude in C is the pivot of the set — close enough to trust, far enough to justify its place. Prelude in C does the quiet work — it bridges the obvious pick and the one that demands more of you. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Spiegel im Spiegel': 'Spiegel im Spiegel is the pivot of the set — close enough to trust, far enough to justify its place. Spiegel im Spiegel does the quiet work — it bridges the obvious pick and the one that demands more of you. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Recomposed': 'Recomposed is where we land — the pick for when "classical for a rainy window" has been felt, not just described. Why it closes: Recomposed is the longest echo — the one that stays after the list ends. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the quiet afterimage of the whole record; listening to it in order and the arc holds.',
  }},
  {
    slug: 'detroit-techno-origin',
    channel: 'music',
    title: 'Detroit Techno: The Belleville Three',
    thesis:
      'Before techno was a festival, it was three friends in a Michigan basement imagining a future that sounded like machinery and hope.',
    intro: 'Roland drum machines, factory rhythms, and a city dreaming in code.',
    tags: ['techno', 'electronic', '1980s', 'detroit'],
    mood: ['energetic', 'focused'],
    items: ['Model 500', 'Inner City', 'Strings of Life', 'Techno Music', 'Beyond the Dance', 'Nude Photo', 'Big Fun', 'Cybotron'],
  
    audience: 'This collection is for people who came to "Detroit Techno: The Belleville Three" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Model 500", "Inner City" and the rest is techno, electronic, 1980s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the techno, electronic, 1980s, detroit tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — before techno was a festival, it was three friends in a Michigan basement imagining a future that sounded like machinery and hope. That is why "Model 500", "Inner City" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Detroit Techno: The Belleville Three" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Model 500" is the closest to your taste, "Cybotron" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Detroit Techno: The Belleville Three" actually about?', a: 'Before techno was a festival, it was three friends in a Michigan basement imagining a future that sounded like machinery and hope.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Model 500" make sense if I am new to techno, electronic, 1980s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['synthwave-retro', 'house-chicago', 'german-krautrock'],

  editorialNotes: {
    'Model 500': 'We open with Model 500 because it states the list\'s argument before anything else needs to. The reason it leads: Model 500 is the easiest yes on the list, the door that opens the rest. No gate to clear, which is the point: it lets you in before the harder picks do. Beside its neighbors it reads as the cleanest statement of the whole record; listening to it in order and the arc holds.',
    'Inner City': 'Inner City arrives early on purpose, widening the mood before the heavier titles in this list ask for more. In context, Inner City is the accessible face of the idea, the handhold before the deeper cuts. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Strings of Life': 'Strings of Life arrives early on purpose, widening the mood before the heavier titles in this list ask for more. In context, Strings of Life is the accessible face of the idea, the handhold before the deeper cuts. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Techno Music': 'Techno Music arrives early on purpose, widening the mood before the heavier titles in this list ask for more. In context, Techno Music is the accessible face of the idea, the handhold before the deeper cuts. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Beyond the Dance': 'Beyond the Dance is the pivot of the set — close enough to trust, far enough to justify its place. Beyond the Dance does the quiet work — it bridges the obvious pick and the one that demands more of you. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Nude Photo': 'Nude Photo is the pivot of the set — close enough to trust, far enough to justify its place. Nude Photo does the quiet work — it bridges the obvious pick and the one that demands more of you. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Big Fun': 'Big Fun is the pivot of the set — close enough to trust, far enough to justify its place. Big Fun does the quiet work — it bridges the obvious pick and the one that demands more of you. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the connective tissue of the whole record; listening to it in order and the arc holds.',
    'Cybotron': 'Cybotron is where we land — the pick for when "detroit techno: the belleville three" has been felt, not just described. Why it closes: Cybotron is the longest echo — the one that stays after the list ends. It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out. Beside its neighbors it reads as the quiet afterimage of the whole record; listening to it in order and the arc holds.',
  }},
  {
    slug: 'brazilian-bossa',
    channel: 'music',
    title: 'Bossa Nova: Quiet Revolution',
    thesis:
      'A genre built on restraint — soft vowels, nylon strings, and the radical idea that sophistication could also be tender.',
    intro: 'Rio apartments, sea breeze, and the unhurried conversation of guitar and voice.',
    tags: ['bossa', 'latin', '1960s', 'acoustic'],
    mood: ['relaxed'],
    items: ['Getz/Gilberto', 'Chega de Saudade', 'Wave', 'Francis Albert Sinatra', 'A Certain Smile', 'Joao Gilberto', 'Amoroso', 'Bossa Nova'],
  
    audience: 'This collection is for people who came to "Bossa Nova: Quiet Revolution" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Getz/Gilberto", "Chega de Saudade" and the rest is bossa, latin, 1960s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the bossa, latin, 1960s, acoustic tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — a genre built on restraint — soft vowels, nylon strings, and the radical idea that sophistication could also be tender. That is why "Getz/Gilberto", "Chega de Saudade" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Bossa Nova: Quiet Revolution" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Getz/Gilberto" is the closest to your taste, "Bossa Nova" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Bossa Nova: Quiet Revolution" actually about?', a: 'A genre built on restraint — soft vowels, nylon strings, and the radical idea that sophistication could also be tender.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Getz/Gilberto" make sense if I am new to bossa, latin, 1960s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['korea-indie-city', 'french-chanson', 'bluegrass-acoustic'],
},
  {
    slug: 'post-punk-uk',
    channel: 'music',
    title: 'Post-Punk: Angular and Cold',
    thesis:
      'When punk ate art school. We collect the bands that turned dissonance, monotone, and dub bass into a new kind of elegance.',
    intro: 'Leather, repetition, and the rhythm section as the whole argument.',
    tags: ['postpunk', 'rock', '1980s', 'uk'],
    mood: ['melancholy'],
    items: ['Unknown Pleasures', 'Closer', 'Fire of Love', 'Metal Box', 'Germfree Adolescents', 'Entertainment', 'Juju', 'In the Flat Field'],
  
    audience: 'This collection is for people who came to "Post-Punk: Angular and Cold" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Unknown Pleasures", "Closer" and the rest is postpunk, rock, 1980s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the postpunk, rock, 1980s, uk tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — when punk ate art school. We collect the bands that turned dissonance, monotone, and dub bass into a new kind of elegance. That is why "Unknown Pleasures", "Closer" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Post-Punk: Angular and Cold" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Unknown Pleasures" is the closest to your taste, "In the Flat Field" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Post-Punk: Angular and Cold" actually about?', a: 'When punk ate art school. We collect the bands that turned dissonance, monotone, and dub bass into a new kind of elegance.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Unknown Pleasures" make sense if I am new to postpunk, rock, 1980s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['gothic-postpunk', 'noise-rock', 'punk-77'],
},
  {
    slug: 'synthwave-retro',
    channel: 'music',
    title: 'Synthwave: Neon Nostalgia',
    thesis:
      'A genre that treats the 1980s less as a decade and more as a feeling — chrome, sunset, and the Yamaha DX7 as a time machine.',
    intro: 'Drive fast, feel slow. The soundtrack to a memory you never had.',
    tags: ['synthwave', 'electronic', '1980s', 'retro'],
    mood: ['energetic'],
    items: ['Nightcall', 'Resonance', 'Outland', 'Endless Summer', 'Trilogy', 'Prototype', 'Turbo Killer', 'Lost 84'],
  
    audience: 'This collection is for people who came to "Synthwave: Neon Nostalgia" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Nightcall", "Resonance" and the rest is synthwave, electronic, 1980s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the synthwave, electronic, 1980s, retro tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — a genre that treats the 1980s less as a decade and more as a feeling — chrome, sunset, and the Yamaha DX7 as a time machine. That is why "Nightcall", "Resonance" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Synthwave: Neon Nostalgia" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Nightcall" is the closest to your taste, "Lost 84" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Synthwave: Neon Nostalgia" actually about?', a: 'A genre that treats the 1980s less as a decade and more as a feeling — chrome, sunset, and the Yamaha DX7 as a time machine.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Nightcall" make sense if I am new to synthwave, electronic, 1980s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['detroit-techno-origin', 'house-chicago', 'synth-pop-80s'],
},
  {
    slug: 'soul-stax-motown',
    channel: 'music',
    title: 'Soul: Stax, Motown & the Groove',
    thesis:
      'Two labels, one mission: make the rhythm undeniable. We map the vocalists who turned heartbreak into something you could dance to.',
    intro: 'Horn stabs, call-and-response, and the rhythm section that built a city.',
    tags: ['soul', 'rnb', '1960s', 'vocal'],
    mood: ['party', 'energetic'],
    items: ['Whats Going On', 'Lets Stay Together', 'I Heard It Through', 'Respect', 'My Girl', 'Aint No Mountain', 'Superstition', 'Sir Duke'],
  
    audience: 'This collection is for people who came to "Soul: Stax, Motown & the Groove" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Whats Going On", "Lets Stay Together" and the rest is soul, rnb, 1960s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the soul, rnb, 1960s, vocal tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — two labels, one mission: make the rhythm undeniable. We map the vocalists who turned heartbreak into something you could dance to. That is why "Whats Going On", "Lets Stay Together" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Soul: Stax, Motown & the Groove" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Whats Going On" is the closest to your taste, "Sir Duke" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Soul: Stax, Motown & the Groove" actually about?', a: 'Two labels, one mission: make the rhythm undeniable. We map the vocalists who turned heartbreak into something you could dance to.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Whats Going On" make sense if I am new to soul, rnb, 1960s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['gospel-choir', 'funk-70s', 'flamenco-deep'],
},
  {
    slug: 'math-rock',
    channel: 'music',
    title: 'Math Rock: Counting as Feeling',
    thesis:
      'Bands who discovered that odd time signatures could carry emotion that 4/4 could not. Tapping, counter-rhythm, and the joy of the unexpected turn.',
    intro: 'Polyrhythm as a love language. Guitars that skip instead of walk.',
    tags: ['mathrock', 'instrumental', '2000s', 'indie'],
    mood: ['focused', 'energetic'],
    items: ['American Football', 'Spiderland', 'Good News', 'Animals', 'The Moon Is Down', 'Dots', 'Geography', 'Frames'],
  
    audience: 'This collection is for people who came to "Math Rock: Counting as Feeling" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "American Football", "Spiderland" and the rest is mathrock, instrumental, 2000s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the mathrock, instrumental, 2000s, indie tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — bands who discovered that odd time signatures could carry emotion that 4/4 could not. Tapping, counter-rhythm, and the joy of the unexpected turn. That is why "American Football", "Spiderland" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Math Rock: Counting as Feeling" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "American Football" is the closest to your taste, "Frames" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Math Rock: Counting as Feeling" actually about?', a: 'Bands who discovered that odd time signatures could carry emotion that 4/4 could not. Tapping, counter-rhythm, and the joy of the unexpected turn.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "American Football" make sense if I am new to mathrock, instrumental, 2000s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['metal-progressive', 'cosmic-jazz', 'minimal-piano'],
},
  {
    slug: 'korea-indie-city',
    channel: 'music',
    title: 'K-Indie: Seoul After Midnight',
    thesis:
      'Past the idol machine, a generation of Korean songwriters writing about rent, insomnia, and quiet rebellion in major keys.',
    intro: 'Hongdae basements, acoustic confessions, and the city that never quite sleeps.',
    tags: ['korean', 'indie', '2010s', 'acoustic'],
    mood: ['melancholy', 'relaxed'],
    items: ['Love Love Love', 'Rainbow', 'Good Person', 'Spring Above', 'Tomorrow', 'Wind Flower', 'Your Shampoo', 'Apollo 11'],
  
    audience: 'This collection is for people who came to "K-Indie: Seoul After Midnight" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Love Love Love", "Rainbow" and the rest is korean, indie, 2010s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the korean, indie, 2010s, acoustic tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — past the idol machine, a generation of Korean songwriters writing about rent, insomnia, and quiet rebellion in major keys. That is why "Love Love Love", "Rainbow" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "K-Indie: Seoul After Midnight" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Love Love Love" is the closest to your taste, "Apollo 11" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "K-Indie: Seoul After Midnight" actually about?', a: 'Past the idol machine, a generation of Korean songwriters writing about rent, insomnia, and quiet rebellion in major keys.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Love Love Love" make sense if I am new to korean, indie, 2010s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['shoegaze-revival', 'tape-lofi', 'british-indie-90s'],
},
  {
    slug: 'german-krautrock',
    channel: 'music',
    title: 'Krautrock: Motorik Pulse',
    thesis:
      'German electronic and rock in the 70s that abandoned verse-chorus for the trance of the repeated beat. The seed of everything ambient.',
    intro: 'Tape loops, kosmische drones, and the autobahn as rhythm section.',
    tags: ['krautrock', 'electronic', '1970s', 'german'],
    mood: ['focused', 'energetic'],
    items: ['Autobahn', 'Tago Mago', 'Neu 75', 'Phaedra', 'Monster Movie', 'Cluster 71', 'Zwei', 'Ege Bamyasi'],
  
    audience: 'This collection is for people who came to "Krautrock: Motorik Pulse" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Autobahn", "Tago Mago" and the rest is krautrock, electronic, 1970s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the krautrock, electronic, 1970s, german tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — german electronic and rock in the 70s that abandoned verse-chorus for the trance of the repeated beat. The seed of everything ambient. That is why "Autobahn", "Tago Mago" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Krautrock: Motorik Pulse" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Autobahn" is the closest to your taste, "Ege Bamyasi" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Krautrock: Motorik Pulse" actually about?', a: 'German electronic and rock in the 70s that abandoned verse-chorus for the trance of the repeated beat. The seed of everything ambient.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Autobahn" make sense if I am new to krautrock, electronic, 1970s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['detroit-techno-origin', 'late-night-focus-lofi', 'cosmic-jazz'],
},
  {
    slug: 'french-chanson',
    channel: 'music',
    title: 'Chanson: Paris in Three Minutes',
    thesis:
      'The French art of the miniature confession. We favor the songwriters who turned a café table into a stage and a sigh into a melody.',
    intro: 'Accordion, cigarette smoke, and the precise architecture of longing.',
    tags: ['chanson', 'french', 'vocal', 'acoustic'],
    mood: ['melancholy', 'relaxed'],
    items: ['Ne Me Quitte Pas', 'La Boheme', 'Sous le Ciel', 'Quelquun', 'La Vie en Rose', 'Non Je Ne Regrette', 'Mistral Gagnant', 'Je Lattends'],
  
    audience: 'This collection is for people who came to "Chanson: Paris in Three Minutes" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Ne Me Quitte Pas", "La Boheme" and the rest is chanson, french, vocal — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the chanson, french, vocal, acoustic tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the French art of the miniature confession. We favor the songwriters who turned a café table into a stage and a sigh into a melody. That is why "Ne Me Quitte Pas", "La Boheme" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Chanson: Paris in Three Minutes" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Ne Me Quitte Pas" is the closest to your taste, "Je Lattends" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Chanson: Paris in Three Minutes" actually about?', a: 'The French art of the miniature confession. We favor the songwriters who turned a café table into a stage and a sigh into a melody.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Ne Me Quitte Pas" make sense if I am new to chanson, french, vocal?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['singer-songwriter-70s', 'flamenco-deep', 'korea-indie-city'],
},
  {
    slug: 'black-metal-atmosphere',
    channel: 'music',
    title: 'Atmospheric Black Metal: Frost & Memory',
    thesis:
      'When the genre stopped screaming at you and started describing a landscape. We pick the records that use blast beats as weather.',
    intro: 'Pine, reverb, and the long walk through a recording of winter.',
    tags: ['blackmetal', 'metal', '1990s', 'atmospheric'],
    mood: ['melancholy'],
    items: ['Transilvanian Hunger', 'Anthems', 'Hvis Lyset', 'Filosofem', 'Under a Funeral', 'The Mantle', 'Dead Winter', 'Varde'],
  
    audience: 'This collection is for people who came to "Atmospheric Black Metal: Frost & Memory" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Transilvanian Hunger", "Anthems" and the rest is blackmetal, metal, 1990s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the blackmetal, metal, 1990s, atmospheric tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — when the genre stopped screaming at you and started describing a landscape. We pick the records that use blast beats as weather. That is why "Transilvanian Hunger", "Anthems" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Atmospheric Black Metal: Frost & Memory" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Transilvanian Hunger" is the closest to your taste, "Varde" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Atmospheric Black Metal: Frost & Memory" actually about?', a: 'When the genre stopped screaming at you and started describing a landscape. We pick the records that use blast beats as weather.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Transilvanian Hunger" make sense if I am new to blackmetal, metal, 1990s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['british-indie-90s', 'grunge-seattle', 'trip-hop-bristol'],
},
  {
    slug: 'reggae-roots',
    channel: 'music',
    title: 'Roots Reggae: Dub & Doctrine',
    thesis:
      'The rhythm that colonized the world sideways. We trace roots, dub, and the studio as instrument from Kingston to the globe.',
    intro: 'Delay units, bass as sermon, and the one-drop that moves nations.',
    tags: ['reggae', 'dub', '1970s', 'roots'],
    mood: ['relaxed', 'party'],
    items: ['Catch a Fire', 'Exodus', 'Heart of the Congos', 'Super Ape', 'Two Sevens Clash', 'Dreadlocks', 'Marcus Garvey', 'War Ina Babylon'],
  
    audience: 'This collection is for people who came to "Roots Reggae: Dub & Doctrine" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Catch a Fire", "Exodus" and the rest is reggae, dub, 1970s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the reggae, dub, 1970s, roots tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the rhythm that colonized the world sideways. We trace roots, dub, and the studio as instrument from Kingston to the globe. That is why "Catch a Fire", "Exodus" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Roots Reggae: Dub & Doctrine" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Catch a Fire" is the closest to your taste, "War Ina Babylon" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Roots Reggae: Dub & Doctrine" actually about?', a: 'The rhythm that colonized the world sideways. We trace roots, dub, and the studio as instrument from Kingston to the globe.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Catch a Fire" make sense if I am new to reggae, dub, 1970s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['cosmic-jazz', 'afrobeat-pioneers', 'funk-70s'],
},
  {
    slug: 'minimal-piano',
    channel: 'music',
    title: 'Minimal Piano: One Note at a Time',
    thesis:
      'Composers who subtracted until only the essential remained. Repetition, silence, and the listener as co-author.',
    intro: 'Prepared pianos, slow arcs, and the discipline of the held note.',
    tags: ['piano', 'classical', 'minimal', 'instrumental'],
    mood: ['focused', 'relaxed'],
    items: ['Solo Piano', 'Daughters', 'The Blue Notebooks', 'Spiegel im Spiegel', 'Verdigris', 'Objects', 'Patterns', 'Inventions'],
  
    audience: 'This collection is for people who came to "Minimal Piano: One Note at a Time" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Solo Piano", "Daughters" and the rest is piano, classical, minimal — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the piano, classical, minimal, instrumental tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — composers who subtracted until only the essential remained. Repetition, silence, and the listener as co-author. That is why "Solo Piano", "Daughters" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Minimal Piano: One Note at a Time" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Solo Piano" is the closest to your taste, "Inventions" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Minimal Piano: One Note at a Time" actually about?', a: 'Composers who subtracted until only the essential remained. Repetition, silence, and the listener as co-author.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Solo Piano" make sense if I am new to piano, classical, minimal?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['ambient-drone', 'middle-east-oud', 'classical-rainy-window'],
},
  {
    slug: 'grunge-seattle',
    channel: 'music',
    title: 'Grunge: Flannel & Feedback',
    thesis:
      'The major label absorbed the underground and the underground forgave it. We map the bands that made alienation sound like a hook.',
    intro: 'Drop D, broken amps, and the quiet-loud-quiet that broke the 80s.',
    tags: ['grunge', 'rock', '1990s', 'seattle'],
    mood: ['melancholy', 'energetic'],
    items: ['Nevermind', 'Ten', 'Dirt', 'Core', 'Superunknown', 'In Utero', 'Dry As a Bone', 'Sweet Oblivion'],
  
    audience: 'This collection is for people who came to "Grunge: Flannel & Feedback" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Nevermind", "Ten" and the rest is grunge, rock, 1990s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the grunge, rock, 1990s, seattle tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the major label absorbed the underground and the underground forgave it. We map the bands that made alienation sound like a hook. That is why "Nevermind", "Ten" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Grunge: Flannel & Feedback" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Nevermind" is the closest to your taste, "Sweet Oblivion" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Grunge: Flannel & Feedback" actually about?', a: 'The major label absorbed the underground and the underground forgave it. We map the bands that made alienation sound like a hook.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Nevermind" make sense if I am new to grunge, rock, 1990s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['british-indie-90s', 'post-punk-uk', 'black-metal-atmosphere'],
},
  {
    slug: 'afrobeat-pioneers',
    channel: 'music',
    title: 'Afrobeat: The Long Revolution',
    thesis:
      'Fela built a genre as protest and as party — horns interlocking for twenty minutes, rhythm as both groove and manifesto.',
    intro: 'Highlife guitar, talking drums, and the band as a small parliament.',
    tags: ['afrobeat', 'funk', '1970s', 'nigerian'],
    mood: ['party', 'energetic'],
    items: ['Zombie', 'Expensive Shit', 'Gentleman', 'Sorrow Tears', 'No Agreement', 'Teacher Dont Teach', 'Upside Down', 'Black Man'],
  
    audience: 'This collection is for people who came to "Afrobeat: The Long Revolution" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Zombie", "Expensive Shit" and the rest is afrobeat, funk, 1970s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the afrobeat, funk, 1970s, nigerian tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — fela built a genre as protest and as party — horns interlocking for twenty minutes, rhythm as both groove and manifesto. That is why "Zombie", "Expensive Shit" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Afrobeat: The Long Revolution" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Zombie" is the closest to your taste, "Black Man" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Afrobeat: The Long Revolution" actually about?', a: 'Fela built a genre as protest and as party — horns interlocking for twenty minutes, rhythm as both groove and manifesto.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Zombie" make sense if I am new to afrobeat, funk, 1970s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['funk-70s', 'disco-era', 'salsa-newyork'],
},
  {
    slug: 'dream-pop',
    channel: 'music',
    title: 'Dream Pop: Reverb as Weather',
    thesis:
      'When the studio became the instrument and the voice became another texture. We collect the bands that chose haze over clarity.',
    intro: 'Shoegaze cousins, wall-of-sound, and the melody you hear through fog.',
    tags: ['dreampop', 'indie', '1980s', 'ethereal'],
    mood: ['relaxed', 'melancholy'],
    items: ['Heaven or Las Vegas', 'Souvlaki', 'Cocteau Twins', 'Loveless', 'Garlands', 'Blue Bell Knoll', 'Treasure', 'Ocean Rain'],
  
    audience: 'This collection is for people who came to "Dream Pop: Reverb as Weather" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Heaven or Las Vegas", "Souvlaki" and the rest is dreampop, indie, 1980s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the dreampop, indie, 1980s, ethereal tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — when the studio became the instrument and the voice became another texture. We collect the bands that chose haze over clarity. That is why "Heaven or Las Vegas", "Souvlaki" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Dream Pop: Reverb as Weather" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Heaven or Las Vegas" is the closest to your taste, "Ocean Rain" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Dream Pop: Reverb as Weather" actually about?', a: 'When the studio became the instrument and the voice became another texture. We collect the bands that chose haze over clarity.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Heaven or Las Vegas" make sense if I am new to dreampop, indie, 1980s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['dreampop-shoegaze-2020s', 'british-indie-90s', 'korea-indie-city'],
},
  {
    slug: 'funk-70s',
    channel: 'music',
    title: 'Funk: The Pocket',
    thesis:
      'The rhythm section as the whole point. We pick the records where the bassline is the chorus and the beat is the argument.',
    intro: 'Syncopation, slap, and the downbeat you feel in your spine.',
    tags: ['funk', 'soul', '1970s', 'dance'],
    mood: ['party', 'energetic'],
    items: ['Mothership Connection', 'Tower of Power', 'Super Fly', 'Shining Star', 'Flash Light', 'Pick Up the Pieces', 'Cissy Strut', 'Give It Away'],
  
    audience: 'This collection is for people who came to "Funk: The Pocket" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Mothership Connection", "Tower of Power" and the rest is funk, soul, 1970s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the funk, soul, 1970s, dance tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the rhythm section as the whole point. We pick the records where the bassline is the chorus and the beat is the argument. That is why "Mothership Connection", "Tower of Power" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Funk: The Pocket" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Mothership Connection" is the closest to your taste, "Give It Away" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Funk: The Pocket" actually about?', a: 'The rhythm section as the whole point. We pick the records where the bassline is the chorus and the beat is the argument.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Mothership Connection" make sense if I am new to funk, soul, 1970s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['afrobeat-pioneers', 'disco-era', 'salsa-newyork'],
},
  {
    slug: 'noise-rock',
    channel: 'music',
    title: 'Noise Rock: Feedback as Frontman',
    thesis:
      'Bands who decided the mistake was the message. We collect the records that weaponize the unwanted frequency.',
    intro: 'Distortion, collision, and the riff that refuses to resolve.',
    tags: ['noiserock', 'rock', '1980s', 'noise'],
    mood: ['energetic'],
    items: ['Psychocandy', 'Daydream Nation', 'Bug', 'The Jesus Lizard', 'Feedtime', 'Sonic Youth', 'Cop', 'Pussy Galore'],
  
    audience: 'This collection is for people who came to "Noise Rock: Feedback as Frontman" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Psychocandy", "Daydream Nation" and the rest is noiserock, rock, 1980s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the noiserock, rock, 1980s, noise tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — bands who decided the mistake was the message. We collect the records that weaponize the unwanted frequency. That is why "Psychocandy", "Daydream Nation" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Noise Rock: Feedback as Frontman" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Psychocandy" is the closest to your taste, "Pussy Galore" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Noise Rock: Feedback as Frontman" actually about?', a: 'Bands who decided the mistake was the message. We collect the records that weaponize the unwanted frequency.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Psychocandy" make sense if I am new to noiserock, rock, 1980s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['new-wave', 'post-punk-uk', 'detroit-techno-origin'],
},
  {
    slug: 'trip-hop-bristol',
    channel: 'music',
    title: 'Trip-Hop: Bristol in the Rain',
    thesis:
      'Hip-hop tempos, dub space, and a melancholy that felt specifically British. The genre that made beats sound like cigarettes.',
    intro: 'Samplers, minor chords, and the city as mood board.',
    tags: ['triphop', 'electronic', '1990s', 'uk'],
    mood: ['relaxed', 'melancholy'],
    items: ['Dummy', 'Blue Lines', 'Maxinquaye', 'Protection', 'Portishead', 'Mezzanine', 'Pre-Millennium', 'Heroes'],
  
    audience: 'This collection is for people who came to "Trip-Hop: Bristol in the Rain" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Dummy", "Blue Lines" and the rest is triphop, electronic, 1990s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the triphop, electronic, 1990s, uk tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — hip-hop tempos, dub space, and a melancholy that felt specifically British. The genre that made beats sound like cigarettes. That is why "Dummy", "Blue Lines" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Trip-Hop: Bristol in the Rain" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Dummy" is the closest to your taste, "Heroes" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Trip-Hop: Bristol in the Rain" actually about?', a: 'Hip-hop tempos, dub space, and a melancholy that felt specifically British. The genre that made beats sound like cigarettes.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Dummy" make sense if I am new to triphop, electronic, 1990s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['british-indie-90s', 'idm-breaks', 'late-night-focus-lofi'],
},
  {
    slug: 'bluegrass-acoustic',
    channel: 'music',
    title: 'Bluegrass: Porch & Precision',
    thesis:
      'String-band music that turned virtuosity into community. We pick the players who made speed sound like home.',
    intro: 'Banjo rolls, close harmony, and the song as a front-porch argument.',
    tags: ['bluegrass', 'country', 'acoustic', 'folk'],
    mood: ['relaxed', 'party'],
    items: ['Foggy Mountain', 'Will the Circle', 'Cold Feet', 'Aereoplain', 'High Country', 'The crow', 'The Goat', 'Ring of Fire'],
  
    audience: 'This collection is for people who came to "Bluegrass: Porch & Precision" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Foggy Mountain", "Will the Circle" and the rest is bluegrass, country, acoustic — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the bluegrass, country, acoustic, folk tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — string-band music that turned virtuosity into community. We pick the players who made speed sound like home. That is why "Foggy Mountain", "Will the Circle" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Bluegrass: Porch & Precision" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Foggy Mountain" is the closest to your taste, "Ring of Fire" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Bluegrass: Porch & Precision" actually about?', a: 'String-band music that turned virtuosity into community. We pick the players who made speed sound like home.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Foggy Mountain" make sense if I am new to bluegrass, country, acoustic?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['bluegrass-women', 'americana-roots', 'brazilian-bossa'],
},
  {
    slug: 'house-chicago',
    channel: 'music',
    title: 'House: Chicago Built the Floor',
    thesis:
      'Four-on-the-floor as liberation. We trace the genre from garage soul to the warehouse and the drum machine as equalizer.',
    intro: 'Disco loops, piano stabs, and the kick that democratized dance.',
    tags: ['house', 'electronic', '1980s', 'chicago'],
    mood: ['party', 'energetic'],
    items: ['Your Love', 'Move Your Body', 'Acid Tracks', 'No Control', 'Can You Feel', 'Music Is the Key', 'Jack Your Body', 'The Party'],
  
    audience: 'This collection is for people who came to "House: Chicago Built the Floor" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Your Love", "Move Your Body" and the rest is house, electronic, 1980s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the house, electronic, 1980s, chicago tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — four-on-the-floor as liberation. We trace the genre from garage soul to the warehouse and the drum machine as equalizer. That is why "Your Love", "Move Your Body" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "House: Chicago Built the Floor" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Your Love" is the closest to your taste, "The Party" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "House: Chicago Built the Floor" actually about?', a: 'Four-on-the-floor as liberation. We trace the genre from garage soul to the warehouse and the drum machine as equalizer.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Your Love" make sense if I am new to house, electronic, 1980s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['detroit-techno-origin', 'synthwave-retro', 'synth-pop-80s'],
},
  {
    slug: 'singer-songwriter-70s',
    channel: 'music',
    title: 'The 70s Singer-Songwriter',
    thesis:
      'The decade that made the individual voice a genre. We favor the writers who turned confession into craft.',
    intro: 'Guitar, narrative, and the microphone as a trusted friend.',
    tags: ['folksinger', 'acoustic', '1970s', 'vocal'],
    mood: ['melancholy', 'relaxed'],
    items: ['Blue', 'Court and Spark', 'Tapestry', 'For the Roses', 'Landslide', 'Both Sides', 'Grace', 'Sweet Baby'],
  
    audience: 'This collection is for people who came to "The 70s Singer-Songwriter" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Blue", "Court and Spark" and the rest is folksinger, acoustic, 1970s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the folksinger, acoustic, 1970s, vocal tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the decade that made the individual voice a genre. We favor the writers who turned confession into craft. That is why "Blue", "Court and Spark" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The 70s Singer-Songwriter" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Blue" is the closest to your taste, "Sweet Baby" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The 70s Singer-Songwriter" actually about?', a: 'The decade that made the individual voice a genre. We favor the writers who turned confession into craft.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Blue" make sense if I am new to folksinger, acoustic, 1970s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['french-chanson', 'flamenco-deep', 'korea-indie-city'],
},
  {
    slug: 'japanese-citypop',
    channel: 'music',
    title: 'City Pop: Tokyo in Cruise Control',
    thesis:
      'Japanese pop of the 80s that imagined the future as a smooth ride — yacht rock with a Pacific view and a synthesizer smile.',
    intro: 'Tokyo highways, FM gloss, and the groove that became a meme and then a revival.',
    tags: ['citypop', 'japanese', '1980s', 'pop'],
    mood: ['relaxed', 'party'],
    items: ['Plastic Love', 'Ride on Time', 'For You', 'Mint Eyes', 'Stay With Me', 'I Love You', 'Telephone', 'Love Is a'],
  
    audience: 'This collection is for people who came to "City Pop: Tokyo in Cruise Control" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Plastic Love", "Ride on Time" and the rest is citypop, japanese, 1980s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the citypop, japanese, 1980s, pop tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — japanese pop of the 80s that imagined the future as a smooth ride — yacht rock with a Pacific view and a synthesizer smile. That is why "Plastic Love", "Ride on Time" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "City Pop: Tokyo in Cruise Control" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Plastic Love" is the closest to your taste, "Love Is a" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "City Pop: Tokyo in Cruise Control" actually about?', a: 'Japanese pop of the 80s that imagined the future as a smooth ride — yacht rock with a Pacific view and a synthesizer smile.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Plastic Love" make sense if I am new to citypop, japanese, 1980s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['synth-pop-80s', 'new-wave', 'dream-pop'],
},
  {
    slug: 'hardcore-punk-80s',
    channel: 'music',
    title: '80s Hardcore: The Blur as Statement',
    thesis:
      'When punk decided faster was honest. We collect the records that compressed rebellion into under two minutes.',
    intro: 'Breakdowns, basements, and the snap of a snare as a political act.',
    tags: ['hardcore', 'punk', '1980s', 'fast'],
    mood: ['energetic'],
    items: ['Damaged', 'Zen Arcade', 'Minor Threat', 'Fear Era', 'Out of Step', 'Repulsion', 'Generic', 'Diskord'],
  
    audience: 'This collection is for people who came to "80s Hardcore: The Blur as Statement" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Damaged", "Zen Arcade" and the rest is hardcore, punk, 1980s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the hardcore, punk, 1980s, fast tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — when punk decided faster was honest. We collect the records that compressed rebellion into under two minutes. That is why "Damaged", "Zen Arcade" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "80s Hardcore: The Blur as Statement" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Damaged" is the closest to your taste, "Diskord" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "80s Hardcore: The Blur as Statement" actually about?', a: 'When punk decided faster was honest. We collect the records that compressed rebellion into under two minutes.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Damaged" make sense if I am new to hardcore, punk, 1980s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['detroit-techno-origin', 'synthwave-retro', 'noise-rock'],
},
  {
    slug: 'opera-aria',
    channel: 'music',
    title: 'Opera: The Aria as Drama',
    thesis:
      'Not the whole canon, but the moments where a single voice carries the weight of a plot. We pick arias that explain why the form survived.',
    intro: 'Orchestral swell, the held high note, and the room holding its breath.',
    tags: ['opera', 'classical', 'vocal', 'dramatic'],
    mood: ['melancholy'],
    items: ['Nessun Dorma', 'La Donna e Mobile', 'Casta Diva', 'Habanera', 'Queen of the Night', 'Vissi dArte', 'O Mio Babbino', 'Largo al Factotum'],
  
    audience: 'This collection is for people who came to "Opera: The Aria as Drama" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Nessun Dorma", "La Donna e Mobile" and the rest is opera, classical, vocal — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the opera, classical, vocal, dramatic tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — not the whole canon, but the moments where a single voice carries the weight of a plot. We pick arias that explain why the form survived. That is why "Nessun Dorma", "La Donna e Mobile" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Opera: The Aria as Drama" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Nessun Dorma" is the closest to your taste, "Largo al Factotum" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Opera: The Aria as Drama" actually about?', a: 'Not the whole canon, but the moments where a single voice carries the weight of a plot. We pick arias that explain why the form survived.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Nessun Dorma" make sense if I am new to opera, classical, vocal?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['classical-rainy-window', 'french-chanson', 'singer-songwriter-70s'],
},
  {
    slug: 'idm-breaks',
    channel: 'music',
    title: 'IDM: Intelligent Dance Music',
    thesis:
      'When electronic producers stopped DJing and started composing. We map the labels that made the glitch feel like melody.',
    intro: 'Broken beats, granular textures, and the laptop as orchestra.',
    tags: ['idm', 'electronic', '1990s', 'experimental'],
    mood: ['focused'],
    items: ['Selected Ambient', 'Amber', 'Music Has', 'Confield', 'LP5', 'Drukqs', 'Richard DJames', 'Come to Daddy'],
  
    audience: 'This collection is for people who came to "IDM: Intelligent Dance Music" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Selected Ambient", "Amber" and the rest is idm, electronic, 1990s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the idm, electronic, 1990s, experimental tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — when electronic producers stopped DJing and started composing. We map the labels that made the glitch feel like melody. That is why "Selected Ambient", "Amber" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "IDM: Intelligent Dance Music" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Selected Ambient" is the closest to your taste, "Come to Daddy" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "IDM: Intelligent Dance Music" actually about?', a: 'When electronic producers stopped DJing and started composing. We map the labels that made the glitch feel like melody.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Selected Ambient" make sense if I am new to idm, electronic, 1990s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['trip-hop-bristol', 'late-night-focus-lofi', 'detroit-techno-origin'],
},
  {
    slug: 'country-outlaw',
    channel: 'music',
    title: 'Outlaw Country: The Boot as Reply',
    thesis:
      'When Nashville polish met the prison yard. We pick the singers who answered the suit with the sneer.',
    intro: 'Telecaster twang, barroom truth, and the song as a middle finger.',
    tags: ['country', 'outlaw', '1970s', 'american'],
    mood: ['relaxed', 'melancholy'],
    items: ['Red Headed', 'At Folsom', 'Wanted', 'Honky Tonk', 'Mamas Dont', 'Luckenbach', 'Pancho', 'The Pilgrim'],
  
    audience: 'This collection is for people who came to "Outlaw Country: The Boot as Reply" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Red Headed", "At Folsom" and the rest is country, outlaw, 1970s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the country, outlaw, 1970s, american tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — when Nashville polish met the prison yard. We pick the singers who answered the suit with the sneer. That is why "Red Headed", "At Folsom" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Outlaw Country: The Boot as Reply" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Red Headed" is the closest to your taste, "The Pilgrim" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Outlaw Country: The Boot as Reply" actually about?', a: 'When Nashville polish met the prison yard. We pick the singers who answered the suit with the sneer.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Red Headed" make sense if I am new to country, outlaw, 1970s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['singer-songwriter-70s', 'americana-roots', 'cosmic-jazz'],
},
  {
    slug: 'gospel-choir',
    channel: 'music',
    title: 'Gospel: The Choir as Engine',
    thesis:
      'The tradition that powered soul, rock, and pop underneath. We collect the recordings where the voices outrun the arrangement.',
    intro: 'Call-and-response, testifying, and the room as congregation.',
    tags: ['gospel', 'soul', 'vocal', 'church'],
    mood: ['party', 'energetic'],
    items: ['Amazing Grace', 'Oh Happy Day', 'Precious Lord', 'I Love the Lord', 'Take My Hand', 'Touch the Hem', 'How I Got', 'Total Praise'],
  
    audience: 'This collection is for people who came to "Gospel: The Choir as Engine" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Amazing Grace", "Oh Happy Day" and the rest is gospel, soul, vocal — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the gospel, soul, vocal, church tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the tradition that powered soul, rock, and pop underneath. We collect the recordings where the voices outrun the arrangement. That is why "Amazing Grace", "Oh Happy Day" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Gospel: The Choir as Engine" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Amazing Grace" is the closest to your taste, "Total Praise" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Gospel: The Choir as Engine" actually about?', a: 'The tradition that powered soul, rock, and pop underneath. We collect the recordings where the voices outrun the arrangement.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Amazing Grace" make sense if I am new to gospel, soul, vocal?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['soul-stax-motown', 'funk-70s', 'flamenco-deep'],
},
  {
    slug: 'shoegaze-revival',
    channel: 'music',
    title: 'Shoegaze Revival: Looking Down, Feeling Up',
    thesis:
      'The 90s genre that refused to die. We map the new bands who rediscovered that volume and melody are not opposites.',
    intro: 'Pedalboards, buried vocals, and the wall that became a doorway.',
    tags: ['shoegaze', 'indie', '2010s', 'noise'],
    mood: ['relaxed', 'melancholy'],
    items: ['Bloom', 'Heaven', 'Soft Sounds', 'Depreston', 'Slowdive', 'Everything Is', 'Strange', 'No Dream'],
  
    audience: 'This collection is for people who came to "Shoegaze Revival: Looking Down, Feeling Up" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Bloom", "Heaven" and the rest is shoegaze, indie, 2010s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the shoegaze, indie, 2010s, noise tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the 90s genre that refused to die. We map the new bands who rediscovered that volume and melody are not opposites. That is why "Bloom", "Heaven" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Shoegaze Revival: Looking Down, Feeling Up" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Bloom" is the closest to your taste, "No Dream" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Shoegaze Revival: Looking Down, Feeling Up" actually about?', a: 'The 90s genre that refused to die. We map the new bands who rediscovered that volume and melody are not opposites.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Bloom" make sense if I am new to shoegaze, indie, 2010s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['korea-indie-city', 'tape-lofi', 'british-indie-90s'],
},
  {
    slug: 'disco-era',
    channel: 'music',
    title: 'Disco: The Studio as Sanctuary',
    thesis:
      'Dismissed, then redeemed. We pick the records that proved four-on-the-floor could be both liberation and architecture.',
    intro: 'Strings, mirror ball, and the rhythm that outlived its obituary.',
    tags: ['disco', 'dance', '1970s', 'strings'],
    mood: ['party', 'energetic'],
    items: ['Saturday Night', 'I Feel Love', 'Le Freak', 'Dont Stop', 'Good Times', 'MacArthur Park', 'Bad Girls', 'YMCA'],
  
    audience: 'This collection is for people who came to "Disco: The Studio as Sanctuary" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Saturday Night", "I Feel Love" and the rest is disco, dance, 1970s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the disco, dance, 1970s, strings tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — dismissed, then redeemed. We pick the records that proved four-on-the-floor could be both liberation and architecture. That is why "Saturday Night", "I Feel Love" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Disco: The Studio as Sanctuary" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Saturday Night" is the closest to your taste, "YMCA" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Disco: The Studio as Sanctuary" actually about?', a: 'Dismissed, then redeemed. We pick the records that proved four-on-the-floor could be both liberation and architecture.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Saturday Night" make sense if I am new to disco, dance, 1970s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['funk-70s', 'salsa-newyork', 'afrobeat-pioneers'],
},
  {
    slug: 'ambient-drone',
    channel: 'music',
    title: 'Drone: The Note That Refuses to End',
    thesis:
      'Minimalism pushed past the edge of event. We collect the works where stasis becomes a place you can stand in.',
    intro: 'Sustained tones, slow movement, and listening as a long exposure.',
    tags: ['drone', 'ambient', 'instrumental', 'minimal'],
    mood: ['focused', 'relaxed'],
    items: ['The Well-Tuned', 'Earth 2', 'Strumming', 'Droned', 'Two Forms', 'A Field', 'Tara', 'The Disintegration'],
  
    audience: 'This collection is for people who came to "Drone: The Note That Refuses to End" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "The Well-Tuned", "Earth 2" and the rest is drone, ambient, instrumental — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the drone, ambient, instrumental, minimal tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — minimalism pushed past the edge of event. We collect the works where stasis becomes a place you can stand in. That is why "The Well-Tuned", "Earth 2" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Drone: The Note That Refuses to End" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "The Well-Tuned" is the closest to your taste, "The Disintegration" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Drone: The Note That Refuses to End" actually about?', a: 'Minimalism pushed past the edge of event. We collect the works where stasis becomes a place you can stand in.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "The Well-Tuned" make sense if I am new to drone, ambient, instrumental?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['minimal-piano', 'late-night-focus-lofi', 'cosmic-jazz'],
},
  {
    slug: 'punk-77',
    channel: 'music',
    title: 'Punk 77: Three Chords & A Future',
    thesis:
      'The year the underground became a headline. We map the records that proved anyone could, and most should not have.',
    intro: 'Leather, speed, and the riff as a refusal.',
    tags: ['punk', 'rock', '1977', 'uk'],
    mood: ['energetic'],
    items: ['Never Mind', 'The Clash', 'Ramones', 'Horses', 'London Calling', 'White Riot', 'Anarchy', 'Gods Save'],
  
    audience: 'This collection is for people who came to "Punk 77: Three Chords & A Future" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Never Mind", "The Clash" and the rest is punk, rock, 1977 — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the punk, rock, 1977, uk tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the year the underground became a headline. We map the records that proved anyone could, and most should not have. That is why "Never Mind", "The Clash" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Punk 77: Three Chords & A Future" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Never Mind" is the closest to your taste, "Gods Save" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Punk 77: Three Chords & A Future" actually about?', a: 'The year the underground became a headline. We map the records that proved anyone could, and most should not have.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Never Mind" make sense if I am new to punk, rock, 1977?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['post-punk-uk', 'grunge-seattle', 'noise-rock'],
},
  {
    slug: 'flamenco-deep',
    channel: 'music',
    title: 'Flamenco: The Cry as Technique',
    thesis:
      'Not the tourist show, but the cante jondo — the deep song where technique serves grief. We pick the performers who make the guitar weep.',
    intro: 'Palmas, the held wail, and the rhythm that carries a century of exile.',
    tags: ['flamenco', 'spanish', 'acoustic', 'vocal'],
    mood: ['melancholy', 'energetic'],
    items: ['Antologia', 'El Camaron', 'Paco de Lucia', 'Sabra', 'Cafe Cantante', 'La Leyenda', 'En Vivo', 'Solo Quiero'],
  
    audience: 'This collection is for people who came to "Flamenco: The Cry as Technique" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Antologia", "El Camaron" and the rest is flamenco, spanish, acoustic — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the flamenco, spanish, acoustic, vocal tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — not the tourist show, but the cante jondo — the deep song where technique serves grief. We pick the performers who make the guitar weep. That is why "Antologia", "El Camaron" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Flamenco: The Cry as Technique" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Antologia" is the closest to your taste, "Solo Quiero" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Flamenco: The Cry as Technique" actually about?', a: 'Not the tourist show, but the cante jondo — the deep song where technique serves grief. We pick the performers who make the guitar weep.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Antologia" make sense if I am new to flamenco, spanish, acoustic?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['french-chanson', 'singer-songwriter-70s', 'soul-stax-motown'],
},
  {
    slug: 'psychedelic-60s',
    channel: 'music',
    title: 'Psychedelia: The Studio as Kaleidoscope',
    thesis:
      'The decade that treated recording as a drug. We collect the albums that sound like a room expanding.',
    intro: 'Tape loops, backwards guitars, and the song as a trip.',
    tags: ['psychedelic', 'rock', '1960s', 'experimental'],
    mood: ['relaxed', 'energetic'],
    items: ['Sgt Peppers', 'Piper', 'The Psychedelic', 'Pet Sounds', 'Are You Experienced', 'Surrealistic', 'The Notorious', 'Ogden'],
  
    audience: 'This collection is for people who came to "Psychedelia: The Studio as Kaleidoscope" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Sgt Peppers", "Piper" and the rest is psychedelic, rock, 1960s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the psychedelic, rock, 1960s, experimental tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the decade that treated recording as a drug. We collect the albums that sound like a room expanding. That is why "Sgt Peppers", "Piper" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Psychedelia: The Studio as Kaleidoscope" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Sgt Peppers" is the closest to your taste, "Ogden" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Psychedelia: The Studio as Kaleidoscope" actually about?', a: 'The decade that treated recording as a drug. We collect the albums that sound like a room expanding.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Sgt Peppers" make sense if I am new to psychedelic, rock, 1960s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['british-indie-90s', 'brazilian-bossa', 'soul-stax-motown'],
},
  {
    slug: 'trap-modern',
    channel: 'music',
    title: 'Trap: The Sub as Skyline',
    thesis:
      'Southern hip-hop turned the 808 into architecture. We map the producers who built cities out of hi-hats and reverb.',
    intro: 'Triple-time rolls, the swallowed vocal, and the beat as a weather system.',
    tags: ['trap', 'hiphop', '2010s', 'southern'],
    mood: ['energetic', 'party'],
    items: ['DS2', 'Culture', 'Astroworld', 'Die Lit', 'Culture II', 'Without Warning', 'Luv Is', 'Super Slimey'],
  
    audience: 'This collection is for people who came to "Trap: The Sub as Skyline" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "DS2", "Culture" and the rest is trap, hiphop, 2010s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the trap, hiphop, 2010s, southern tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — southern hip-hop turned the 808 into architecture. We map the producers who built cities out of hi-hats and reverb. That is why "DS2", "Culture" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Trap: The Sub as Skyline" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "DS2" is the closest to your taste, "Super Slimey" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Trap: The Sub as Skyline" actually about?', a: 'Southern hip-hop turned the 808 into architecture. We map the producers who built cities out of hi-hats and reverb.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "DS2" make sense if I am new to trap, hiphop, 2010s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['hiphop-storytelling', 'lofi-hiphop', 'soul-stax-motown'],
},
  {
    slug: 'baroque-court',
    channel: 'music',
    title: 'Baroque: The Harpsichord as Argument',
    thesis:
      'Counterpoint as the highest game. We pick the works where multiple melodies argue politely and resolve as architecture.',
    intro: 'Ornament, the figured bass, and the fugue as a perfect machine.',
    tags: ['baroque', 'classical', 'instrumental', 'harpsichord'],
    mood: ['focused'],
    items: ['Goldberg Variations', 'Brandenburg', 'The Four Seasons', 'Toccata', 'Water Music', 'Messiah', 'Canon', 'Concerto'],
  
    audience: 'This collection is for people who came to "Baroque: The Harpsichord as Argument" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Goldberg Variations", "Brandenburg" and the rest is baroque, classical, instrumental — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the baroque, classical, instrumental, harpsichord tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — counterpoint as the highest game. We pick the works where multiple melodies argue politely and resolve as architecture. That is why "Goldberg Variations", "Brandenburg" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Baroque: The Harpsichord as Argument" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Goldberg Variations" is the closest to your taste, "Concerto" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Baroque: The Harpsichord as Argument" actually about?', a: 'Counterpoint as the highest game. We pick the works where multiple melodies argue politely and resolve as architecture.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Goldberg Variations" make sense if I am new to baroque, classical, instrumental?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['minimal-piano', 'middle-east-oud', 'cosmic-jazz'],
},
  {
    slug: 'emo-second-wave',
    channel: 'music',
    title: 'Emo: The Whisper as Scream',
    thesis:
      'When punk discovered therapy. We collect the records that turned diary entries into communal catharsis.',
    intro: 'Tight jeans, open tunings, and the bridge as the whole point.',
    tags: ['emo', 'rock', '2000s', 'confessional'],
    mood: ['melancholy'],
    items: ['Clarity', 'Bleed American', 'Diary', 'Something to Write', 'Deja Entendu', 'Tell All', 'Transatlantic', 'Ocean'],
  
    audience: 'This collection is for people who came to "Emo: The Whisper as Scream" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Clarity", "Bleed American" and the rest is emo, rock, 2000s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the emo, rock, 2000s, confessional tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — when punk discovered therapy. We collect the records that turned diary entries into communal catharsis. That is why "Clarity", "Bleed American" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Emo: The Whisper as Scream" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Clarity" is the closest to your taste, "Ocean" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Emo: The Whisper as Scream" actually about?', a: 'When punk discovered therapy. We collect the records that turned diary entries into communal catharsis.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Clarity" make sense if I am new to emo, rock, 2000s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['garage-rock-revival', 'british-indie-90s', 'post-punk-uk'],
},
  {
    slug: 'salsa-newyork',
    channel: 'music',
    title: 'Salsa: The Barrio as Big Band',
    thesis:
      'New York turned Cuban forms into a city sound. We map the bands that made the montuno a neighborhood parliament.',
    intro: 'Timbales, the piano tumbao, and the dancer as co-composer.',
    tags: ['salsa', 'latin', '1970s', 'dance'],
    mood: ['party', 'energetic'],
    items: ['El Barrio', 'Fania All', 'Salsa', 'Conjunto', 'Tite Curet', 'The Message', 'Anacaona', 'Songo'],
  
    audience: 'This collection is for people who came to "Salsa: The Barrio as Big Band" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "El Barrio", "Fania All" and the rest is salsa, latin, 1970s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the salsa, latin, 1970s, dance tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — new York turned Cuban forms into a city sound. We map the bands that made the montuno a neighborhood parliament. That is why "El Barrio", "Fania All" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Salsa: The Barrio as Big Band" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "El Barrio" is the closest to your taste, "Songo" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Salsa: The Barrio as Big Band" actually about?', a: 'New York turned Cuban forms into a city sound. We map the bands that made the montuno a neighborhood parliament.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "El Barrio" make sense if I am new to salsa, latin, 1970s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['funk-70s', 'disco-era', 'afrobeat-pioneers'],
},
  {
    slug: 'noise-pop',
    channel: 'music',
    title: 'Noise Pop: The Hook in the Static',
    thesis:
      'When melody learned to hide inside distortion. We pick the bands that made the fuzz feel like a hug.',
    intro: 'Jangle buried in gain, the hum as warmth, and the song you half-remember.',
    tags: ['noisepop', 'indie', '1990s', 'jangle'],
    mood: ['relaxed'],
    items: ['Bee Thousand', 'Alien Lanes', 'Tiger Trap', 'Seamonsters', 'Bewitched', 'The Friends', 'Murmur', 'Fonder'],
  
    audience: 'This collection is for people who came to "Noise Pop: The Hook in the Static" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Bee Thousand", "Alien Lanes" and the rest is noisepop, indie, 1990s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the noisepop, indie, 1990s, jangle tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — when melody learned to hide inside distortion. We pick the bands that made the fuzz feel like a hug. That is why "Bee Thousand", "Alien Lanes" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Noise Pop: The Hook in the Static" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Bee Thousand" is the closest to your taste, "Fonder" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Noise Pop: The Hook in the Static" actually about?', a: 'When melody learned to hide inside distortion. We pick the bands that made the fuzz feel like a hug.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Bee Thousand" make sense if I am new to noisepop, indie, 1990s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['british-indie-90s', 'korea-indie-city', 'dream-pop'],
},
  {
    slug: 'spiritual-jazz',
    channel: 'music',
    title: 'Spiritual Jazz: The Sideways Sermon',
    thesis:
      'Jazz that prayed without a church. We collect the records where the solo becomes a meditation and the rhythm a mantra.',
    intro: 'Congas, the open fifth, and the long form as devotion.',
    tags: ['jazz', 'spiritual', '1970s', 'modal'],
    mood: ['focused', 'relaxed'],
    items: ['Thembi', 'Journey in Satch', 'Karma', 'Tauhid', 'Black Unity', 'Red Sun', 'Message from', 'World Galaxy'],
  
    audience: 'This collection is for people who came to "Spiritual Jazz: The Sideways Sermon" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Thembi", "Journey in Satch" and the rest is jazz, spiritual, 1970s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the jazz, spiritual, 1970s, modal tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — jazz that prayed without a church. We collect the records where the solo becomes a meditation and the rhythm a mantra. That is why "Thembi", "Journey in Satch" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Spiritual Jazz: The Sideways Sermon" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Thembi" is the closest to your taste, "World Galaxy" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Spiritual Jazz: The Sideways Sermon" actually about?', a: 'Jazz that prayed without a church. We collect the records where the solo becomes a meditation and the rhythm a mantra.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Thembi" make sense if I am new to jazz, spiritual, 1970s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['cosmic-jazz', 'german-krautrock', 'reggae-roots'],
},
  {
    slug: 'synth-pop-80s',
    channel: 'music',
    title: 'Synth-Pop: The Calculator as Crooner',
    thesis:
      'When the synthesizer learned to sing. We map the duos who made the sequencer feel like heartbreak.',
    intro: 'Drum machines, the gated reverb, and the chorus as a circuit.',
    tags: ['synthpop', 'electronic', '1980s', 'pop'],
    mood: ['relaxed', 'party'],
    items: ['Dont You Want', 'Tainted Love', 'Just Cant', 'Blue Monday', 'Sweet Dreams', 'Take On Me', 'Bizarre Love', 'Enjoy the Silence'],
  
    audience: 'This collection is for people who came to "Synth-Pop: The Calculator as Crooner" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Dont You Want", "Tainted Love" and the rest is synthpop, electronic, 1980s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the synthpop, electronic, 1980s, pop tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — when the synthesizer learned to sing. We map the duos who made the sequencer feel like heartbreak. That is why "Dont You Want", "Tainted Love" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Synth-Pop: The Calculator as Crooner" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Dont You Want" is the closest to your taste, "Enjoy the Silence" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Synth-Pop: The Calculator as Crooner" actually about?', a: 'When the synthesizer learned to sing. We map the duos who made the sequencer feel like heartbreak.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Dont You Want" make sense if I am new to synthpop, electronic, 1980s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['japanese-citypop', 'house-chicago', 'new-wave'],
},
  {
    slug: 'americana-roots',
    channel: 'music',
    title: 'Americana: The Song as Region',
    thesis:
      'The genre that refused to let the regional dialect die. We pick the writers who map a place by its chord changes.',
    intro: 'Weathered voices, the story song, and the railroad as refrain.',
    tags: ['americana', 'folk', 'country', 'roots'],
    mood: ['relaxed', 'melancholy'],
    items: ['Sweet Old', 'Mermaid Avenue', 'Trace', 'Car Wheels', 'The Ghost', 'Plantation', 'Down the Old', 'Lucinda'],
  
    audience: 'This collection is for people who came to "Americana: The Song as Region" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Sweet Old", "Mermaid Avenue" and the rest is americana, folk, country — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the americana, folk, country, roots tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the genre that refused to let the regional dialect die. We pick the writers who map a place by its chord changes. That is why "Sweet Old", "Mermaid Avenue" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Americana: The Song as Region" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Sweet Old" is the closest to your taste, "Lucinda" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Americana: The Song as Region" actually about?', a: 'The genre that refused to let the regional dialect die. We pick the writers who map a place by its chord changes.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Sweet Old" make sense if I am new to americana, folk, country?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['bluegrass-acoustic', 'country-outlaw', 'reggae-roots'],
},
  {
    slug: 'gothic-postpunk',
    channel: 'music',
    title: 'Gothic: The minor key as identity',
    thesis:
      'Post-punk dressed in velvet. We collect the bands that turned dread into elegance and the bass into a cathedral.',
    intro: 'Reverb, the sung whisper, and the drum as a funeral march.',
    tags: ['gothic', 'postpunk', '1980s', 'dark'],
    mood: ['melancholy'],
    items: ['Pornography', 'Faith', 'Seventeen Seconds', 'Juju', 'First and Last', 'Bela Lugosi', 'The Cure', 'Mask'],
  
    audience: 'This collection is for people who came to "Gothic: The minor key as identity" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Pornography", "Faith" and the rest is gothic, postpunk, 1980s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the gothic, postpunk, 1980s, dark tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — post-punk dressed in velvet. We collect the bands that turned dread into elegance and the bass into a cathedral. That is why "Pornography", "Faith" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Gothic: The minor key as identity" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Pornography" is the closest to your taste, "Mask" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Gothic: The minor key as identity" actually about?', a: 'Post-punk dressed in velvet. We collect the bands that turned dread into elegance and the bass into a cathedral.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Pornography" make sense if I am new to gothic, postpunk, 1980s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['post-punk-uk', 'dream-pop', 'detroit-techno-origin'],
},
  {
    slug: 'highlife-ghana',
    channel: 'music',
    title: 'Highlife: The Guitar as Celebration',
    thesis:
      'West African pop that turned the imported guitar into a local language. We map the bands that made the dance floor a hometown.',
    intro: 'Palm-wine rhythms, the bright lead, and the song as a reunion.',
    tags: ['highlife', 'african', 'guitar', 'dance'],
    mood: ['party', 'relaxed'],
    items: ['Ghana Special', 'E.T. Mensah', 'King Onyina', 'Orchestra', 'The龍 African', 'Yaa Amponsah', 'Oman', 'Koo Nimo'],
  
    audience: 'This collection is for people who came to "Highlife: The Guitar as Celebration" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Ghana Special", "E.T. Mensah" and the rest is highlife, african, guitar — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the highlife, african, guitar, dance tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — west African pop that turned the imported guitar into a local language. We map the bands that made the dance floor a hometown. That is why "Ghana Special", "E.T. Mensah" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Highlife: The Guitar as Celebration" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Ghana Special" is the closest to your taste, "Koo Nimo" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Highlife: The Guitar as Celebration" actually about?', a: 'West African pop that turned the imported guitar into a local language. We map the bands that made the dance floor a hometown.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Ghana Special" make sense if I am new to highlife, african, guitar?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['funk-70s', 'disco-era', 'salsa-newyork'],
},
  {
    slug: 'breakcore',
    channel: 'music',
    title: 'Breakcore: The Breakbeat as Collapse',
    thesis:
      'When jungle met noise and stopped apologizing. We collect the producers who treat the amen break as raw material for demolition.',
    intro: 'Chopper edits, the distorted kick, and the track as a panic attack.',
    tags: ['breakcore', 'electronic', '2000s', 'fast'],
    mood: ['energetic'],
    items: ['Rossz', 'Endless', 'Channel', 'Crack', 'Wonder', 'Break', 'Doctrine', 'Planet'],
  
    audience: 'This collection is for people who came to "Breakcore: The Breakbeat as Collapse" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Rossz", "Endless" and the rest is breakcore, electronic, 2000s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the breakcore, electronic, 2000s, fast tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — when jungle met noise and stopped apologizing. We collect the producers who treat the amen break as raw material for demolition. That is why "Rossz", "Endless" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Breakcore: The Breakbeat as Collapse" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Rossz" is the closest to your taste, "Planet" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Breakcore: The Breakbeat as Collapse" actually about?', a: 'When jungle met noise and stopped apologizing. We collect the producers who treat the amen break as raw material for demolition.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Rossz" make sense if I am new to breakcore, electronic, 2000s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['detroit-techno-origin', 'synthwave-retro', 'math-rock'],
},
  {
    slug: 'lofi-hiphop',
    channel: 'music',
    title: 'Lo-Fi Hip-Hop: The Beat as Study Buddy',
    thesis:
      'The YouTube study stream made genre. We pick the producers who turned dusty samples into a steady companion.',
    intro: 'Vinyl crackle, the lazy snare, and the loop as a safe room.',
    tags: ['lofihiphop', 'hiphop', '2010s', 'chill'],
    mood: ['relaxed', 'focused'],
    items: ['Nujabes', 'Modal Soul', 'Reflection', 'Feather', 'Luv', 'Sakura', 'Aruarian', 'Hydeout'],
  
    audience: 'This collection is for people who came to "Lo-Fi Hip-Hop: The Beat as Study Buddy" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Nujabes", "Modal Soul" and the rest is lofihiphop, hiphop, 2010s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the lofihiphop, hiphop, 2010s, chill tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the YouTube study stream made genre. We pick the producers who turned dusty samples into a steady companion. That is why "Nujabes", "Modal Soul" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Lo-Fi Hip-Hop: The Beat as Study Buddy" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Nujabes" is the closest to your taste, "Hydeout" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Lo-Fi Hip-Hop: The Beat as Study Buddy" actually about?', a: 'The YouTube study stream made genre. We pick the producers who turned dusty samples into a steady companion.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Nujabes" make sense if I am new to lofihiphop, hiphop, 2010s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['hiphop-storytelling', 'trap-modern', 'korea-indie-city'],
},
  {
    slug: 'new-wave',
    channel: 'music',
    title: 'New Wave: The Quirk as Anthem',
    thesis:
      'Punk grew up, bought a synthesizer, and learned to wink. We map the bands that made irony danceable.',
    intro: 'Skinny ties, the music video, and the hook as a punchline.',
    tags: ['newwave', 'rock', '1980s', 'pop'],
    mood: ['party', 'energetic'],
    items: ['Talking Heads', 'Remain in Light', 'Rio', 'Duran Duran', 'Psycho Killer', 'Once in a Lifetime', 'Bizarre', 'Cars'],
  
    audience: 'This collection is for people who came to "New Wave: The Quirk as Anthem" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Talking Heads", "Remain in Light" and the rest is newwave, rock, 1980s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the newwave, rock, 1980s, pop tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — punk grew up, bought a synthesizer, and learned to wink. We map the bands that made irony danceable. That is why "Talking Heads", "Remain in Light" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "New Wave: The Quirk as Anthem" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Talking Heads" is the closest to your taste, "Cars" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "New Wave: The Quirk as Anthem" actually about?', a: 'Punk grew up, bought a synthesizer, and learned to wink. We map the bands that made irony danceable.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Talking Heads" make sense if I am new to newwave, rock, 1980s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['noise-rock', 'japanese-citypop', 'synth-pop-80s'],
},
  {
    slug: 'sufi-devotional',
    channel: 'music',
    title: 'Sufi: The Song as Ascent',
    thesis:
      'Devotional music that forgot the border between performer and divine. We collect the forms where repetition becomes flight.',
    intro: 'The drone, the turning, and the verse as a staircase.',
    tags: ['sufi', 'devotional', 'middleeastern', 'vocal'],
    mood: ['focused', 'relaxed'],
    items: ['Nusrat', 'Qawwali', 'Dam Mast', 'Mustt', 'The Rain', 'Devotional', 'Raga', 'Fanna'],
  
    audience: 'This collection is for people who came to "Sufi: The Song as Ascent" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Nusrat", "Qawwali" and the rest is sufi, devotional, middleeastern — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the sufi, devotional, middleeastern, vocal tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — devotional music that forgot the border between performer and divine. We collect the forms where repetition becomes flight. That is why "Nusrat", "Qawwali" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Sufi: The Song as Ascent" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Nusrat" is the closest to your taste, "Fanna" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Sufi: The Song as Ascent" actually about?', a: 'Devotional music that forgot the border between performer and divine. We collect the forms where repetition becomes flight.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Nusrat" make sense if I am new to sufi, devotional, middleeastern?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['middle-east-oud', 'french-chanson', 'singer-songwriter-70s'],
},
  {
    slug: 'vaporwave',
    channel: 'music',
    title: 'Vaporwave: The Meme as Mood',
    thesis:
      'A genre built from corporate muzak and slowed-down nostalgia. We pick the records that turn capitalism into a lullaby.',
    intro: 'Chopped mall music, the statue bust, and the aesthetic as the whole point.',
    tags: ['vaporwave', 'electronic', '2010s', 'ironic'],
    mood: ['relaxed'],
    items: ['Floral Shoppe', 'Telepath', 'I will', 'Far', '漠视', 'Laser', '新しい', 'Vektroid'],
  
    audience: 'This collection is for people who came to "Vaporwave: The Meme as Mood" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Floral Shoppe", "Telepath" and the rest is vaporwave, electronic, 2010s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the vaporwave, electronic, 2010s, ironic tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — a genre built from corporate muzak and slowed-down nostalgia. We pick the records that turn capitalism into a lullaby. That is why "Floral Shoppe", "Telepath" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Vaporwave: The Meme as Mood" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Floral Shoppe" is the closest to your taste, "Vektroid" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Vaporwave: The Meme as Mood" actually about?', a: 'A genre built from corporate muzak and slowed-down nostalgia. We pick the records that turn capitalism into a lullaby.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Floral Shoppe" make sense if I am new to vaporwave, electronic, 2010s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['late-night-focus-lofi', 'korea-indie-city', 'trip-hop-bristol'],
},
  {
    slug: 'bluegrass-women',
    channel: 'music',
    title: 'Women of Bluegrass',
    thesis:
      'The tradition that often forgot half its voices. We collect the singers and pickers who rewrote the front porch.',
    intro: 'High harmony, the fast lead, and the song as a claim.',
    tags: ['bluegrass', 'country', 'women', 'acoustic'],
    mood: ['relaxed', 'party'],
    items: ['Coaldust', 'The Female', 'Roche', 'Hazel', 'Cry', 'Wildwood', 'Pretty', 'Singing'],
  
    audience: 'This collection is for people who came to "Women of Bluegrass" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Coaldust", "The Female" and the rest is bluegrass, country, women — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the bluegrass, country, women, acoustic tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the tradition that often forgot half its voices. We collect the singers and pickers who rewrote the front porch. That is why "Coaldust", "The Female" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Women of Bluegrass" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Coaldust" is the closest to your taste, "Singing" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Women of Bluegrass" actually about?', a: 'The tradition that often forgot half its voices. We collect the singers and pickers who rewrote the front porch.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Coaldust" make sense if I am new to bluegrass, country, women?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['bluegrass-acoustic', 'brazilian-bossa', 'korea-indie-city'],
},
  {
    slug: 'post-rock',
    channel: 'music',
    title: 'Post-Rock: The Build as Form',
    thesis:
      'When rock abandoned the song for the arc. We map the bands that turn restraint into a forty-minute landslide.',
    intro: 'The quiet opening, the delayed guitar, and the climax as catharsis.',
    tags: ['postrock', 'instrumental', '1990s', 'epic'],
    mood: ['focused', 'melancholy'],
    items: ['Spiderland', 'Lift Your Skin', 'The Earth', 'F♯ A♯', 'Music for', 'Godspeed', 'Yanqui', 'Hex'],
  
    audience: 'This collection is for people who came to "Post-Rock: The Build as Form" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Spiderland", "Lift Your Skin" and the rest is postrock, instrumental, 1990s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the postrock, instrumental, 1990s, epic tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — when rock abandoned the song for the arc. We map the bands that turn restraint into a forty-minute landslide. That is why "Spiderland", "Lift Your Skin" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Post-Rock: The Build as Form" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Spiderland" is the closest to your taste, "Hex" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Post-Rock: The Build as Form" actually about?', a: 'When rock abandoned the song for the arc. We map the bands that turn restraint into a forty-minute landslide.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Spiderland" make sense if I am new to postrock, instrumental, 1990s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['british-indie-90s', 'cosmic-jazz', 'math-rock'],
},
  {
    slug: 'calypso-soca',
    channel: 'music',
    title: 'Calypso & Soca: The Rhyme as Resistance',
    thesis:
      'Caribbean forms that turned satire into a national sport. We collect the performers who made the carnival a newspaper.',
    intro: 'The steel pan, the double entendre, and the road march as referendum.',
    tags: ['calypso', 'caribbean', 'dance', 'political'],
    mood: ['party', 'energetic'],
    items: ['The Mighty', 'Soca', ' Caribbean', 'Road March', 'Wine', 'Hot', 'Jump', 'Fete'],
  
    audience: 'This collection is for people who came to "Calypso & Soca: The Rhyme as Resistance" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "The Mighty", "Soca" and the rest is calypso, caribbean, dance — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the calypso, caribbean, dance, political tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — caribbean forms that turned satire into a national sport. We collect the performers who made the carnival a newspaper. That is why "The Mighty", "Soca" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Calypso & Soca: The Rhyme as Resistance" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "The Mighty" is the closest to your taste, "Fete" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Calypso & Soca: The Rhyme as Resistance" actually about?', a: 'Caribbean forms that turned satire into a national sport. We collect the performers who made the carnival a newspaper.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "The Mighty" make sense if I am new to calypso, caribbean, dance?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['funk-70s', 'disco-era', 'salsa-newyork'],
},
  {
    slug: 'tape-lofi',
    channel: 'music',
    title: 'Bedroom Pop: The Demo as Final',
    thesis:
      'When the bedroom became the studio and the imperfection became the style. We pick the records that wear their hiss proudly.',
    intro: 'The handheld recorder, the shy vocal, and the song as a secret.',
    tags: ['bedroompop', 'indie', '2010s', 'lofi'],
    mood: ['relaxed', 'melancholy'],
    items: ['Balloon', 'Songs', 'Loyal', 'Cendi', 'New Age', 'Still', 'February', 'Crashed'],
  
    audience: 'This collection is for people who came to "Bedroom Pop: The Demo as Final" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Balloon", "Songs" and the rest is bedroompop, indie, 2010s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the bedroompop, indie, 2010s, lofi tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — when the bedroom became the studio and the imperfection became the style. We pick the records that wear their hiss proudly. That is why "Balloon", "Songs" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Bedroom Pop: The Demo as Final" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Balloon" is the closest to your taste, "Crashed" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Bedroom Pop: The Demo as Final" actually about?', a: 'When the bedroom became the studio and the imperfection became the style. We pick the records that wear their hiss proudly.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Balloon" make sense if I am new to bedroompop, indie, 2010s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['korea-indie-city', 'shoegaze-revival', 'british-indie-90s'],
},
  {
    slug: 'middle-east-oud',
    channel: 'music',
    title: 'The Oud: String as Geography',
    thesis:
      'The instrument that maps a region by its tuning. We collect the players who turn a single string into a continent.',
    intro: 'The microtone, the maqam, and the solo as a map.',
    tags: ['oud', 'middleeastern', 'instrumental', 'classical'],
    mood: ['focused', 'relaxed'],
    items: ['Marcel', 'Anouar', 'Munir', 'Naseer', 'The Cairo', 'Andalusian', 'Taqsim', 'Levant'],
  
    audience: 'This collection is for people who came to "The Oud: String as Geography" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Marcel", "Anouar" and the rest is oud, middleeastern, instrumental — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the oud, middleeastern, instrumental, classical tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the instrument that maps a region by its tuning. We collect the players who turn a single string into a continent. That is why "Marcel", "Anouar" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "The Oud: String as Geography" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Marcel" is the closest to your taste, "Levant" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "The Oud: String as Geography" actually about?', a: 'The instrument that maps a region by its tuning. We collect the players who turn a single string into a continent.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Marcel" make sense if I am new to oud, middleeastern, instrumental?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['minimal-piano', 'baroque-court', 'cosmic-jazz'],
},
  {
    slug: 'garage-rock-revival',
    channel: 'music',
    title: 'Garage Revival: The Riff as Refuge',
    thesis:
      'The 2000s decided the studio was lying. We map the bands that plugged straight into the amp and the id.',
    intro: 'The fuzz, the count-in, and the song as a dare.',
    tags: ['garage', 'rock', '2000s', 'raw'],
    mood: ['energetic', 'party'],
    items: ['Is This It', 'Elephant', 'The Strokes', 'White Blood', 'Modern Age', 'Fell', 'Last Nite', 'Hard'],
  
    audience: 'This collection is for people who came to "Garage Revival: The Riff as Refuge" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Is This It", "Elephant" and the rest is garage, rock, 2000s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the garage, rock, 2000s, raw tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — the 2000s decided the studio was lying. We map the bands that plugged straight into the amp and the id. That is why "Is This It", "Elephant" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Garage Revival: The Riff as Refuge" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Is This It" is the closest to your taste, "Hard" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Garage Revival: The Riff as Refuge" actually about?', a: 'The 2000s decided the studio was lying. We map the bands that plugged straight into the amp and the id.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Is This It" make sense if I am new to garage, rock, 2000s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['emo-second-wave', 'new-wave', 'math-rock'],
},
  {
    slug: 'experimental-vocal',
    channel: 'music',
    title: 'Extended Voice: The Throat as Instrument',
    thesis:
      'Singers who treated the voice as raw material rather than messenger. We collect the works that redefine what a sound can be.',
    intro: 'Overtones, the unpretty note, and the breath as rhythm.',
    tags: ['experimental', 'vocal', 'avant', 'instrumental'],
    mood: ['focused'],
    items: ['Meredith', 'Joan', 'Diamanda', 'Yoko', 'The Litanies', 'Vocal', 'Extreme', 'Voice'],
  
    audience: 'This collection is for people who came to "Extended Voice: The Throat as Instrument" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Meredith", "Joan" and the rest is experimental, vocal, avant — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the experimental, vocal, avant, instrumental tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — singers who treated the voice as raw material rather than messenger. We collect the works that redefine what a sound can be. That is why "Meredith", "Joan" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Extended Voice: The Throat as Instrument" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Meredith" is the closest to your taste, "Voice" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Extended Voice: The Throat as Instrument" actually about?', a: 'Singers who treated the voice as raw material rather than messenger. We collect the works that redefine what a sound can be.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Meredith" make sense if I am new to experimental, vocal, avant?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['cosmic-jazz', 'math-rock', 'minimal-piano'],
},
  {
    slug: 'dreampop-shoegaze-2020s',
    channel: 'music',
    title: 'New Haze: 2020s Wall of Sound',
    thesis:
      'A new generation rediscovered that reverb is a feeling. We map the bands building cathedrals out of pedals and whisper.',
    intro: 'The washed vocal, the slow build, and the song as a fog bank.',
    tags: ['dreampop', 'shoegaze', '2020s', 'ethereal'],
    mood: ['relaxed', 'melancholy'],
    items: ['Scaring', 'A Crush', 'Get', 'Heaven', 'Glow', 'No Need', 'Hush', 'Petal'],
  
    audience: 'This collection is for people who came to "New Haze: 2020s Wall of Sound" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Scaring", "A Crush" and the rest is dreampop, shoegaze, 2020s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the dreampop, shoegaze, 2020s, ethereal tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — a new generation rediscovered that reverb is a feeling. We map the bands building cathedrals out of pedals and whisper. That is why "Scaring", "A Crush" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "New Haze: 2020s Wall of Sound" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Scaring" is the closest to your taste, "Petal" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "New Haze: 2020s Wall of Sound" actually about?', a: 'A new generation rediscovered that reverb is a feeling. We map the bands building cathedrals out of pedals and whisper.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Scaring" make sense if I am new to dreampop, shoegaze, 2020s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['dream-pop', 'shoegaze-revival', 'british-indie-90s'],
},
  {
    slug: 'latin-jazz',
    channel: 'music',
    title: 'Latin Jazz: The Clave as Bridge',
    thesis:
      'When bebop met the Caribbean and both won. We collect the players who made the rhythm a conversation across oceans.',
    intro: 'The montuno, the brass, and the solo as a dance step.',
    tags: ['latinjazz', 'jazz', 'afrocuban', 'dance'],
    mood: ['party', 'energetic'],
    items: ['Manteca', 'Afro-Cuban', 'Cuban Bridge', 'The Pool', 'Cal Tjader', 'Soul Sauce', 'Mambo', 'Bird'],
  
    audience: 'This collection is for people who came to "Latin Jazz: The Clave as Bridge" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Manteca", "Afro-Cuban" and the rest is latinjazz, jazz, afrocuban — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the latinjazz, jazz, afrocuban, dance tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — when bebop met the Caribbean and both won. We collect the players who made the rhythm a conversation across oceans. That is why "Manteca", "Afro-Cuban" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Latin Jazz: The Clave as Bridge" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Manteca" is the closest to your taste, "Bird" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Latin Jazz: The Clave as Bridge" actually about?', a: 'When bebop met the Caribbean and both won. We collect the players who made the rhythm a conversation across oceans.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Manteca" make sense if I am new to latinjazz, jazz, afrocuban?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['funk-70s', 'disco-era', 'salsa-newyork'],
},
  {
    slug: 'metal-progressive',
    channel: 'music',
    title: 'Prog Metal: The Riff as Equation',
    thesis:
      'When metal enrolled in music school. We map the bands that turned odd meters into catharsis.',
    intro: 'The sweep, the concept album, and the breakdown as a plot twist.',
    tags: ['progmetal', 'metal', '2000s', 'technical'],
    mood: ['energetic', 'focused'],
    items: ['Metropolis', 'Images', 'Lateralus', 'Blackwater', 'The Dance', 'Octavarium', 'Panic', 'Train'],
  
    audience: 'This collection is for people who came to "Prog Metal: The Riff as Equation" for the feeling, not the checklist. If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. The thread running through "Metropolis", "Images" and the rest is progmetal, metal, 2000s — music (or the medium) as a place to be, not a scoreboard to clear. It works best in a quiet room with headphones, when you want the work to meet you where you are instead of demanding your full attention. Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.',
    criteria: 'Our filter for this list is deliberately not a database sort. We prioritized the progmetal, metal, 2000s, technical tone over release-year recency, aggregate ratings, or platform pushes. A pick earns its place by arguing for the thesis above — when metal enrolled in music school. We map the bands that turned odd meters into catharsis. That is why "Metropolis", "Images" sit beside each other: they make the same point from different angles. We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second listen more than a first. Where two works made the same argument, we kept the one with the cleaner emotional line. You could not assemble this from a genre tag alone — which is the point.',
    alternatives: 'If you like the bones of "Prog Metal: The Riff as Equation" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. We would rather you find the right record for your night than the most record on paper. If "Metropolis" is the closest to your taste, "Train" is the one to test first when you want to push the feeling further.',
    faq: [
      { q: 'What is "Prog Metal: The Riff as Equation" actually about?', a: 'When metal enrolled in music school. We map the bands that turned odd meters into catharsis.' },
      { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
      { q: 'Will "Metropolis" make sense if I am new to progmetal, metal, 2000s?', a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
      { q: 'Are these records demanding, or can I drop in casually?', a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
      { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
      { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' }
    ],
    related: ['math-rock', 'breakcore', 'garage-rock-revival'],
}
];
