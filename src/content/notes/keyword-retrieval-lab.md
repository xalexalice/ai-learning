---
slug: keyword-retrieval-lab
title: "动手实验：关键词检索会漏掉什么"
summary: "在 3 条自写语料、5 个固定查询上比较精确与规范化匹配。修复大小写和全角字符后，同义表达依然未命中。"
kind: lab
topic: rag
tags: [RAG, retrieval, NFKC, 实验]
status: published
publishedAt: "2026-10-03"
updatedAt: "2026-10-03"
lastReviewedAt: "2026-10-03"
sources: [string-normalize, rag-paper, agent-evals]
prerequisites: [evaluation-baseline]
related: [rag-evidence]
---

## 要解决的问题

检索失败是否都需要换向量数据库？先用一个可复现的小实验检查文本表示差异。这个实验只测试子串匹配，没有使用嵌入、生成模型或外部 API。

## 环境与版本

2026-10-03 在 macOS、Node.js v26.8.2 上运行。实验只使用 Node 内置文件与断言模块，没有模型调用和付费依赖。源码位于 `scripts/retrieval-lab.mjs`，固定输入与结果位于 `labs/retrieval/`。

## 复现步骤

在项目根目录运行：

```sh
node scripts/retrieval-lab.mjs
node scripts/retrieval-lab.mjs --check
```

第一条打印结果，第二条确认当前代码输出与记录完全一致。修改实验数据后，用 `--write` 更新记录，并在提交中解释样本变化。

语料由本站编写，共三条，分别包含 RAG、Token 和回归检查。两个方案都返回首个包含查询的文档 ID；唯一改动是比较前是否执行 `normalize('NFKC').toLowerCase()`。命中规则是返回 ID 与预期 ID 完全相同。

## 实际结果

| 查询 | 预期文档 | 精确匹配 | 规范化匹配 |
| --- | --- | --- | --- |
| RAG | rag | rag | rag |
| rag | rag | 未命中 | rag |
| Ｔｏｋｅｎ | token | 未命中 | token |
| 回归 | eval | eval | eval |
| 知识增强 | rag | 未命中 | 未命中 |

精确匹配命中 **2 / 5**，规范化后命中 **4 / 5**。本次观测说明：在这组手写样本里，大小写与全角字母造成的两处失败可由预处理修复。

## 失败与适用边界

“知识增强”与文档中的 RAG 没有子串关系，两个方案都失败。新增一个只差语义表达的查询，通常需要更好的查询分析或其他检索方法，但必须重新运行才能得出结果。

三条文档与五个查询是人工挑选的演示数据。结果不代表真实查询分布，也不证明规范化在任意场景都有收益。首个匹配策略还可能把错误文档排在前面；NFKC 会改变兼容性字符表示，原始资料应另外保留。

## 复习任务

新增一个不该返回结果的问题和一个会匹配多个文档的问题。先写出预期，再运行脚本，记录首个匹配策略的缺陷。把检索命中与答案正确性分开，不要把本实验称作完整的 RAG 评测。

## 来源与核验

字符串处理依据 MDN 的 normalize 文档；RAG 论文用于理解实验与完整系统的范围差异；评估文章用于设计固定输入与失败记录。实验没有复现上述资料的代码或模型结果。

## 修订记录

2026-10-03：AI 助手编写自有语料和实验脚本，实际运行并保存 JSON 结果；公开发布前由作者通读解释与边界。
