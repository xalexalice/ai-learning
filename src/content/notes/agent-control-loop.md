---
slug: agent-control-loop
title: "智能体执行循环：模型、工具、状态与停止"
summary: "将 agent 看作受约束的执行系统，理解工具选择、结果观察、状态持久化和可验证终止。"
kind: concept
topic: agents
tags: ["agent","tool-use","control-loop"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["agents-beginners-course"]
prerequisites: ["structured-output-tools","rag-evidence"]
related: ["agent-context-memory","agent-workflows-orchestration","mcp-tool-boundaries","llm-evaluation"]
---
## Agent 的能力来自整个系统

一个常见循环是：读取任务和状态，调用模型选择下一步，验证并执行工具，记录工具结果，判断是否继续。模型负责提议，程序负责执行边界与状态。并非每个任务都需要开放式 agent；固定顺序的业务流程通常更容易测试。

## 核心模块

| 模块 | 需要明确的内容 |
| --- | --- |
| 目标 | 可检查的完成条件、用户限制、允许动作 |
| 模型 | 精确版本、输入预算、工具与输出能力 |
| 工具 | 描述、schema、权限、读写性质与失败类型 |
| 状态 | 已完成步骤、待处理项、证据、错误和请求标识 |
| 执行器 | 参数校验、超时、重试、幂等、取消 |
| 观察 | 工具真实结果；与模型口头描述区分 |
| 停止条件 | 成功、失败、证据不足、预算耗尽或用户取消 |
| 评估 | 目标是否完成、过程是否越界、耗时与调用成本 |

最大步数只是兜底，不能代替成功条件。重试应按错误性质决定；身份错误或参数缺失通常需要修正输入，反复相同调用不会自行变正确。

## 纸上执行示例

给定“从允许访问的资料找出两处一致的定义”，只开放检索和读取工具。先检索候选，再读取正文，核对一致性，最后返回定义与来源；证据不足时结束并说明缺口。

记录每步 `step_id、tool、arguments、result、decision、status`。若工具超时，不能写成“已成功读取”；若任务要求两处来源，只找到一处不能宣称完成。执行日志保存可验证决策与工具证据，不要求收集模型隐藏推理。

## 练习与完成标准

手动模拟成功、无资料、工具超时和重复调用四条轨迹。为每条指出执行器的动作与终止原因。检查“完成”必须由哪些观察支持，而不能只由模型自己说了算。本次未部署或运行自动 agent。

## 复习问题

1. 工具提议、工具执行和工具观察分别由谁产生？
2. 重试什么时候需要幂等保证？
3. 固定工作流与开放式 agent 的选择依据是什么？

## 阅读依据与核验范围

- [学习指南](https://github.com/microsoft/ai-agents-for-beginners/blob/25b7985f3b2dc37a84f4a7387ccd3c9f0e5b1595/STUDY_GUIDE.md)
- [工具使用](https://github.com/microsoft/ai-agents-for-beginners/blob/25b7985f3b2dc37a84f4a7387ccd3c9f0e5b1595/04-tool-use/README.md)
- [可信智能体](https://github.com/microsoft/ai-agents-for-beginners/blob/25b7985f3b2dc37a84f4a7387ccd3c9f0e5b1595/06-building-trustworthy-agents/README.md)

2026-10-07：AI 助手协助原创整理，核对以上 GitHub 章节；示例与练习为本站设计，未执行的任务不作为实验结论。
