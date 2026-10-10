---
slug: agent-context-skills-cache
title: "Agent 上下文预算 Skills 与前缀缓存"
summary: "区分上下文、运行状态、技能说明和缓存，按需加载知识并验证压缩后的决策信息。"
kind: concept
topic: agents
tags: [Skills, context engineering, KV Cache, prompt cache, 上下文压缩]
status: published
publishedAt: "2026-10-10"
updatedAt: "2026-10-10"
lastReviewedAt: "2026-10-10"
sources: [bojieli-ai-agent-book, vllm-serving-docs]
prerequisites: [token-context, agent-context-memory]
related: [agent-harness-coding, prompt-design, serving-performance, agent-structured-memory]
---

## 上下文应包含当前决策需要的信息

指令、工具定义、当前目标、执行状态和来源证据具有不同作用。把它们全部作为一段无结构文本拼接，会丢失角色、工具结果归属和来源边界。状态可以长期保存，但只有本次调用真正加载的信息才属于模型上下文。

上下文预算应包含消息模板、工具 schema、证据和预留输出。假设一个任务允许总共 8192 token，可以先为规则分配 1200、技能目录 400、当前状态 600、证据 2800、输出 1600、余量 800，合计 7400。这只是预算练习，实际计数和输入输出上限要按模型与接口核对。

## Skills 怎样按需加载

Agent Skills 的格式规范要求技能目录至少含 `SKILL.md`，其元数据包括 `name` 和 `description`。运行环境可先提供目录摘要，选中技能后加载流程，再按任务读取引用资料或脚本。这样将常驻的发现信息与按需的完整知识分开。

技能说明负责描述何时使用、步骤和例外；工具 schema 描述可执行调用，两者不能混为一谈。技能目录中包含脚本，也不等于脚本已经获得文件、网络或账号权限。外部技能的说明和依赖仍需可信来源及版本检查。

以本站资料整理任务为例，写作技能描述可以限定“已确定来源和笔记目的时整理正文”；纯资料搜索不需要加载全部写作规范。验收应同时检查应触发与不应触发的例子，避免一个宽泛描述让所有任务加载同一套内容。

## KV Cache 与 Prompt Cache

KV Cache 保存模型推理中已有 token 的注意力键值；跨请求前缀缓存可复用符合条件的已有计算。API 中的 prompt cache 还受服务实现、模型、缓存范围和期限影响。它不是最终答案缓存，也不负责判断资料是否最新或用户是否有权访问。

稳定的指令和工具定义放在较稳定的部分，动态目标、时间和工具结果按消息结构加入。修改早期 token 会影响其后可复用的前缀，工具列表顺序、模板或模型版本变化也可能影响缓存。不能为了缓存命中保留已经失效的权限或指令。

对照实验需要记录实际输入 token、可复用部分、首 token 延迟及任务质量。只观察缓存命中率，无法证明总成本更低；压缩调用自身也有时间和费用。

## 压缩应保留哪些信息

| 信息 | 压缩时的要求 |
| --- | --- |
| 目标与限制 | 保留当前修订、否定、例外、单位与截止时间 |
| 动作状态 | 区分计划、已发起、成功、失败、结果未知 |
| 来源证据 | 保留原始位置、版本、作用域和冲突 |
| 未完成事项 | 保留下一步和缺失信息，不改写成已完成 |

原创反例：“仅使用公开文件，暂不发布结果”压缩成“整理并发布文件”，改变了任务授权。摘要更短仍然是失败。可以用事实保留题和下一步动作题同时检查压缩质量，并留原始记录供回查。

## 练习与复习

为五条虚构工具结果设计原文、摘要和来源指针，加入一次任务修订。检查压缩前后对权限、状态和下一步动作的回答是否一致，再列出哪些字段可以常驻、哪些按需加载。

解释 Skills 与工具调用有什么不同、缓存为何不能承担授权，以及怎样证明节省上下文没有损失关键约束。本篇预算与反例为设计练习。

## 阅读来源与核验

- [第 2 章上下文工程](https://github.com/bojieli/ai-agent-book/blob/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/book/chapter2.md)
- [Agent Skills 格式规范](https://agentskills.io/specification)
- [上下文压缩实验说明](https://github.com/bojieli/ai-agent-book/blob/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/chapter2/context-compression/README.md)

2026-10-10：AI 助手协助原创整理，核对教材与 Skills 规范；未测量模型缓存性能。
