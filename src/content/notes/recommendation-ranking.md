---
slug: recommendation-ranking
title: "推荐系统：召回、排序、反馈与冷启动"
summary: "理解内容推荐、协同过滤、矩阵分解与多阶段排序，处理未曝光反馈和离线评价的边界。"
kind: concept
topic: foundations
tags: ["推荐系统","协同过滤","NDCG","冷启动"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["google-recommendation-course","sklearn-user-guide"]
prerequisites: ["data-feature-pipelines","ml-metrics-validation","embeddings-vector-search"]
related: ["rag-retrieval-reranking","fairness-explainability"]
---

## 推荐是多阶段决策

召回从大量候选中找小集合；排序估计目标相关的分数；重排结合多样性、新鲜度、约束和权限。前一阶段漏掉的候选无法靠后一阶段恢复。推荐与 RAG 有相似管线，但推荐目标和用户反馈不能照搬问答正确率。

## 关键知识点

| 模块 | 核心机制 | 检查 |
| --- | --- | --- |
| 内容推荐 | 使用物品属性与用户偏好 | 特征质量、相似内容过多 |
| 协同过滤 | 从用户—物品交互学习相似性 | 稀疏反馈、曝光偏差、冷启动 |
| 矩阵分解 | 用户与物品向量的内积近似交互 | 缺失反馈不是可信负标签；权重与采样需定义 |
| 深度/双塔表示 | 编码用户/物品用于检索与评分 | 更新同步、候选库覆盖与线上可用特征 |
| 排序评价 | Recall@k、NDCG@k 与业务效果 | 候选全集、相关性标签、截断 k 保持一致 |
| 重排 | 多样性、约束、近期信息 | 不直接把单个模型分数当最终政策 |

未点击可能是未看到、位置不显眼或时机不合适，不一定是不喜欢。记录曝光和决策时点；负采样方法会影响训练与离线指标。

## 原创手算

用户向量为 (1,2)，两个物品向量分别为 (2,1)、(0,3)，内积为 4、6。这只是简化模型中的排序分数，不是点击概率，更不是推荐质量保证。

DCG 可采用增益 (2^相关性−1) 与对数位置折扣，也有直接用相关性值作增益的定义；scikit-learn 的 ndcg_score 使用后者。NDCG 以该查询的理想排序归一化。相关性全零时需要约定评价行为；不要把不同定义的分数混报。

## 练习与完成标准

为学习笔记推荐设计召回、排序和重排规则，写新用户与新笔记的冷启动策略。按时间划分交互，记录曝光、候选集合与 Recall/NDCG 口径；线上效果还需独立实验设计。这里没有访问真实用户数据或运行推荐系统。

## 复习问题

1. 未观察到的交互为什么不能直接当负例？
2. 排序再好为什么也补不了召回遗漏？
3. 离线点击预测为什么不等于线上因果收益？

## 阅读依据与核验范围

- [原始章节](https://developers.google.com/machine-learning/recommendation/overview/types)
- [原始章节](https://developers.google.com/machine-learning/recommendation/collaborative/matrix)
- [重排：新鲜度、多样性与公平](https://developers.google.com/machine-learning/recommendation/dnn/re-ranking)
- [doc/modules/model_evaluation.rst](https://github.com/scikit-learn/scikit-learn/blob/2f7da7445dc5a8038fe863997aa2beb3ad03f0d4/doc/modules/model_evaluation.rst)

2026-10-07：AI 助手协助原创整理并核对原始章节。示例、手算和练习由本站设计；未执行的任务不作为实验结论。
