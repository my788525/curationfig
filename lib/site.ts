// CurationFig — 站点级常量
// 铁律：baseUrl 无尾斜杠（避免 bodystd 双斜杠 URL 事故）
export const SITE = {
  name: 'CurationFig',
  domain: 'https://curationfig.com',
  title: 'CurationFig — Editorially Curated Film, TV, Games & Music',
  description:
    'Hand-built curation guides and personalized watchlists, gamelists, and playlists. Not a database — a point of view. Discover what to watch, play, and listen to next, with editorial context you won\'t find in an algorithm.',
  // 当前首发频道：music；game/tv/film 后续批次
  launchChannel: 'music' as 'music' | 'game' | 'film' | 'tv',
  org: 'https://github.com/my788525/curationfig',
  email: 'admin@curationfig.com',
};

export type Channel = 'music' | 'game' | 'film' | 'tv' | 'books' | 'animation' | 'podcasts' | 'comics';

export const CHANNELS: { key: Channel; label: string; tagline: string; live: boolean }[] = [
  { key: 'music', label: 'Music', tagline: 'Playlists & artist curation', live: true },
  { key: 'game', label: 'Games', tagline: 'Gamelists & studio curation', live: true },
  { key: 'film', label: 'Film', tagline: 'Watchlists & director curation', live: true },
  { key: 'tv', label: 'TV', tagline: 'Binge guides & show curation', live: true },
  { key: 'books', label: 'Books', tagline: 'Literary curation & book lists', live: true },
  { key: 'animation', label: 'Animation', tagline: 'Anime & animation curation', live: true },
  { key: 'podcasts', label: 'Podcasts', tagline: 'Audio & podcast curation', live: true },
  { key: 'comics', label: 'Comics', tagline: 'Comics & graphic novel curation', live: true },
];
