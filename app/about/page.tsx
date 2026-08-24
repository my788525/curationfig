import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Our Curation Method — About CurationFig',
  description:
    'How CurationFig chooses films, games, music, and shows: our editorial principles, selection criteria, and the philosophy behind mood-first curation.',
  alternates: { canonical: '/about/' },
};

const EDITORIAL_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'NewsMediaOrganization',
      '@id': `${SITE.domain}/#organization`,
      name: SITE.name,
      url: SITE.domain,
      description: SITE.description,
      email: SITE.email,
      sameAs: [SITE.org],
      foundingDate: '2025',
      editorialTeam: {
        '@type': 'EditorialOrganization',
        name: `${SITE.name} Editorial`,
        description:
          'A small editorial team that writes the arguments binding each curated list together and attributes all metadata to open sources.',
      },
    },
    {
      '@type': 'Person',
      '@id': `${SITE.domain}/#editorial-lead`,
      name: 'CurationFig Editorial Lead',
      jobTitle: 'Editorial Lead',
      worksFor: { '@id': `${SITE.domain}/#organization` },
      description:
        'Owns the curation method, selection criteria, and the "why this belongs" notes across film, TV, games, and music.',
    },
  ],
};

export default function AboutPage() {
  return (
    <section className="section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(EDITORIAL_LD) }}
      />
      <div className="wrap article">
        <div className="crumbs">
          <Link href="/">Home</Link> / About
        </div>
        <h1>Our curation method</h1>
        <p className="article-sub">
          Algorithms show you what&apos;s popular. Databases show you what exists. Neither tells
          you <em>why</em> a handful of records, games, or films belong on the same shelf. That
          judgment is the only part worth reading — so here is exactly how we make it.
        </p>

        <h2>What we are</h2>
        <p className="article-body" style={{ marginTop: 0 }}>
          CurationFig is an editorial curation site. We write the argument that binds a list
          together; we surface real metadata — titles, years, covers, genres — from open,
          attributed sources (MusicBrainz CC0, RAWG, TMDB); and we hand you a tool to build your
          own list when ours doesn&apos;t fit the mood you&apos;re in. The writing is ours. The
          data is attributed. The choice is yours.
        </p>

        <h2>The three rules we curate by</h2>
        <div className="method-rules">
          <div className="card method-rule">
            <div className="rule-num">1</div>
            <h3>Argument over aggregate</h3>
            <p>
              A work earns a spot because it proves a list&apos;s point, not because a platform
              ranked it. We would rather include a quieter, lesser-known entry that argues well
              than a famous one that merely restates the obvious.
            </p>
          </div>
          <div className="card method-rule">
            <div className="rule-num">2</div>
            <h3>Feeling over stats</h3>
            <p>
              We organize by mood and intent — lonely Tuesday, golden-hour drive, midnight dread —
              because a feeling rarely stays in one medium. Numbers (ratings, release year,
              popularity) are context, never the criteria.
            </p>
          </div>
          <div className="card method-rule">
            <div className="rule-num">3</div>
            <h3>Restraint over volume</h3>
            <p>
              We would rather hand you twelve picks that cohere than two hundred that don&apos;t.
              Every list is built to be finished, not scrolled past. If something doesn&apos;t
              serve the mood, it doesn&apos;t make the cut.
            </p>
          </div>
        </div>

        <h2>How we pick — by medium</h2>
        <h3>Music</h3>
        <p className="article-body" style={{ marginTop: 0 }}>
          We listen for texture and intent: a record&apos;s tempo, its quiet, the room it builds.
          Metadata comes from MusicBrainz (CC0). We prioritize the version that argues for the
          list&apos;s mood — a confessional vocal, a drone that fills a quiet room — over the
          chart position. Covers are sourced from the Cover Art Archive.
        </p>
        <h3>Games</h3>
        <p className="article-body" style={{ marginTop: 0 }}>
          We pick for the experience a system creates, not the metacritic it earned. A farming loop
          that becomes a refuge, a soulslike that respects your intelligence, a narrative game that
          changes you — these are curation, not leaderboards. Genre and platform data come from
          RAWG (attribution required).
        </p>
        <h3>Film &amp; TV</h3>
        <p className="article-body" style={{ marginTop: 0 }}>
          We curate for the feeling and the form, never the plot twist. Slow cinema earns its place
          next to a tense noir because both trust the viewer. We avoid spoilers by design — the
          point is the atmosphere, and a ruined ending is a ruined mood. Metadata comes from TMDB.
        </p>

        <h2>Our editorial philosophy</h2>
        <p className="article-body" style={{ marginTop: 0 }}>
          We believe a recommendation is only as good as the reason behind it. So every list states
          its thesis in plain language, every entry carries a short note on <em>why</em> it belongs,
          and every style we use (noir, cozy, lo-fi, soulslike…) comes with a plain-English
          definition — because the vocabulary of taste should be legible, not gatekept. We are not
          here to be the authority. We are here to be a good companion for the night you&apos;re
          actually having.
        </p>

        <h2>Data sources &amp; transparency</h2>
        <p className="article-body" style={{ marginTop: 0 }}>
          Real metadata is attributed to open sources and used under their licenses:{' '}
          <a href="https://musicbrainz.org/" rel="nofollow noopener">MusicBrainz</a> (CC0),{' '}
          <a href="https://coverartarchive.org/" rel="nofollow noopener">Cover Art Archive</a>,{' '}
          <a href="https://rawg.io/" rel="nofollow noopener">RAWG</a>, and{' '}
          <a href="https://www.themoviedb.org/" rel="nofollow noopener">TMDB</a> (this product uses
          the TMDB API but is not endorsed or certified by TMDB). All editorial writing, selection
          logic, and the &quot;why this belongs&quot; notes are original to CurationFig and are the
          part no API can generate.
        </p>

        <h2>Cover images &amp; copyright</h2>
        <p className="article-body" style={{ marginTop: 0 }}>
          We display cover and key art only to identify a work and aid browsing. Rights belong to
          their respective owners and are used here for identification / commentary under fair-use
          principles, not as endorsed artwork:
        </p>
        <ul className="article-body" style={{ marginTop: 8 }}>
          <li>
            <strong>Podcasts</strong> — show artwork is served from the Apple iTunes Search API,
            used as permitted for displaying podcast identity.
          </li>
          <li>
            <strong>Animation &amp; Comics (manga)</strong> — key art is sourced from AniList and
            remains the property of the original studios, publishers, and creators.
          </li>
          <li>
            <strong>Books, Western comics &amp; graphic novels</strong> — where no licensable cover
            API is reachable, we render a simple text placeholder (title on a brand background) that
            carries no third-party imagery and creates no copyright exposure.
          </li>
        </ul>
        <p className="article-body" style={{ marginTop: 8 }}>
          If you are a rights holder and would like a specific image removed or credited differently,
          contact us via the form on the <Link href="/contact/">contact page</Link>.
        </p>

        <h2>What we are not</h2>
        <ul className="article-body" style={{ marginTop: 0 }}>
          <li>Not a streaming service — no playback, no login wall.</li>
          <li>Not a wiki — we don&apos;t mirror everything; we choose.</li>
          <li>Not affiliate-driven — no paid placement, no &quot;buy now&quot; arbitrage.</li>
          <li>Not a review aggregator — we curate, we don&apos;t score.</li>
        </ul>

        <div className="banner" style={{ marginTop: 22 }}>
          Channels launched in sequence: <strong>Music · Games · Film · TV (all live)</strong>.
          Each reuses the same mood-first curation engine. Build your own with the{' '}
          <Link href="/tools/playlist/">Playlist Generator</Link>.
        </div>

        <h2 style={{ marginTop: 30 }}>Contact</h2>
        <p className="article-body" style={{ marginTop: 0 }}>
          Corrections, takedown requests, or curation suggestions:{' '}
          <a href="mailto:editorial@curationfig.com">editorial@curationfig.com</a>. We read every
          note and fix attribution errors promptly.
        </p>
      </div>
    </section>
  );
}
