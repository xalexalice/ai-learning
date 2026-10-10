---
slug: agent-structured-memory
title: "结构化记忆与知识索引的来源和权限"
summary: "用主体、时间、来源和修订表达记忆，比较文本、关系、摘要树与 GraphRAG 的检索任务和验证方式。"
kind: concept
topic: rag
tags: [结构化记忆, GraphRAG, RAPTOR, 知识图谱, 来源]
status: published
publishedAt: "2026-10-10"
updatedAt: "2026-10-10"
lastReviewedAt: "2026-10-10"
sources: [bojieli-ai-agent-book, datawhale-hello-agents]
prerequisites: [agent-context-memory, rag-ingestion-chunking]
related: [rag-retrieval-reranking, retrieval-access-cache-lab, agent-trajectory-learning]
---

## 结构化信息解决什么问题

用户偏好、当前任务状态和公共知识有不同的所有者与更新规则。需要跨会话追踪变化、区分同名实体或回答跨记录关系时，可以引入结构化表示；只有单段问答时，简单的文本索引可能已经足够。

记忆不是从文本抽取一句话后永久相信它。候选信息需要注明谁说的、描述谁、何时有效、由什么证据支持，以及是否已被更新或撤销。模型推断与明确陈述应分开保存。

## 原创记忆记录示例

```json
{
  "subject_id": "person-a",
  "owner_scope": "workspace-demo/user-a",
  "claim": "本次资料清单仅包含公开文件",
  "claim_type": "explicit_task_constraint",
  "source_id": "message-12",
  "valid_for": "task-4",
  "revision": 2,
  "status": "active"
}
```

这条约束仅适用于一个任务，不能升级为用户对所有未来工作的永久偏好。`subject_id` 区分描述对象，`owner_scope` 区分有权读取的主体；姓名相同不意味着同一个人。上述字段是本站示例，实际系统还需保存可信身份、时间和原文位置。

## 表示形式与检索任务

| 形式 | 擅长的任务 | 需要付出的代价 |
| --- | --- | --- |
| 文本片段 | 查具体说明和语义相近内容 | 跨片段关系、冲突与更新需额外处理 |
| 结构化卡片或表 | 查属性、有效期和明确筛选条件 | schema、实体消歧及变更维护 |
| 摘要树 | 从主题概览走向相关细节 | 摘要失真、来源映射及重建成本 |
| 实体关系图 | 沿人物、项目、机构等关系找证据 | 抽取错误、关系时间和权限传播 |

RAPTOR 通过递归聚类和摘要组织多层文本信息；Microsoft GraphRAG 包含实体关系抽取、社区结构与摘要，再使用这些结构查询。关系数据库、知识图谱和 GraphRAG 不是同一个概念，选择时应看具体问题和构建成本。

## 原创关系查询与权限反例

假设自制文档分别描述“成员 A 维护项目 P”和“项目 P 使用组件 C”。问题“成员 A 负责的项目用了什么组件”需要连接两条记录。每条关系都应能回到原文，缺少证据的一段不能由模型自动补全。

如果第二条记录仅对管理员开放，普通读者不能通过项目摘要或图关系间接获取组件信息。检索、摘要生成、缓存和引用都要遵循可见范围。对混合权限资料，应按授权可见集构建可发布摘要，或在返回前验证全部支撑来源可见；只隐藏原文链接不能解决摘要泄露。

## 更新与删除

把原始记录、派生摘要、实体关系和索引绑定版本及依赖。原文撤销后，需要重建或撤下由它支持的事实与摘要，推进语料修订并使相关缓存失效。图中仍存在一条旧关系，不证明当前事实仍成立。

可执行代码形式的记忆应视为待审核的程序，不应把来源文本或模型抽取结果直接执行。它带来的风险已超出一般检索，需额外的沙盒、允许动作和独立检查。

## 练习与完成标准

写六条自制记录，包含同名对象、关系跨期、相互冲突、私有资料及撤销。分别准备细节题、关系题、汇总题和拒答题，检查证据、授权及更新后结果。比较结构化方案与简单文本基线，不预设图结构一定提升质量。

复习时回答：主体与所有者为什么不同？摘要如何继承权限？删除源文件后还有哪些派生内容需要处理？本篇没有运行图索引或模型实验。

## 阅读来源与核验

- [第 3 章记忆与结构化索引](https://github.com/bojieli/ai-agent-book/blob/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/book/chapter3.md)
- [结构化索引项目说明](https://github.com/bojieli/ai-agent-book/blob/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/chapter3/structured-index/README.md)
- [RAPTOR 原论文](https://arxiv.org/abs/2401.18059)、[GraphRAG 官方说明](https://microsoft.github.io/graphrag/)

2026-10-10：AI 助手协助原创归纳；记录、关系与权限案例为本站设计。
