---
slug: llm-evaluation
title: "LLM 评估：样本、评分、评判模型与回归"
summary: "把格式、任务成功、事实支持和执行成本分别测量，建立独立测试集与可追溯错误分类。"
kind: concept
topic: evaluation
tags: ["evaluation","LLM-as-judge","regression"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["ragas-evaluation-docs","agents-beginners-course","datawhale-llm-universe"]
prerequisites: ["evaluation-baseline","machine-learning-workflow"]
related: ["rag-evaluation","model-selection","agent-control-loop"]
---
## 先写评价目标

生成质量没有统一的单一分数。资料问答关注证据，信息提取关注字段，工具 agent 关注任务是否完成及是否越界。先写使用场景和失败成本，再决定自动规则、人工评分与模型评判怎样组合。

## 评估模块知识点

| 模块 | 应掌握 |
| --- | --- |
| 数据集 | 正常、边界、模糊、缺证据、冲突、恶意与长输入 |
| 数据隔离 | 提示开发集与最终测试集分开，避免样本泄漏 |
| 确定规则 | JSON/schema、字段、来源 ID、精确或容差匹配 |
| 人工 rubric | 维度、等级、反例与评分依据 |
| LLM-as-judge | 评判提示、模型 revision、偏差与人工校准 |
| 稳定性 | 多次运行、随机性、分层结果与不确定性 |
| 执行轨迹 | 工具选择、参数、权限、实际结果和停止原因 |
| 回归 | 固定数据/配置版本，每次变更比较质量与成本 |

模型评判可能受位置、表达风格、长度、模型偏好和提示注入影响。评判模型自己的高分不能独立证明应用正确；先用人工标注样本检查评分一致性，并审查分歧。

## 一份评估记录应该包含什么

保存 `case_id、input、expected、sources、actual、score、failure_reason`，再记录模型/提示/检索/数据版本、运行时间与费用。对 agent，还保存可观察的工具轨迹与外部执行证据。

不要只报总通过率。把“来源缺失”“结论超出证据”“schema 错误”“错误工具”“越权”“未完成就结束”分开，才能找到要改的模块。版本迭代时同时报告收益与退化，不只选择成功案例。

## 练习与完成标准

为资料问答写十个设计样本，每个给出评分规则与失败类别。让两个读者按同一 rubric 独立评分一组人工构造回答，讨论分歧；若未来使用模型评判，再核对偏差和重复运行。本次未调用评判模型或公布准确率。

## 复习问题

1. 格式通过和任务通过分别意味着什么？
2. 评判模型与被评判模型相同时可能有什么偏差？
3. 为什么看平均分之外还要看样本切片和回归失败？

## 阅读依据与核验范围

- [事实正确性](https://github.com/vibrantlabsai/ragas/blob/298b68274234c060deacab3cf5fb52aa3a20e885/docs/concepts/metrics/available_metrics/factual_correctness.md)
- [评估与可观测性](https://github.com/microsoft/ai-agents-for-beginners/blob/25b7985f3b2dc37a84f4a7387ccd3c9f0e5b1595/STUDY_GUIDE.md)
- [系统评估与优化](https://github.com/datawhalechina/llm-universe/blob/77beb748047e8a0d8ff708716606a8e0b132dc45/docs/C5/C5.md)

2026-10-07：AI 助手协助原创整理，核对以上 GitHub 章节；示例与练习为本站设计，未执行的任务不作为实验结论。
