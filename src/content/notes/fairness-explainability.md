---
slug: fairness-explainability
title: "公平性与可解释性：分组评估和解释边界"
summary: "检查数据与错误的群体差异，理解公平指标取舍和 permutation importance 的局限。"
kind: concept
topic: evaluation
tags: ["公平性","偏差","可解释性","特征重要性"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["google-ml-crash-course","sklearn-user-guide"]
prerequisites: ["ml-metrics-validation"]
related: ["ai-security-boundaries","data-feature-pipelines"]
---

## 平均表现不能替代群体检查

偏差可能来自采样、标签、测量、缺失和历史决策。先明确任务、允许使用的属性和真实决策影响，再按有意义的群体/场景检查数据量、错误及不确定性。删除一个敏感字段，不保证其他字段没有代理信息。

## 知识点对照

| 检查 | 学习目标 | 边界 |
| --- | --- | --- |
| 表示与标签偏差 | 哪些群体被遗漏或使用不同标注规则 | 数据比例一致不意味着标签正确 |
| 选择率 | 各群体被判正的比例 | 差异可受真实基率影响，不能单凭一数定公平 |
| TPR/FPR | 真正例找回与负例误报的群体差异 | 需要可信标签和足够样本 |
| 校准 | 各群体相同预测概率是否对应相近频率 | 与其他公平目标可能存在取舍 |
| permutation importance | 打乱特征后验证分数变化 | 说明模型依赖，不说明因果 |
| 个体解释 | 解释具体预测所用信号 | 解释近似、相关特征和分布外输入会影响可信度 |

公平目标需要结合使用场景由负责人决定；不同定义可能无法同时满足。解释性方法不替代模型质量检查或伦理判断。

## 原创例子

虚构 A 组有 20 个正例，找回 18 个，recall=90%；B 组有 10 个正例，找回 5 个，recall=50%。整体 recall=23/30≈76.7%，隐藏了群体差异。B 组数据少，还要报告计数和区间，不能把 50% 当作精确长期规律。

若“工龄”和“经验分”高度相关，打乱其中一个时模型仍可利用另一个，重要性可能偏低。直接删除排名低的特征前，应检查相关性与重新训练后的影响。

## 练习与完成标准

列出数据采样、标签和群体划分的依据；制作整体及分组混淆矩阵，提出一次标注抽查。为特征重要性写验证集、随机重排次数和相关特征检查计划。本次未使用个人数据或运行解释工具。

## 复习问题

1. 删除敏感列为什么可能仍存在代理偏差？
2. 特征重要性为何不等于因果影响？
3. 公平指标分母小的时候应怎样报告？

## 阅读依据与核验范围

- [doc/modules/permutation_importance.rst](https://github.com/scikit-learn/scikit-learn/blob/2f7da7445dc5a8038fe863997aa2beb3ad03f0d4/doc/modules/permutation_importance.rst)
- [原始章节](https://developers.google.com/machine-learning/crash-course/fairness/evaluating-for-bias)

2026-10-07：AI 助手协助原创整理并核对原始章节。示例、手算和练习由本站设计；未执行的任务不作为实验结论。

