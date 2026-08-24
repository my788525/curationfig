import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TV_THEMES, itemBlurb } from '@/lib/media/curation';
import { TV_ITEMS } from '@/lib/media/generated-tv';
import type { CurationItem } from '@/lib/media/musicbrainz';
import { CopyListButton } from '@/components/CopyListButton';
import Reveal from '@/components/Reveal';

export function generateStaticParams() {
  return TV_THEMES.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const t = TV_THEMES.find((x) => x.slug === params.slug);
  if (!t) return { title: 'TV Curation' };
  return {
    title: t.title,
    description: t.intro,
    alternates: { canonical: `/tv/${t.slug}/` },
  };
}

export default function TvThemePage({ params }: { params: { slug: string } }) {
  const t = TV_THEMES.find((x) => x.slug === params.slug);
  if (!t) notFound();

  const itemsBySeed = new Map(TV_ITEMS.map((i) => [(i.seedName || i.title).toLowerCase(), i]));
  const items: CurationItem[] = [];
  const missing: string[] = [];
  for (const name of t.items) {
    const hit = itemsBySeed.get(name.toLowerCase());
    if (hit) items.push(hit);
    else missing.push(name);
  }

  const faq = [
    {
      q: `What is "${t.title}" about?`,
      a: t.thesis,
    },
    {
      q: 'Why no spoilers or episode-score tables?',
      a: 'Those are commodity content an AI summary or a review aggregator already covers. We curate by argument — the reason these shows share a lineage — which no algorithm reproduces.',
    },
    {
      q: 'Can I get a personalized list instead?',
      a: 'Yes — use the Playlist Generator (TV mode) to build a list from your preferred mood and era.',
    },
  ];

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  const collLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: t.title,
    description: t.intro,
    url: `https://curationfig.com/tv/${t.slug}/`,
  };

  return (
    <section className="section">
      <div className="wrap">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collLd) }} />
        <div className="crumbs">
          <Link href="/">Home</Link> / <Link href="/tv/">TV</Link> / {t.title}
        </div>
        <h1>{t.title}</h1>
        <p style={{ fontSize: 18, maxWidth: 720 }}>{t.intro}</p>

        <div className="card" style={{ marginTop: 18 }}>
          <h2 style={{ fontSize: '1.15rem' }}>The curation thesis</h2>
          <p style={{ fontSize: 16.5 }}>{t.thesis}</p>
          <div style={{ marginTop: 6 }}>
            {t.tags.map((tag) => (
              <span key={tag} className="tag-chip">{tag}</span>
            ))}
          </div>
        </div>

        {t.compare && (
          <div className="card" style={{ marginTop: 14, borderLeft: '4px solid var(--violet-500)' }}>
            <h2 style={{ fontSize: '1.15rem' }}>Why these four mediums, one mood</h2>
            <p style={{ fontSize: 16 }}>{t.compare}</p>
          </div>
        )}

        {items.length > 0 && (
          <div style={{ marginTop: 26 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 12 }}>
              <h2 style={{ fontSize: '1.2rem', margin: 0 }}>The list</h2>
              <CopyListButton
                titles={items.map((it) => it.title)}
                meta={items.map((it) => `${it.creator}${it.year ? ` (${it.year})` : ''}`)}
                label="Copy titles"
              />
            </div>
            <Reveal className="item-rows">
              {items.map((it) => (
                <div key={it.refId} className="item-row">
                  <div className="thumb">
                    {it.cover ? (
                      <img src={it.cover} alt={`${it.title} poster`} loading="lazy" />
                    ) : (
                      <div className="thumb-empty">no art</div>
                    )}
                  </div>
                  <div className="meta">
                    <div className="name">{it.title}</div>
                    <div className="sub">{it.creator}{it.year ? ` · ${it.year}` : ''}</div>
                    {it.tags.length > 0 && (
                      <div className="row-tags">
                        {it.tags.slice(0, 4).map((tag) => (
                          <span key={tag} className="tag-chip">{tag}</span>
                        ))}
                      </div>
                    )}
                    <p className="why">{itemBlurb(it, t.thesis)}</p>
                  </div>
                </div>
              ))}
            </Reveal>
            {missing.length > 0 && (
              <p className="muted" style={{ marginTop: 10 }}>
                {missing.length} entries pending metadata resolution from TMDB.
              </p>
            )}
          </div>
        )}

        <div style={{ marginTop: 22, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <Link href="/tv/" className="pill-tag">← All TV themes</Link>
        </div>

        <h2 style={{ marginTop: 30, fontSize: '1.15rem' }}>Frequently asked</h2>
        <div className="grid grid-2">
          {faq.map((f) => (
            <div key={f.q} className="card">
              <h3 style={{ fontSize: '1rem' }}>{f.q}</h3>
              <p className="muted" style={{ margin: 0 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
