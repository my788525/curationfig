import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: { default: SITE.title, template: `%s · ${SITE.name}` },
  description: SITE.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.domain,
    siteName: SITE.name,
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: SITE.title, description: SITE.description },
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg', apple: '/favicon.svg' },
  robots: { index: true, follow: true },
};

const orgLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE.domain}/#organization`,
      name: SITE.name,
      url: SITE.domain,
      description: SITE.description,
      sameAs: [SITE.org],
      brand: { '@id': `${SITE.domain}/#brand` },
    },
    {
      '@type': 'Brand',
      '@id': `${SITE.domain}/#brand`,
      name: SITE.name,
      url: SITE.domain,
      slogan: 'A point of view, not a database.',
      logo: `${SITE.domain}/favicon.svg`,
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.domain}/#website`,
      url: SITE.domain,
      name: SITE.name,
      publisher: { '@id': `${SITE.domain}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'Dataset',
      name: 'Content Curation & Reference Dataset 2026',
      description: 'Content curation reference dataset: citation formats, research methodology guides, fact-checking frameworks, and content attribution standards. Sourced from APA, MLA, Chicago, and IFLA.',
      url: 'https://curationfig.com/data/content-curation-2026.json',
      identifier: 'content-curation-2026',
      datePublished: '2026-01-01', dateModified: '2026-08-27',
      creator: { '@type': 'Organization', name: 'CurationFig' },
      publisher: { '@type': 'Organization', name: 'CurationFig', url: 'https://curationfig.com' },
      includedInDataCatalog: { '@type': 'DataCatalog', name: 'CurationFig Data' },
      distribution: { '@type': 'DataDownload', encodingFormat: 'application/json', contentUrl: 'https://curationfig.com/data/content-curation-2026.json' },
      spatialCoverage: { '@type': 'Place', name: 'United States' }, temporalCoverage: '2026',
    }) }} />
    </body>
    </html>
  );
}
