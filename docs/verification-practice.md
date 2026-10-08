# 开发实践补充验收

2026-10-08，本地完成已确认的开发、综合项目、架构与面试资料补充。

## 本轮范围

新增 10 篇笔记（8 篇概念、1 篇路线、1 篇实测实验）、4 张资料卡、2 条路径和 4 份工作表。全站 54 篇笔记（50 概念、2 路线/大纲、2 实验）、32 张资料卡、9 条路径；一个节目仍为草稿。系统大纲索引覆盖全部 54 篇，首页仍使用原有 21 步主线。

来源核验见 practice-learning-evidence.json 与 practice-learning-sources.md。三个仓库按默认分支 commit 固定章节，另读 SRE Workbook 四章和 WHATWG/OWASP 官方说明。许可证由根文件核对，不只依赖 API 标签；未复制课程正文、代码、图表或题目答案。

## 实际实验

权限/缓存：Node.js 24.21.0、3 份自制文档、3 个可信 fixture 身份、两个租户、10 个顺序查询。仅 query 缓存匹配 4/10；身份/租户/权限版本/语料版本键与当前授权重查匹配 10/10。独立边界用例故意漏更新 corpusRevision，返回 V1 而不是 V2，确认版本机制仍需可靠更新。

输入、脚本与逐项结果分别保存在 labs/access-cache/cases.json、scripts/access-cache-lab.mjs、labs/access-cache/results.json。结果是固定 fixture 的预期匹配，不能解释为生产安全保证、RAG 语义正确率或性能提升。

## 已执行验证

| 检查 | 实际结果 |
| --- | --- |
| Node 24 下 npm run build | 通过；96 条内容 schema/引用/日期/发布规则；5 项规则测试、原检索实验和新增缓存实验复现；Astro 0 错误/警告/提示 |
| 构建产物 | 112 个 HTML 页面，95 个公开详情进入 Pagefind；内部 URL/静态资源、RSS 与 sitemap 通过 /ai-learning/ 前缀审计 |
| Chrome 下 npm run test:browser | 7/7 通过；主线、筛选、中英文搜索、手机/键盘、原模块、新路线/实验/许可、RSS/草稿排除 |
| 新搜索与阅读 | 幂等、错误预算、面试可找到指定新笔记；7 步开发、6 步架构路径可进入；实验数值与版本边界可读 |
| 375px 与视觉核验 | 实战路线、缓存实验无文档横向溢出；检查桌面 1440px 与手机 375px 截图，标题、正文、导航可读 |
| 全量索引检查 | 大纲集合与实际 54 个笔记 slug 完全一致；4 份工作表存在 |
| Git 空白检查 | git diff --check 通过 |

执行命令：

~~~sh
npm exec --yes --package=node@24 -- npm run build
PLAYWRIGHT_CHROME_EXECUTABLE='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' npm run test:browser
node scripts/access-cache-lab.mjs --check
~~~

没有改动发布规则实现，未额外重复耗时的发布状态回归；现有规则测试和 RSS/草稿浏览器用例均通过。没有推送、云部署、模型 API、训练或权重下载；完整模型项目、负载、费用与真实故障演练仍由学习者按工作表执行。阅读完成度不能替代实现与真实架构经验。
