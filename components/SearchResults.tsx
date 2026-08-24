'use client';
import { useEffect, useRef, useState } from 'react';

// /search/ 页的结果渲染：读取 initialQuery，调用 Pagefind 全局索引展示全部结果。
declare global {
  interface Window { pagefind?: any; }
}

export default function SearchResults() {
  const [q, setQ] = useState('');
  const [results, setResults] = useState<{ url: string; meta: { title: string }; excerpt: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);
  const tried = useRef(false);

  useEffect(() => {
    if (tried.current) return;
    tried.current = true;
    // 从 URL ?q= 读取初始查询（静态导出页面无法从 server 读取 searchParams）
    const params = new URLSearchParams(window.location.search);
    const initial = params.get('q') || '';
    if (initial) setQ(initial);
    const s = document.createElement('script');
    s.src = '/pagefind/pagefind.js';
    s.onload = () => setReady(true);
    document.body.appendChild(s);
  }, []);

  useEffect(() => {
    let cancelled = false;
    async function run(term: string) {
      if (!term.trim() || !window.pagefind) { if (!cancelled) setResults([]); return; }
      setLoading(true);
      try {
        if (window.pagefind.options) await window.pagefind.options({ excerptLength: 22 });
        const search = await window.pagefind.search(term);
        const all = await Promise.all(search.slice(0, 30).map((r: any) => r.data()));
        if (!cancelled) setResults(all.map((d: any) => ({ url: d.url, meta: d.meta, excerpt: d.excerpt })));
      } catch {
        if (!cancelled) setResults([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    const t = setTimeout(() => run(q), 200);
    return () => { cancelled = true; clearTimeout(t); };
  }, [q, ready]);

  return (
    <div>
      <input
        className="search-input wide"
        type="search"
        placeholder="Search moods, themes, titles…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <div style={{ marginTop: 16 }}>
        {!ready && <p className="muted">Loading search index…</p>}
        {ready && loading && <p className="muted">Searching…</p>}
        {ready && !loading && q.trim() && results.length === 0 && (
          <p className="muted">No matches for &ldquo;{q}&rdquo;. Try a broader mood or style.</p>
        )}
        {!q.trim() && ready && <p className="muted">Type something to search the catalog.</p>}
        <div className="search-results">
          {results.map((r) => (
            <a key={r.url} href={r.url} className="search-result card">
              <div className="sr-title">{r.meta?.title || r.url}</div>
              {r.excerpt && <div className="sr-excerpt" dangerouslySetInnerHTML={{ __html: r.excerpt }} />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
