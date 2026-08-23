import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MUSIC_THEMES } from '@/lib/media/curation';

export function generateStaticParams() {
  return MUSIC_THEMES.map((t) => ({ slug: t.slug }));
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

  // 构建期条目数据尚未填充（itemRefs 空），首发展示 editorial + 占位条目引导
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
    url: `${'https://curationfig.com'}/music/${t.slug}/`,
  };

  return (
    <section className="section">
      <div className="wrap">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collLd) }}
        />
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
              <span key={tag} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="banner" style={{ marginTop: 20 }}>
          <strong>Building the list.</strong> This theme&apos;s full track/album cards are being
          assembled from MusicBrainz (CC0) metadata. The editorial framing above is the part
          an algorithm can&apos;t replicate — the list is next.
        </div>

        <div style={{ marginTop: 22, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <Link href="/tools/playlist/" className="pill-tag" style={{ background: 'var(--violet-600)' }}>
            🎵 Generate your own playlist →
          </Link>
          <Link href="/music/" className="pill-tag">
            ← All music themes
          </Link>
        </div>

        <h2 style={{ marginTop: 30, fontSize: '1.15rem' }}>Frequently asked</h2>
        <div className="grid grid-2">
          {faq.map((f) => (
            <div key={f.q} className="card">
              <h3 style={{ fontSize: '1rem' }}>{f.q}</h3>
              <p className="muted" style={{ margin: 0 }}>
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
