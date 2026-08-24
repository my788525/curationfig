import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MUSIC_THEMES, MOOD_THEMES, itemBlurb } from '@/lib/media/curation';
import { MUSIC_ITEMS } from '@/lib/media/generated-music';
import type { CurationItem } from '@/lib/media/musicbrainz';
import { CopyListButton } from '@/components/CopyListButton';
import Reveal from '@/components/Reveal';

export function generateStaticParams() {
  return [...MUSIC_THEMES, ...MOOD_THEMES].map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const t = MUSIC_THEMES.find((x) => x.slug === params.slug);
  if (!t) return { title: 'Music Curation' };
  return {
    title: t.title,
    description: t.intro,
    alternates: { canonical: `/music/${t.slug}/` },
  };
}

export default function MusicThemePage({ params }: { params: { slug: string } }) {
  const t = MUSIC_THEMES.find((x) => x.slug === params.slug);
  if (!t) notFound();

  // 匹配本专题的真实条目（优先按 seedName 精确匹配，回退 title）
  const itemsBySeed = new Map(MUSIC_ITEMS.map((i) => [(i.seedName || i.title).toLowerCase(), i]));
  const items: CurationItem[] = [];
  const missing: string[] = [];
  for (const name of t.items) {
    const hit = itemsBySeed.get(name.toLowerCase()) || itemsBySeed.get(name.toLowerCase().replace(/"/g, ''));
    if (hit) items.push(hit);
    else missing.push(name);
  }

  const faq = [
    {
      q: `What is "${t.title}" about?`,
      a: t.thesis,
    },
    {
      q: 'How is this different from an algorithm playlist?',
      a: 'Algorithm playlists optimize for engagement and familiarity. This is a curated argument — a human chose these records for a reason you can read.',
    },
    {
      q: 'Can I get a personalized list instead?',
      a: 'Yes — use the Playlist Generator to build a list from your mood, decade, and genre.',
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
    url: `https://curationfig.com/music/${t.slug}/`,
  };

  return (
    <section className="section">
      <div className="wrap">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collLd) }} />
        <div className="crumbs">
          <Link href="/">Home</Link> / <Link href="/music/">Music</Link> / {t.title}
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
              <h2 style={{ fontSize: '1.2rem', margin: 0 }}>The list ({items.length})</h2>
              <CopyListButton
                text={items.map((it, i) => `${i + 1}. ${it.title}${it.year ? ` (${it.year})` : ''} — ${it.creator}`).join('\n')}
                label="Copy title list"
                className="copy-btn"
              />
            </div>
            <Reveal className="item-rows">
              {items.map((it) => (
                <div key={it.refId} className="item-row">
                  <div className="thumb">
                    {it.cover ? (
                      <img src={it.cover} alt={`${it.title} cover`} loading="lazy" />
                    ) : (
                      <div className="thumb-empty">no art</div>
                    )}
                  </div>
                  <div className="meta">
                    <div className="name">{it.title}</div>
                    <div className="sub">{it.creator}{it.year ? ` · ${it.year}` : ''}</div>
                    <p className="why">{itemBlurb(it, t.thesis)}</p>
                    <div className="tags">
                      {it.tags.slice(0, 5).map((tg) => (
                        <span key={tg} className="tag-chip">{tg}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </Reveal>
            {missing.length > 0 && (
              <p className="muted" style={{ marginTop: 10 }}>
                {missing.length} entries pending metadata resolution from MusicBrainz.
              </p>
            )}
          </div>
        )}

        <div style={{ marginTop: 22, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <Link href="/tools/playlist/" className="pill-tag" style={{ background: 'var(--violet-600)' }}>
            🎵 Generate your own playlist →
          </Link>
          <Link href="/music/" className="pill-tag">← All music themes</Link>
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
