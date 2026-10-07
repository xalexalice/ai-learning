---
slug: vllm-serving-docs
title: "vLLM 推理服务：缓存、吞吐与指标"
summary: "KV cache、prefix caching、推理指标与基准。选取具体章节作为学习依据，保留 GitHub 快照与复用边界。"
topic: engineering
tags: [GitHub, 学习资料, "vllm-project"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
type: doc
sourceUrl: https://github.com/vllm-project/vllm
author: "vllm-project 及课程/项目贡献者"
sourcePublishedAt: null
accessedAt: "2026-10-07"
version: "默认分支 main · commit aecb717f10bc · 核验 2026-10-07"
reuseRights: "Apache-2.0。本站仅链接与原创整理；模型、数据、插图和子项目分别核对。"
---

## 学什么

KV cache、prefix caching、推理指标与基准。先读 metrics 与 prefix caching；Paged Attention 页面自称历史设计说明，不能视为所有后端的当前实现。

## 推荐阅读章节

- [docs/design/paged_attention.md](https://github.com/vllm-project/vllm/blob/aecb717f10bccbaae441d43910ae660a8f2e4e3c/docs/design/paged_attention.md)
- [docs/design/prefix_caching.md](https://github.com/vllm-project/vllm/blob/aecb717f10bccbaae441d43910ae660a8f2e4e3c/docs/design/prefix_caching.md)
- [docs/design/metrics.md](https://github.com/vllm-project/vllm/blob/aecb717f10bccbaae441d43910ae660a8f2e4e3c/docs/design/metrics.md)
- [docs/benchmarking/README.md](https://github.com/vllm-project/vllm/blob/aecb717f10bccbaae441d43910ae660a8f2e4e3c/docs/benchmarking/README.md)

## 版本与维护状态

本次固定默认分支快照 `aecb717f10bccbaae441d43910ae660a8f2e4e3c`。该分支最近提交时间为 2026-10-07T04:16:53Z，仓库最近 push 时间为 2026-10-07T04:16:54Z；两者含义不同，push 不保证教材章节发生更新。运行示例前仍需核对依赖、模型和服务版本。

## 许可与本站使用方式

Apache-2.0。许可依据：[LICENSE](https://github.com/vllm-project/vllm/blob/aecb717f10bccbaae441d43910ae660a8f2e4e3c/LICENSE)。

本站笔记是用自己的结构与示例重新整理的概念学习材料；本次没有导入原文、图片、数据集或课程代码，没有运行课程中的模型训练或 API 示例。
