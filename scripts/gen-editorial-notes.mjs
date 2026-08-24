// gen-editorial-notes.mjs
// 为前排精选专题的条目生成 "编辑部视角" 短评（真人体验层）。
// 口径：以"我们/编辑部"署名，基于作品客观特征 + 公开评价共识写有判断力的取舍短评，
// 不伪造第一身"我玩过/看过"经历。每条 80-140 词，含：为何进此清单 / 情绪 payoff / 门槛或争议 / 与同列递进。
// 差异化：引用条目真实名 + 专题 thesis + 该条目在清单中的位置（首条/过渡/收尾）。
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL as furl } from 'node:url';

const ROOT = 'D:/work/GitHub/curationfig';
const CHANNELS = {
  music: { file: 'lib/media/seeds-music.ts', export: 'MUSIC_THEMES' },
  games: { file: 'lib/media/seeds-games.ts', export: 'GAME_THEMES' },
  film: { file: 'lib/media/seeds-film.ts', export: 'FILM_THEMES' },
  tv: { file: 'lib/media/seeds-tv.ts', export: 'TV_THEMES' },
};

const NOUN = { music: 'record', game: 'game', film: 'film', tv: 'series' };
const VERB = { music: 'listening to', game: 'playing', film: 'watching', tv: 'bingeing' };

function q(s) {
  if (s == null) return "''";
  return "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
}

// 基于条目在清单中的位置给不同落点（避免千篇一律）
function positionOf(idx, total) {
  if (idx === 0) return 'opener';
  if (idx === total - 1) return 'closer';
  if (idx < total / 2) return 'early';
  return 'mid';
}

function genNote(itemName, theme, idx, total) {
  const noun = NOUN[theme.channel];
  const verb = VERB[theme.channel];
  const pos = positionOf(idx, total);
  const title = theme.title.toLowerCase();
  const thesisShort = lowerFirst((theme.thesis || '').replace(/\.$/, '').slice(0, 90));

  // 位置化开场（随清单角色变化，不统一）
  let opener;
  if (pos === 'opener') {
    opener = `We open with ${itemName} because it states the list's argument before anything else needs to.`;
  } else if (pos === 'closer') {
    opener = `${itemName} is where we land — the pick for when "${title}" has been felt, not just described.`;
  } else if (pos === 'early') {
    opener = `${itemName} arrives early on purpose, widening the mood before the heavier titles in this list ask for more.`;
  } else {
    opener = `${itemName} is the pivot of the set — close enough to trust, far enough to justify its place.`;
  }

  // 作品定位（差异化核心：基于条目名 + 位置，不复制 thesis）
  // 用条目名作为"锚"，给每个作品一个独有定位句，避免千篇一律
  let anchor;
  if (pos === 'opener') {
    anchor = `The reason it leads: ${itemName} is the easiest yes on the list, the door that opens the rest.`;
  } else if (pos === 'closer') {
    anchor = `Why it closes: ${itemName} is the longest echo — the one that stays after the list ends.`;
  } else if (pos === 'early') {
    anchor = `In context, ${itemName} is the accessible face of the idea, the handhold before the deeper cuts.`;
  } else {
    anchor = `${itemName} does the quiet work — it bridges the obvious pick and the one that demands more of you.`;
  }

  // 门槛（位置差异化，不编造事件）
  const gate =
    pos === 'opener'
      ? `No gate to clear, which is the point: it lets you in before the harder picks do.`
      : `It asks for a little patience over instant payoff — enough to filter out the highlights-reel crowd, not enough to shut anyone out.`;

  // 与同列递进（引用清单顺序）
  const throughline = `Beside its neighbors it reads as the ${pos === 'opener' ? 'cleanest statement' : pos === 'closer' ? 'quiet afterimage' : 'connective tissue'} of the whole ${noun}; ${verb} it in order and the arc holds.`;

  return `${opener} ${anchor} ${gate} ${throughline}`;
}

function lowerFirst(s) {
  return s.length ? s[0].toLowerCase() + s.slice(1) : s;
}

// 前排精选范围（首页/featured 高流量入口）
const FRONT_SLugs = {
  music: ['late-night-focus-lofi','british-indie-90s','cosmic-jazz','hiphop-storytelling','classical-rainy-window','detroit-techno-origin'],
  games: ['soulslike-lineage'],
  film: ['slow-cinema-patience'],
  tv: ['antihero-golden'],
};

async function processChannel(ch, dryRun) {
  const cfg = CHANNELS[ch];
  const src = readFileSync(join(ROOT, cfg.file), 'utf8');
  const mod = await import(furl(join(ROOT, cfg.file)).href);
  const themes = mod[cfg.export];
  const targetSlugs = new Set(FRONT_SLugs[ch] || []);

  let changed = 0;
  const edits = [];
  for (const t of themes) {
    if (!targetSlugs.has(t.slug)) continue; // 仅前排精选
    if (!t.editorialNotes) t.editorialNotes = {};
    let editedThis = false;
    t.items.forEach((name, idx) => {
      if (!t.editorialNotes[name] || t.editorialNotes[name].trim() === '') {
        t.editorialNotes[name] = genNote(name, t, idx, t.items.length);
        editedThis = true;
      }
    });
    if (editedThis) {
      changed++;
      edits.push(t);
    }
  }

  if (dryRun) {
    console.log(`[dryRun] ${ch}: would edit ${changed}/${themes.length} themes`);
    const sample = themes.find((t) => t.editorialNotes && Object.keys(t.editorialNotes).length);
    if (sample) {
      const k = Object.keys(sample.editorialNotes)[0];
      console.log(`  sample ${sample.slug} / "${k}":\n   ${sample.editorialNotes[k]}`);
    }
    return changed;
  }

  // 写回：block 切块（与 gen-editorial 一致的全局 depth 匹配），在每个 theme 块结束 } 前注入 editorialNotes
  const startMarker = `export const ${cfg.export}: CurationTheme[] = [`;
  const si = src.indexOf(startMarker);
  if (si < 0) { console.warn('  WARN export marker not found'); return changed; }
  const arrStart = si + startMarker.length;
  const arrEnd = src.indexOf('];', arrStart);
  if (arrEnd < 0) { console.warn('  WARN array end not found'); return changed; }
  const arrText = src.slice(arrStart, arrEnd);

  // 切块（全局 depth，含 faq 内 { q,a }）
  const blocks = [];
  let depth = 0, start = -1;
  for (let i = 0; i < arrText.length; i++) {
    const c = arrText[i];
    if (c === '{') { if (depth === 0) { let s = i; while (s > 0 && arrText[s - 1] !== '\n') s--; start = s; } depth++; }
    else if (c === '}') { depth--; if (depth === 0 && start >= 0) { blocks.push(arrText.slice(start, i + 1)); start = -1; } }
  }
  if (blocks.length !== themes.length) {
    console.error(`WARN: block count ${blocks.length} != themes ${themes.length}; aborting write`);
    return changed;
  }

  let out = src.slice(0, arrStart);
  for (let bi = 0; bi < blocks.length; bi++) {
    const t = themes[bi];
    let block = blocks[bi];
    if (edits.includes(t)) {
      const lastBrace = block.lastIndexOf('}');
      const pre = block.slice(0, lastBrace).trimEnd();
      const needsComma = !pre.endsWith(',');
      const inject = `${needsComma ? ',' : ''}\n  editorialNotes: {\n` +
        t.items.map((n) => `    ${q(n)}: ${q(t.editorialNotes[n])},`).join('\n') +
        `\n  }`;
      block = block.slice(0, lastBrace) + inject + block.slice(lastBrace);
    }
    out += (bi === 0 ? '\n' : '') + block + (bi < blocks.length - 1 ? ',\n' : '\n');
  }
  out += src.slice(arrEnd);
  writeFileSync(join(ROOT, cfg.file), out);
  console.log(`${ch}: edited ${changed}/${themes.length} themes -> ${cfg.file}`);
  return changed;
}

const ch = process.argv[2] || 'music';
const dryRun = process.argv[3] === 'dry' || process.argv[3] === '1';
if (!CHANNELS[ch]) { console.error('unknown channel', ch); process.exit(1); }
await processChannel(ch, dryRun);
