import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllArticles } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'Articles & Guides',
  description:
    'Long-form guides to mood-based media curation — how emotion moves across film, games, and music, and how to build your own cross-medium nights.',
  alternates: { canonical: '/articles/' },
};

export default function ArticlesIndex() {
  const articles = getAllArticles();
  return (
    <section className="section">
      <div className="wrap">
        <div className="crumbs">
          <Link href="/">Home</Link> / Articles
        </div>
        <h1>Articles &amp; Guides</h1>
        <p className="muted" style={{ maxWidth: 720, fontSize: 17 }}>
          The theory and method behind CurationFig. These are the pillar pages our lists link back to —
          how mood travels across film, games, and music, and how you can build your own cross-medium nights.
        </p>
        <div className="grid grid-2" style={{ marginTop: 22 }}>
          {articles.map((a) => (
            <Link key={a.slug} href={`/articles/${a.slug}/`} className="theme-card card" style={{ display: 'block' }}>
              <h3 style={{ color: 'var(--violet-700)', margin: '0 0 8px' }}>{a.title}</h3>
              <p className="muted" style={{ margin: '0 0 6px' }}>{a.subtitle}</p>
              {a.date && <p className="article-date" style={{ margin: 0 }}>Published {a.date}</p>}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
