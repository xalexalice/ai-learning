---
slug: agent-project-validation
title: "智能体项目：状态、轨迹与失败验证"
summary: "从一个明确任务出发，用固定工作流作基线，验证状态、工具成功、预算和恢复。"
kind: concept
topic: agents
tags: ["智能体项目","state","轨迹","恢复"]
status: published
publishedAt: "2026-10-08"
updatedAt: "2026-10-08"
lastReviewedAt: "2026-10-08"
sources: ["hf-agents-practice","llm-zoomcamp-practice"]
prerequisites: ["agent-control-loop","agent-workflows-orchestration","ai-service-backend"]
related: ["ai-project-evaluation","ai-interview-casebook"]
---

## 先用固定流程建立参照

学习任务可选“读资料→提取限制→生成待审核清单”，工具先用可控的只读操作。把每一步、依赖和成功条件写清，再比较让模型自主选择工具是否增加成功率或减少成本。不要预设 agent 一定优于固定工作流。

框架的 state、node 和 edge 组织程序控制流；模型的文字推理不能替代实际工具状态。尝试调用、已执行、执行成功和最终任务完成，需要分别记录。

## 必须保存的状态与轨迹

| 内容 | 记录什么 | 失败验证 |
| --- | --- | --- |
| 身份与任务 | 可信用户/租户、目标、允许动作 | 不采纳模型自报身份 |
| 工具调用 | 参数、调用 ID、执行结果、错误 | 参数非法、对象越权、超时 |
| 数据来源 | source ID、版本、引用依据 | 旧版本、相互冲突、无证据 |
| 预算 | 最大步骤、deadline、token/费用预算 | 重复调用、循环、超预算 |
| checkpoint | 已完成步骤、待执行动作、版本 | 恢复后不重复外部写入 |
| 结束状态 | 成功、需澄清、失败、取消、等待审核 | 不将中断标为成功 |

恢复涉及业务一致性：节点完成后 checkpoint 尚未保存，重启可能重复执行。外部写操作需要操作 ID 和恢复查询；不以某个框架声称“持久化”替代业务检查。

## 原创失败任务

资料工具连续两次返回“无匹配结果”。系统应遵守步骤预算，返回需补充资料或拒答；不能循环搜索直到偶然出现一条内容，再宣称已确认结论。

若工具只完成了模拟预览，最终文字不能说已发布。审核/预览与实际提交应保留独立状态。

## 比较与验收

相同任务和工具分别跑固定流程与 agent，记录任务成功、实际工具成功、步骤、成本、人工介入和失败类型。采样任务覆盖成功、无资料、工具异常、重复、取消及恢复。

课程的小型 GAIA 验证集合及 exact-match 榜单用于该课程练习，不代表完整业务可靠性。自己的项目还需要业务规则、授权和结果可用性检查。本篇未运行 agent 或提交外部榜单。

## 复习问题

1. 工具返回成功为何不等于任务成功？
2. checkpoint 与外部动作怎样避免重复？
3. 怎样证明自主选择工具比固定流程有收益？

## 阅读依据

- [units/en/unit2/langgraph/building_blocks.mdx](https://github.com/huggingface/agents-course/blob/3c469e773ec04e5f338b727ff20e3a6ea823ff81/units/en/unit2/langgraph/building_blocks.mdx)
- [units/en/unit3/agentic-rag/agent.mdx](https://github.com/huggingface/agents-course/blob/3c469e773ec04e5f338b727ff20e3a6ea823ff81/units/en/unit3/agentic-rag/agent.mdx)
- [units/en/unit4/hands-on.mdx](https://github.com/huggingface/agents-course/blob/3c469e773ec04e5f338b727ff20e3a6ea823ff81/units/en/unit4/hands-on.mdx)

2026-10-08：AI 助手协助原创组织知识点、案例和练习，核对以上原始资料。具体模型项目成绩以实际日志为准。
