---
slug: transfer-learning-augmentation
title: "迁移学习与数据增强：冻结、微调和标签一致性"
summary: "从预训练表示到目标任务，检查冻结参数、BatchNorm 状态、增强标签和训练验证隔离。"
kind: concept
topic: multimodal
tags: ["迁移学习","数据增强","BatchNorm"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["pytorch-basics-course","fastai-practical-course"]
prerequisites: ["pytorch-training-practice"]
related: ["vision-foundations","llm-training-adaptation","ml-metrics-validation"]
---

## 复用的是表示，不是现成任务保证

预训练模型可提供特征起点；目标领域、输入规范和标签不同，仍需要验证。固定特征提取只训练新任务头；微调允许部分或全部参数更新。两种策略对数据量、计算和过拟合风险有不同要求。

## 核心知识点

| 环节 | 应做的检查 | 常见失败 |
| --- | --- | --- |
| 权重与输入 | 精确权重版本、归一化、尺寸、许可 | 换预处理后把表现差归因于模型 |
| 冻结 | requires_grad、优化器参数列表、模块模式 | 冻结梯度却让 BatchNorm 运行统计继续改变 |
| 新任务头 | 输出维度和类别映射 | 输出位置与标签含义错位 |
| 解冻微调 | 分层学习率、训练预算与遗忘检查 | 小数据大步更新破坏预训练特征 |
| 数据增强 | 保持标签含义，同步空间标注 | 翻转文字/方向任务，或框坐标未同步 |
| 验证 | 独立验证数据，固定推理预处理 | 先增强再切分导致同图变体泄漏 |

冻结参数与保持模块状态是两个决定。是否固定 BatchNorm 统计取决于训练方案和数据；明确设置后做对照，不机械声称冻结就完全不变。

## 原创例子

“图片中是否有箭头”任务水平翻转可能保留标签；“箭头是否朝左”则需要更改标签。目标检测中的裁剪必须同步处理边界框；不能把增强后的图像配回旧坐标。

一张原图的三个增强版本若分别出现在训练和测试，测试可能只是检验同一内容的变化。按原始对象/主体划分，再在训练侧增强。

## 练习与完成标准

选自制、可授权的图像任务，写固定特征与微调两种计划。列可训练层、模块模式、增强规则、划分单位、验证指标与权重来源。成绩列留空直到实际执行；本篇没有 GPU 或模型实验。

## 复习问题

1. requires_grad=False 能阻止所有状态变化吗？
2. 增强为什么必须遵守标签语义？
3. 为什么要按原图或主体划分？

## 阅读依据与核验范围

- [beginner_source/transfer_learning_tutorial.py](https://github.com/pytorch/tutorials/blob/c80a43460c838fa28efa55e5680f3e97781e288e/beginner_source/transfer_learning_tutorial.py)

2026-10-07：AI 助手协助原创整理并核对原始章节。示例、手算和练习由本站设计；未执行的任务不作为实验结论。

