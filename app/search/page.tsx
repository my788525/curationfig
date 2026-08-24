import type { Metadata } from 'next';
import Link from 'next/link';
import SearchResults from '@/components/SearchResults';

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search CurationFig by mood, theme, or title across films, games, music, and TV.',
  alternates: { canonical: '/search/' },
  robots: { index: false },
};

// 静态导出：不从 server 读 searchParams（会导致 export 失败）。
// 初始 query 由客户端组件从 URL 解析。
export default function SearchPage() {
  return (
    <section className="section">
      <div className="wrap article">
        <div className="crumbs">
          <Link href="/">Home</Link> / Search
        </div>
        <h1>Search the catalog</h1>
        <p className="article-sub">
          Full-text search across every mood, theme, and title we curate. Try a feeling
          (&ldquo;lonely&rdquo;), a style (&ldquo;noir&rdquo;), or a title.
        </p>
        <SearchResults />
      </div>
    </section>
  );
}
