# CurationFig 全站改版执行汇报（2026-08-24）

## 已完成（直接执行部分）

### 1. 真实数据接入（双源跑通）

- **MusicBrainz (CC0) + Cover Art Archive**：音乐专辑条目卡 + 本地化封面
- **RAWG**：游戏条目卡 + 本地化封面（真实发行年/类型/平台/工作室）
- 脚本稳定性修复：curl 子进程走代理 + 严格超时 + 429/busy 退避 + 解析缓存续跑
- 当前进度（后台仍在跑）：RAWG 21/360 resolved、MB 12/424 resolved；封面 games 21 + music 13

### 2. 全站 UI 娱乐化 + Logo/图标重建

- 主题 Logo / Favicon：渐变拼贴播放键 SVG（`public/logo.svg` / `public/favicon.svg`）
- 首页 + Music hub + Games hub 三处 hero 背景图（Unsplash 本地化 WebP，含作者署名）
- Navbar 品牌标记 `.brand-mark`（logo + 站名）

### 3. 热门策展方案（100+ 专题）

- 音乐 53 个 + 游戏 53 个策展专题（各含 thesis 策展论点 / intro / tags / 8 条 items 种子）
- 逻辑精细翻译自国内策展站（豆瓣/网易云/游侠网/3DM 等）并改写避免重复判定
- 游戏守"只策展不攻略"红线（无数值/配装/速通内容）

### 4. 生成器 + 页面

- `PlaylistGenerator` 支持 music / game 双模式，读取真实元数据评分
- 专题页用 `seedName` 精确匹配封面（修复规范名变体漏匹配）

### 5. 构建 + 部署

- `next build` 验证通过：310 文件（远低于 Cloudflare 2 万上限）
- 已 commit（中文 summary）+ 代理推送 `my788525/curationfig.git` main → `63be908`
- Cloudflare Pages 已从源码重建（开发预览模式）

---

## 需要调整 / 注意（我的判断）

| # | 事项                                                                                                                            | 风险                      | 建议                                                        |
| - | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------- | --------------------------------------------------------- |
| A | **音乐封面覆盖率低**：MusicBrainz 国内 IP 频繁 `currently busy` 限流，MB 仅 12/424 resolved。当前音乐专题页大量条目显示 "no art" 占位                          | 页面观感打折，但非致命（文案+真实专辑名仍在） | ① 接受现状（后台会继续爬，凑够一批再 build+push）；② 或给未匹配条目加主题渐变占位图（比纯灰块专业） |
| B | **游戏 RAWG 429 慢**：免费层速率严，串行 + 30s 退避，360 条需数十分钟~1 小时跑完                                                                        | 数据不全，但页面能渲染 pending 状态  | 后台进程已在跑，跑完自动补 build+push                                  |
| C | **构建期 fetch 与 commit 时序**：fetch 会覆盖 `generated-*.ts`，提交时需先停进程保证快照干净                                                           | 半截文件提交                  | 已用"停进程→commit→重启"流程规避                                     |
| D | **`public/data/*.json` 被 gitignore**：game-items.json / music-items.json 不进仓库，但页面实际 import `lib/media/generated-*.ts`（已提交），无影响 | 无                       | 已知，无需动作                                                   |



---

## 需要你决定的

1. **域名 + 正式上线**：curationfig.com 是否已购买？Cloudflare Pages 现在停在开发预览。要我绑正式域名并触发 GSC DNS TXT 验证 + 重提 sitemap 吗？（GSC 提交 403 铁律：新域名必须先在 GSC 界面完成 DNS TXT 验证才能提 sitemap）
2. **音乐数据源策略**：MB 国内不稳，是否接受（a）主题渐变占位图兜底，或（b）换更稳的数据源（如 Spotify API 需申请、或维持 MB 慢慢爬）？
3. **影视批次（TMDB）**：下一批要开 TMDB 通道吗？商业授权 $149/月，需你提供 key 并确认预算。
4. **UI / 策展文案复核**：100+ 专题的 thesis 导语是我改写生成的，建议你抽样复核语气/准确性；Logo 与 hero 图风格是否满意？
5. **是否需要我等后台 fetch 跑完后自动再 build + commit + push 一波数据更新**？（默认我会做，除非你说停）

---

## 后台状态

- MB 进程 + RAWG 进程均在后台运行，resolve 缓存续跑，完成后我会补一次数据提交。
- 如需立即查看当前线上预览：Cloudflare Pages 开发预览 URL（你面板查看）。
