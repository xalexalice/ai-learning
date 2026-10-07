---
slug: ml-metrics-validation
title: "机器学习评估：指标、阈值与交叉验证"
summary: "手算混淆矩阵和回归误差，理解 ROC/PR、分组与时间划分、嵌套验证和阈值选择。"
kind: concept
topic: evaluation
tags: ["precision","recall","交叉验证","PR-AUC"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["sklearn-user-guide","google-ml-crash-course"]
prerequisites: ["machine-learning-workflow","supervised-models"]
related: ["calibration-uncertainty","experiment-statistics","evaluation-baseline"]
---

## 指标必须对应实际决策

二分类先指定正类和阈值。TP 为正例判正，FP 为负例判正，FN 为正例判负，TN 为负例判负。混淆矩阵的行列定义要标清。

## 必须掌握的指标

| 指标 | 计算或含义 | 适用边界 |
| --- | --- | --- |
| precision | TP/(TP+FP) | 衡量报出的正例有多少正确 |
| recall | TP/(TP+FN) | 衡量真实正例找回多少 |
| F1 | 2PR/(P+R) | 不反映 TN，也不自动符合错误成本 |
| ROC 曲线/AUC | TPR 对 FPR；跨阈值的排序能力 | 不表示概率校准或某个阈值的上线效果 |
| PR 曲线/AP | precision 对 recall；AP 是常见汇总 | 稀少正例时有用；AP 与梯形 PR 面积不能无说明混用 |
| MAE/RMSE | 绝对误差均值/平方误差均值开根号 | RMSE 对大误差更敏感；单位与目标相同 |
| macro/micro | 按类别平均/汇总计数 | 不平衡任务需同时看各类支持量 |

分母为零时的处理由评价工具与约定决定，报告时必须说明。阈值应在验证阶段结合成本、容量和目标选择，最终测试不参与反复调参。

## 手算例子

虚构 100 条样本中 TP=8、FP=4、FN=2、TN=86：precision=8/12≈0.667，recall=8/10=0.8，F1=16/22≈0.727，accuracy=94/100。只报 94% 会隐藏六个错误的不同代价。

预测误差为 1、1、4 时，MAE=2，RMSE=√6≈2.449；二者不能直接比较大小来断言模型优劣。

## 验证方式

独立同分布样本可考虑 K 折；类别分层保留比例，但不能解决同用户泄漏。GroupKFold 面向实体隔离，时间划分模拟未来预测。大量模型/超参数筛选后，必要时用内层调参、外层估计的嵌套验证；报告选择过程，保留最终独立测试。

## 练习与复习

为工单升级设计正类、阈值成本与划分策略；手算另一组混淆矩阵，解释 macro 与 micro 差异。本次数字为原创手算，没有模型分数。复述：为什么 AUC 不等于校准？为什么分层后仍可能泄漏？为什么调参不能使用最终测试？

## 阅读依据与核验范围

- [doc/modules/model_evaluation.rst](https://github.com/scikit-learn/scikit-learn/blob/2f7da7445dc5a8038fe863997aa2beb3ad03f0d4/doc/modules/model_evaluation.rst)
- [doc/modules/cross_validation.rst](https://github.com/scikit-learn/scikit-learn/blob/2f7da7445dc5a8038fe863997aa2beb3ad03f0d4/doc/modules/cross_validation.rst)

2026-10-07：AI 助手协助原创整理并核对原始章节。示例、手算和练习由本站设计；未执行的任务不作为实验结论。

