// 审查 fetch 生成的 synopsis 质量（不修改任何文件，只读 cache）
// 用法: node scripts/audit-synopsis.mjs [sampleN] [channel]
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const sampleN = parseInt(process.argv[2] || '12', 10);
const onlyCh = process.argv[3]; // 'games' | 'film' | 'tv' | undefined=全部

const files = {
  games: 'cache/rawg-resolve.json',
  film: 'cache/tmdb-resolve.json',
  tv: 'cache/tmdb-resolve.json',
};

// 质量信号：残留宣传腔 / 模板句 / 异常长度
const PROMO = [
  /watch the official trailer/i, /stream now/i, /available on/i, /sign up/i,
  /this (entry|film|game|album) (is|was) (part of|released)/i, /don'?t miss/i,
  /perfect for (fans|those)/i, /click here/i,
];
const TEMPLATE = [
  /a starter mix/i, /clearest proof/i, /drawn from our curated/i,
  /this entry/i, /one of the/i, /in this collection/i,
];

function audit(ch, path) {
  let o;
  try { o = JSON.parse(readFileSync(join(ROOT, path), 'utf8')); }
  catch { console.log(`[${ch}] cache 未完成，跳过`); return; }
  const entries = Object.entries(o).filter(([, v]) => v && v.synopsis);
  console.log(`\n========== ${ch.toUpperCase()} (synopsis 条目=${entries.length}) ==========`);
  const lens = entries.map(([, v]) => v.synopsis.length);
  const avg = lens.reduce((a, b) => a + b, 0) / (lens.length || 1);
  const flagged = [];
  entries.forEach(([k, v]) => {
    const s = v.synopsis;
    const issues = [];
    if (s.length < 60) issues.push('过短(<60)');
    if (s.length > 320) issues.push('过长(>320)');
    if (PROMO.some(re => re.test(s))) issues.push('宣传腔');
    if (TEMPLATE.some(re => re.test(s))) issues.push('模板句');
    if (issues.length) flagged.push({ k, s, issues });
  });
  console.log(`平均长度=${Math.round(avg)}字符  异常条目=${flagged.length}`);
  // 抽样展示
  const picks = entries.slice(0, sampleN);
  picks.forEach(([k, v]) => {
    console.log(`\n• ${k}`);
    console.log(`  "${v.synopsis}"`);
  });
  if (flagged.length) {
    console.log(`\n--- 异常样本 (${flagged.length}) ---`);
    flagged.slice(0, 8).forEach(f => {
      console.log(`  ⚠ ${f.k} [${f.issues.join(', ')}]: "${f.s.slice(0, 80)}..."`);
    });
  }
}

const channels = onlyCh ? [onlyCh] : Object.keys(files);
for (const ch of channels) audit(ch, files[ch]);
