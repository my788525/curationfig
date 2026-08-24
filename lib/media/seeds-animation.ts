import type { CurationTheme } from './curation';

// Animation channel — 5 curated themes.
// Items are real works present in lib/media/generated-animation.ts (AniList real scores for
// Japanese titles; public bibliographic facts for Pixar shorts). Our take = score / award /
// director facts only — no invented plot summaries or personal viewing claims.

export const ANIMATION_THEMES: CurationTheme[] = [
  {
    channel: 'animation',
    slug: 'ghibli-essentials',
    title: 'Studio Ghibli Essentials: Where the Form Became Cinema',
    mood: ['tender'],
    intro:
      'Before "anime" meant battle shōnen for many Western viewers, Studio Ghibli made films that played in arthouses. Spirited Away won the Oscar; My Neighbor Totoro became a worldwide shorthand for comfort.',
    thesis:
      'Ghibli’s strength is world-building without exposition — a meal, a wind, a doorway. We lead with the films that earned the reputation (Miyazaki’s features) and note which ones travel best to a first-time adult viewer.',
    audience: 'Families with older kids; film lovers new to animation; anyone who liked the quiet beats of live-action drama.',
    criteria: 'Directed by Hayao Miyazaki or Isao Takahata (the canonical Ghibli) · AniList community score 80+ · A complete feature, not a serial · Findable with English dubs and subs',
    tags: ['ghibli', 'fantasy', 'family'],
    items: ['Spirited Away', 'My Neighbor Totoro', 'Princess Mononoke', 'Castle in the Sky', 'Howl’s Moving Castle'],
    editorialNotes: {
      'Spirited Away': 'AniList 86/100. Won the 2003 Academy Award for Best Animated Feature — the film most non-anime viewers name first.',
      'My Neighbor Totoro': 'AniList 81/100. The studio’s gentlest film; the common first Ghibli for families.',
      'Princess Mononoke': 'AniList 85/100. The studio’s most violent film; better for teens and adults than small children.',
      'Castle in the Sky': 'AniList 80/100. An early Miyazaki adventure; the template for later airship-and-ruins stories.',
      'Howl’s Moving Castle': 'AniList 85/100. A looser, romantic entry; a good next step after the above three.',
    },
    faq: [
      { q: 'Which Ghibli for a first-timer?', a: 'Spirited Away for spectacle; Totoro for calm; Mononoke for weight. Sub or dub is a matter of taste — both are professional.' },
      { q: 'Is Ghibli only for kids?', a: 'No. Mononoke and Howl carry adult themes; Totoro is the family-safe one. We label the tone so you choose by viewer.' },
    ],
    related: ['anime-canon', 'oscar-shorts'],
  },
  {
    channel: 'animation',
    slug: 'anime-canon',
    title: 'The Anime Canon: Films & Series Adults Actually Rate',
    mood: ['cerebral'],
    intro:
      'Past Ghibli, the works that recur on serious lists: Satoshi Kon’s Perfect Blue and Paprika, Makoto Shinkai’s Your Name, Naoko Yamada’s A Silent Voice, Mamoru Oshii’s Ghost in the Shell, Katsuhiro Otomo’s Akira.',
    thesis:
      'The canon is built on direction, not just popularity. We lead with directors who have a recognizable hand (Kon’s psychology, Oshii’s stillness, Otomo’s scale) and name the score so you can see the consensus.',
    audience: 'Adult animation fans; film students; viewers who liked the Ghibli features and want more.',
    criteria: 'AniList community score 79+ (the works that endure) · A director with a definable style · Influence on later film/games (Akira, Ghost in the Shell) · Findable with English audio',
    tags: ['psychological', 'drama', 'award'],
    items: ['Perfect Blue', 'Paprika', 'Your Name', 'A Silent Voice', 'Ghost in the Shell', 'Akira', 'Belladonna of Sadness', 'Mind Game'],
    editorialNotes: {
      'Perfect Blue': 'AniList 85/100. Satoshi Kon (1998). Frequently cited among the greatest psychological anime; a story about identity and performance.',
      Paprika: 'AniList 79/100. Satoshi Kon (2006). A dream-infiltration film often noted as a forerunner to similar live-action premises.',
      'Your Name': 'AniList 90/100. Makoto Shinkai (2016). One of the highest-grossing anime films worldwide; body-swap romance.',
      'A Silent Voice': 'AniList 88/100. Naoko Yamada (2016). Adapted from Yoshitoki Ōima’s manga; a bullying-and-reconciliation story.',
      'Ghost in the Shell': 'AniList 80/100. Mamoru Oshii (1995). A landmark of adult sci-fi animation; influenced The Matrix’s visual language.',
      Akira: 'AniList 79/100. Katsuhiro Otomo (1988). The film most credited with opening Western eyes to anime.',
      'Belladonna of Sadness': 'AniList 71/100. Eiichi Yamamoto (1973). Part of the Animerama trilogy; a cult psychedelic work.',
      'Mind Game': 'AniList 82/100. Masaaki Yuasa (2004). Visually radical; a festival favorite.',
    },
    faq: [
      { q: 'Kon or Shinkai first?', a: 'Perfect Blue for psychological weight; Your Name for emotion and spectacle. They are different moods entirely.' },
      { q: 'Why include Belladonna if the score is lower?', a: 'Because it is historically significant (1973, Animerama) even if the modern consensus score is milder. We note the score so you weigh it yourself.' },
    ],
    related: ['ghibli-essentials', 'mecha-sci-fi'],
  },
  {
    channel: 'animation',
    slug: 'mecha-sci-fi',
    title: 'Mecha & Sci-Fi TV: The Long-Form Worlds',
    mood: ['rebellious'],
    intro:
      'The serial form where animation outperforms live action: Neon Genesis Evangelion, Cowboy Bebop, Ghost in the Shell (the TV continuations), Attack on Titan, Fullmetal Alchemist: Brotherhood.',
    thesis:
      'A great sci-fi serial is a premise you live inside for 50 episodes. We separate the formally ambitious (Evangelion) from the pure ride (Cowboy Bebop) and name the score so the consensus is visible.',
    audience: 'Sci-fi fans; viewers who finished a live-action series and want more; newcomers to long runs.',
    criteria: 'AniList community score 80+ · A complete or conclusively ended run · Sci-fi / mecha premise with real ideas · English audio findable',
    tags: ['mecha', 'sci-fi', 'tv'],
    items: ['Neon Genesis Evangelion', 'Cowboy Bebop', 'Ghost in the Shell', 'Attack on Titan', 'Fullmetal Alchemist: Brotherhood', 'Akira'],
    editorialNotes: {
      'Neon Genesis Evangelion': 'AniList 83/100. TV (1995), dir. Hideaki Anno. The defining mecha / psychological work; the ending divides viewers, which is part of its reputation.',
      'Cowboy Bebop': 'AniList 86/100. TV (1998). Jazz-noir space Western; often recommended as a first adult anime.',
      'Ghost in the Shell': 'AniList 80/100. The 1995 film is the reference; TV continuations exist. We point to the film first.',
      'Attack on Titan': 'AniList 85/100. TV (2013). A mainstream breakout dark-fantasy; the run concluded.',
      'Fullmetal Alchemist: Brotherhood': 'AniList 90/100. TV (2009). Routinely atop "best anime" lists for sticking the landing.',
      Akira: 'AniList 79/100. The 1988 film; a sci-fi landmark. Listed here because its world is the obvious next step after the serials.',
    },
    faq: [
      { q: 'Which sci-fi series to start?', a: 'Cowboy Bebop for tone and ease; Fullmetal Alchemist: Brotherhood for a complete arc; Evangelion for ambition (and debate).' },
      { q: 'Are these finished?', a: 'Yes — Brotherhood and Attack on Titan concluded; Evangelion’s TV end is famously contested but the run is complete.' },
    ],
    related: ['anime-canon', 'shonen-gateways'],
  },
  {
    channel: 'animation',
    slug: 'shonen-gateways',
    title: 'Shōnen Gateways: The Battle Epics Everyone Starts On',
    mood: ['rebellious'],
    intro:
      'The long-running adventure serials that pull new viewers in: Dragon Ball Z, Naruto, One Piece, Sailor Moon, Death Note. Loud, serialized, and the common first step into anime.',
    thesis:
      'A gateway shōnen earns its length with momentum. We are honest that these are long (One Piece is ongoing since 1999) and separate the tightly-plotted (Death Note) from the endurance sports (DBZ, One Piece).',
    audience: 'New anime viewers; teens; anyone who liked a battle story in another medium.',
    criteria: 'AniList community score 76+ · Recognizable as a gateway entry (not deep-cut) · Findable, long back catalog · We state the length honestly',
    tags: ['shonen', 'action', 'gateway'],
    items: ['Dragon Ball Z', 'Naruto', 'One Piece', 'Sailor Moon', 'Death Note'],
    editorialNotes: {
      'Dragon Ball Z': 'AniList 80/100. TV (1989). The landmark shōnen battle anime; the "training arc" template.',
      Naruto: 'AniList 80/100. TV (2002). Defining ninja shōnen; long, with a time-skip midpoint.',
      'One Piece': 'AniList 87/100. TV (1999–). The longest-running hit here; we flag that it is ongoing and vast.',
      'Sailor Moon': 'AniList 76/100. TV (1992). The defining magical-girl series; the gateway for a different audience.',
      'Death Note': 'AniList 84/100. TV (2006). A tight cat-and-mouse thriller; the rare gateway that is also short.',
    },
    faq: [
      { q: 'Which is shortest?', a: 'Death Note (~37 episodes) is the tight gateway; One Piece and Naruto are multi-hundred-episode commitments. We say so up front.' },
      { q: 'Sailor Moon for boys?', a: 'The genre assumption is outdated; it is a hero’s journey like the rest. We list it on merit, not audience gender.' },
    ],
    related: ['mecha-sci-fi', 'anime-canon'],
  },
  {
    channel: 'animation',
    slug: 'oscar-shorts',
    title: 'Oscar-Winning Animated Shorts: The Form in Miniature',
    mood: ['tender'],
    intro:
      'The Academy Award for Best Animated Short is its own canon — and Pixar has dominated it. Piper (2016), Bao (2018), Feast (2014) each won. They are short, complete, and a fast way into the form.',
    thesis:
      'A short earns its place through a single idea executed perfectly. We favor the Oscar winners (a public, verifiable distinction) over the merely cute, and note the year so you can place them.',
    audience: 'Short-attention viewers; families; anyone who wants a complete story in under ten minutes.',
    criteria: 'Won the Academy Award for Best Animated Short (verifiable) · Under ~10 minutes · Self-contained, not a pilot · Findable (usually bundled with a feature)',
    tags: ['short', 'award', 'family'],
    items: ['Piper', 'Bao', 'Feast'],
    editorialNotes: {
      Piper: 'Pixar short (2016), dir. Alan Barillaro. Won the Academy Award for Best Animated Short; a sandpiper learning to forage.',
      Bao: 'Pixar short (2018), dir. Domee Shi. Won the Academy Award for Best Animated Short; a story of a Chinese-Canadian mother.',
      Feast: 'Pixar short (2014), dir. Patrick Osborne. Won the Academy Award for Best Animated Short; told from a dog’s point of view.',
    },
    faq: [
      { q: 'Where do I watch these?', a: 'Pixar shorts are typically bundled with features or on the studio’s platform; we name the award, not a specific link, to avoid pointing at a dead URL.' },
      { q: 'Only three?', a: 'We list the ones we can verify by award and year. Padding the list with unawarded shorts would weaken the point.' },
    ],
    related: ['ghibli-essentials', 'anime-canon'],
  },
];
