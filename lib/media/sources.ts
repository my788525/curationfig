// ===== 数据源授权声明 + 检索日 + 署名常量 =====
// 实测日期：2026-08-24（联网核查 TMDB API Terms + 官方论坛 staff + RAWG/MB 文档）

export const DATA_SOURCES = {
  musicbrainz: {
    name: 'MusicBrainz',
    license: 'CC0 (public domain dedication)',
    attributionRequired: false, // CC0 不强制署名，但我们主动署名以求透明
    retrieved: '2026-08-24',
    homepage: 'https://musicbrainz.org/',
    note: 'MusicBrainz data is released into the public domain under CC0. Cover art via Cover Art Archive (CC licensed).',
  },
  coverArtArchive: {
    name: 'Cover Art Archive',
    license: 'CC BY-SA / CC BY-NC (per release)',
    attributionRequired: true,
    retrieved: '2026-08-24',
    homepage: 'https://coverartarchive.org/',
    note: 'Cover images are sourced per-release under their respective CC licenses.',
  },
  rawg: {
    name: 'RAWG',
    license: 'Free tier (email-registered API key). Attribution required.',
    attributionRequired: true,
    retrieved: '2026-08-24',
    homepage: 'https://rawg.io/',
    note: 'IGDB was dropped (parent Twitch requires SMS 2FA, unreachable from CN mobile). RAWG is the equivalent substitute.',
  },
  tmdb: {
    name: 'The Movie Database (TMDB)',
    license:
      'Free developer key = non-commercial only. Displaying ads on a destination website is explicitly "Commercial Use" per TMDB API Terms; commercial subscription is $149/month (self-serve, confirmed by TMDB staff).',
    attributionRequired: true,
    retrieved: '2026-08-24',
    homepage: 'https://www.themoviedb.org/',
    notice:
      'This product uses the TMDB API but is not endorsed or certified by TMDB.',
  },
} as const;

// 站点级署名横幅（数据页 / footer 复用）
export const ATTRIBUTION_HTML = `
  <p class="muted">
    Music data: <a href="https://musicbrainz.org/" rel="nofollow noopener">MusicBrainz</a> (CC0).
    Cover art: <a href="https://coverartarchive.org/" rel="nofollow noopener">Cover Art Archive</a>.
    Game data (upcoming): <a href="https://rawg.io/" rel="nofollow noopener">RAWG</a>.
    Film/TV data (upcoming): <a href="https://www.themoviedb.org/" rel="nofollow noopener">TMDB</a>
    — this product uses the TMDB API but is not endorsed or certified by TMDB.
  </p>
`;
