---
slug: rag-evaluation
title: "RAG 评估：召回、排序、忠实度与正确性"
summary: "把检索和回答拆开评价，明确 context recall、context precision、faithfulness 与事实正确性的参照物。"
kind: concept
topic: evaluation
tags: ["RAG","faithfulness","context-recall"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["ragas-evaluation-docs"]
prerequisites: ["rag-retrieval-reranking","llm-evaluation"]
related: ["rag-evidence","embeddings-vector-search"]
---
## 不同指标比较不同对象

检索结果、回答与参考答案是三个对象。需要先判断关键资料是否找全，再看相关片段的排序，最后检查回答是否依据上下文、是否符合可信参考。把它们合成一个总分会丢失排错信息。

## 指标知识点

| 指标 | 比较什么 | 前提与边界 |
| --- | --- | --- |
| Context recall | 检索覆盖相关信息的程度 | 需要参考资料或参考答案；不能不知道全集却声称算出召回 |
| Context precision | 相关片段是否排在更前 | 需明确相关性标签或判定方法，不仅是相关数占比 |
| Faithfulness | 回答中的事实主张是否被检索上下文支持 | 上下文本身错误时，高忠实度也不保证现实正确 |
| Factual correctness | 回答与可信 reference 的事实一致性 | reference 的质量与完整性会影响分数 |
| 任务成功 | 实际问题是否解决 | 还包括拒答、引用可定位与用户约束 |
| 成本/延迟 | 完成一次查询所需资源 | 必须固定负载、长度和运行条件 |

Ragas 的具体类、字段和新旧 API 有版本差异。执行前核对实际安装版本和文档，不从指标名称推断默认输入字段。自动指标常需要 LLM 或 embedding，也有运行费用与评判误差。

## 一个手算诊断例子

假设参考需要两条独立事实 A、B，检索只得到 A，回答正确复述 A 并遗漏 B。对“覆盖事实”的简化人工规则，覆盖率是 1/2；若唯一回答主张受 A 支持，忠实度可能很高，完整性仍不足。

再假设错误资料写“限额 20”，可信参考是“限额 10”。回答复述 20 可以忠实于错误资料，却不符合参考。以上为人工构造示例，不是 Ragas 运行分数；Ragas 的相关性与主张分解规则需要单独核对。

## 练习与完成标准

准备五个设计案例：漏检、排序靠后、证据正确但回答越界、错误证据被忠实复述、缺证据正确拒答。为每个标记应失败的指标与修复模块。已有真实关键词实验只衡量固定查询命中，不能代替完整 RAG 评估。

## 复习问题

1. Faithfulness 高为什么不等于事实正确？
2. 为什么 context precision 还关心排名？
3. 没有参考资料时，可以严格测出什么、测不出什么？

## 阅读依据与核验范围

- [Context Recall](https://github.com/vibrantlabsai/ragas/blob/298b68274234c060deacab3cf5fb52aa3a20e885/docs/concepts/metrics/available_metrics/context_recall.md)
- [Context Precision](https://github.com/vibrantlabsai/ragas/blob/298b68274234c060deacab3cf5fb52aa3a20e885/docs/concepts/metrics/available_metrics/context_precision.md)
- [Faithfulness](https://github.com/vibrantlabsai/ragas/blob/298b68274234c060deacab3cf5fb52aa3a20e885/docs/concepts/metrics/available_metrics/faithfulness.md)
- [Factual Correctness](https://github.com/vibrantlabsai/ragas/blob/298b68274234c060deacab3cf5fb52aa3a20e885/docs/concepts/metrics/available_metrics/factual_correctness.md)

2026-10-07：AI 助手协助原创整理，核对以上 GitHub 章节；示例与练习为本站设计，未执行的任务不作为实验结论。
