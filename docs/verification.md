# 首版验收记录

2026-10-03 完成本地验证。测试环境为 macOS、Node.js v26.8.2 与 v24.21.0、Playwright 1.63.0，通过本机 Google Chrome 的无头模式运行。线上 GitHub Actions 与 Pages 未执行。

| 项目 | 结果与实际检查范围 |
| --- | --- |
| 内容 | 11 个文件：5 资料、4 笔记、1 路径、1 未公开节目草稿；schema、日期、slug、引用通过 |
| 类型与构建 | Astro check 0 错误、0 警告；27 个 HTML 页面；中文 Pagefind Extended 索引 10 个公开详情页、2 个筛选维度 |
| 单元规则 | 5 组测试通过：草稿/审核/未来排除，无效字段，重复 slug，未公开引用，前置循环与实验必备章节 |
| 浏览器 | 5 组通过：首页与整条路径、资料筛选与清除、中英搜索及主题筛选、375px 阅读与键盘、RSS 与空节目页 |
| 搜索 | 检索增强、RAG、token 返回预期笔记；恢复 URL 查询、清除旧查询、无结果提示、键盘打开结果通过 |
| 发布回归 | 临时生成 draft/review/future/public 四种样本；前三种不生成页面、列表、RSS、站点地图和搜索结果；公开样本是正对照，撤成 review 后重建并确认搜索也归零 |
| 项目路径 | `/ai-learning/` 全站链接、图标、脚本、搜索 bundle、RSS、canonical 与 sitemap 检查通过 |
| 根目录部署 | Node.js 24、`SITE_URL=https://example.org`、`BASE_PATH=/` 下发布回归及 5 组浏览器测试通过；示例域名仅用于测试 |
| 实验复现 | 3 条原创语料、5 个固定查询；精确匹配 2/5，NFKC 加小写 4/5，与记录 JSON 完全一致；没有调用生成模型 |
| 代码来源 | AstroPaper 固定 SHA 与 MIT 全文保留；没有混用 Quartz/Starlight/WordPress 框架 |

截图为最终生产构建的真实浏览器截图。服务由测试启动并在结束时关闭，没有交接常驻服务。

GitHub 远程仓库与内容许可尚未确定；真实音频录制、托管、播放及节目 RSS 尚未验收。依赖审计的同一条未修复上游公告见 `known-limitations.md`。
