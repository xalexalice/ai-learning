# 第三方代码来源

本项目基于 AstroPaper 的静态博客架构做专项改造，没有同时嵌入其他站点框架。

- 上游：<https://github.com/satnaing/astro-paper>
- 核对版本：`35cfa7fbe0b897306d27670d3819e55d5205f3dd`（2026-08-05）
- 许可证：MIT，Copyright (c) 2023 Sat Naing，全文保留在 `LICENSES/AstroPaper.txt`。
- `src/lib/paths.ts` 改编自 `src/utils/withBase.ts`，保留 base 前缀与规范化逻辑。
- `src/content.config.ts` 延用内容集合与 glob 加载结构，改为资料、笔记、路径、节目四个 schema。
- `src/lib/publication.ts` 延用 postFilter/getSortedPosts 模式，改成所有模式均严格执行状态与发布日期过滤。
- `src/pages/search.astro` 改编自搜索页，保留 Pagefind UI、base bundlePath、URL 查询恢复及可访问性样式。
- `src/layouts/Layout.astro` 沿用语义化文档、canonical、Open Graph 与 RSS 自动发现结构，去除上游字体网络请求、主题切换和客户端路由。

页面样式、学习关系和校验脚本为本项目实现。搜索客户端使用 Pagefind / 默认 UI，并包含 Svelte 编译运行代码；其 MIT 声明与 AstroPaper 声明随站点一起保存在 `public/licenses/`（Svelte 原始声明来自官方仓库 `LICENSE.md`）。其他构建依赖的许可随 npm 包提供。

没有复制第三方课程、论文正文或音频。资料卡保存链接和原创摘要。项目新增代码和原创内容的公开许可尚待作者确认，见 `CONTENT_POLICY.md`；上游 MIT 权利不受影响。
