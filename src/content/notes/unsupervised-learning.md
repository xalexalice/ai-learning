---
slug: unsupervised-learning
title: "无监督学习：聚类、降维与异常检测"
summary: "理解 k-means、密度聚类、混合模型、PCA 和异常检测，区分发现结构与证明业务事实。"
kind: concept
topic: foundations
tags: ["聚类","PCA","DBSCAN","异常检测"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["sklearn-user-guide"]
prerequisites: ["data-feature-pipelines","ai-mathematics"]
related: ["embeddings-vector-search","fairness-explainability"]
---

## 没有标签不等于没有验证

无监督学习描述数据结构。聚类编号只是算法分组，不自动对应用户类型或原因。相似度、缩放、采样和参数会改变结果，需要稳定性、人工抽样和业务用途共同检查。

## 知识点对照

| 方法 | 学什么 | 容易误读的地方 |
| --- | --- | --- |
| k-means | 最小化样本到簇中心的平方距离 | 要选 k；偏向紧凑形状，受缩放和初始中心影响 |
| DBSCAN | 密度连通区域及噪声点 | 密度阈值很重要；不同密度的簇可能难兼顾 |
| 高斯混合模型 | 多个概率分布的加权组合 | 软分配来自分布假设，不是业务身份概率 |
| PCA | 在中心化数据中寻找高方差线性方向 | 方差大不代表对目标重要；缩放决定谁占主导 |
| 非线性可视化 | 低维展示部分邻域结构 | 二维间距和簇形状不能当原始空间全局事实 |
| 异常检测 | 判断样本是否偏离学习到的分布 | 罕见不等于错误，更不直接等于违规 |

异常检测还要区分：训练数据可能含异常的 outlier detection，与主要使用正常样本学习、判断新数据的 novelty detection。具体估计器支持的模式不同。

## 手算与失败边界

若原始特征“金额”在千元量级，“次数”在个位量级，欧氏距离可能主要由金额决定。先根据任务处理尺度，才能讨论簇含义。

PCA 压缩后保留 90% 方差，是重建角度的信息描述，不是分类准确率 90%。删除低方差方向，可能刚好删除一个有辨别力的小变化。

## 练习与完成标准

为自制二维点设计两种缩放、两个 k 和一个密度阈值，预先写希望观察的变化。选择五个样本人工检查分组，记录不稳定与边界点。这里是计划，未生成聚类图或运行模型。

## 复习问题

1. 聚类标签交换是否意味着结果变差？
2. 为什么解释 PCA 前要检查尺度？
3. 怎样避免把新用户当作异常用户？

## 阅读依据与核验范围

- [doc/modules/clustering.rst](https://github.com/scikit-learn/scikit-learn/blob/2f7da7445dc5a8038fe863997aa2beb3ad03f0d4/doc/modules/clustering.rst)
- [doc/modules/decomposition.rst](https://github.com/scikit-learn/scikit-learn/blob/2f7da7445dc5a8038fe863997aa2beb3ad03f0d4/doc/modules/decomposition.rst)
- [doc/modules/outlier_detection.rst](https://github.com/scikit-learn/scikit-learn/blob/2f7da7445dc5a8038fe863997aa2beb3ad03f0d4/doc/modules/outlier_detection.rst)

2026-10-07：AI 助手协助原创整理并核对原始章节。示例、手算和练习由本站设计；未执行的任务不作为实验结论。

