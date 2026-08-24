// Pillar 长文（Markdown 静态构建通道）
// 文章存于 content/articles/*.md，frontmatter: title / subtitle / date / canonical
// 构建期由本模块读取并解析为 { slug, frontmatter, html }，供 app/articles/[slug] 渲染。
import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

const ARTICLES_DIR = path.join(process.cwd(), 'content', 'articles');

export type ArticleMeta = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  canonical: string;
};

export type Article = ArticleMeta & { html: string };

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: raw };
  const data: Record<string, string> = {};
  for (const line of m[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx > -1) {
      const key = line.slice(0, idx).trim();
      let val = line.slice(idx + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      data[key] = val;
    }
  }
  return { data, body: m[2] };
}

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function getArticle(slug: string): Article | null {
  const file = path.join(ARTICLES_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const { data, body } = parseFrontmatter(raw);
  marked.setOptions({ gfm: true, breaks: false });
  const html = marked.parse(body) as string;
  return {
    slug,
    title: data.title || slug,
    subtitle: data.subtitle || '',
    date: data.date || '',
    canonical: data.canonical || `https://curationfig.com/articles/${slug}/`,
    html,
  };
}

export function getAllArticles(): Article[] {
  return getArticleSlugs()
    .map((s) => getArticle(s))
    .filter((a): a is Article => a !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
