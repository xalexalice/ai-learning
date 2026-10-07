---
slug: nlp-task-modeling
title: "NLP 任务建模：分类、标注、问答与生成"
summary: "按任务区分文本表示、标签对齐和评价口径，不把所有语言任务都简化为聊天生成。"
kind: concept
topic: llm
tags: ["NLP","NER","问答","摘要"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["hf-llm-course","fastai-practical-course","sklearn-user-guide"]
prerequisites: ["token-context","machine-learning-workflow"]
related: ["transformer-attention","prompt-design","llm-evaluation"]
---

## 先确定输出结构

语言任务可以是整段分类、逐词标注、答案片段抽取或新文本生成。任务不同，样本结构、训练目标与指标不同。选择生成模型、编码器或简单文本基线，应由任务与成本决定。

## 常见任务知识点

| 任务 | 输入/输出 | 必须处理的细节 |
| --- | --- | --- |
| 文本分类 | 文本→类别/多标签 | 长文本截断、类别不平衡、阈值；可用 TF-IDF 加线性模型做基线 |
| token 分类/NER | 文本→实体范围和类型 | subword 与词标签对齐，特殊 token 和忽略标签，BIO 合法性 |
| 抽取式问答 | 问题+上下文→起止位置 | offset、长上下文滑窗、无答案样本 |
| 翻译/摘要 | 文本→新序列 | 解码配置、长度、专名及事实保留 |
| 生成式问答 | 问题+证据→答案 | 引用、拒答、格式与事实分别评估 |

NER 的 token accuracy 可能被大量非实体 token 掩盖；需要实体级匹配规则和 F1。摘要的字面重叠指标不能单独证明事实正确，需检查数字、主体和关系。

## 原创标注例子

自制句子“李明在海城工作”，实体范围标记人名“李明”和地点“海城”。tokenizer 可能将词拆成多个 subword。可以只监督每词第一个 subword，也可以按明确规则传播标签；训练与评价必须采用同一对齐约定。

抽取式问答若真实答案在截断范围之外，不能把它标为模型“应该猜出”。需要重新构造窗口及答案偏移，或按任务规范处理无答案。

## 练习与完成标准

自制十条文本，分别设计分类、实体、问答样本；画字符→token→标签映射，写评分规则。摘要检查至少包括数字和实体不被改写。本篇未训练 tokenizer/模型，也未生成样本成绩。

## 复习问题

1. NER 为什么不能只看 token 准确率？
2. offset 是相对原文还是处理后文本？
3. 为什么摘要重叠高仍可能事实错误？

## 阅读依据与核验范围

- [文本特征与 TF-IDF](https://github.com/scikit-learn/scikit-learn/blob/2f7da7445dc5a8038fe863997aa2beb3ad03f0d4/doc/modules/feature_extraction.rst)
- [chapters/en/chapter7/2.mdx](https://github.com/huggingface/course/blob/8b893f0ede6c781045692a7f892f25a0c92b4805/chapters/en/chapter7/2.mdx)
- [chapters/en/chapter7/5.mdx](https://github.com/huggingface/course/blob/8b893f0ede6c781045692a7f892f25a0c92b4805/chapters/en/chapter7/5.mdx)
- [chapters/en/chapter7/7.mdx](https://github.com/huggingface/course/blob/8b893f0ede6c781045692a7f892f25a0c92b4805/chapters/en/chapter7/7.mdx)
- [slides/nlp-intro.ipynb](https://github.com/fastai/course22/blob/230390584ba5b990e20487d68681a9ec5b258eff/slides/nlp-intro.ipynb)

2026-10-07：AI 助手协助原创整理并核对原始章节。示例、手算和练习由本站设计；未执行的任务不作为实验结论。
