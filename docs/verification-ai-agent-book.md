# ai-agent-book 知识补充验收

日期：2026-10-10。

## 内容交付

对照 `bojieli/ai-agent-book` 2.0 的十章，固定快照 `dbc046eb896ac4e39aa19c7774c8bf49583b89a6`。新增六篇概念专题、一篇十章对照、一张资料卡及一条八步进阶路径，并接入知识地图、系统大纲与应用实战路线。

全站为 61 篇笔记（56 概念、3 路线/大纲/对照、2 实际实验）、33 张资料卡、10 条路径。原有 21 步主线和两篇实测实验保留。大纲中的笔记链接集合与实际 61 个已发布 slug 完全一致。

## 来源与范围

`docs/ai-agent-book-evidence.json` 记录固定版本、24 个查阅文件的哈希与链接、阅读范围及三个补充原始来源。核对范围为十章目录与小结、重点段落和选定实验说明，没有逐行审计全书及 109 个实验。

根 LICENSE 为 Apache-2.0，标注 Copyright 2025 Bojie Li；没有导入上游文字、图片或代码。案例、手算和练习均为本站原创设计，没有模型调用、微调、RL、图索引或硬件实验成绩。Coding Agent README 中三个 stub 工具的复用边界已写入对照笔记。

## 本地验证

环境：macOS、Node.js 26.8.2、已安装的 Google Chrome。项目要求 Node.js 24 及以上，CI 使用 `.node-version` 指定的 Node.js 24。

| 检查 | 结果 |
| --- | --- |
| schema、引用、日期、前置循环与占位检查 | 105 条内容全部通过 |
| 内容规则测试与已有实验复现 | 5 项测试通过，两个实验输出一致 |
| Astro 类型检查 | 39 个文件，0 错误、0 警告、0 提示 |
| 静态构建与中文索引 | 121 HTML 页面，104 条搜索内容 |
| 内部链接、资源、RSS 与 sitemap | 使用 `/ai-learning/`，检查通过 |
| 发布回归 | 草稿/审核/未来内容排除，公开正向对照及撤稿重建全部通过 |
| 浏览器验收 | 8 项通过；新专题搜索、十章对照、八步路径、手机阅读和固定来源可用 |
| RSS | 61 篇，包含新增七篇笔记，排除节目草稿 |
| 全量大纲索引 | 已发布笔记与索引集合完全一致 |

资料卡正文补足 Apache-2.0 名称后重新构建，完整浏览器验收通过。页面截图用于阅读布局核验，不代表上游实验执行结果。

## 复核命令

```sh
SITE_URL=https://xalexalice.github.io BASE_PATH=/ai-learning npm run build
SITE_URL=https://xalexalice.github.io BASE_PATH=/ai-learning PLAYWRIGHT_CHROME_EXECUTABLE='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' npm run test:publication
PLAYWRIGHT_CHROME_EXECUTABLE='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' npm run test:browser
```

提交推送后由现有 GitHub Pages 工作流自动发布。上述验收为本地构建产物的结果，云端部署状态以仓库 Actions 为准。
