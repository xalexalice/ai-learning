---
slug: rag-retrieval-reranking
title: "RAG 检索：召回、混合搜索与重排"
summary: "拆开候选召回和精排，理解关键词、向量、过滤、查询改写与 top-k 的代价。"
kind: concept
topic: rag
tags: ["RAG","retrieval","rerank","hybrid-search"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["genai-beginners-course","hf-llm-course","datawhale-llm-universe"]
prerequisites: ["rag-ingestion-chunking"]
related: ["rag-evidence","rag-evaluation","keyword-retrieval-lab"]
---
## 先召回，再排序，再核验证据

召回从大量资料中找候选，重排对较少候选做更细判断，生成使用最终上下文回答。重排不能找回根本没有进入候选集的资料。模型生成流畅也不能证明召回和排序正确。

## 检索模块知识点

| 方法或参数 | 适用场景 | 代价与边界 |
| --- | --- | --- |
| 关键词/BM25 等稀疏检索 | 型号、编号、术语与精确匹配 | 同义表达可能漏检 |
| 向量检索 | 不同表述的语义匹配 | 数字、否定、版本可能混淆 |
| 混合检索 | 结合稀疏与稠密候选 | 需要处理不同分数尺度和融合规则 |
| 元数据过滤 | 范围、日期、权限、文档类型 | 过滤字段不全会漏检或越界 |
| Query 改写 | 补全上下文、拆分多问句 | 改写可能改变原始意图 |
| Reranker | 对 query 与候选联合评分 | 增加延迟，输入长度有限 |
| top-k 与阈值 | 控制候选数与拒答边界 | 更多候选也可能增加噪声与成本 |
| 去重和多样性 | 减少相邻重复片段 | 过度去重可能删掉关键条件 |

混合检索可按各自排名做融合，或校准后结合分数。直接相加 BM25 分数和余弦分数没有通用合理性；本站将融合方案作为待比较的工程选择，不提供固定“最优权重”。

## 反例与排错顺序

假设查询“AB-204 的保修期”，向量召回返回措辞很相近的 AB-240 说明书。重排之前必须把正确型号纳入候选；关键词与元数据可提供精确约束。若同一文档的重叠片段占满 top-k，还应检查去重与多样性。

排错时记录原查询、改写查询、过滤条件、候选 ID、分数、重排结果和最终上下文。先判断关键证据是否入候选，再看位置与上下文预算，最后查生成。不要把所有错误统称为幻觉。

## 练习与完成标准

设计六个查询，覆盖精确编号、同义表述、缺证据、版本冲突、多问句和未授权资料。为每个查询标记相关片段 ID，比较关键词与向量方案的预期失败。已有关键词实验可实际复现；新的向量与重排实验尚未执行。

## 复习问题

1. Reranker 为什么修复不了候选集之外的漏检？
2. top-k 增大为什么可能让答案变差？
3. 怎样区分召回失败与证据进入上下文后仍答错？

## 阅读依据与核验范围

- [检索、向量搜索与重排](https://github.com/microsoft/generative-ai-for-beginners/blob/d8ec07e31c4b32bd283d565c1abd9b58bb5cf2e8/15-rag-and-vector-databases/README.md)
- [语义搜索](https://github.com/huggingface/course/blob/8b893f0ede6c781045692a7f892f25a0c92b4805/chapters/en/chapter5/6.mdx)
- [检索评估与优化](https://github.com/datawhalechina/llm-universe/blob/77beb748047e8a0d8ff708716606a8e0b132dc45/docs/C5/C5.md)

2026-10-07：AI 助手协助原创整理，核对以上 GitHub 章节；示例与练习为本站设计，未执行的任务不作为实验结论。
