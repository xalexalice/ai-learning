---
slug: agent-context-memory
title: "上下文与记忆：选择、压缩、隔离与遗忘"
summary: "区分当前输入、任务状态、长期记忆和知识库，建立来源、时间、用户边界与删除机制。"
kind: concept
topic: agents
tags: ["context-engineering","memory","state"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["agents-beginners-course","datawhale-hello-agents"]
prerequisites: ["agent-control-loop","token-context"]
related: ["rag-ingestion-chunking","agent-workflows-orchestration","ai-security-boundaries"]
---
## 四类信息不要混在一起

上下文是本次模型调用实际看到的输入；任务状态记录工作进度；长期记忆保存跨会话信息；知识库提供可检索资料。将历史全部拼接到上下文，既不是完整记忆设计，也不能保证模型注意到关键内容。

## 模块知识点

| 模块 | 需要学习 |
| --- | --- |
| 收集 | 指令、当前问题、状态、历史、检索证据与工具结果 |
| 选择 | 相关性、来源可信度、时效、权限和重复项 |
| 组织 | 保留角色边界、字段结构、来源位置与版本 |
| 压缩 | 摘要、截断、引用原记录；衡量条件和否定是否丢失 |
| 写入 | 哪些事实值得保留，是否需要确认，如何标注来源 |
| 读取 | 绑定用户、任务与可见范围，避免跨用户混入 |
| 更新 | 解决新旧冲突、记录有效期与撤销依据 |
| 遗忘 | 删除、到期、撤下与缓存/索引同步 |

记忆分类方法很多：短期/长期、事件/实体/偏好等是设计视角，不是统一强制标准。向量库是可能的实现组件，结构化数据库或任务文件也可以更合适。

## 压缩反例与版本设计

“周一能开会，但本周一除外”如果压缩成“周一能开会”，就删掉了关键限制。对影响行动的日期、单位、否定和未完成项应独立保留，再做摘要。

一个虚构记忆条目可包含 `subject、value、source、observed_at、valid_until、owner_scope、revision`。字段是本站的工程示例，需按实际系统调整。模型生成的推测应标为推测，不能悄悄升级为用户事实；新的来源也不一定自动覆盖旧的可靠记录。

## 练习与完成标准

写五条虚构事件，包含更新、冲突、过期和撤销。分别构造完整上下文与压缩上下文，检查关键约束是否保留。设计某用户删除一条记忆后的数据库、索引和缓存预期。本次未保存真实用户记忆。

## 复习问题

1. 长期记忆、RAG 与当前任务状态有什么不同？
2. 为什么摘要必须保留来源指针？
3. 如何保证旧记忆不会覆盖最新的明确指令？

## 阅读依据与核验范围

- [智能体记忆](https://github.com/microsoft/ai-agents-for-beginners/blob/25b7985f3b2dc37a84f4a7387ccd3c9f0e5b1595/13-agent-memory/README.md)
- [记忆与检索](https://github.com/datawhalechina/hello-agents/blob/4b014ad47e2658af24b59f21e7bdb3f89a66205e/docs/chapter8/%E7%AC%AC%E5%85%AB%E7%AB%A0%20%E8%AE%B0%E5%BF%86%E4%B8%8E%E6%A3%80%E7%B4%A2.md)
- [上下文工程](https://github.com/datawhalechina/hello-agents/blob/4b014ad47e2658af24b59f21e7bdb3f89a66205e/docs/chapter9/%E7%AC%AC%E4%B9%9D%E7%AB%A0%20%E4%B8%8A%E4%B8%8B%E6%96%87%E5%B7%A5%E7%A8%8B.md)

2026-10-07：AI 助手协助原创整理，核对以上 GitHub 章节；示例与练习为本站设计，未执行的任务不作为实验结论。
