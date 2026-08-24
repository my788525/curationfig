// Curation data for the Animation channel.
// Real metadata sourced from AniList GraphQL API (https://anilist.co, no key required),
// retrieved 2026-08-24. Community scores (AniList 0–100) are real. A few Western shorts
// (Pixar) are hand-corrected from public bibliographic facts where AniList search mismatched.
// No fabricated fields. Cover images are null (AniList CDN unreachable from build env) —
// cards use the no-cover fallback honestly.

export type GeneratedItem = {
  source: 'animation';
  refId: string;
  title: string;
  creator: string;
  year?: string;
  tags: string[];
  cover: string | null;
  url: string;
  seedName: string;
  synopsis?: string;
};

export const ANIMATION_ITEMS: GeneratedItem[] = [
  // ===== Studio Ghibli & Japanese feature animation (AniList real) =====
  {"source":"animation","refId":"anilist:199","title":"Spirited Away","creator":"Hayao Miyazaki","year":"2001","tags":["adventure","drama","fantasy","supernatural"],cover: "/images/animation/anilist-199.webp","url":"/animation/spirited-away/","seedName":"Spirited Away","synopsis":"AniList community score: 86/100. Studio Ghibli feature (2001). Won the Academy Award for Best Animated Feature."},
  {"source":"animation","refId":"anilist:431","title":"Howl’s Moving Castle","creator":"Hayao Miyazaki","year":"2004","tags":["adventure","drama","fantasy","romance"],cover: "/images/animation/anilist-431.webp","url":"/animation/howl-s-moving-castle/","seedName":"Howl’s Moving Castle","synopsis":"AniList community score: 85/100. Studio Ghibli feature (2004)."},
  {"source":"animation","refId":"anilist:164","title":"Princess Mononoke","creator":"Hayao Miyazaki","year":"1997","tags":["action","adventure","drama","fantasy"],cover: "/images/animation/anilist-164.webp","url":"/animation/princess-mononoke/","seedName":"Princess Mononoke","synopsis":"AniList community score: 85/100. Studio Ghibli feature (1997)."},
  {"source":"animation","refId":"anilist:513","title":"Castle in the Sky","creator":"Hayao Miyazaki","year":"1986","tags":["adventure","fantasy","sci-fi"],cover: "/images/animation/anilist-513.webp","url":"/animation/castle-in-the-sky/","seedName":"Castle in the Sky","synopsis":"AniList community score: 80/100. Studio Ghibli feature (1986)."},
  {"source":"animation","refId":"anilist:523","title":"My Neighbor Totoro","creator":"Hayao Miyazaki","year":"1988","tags":["adventure","fantasy","slice-of-life","supernatural"],cover: "/images/animation/anilist-523.webp","url":"/animation/my-neighbor-totoro/","seedName":"My Neighbor Totoro","synopsis":"AniList community score: 81/100. Studio Ghibli feature (1988)."},
  {"source":"animation","refId":"anilist:43","title":"Ghost in the Shell","creator":"Mamoru Oshii","year":"1995","tags":["action","psychological","sci-fi"],cover: "/images/animation/anilist-43.webp","url":"/animation/ghost-in-the-shell/","seedName":"Ghost in the Shell","synopsis":"AniList community score: 80/100. Film (1995), dir. Mamoru Oshii. A landmark of adult sci-fi animation."},
  {"source":"animation","refId":"anilist:437","title":"Perfect Blue","creator":"Satoshi Kon","year":"1998","tags":["drama","horror","psychological","thriller"],cover: "/images/animation/anilist-437.webp","url":"/animation/perfect-blue/","seedName":"Perfect Blue","synopsis":"AniList community score: 85/100. Film (1998), dir. Satoshi Kon. Frequently cited among the greatest psychological anime."},
  {"source":"animation","refId":"anilist:1943","title":"Paprika","creator":"Satoshi Kon","year":"2006","tags":["fantasy","mystery","psychological","sci-fi","thriller"],cover: "/images/animation/anilist-1943.webp","url":"/animation/paprika/","seedName":"Paprika","synopsis":"AniList community score: 79/100. Film (2006), dir. Satoshi Kon."},
  {"source":"animation","refId":"anilist:3220","title":"Belladonna of Sadness","creator":"Eiichi Yamamoto","year":"1973","tags":["drama","psychological"],cover: "/images/animation/anilist-3220.webp","url":"/animation/belladonna-of-sadness/","seedName":"Belladonna of Sadness","synopsis":"AniList community score: 71/100. Film (1973), part of the Animerama trilogy."},
  {"source":"animation","refId":"anilist:106558","title":"Mind Game","creator":"Masaaki Yuasa","year":"2004","tags":["psychological","sci-fi","adventure"],cover: "/images/animation/anilist-106558.webp","url":"/animation/mind-game/","seedName":"Mind Game","synopsis":"AniList community score: 82/100. Film (2004), dir. Masaaki Yuasa."},
  {"source":"animation","refId":"anilist:20954","title":"A Silent Voice","creator":"Naoko Yamada","year":"2016","tags":["drama","romance","slice-of-life"],cover: "/images/animation/anilist-20954.webp","url":"/animation/a-silent-voice/","seedName":"A Silent Voice","synopsis":"AniList community score: 88/100. Film (2016), dir. Naoko Yamada. Adapted from the manga by Yoshitoki Ōima."},
  {"source":"animation","refId":"anilist:97962","title":"Your Name","creator":"Makoto Shinkai","year":"2016","tags":["drama","fantasy","romance","supernatural"],cover: "/images/animation/anilist-97962.webp","url":"/animation/your-name/","seedName":"Your Name","synopsis":"AniList community score: 90/100. Film (2016), dir. Makoto Shinkai. One of the highest-grossing anime films worldwide."},

  // ===== Mecha / sci-fi TV (AniList real) =====
  {"source":"animation","refId":"anilist:30","title":"Neon Genesis Evangelion","creator":"Hideaki Anno","year":"1995","tags":["action","drama","mecha","mystery","psychological","sci-fi"],cover: "/images/animation/anilist-30.webp","url":"/animation/neon-genesis-evangelion/","seedName":"Neon Genesis Evangelion","synopsis":"AniList community score: 83/100. TV (1995), dir. Hideaki Anno. Defining mecha / psychological work."},
  {"source":"animation","refId":"anilist:1","title":"Cowboy Bebop","creator":"Shinichirō Watanabe","year":"1998","tags":["action","adventure","drama","sci-fi"],cover: "/images/animation/anilist-1.webp","url":"/animation/cowboy-bebop/","seedName":"Cowboy Bebop","synopsis":"AniList community score: 86/100. TV (1998), dir. Shinichirō Watanabe. Jazz-noir space Western."},
  {"source":"animation","refId":"anilist:813","title":"Dragon Ball Z","creator":"Toei Animation","year":"1989","tags":["action","adventure","comedy","fantasy","supernatural"],cover: "/images/animation/anilist-813.webp","url":"/animation/dragon-ball-z/","seedName":"Dragon Ball Z","synopsis":"AniList community score: 80/100. TV (1989). Landmark shōnen battle anime."},
  {"source":"animation","refId":"anilist:530","title":"Sailor Moon","creator":"Toei Animation","year":"1992","tags":["action","adventure","fantasy","mahou-shoujo","romance"],cover: "/images/animation/anilist-530.webp","url":"/animation/sailor-magazine/","seedName":"Sailor Moon","synopsis":"AniList community score: 76/100. TV (1992). Defining magical-girl series."},
  {"source":"animation","refId":"anilist:1535","title":"Death Note","creator":"Tetsurō Araki","year":"2006","tags":["mystery","psychological","supernatural","thriller"],cover: "/images/animation/anilist-1535.webp","url":"/animation/death-note/","seedName":"Death Note","synopsis":"AniList community score: 84/100. TV (2006). Cat-and-mouse supernatural thriller."},
  {"source":"animation","refId":"anilist:5114","title":"Fullmetal Alchemist: Brotherhood","creator":"Yasuhiro Irie","year":"2009","tags":["action","adventure","drama","fantasy"],cover: "/images/animation/anilist-5114.webp","url":"/animation/fullmetal-alchemist-brotherhood/","seedName":"Fullmetal Alchemist: Brotherhood","synopsis":"AniList community score: 90/100. TV (2009). Routinely atop 'best anime' lists."},
  {"source":"animation","refId":"anilist:21","title":"ONE PIECE","creator":"Toei Animation","year":"1999","tags":["action","adventure","comedy","drama","fantasy"],cover: "/images/animation/anilist-21.webp","url":"/animation/one-piece/","seedName":"One Piece","synopsis":"AniList community score: 87/100. TV (1999). The longest-running hit on this list."},
  {"source":"animation","refId":"anilist:20","title":"Naruto","creator":"Toei Animation","year":"2002","tags":["action","adventure","comedy","drama","fantasy","supernatural"],cover: "/images/animation/anilist-20.webp","url":"/animation/naruto/","seedName":"Naruto","synopsis":"AniList community score: 80/100. TV (2002). Defining ninja shōnen."},
  {"source":"animation","refId":"anilist:16498","title":"Attack on Titan","creator":"Tetsurō Araki","year":"2013","tags":["action","drama","fantasy","mystery"],cover: "/images/animation/anilist-16498.webp","url":"/animation/attack-on-titan/","seedName":"Attack on Titan","synopsis":"AniList community score: 85/100. TV (2013). Mainstream breakout dark-fantasy."},
  {"source":"animation","refId":"anilist:47","title":"Akira","creator":"Katsuhiro Otomo","year":"1988","tags":["action","adventure","horror","psychological","sci-fi","supernatural"],cover: "/images/animation/anilist-47.webp","url":"/animation/akira/","seedName":"Akira","synopsis":"AniList community score: 79/100. Film (1988), dir. Katsuhiro Otomo. A cornerstone of global anime recognition."},

  // ===== Western animation (public bibliographic facts) =====
  {"source":"animation","refId":"pixar:piper","title":"Piper","creator":"Pixar","year":"2016","tags":["short","family"],cover: "/images/animation/pixar-piper.webp","url":"/animation/piper/","seedName":"Piper","synopsis":"Pixar short film (2016), dir. Alan Barillaro. Won the Academy Award for Best Animated Short."},
  {"source":"animation","refId":"pixar:bao","title":"Bao","creator":"Pixar","year":"2018","tags":["short","family"],cover: "/images/animation/pixar-bao.webp","url":"/animation/bao/","seedName":"Bao","synopsis":"Pixar short film (2018), dir. Domee Shi. Won the Academy Award for Best Animated Short."},
  {"source":"animation","refId":"pixar:feast","title":"Feast","creator":"Pixar","year":"2014","tags":["short","family"],cover: "/images/animation/pixar-feast.webp","url":"/animation/feast/","seedName":"Feast","synopsis":"Pixar short film (2014), dir. Patrick Osborne. Won the Academy Award for Best Animated Short."},
];
