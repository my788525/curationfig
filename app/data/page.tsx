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
    name: 'CurationFig Curated Media Metadata',
    description:
      'Editorially curated music, game, film, and TV metadata with attribution to source providers (MusicBrainz CC0, RAWG, TMDB).',
    license: 'https://creativecommons.org/publicdomain/zero/1.0/',
    url: 'https://curationfig.com/data/',
    creator: { '@type': 'Organization', name: 'CurationFig' },
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
          required). Film &amp; TV (TMDB) channels launch in a later batch — this product uses the
          TMDB API but is not endorsed or certified by TMDB.
        </div>

        <h2 style={{ marginTop: 28 }}>Open datasets</h2>
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
            <code>lib/media/generated-music.ts</code> &amp;{' '}
            <code>generated-games.ts</code> — typed data modules consumed by the static site.
          </li>
        </ul>
      </div>
    </section>
  );
}
