'use client';
import { useState } from 'react';

// 轻量候选池（静态演示；后续接 public/data/music-artists-2026.json 真实元数据）
// 字段：refId, title(artist), creator, year, tags, mood
type Cand = {
  refId: string;
  title: string;
  creator: string;
  year: string;
  tags: string[];
};

const POOL: Cand[] = [
  { refId: 'beatles', title: 'The Beatles', creator: 'The Beatles', year: '1960s', tags: ['rock', 'british', '1960s', 'melancholy'] },
  { refId: 'stones', title: 'The Rolling Stones', creator: 'The Rolling Stones', year: '1960s', tags: ['rock', 'british', '1960s', 'energetic'] },
  { refId: 'floyd', title: 'Pink Floyd', creator: 'Pink Floyd', year: '1970s', tags: ['rock', '1970s', 'focused', 'melancholy'] },
  { refId: 'queen', title: 'Queen', creator: 'Queen', year: '1970s', tags: ['rock', '1970s', 'energetic'] },
  { refId: 'radiohead', title: 'Radiohead', creator: 'Radiohead', year: '1990s', tags: ['indie', 'rock', '1990s', 'melancholy', 'british'] },
  { refId: 'nirvana', title: 'Nirvana', creator: 'Nirvana', year: '1990s', tags: ['indie', 'rock', '1990s', 'energetic'] },
  { refId: 'daft', title: 'Daft Punk', creator: 'Daft Punk', year: '2000s', tags: ['electronic', '2000s', 'focused', 'party'] },
  { refId: 'aphex', title: 'Aphex Twin', creator: 'Aphex Twin', year: '1990s', tags: ['electronic', '1990s', 'focused', 'ambient'] },
  { refId: 'kdot', title: 'Kendrick Lamar', creator: 'Kendrick Lamar', year: '2010s', tags: ['hiphop', '2010s', 'lyrical', 'energetic'] },
  { refId: 'miles', title: 'Miles Davis', creator: 'Miles Davis', year: '1970s', tags: ['jazz', '1970s', 'instrumental', 'focused'] },
  { refId: 'beethoven', title: 'Ludwig van Beethoven', creator: 'Beethoven', year: '1800s', tags: ['classical', 'piano', 'romantic', 'melancholy', 'focused'] },
];

const MOODS = ['relaxed', 'focused', 'energetic', 'melancholy', 'party'];
const DECADES = ['1960s', '1970s', '1990s', '2000s', '2010s'];
const GENRES = ['rock', 'electronic', 'jazz', 'hiphop', 'classical', 'indie'];

export function PlaylistGenerator() {
  const [mood, setMood] = useState('relaxed');
  const [decade, setDecade] = useState('');
  const [genre, setGenre] = useState('');
  const [result, setResult] = useState<Cand[] | null>(null);

  function build() {
    const scored = POOL.map((c) => {
      let s = 0;
      const tags = c.tags.map((t) => t.toLowerCase());
      if (mood && tags.includes(mood)) s += 3;
      if (genre && tags.includes(genre)) s += 2;
      if (decade && c.year.startsWith(decade.slice(0, 3))) s += 1;
      return { c, s };
    })
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 12)
      .map((x) => x.c);
    setResult(scored);
  }

  return (
    <div className="gen-box">
      <h3 style={{ marginTop: 0 }}>Build your playlist</h3>
      <p className="muted" style={{ marginBottom: 4 }}>
        Pick a mood and optionally a decade or genre. We&apos;ll assemble a starter list from
        our curated pool — the full generator connects to MusicBrainz metadata on launch.
      </p>

      <label>Mood *</label>
      <select value={mood} onChange={(e) => setMood(e.target.value)}>
        {MOODS.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>

      <label>Decade (optional)</label>
      <select value={decade} onChange={(e) => setDecade(e.target.value)}>
        <option value="">any</option>
        {DECADES.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>

      <label>Genre (optional)</label>
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="">any</option>
        {GENRES.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>

      <button className="gen-btn" onClick={build}>
        Generate playlist
      </button>

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
                  {c.creator} · {c.year}
                </div>
                <div style={{ marginTop: 3 }}>
                  {c.tags.map((t) => (
                    <span key={t} className="tag-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <p className="muted" style={{ marginTop: 10 }}>
            This is a demo pool. The production generator scores against the full MusicBrainz
            catalog with real release metadata.
          </p>
        </div>
      )}
    </div>
  );
}
