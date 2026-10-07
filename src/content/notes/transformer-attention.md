---
slug: transformer-attention
title: "Transformer：注意力、位置与生成"
summary: "看懂 Q、K、V 的作用、因果掩码与三类架构，并把训练并行和生成顺序分开理解。"
kind: concept
topic: llm
tags: ["Transformer","attention","architecture"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["d2l-zh-course","hf-llm-course"]
prerequisites: ["deep-learning-training","token-context"]
related: ["llm-training-adaptation","serving-performance"]
---
## 注意力在做什么

注意力根据当前位置的 query 与候选位置的 key 计算权重，再对 value 做加权汇总。Q、K、V 是模型学习的投影，不是三份人工写好的检索文档。

常见缩放点积注意力为 `softmax(QKᵀ / √d_k + mask)V`。若 Q、K 为 `[L,d_k]`，注意力分数为 `[L,L]`；softmax 在候选 key 轴上归一化。多头注意力并行学习不同的投影子空间。

## 模块知识点

| 模块 | 用途与边界 |
| --- | --- |
| Token embedding | 把 token ID 转为可学习表示；不能直接当作完整句子的检索向量 |
| 位置表示 | 给顺序提供信息；不同架构的方法不同 |
| 自注意力 | 根据当前序列聚合信息；权重不自动构成可验证解释 |
| 因果掩码 | 让位置只能使用允许的历史位置，避免未来 token 泄漏 |
| 前馈网络 | 对位置表示继续做非线性变换 |
| 残差与归一化 | 支持深层网络训练；实现顺序依模型架构而变 |
| Encoder / decoder / encoder-decoder | 分别常用于理解、生成与输入到输出的转换，不能混用接口 |

## 训练与生成为什么不同

自回归训练可以把整段正确序列作为输入，用掩码并行计算多个位置的预测损失。生成时下一步输入包含刚生成的 token，通常需要逐步解码。KV cache 缓存历史 key/value，减少重复计算；它没有让下一 token 依赖消失。

普通稠密注意力的分数矩阵随序列长度平方增长，这是理解长上下文成本的起点。实际显存与耗时还依赖内核、缓存、精度、架构与批次，不能直接用该关系预测所有服务性能。

## 练习与完成标准

给三个位置画一个只允许看当前及之前位置的掩码。标注输入 `[B,L,D]`、每个 head 和注意力分数的形状。用自己的话解释“训练能并行，生成仍有顺序依赖”，并指出注意力权重不能直接证明答案来源。

## 复习问题

1. QKᵀ 的两条序列轴分别表示什么？
2. 没有位置表示时，模型缺少什么信息？
3. 为什么上下文更长不必然让模型回答更准确？

## 阅读依据与核验范围

- [Transformer](https://github.com/d2l-ai/d2l-zh/blob/e6b18ccea71451a55fcd861d7b96fddf2587b09a/chapter_attention-mechanisms/transformer.md)
- [Transformer 原理](https://github.com/huggingface/course/blob/8b893f0ede6c781045692a7f892f25a0c92b4805/chapters/en/chapter1/4.mdx)

2026-10-07：AI 助手协助原创整理，核对以上 GitHub 章节；示例与练习为本站设计，未执行的任务不作为实验结论。
