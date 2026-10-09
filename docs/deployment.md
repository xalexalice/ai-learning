# 发布到 GitHub Pages

发布仓库是 [xalexalice/ai-learning](https://github.com/xalexalice/ai-learning)，使用 GitHub Pages 的 Actions 发布方式。原创部分继续使用 CONTENT_POLICY.md 的现有声明，公开仓库不自动授予 MIT 或 Creative Commons 许可。

## 首次发布

1. 维护者核对内容与署名；新增代码和原创文字的许可若要变更，单独更新 `CONTENT_POLICY.md` 和关于页。
2. 本项目使用独立公开仓库，只推送本项目目录。不要把 `vibe-ai` 的其他项目、`node_modules`、`.env` 或私有材料加入仓库。
3. `src/site.ts` 的 `repository` 已指向本项目仓库。
4. 在仓库 Settings → Pages → Build and deployment 中选择 GitHub Actions。
5. 推送 `main` 或手动运行 Publish to GitHub Pages。工作流读取实际 Pages `origin` 与 `base_path`，生成正确的 canonical、资源 URL、搜索、RSS 和站点地图。
6. 查看 Actions 部署结果，再访问返回的真实页面地址。验收首页、中文搜索、手机笔记、RSS 和错误页。

首次发布由仓库管理员启用 Pages。之后推送 `main` 会自动构建和部署，也可在 Actions 手动运行 Publish to GitHub Pages；成功的网址以部署结果为准。

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
