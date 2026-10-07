---
slug: deep-learning-training
title: "深度学习训练：计算图、损失与优化"
summary: "理解神经网络训练闭环、过拟合与复现记录，区分训练目标改善和实际能力改善。"
kind: concept
topic: foundations
tags: ["深度学习","backprop","overfitting"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["d2l-zh-course"]
prerequisites: ["machine-learning-workflow"]
related: ["transformer-attention","llm-training-adaptation","vision-foundations"]
---
## 训练闭环

一次训练迭代通常包括：取 batch、前向计算、计算损失、求梯度、更新参数。反向传播计算梯度，优化器使用梯度更新参数；二者是不同步骤。推理时使用已有参数输出预测，通常不执行参数更新。

非线性激活让多层网络能表达比单个线性变换更复杂的关系。把很多线性层直接串起来而没有非线性，仍可合并成一个线性变换。

## 核心知识点

| 知识点 | 必须分清 |
| --- | --- |
| 参数与超参数 | 权重从数据学习；学习率、batch size 等通常由训练配置指定 |
| epoch、batch、step | 一轮数据、一次输入批次、一次更新的计数口径不同 |
| 损失与指标 | 损失服务优化；任务指标服务最终判断 |
| 自动微分 | 根据计算图求导，并不自动保证标签、目标或实现正确 |
| 梯度累积 | 多个小批次合并更新；不需要累积时应正确清零 |
| 训练与评估模式 | dropout、归一化等层的行为可能改变 |
| 正则化与早停 | 限制过拟合；应按验证结果选择，而非看训练曲线单独决定 |
| 复现记录 | 数据划分、随机种子、依赖、硬件、配置与 checkpoint 都需要记录 |

## 怎样读训练曲线

训练损失持续下降，验证指标却恶化，可能是过拟合，也可能是数据分布不同或实现问题；先检查划分、标签与评估模式。训练和验证都差，可能是目标、特征、模型容量、学习率或训练长度不适合，不能直接归因于“模型不够大”。

固定随机种子有助于比较，但跨硬件、并行算法和依赖版本不一定逐位一致。复现应明确允许误差与比较对象。

## 练习与完成标准

在纸上写出训练循环，并标注哪里清零、哪里求梯度、哪里更新。画两组假想曲线：训练和验证同时改善；训练改善、验证恶化。为第二组列出三个检查步骤。制定一份训练记录表，但不要填入未执行的 loss 或耗时。

## 复习问题

1. 为什么 loss 下降不等于目标场景变好？
2. 推理模式和不计算梯度解决的是同一件事吗？
3. 什么时候累积梯度是有意设计，什么时候是错误？

## 阅读依据与核验范围

- [前向传播、反向传播与计算图](https://github.com/d2l-ai/d2l-zh/blob/e6b18ccea71451a55fcd861d7b96fddf2587b09a/chapter_multilayer-perceptrons/backprop.md)
- [自动微分](https://github.com/d2l-ai/d2l-zh/blob/e6b18ccea71451a55fcd861d7b96fddf2587b09a/chapter_preliminaries/autograd.md)
- [欠拟合与过拟合](https://github.com/d2l-ai/d2l-zh/blob/e6b18ccea71451a55fcd861d7b96fddf2587b09a/chapter_multilayer-perceptrons/underfit-overfit.md)

2026-10-07：AI 助手协助原创整理，核对以上 GitHub 章节；示例与练习为本站设计，未执行的任务不作为实验结论。
