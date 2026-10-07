---
slug: ai-mathematics
title: "AI 数学基础：张量、梯度与概率"
summary: "把线性代数、微积分和概率连接到真实模型操作：看懂形状、梯度更新与不确定性。"
kind: concept
topic: foundations
tags: ["数学","tensor","gradient"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["d2l-zh-course"]
prerequisites: []
related: ["machine-learning-workflow","deep-learning-training","embeddings-vector-search"]
---
## 先建立什么理解

模型把输入编码为张量，按参数计算输出，再用损失衡量输出与目标的差异。数学基础的首要用途是解释每一步的形状与变化方向；只背公式容易忽略计算究竟作用在哪个维度。

## 必须掌握的知识点

| 知识点 | 用在什么地方 | 学会后能回答 |
| --- | --- | --- |
| 标量、向量、矩阵、张量 | 数值、特征、批次、图像表示 | shape 的每个轴代表什么？ |
| 点积、矩阵乘法与转置 | 线性层、注意力、相似度 | 哪些维度必须匹配？ |
| 范数与归一化 | 向量长度、正则化、余弦相似度 | 比较方向还是比较大小？ |
| 导数、偏导与梯度 | 参数优化 | 某参数增加时，损失如何变？ |
| 链式法则与自动微分 | 多层网络反向传播 | 梯度怎样穿过计算图？ |
| 条件概率、期望与方差 | 预测、采样、评估波动 | 随机输出和确定结论有什么差别？ |

批次输入 `X[B, D]` 乘 `W[D, H]` 得到 `Y[B, H]`。广播会让代码成功运行，也可能把本应逐样本的运算扩展成逐对样本；先写轴含义，再检查 shape。

## 一个手算示例

设 `J(w)=(w-3)^2`，在 `w=1` 时梯度为 `2(w-3)=-4`。取学习率 `0.1`，梯度下降得到 `w=1-0.1×(-4)=1.4`，损失由 `4` 变为 `2.56`。这是解析手算，不能据此推断神经网络每一步都会降低验证误差。

条件概率也要分清方向：`P(词语|文档)` 与 `P(文档|词语)` 不相等。模型给出的 token 概率没有自动变成“整段回答正确”的概率。

## 练习与完成标准

先在纸上给 `X[8,4] × W[4,3]` 写出输出形状，再把 `W` 换成 `[3,4]` 判断为何不能直接相乘。手算一次上述损失的梯度更新，并解释学习率太大可能发生什么。能复述轴含义、更新方向和概率条件，才进入训练笔记。

## 复习问题

1. 为什么 shape 正确仍可能代表错误的计算？
2. 梯度是参数、预测结果还是变化率？
3. 为什么不能把模型的 token 概率称为答案置信度？

## 阅读依据与核验范围

- [线性代数](https://github.com/d2l-ai/d2l-zh/blob/e6b18ccea71451a55fcd861d7b96fddf2587b09a/chapter_preliminaries/linear-algebra.md)
- [微积分](https://github.com/d2l-ai/d2l-zh/blob/e6b18ccea71451a55fcd861d7b96fddf2587b09a/chapter_preliminaries/calculus.md)
- [概率](https://github.com/d2l-ai/d2l-zh/blob/e6b18ccea71451a55fcd861d7b96fddf2587b09a/chapter_preliminaries/probability.md)

2026-10-07：AI 助手协助原创整理，核对以上 GitHub 章节；示例与练习为本站设计，未执行的任务不作为实验结论。
