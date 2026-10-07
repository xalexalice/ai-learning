---
slug: optimization-regularization
title: "优化与正则化：学习率、泛化与训练曲线"
summary: "区分优化算法和模型容量，学习 SGD、动量、Adam、正则化、初始化与早停的检查顺序。"
kind: concept
topic: foundations
tags: ["SGD","Adam","正则化","学习率"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["pytorch-basics-course","fastai-practical-course","d2l-zh-course"]
prerequisites: ["deep-learning-training"]
related: ["pytorch-training-practice","transfer-learning-augmentation"]
---

## 先看训练在优化什么

梯度下降更新参数以降低训练目标；泛化关注未见数据。降低训练损失不保证验证集改善。优化器解决更新问题，正则化限制拟合方式，二者都需要配合数据和评价口径。

## 核心检查表

| 知识点 | 含义 | 检查动作 |
| --- | --- | --- |
| SGD | 使用批次梯度更新参数 | 学习率太大可能震荡，太小可能收敛慢 |
| 动量 | 累积更新方向，减少短期梯度波动 | 改优化器后重新检查学习率 |
| Adam | 利用梯度一阶/二阶统计调整更新 | 不是对所有任务都最优；恢复训练需保存状态 |
| 初始化/激活 | 影响前向信号和反向梯度尺度 | 梯度消失或爆炸时检查网络与数值 |
| L1/L2 | 给参数大小施加惩罚 | 正则强度需验证；AdamW 的解耦权重衰减不能笼统当作任意优化器中的 L2 |
| dropout | 训练期间随机屏蔽部分激活 | 推理须切换 eval，不能持续随机屏蔽 |
| 早停/调度 | 按验证表现或计划改变训练进程 | 不用最终测试集决定停止时点 |

每次比较固定划分和评价方式，记录学习率、batch size、随机种子与损失归约。batch size 变化也可能改变梯度噪声和更新次数，不能只说训练更快。

## 原创手算

若参数 w=2，梯度为 3，学习率为 0.1，普通一步 SGD 得到 w=1.7。这个计算没有展示真实神经网络的收敛，也不能据此选择最优学习率。

假想曲线中训练损失下降、验证损失先降后升，应检查过拟合、划分和分布差异；两者均不降时，先检查数据标签、损失和梯度链路。

## 练习与完成标准

画三类假想曲线：震荡、训练好验证差、训练验证都差。每类列出一个可测假设及一次单因素实验。保存最佳验证 checkpoint，最终测试只在方案定下后执行。本次未训练。

## 复习问题

1. 优化更充分和泛化更好有什么区别？
2. 为什么恢复 Adam 不能只加载模型权重？
3. dropout 为什么需要训练/推理模式？

## 阅读依据与核验范围

- [PyTorch 2.14 AdamW：解耦权重衰减](https://docs.pytorch.org/docs/2.14/generated/torch.optim.AdamW.html)
- [beginner_source/basics/optimization_tutorial.py](https://github.com/pytorch/tutorials/blob/c80a43460c838fa28efa55e5680f3e97781e288e/beginner_source/basics/optimization_tutorial.py)
- [04-how-does-a-neural-net-really-work.ipynb](https://github.com/fastai/course22/blob/230390584ba5b990e20487d68681a9ec5b258eff/04-how-does-a-neural-net-really-work.ipynb)

2026-10-07：AI 助手协助原创整理并核对原始章节。示例、手算和练习由本站设计；未执行的任务不作为实验结论。
