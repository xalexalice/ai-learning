---
slug: pytorch-training-practice
title: "PyTorch 训练实践：数据、梯度与 checkpoint"
summary: "把 Dataset、DataLoader、张量形状、训练/推理模式和保存恢复连成可核查的训练流程。"
kind: concept
topic: foundations
tags: ["PyTorch","autograd","checkpoint"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["pytorch-basics-course"]
prerequisites: ["optimization-regularization"]
related: ["transfer-learning-augmentation","llm-training-adaptation","mlops-lifecycle"]
---

## 先检查数据和张量契约

Dataset 定义取样，DataLoader 组织批次、打乱和加载。输入、标签、模型输出、损失函数各有形状及 dtype 约定。输入与模型要在相容设备上；不能看到报错就随意 reshape，掩盖样本维度错误。

## 一个训练批次的顺序

| 顺序 | 操作 | 检查 |
| --- | --- | --- |
| 1 | model.train()，加载批次 | 数据划分、batch 维、device/dtype |
| 2 | 前向得到预测 | 输出对应目标，原始 logits 不与概率混用 |
| 3 | 计算 loss | 标签编码、损失输入与归约一致 |
| 4 | optimizer.zero_grad() | 清理上次梯度；主动累积梯度时另有明确计划 |
| 5 | loss.backward() | 参数参与计算图且梯度有效 |
| 6 | optimizer.step() | 参数更新，记录批次/轮次口径 |
| 7 | 验证阶段切 model.eval() | 配合 no_grad/inference_mode，禁用梯度记录 |

eval 调整 dropout、BatchNorm 等模块的行为；no_grad 控制自动微分记录，两者作用不同。验证损失应按一致的样本权重汇总，不把不同大小批次简单平均后混淆口径。

## 保存什么才能恢复

state_dict 是参数和相关缓冲区。部署还需要结构、预处理、标签映射及版本；恢复训练还需优化器、调度器、步数/轮次和必要的随机状态。保存最佳验证版本时，避免只保留会随训练变化的对象引用。

来源不可信的序列化文件不应直接加载；选择当前官方安全加载方式并核对格式。固定种子也不保证跨硬件与版本逐位相同。

## 原创检查例子

分类输入为 B×D，输出为 B×C，类别标签为 B。若把 B×C 错当标签 one-hot 却仍使用要求类别索引的损失，就需要检查损失规范，而不是修改模型直到报错消失。

## 练习与完成标准

在纸上给上述七步标注形状和梯度状态，设计一个小批次过拟合检查与保存/重载前后同输入预测对照。实际运行时记录 Python、PyTorch、设备、数据哈希和日志。本篇是概念与操作清单，未训练，不标记为实验。

## 复习问题

1. eval 和 no_grad 可以互相替代吗？
2. 只保存权重为什么不能完整恢复训练？
3. 小批次也无法拟合时，先查什么？

## 阅读依据与核验范围

- [beginner_source/basics/data_tutorial.py](https://github.com/pytorch/tutorials/blob/c80a43460c838fa28efa55e5680f3e97781e288e/beginner_source/basics/data_tutorial.py)
- [beginner_source/basics/optimization_tutorial.py](https://github.com/pytorch/tutorials/blob/c80a43460c838fa28efa55e5680f3e97781e288e/beginner_source/basics/optimization_tutorial.py)
- [beginner_source/basics/saveloadrun_tutorial.py](https://github.com/pytorch/tutorials/blob/c80a43460c838fa28efa55e5680f3e97781e288e/beginner_source/basics/saveloadrun_tutorial.py)

2026-10-07：AI 助手协助原创整理并核对原始章节。示例、手算和练习由本站设计；未执行的任务不作为实验结论。

