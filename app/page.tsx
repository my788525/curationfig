import Link from 'next/link';
import { SITE, CHANNELS } from '@/lib/site';
import {
  MUSIC_THEMES,
  GAME_THEMES,
  FILM_THEMES,
  TV_THEMES,
  BOOKS_THEMES,
  ANIMATION_THEMES,
  PODCASTS_THEMES,
  COMICS_THEMES,
  resolveItemUrl,
} from '@/lib/media/curation';
import { MUSIC_ITEMS } from '@/lib/media/generated-music';
import { GAME_ITEMS } from '@/lib/media/generated-games';
import { FILM_ITEMS } from '@/lib/media/generated-film';
import { TV_ITEMS } from '@/lib/media/generated-tv';
import { BOOKS_ITEMS } from '@/lib/media/generated-books';
import { ANIMATION_ITEMS } from '@/lib/media/generated-animation';
import { PODCASTS_ITEMS } from '@/lib/media/generated-podcasts';
import { COMICS_ITEMS } from '@/lib/media/generated-comics';
import Reveal from '@/components/Reveal';
import Marquee from '@/components/Marquee';
import TiltCard from '@/components/TiltCard';

// 每个频道挑一个最能代表"按情绪/氛围推荐"气质的专题做封面卡
const FEATURED: Record<string, { themes: typeof MUSIC_THEMES; items: typeof MUSIC_ITEMS; hub: string }> = {
  music: { themes: MUSIC_THEMES, items: MUSIC_ITEMS, hub: '/music/' },
  game: { themes: GAME_THEMES, items: GAME_ITEMS, hub: '/games/' },
  film: { themes: FILM_THEMES, items: FILM_ITEMS, hub: '/film/' },
  tv: { themes: TV_THEMES, items: TV_ITEMS, hub: '/tv/' },
  books: { themes: BOOKS_THEMES, items: BOOKS_ITEMS, hub: '/books/' },
  animation: { themes: ANIMATION_THEMES, items: ANIMATION_ITEMS, hub: '/animation/' },
  podcasts: { themes: PODCASTS_THEMES, items: PODCASTS_ITEMS, hub: '/podcasts/' },
  comics: { themes: COMICS_THEMES, items: COMICS_ITEMS, hub: '/comics/' },
};

export default function HomePage() {
  const liveThemes = MUSIC_THEMES.slice(0, 6);

  // 跑马灯：每个频道选 10 张有封面的条目（tv 无条目时回退到专题卡）
  const marqueeByChannel: Record<string, { title: string; subtitle: string; cover?: string | null; href: string }[]> = {
    music: coverCards(MUSIC_ITEMS, '/music/'),
    game: coverCards(GAME_ITEMS, '/games/'),
    film: coverCards(FILM_ITEMS, '/film/'),
    tv: TV_ITEMS.filter((i) => i.cover).length
      ? coverCards(TV_ITEMS, '/tv/')
      : THEME_THEMES_TO_CARDS(TV_THEMES, '/tv/'),
    books: allCards(BOOKS_ITEMS, '/books/'),
    animation: allCards(ANIMATION_ITEMS, '/animation/'),
    podcasts: allCards(PODCASTS_ITEMS, '/podcasts/'),
    comics: allCards(COMICS_ITEMS, '/comics/'),
  };

  return (
    <>
      <section className="hero has-bg" style={{ ['--hero-img' as string]: "url('/images/hero/hero-home.webp')" } as React.CSSProperties}>
        <div className="wrap hero-inner">
          <p className="eyebrow">CurationFig · editorial discovery</p>
          <h1 className="grad-text">Find media by mood &amp; theme.</h1>
          <p>
            CurationFig is one filter for the things you watch, play, and listen to. Tell us the
            feeling you&apos;re chasing — lonely Tuesday, golden-hour drive, midnight dread — and
            we connect the film, the series, the game, and the record that fit it. Not four
            separate apps. One mood, four mediums. Every list carries a point of view, not just a
            database dump.
          </p>
          <div className="pill-row">
            <Reveal className="pill-row" itemClassName="reveal-item">
              {CHANNELS.filter((c) => c.live).map((c) => (
                <span key={c.key} className="pill-tag">
                  {c.label} · live
                </span>
              ))}
              {CHANNELS.filter((c) => !c.live).map((c) => (
                <span key={c.key} className="pill-tag" style={{ opacity: 0.6 }}>
                  {c.label} · soon
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* 跨频道情绪跑马灯：首页一屏看尽四频道的"脸" */}
      <section className="section" style={{ paddingBottom: 8 }}>
        <div className="wrap">
          <h2 style={{ fontSize: '1.4rem' }}>What the catalog feels like</h2>
          <p className="muted" style={{ maxWidth: 720, marginTop: -4 }}>
            A few faces from each channel. Hover to tilt — drag or pause with your cursor.
          </p>
        </div>
        <Marquee
          lanes={[
            { label: 'Music', href: '/music/', cards: marqueeByChannel.music },
            { label: 'Games', href: '/games/', cards: marqueeByChannel.game },
            { label: 'Film', href: '/film/', cards: marqueeByChannel.film },
            { label: 'TV', href: '/tv/', cards: marqueeByChannel.tv },
            { label: 'Books', href: '/books/', cards: marqueeByChannel.books },
            { label: 'Animation', href: '/animation/', cards: marqueeByChannel.animation },
            { label: 'Podcasts', href: '/podcasts/', cards: marqueeByChannel.podcasts },
            { label: 'Comics', href: '/comics/', cards: marqueeByChannel.comics },
          ]}
        />
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Why we exist</h2>
          <p className="muted" style={{ maxWidth: 720 }}>
            Algorithms show you what&apos;s popular. Databases show you what exists. Neither
            tells you <em>why</em> these ten records belong together, or which one fits the
            mood you&apos;re in tonight. That&apos;s the gap we fill — human curation that
            talks across film, TV, games, and music, because a feeling rarely stays in one
            medium.
          </p>

          <div className="banner">
            <strong>Start here:</strong> pick a channel below, or use the{' '}
            <Link href="/tools/playlist/">Playlist Generator</Link> to get a personalized list
            from your mood, decade, and genre — across every medium we cover.
          </div>
        </div>
      </section>

      {/* 四频道并列：每个频道一张代表专题 + 入口，不再只展示音乐 */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2>Browse by channel</h2>
          <Reveal className="grid grid-2">
            {CHANNELS.filter((c) => c.live).map((c) => {
              const data = FEATURED[c.key];
              const pick = data.themes.slice(0, 1)[0];
              return (
                <TiltCard key={c.key} as="div" className="card channel-showcase">
                  <div className="cs-head">
                    <span className="cs-label">{c.label}</span>
                    <span className="muted" style={{ fontSize: 13 }}>{c.tagline}</span>
                  </div>
                  {pick && (
                    <Link href={`${data.hub}${pick.slug}/`} className="cs-feature">
                      <h3>{pick.title}</h3>
                      <p className="thesis">{pick.thesis}</p>
                      <span className="muted">→ Open this curation</span>
                    </Link>
                  )}
                  <div className="cs-foot">
                    <Link href={data.hub} className="pill-tag" style={{ background: 'var(--violet-600)' }}>
                      All {c.label.toLowerCase()} themes ({data.themes.length}) →
                    </Link>
                  </div>
                </TiltCard>
              );
            })}
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2>Featured music curation</h2>
          <Reveal className="grid grid-3">
            {liveThemes.map((t) => (
              <TiltCard key={t.slug} as="div" className="card theme-card">
                <h3>{t.title}</h3>
                <p className="thesis">{t.thesis}</p>
                <span className="muted">→ Open this curation</span>
              </TiltCard>
            ))}
          </Reveal>

          <div style={{ marginTop: 24 }}>
            <Link href="/music/" className="pill-tag" style={{ background: 'var(--violet-600)' }}>
              Browse all music themes →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// 从真实条目构造跑马灯卡（取有封面的前 N 张）
function coverCards(
  items: { title: string; creator?: string; cover?: string | null; url: string }[],
  hub: string,
  n = 12
) {
  return items
    .filter((i) => i.cover)
    .slice(0, n)
    .map((i) => ({
      title: i.title,
      subtitle: i.creator || '',
      cover: i.cover,
      href: resolveItemUrl(i, hub),
    }));
}

// 新频道无封面（cover=null）：仍展示条目卡（无封面降级样式），不丢内容
function allCards(
  items: { title: string; creator?: string; cover?: string | null; url: string }[],
  hub: string,
  n = 12
) {
  return items.slice(0, n).map((i) => ({
    title: i.title,
    subtitle: i.creator || '',
    cover: i.cover,
    href: resolveItemUrl(i, hub),
  }));
}

// tv 无条目时：把专题本身做成"策展精选"卡（不编造元数据）
function THEME_THEMES_TO_CARDS(
  themes: { title: string; slug: string; intro: string }[],
  hub: string,
  n = 12
) {
  return themes.slice(0, n).map((t) => ({
    title: t.title,
    subtitle: t.intro,
    cover: null,
    href: `${hub}${t.slug}/`,
  }));
}
