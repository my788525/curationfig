import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticle, getArticleSlugs, getAllArticles } from '@/lib/articles';

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getArticle(params.slug);
  if (!a) return { title: 'Articles' };
  return {
    title: a.title,
    description: a.subtitle,
    alternates: { canonical: a.canonical },
  };
}

function relatedLinks(): { label: string; href: string }[] {
  return [
    { label: 'The Lonely Tuesday', href: '/music/lonely-tuesday/' },
    { label: 'Rain on the Window', href: '/music/rainy-window/' },
    { label: 'Golden-Hour Drive', href: '/music/golden-hour-drive/' },
    { label: 'Cozy Games', href: '/games/cozy-games/' },
    { label: 'Slow Cinema', href: '/film/slow-cinema-patience/' },
    { label: 'Neo-Noir', href: '/film/neo-noir-shadows/' },
    { label: 'The Antihero Era', href: '/tv/antihero-golden/' },
    { label: 'The Limited Series', href: '/tv/limited-series-tight/' },
  ];
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = getArticle(params.slug);
  if (!a) notFound();

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.subtitle,
    datePublished: a.date,
    author: { '@type': 'Organization', name: 'CurationFig' },
    publisher: { '@type': 'Organization', name: 'CurationFig' },
    mainEntityOfPage: a.canonical,
  };

  return (
    <section className="section">
      <div className="wrap">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
        <div className="crumbs">
          <Link href="/">Home</Link> / <Link href="/articles/">Articles</Link> / {a.title}
        </div>
        <article className="article">
          <h1>{a.title}</h1>
          {a.subtitle && <p className="article-sub">{a.subtitle}</p>}
          {a.date && <p className="article-date">Published {a.date}</p>}
          <div className="article-body" dangerouslySetInnerHTML={{ __html: a.html }} />
        </article>

        <div className="article-related">
          <h2>Keep exploring</h2>
          <div className="grid grid-2">
            {relatedLinks().map((r) => (
              <Link key={r.href} href={r.href} className="theme-card card" style={{ display: 'block' }}>
                <h3 style={{ color: 'var(--violet-700)', margin: '0 0 4px' }}>{r.label}</h3>
                <p className="muted" style={{ margin: 0, fontSize: 13 }}>A curated list on this theme →</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
