import type { Metadata } from 'next';
import Link from 'next/link';
import { DATA_SOURCES } from '@/lib/media/sources';

export const metadata: Metadata = {
  title: 'Data & Sources',
  description:
    'Where CurationFig data comes from, licensing, and how to cite or reuse our open datasets.',
  alternates: { canonical: '/data/' },
};

export default function DataPage() {
  const ds = Object.values(DATA_SOURCES);
  const datasetLd = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'CurationFig Curated Themes',
    description:
      'Editorially curated themes across music, games, film, and TV. Each record carries a human-written thesis explaining why the listed works belong together, plus mood, audience, selection criteria, alternatives, FAQ, and related themes. Original curatorial structure by CurationFig; underlying metadata attributed to MusicBrainz (CC0), RAWG, and TMDB.',
    license: 'https://creativecommons.org/licenses/by/4.0/',
    url: 'https://curationfig.com/data/',
    creator: { '@type': 'Organization', name: 'CurationFig', url: 'https://curationfig.com/' },
    datePublished: '2026-08-24',
    keywords: ['curation', 'editorial', 'mood', 'film', 'tv', 'games', 'music', 'recommendation'],
    distribution: {
      '@type': 'DataDownload',
      encodingFormat: 'application/json',
      contentUrl: 'https://curationfig.com/data/curation-themes.json',
    },
  };
  return (
    <section className="section">
      <div className="wrap">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetLd) }}
        />
        <div className="crumbs">
          <Link href="/">Home</Link> / Data &amp; Sources
        </div>
        <h1>Data &amp; Sources</h1>
        <p className="muted" style={{ maxWidth: 700 }}>
          {`CurationFig is an editorial curation layer, not a data warehouse. We surface metadata
          from open, attributed sources and add the human argument on top. Here's exactly where
          everything comes from.`}
        </p>

        <div className="grid grid-2" style={{ marginTop: 18 }}>
          {ds.map((d) => (
            <div key={d.name} className="card">
              <h3 style={{ fontSize: '1.05rem' }}>{d.name}</h3>
              <p className="muted" style={{ margin: '4px 0' }}>
                <strong>License:</strong> {d.license}
              </p>
              <p className="muted" style={{ margin: '4px 0' }}>
                <strong>Retrieved:</strong> {d.retrieved}
              </p>
              {(d as { note?: string }).note && (
                <p style={{ fontSize: 13.5, margin: '6px 0 0' }}>
                  {(d as { note?: string }).note}
                </p>
              )}
              <p style={{ margin: '8px 0 0' }}>
                <a href={d.homepage} rel="nofollow noopener" target="_blank">
                  {d.homepage}
                </a>
              </p>
            </div>
          ))}
        </div>

        <div className="banner" style={{ marginTop: 22 }}>
          <strong>Attribution:</strong> Music data from{' '}
          <a href="https://musicbrainz.org/" rel="nofollow noopener">MusicBrainz</a> (CC0) and
          cover art from <a href="https://coverartarchive.org/" rel="nofollow noopener">Cover Art Archive</a>.
          Game data from <a href="https://rawg.io/" rel="nofollow noopener">RAWG</a> (attribution
          required). Film &amp; TV data from{' '}
          <a href="https://www.themoviedb.org/" rel="nofollow noopener">TMDB</a> — this product uses
          the TMDB API but is not endorsed or certified by TMDB.
        </div>

        <h2 style={{ marginTop: 28 }}>Open datasets</h2>

        <div className="card" style={{ borderLeft: '3px solid var(--violet-600)', marginTop: 12, marginBottom: 18 }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: 6 }}>
            Curation Themes — the editorial layer (recommended)
          </h3>
          <p className="muted" style={{ margin: '4px 0' }}>
            <strong>210 curated themes</strong> (music 63 · games 53 · film 47 · TV 47), each with a
            human-written thesis, mood tags, audience, selection criteria, alternatives, FAQ, and
            related themes. This is the part no API generates — the argument for <em>why these
            works belong together</em>. Licensed <strong>CC BY 4.0</strong>: reuse freely with
            attribution to CurationFig.
          </p>
          <p style={{ margin: '10px 0 0' }}>
            <a href="/data/curation-themes.json" rel="noopener">⬇ Download curation-themes.json</a>{' '}
            <span className="muted">(1.0 MB)</span>
          </p>
          <p className="muted" style={{ fontSize: 13, margin: '6px 0 0' }}>
            Cite as: CurationFig. <em>Curation Themes</em> [dataset]. CC BY 4.0. Retrieved 2026-08-24.
            https://curationfig.com/data/curation-themes.json
          </p>
        </div>

        <ul>
          <li>
            <code>music-items.json</code> — MusicBrainz release-group metadata (CC0), generated at
            build time.
          </li>
          <li>
            <code>game-items.json</code> — RAWG game metadata (attribution required), generated at
            build time.
          </li>
          <li>
            <code>film-items.json</code> / <code>tv-items.json</code> — TMDB film/TV metadata,
            generated at build time.
          </li>
          <li>
            <code>lib/media/generated-music.ts</code> / <code>generated-games.ts</code> /{' '}
            <code>generated-film.ts</code> / <code>generated-tv.ts</code> — typed data modules
            consumed by the static site.
          </li>
        </ul>
      </div>
    </section>
  );
}
