---
slug: rag-ingestion-chunking
title: "RAG 文档管线：解析、清洗、切片与版本"
summary: "保留文档结构、来源位置和可见范围，让入库、更新、删除与引用形成闭环。"
kind: concept
topic: rag
tags: ["RAG","chunking","数据治理"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["datawhale-llm-universe","genai-beginners-course"]
prerequisites: ["embeddings-vector-search"]
related: ["rag-retrieval-reranking","rag-evidence","ai-security-boundaries"]
---
## 入库质量决定后续上限

RAG 管线通常从授权资料开始，经解析、清洗、切片、向量化与索引，再服务查询。生成模型无法可靠补回在解析阶段丢失的表头、脚注、单位或版本信息。

## 管线知识点

| 阶段 | 要保留或验证什么 |
| --- | --- |
| 来源登记 | source_id、原始 URL、作者、许可、获取时间与版本 |
| 解析 | 标题、段落、表格、页码、图片及 OCR 的不确定性 |
| 清洗 | 重复页眉页脚、乱码、空白；保留否定词、单位、条件 |
| 切片 | 结构边界、token 长度、重叠、跨段依赖 |
| 元数据 | document_id、chunk_id、章节路径、原文位置、可见范围 |
| 向量化 | 模型 revision、输入模板、失败记录与完整性 |
| 索引更新 | 新增、修改、删除，以及旧版本撤下 |
| 质量抽查 | 随机读片段，能否定位原文并还原重要条件 |

切片有固定长度、按段落/标题、语义边界和父子片段等策略。片段太短可能丢条件，太长可能混入噪声；重叠可缓解边界问题，也可能增加重复结果和索引成本。不存在对所有语料都最优的统一 chunk size。

## 切片反例

虚构说明：“免费试用 7 天。企业版不适用；退款需在首次付款后 48 小时内申请。”如果只保留第一句回答企业用户，引用即使存在也会误导。切片时应检查条件句是否与主要规则保持可追溯关系。

表格中的“额度”只有配合行名、列名和单位才完整。PDF 页码不是业务事实，OCR 输出也不能默认为准确。页面底部引用应能回到具体页或章节，而非只回到一本几百页的文件首页。

## 维护与权限

版本变化后，需要处理旧片段和旧向量，不能只追加新版本。删除原文后仍在索引或缓存中返回，也是数据生命周期问题。访问范围应绑定当前认证身份，并在检索和上下文构造时确保未授权内容不进入模型；详细检查属于工程设计，而不是切片算法。

## 练习与完成标准

取一份自有或许可明确的短资料，在纸上设计两种切片方式。检查否定、单位、条件与表头是否保留；设计更新和删除后的索引预期。输出三条片段元数据样例。本次未批量下载、解析或建立向量库。

## 复习问题

1. 为什么相邻片段的重叠会影响 top-k 的多样性？
2. 怎样定位错误来自 OCR、切片还是检索？
3. 资料撤下后，索引和缓存分别需要做什么？

## 阅读依据与核验范围

- [文档读取、清洗与切片](https://github.com/datawhalechina/llm-universe/blob/77beb748047e8a0d8ff708716606a8e0b132dc45/docs/C3/C3.md)
- [创建知识库](https://github.com/microsoft/generative-ai-for-beginners/blob/d8ec07e31c4b32bd283d565c1abd9b58bb5cf2e8/15-rag-and-vector-databases/README.md)

2026-10-07：AI 助手协助原创整理，核对以上 GitHub 章节；示例与练习为本站设计，未执行的任务不作为实验结论。
