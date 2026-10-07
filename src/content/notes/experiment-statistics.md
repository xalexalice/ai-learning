---
slug: experiment-statistics
title: "实验统计：配对比较、区间与显著性"
summary: "用独立单位、配对重采样和置换检验分析差异，区分离线评估与线上因果实验。"
kind: concept
topic: evaluation
tags: ["bootstrap","置信区间","置换检验","A/B"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["scipy-statistics-guide","sklearn-user-guide"]
prerequisites: ["ml-metrics-validation","ai-mathematics"]
related: ["llm-evaluation","rag-evaluation","recommendation-ranking"]
---

## 分数差异需要配合不确定性

两套方案在相同测试样本上比较，通常应保留配对关系。先写主要指标、最小有意义差异、独立观察单位和停止规则，再计算结果。统计显著不代表实际收益足够大。

## 知识点与边界

| 知识点 | 正确理解 | 常见失败 |
| --- | --- | --- |
| 抽样单位 | 独立用户/文档等单位 | 把一个用户的多条数据当独立样本夸大样本量 |
| paired bootstrap | 有放回抽索引，同时取两方案对应观测 | 分别独立抽两方案，丢掉相关性 |
| 置信区间 | 重复抽样中构造区间的覆盖性质 | 不能说固定参数有 95% 概率在当前区间 |
| 置换检验 | 在零假设/可交换条件下重排 | 配对样本、独立样本和相关性检验的置换方式不同 |
| 多重比较 | 多次尝试增加偶然胜出机会 | 试到显著后只报最后一次 |
| 离线/线上 | 离线比较预测；线上随机实验估计处理差异 | 离线更高不能自动证明线上因果收益 |

用户有多次观测时考虑按用户成组重采样；时序相关数据不能机械套独立逐行 bootstrap。区间估计依赖抽样假设，不能修复坏样本和标签泄漏。

## 原创配对例子

三道自制题，方案 A 得分为 1、0、1，B 为 1、1、1；逐题差为 0、1、0，平均差 1/3。配对重采样抽题号，再取对应差。只有三题远不足以宣称稳定提升；本篇没有计算区间或 p 值。

若随机实验按用户分配，分析也要考虑用户内相关性。还要检查分配、样本量、流量干扰和护栏指标；这里给出设计问题，不提供真实产品的实验结论。

## 练习与完成标准

设计两套 RAG 方案的相同问题集，写主要指标、配对方式、文档/用户分组和区间计划。说明 SciPy bootstrap 的 paired 参数与 permutation_test 的 samples/pairings 区别；“samples”保留配对并交换所属方案，“pairings”改变对应关系。本次未运行统计工具。

## 复习问题

1. 为什么同一题两方案应保留配对？
2. p 值可以解释为零假设为真的概率吗？
3. 为什么反复查看结果然后停在显著时有问题？

## 阅读依据与核验范围

- [原始章节](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.bootstrap.html)
- [原始章节](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.permutation_test.html)
- [doc/modules/cross_validation.rst](https://github.com/scikit-learn/scikit-learn/blob/2f7da7445dc5a8038fe863997aa2beb3ad03f0d4/doc/modules/cross_validation.rst)

2026-10-07：AI 助手协助原创整理并核对原始章节。示例、手算和练习由本站设计；未执行的任务不作为实验结论。

