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
          <strong>TMDB notice:</strong> This product uses the TMDB API but is not endorsed or
          certified by TMDB. Film &amp; TV channels launch in a later batch.
        </div>

        <h2 style={{ marginTop: 28 }}>Open datasets</h2>
        <ul>
          <li>
            <code>music-artists-2026.json</code> — MusicBrainz artist metadata (CC0), generated
            at build time.
          </li>
          <li>Game / Film / TV datasets — pending respective batch launches.</li>
        </ul>
      </div>
    </section>
  );
}
