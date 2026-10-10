# AI 学习手记

可运行的中文 AI 学习知识站。以 AstroPaper 的静态博客结构为基础，使用 Astro、TypeScript 与 Markdown；学习路径串起概念笔记和可复现实验，资料卡回链原始来源。

包含首页、知识笔记、资料库、路径章节、主题、中文全文搜索、文字 RSS、站点地图和 GitHub Pages 工作流。已有 10 条路径、56 篇概念笔记、3 篇路线/大纲/对照、2 篇实际运行的实验与 33 张资料卡，覆盖 8 个 AI 学习主题。音频集合和播放器页面已预留，没有真实节目时隐藏播客导航。

系统学习从 [AI 知识地图](src/content/notes/ai-knowledge-map.md)、[系统大纲](src/content/notes/ai-curriculum.md) 和 [21 步主线](src/content/tracks/ai-systematic-learning.md) 开始；支线覆盖传统 ML、MLOps、RAG/智能体、模型训练与多模态。首轮 14 个 GitHub 来源见 [学习资料目录](docs/learning-sources.md)；第二轮 9 张开放资料卡、缺口比较、版本/许可与补充索引见 [开放学习对照](docs/learning-gap-analysis.md)。笔记包含知识点、示例、练习和复习问题；未执行的模型练习没有实验成绩。

面向开发与架构的后续从 [应用实战路线](src/content/notes/ai-application-roadmap.md) 进入 [7 步开发实践](src/content/tracks/ai-app-practice.md) 和 [6 步架构/面试](src/content/tracks/ai-architecture-interview.md)。本轮补充后端、RAG/agent 项目验收、容量成本、系统设计、SLO 与面试案例；[来源与版本](docs/practice-learning-sources.md) 记录四组资料，`docs/practice/` 提供项目、评估、架构与复盘工作表。权限/缓存实验用自制数据实测，不代表完整模型项目已完成。

Agent 进阶从 [ai-agent-book 十章对照](src/content/notes/ai-agent-book-comparison.md) 进入 [八步路径](src/content/tracks/agent-engineering-deep-dive.md)。新增六篇专题覆盖 Harness/Coding Agent、Skills/缓存、结构化记忆、事件交互、轨迹评估/协作和后训练/持续改进；[资料卡](src/content/resources/bojieli-ai-agent-book.md) 与 [核验记录](docs/ai-agent-book-evidence.json) 固定版本、章节和实验阅读范围。上游运行结果与本站设计练习分别标注。

## 本地运行

需要 Node.js 24 或更高版本，依赖版本由 `package-lock.json` 锁定。

```sh
npm ci
npm run dev
```

打开 `http://localhost:4321/ai-learning/`。开发模式显示内容页面；全文搜索需要生产构建：

```sh
npm run build
npm run preview
```

预览也使用 `/ai-learning/` 前缀；按 Ctrl+C 停止服务。`--ignore-lock` 保证 Astro 在当前终端前台运行。

## 检查

```sh
npm run check                  # schema、引用、测试、类型检查
npm run build                  # 清空旧产物、构建、中文索引、静态链接检查
npx playwright install chromium
npm run test:browser           # 搜索、筛选、手机阅读、键盘、RSS
npm run test:publication       # 草稿/审核/未来内容排除，撤下文章后重建
node scripts/retrieval-lab.mjs # 打印已记录的关键词实验结果
node scripts/access-cache-lab.mjs # 打印权限/缓存对照与已知边界
```

macOS 已安装 Chrome 时，可使用 `PLAYWRIGHT_CHROME_EXECUTABLE='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' npm run test:browser`，无需额外下载 Chromium。CI 使用 Playwright Chromium。

## 添加内容

| 模板 | 复制到 |
| --- | --- |
| `templates/resource.md` | `src/content/resources/` |
| `templates/note.md` / `templates/lab.md` | `src/content/notes/` |
| `templates/track.md` | `src/content/tracks/` |
| `templates/episode.md` | `src/content/episodes/` |

替换稳定 slug 和占位内容，补齐来源与真实核验日期。只有 `status: published` 且 `publishedAt` 不在未来的内容生成页面、列表、RSS、站点地图和搜索。公开内容不得引用未公开条目。实验需要环境、复现步骤、实际结果与失败章节。

日期采用 `YYYY-MM-DD`，发布日期从该日 UTC 00:00 起可发布。未来文章需要在到期后重新构建；本站没有定时发布服务。首次发布日期保持不变，修订时更新 `updatedAt` 与真实的 `lastReviewedAt`。

标题或目录变化不影响 URL，URL 来自 frontmatter 的 `slug`。正文直接写 Markdown；内容关系用 frontmatter 的 slug 引用，页面自动生成链接、来源和反向引用。

公开 Git 仓库中的草稿依然公开可读。私人资料放在仓库外。首批 AI 协助内容已标明协助范围，作者公开发布前应通读确认。

## GitHub Pages

项目仓库：[xalexalice/ai-learning](https://github.com/xalexalice/ai-learning)。站点由 GitHub Pages 工作流发布，正式访问地址以仓库 Pages 部署结果为准。发布与维护步骤见 [部署说明](docs/deployment.md)。两个工作流分别负责 PR/主分支检查和主分支发布；PR 仅有读取权限。

Pages 构建从 GitHub `configure-pages` 的输出读取实际域名与子路径，也支持个人站根地址和自定义域名。手动生产构建可用：

```sh
SITE_URL=https://your-name.github.io BASE_PATH=/ai-learning npm run build
```

默认 `SITE_URL` 是本机地址，并生成 `noindex`，避免把未知账号写成真实站点地址。`.env.example` 是配置示例；命令行使用上述环境变量。署名、仓库链接和节目 feed 在 `src/site.ts` 中配置。

## 音频与许可

真实音频上传托管服务后，填入节目页、音频 URL、GUID、时长和关联笔记，再发布节目。站内只提供播放器与文字稿；音频 RSS 由托管服务维护。

AstroPaper MIT 声明与改编位置见 [第三方来源](THIRD_PARTY.md)。新增代码与原创文字的公开许可待作者确认，见 [内容政策](CONTENT_POLICY.md)。当前依赖审计中的未修复事项见 [已知限制](docs/known-limitations.md)。

原始方案与后续学习路线保留在 `docs/design.md`、`docs/roadmap.md`；候选项目研究见 `docs/github-candidates.md`。
