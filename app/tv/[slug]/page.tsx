import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  TV_THEMES,
  itemBlurb,
  consumptionTip,
  themeAudience,
  themeCriteria,
  themeAlternatives,
  themeFaq,
  relatedThemes,
  channelHref,
} from '@/lib/media/curation';
import { TV_ITEMS } from '@/lib/media/generated-tv';
import type { CurationItem } from '@/lib/media/musicbrainz';
import { CopyListButton } from '@/components/CopyListButton';
import Reveal from '@/components/Reveal';
import Cover from '@/components/Cover';
import StyleCards from '@/components/StyleCard';
import { stylesForTags } from '@/lib/media/style-glossary';

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
    if (hit) items.push({ ...hit, editorialNote: t.editorialNotes?.[name] });
    else missing.push(name);
  }

  const audience = themeAudience(t);
  const criteria = themeCriteria(t);
  const alternatives = themeAlternatives(t);
  const faq = themeFaq(t);
  const related = relatedThemes(t);

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
        <p style={{ fontSize: 18, maxWidth: 760, lineHeight: 1.62 }}>{t.intro}</p>

        <div className="card editorial" style={{ marginTop: 18 }}>
          <h2 className="ed-h">Who this list is for</h2>
          <p className="ed-p">{audience}</p>
        </div>

        <div className="card editorial" style={{ marginTop: 14, borderLeft: '4px solid var(--teal-600)' }}>
          <h2 className="ed-h">How we picked (our criteria)</h2>
          <p className="ed-p">{criteria}</p>
        </div>

        <div className="card editorial" style={{ marginTop: 14 }}>
          <h2 className="ed-h">The curation thesis</h2>
          <p className="ed-p">{t.thesis}</p>
          <div style={{ marginTop: 8 }}>
            {t.tags.map((tag) => (
              <span key={tag} className="tag-chip">{tag}</span>
            ))}
          </div>
        </div>

        {/* 风格定义小卡片（API 拿不到的策展知识） */}
        <StyleCards styles={stylesForTags(t.tags)} />

        {t.compare && (
          <div className="card editorial" style={{ marginTop: 14, borderLeft: '4px solid var(--violet-500)' }}>
            <h2 className="ed-h">Why these four mediums, one mood</h2>
            <p className="ed-p">{t.compare}</p>
          </div>
        )}

        {items.length > 0 && (
          <div style={{ marginTop: 28 }}>
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
                    <Cover src={it.cover} alt={`${it.title} cover`} />
                  </div>
                  <div className="meta">
                    <div className="name">{it.title}</div>
                    <div className="sub">{it.creator}{it.year ? ` · ${it.year}` : ''}</div>
                    <p className="why">{itemBlurb(it, t.thesis)}</p>
                    {it.editorialNote && it.editorialNote.trim() && (
                      <p className="editorial-note">💬 Our take: {it.editorialNote}</p>
                    )}
                    <p className="consume-tip">🕯 {consumptionTip(it)}</p>
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
                {missing.length} entries pending metadata resolution from TMDB.
              </p>
            )}
          </div>
        )}

        <div className="card editorial" style={{ marginTop: 28, borderLeft: '4px solid var(--amber-500)' }}>
          <h2 className="ed-h">If this list isn&apos;t quite your night</h2>
          <p className="ed-p">{alternatives}</p>
        </div>

        {related.length > 0 && (
          <div style={{ marginTop: 28 }}>
            <h2 className="ed-h" style={{ marginBottom: 12 }}>Related curation lists</h2>
            <div className="grid grid-2">
              {related.map((r) => (
                <Link key={r.slug} href={channelHref(r)} className="theme-card card" style={{ display: 'block' }}>
                  <h3 style={{ color: 'var(--violet-700)', margin: '0 0 6px' }}>{r.title}</h3>
                  <p className="muted" style={{ margin: 0, fontSize: 13.5 }}>{r.intro}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: 22, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <Link href="/tools/playlist/" className="pill-tag" style={{ background: 'var(--violet-600)' }}>
            📺 Generate your own list →
          </Link>
          <Link href="/tv/" className="pill-tag">← All TV themes</Link>
        </div>

        <div className="pillar-links">
          <h2>Go deeper — the theory behind this list</h2>
          <p>These pillar guides explain the mood-first method and link back to lists like this one.</p>
          <div>
            <Link href="/articles/how-mood-shapes-media-choice/">How Mood Shapes Media Choice →</Link>
            {' · '}
            <Link href="/articles/mixing-media/">A Beginner&apos;s Guide to Mixing Media →</Link>
            {' · '}
            <Link href="/articles/cozy-media-defined/">What Makes &quot;Cozy Media&quot;? →</Link>
            {' · '}
            <Link href="/articles/streaming-fragmentation/">Streaming Fragmentation in North America →</Link>
          </div>
        </div>

        <h2 style={{ marginTop: 32, fontSize: '1.15rem' }}>Frequently asked</h2>
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
