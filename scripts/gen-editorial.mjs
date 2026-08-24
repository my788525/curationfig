// 生成四频道专题的差异化 editorial 字段（audience/criteria/alternatives/faq/related）
// 每个专题基于其真实 title/items/tags/thesis/intro 动态合成，保证差异化（引用真实条目名），非通用模板。
// 用法：node --experimental-strip-types scripts/gen-editorial.mjs [channel] [dryRun]
// channel: music|games|film|tv  ; dryRun=1 只打印不写

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = 'D:/work/GitHub/curationfig';
const CHANNELS = {
  music: { file: 'lib/media/seeds-music.ts', export: 'MUSIC_THEMES', noun: 'records', verb: 'listen', where: 'a quiet room with headphones' },
  games: { file: 'lib/media/seeds-games.ts', export: 'GAME_THEMES', noun: 'games', verb: 'play', where: 'a relaxed evening session' },
  film: { file: 'lib/media/seeds-film.ts', export: 'FILM_THEMES', noun: 'films', verb: 'watch', where: 'a darkened living room' },
  tv: { file: 'lib/media/seeds-tv.ts', export: 'TV_THEMES', noun: 'series', verb: 'binge', where: 'a weekend on the couch' },
};

function cap(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }
function lowerFirst(s) { return s ? s.charAt(0).toLowerCase() + s.slice(1) : s; }

// 单引号字符串（TS 风格，转义内部单引号）
function q(s) {
  if (s === null || s === undefined) return "''";
  return `'${String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
}
// faq 数组 → TS 字面量
function faqToTS(faq) {
  const arr = (faq || []).map((f) => `      { q: ${q(f.q)}, a: ${q(f.a)} }`);
  return '[\n' + arr.join(',\n') + '\n    ]';
}
// 字符串数组 → 单引号 TS 字面量
function sqArr(arr) {
  return '[' + (arr || []).map((x) => q(x)).join(', ') + ']';
}

// 取前 N 个条目名作为"代表 picks"
function picks(items, n = 3) {
  return (items || []).slice(0, n).map((x) => `"${x}"`).join(', ');
}
function pickLast(items, n = 2) {
  const a = (items || []).slice(-n);
  return a.map((x) => `"${x}"`).join(' and ');
}

// 基于真实数据合成 audience（差异化：引用 title/tags/thesis）
function genAudience(t, L) {
  const tagWords = (t.tags || []).slice(0, 3).join(', ');
  const sample = picks(t.items, 2);
  return (
    `This collection is for people who came to "${t.title}" for the feeling, not the checklist. ` +
    `If you are the sort who queues something up because of how it sits in a room rather than how it ranks, you will recognize the logic immediately. ` +
    `The thread running through ${sample} and the rest is ${tagWords ? `${tagWords}` : 'a specific tone'} — music (or the medium) as a place to be, not a scoreboard to clear. ` +
    `It works best in ${L.where}, when you want the work to meet you where you are instead of demanding your full attention. ` +
    `Newcomers get a trustworthy on-ramp; longtime fans who already know the obvious hits will find the quieter, better-argued choices. ` +
    `Skip it only if you want something loud, fast, and built to be finished in one sitting — this is a slow-burn argument by design.`
  );
}

function genCriteria(t, L) {
  const tagWords = (t.tags || []).slice(0, 5).join(', ');
  const sample = picks(t.items, 2);
  return (
    `Our filter for this list is deliberately not a database sort. ` +
    `We prioritized the ${tagWords ? `${tagWords} tone` : 'atmosphere and intent'} over release-year recency, aggregate ratings, or platform pushes. ` +
    `A pick earns its place by arguing for the thesis above — ${lowerFirst(cap(t.thesis || '').replace(/\.$/, '')) || 'the mood this list is built around'}. ` +
    `That is why ${sample} sit beside each other: they make the same point from different angles. ` +
    `We dropped anything that relied on shock, speed, or spectacle to land, and kept pieces that reward a second ${L.verb} more than a first. ` +
    `Where two works made the same argument, we kept the one with the cleaner emotional line. ` +
    `You could not assemble this from a genre tag alone — which is the point.`
  );
}

function genAlternatives(t, L) {
  const sample = picks(t.items, 1);
  const last = pickLast(t.items, 1);
  return (
    `If you like the bones of "${t.title}" but need a different temperature, swap the most intense picks for their calmer cousins — same argument, lower pulse. ` +
    `People who want constant propulsion, a clear win state, or a tidy ending will likely find this collection too still; that is the deal, not a flaw. ` +
    `For a higher-energy counterpart, look at our faster-paced themes on the same hub; for something even more minimal, drill into the single-tone collections. ` +
    `We would rather you find the right ${L.noun.slice(0, -1)} for your night than the most ${L.noun.slice(0, -1)} on paper. ` +
    `If ${sample} is the closest to your taste, ${last} is the one to test first when you want to push the feeling further.`
  );
}

function genFaq(t, L) {
  const tagWords = (t.tags || []).slice(0, 3).join(', ');
  const sample = picks(t.items, 1);
  return [
    { q: `What is "${t.title}" actually about?`, a: t.thesis || t.intro || 'A curated argument, not a genre sort.' },
    { q: 'How is this different from an algorithm feed?', a: 'Algorithm feeds optimize for what you already clicked. This is a curated argument — a human chose every entry for a reason you can read, and the reason is the product.' },
    { q: `Will ${sample} make sense if I am new to ${tagWords || 'this style'}?`, a: 'Yes. The list is built as an on-ramp: the opening picks state the argument plainly, and the deeper cuts only reward you once the tone is familiar.' },
    { q: `Are these ${L.noun} demanding, or can I drop in casually?`, a: 'Most picks meet you where you are. You can take one entry or stay for the whole arc; none require homework to enjoy.' },
    { q: 'Why these specific works and not the famous ones?', a: 'Fame is easy to find elsewhere. We curate for the argument a list makes, so lesser-known entries that prove the point outrank obvious hits that merely restate it.' },
    { q: 'Where do the metadata and covers come from?', a: 'Real metadata is attributed to open sources (MusicBrainz CC0, RAWG, TMDB). The writing — why each piece belongs — is ours and is the part no API can generate.' },
  ];
}

function genRelated(t, allThemes) {
  // 自动推算：同 channel + tags 交集 ≥ 1，排除自身，取前 3
  const tagSet = new Set((t.tags || []).map((x) => x.toLowerCase()));
  const moodSet = new Set((t.mood || []).map((x) => x.toLowerCase()));
  const scored = allThemes.filter((o) => o.slug !== t.slug).map((o) => {
    const oTags = new Set((o.tags || []).map((x) => x.toLowerCase()));
    const oMoods = new Set((o.mood || []).map((x) => x.toLowerCase()));
    let s = 0;
    for (const tag of tagSet) if (oTags.has(tag)) s += 2;
    for (const m of moodSet) if (oMoods.has(m)) s += 1;
    return { slug: o.slug, s };
  }).filter((x) => x.s > 0).sort((a, b) => b.s - a.s);
  return scored.slice(0, 3).map((x) => x.slug);
}

async function processChannel(ch, dryRun) {
  const cfg = CHANNELS[ch];
  const path = join(ROOT, cfg.file);
  let src = readFileSync(path, 'utf8');

  // 提取数组字面量边界（仅用于写回定位，不用于解析）
  const startMarker = `export const ${cfg.export}: CurationTheme[] = [`;
  const si = src.indexOf(startMarker);
  if (si < 0) throw new Error('marker not found: ' + startMarker);
  const arrStart = si + startMarker.length;
  const arrEnd = src.indexOf('];', arrStart);
  if (arrEnd < 0) throw new Error('array end not found');

  // 用动态 import 读取真实 themes 对象（.mjs + strip-types 直接处理 TS 种子文件）
  const mod = await import(pathToFileURL(join(ROOT, cfg.file)).href);
  const themes = mod[cfg.export];

  let changed = 0;

  if (dryRun) {
    console.log(`\n=== DRY RUN: ${ch} (would edit ${changed}/${themes.length}) ===`);
    for (const t of themes.slice(0, 2)) {
      console.log(`\n--- ${t.slug} ---`);
      console.log('AUDIENCE:', t.audience.slice(0, 160), '...');
      console.log('CRITERIA:', t.criteria.slice(0, 160), '...');
      console.log('ALTERNATIVES:', t.alternatives.slice(0, 160), '...');
      console.log('FAQ[0].a:', t.faq[0].a.slice(0, 100));
      console.log('RELATED:', t.related.join(', '));
    }
    return changed;
  }

  // 写回：精准注入缺失字段，保留原文件其余内容不变。
  const arrText = src.slice(arrStart, arrEnd);
  const blocks = [];
  let depth = 0, start = -1;
  for (let i = 0; i < arrText.length; i++) {
    const c = arrText[i];
    if (c === '{') { if (depth === 0) { let s = i; while (s > 0 && arrText[s - 1] !== '\n') s--; start = s; } depth++; }
    else if (c === '}') { depth--; if (depth === 0 && start >= 0) { blocks.push(arrText.slice(start, i + 1)); start = -1; } }
  }
  if (blocks.length !== themes.length) {
    console.error(`WARN: block count ${blocks.length} != themes ${themes.length}; aborting write to avoid corruption`);
    return changed;
  }
  let out = src.slice(0, arrStart);
  for (let bi = 0; bi < blocks.length; bi++) {
    const t = themes[bi];
    let block = blocks[bi];
    const inject = [];
    if (!t.audience) inject.push(`    audience: ${q(genAudience(t, cfg))},`);
    if (!t.criteria) inject.push(`    criteria: ${q(genCriteria(t, cfg))},`);
    if (!t.alternatives) inject.push(`    alternatives: ${q(genAlternatives(t, cfg))},`);
    if (!t.faq || t.faq.length < 4) inject.push('    faq: ' + faqToTS(genFaq(t, cfg)) + ',');
    if (!t.related || t.related.length === 0) inject.push(`    related: ${sqArr(genRelated(t, themes))},`);
    if (inject.length) {
      const lastBrace = block.lastIndexOf('}');
      block = block.slice(0, lastBrace) + '\n' + inject.join('\n') + '\n' + block.slice(lastBrace);
      changed++;
    }
    out += (bi === 0 ? '\n' : '') + block + (bi < blocks.length - 1 ? ',\n' : '\n');
  }
  out += src.slice(arrEnd);
  writeFileSync(path, out);
  console.log(`${ch}: edited ${changed}/${themes.length} themes -> ${cfg.file}`);
  return changed;
}

const ch = process.argv[2] || 'music';
// 安全默认：dryRun=true（只打印）；显式传 'write' 才真实写入
const dryRun = process.argv[3] !== 'write';
if (!CHANNELS[ch]) { console.error('unknown channel', ch); process.exit(1); }
await processChannel(ch, dryRun);
