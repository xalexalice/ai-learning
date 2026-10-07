---
slug: supervised-models
title: "监督学习算法：线性、树、集成与距离"
summary: "对比回归和分类中的常用算法，理解假设、预处理、复杂度与基线选择。"
kind: concept
topic: foundations
tags: ["回归","分类","SVM","随机森林"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["sklearn-user-guide","stanford-cs229-archive"]
prerequisites: ["data-feature-pipelines"]
related: ["ml-metrics-validation","optimization-regularization"]
---

## 从简单基线比较模型

回归预测连续数值，分类输出类别或类别分数。算法名称不能替代任务契约：先确定错误成本、数据划分和上线时可用字段，再比较候选。逻辑回归用于分类，其名字不意味着预测连续目标。

## 常用模型的差别

| 家族 | 核心想法 | 适合先检查的限制 |
| --- | --- | --- |
| 线性/逻辑回归 | 线性组合特征；逻辑回归映射为概率 | 非线性关系需特征构造；共线性和正则化影响系数 |
| 决策树 | 按字段阈值递归分区 | 深树易过拟合，小数据变化可能改变结构 |
| 随机森林 | 多棵随机化树合并预测 | 模型更大；平均结果不能自然解释每个决策 |
| 梯度提升树 | 逐步添加模型优化损失 | 学习率、树复杂度和迭代次数要一起验证 |
| SVM | 用间隔及核函数建立边界 | 对缩放敏感；核方法在大样本上可能昂贵 |
| kNN | 从近邻标签/数值形成预测 | 距离与缩放重要；高维和预测查询成本需测量 |

集成方法中 bagging 常通过随机化和聚合降低方差；boosting 按已有误差继续优化。不能把两者都理解为“多训练几个模型”。树的重要性也不等于因果解释。

## 原创比较例子

虚构“预计工单耗时”的简单基线为训练集耗时中位数。若候选模型仅在随机划分上改善，却在未来月份变差，应先检查时间漂移和泄漏，再考虑更复杂算法。

假设关系为“值小于 3 时为 A，否则为 B”，浅树可能很自然；若关系基本线性且需要紧凑部署，线性模型可能更合适。这些是假设场景，没有实测排名。

## 练习与完成标准

写一个回归和一个分类任务，对常量、线性、树模型使用同一划分和指标。为每个候选写预处理、调参范围、训练/推理成本与失败条件；成绩留到真正运行后填写。

## 复习问题

1. 为什么逻辑回归和线性回归不能直接交换损失？
2. 随机森林与梯度提升的训练顺序有什么区别？
3. 核 SVM 的分数可以直接当校准概率吗？

## 阅读依据与核验范围

- [doc/modules/linear_model.rst](https://github.com/scikit-learn/scikit-learn/blob/2f7da7445dc5a8038fe863997aa2beb3ad03f0d4/doc/modules/linear_model.rst)
- [doc/modules/tree.rst](https://github.com/scikit-learn/scikit-learn/blob/2f7da7445dc5a8038fe863997aa2beb3ad03f0d4/doc/modules/tree.rst)
- [doc/modules/ensemble.rst](https://github.com/scikit-learn/scikit-learn/blob/2f7da7445dc5a8038fe863997aa2beb3ad03f0d4/doc/modules/ensemble.rst)
- [doc/modules/svm.rst](https://github.com/scikit-learn/scikit-learn/blob/2f7da7445dc5a8038fe863997aa2beb3ad03f0d4/doc/modules/svm.rst)
- [doc/modules/neighbors.rst](https://github.com/scikit-learn/scikit-learn/blob/2f7da7445dc5a8038fe863997aa2beb3ad03f0d4/doc/modules/neighbors.rst)

2026-10-07：AI 助手协助原创整理并核对原始章节。示例、手算和练习由本站设计；未执行的任务不作为实验结论。

