---
slug: ai-model-training
title: "模型训练与对齐：从梯度到微调评估"
summary: "理解训练、注意力、强化学习、SFT、LoRA 和偏好对齐，先建立数据和评估方案再考虑运行。"
topic: llm
tags: [系统学习, 知识点, 练习]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
steps:
  - title: "深度学习训练：计算图、损失与优化"
    note: deep-learning-training
    task: "标注训练循环与梯度清零位置，解释两组假想曲线。"
  - title: "优化与正则化：学习率、泛化与训练曲线"
    note: optimization-regularization
    task: "手算 SGD，解释学习率、正则化和早停的区别。"
  - title: "PyTorch 训练实践：数据、梯度与 checkpoint"
    note: pytorch-training-practice
    task: "检查形状、模式、梯度状态和保存/恢复清单。"
  - title: "迁移学习与数据增强：冻结、微调和标签一致性"
    note: transfer-learning-augmentation
    task: "写冻结/微调计划，检查 BatchNorm、增强标签与划分单位。"
  - title: "Transformer：注意力、位置与生成"
    note: transformer-attention
    task: "画因果掩码，标注注意力形状，解释训练与生成的并行差别。"
  - title: "强化学习：奖励、价值与策略"
    note: reinforcement-learning
    task: "定义三格迷宫的状态、动作、奖励，手算回报并找刷分漏洞。"
  - title: "LLM 训练与适配：预训练、SFT、LoRA 与对齐"
    note: llm-training-adaptation
    task: "设计指令与偏好样本，写 loss 范围、数据划分与保存清单。"
  - title: "LLM 评估：样本、评分、评判模型与回归"
    note: llm-evaluation
    task: "设计十个测试样本、独立评分规则与错误类别。"
---

## 前置与目标

先完成数学、机器学习、token 与评估基线笔记，可从 [系统主线](../ai-systematic-learning/) 查阅。目标是区分训练过程、模型行为与应用证据，并能判断是否真的需要微调。

## 学习方法

先手算梯度与回报，再设计样本、聊天模板、loss 范围和验证集。用 RAG 作为对照方案，明确微调预期改善哪种稳定任务模式。原课程的硬件与依赖须在实际运行前重新核对。

## 完成标准

留下授权数据清单、训练/验证隔离理由、基础模型与 adapter 版本、配置、checkpoint 计划和能力回归表。不能仅以 loss 下降宣布模型变好；没有训练日志时不得写收益数字。

## 核验范围

2026-10-07：8 步概念支线；本次没有下载权重、占用 GPU 或运行训练。
