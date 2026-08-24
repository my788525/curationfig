// 情绪中枢专题（cross-medium "Find media by mood & theme" 定位核心武器）
// 每个专题横跨 电影 / 剧集 / 游戏 / 音乐 四个频道，围绕同一种"情绪/氛围"组织。
// 条目名种子：能匹配到真实元数据的会显示封面（music/games 已有数据），
// film/tv 暂以经典名作种子占位，专题页会标注 pending —— 与现有架构一致。
// editorial 文案刻意口语化、像人写的推荐，而非数据库罗列 —— 这是抗 AIO 的核心价值。
import type { CurationTheme } from './curation';

export const MOOD_THEMES: CurationTheme[] = [
  {
    slug: 'lonely-tuesday',
    channel: 'music',
    title: 'The Lonely Tuesday',
    thesis:
      'Not heartbreak, not depression — just that specific 8pm emptiness when the dishes are done and nobody texted. We gathered the things that sit with you in it instead of trying to fix it.',
    intro:
      'A feeling, not a genre. Music for the quiet apartment, a film that understands silence, a game you play alone on purpose, and a series that keeps you company without demanding anything. For the Tuesday that lingers.',
    compare:
      'The trick with loneliness is most media tries to cheer you up. These don\'t. The album gives you a room to be alone in; the film proves the silence is survivable; the game hands you a small world to tend while the real one sleeps; the show is just there, warm in the background. Four different shapes of the same quiet.',
    audience:
      'This list is for people who are alone on a weeknight and don\'t want to be talked out of it. Maybe you live alone, maybe your people are asleep in another time zone, maybe you just need a few hours where nobody needs anything from you. You\'ll like it if you\'ve ever put on a record specifically because it sounds like an empty room, or queued a slow film you didn\'t have to explain to anyone. Skip it if you\'re looking for a party — this is the opposite of a party, and that\'s the entire point. It\'s also a gentle entry point if you\'re new to "mood media" and want proof that a feeling can be the playlist, not just the genre.',
    criteria:
      'We excluded anything that resolves too neatly — no big emotional payoff, no triumphant third act, no song that ends on a major chord just to reassure you. We prioritized works that sit in the feeling rather than escape it: ambient and confessional records, films built on restraint, games you tend rather than conquer, and shows that are comfortable being background warmth. A piece earned its place by making the quiet feel chosen, not lonely-by-accident. Where two works made the same point, we kept the quieter one.',
    alternatives:
      'If you like the stillness here but need a little more warmth, drift toward Rain on the Window — same alone-time energy, but with a blanket and a storm you\'re safe from. If the melancholy is too close to home tonight, New Beginnings is the gentler cousin that admits things might get better. People who want company, plot, or a reason to smile should probably start elsewhere; this list trusts you to be okay with an empty chair. For a higher pulse without losing the mood, Midnight Dread trades sadness for tension.',
    faq: [
      { q: 'Is this list only for people who are actually lonely?', a: 'No. Plenty of people use it while their partner is traveling, between semesters, or just because they like a night with no obligations. It\'s about the feeling of spacious alone-time, not your relationship status.' },
      { q: 'Do I need to watch the film and play the game, or just the music?', a: 'Any door works. Most people start with the record and let the rest be optional. The cross-medium idea is that the same mood shows up in four forms — pick the one your night allows.' },
      { q: 'Why are some entries marked "pending metadata"?', a: 'A few film and TV picks are curatorial seeds we haven\'t matched to our dataset yet. The argument stands without them; we surface them as placeholders rather than fake the data.' },
      { q: 'What if I want the opposite feeling tomorrow?', a: 'Golden-Hour Drive is the sunlight version of this list — same structure, completely different weather.' },
      { q: 'Can I build my own lonely-night list?', a: 'Yes, the Playlist Generator lets you set mood and genre and assemble a starter set from our catalog with the same editorial logic underneath.' },
    ],
    related: ['rainy-window', 'new-beginnings', 'midnight-dread'],
    tags: ['lonely', 'melancholy', 'quiet', 'intimate', 'night'],
    mood: ['melancholy', 'relaxed'],
    items: [
      'Unknown Pleasures', // music (real)
      'Good News', // music (real)
      'Clair de Lune', // music (real)
      'Tokyo Story', // film (seed)
      'Stalker', // film (real)
      'Night in the Woods', // game (real)
      'Spiritfarer', // game (real)
      'comfort-rewatch', // tv (seed slug-ish; resolved if present)
    ],
  },
  {
    slug: 'golden-hour-drive',
    channel: 'music',
    title: 'Golden-Hour Drive',
    thesis:
      'That window of light where everything looks like a memory you haven\'t had yet. We built a playlist and a queue of screens and worlds for the exact minute the sun goes orange.',
    intro:
      'Windows-down, no particular destination. A mixtape for the dashboard, a film that lives in warmth, a game with a horizon you can just ride toward, and a series that feels like summer vacation at 6pm. Pure endorphin, zero irony.',
    compare:
      'Happiness in media is usually frantic. This isn\'t. The record sets the tempo of the road; the film gives you the glow without the plot; the game lets you chase the sunset at your own speed; the show is the long evening that refuses to end. Same warmth, four doors into it.',
    audience:
      'This list is for the good day — the one where you finished the thing, or didn\'t have to, and the light is doing something unfair. You\'ll like it if you\'ve ever timed a drive to a song, or watched a film just for the color grade. It\'s for road trips, first warm evenings, and the hour after a good email. Skip it entirely if you\'re in a low mood; this list has no interest in meeting you in the dark, and forcing it would feel cheap. It also works as a gift — send it to someone having a good week.',
    criteria:
      'We kept only works that glow rather than shout. That meant dropping anything cynical, ironic, or built on a downer twist, no matter how acclaimed. We prioritized warmth in the texture: bossa and soft pop, films that live in golden light, open-world games with a rideable horizon, and comfort shows that feel like August. A pick earned its spot by making optimism feel earned, not naive. Where two made the same point, we kept the one with more sky.',
    alternatives:
      'If the warmth is right but you need it quieter, Rain on the Window keeps the coziness without the engine. If you want the good feeling aimed at getting things done, Deep Focus Flow is the productive cousin. People who find this kind of happiness "too much" will be happier with The Lonely Tuesday or Midnight Dread, where the mood is allowed to be complicated. For pure forward motion, Adrenaline Night trades the sunset for the night.',
    faq: [
      { q: 'Do I need a car to use this list?', a: 'Not at all. The "drive" is a feeling, not a requirement. The record and the show work perfectly on a balcony or a couch at the right hour.' },
      { q: 'Why include a game in a "feel-good" list?', a: 'Because a slow open-world game at golden hour is basically a drive you control. Tears of the Kingdom and A Short Hike are built for exactly this mood.' },
      { q: 'Is this just happy music?', a: 'Happier than most of our lists, yes, but the point is warmth and openness, not cheerleading. There\'s restraint in here on purpose.' },
      { q: 'What\'s the best time to start it?', a: 'The last 90 minutes of daylight. Start the record on the way home and let the film or show take the evening.' },
      { q: 'Where do the covers and metadata come from?', a: 'Real metadata is attributed to open sources (MusicBrainz, RAWG, TMDB). The mood argument — why each piece belongs — is ours.' },
    ],
    related: ['rainy-window', 'new-beginnings', 'adrenaline-night'],
    tags: ['happy', 'warm', 'summer', 'drive', 'optimistic'],
    mood: ['energetic', 'relaxed'],
    items: [
      'Endless Summer', // music (real)
      'La Vie en rose', // music (real)
      'Getz / Gilberto', // music (real)
      'The Legend of Zelda: Tears of the Kingdom', // game (real)
      'A Short Hike', // game (real)
      'The Tree of Life', // film (real)
      'comfort-rewatch', // tv
      'cozy-mystery-tv', // tv
    ],
  },
  {
    slug: 'midnight-dread',
    channel: 'music',
    title: 'Midnight Dread',
    thesis:
      'The 1am fear that the walls are thinner than they should be. We leaned into it — the records that sound like a heartbeat in the dark, the films that trust your imagination over the monster, the games where you are the prey.',
    intro:
      'Not torture-porn horror. The slow, creeping kind. A soundtrack for the hallway you don\'t want to walk down, a film that implies the worst, a game that makes breathing a strategy, and a series that unravels while you pretend to be fine.',
    compare:
      'Dread is earned differently in each medium. The album is pure atmosphere — no plot to hide in. The film shows you just enough. The game makes you complicit, holding the controller while something hears you. The show stretches the unease across weeks so it lives with you. Together they\'re a full night of not-quite-safe.',
    audience:
      'This list is for the person who likes to be a little afraid on purpose — the one who reads horror reviews for fun and keeps a nightlight for nostalgia, not need. You\'ll like it if you\'d rather feel chills than jump scares, and if a quiet drone at 1am sounds like a good idea. Skip it if you\'re actually anxious tonight; this is a controlled scare, not a coping tool, and it won\'t help a real sleepless mind. It\'s also a strong intro to "atmospheric horror" for people bored by the gore-industrial complex.',
    criteria:
      'We excluded splatter, torture, and anything that mistakes volume for fear. We prioritized works that imply: a bassline that sounds like footsteps, a film that cuts away, a game where the monster is smarter than you, a show that withholds. A pick earned its place by scaring the imagination, not the nervous system. Where two made the same point, we kept the one that trusted the viewer more. Nothing here is designed to disgust.',
    alternatives:
      'If the dread is fun but you want it with more melody, The Lonely Tuesday shares the nighttime but replaces fear with melancholy. If you like the darkness but need it in a game you can actually finish, focus on the Silent Hill and Amnesia picks. People who hate being scared should absolutely not start here — Golden-Hour Drive is the antidote. For dread with a sense of humor, the dark-comedy TV seed is the off-ramp.',
    faq: [
      { q: 'Is this list safe for someone who gets real anxiety at night?', a: 'We\'d steer you elsewhere. This is curated, voluntary dread — fun only if you\'re choosing it. If night anxiety is genuine, the calm lists (Deep Focus Flow, Rain on the Window) are kinder.' },
      { q: 'Why a record in a horror list?', a: 'Because the right drone at the right volume is pure dread with no plot to hide behind. It\'s the most honest scare on the list.' },
      { q: 'Are the games actually scary or just hard?', a: 'Scary-by-design, not hard. Silent Hill and Amnesia are about vulnerability and sound, not reflexes. You can play them scared and slow.' },
      { q: 'Do I have to consume all four mediums?', a: 'No. Most people do the film or the game and treat the record as the mood-setter. The cross-medium framing is an invitation, not a syllabus.' },
      { q: 'Why are some film/TV entries pending?', a: 'A few are curatorial seeds not yet matched to our dataset. We show them as placeholders rather than invent metadata we don\'t have.' },
    ],
    related: ['lonely-tuesday', 'adrenaline-night', 'rainy-window'],
    tags: ['dark', 'tense', 'horror', 'night', 'atmosphere'],
    mood: ['melancholy'],
    items: [
      'Transilvanian Hunger', // music (real)
      'METAL BOX', // music (real)
      'Phaedra', // music (real)
      'Se7en', // film (real)
      'Mulholland Drive', // film (real)
      'Silent Hill', // game (real)
      'Amnesia', // game (real)
      'dark-comedy-tv', // tv
    ],
  },
  {
    slug: 'rainy-window',
    channel: 'music',
    title: 'Rain on the Window',
    thesis:
      'The cozy confinement of a storm you don\'t have to go out in. We collected the things that make being stuck inside feel like a privilege.',
    intro:
      'Tea, a blanket, and the weather doing the decorating. A record for the grey light, a film that loves a wet street, a game you build a home inside, and a series for the long afternoon that rain invented. Stay in. It\'s better here.',
    compare:
      'Rain is the great equalizer of mood — it works on every screen. The album is the sound of it; the film is the look of it; the game is the world you shelter inside; the show is the excuse to never check the time. Four ways to enjoy the fact that you\'re not leaving.',
    audience:
      'This list is for the day the weather gives you permission to do nothing. You\'ll like it if you\'ve ever cancelled plans with relief, or if a rainy Saturday feels like a small inheritance. It\'s for remote workers on a grey afternoon, for people recovering from a long week, for anyone whose ideal Saturday involves a window and a kettle. Skip it on a beautiful sunny day — it won\'t land, and that\'s fine, the sun will still be there tomorrow. It\'s also a perfect first list for someone new to cozy media.',
    criteria:
      'We excluded anything tense, anything that ends badly, and anything that demands you pay close attention. We prioritized comfort: soft jazz and modern classical, films that love a wet window, farming and life-sim games you build a home inside, and gentle shows. A pick earned its place by making the indoors feel like a reward. Where two made the same point, we kept the one you could leave on in the background.',
    alternatives:
      'If the coziness is right but you want it quieter and sadder, The Lonely Tuesday is the melancholy version of the same rainy room. If you want the comfort aimed at productivity, Deep Focus Flow keeps you company while you work. People who find "cozy" boring should try Midnight Dread — same indoor energy, completely different stakes. For the sunny flip side, Golden-Hour Drive.',
    faq: [
      { q: 'Do I need actual rain to use this list?', a: 'It helps, but no. The record and the game do most of the weather-work. Plenty of people use it on grey indoor days that just feel rainy.' },
      { q: 'Why a farming game in a cozy list?', a: 'Because Stardew Valley and Animal Crossing are basically digital shelter — you build a warm little world while the real one stays outside. They\'re the purest form of "stuck inside is fine."' },
      { q: 'Is this just for weekends?', a: 'No. It\'s popular with remote workers on grey afternoons precisely because it makes a slow workday feel intentional rather than sluggish.' },
      { q: 'What if I want the rainy mood but scarier?', a: 'Midnight Dread takes the same indoor confinement and adds a knock at the door.' },
      { q: 'Where does the metadata come from?', a: 'Open attributed sources (MusicBrainz, RAWG, TMDB). The "why this belongs" writing is editorial and ours.' },
    ],
    related: ['lonely-tuesday', 'golden-hour-drive', 'focus-flow'],
    tags: ['cozy', 'rain', 'calm', 'autumn', 'indoors'],
    mood: ['relaxed', 'focused'],
    items: [
      'classical-rainy-window', // music seed (real albums underneath)
      'Kind of Blue', // music (real)
      'The Blue Notebooks', // music (real)
      'Stardew Valley', // game (real)
      'Animal Crossing', // game (real)
      'Chinatown', // film (real)
      'cozy-mystery-tv', // tv
      'comfort-rewatch', // tv
    ],
  },
  {
    slug: 'new-beginnings',
    channel: 'music',
    title: 'New Beginnings',
    thesis:
      'The specific hope of a first day — apartment, city, relationship, sobriety, semester. We picked the things that feel like the opening chord of a life you haven\'t ruined yet.',
    intro:
      'Optimism with a little fear in it, the honest kind. A record for the empty room with boxes, a film about the door that just opened, a game where you build from nothing, and a series about people becoming who they\'ll be. For the morning after the big move.',
    compare:
      'Beginnings are fragile, and each medium holds them differently. The album is the optimism; the film is the leap; the game is the literal building; the show is the slow proof that change is possible. They don\'t tell you it\'ll be easy — just that it started.',
    audience:
      'This list is for thresholds — the move, the new job, the first sober month, the semester that hasn\'t gone wrong yet. You\'ll like it if you\'ve ever made a playlist for an empty apartment, or felt hopeful in a way that scared you a little. It\'s for January people, for people who just said yes to something, for anyone standing in a doorway. Skip it if you\'re mid-collapse; this list is about the start, not the rescue, and forcing optimism mid-crisis rings false. It\'s also a quietly popular gift for graduates and people who just relocated.',
    criteria:
      'We excluded cynical takes on fresh starts and anything that punishes hope. We prioritized openness: rap records about becoming, films about the door opening, building games where nothing exists yet, and shows about people in flux. A pick earned its place by making the unknown feel survivable. Where two made the same point, we kept the one with more forward motion and less irony.',
    alternatives:
      'If the hope is right but you need it calmer, Golden-Hour Drive is the same optimism with the volume down. If the new start is scary and you want company in that, The Lonely Tuesday understands the quiet fear underneath. People who are done with beginnings and want an ending should jump to Bittersweet Endings. For the energy to actually do the thing, Adrenaline Night.',
    faq: [
      { q: 'Is this only for big life events?', a: 'No — a new playlist, a new routine, a new city block all count. The list is about the feeling of a start, not the size of the change.' },
      { q: 'Why a building game in a "beginnings" list?', a: 'Because Stardew Valley and Unpacking are literally about starting from empty. You build the new life with your hands. They\'re the most on-the-nose picks here, in the best way.' },
      { q: 'What if I\'m hopeful but also terrified?', a: 'That\'s the exact feeling this list is built for. The fear is in the music; the hope is in the game. Both are allowed.' },
      { q: 'Can I send this to someone who just moved?', a: 'Please. It\'s one of the better "new city" gifts we\'ve made — optimistic without being sappy.' },
      { q: 'Where does the metadata come from?', a: 'Open attributed sources (MusicBrainz, RAWG, TMDB). The editorial framing — why a start feels like this — is ours.' },
    ],
    related: ['golden-hour-drive', 'bittersweet-endings', 'lonely-tuesday'],
    tags: ['hopeful', 'optimistic', 'fresh', 'uplifting', 'morning'],
    mood: ['energetic', 'relaxed'],
    items: [
      'good kid, m.A.A.d city', // music (real)
      'Section.80', // music (real)
      'To Pimp a Butterfly', // music (real)
      'Stardew Valley', // game (real)
      'Unpacking', // game (real)
      'Coming-of-Age (film)', // film seed
      'comfort-rewatch', // tv
      'limited-series-tight', // tv
    ],
  },
  {
    slug: 'focus-flow',
    channel: 'music',
    title: 'Deep Focus Flow',
    thesis:
      'The zone. Not background noise — foreground concentration. We chose the things engineered to disappear so your actual work can appear.',
    intro:
      'For the 3-hour sprint, the essay, the tax return you keep avoiding. A record that breathes instead of sings, a film you can half-watch while your hands move, a game with a repetitive loop that calms the lizard brain, and a show you\'ve seen so many times it\'s basically furniture. Get the thing done.',
    compare:
      'Focus media has one job: get out of the way. The album is the obvious tool. The film gives the eyes somewhere safe. The game offers a rhythmic task that quiets the urge to check your phone. The rewatched show is audio you already know. Four doors, same trance.',
    audience:
      'This list is for the work. You\'ll like it if you\'ve ever made a "coding playlist," or if a familiar film in the background is the only thing that lets you write. It\'s for remote workers, students in finals week, anyone avoiding a specific spreadsheet. Skip it if you need to actually watch something — this is wallpaper by design, and people who want a plot will be bored. It\'s also a strong tool for people with ADHD who use rhythm and familiarity to crowd out the urge to switch tabs.',
    criteria:
      'We excluded vocals that compete for language centers, plots that punish looking away, and anything with a drop that jolts you awake. We prioritized texture: ambient and instrumental records, slow films you\'ve half-seen, loop games with a calm rhythm, and shows you know by heart. A pick earned its place by disappearing. Where two made the same point, we kept the one least likely to interrupt your sentence.',
    alternatives:
      'If the focus is right but you need it warmer, Rain on the Window keeps you company while you work. If you want the concentration aimed at relaxation instead of output, The Lonely Tuesday is the non-productive cousin. People who need energy to start should try Adrenaline Night first, then land here. For pure calm without a task, Bittersweet Endings.',
    faq: [
      { q: 'Why would I put on a film to focus?', a: 'Because a film you\'ve already seen gives your eyes somewhere safe to rest without handing your brain a new plot. It fills the "I need background" need without competing for language.' },
      { q: 'Do the games actually help focus or just distract?', a: 'The ones here (Tetris Effect, Civilization loops) are rhythmic and familiar — they occupy the fidgety part of your brain so the working part can think. They\'re tools, not time-sinks.' },
      { q: 'Is this just instrumental music?', a: 'Mostly, but not only. The cross-medium point is that focus can come from a show you\'ve memorized just as well as from a drone record.' },
      { q: 'What if lyrics help me focus?', a: 'Then this list isn\'t for you — we deliberately excluded vocals that compete with reading and writing. Your brain may work differently, and that\'s fine.' },
      { q: 'Where does the metadata come from?', a: 'Open attributed sources (MusicBrainz, RAWG, TMDB). The "why this helps you work" reasoning is editorial.' },
    ],
    related: ['rainy-window', 'adrenaline-night', 'lonely-tuesday'],
    tags: ['focused', 'work', 'instrumental', 'calm', 'flow'],
    mood: ['focused'],
    items: [
      'Music for Airports', // music (real)
      'Selected Ambient Works 85-92', // music (real)
      'In a Silent Way', // music (real)
      'Tetris Effect', // game (placeholder seed)
      'Civilization', // game (real)
      'asmr-ish film', // film seed
      'comfort-rewatch', // tv
      'limited-series-tight', // tv
    ],
  },
  {
    slug: 'bittersweet-endings',
    channel: 'music',
    title: 'Bittersweet Endings',
    thesis:
      'The feeling of the last page, the last level, the credits you didn\'t want. We gathered the things that are sad and glad at the exact same time.',
    intro:
      'Not a cry, a full heart. A record that ends too soon, a film that earns its last shot, a game you finish and immediately miss, and a series finale that becomes part of you. For when "the end" is its own kind of gift.',
    compare:
      'Endings hit hardest when you\'ve lived in them, and each medium lets you live differently. The album closes a chapter in three minutes; the film lands one image; the game takes 60 hours to say goodbye; the show does it over a season you\'ll replay forever. Same ache, four lengths.',
    audience:
      'This list is for the finish. You\'ll like it if you\'ve ever sat through credits you didn\'t want, or felt a game\'s ending like a small death. It\'s for the night after a series finale, for people lending a book they love, for anyone who thinks goodbyes can be gifts. Skip it if you\'re already grieving something real — this is a safe ache, not a wound, and it won\'t help a genuine loss. It\'s also a quietly perfect list for anyone who\'s just finished something they loved and doesn\'t know what to do with the empty space.',
    criteria:
      'We excluded bleak endings (no nihilism) and tidy ones (no cheap relief). We prioritized closures that earn both the sadness and the gratitude: confessional records, films with one perfect last shot, games built around saying goodbye, finales that become part of you. A pick earned its place by making "the end" feel like a full heart, not a closed door. Where two made the same point, we kept the one you\'d replay.',
    alternatives:
      'If the ache is right but you want it quieter, The Lonely Tuesday is the same melancholy without the "ending" structure. If you want the emotion aimed at hope instead, New Beginnings is the morning after this list\'s night. People who hate sad endings should absolutely avoid this one — Golden-Hour Drive keeps the feeling warm and open. For tears without the gratitude, Midnight Dread.',
    faq: [
      { q: 'Is this a sad list?', a: 'Sad and glad at once — that\'s the whole point. If you want pure sadness, this isn\'t it; if you want a cry that feels like a thank-you, it is.' },
      { q: 'Why a game in an "endings" list?', a: 'Because a 60-hour game you finish hits differently than a film. Spiritfarer and What Remains are built around saying goodbye, and they land harder for it.' },
      { q: 'Do I have to have finished the show to use it?', a: 'No. The list is about the feeling of an ending, and the music and film picks work on their own. The show is for people who already know the finale.' },
      { q: 'What if I\'m actually grieving?', a: 'Then this is probably too light — it\'s a safe ache, not a companion for real loss. The calmer lists might serve better, or just take the night off.' },
      { q: 'Where does the metadata come from?', a: 'Open attributed sources (MusicBrainz, RAWG, TMDB). The "why this ending matters" writing is editorial.' },
    ],
    related: ['new-beginnings', 'lonely-tuesday', 'golden-hour-drive'],
    tags: ['tender', 'bittersweet', 'nostalgic', 'ending', 'emotional'],
    mood: ['melancholy', 'relaxed'],
    items: [
      'The Queen Is Dead', // music (real)
      'Loveless (Japanese Version)', // music (real)
      'Moonlight Sonata', // music (real)
      'Spiritfarer', // game (real)
      'What Remains', // game (real)
      'The Tree of Life', // film (real)
      'limited-series-tight', // tv
      'comfort-rewatch', // tv
    ],
  },
  {
    slug: 'adrenaline-night',
    channel: 'music',
    title: 'Adrenaline Night',
    thesis:
      'The thing you reach for when sitting still is impossible. We stacked the loud, the fast, and the dangerous — a soundtrack for the night you said yes to.',
    intro:
      'Heart rate up. A record that hits like a shot, a film that doesn\'t blink, a game where dying is the point, and a series that moves at a sprint. For the night that\'s supposed to end too late.',
    compare:
      'Adrenaline needs momentum, and each medium supplies it differently. The album is the chemical; the film is the set-piece; the game is the stake (you can actually lose); the show is the binge you can\'t pause. Four engines, one sleepless night.',
    audience:
      'This list is for the night you can\'t sit still — post-show, pre-trip, or just restless in a way that needs an outlet. You\'ll like it if you\'ve ever needed a soundtrack to feel awake, or if a film\'s car chase is the reason you watched. It\'s for people who game to win, who binge to the end, who think 1am should involve movement. Skip it entirely if you\'re wound down or anxious — this is fuel, not a calm, and it will not help a racing mind that wants to slow. It\'s also the list for actually getting through a workout or a long drive.',
    criteria:
      'We excluded anything slow, introspective, or built to be background. We prioritized velocity: synthwave and metal, films that don\'t blink, games where losing is real, shows that sprint. A pick earned its place by raising the pulse. Where two made the same point, we kept the one with more forward motion. Nothing contemplative survived the cut.',
    alternatives:
      'If the energy is right but you need it cleaner, Golden-Hour Drive keeps the momentum without the danger. If you want the rush aimed at getting work done, Deep Focus Flow is the wrong speed entirely — this is the opposite. People who hate intensity should start at Rain on the Window. For the scare-version of the same sleepless night, Midnight Dread.',
    faq: [
      { q: 'Is this just loud music and action films?', a: 'Loud and fast, yes, but the point is momentum across four forms — the game where you can actually lose is the most "adrenaline" of all because the stake is real.' },
      { q: 'Why include a show in an adrenaline list?', a: 'Because the right show at the right pace is a binge you can\'t pause — the antihero and dark-comedy seeds are built for exactly that sleepless sprint.' },
      { q: 'Can I use this to exercise or drive?', a: 'That\'s a core use case. The record and the film both work as motion fuel. Just don\'t watch the film while driving.' },
      { q: 'What if I\'m anxious, not energized?', a: 'Different thing. This list feeds energy; if your heart is racing from stress, the calm lists (Rain on the Window, Deep Focus Flow) are the answer, not this.' },
      { q: 'Where does the metadata come from?', a: 'Open attributed sources (MusicBrainz, RAWG, TMDB). The "why this gets your pulse up" framing is editorial.' },
    ],
    related: ['golden-hour-drive', 'midnight-dread', 'focus-flow'],
    tags: ['energetic', 'intense', 'exciting', 'loud', 'night'],
    mood: ['energetic'],
    items: [
      'Nightcall', // music (real)
      'Turbo Killer', // music (real)
      'Outland', // music (real)
      'DOOM Eternal', // game placeholder
      'Hades', // game (real)
      'Mad Max: Fury Road', // film placeholder
      'antihero-golden', // tv
      'dark-comedy-tv', // tv
    ],
  },
];
