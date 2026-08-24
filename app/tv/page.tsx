import Link from 'next/link';
import type { Metadata } from 'next';
import { TV_THEMES, MOOD_THEMES } from '@/lib/media/curation';
import { TV_ITEMS } from '@/lib/media/generated-tv';
import Reveal from '@/components/Reveal';
import Marquee from '@/components/Marquee';

// tv 通道条目数据暂无（generated-tv 为空）→ 跑马灯回退到"策展专题精选"卡
function tvCards(n = 16) {
  return TV_THEMES.slice(0, n).map((t) => ({
    title: t.title,
    subtitle: t.intro,
    cover: null as string | null,
    href: `/tv/${t.slug}/`,
  }));
}

export const metadata: Metadata = {
  title: 'TV Curation',
  description:
    'Editorially curated TV lists and binge guides — by format, mood, and movement. A point of view, not a database. No spoilers, no episode-score tables.',
  alternates: { canonical: '/tv/' },
};

export default function TvHub() {
  const coverCount = TV_ITEMS.filter((i) => i.cover).length;
  return (
    <>
      <section className="hero has-bg" style={{ ['--hero-img' as string]: "url('/images/hero/hero-tv.webp')" } as React.CSSProperties}>
        <div className="wrap hero-inner">
          <div className="crumbs" style={{ color: '#ece6f5', margin: '0 0 10px' }}>
            <Link href="/" style={{ color: '#ece6f5' }}>Home</Link> / TV
          </div>
          <h1 className="grad-text">TV, by mood &amp; theme</h1>
          <p>
            {TV_THEMES.length} editorial themes about why shows belong together — by format,
            mood, and argument. Real metadata from TMDB. We curate, we don&apos;t rank or spoil.
          </p>
        </div>
      </section>

      <section className="marquee-band">
        <div className="wrap">
          <h2 className="marquee-band-h">Popular right now</h2>
        </div>
        <Marquee lanes={[{ label: 'TV', cards: TV_ITEMS.filter((i) => i.cover).length ? [] : tvCards() }]} />
      </section>

      <section className="section">
        <div className="wrap">
          <h2 style={{ fontSize: '1.3rem' }}>Find media by mood &amp; theme</h2>
          <p className="muted" style={{ maxWidth: 720, marginTop: -4 }}>
            Start from how you feel, not which app you open. Each mood below crosses film, TV,
            games, and music — open one and we&apos;ll pull the right thing from every channel.
          </p>
          <Reveal className="grid grid-4" itemClassName="reveal-item">
            {MOOD_THEMES.map((t) => (
              <Link key={t.slug} href={`/music/${t.slug}/`} className="card mood-chip">
                <h3>{t.title}</h3>
                <p className="thesis">{t.intro}</p>
                <span className="muted">→ Enter the mood</span>
              </Link>
            ))}
          </Reveal>

          <h2 style={{ fontSize: '1.3rem', marginTop: 34 }}>All TV themes</h2>
          <Reveal className="grid grid-2">
            {TV_THEMES.map((t) => (
              <Link key={t.slug} href={`/tv/${t.slug}/`} className="card theme-card">
                <h3>{t.title}</h3>
                <p className="thesis">{t.thesis}</p>
                <div style={{ marginTop: 8 }}>
                  {t.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="tag-chip">{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </Reveal>

          <div className="warn-banner" style={{ marginTop: 26 }}>
            <strong>Data &amp; licensing:</strong> TV metadata from The Movie Database (TMDB),
            posters localized (not hot-linked). CurationFig is editorial curation — we do not
            publish spoilers, episode-score tables, or ending reveals.
            {coverCount > 0 && <> {coverCount} posters localized.</>}
          </div>
        </div>
      </section>
    </>
  );
}
