---
slug: embeddings-vector-search
title: "Embedding 与向量检索：表示、相似度和索引"
summary: "理解文本向量、距离、归一化与近似检索，避免把相似度分数当作事实置信度。"
kind: concept
topic: rag
tags: ["embedding","FAISS","similarity"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["hf-llm-course","genai-beginners-course","datawhale-llm-universe"]
prerequisites: ["ai-mathematics","token-context"]
related: ["rag-ingestion-chunking","rag-retrieval-reranking","rag-evidence"]
---
## 向量表示不是事实判断

Embedding 模型把输入映射到一个向量空间，让特定训练目标下相近的输入更容易被检索。距离或相似度衡量这个空间的关系，不直接衡量“回答正确”或“有权限阅读”。

生成模型内部 token embedding、句子 embedding 和专门的检索 embedding 不能不加区分地互换。

## 必须掌握的知识点

| 知识点 | 需要检查 |
| --- | --- |
| 模型与 revision | 语言、任务、最大输入、query/document 模板 |
| 向量维度 | 索引必须与生成向量的维度匹配 |
| 池化 | token 表示怎样汇总成句子/文档表示 |
| 归一化 | 向量是否归一化，影响距离含义 |
| 度量 | cosine、inner product、L2 的定义与排序方向 |
| 精确与近似索引 | 近似搜索用速度/内存换可能的召回损失 |
| 元数据 | 文档 ID、版本、片段位置、时间、可见范围 |
| 重建与迁移 | 换模型后通常要重新生成向量，不能直接混合空间 |

余弦相似度为 `dot(x,y)/(norm(x)×norm(y))`。若都归一化为单位向量，点积等于余弦；未归一化时点积会受向量长度影响。零向量需要按具体实现处理，不能直接除以零。

## 手算例子与边界

设查询 `q=(1,0)`，候选 `a=(1,0)` 与 `b=(0,1)`，余弦分别为 1 与 0。这只说明方向差异；向量坐标是人为示例，未由模型生成。现实中否定句、数字、版本和领域术语都可能造成“语义相近但事实不同”。

相似度阈值依模型、度量、语料与任务校准。不能把某系统的阈值照搬到另一模型，也不能把 top-1 分数直接展示成“答案正确率”。

## 练习与完成标准

手算 `q=(1,0)` 与 `c=(2,0)` 的点积和余弦，说明排序可能受什么影响。设计五对资料：同义表述、编号精确匹配、否定、版本冲突、领域歧义。记录评估方案；模型实验需要实际执行后才记录向量和分数。

## 复习问题

1. 换 embedding 模型为什么通常要重建索引？
2. 向量相似是否意味着文本支持同一事实？
3. 精确索引与近似索引怎样分别影响结果？

## 阅读依据与核验范围

- [FAISS 语义检索](https://github.com/huggingface/course/blob/8b893f0ede6c781045692a7f892f25a0c92b4805/chapters/en/chapter5/6.mdx)
- [向量库与检索](https://github.com/microsoft/generative-ai-for-beginners/blob/d8ec07e31c4b32bd283d565c1abd9b58bb5cf2e8/15-rag-and-vector-databases/README.md)
- [搭建知识库](https://github.com/datawhalechina/llm-universe/blob/77beb748047e8a0d8ff708716606a8e0b132dc45/docs/C3/C3.md)

2026-10-07：AI 助手协助原创整理，核对以上 GitHub 章节；示例与练习为本站设计，未执行的任务不作为实验结论。
