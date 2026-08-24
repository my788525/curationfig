'use client';
import { useState } from 'react';
import { MUSIC_ITEMS, GAME_ITEMS, FILM_ITEMS, TV_ITEMS } from '@/lib/media/generated-all';
import { itemBlurb } from '@/lib/media/curation';
import type { CurationItem } from '@/lib/media/musicbrainz';

const POOLS: Record<string, { items: CurationItem[]; label: string }> = {
  music: { items: MUSIC_ITEMS, label: 'Music' },
  game: { items: GAME_ITEMS, label: 'Games' },
  film: { items: FILM_ITEMS, label: 'Film' },
  tv: { items: TV_ITEMS, label: 'TV' },
};

function overlap(a: string[], b: string[]): number {
  const sa = new Set(a.map((x) => x.toLowerCase()));
  const sb = new Set(b.map((x) => x.toLowerCase()));
  let inter = 0;
  sa.forEach((x) => { if (sb.has(x)) inter += 1; });
  const union = new Set([...sa, ...sb]).size || 1;
  return inter / union; // Jaccard
}

export function TasteTwin() {
  const [mode, setMode] = useState<'music' | 'game' | 'film' | 'tv'>('music');
  const [seed, setSeed] = useState('');
  const [result, setResult] = useState<{ item: CurationItem; score: number }[] | null>(null);

  const pool = POOLS[mode].items;
  const names = pool.map((it) => it.title).sort();

  function find() {
    const q = seed.trim().toLowerCase();
    const match = pool.find((it) => it.title.toLowerCase() === q) ||
      pool.find((it) => it.title.toLowerCase().includes(q));
    if (!match) { setResult([]); return; }
    const scored = pool
      .filter((it) => it.refId !== match.refId)
      .map((it) => ({ item: it, score: overlap(match.tags, it.tags) }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12);
    setResult(scored);
  }

  return (
    <div className="gen-2col">
      <div className="gen-box">
        <h3 style={{ marginTop: 0 }}>Taste Twin — find your next</h3>
        <p className="muted" style={{ marginBottom: 8 }}>
          Type a title you already love. We surface the closest matches in our catalog by
          sharing genres, moods, and themes — not popularity.
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
        <label>Title *</label>
        <input
          list="tastetwin-names"
          value={seed}
          onChange={(e) => setSeed(e.target.value)}
          placeholder="e.g. start typing a title…"
        />
        <datalist id="tastetwin-names">
          {names.map((n) => <option key={n} value={n} />)}
        </datalist>
        <button className="gen-btn" onClick={find}>Find matches</button>
      </div>

      <div className="gen-result">
        {result === null ? (
          <div className="gen-result-empty">
            <div style={{ fontSize: 38, marginBottom: 8 }}>🔗</div>
            <p className="muted" style={{ margin: 0 }}>
              Pick a title and we&apos;ll map its nearest neighbours by shared tags.
            </p>
          </div>
        ) : result.length === 0 ? (
          <div className="gen-result-empty">
            <p className="muted" style={{ margin: 0 }}>
              No match found for “{seed}”. Try a title from the suggestions.
            </p>
          </div>
        ) : (
          <div className="card" style={{ padding: 18 }}>
            <h3 style={{ margin: '0 0 10px', fontSize: '1.05rem' }}>Closest matches</h3>
            <div className="item-rows">
              {result.map(({ item, score }) => (
                <div key={item.refId} className="item-row">
                  <div className="thumb">
                    {item.cover ? <img src={item.cover} alt={`${item.title} cover`} loading="lazy" /> : <div className="thumb-empty">no art</div>}
                  </div>
                  <div className="meta">
                    <div className="name">{item.title}</div>
                    <div className="sub">{item.creator}{item.year ? ` · ${item.year}` : ''} · {Math.round(score * 100)}% tag overlap</div>
                    <p className="why">{itemBlurb(item, `Because it shares the same DNA as what you love — ${item.tags.slice(0, 3).join(', ')}.`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
