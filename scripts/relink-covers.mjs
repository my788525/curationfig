// 从本地已生成的 webp 反推 cover 路径写回 generated 文件（不重新下载）。
// 用于 build 的 protect 误还原后快速重建 cover 关联。
// slug 规则：podcasts=itunes-{id}, animation/comics=anilist-{id} 或 book-{slug}, tv=tv-{id} 或 {title-slug}
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = 'D:/work/GitHub/curationfig';
const IMG = join(ROOT, 'public', 'images');

// 各频道：generated 文件 + 导出名 + webp 目录 + refId 前缀映射
const CHANNELS = [
  { ch: 'podcasts', file: 'generated-podcasts.ts', exp: 'PODCASTS_ITEMS', dir: 'podcasts', prefix: 'itunes:' },
  { ch: 'animation', file: 'generated-animation.ts', exp: 'ANIMATION_ITEMS', dir: 'animation', prefix: 'anilist:' },
  { ch: 'comics', file: 'generated-comics.ts', exp: 'COMICS_ITEMS', dir: 'comics', prefix: 'anilist:' },
  { ch: 'tv', file: 'generated-tv.ts', exp: 'TV_ITEMS', dir: 'tv', prefix: 'tv:' },
];

async function main() {
  for (const c of CHANNELS) {
    const dir = join(IMG, c.dir);
    const files = readdirSync(dir).filter((f) => f.endsWith('.webp'));
    // 建立 id/slug -> webp 名（去扩展名）映射
    const map = {};
    for (const f of files) {
      const base = f.replace(/\.webp$/, '');
      if (base.startsWith('anilist-')) map['anilist:' + base.slice('anilist-'.length)] = base;
      else if (base.startsWith('itunes-')) map['itunes:' + base.slice('itunes-'.length)] = base;
      else if (base.startsWith('pixar-')) map['pixar:' + base.slice('pixar-'.length)] = base;
      else if (base.startsWith('book-')) map['book:' + base.slice('book-'.length)] = base;
      else if (base.startsWith('tv-')) map['tv:' + base.slice('tv-'.length)] = base;
      else if (/^\d+$/.test(base)) map[base] = base; // tv 纯数字 refId
      else map['__title__:' + base] = base; // 按 title slug 匹配
    }
    const genPath = join(ROOT, 'lib', 'media', c.file);
    const mod = await import('file://' + genPath);
    const arr = mod[c.exp];
    const lines = readFileSync(genPath, 'utf8').split('\n');
    let linked = 0;
    for (const it of arr) {
      let base = map[it.refId];
      if (!base && it.title) {
        const tslug = it.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        base = map['__title__:' + tslug];
      }
      if (!base) continue;
      const cover = `/images/${c.dir}/${base}.webp`;
      for (let i = 0; i < lines.length; i++) {
        const m = lines[i].match(/refId"?:\s*"([^"]+)"/);
        if (m && m[1] === it.refId) {
          lines[i] = lines[i].replace(/"?cover"?:\s*(null|"[^"]*")/, `cover: "${cover}"`);
          linked++;
          break;
        }
      }
    }
    writeFileSync(genPath, lines.join('\n'));
    console.log(`== ${c.ch}: linked ${linked}/${arr.length} ==`);
  }
}
main().catch((e) => { console.error('FATAL', e); process.exit(1); });
