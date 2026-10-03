---
slug: hf-tokenizers
title: "Hugging Face：文本怎样变成 token"
summary: "从词、字符到子词，理解分词器与模型输入之间的关系。适合先建立 token 的概念，再阅读模型文档。"
type: course
topic: llm
tags: [token, tokenizer, subword]
status: published
sourceUrl: https://huggingface.co/learn/llm-course/en/chapter2/4
author: Hugging Face
sourcePublishedAt: null
accessedAt: "2026-10-03"
version: "LLM Course · Chapter 2 / Tokenizers，访问时版本"
reuseRights: "仅链接与自写摘要；原文和示例的复用以课程及仓库声明为准。"
publishedAt: "2026-10-03"
updatedAt: "2026-10-03"
---

## 为什么收录

它把“文本输入”拆成分词和 token ID 两步，适合纠正“一个汉字就是一个 token”的直觉。阅读时重点看三种切分方式，以及为什么要使用与模型匹配的分词器。

## 带着问题阅读

1. 单词不在词表时会发生什么？
2. 子词切分怎样在词表大小与输入长度之间取舍？
3. 更换模型时，为什么不能沿用另一个模型的 token 计数？

## 阅读建议

先读 Word-based、Character-based、Subword tokenization，再看 Encoding。本站笔记为原创概念说明；尚未运行课程里的模型下载示例。
