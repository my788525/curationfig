// 构建前保护：将受 fetcher 脚本污染的 generated-*.ts 还原到最近一次提交版本。
// 用显式文件列表（非 shell glob），跨平台（Windows Git Bash / Linux CF）均安全。
// 目的：防止本地误跑 fetch 脚本残留脏数据被推上 CF 部署。
// CF 环境从干净 commit 拉取，本脚本为 no-op（无害）；本地若脏则自动还原。
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const FILES = [
  'generated-all.ts',
  'generated-animation.ts',
  'generated-books.ts',
  'generated-comics.ts',
  'generated-film.ts',
  'generated-games.ts',
  'generated-music.ts',
  'generated-podcasts.ts',
  'generated-tv.ts',
];

try {
  execSync(`git checkout HEAD -- ${FILES.map((f) => `lib/media/${f}`).join(' ')}`, {
    cwd: ROOT,
    stdio: 'ignore',
  });
  console.log('[protect-generated] generated-*.ts restored to HEAD (clean).');
} catch {
  // 在非 git 环境或无可还原差异时静默跳过（CF 干净 commit 下通常无输出）
  console.log('[protect-generated] nothing to restore (working tree clean or git unavailable).');
}
