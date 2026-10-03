# 发布到 GitHub Pages

代码与本地构建已完成，仓库地址、公开许可和第一次线上部署尚未确定。

## 首次发布

1. 作者通读首批内容，确认 `src/site.ts` 的站名和署名，确定新增代码与原创文字的许可，更新 `CONTENT_POLICY.md` 和关于页。
2. 创建单独的 GitHub 仓库，只推送本项目目录。不要把 `vibe-ai` 的其他项目、`node_modules`、`.env` 或私有材料加入仓库。
3. 把仓库 URL 写入 `src/site.ts` 的 `repository`。
4. 在仓库 Settings → Pages → Build and deployment 中选择 GitHub Actions。
5. 推送 `main` 或手动运行 Publish to GitHub Pages。工作流读取实际 Pages `origin` 与 `base_path`，生成正确的 canonical、资源 URL、搜索、RSS 和站点地图。
6. 查看 Actions 部署结果，再访问返回的真实页面地址。验收首页、中文搜索、手机笔记、RSS 和错误页。

工作流不会自动启用 Pages；这一步需要仓库管理员操作。当前没有创建远程仓库或改动任何 GitHub 设置。

## 手动配置

| 发布位置 | SITE_URL | BASE_PATH |
| --- | --- | --- |
| 项目站 | `https://your-name.github.io` | `/ai-learning` |
| 个人站根地址 | `https://your-name.github.io` | `/` |
| 自定义域名 | 真实 HTTPS 域名 | `/` |

`SITE_URL` 只包含 origin，不包含项目路径。默认本地地址带 `noindex`；生产构建需提供实际 origin。所有页面都通过统一路径工具添加 base。

## 工作流与内容更新

`check.yml` 在 PR 和 `main` 运行内容、类型、构建、浏览器及撤下文章回归检查，只有 `contents: read`。`pages.yml` 在主分支构建并通过浏览器检查后上传 `dist`，部署任务才持有 `pages: write` 与 `id-token: write`。GitHub Actions 版本按核对过的 SHA 固定。

构建清空旧 `dist` 后重新生成 Pagefind，不把搜索缓存复制到 `public/`。撤下文章时将其改为 `review` 或 `draft`，提交并重新部署；不要只从列表移除。现有 URL 在重新部署后返回错误页，Git 历史依然保留文件。

没有启用定时 Actions；未来日期内容必须在到期后触发构建才会上线。修订 RSS 保留首次发布日期。

参考：[Astro Pages 部署](https://docs.astro.build/en/guides/deploy/github/)、[GitHub configure-pages 输出](https://github.com/actions/configure-pages/blob/main/action.yml)。
