---
slug: agent-evaluation-coordination
title: "Agent 评估指标 轨迹边界与协作成本"
summary: "区分探索成功与重复可靠性，用任务和轨迹前缀验证行为，并比较多 Agent 的信息收益、冲突与预算。"
kind: concept
topic: evaluation
tags: [pass@k, 轨迹前缀, multi-agent, 验证器, 配对比较]
status: published
publishedAt: "2026-10-10"
updatedAt: "2026-10-10"
lastReviewedAt: "2026-10-10"
sources: [bojieli-ai-agent-book, hf-agents-practice]
prerequisites: [llm-evaluation, agent-workflows-orchestration, experiment-statistics]
related: [ai-project-evaluation, agent-project-validation, agent-trajectory-learning, agent-structured-memory]
---

## 先确定一次任务怎样算成功

任务评估应固定初始状态、用户目标、可用动作、截止时间及验证器。最终文字、工具返回和环境实际状态分别核对。一个 Agent 写出了正确答案，但同时执行了越权动作，不能因为文字正确而算完整成功。

确定性条件适合用测试、状态差异或产物检查验证。沟通质量等开放条件可用 rubric 与模型评判，但应保留评分理由并抽样校准。隐藏状态、参考解和测试用例保留在验证器一侧，不能泄露给被测系统。

## pass@k 与重复通过的口径

pass@k 衡量同一任务采样 k 次至少一次通过。本书还使用 Pass^k 表示连续 k 次都通过的要求；这个命名应在报告中解释，不应假定所有基准采用相同定义。

在每次独立且单次成功概率相同的假设下，至少一次通过的概率为 `1-(1-p)^k`，全部通过为 `p^k`。本站手算例子取 p=0.8、k=3，两者分别是 99.2% 和 51.2%。这不是模型实测，真实重复运行也可能相关。

报告须写明尝试次数、抽样方式、每次是否重置环境、总预算及筛选者。若只能靠事后看到正确答案挑中那次结果，pass@k 的高分不能直接当作系统的一次交付能力；对有副作用的动作也不能在生产环境反复试到成功。

## 轨迹前缀测行为边界

端到端题检查是否完成任务；轨迹前缀题把系统停在关键动作之前，给定已经看到的证据和状态，只测下一步是否正确。这样可以把“记忆检索失败”与“记忆已找到但使用错误”分开。

原创边界题：旧记忆写着“通常直接发布学习笔记”，当前明确要求“只生成预览”。将记忆、当前要求和准备发布前的状态一起给被测系统，检查它是否保持预览状态。只测答案中有没有“预览”二字不足以验证真实动作。

边界题用于定位问题，仍需端到端回归检查后续行为。定位轨迹中首个偏离任务的步骤，并保存当时的来源、状态和调用，而非把最后的异常自动归为根因。

## 多 Agent 需要提供信息收益

新增 Agent 可以读取独立来源、执行不同工具或进行独立验证；若所有角色使用同一错误信息，投票仍可能放大错误。比较对象应包括一个合理的单 Agent 或串行基线。

| 维度 | 应记录的内容 |
| --- | --- |
| 质量 | 同题任务成功、证据完整性、错误和安全约束 |
| 成本 | 全部 Agent、管理者和裁判的调用、token 与运行时间 |
| 延迟 | 完整任务的结束时间，而非某个 worker 的局部用时 |
| 协调 | 超时、取消、重复工作、冲突、人工介入和结果未知 |

共享上下文保留细节，也增加噪声；隔离上下文便于权限与任务划分，需要明确的移交包。移交可包含任务 ID、修订、来源、结论、限制和未完成项，不要求暴露私有推理文本。

## 原创协作冲突案例

两个资料工作者分别从不同版本得到某项目的不同依赖要求。管理者应保留来源版本并解释冲突，不能用多数票混成一个不存在的版本。共享产物指定唯一写入者，或用工作副本和版本条件合并；最先返回也不一定最可信。

取消需要传给子任务并回收结果与资源。某 worker 超时后迟到的消息仍应归属原任务，不能导致第二次结算或覆盖已经修订的结果。

## 练习与完成标准

设计十条小任务，包含成功、无证据、越权、当前指令覆盖旧偏好和冲突合并。先确定评分与预算，再比较串行和并行方案；保留逐题结果，按相同任务配对分析质量与总成本。小样本只能支持这些任务上的结论。

复习：pass@k 依赖谁来选择候选？前缀题隔离了哪种能力？增加一个 Agent 获得了什么新信息？本篇手算和案例不代表实际 Agent 评测。

## 阅读来源与核验

- [第 7 章评估](https://github.com/bojieli/ai-agent-book/blob/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/book/chapter7.md)
- [记忆边界评估说明](https://github.com/bojieli/ai-agent-book/blob/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/chapter7/user-memory-policy-eval/README.md)
- [第 10 章协作](https://github.com/bojieli/ai-agent-book/blob/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/book/chapter10.md)
- [并行资料收集说明](https://github.com/bojieli/ai-agent-book/blob/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/chapter10/parallel-web-research/README.md)

2026-10-10：AI 助手协助原创整理，未启动多 Agent 或模型评测。
