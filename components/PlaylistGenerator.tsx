'use client';
import { useState } from 'react';
import { MUSIC_ITEMS } from '@/lib/media/generated-music';
import { GAME_ITEMS } from '@/lib/media/generated-games';
import { FILM_ITEMS } from '@/lib/media/generated-film';
import { TV_ITEMS } from '@/lib/media/generated-tv';
import { itemBlurb } from '@/lib/media/curation';
import type { CurationItem } from '@/lib/media/musicbrainz';
import { CopyListButton } from '@/components/CopyListButton';

const MOODS = ['relaxed', 'focused', 'energetic', 'melancholy', 'party'];
const DECADES = ['1960s', '1970s', '1980s', '1990s', '2000s', '2010s'];
const GENRES = ['rock', 'electronic', 'jazz', 'hiphop', 'classical', 'indie', 'ambient', 'soul'];

const THESIS_BY_MODE: Record<string, string> = {
  music: 'A starter mix drawn from our curated catalog.',
  game: 'A starter set drawn from our curated catalog.',
  film: 'A starter watchlist drawn from our curated catalog.',
  tv: 'A starter bingelist drawn from our curated catalog.',
};

export function PlaylistGenerator() {
  const [mode, setMode] = useState<'music' | 'game' | 'film' | 'tv'>('music');
  const [mood, setMood] = useState('relaxed');
  const [decade, setDecade] = useState('');
  const [genre, setGenre] = useState('');
  const [result, setResult] = useState<CurationItem[] | null>(null);

  const pool =
    mode === 'music' ? MUSIC_ITEMS :
    mode === 'game' ? GAME_ITEMS :
    mode === 'film' ? FILM_ITEMS :
    TV_ITEMS;

  function build() {
    const scored = pool
      .map((it) => {
        let s = 0;
        const tags = (it.tags || []).map((t) => t.toLowerCase());
        if (mood && tags.includes(mood)) s += 3;
        if (genre && tags.includes(genre)) s += 2;
        if (decade && it.year && it.year.startsWith(decade.slice(0, 3))) s += 1;
        return { it, s };
      })
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 20)
      .map((x) => x.it);
    setResult(scored);
  }

  const labelMap: Record<string, string> = {
    music: 'playlist', game: 'gamelist', film: 'watchlist', tv: 'bingelist',
  };

  return (
    <div className="gen-2col">
      {/* Left: controls */}
      <div className="gen-box">
        <h3 style={{ marginTop: 0 }}>Build your {labelMap[mode]}</h3>
        <p className="muted" style={{ marginBottom: 4 }}>
          Pick a mood and optionally a decade or genre. We assemble a starter list from our
          curated catalog with real metadata.
          {pool.length === 0 && ' (catalog populating — demo mode active)'}
        </p>

        <div style={{ display: 'flex', gap: 8, margin: '8px 0 4px', flexWrap: 'wrap' }}>
          {(['music', 'game', 'film', 'tv'] as const).map((m) => (
            <button
              key={m}
              onClick={() => { setMode(m); setResult(null); }}
              className="gen-btn"
              style={{ background: mode === m ? 'var(--violet-600)' : 'var(--line-strong)', margin: 0 }}
            >
              {m === 'music' ? '🎵 Music' : m === 'game' ? '🎮 Games' : m === 'film' ? '🎬 Film' : '📺 TV'}
            </button>
          ))}
        </div>

        <label>Mood *</label>
        <select value={mood} onChange={(e) => setMood(e.target.value)}>
          {MOODS.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        <label>Decade (optional)</label>
        <select value={decade} onChange={(e) => setDecade(e.target.value)}>
          <option value="">any</option>
          {DECADES.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        <label>Genre (optional)</label>
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">any</option>
          {GENRES.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>

        <button className="gen-btn" onClick={build}>Generate</button>
      </div>

      {/* Right: result */}
      <div className="gen-result">
        {result ? (
          <div className="card gen-pop" key={result.length + mode} style={{ padding: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 10 }}>
              <h3 style={{ margin: 0, fontSize: '1.05rem' }}>Your starter list ({result.length})</h3>
              <CopyListButton
                titles={result.map((c) => c.title)}
                meta={result.map((c) => `${c.creator}${c.year ? ` (${c.year})` : ''}`)}
                label="Copy list"
              />
            </div>
            <div className="item-rows">
              {result.map((c, i) => (
                <div key={c.refId} className="item-row">
                  <div className="thumb">
                    {c.cover ? (
                      <img src={c.cover} alt={`${c.title} cover`} loading="lazy" />
                    ) : (
                      <div className="thumb-empty">no art</div>
                    )}
                  </div>
                  <div className="meta">
                    <div className="name">
                      <span style={{ color: 'var(--violet-500)', fontWeight: 800, marginRight: 8 }}>{i + 1}</span>
                      {c.title}
                    </div>
                    <div className="sub">{c.creator}{c.year ? ` · ${c.year}` : ''}</div>
                    {c.tags.length > 0 && (
                      <div className="row-tags">
                        {c.tags.slice(0, 5).map((t) => (
                          <span key={t} className="tag-chip">{t}</span>
                        ))}
                      </div>
                    )}
                    <p className="why">{itemBlurb(c, THESIS_BY_MODE[mode])}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="gen-result-empty">
            <div style={{ fontSize: 38, marginBottom: 8 }}>🎯</div>
            <p className="muted" style={{ margin: 0 }}>
              Your generated list will appear here. Choose a mood and hit <b>Generate</b>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
