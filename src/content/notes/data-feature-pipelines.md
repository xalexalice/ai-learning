---
slug: data-feature-pipelines
title: "数据与特征管线：先划分，再拟合"
summary: "把数据探索、缺失处理、类别编码、标准化和特征选择放进可复用的训练管线，避免泄漏。"
kind: concept
topic: foundations
tags: ["EDA","Pipeline","特征工程"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["sklearn-user-guide","google-ml-crash-course"]
prerequisites: ["machine-learning-workflow"]
related: ["supervised-models","mlops-lifecycle"]
---

## 把数据处理当作模型的一部分

输入字段的含义、生成时间、缺失原因和标签来源要写进数据字典。EDA 先查分布、重复实体、异常单位和类别比例；检查测试集的目标分布后反复改模型，也会污染最终评估。

## 核心知识点

| 处理 | 要理解什么 | 检查边界 |
| --- | --- | --- |
| 缺失值 | 填充值可用训练集统计量，并保留必要的缺失指示 | 缺失可能具有业务含义，不能随意当零 |
| 数值缩放 | 标准化减均值除标准差；鲁棒缩放减少极端值影响 | 树模型通常不依赖标准化；距离模型往往依赖 |
| 类别编码 | one-hot 不引入大小顺序；序数编码只在真实有序时使用 | 未知类别和高基数需要明确策略 |
| 特征构造 | 预测时点已经知道的变量才能使用 | 结案结果、未来交易不能预测当前决策 |
| 特征选择 | 根据训练数据选择，随交叉验证折重新拟合 | 全量标签筛选后再验证仍然泄漏 |
| Pipeline | 串联预处理与估计器；ColumnTransformer 分列处理 | 每个验证折都应独立拟合处理器 |

训练时调用 fit；验证、测试和线上只使用已学到的参数做 transform/predict。Pipeline 降低遗漏风险，但不能修复原始字段中的未来信息。

## 手算与反例

虚构训练值为 2、4、6，均值为 4；测试值为 100。若用全量均值 28 处理训练数据，测试分布就进入了学习过程。用训练统计量处理测试出现极端值，是需要分析的现象，不应偷偷重新拟合缩放器。

同一用户的两条记录分别进入训练和测试，模型可能记住用户。先按实际泛化目标做实体或时间划分，再处理特征。

## 练习与完成标准

为虚构工单设计三列数值、两列类别和一个目标。列出每列的可用时点、缺失处理和未知类别行为，画训练/验证/服务的管线。标出每个 fit 的数据来源。本次没有运行 Python 管线。

## 复习问题

1. 为什么标准化器也需要随交叉验证重新拟合？
2. 类别编号 1、2、3 为什么不一定代表距离？
3. Pipeline 能自动识别结案信息泄漏吗？

## 阅读依据与核验范围

- [doc/common_pitfalls.rst](https://github.com/scikit-learn/scikit-learn/blob/2f7da7445dc5a8038fe863997aa2beb3ad03f0d4/doc/common_pitfalls.rst)
- [doc/modules/compose.rst](https://github.com/scikit-learn/scikit-learn/blob/2f7da7445dc5a8038fe863997aa2beb3ad03f0d4/doc/modules/compose.rst)
- [doc/modules/preprocessing.rst](https://github.com/scikit-learn/scikit-learn/blob/2f7da7445dc5a8038fe863997aa2beb3ad03f0d4/doc/modules/preprocessing.rst)

2026-10-07：AI 助手协助原创整理并核对原始章节。示例、手算和练习由本站设计；未执行的任务不作为实验结论。

