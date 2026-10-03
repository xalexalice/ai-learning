---
slug: hf-generation
title: "Transformers：生成参数参考"
summary: "查阅生成长度和采样参数的官方定义。记录模型实验时，用它核对参数含义，避免把默认值当作固定结论。"
type: doc
topic: prompting
tags: [generation, max-new-tokens, sampling]
status: published
sourceUrl: https://huggingface.co/docs/transformers/en/main_classes/text_generation
author: Hugging Face
sourcePublishedAt: null
accessedAt: "2026-10-03"
version: "Transformers Generation 在线文档，访问时版本"
reuseRights: "仅链接与自写摘要；第三方示例复用以 Transformers 仓库许可为准。"
publishedAt: "2026-10-03"
updatedAt: "2026-10-03"
---

## 为什么收录

实验记录需要精确描述生成条件。这份参考列出长度限制与采样设置；同样的提示在不同设置下可能呈现不同输出。

## 优先查阅

关注 GenerationConfig 中的 `max_new_tokens`、`do_sample`、`temperature` 与 `top_p`。这些是 Transformers 的配置名称，其他服务的接口字段需要分别核对，不能直接照搬。

## 使用方式

运行模型实验时记录所用 Transformers 版本、模型标识、配置和原始输出。本站首批内容没有调用模型，不提供未经运行的参数优劣排名。
