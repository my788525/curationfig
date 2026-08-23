'use client';
import { useState } from 'react';
import { MUSIC_ITEMS } from '@/lib/media/generated-music';
import { GAME_ITEMS } from '@/lib/media/generated-games';
import type { CurationItem } from '@/lib/media/musicbrainz';

const MOODS = ['relaxed', 'focused', 'energetic', 'melancholy', 'party'];
const DECADES = ['1960s', '1970s', '1980s', '1990s', '2000s', '2010s'];
const GENRES = ['rock', 'electronic', 'jazz', 'hiphop', 'classical', 'indie', 'ambient', 'soul'];

export function PlaylistGenerator() {
  const [mode, setMode] = useState<'music' | 'game'>('music');
  const [mood, setMood] = useState('relaxed');
  const [decade, setDecade] = useState('');
  const [genre, setGenre] = useState('');
  const [result, setResult] = useState<CurationItem[] | null>(null);

  const pool = mode === 'music' ? MUSIC_ITEMS : GAME_ITEMS;

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

  return (
    <div className="gen-box">
      <h3 style={{ marginTop: 0 }}>Build your {mode === 'music' ? 'playlist' : 'gamelist'}</h3>
      <p className="muted" style={{ marginBottom: 4 }}>
        Pick a mood and optionally a decade or genre. We assemble a starter list from our
        curated catalog with real metadata.
        {pool.length === 0 && ' (catalog populating — demo mode active)'}
      </p>

      <div style={{ display: 'flex', gap: 8, margin: '8px 0 4px' }}>
        <button
          onClick={() => setMode('music')}
          className="gen-btn"
          style={{ background: mode === 'music' ? 'var(--violet-600)' : 'var(--line-strong)', margin: 0 }}
        >
          🎵 Music
        </button>
        <button
          onClick={() => setMode('game')}
          className="gen-btn"
          style={{ background: mode === 'game' ? 'var(--violet-600)' : 'var(--line-strong)', margin: 0 }}
        >
          🎮 Games
        </button>
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

      {result && (
        <div className="playlist-out">
          <h3 style={{ fontSize: '1.05rem' }}>
            Your starter list ({result.length})
          </h3>
          {result.map((c, i) => (
            <div key={c.refId} className="row">
              <span className="idx">{i + 1}</span>
              <div>
                <div style={{ fontWeight: 700 }}>{c.title}</div>
                <div className="muted" style={{ fontSize: 12.5 }}>
                  {c.creator}{c.year ? ` · ${c.year}` : ''}
                </div>
                <div style={{ marginTop: 3 }}>
                  {c.tags.slice(0, 5).map((t) => (
                    <span key={t} className="tag-chip">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
