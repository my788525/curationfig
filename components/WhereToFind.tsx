'use client';
import { useState } from 'react';
import { MUSIC_ITEMS, GAME_ITEMS, FILM_ITEMS, TV_ITEMS } from '@/lib/media/generated-all';

type Channel = { name: string; note: string };
type Guidance = { intro: string; channels: Channel[]; tip: string };

// 合法获取渠道指引（静态知识库，非联盟链接、非盗版）。按类型给出主流正版渠道。
const GUIDE: Record<string, Guidance> = {
  music: {
    intro: 'Music is licensed per region. These are the mainstream legal ways to listen — most offer free tiers.',
    channels: [
      { name: 'Streaming (Spotify, Apple Music, YouTube Music, Amazon Music)', note: 'On-demand listening; most have free ad-supported tiers.' },
      { name: 'Bandcamp', note: 'Direct-to-artist purchases and downloads; best for indie & niche.' },
      { name: 'Qobuz / Tidal', note: 'Lossless / hi-res for audiophiles.' },
      { name: 'Public library (Freegal, Hoopla)', note: 'Free with a library card in many regions.' },
      { name: 'Physical & official store', note: 'Vinyl, CD, merch from artist or label shops.' },
    ],
    tip: 'If a release is region-locked or unavailable, it is usually a licensing gap — not a missing source. Try an official artist page for store links.',
  },
  game: {
    intro: 'Games are sold on platform stores; ownership model (buy-once vs subscription) varies by title.',
    channels: [
      { name: 'Steam', note: 'Largest PC catalog; frequent legit sales.' },
      { name: 'Console stores (PlayStation, Xbox, Nintendo eShop)', note: 'Platform-exclusive & cross-buy titles.' },
      { name: 'Epic Games Store / GOG', note: 'GOG = DRM-free; Epic = free games program.' },
      { name: 'Subscription (Game Pass, PlayStation Plus, EA Play)', note: 'Pay monthly, play catalog.' },
      { name: 'Official publisher store', note: 'For deluxe / collector editions.' },
    ],
    tip: 'Always buy from the platform store or publisher directly. Key-reselling grey markets carry region-lock and revoke risk.',
  },
  film: {
    intro: 'Films rotate between services by distribution deals. Check a aggregator, then watch on the licensed service.',
    channels: [
      { name: 'Streaming (Netflix, Prime Video, Disney+, Max, Apple TV+)', note: 'Subscription; catalogs rotate.' },
      { name: 'Rent / buy (Apple TV, Google TV, Vudu, YouTube)', note: 'Transactional, no subscription.' },
      { name: 'Physical (Blu-ray, 4K UHD)', note: 'Ownership + extras; used market is legal.' },
      { name: 'Library (Kanopy, Hoopla)', note: 'Free with a library card.' },
      { name: 'Cinema / festival', note: 'For new releases & restorations.' },
    ],
    tip: 'Use a streaming-search site (e.g. JustWatch) to see which service currently licenses a title in your region.',
  },
  tv: {
    intro: 'TV lives on streaming with regional licensing. Binge passes and season buys are common.',
    channels: [
      { name: 'Streaming (Netflix, Hulu, Disney+, Max, Peacock)', note: 'Episodic, often with weekly drops.' },
      { name: 'Network apps (BBC iPlayer, ITVX, CBC Gem)', note: 'Free, region-locked to the broadcaster country.' },
      { name: 'Buy seasons (Apple TV, Amazon)', note: 'Own past seasons outright.' },
      { name: 'Library (Kanopy, Hoopla)', note: 'Free with a library card.' },
      { name: 'Physical (Blu-ray box sets)', note: 'For completed series.' },
    ],
    tip: 'Many shows are geo-locked to their home broadcaster. A legitimate regional service or library app is the safe route.',
  },
};

const POOLS: Record<string, { items: { title: string }[]; label: string }> = {
  music: { items: MUSIC_ITEMS, label: 'Music' },
  game: { items: GAME_ITEMS, label: 'Games' },
  film: { items: FILM_ITEMS, label: 'Film' },
  tv: { items: TV_ITEMS, label: 'TV' },
};

export function WhereToFind() {
  const [mode, setMode] = useState<'music' | 'game' | 'film' | 'tv'>('film');
  const [title, setTitle] = useState('');
  const g = GUIDE[mode];

  return (
    <div className="gen-2col">
      <div className="gen-box">
        <h3 style={{ marginTop: 0 }}>Where to find it</h3>
        <p className="muted" style={{ marginBottom: 8 }}>
          Pick a type and (optionally) a title. We point you to the mainstream <b>legal</b> ways
          to watch, play, or listen — no piracy, no affiliate traps.
        </p>
        <div style={{ display: 'flex', gap: 8, margin: '8px 0 4px', flexWrap: 'wrap' }}>
          {(['music', 'game', 'film', 'tv'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className="gen-btn"
              style={{ background: mode === m ? 'var(--violet-600)' : 'var(--line-strong)', margin: 0 }}
            >
              {m === 'music' ? '🎵 Music' : m === 'game' ? '🎮 Games' : m === 'film' ? '🎬 Film' : '📺 TV'}
            </button>
          ))}
        </div>
        <label>Title (optional — for context)</label>
        <input
          list="wheretogo-names"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. start typing a title…"
        />
        <datalist id="wheretogo-names">
          {POOLS[mode].items.map((it) => <option key={it.title} value={it.title} />)}
        </datalist>
      </div>

      <div className="gen-result">
        <div className="card" style={{ padding: 18 }}>
          <h3 style={{ margin: '0 0 6px', fontSize: '1.05rem' }}>Legal ways to get {mode === 'music' ? 'music' : mode === 'game' ? 'games' : mode === 'film' ? 'films' : 'TV'}{title ? ` — “${title}”` : ''}</h3>
          <p className="muted" style={{ marginTop: 0 }}>{g.intro}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
            {g.channels.map((c) => (
              <div key={c.name} style={{ borderLeft: '3px solid var(--violet-500)', paddingLeft: 12 }}>
                <div style={{ fontWeight: 700, fontSize: 14.5 }}>{c.name}</div>
                <div className="muted" style={{ margin: 0, fontSize: 13 }}>{c.note}</div>
              </div>
            ))}
          </div>
          <div className="banner" style={{ marginTop: 14 }}>{g.tip}</div>
        </div>
      </div>
    </div>
  );
}
