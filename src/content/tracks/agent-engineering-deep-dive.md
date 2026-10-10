---
slug: agent-engineering-deep-dive
title: "Agent 工程进阶 从执行到持续改进"
summary: "对照 ai-agent-book，用八步深化运行环境、上下文、记忆、工具、异步交互、评估和轨迹学习。"
topic: agents
tags: [ai-agent-book, Agent 工程, 进阶, Harness]
status: published
publishedAt: "2026-10-10"
updatedAt: "2026-10-10"
steps:
  - title: "AI Agent 教材十章对照与知识补充"
    note: ai-agent-book-comparison
    task: "标记已有基础与缺口，确定一个边界明确的 Agent 任务。"
  - title: "Harness 与 Coding Agent 的执行和验收"
    note: agent-harness-coding
    task: "写修改范围、工具契约、失败出口和独立验收条件。"
  - title: "Agent 上下文预算 Skills 与前缀缓存"
    note: agent-context-skills-cache
    task: "分配上下文预算，设计技能触发反例并核对摘要保留信息。"
  - title: "结构化记忆与知识索引的来源和权限"
    note: agent-structured-memory
    task: "用自制记录比较细节、关系、权限和撤销后的查询。"
  - title: "MCP：协议、工具发现、版本与授权边界"
    note: mcp-tool-boundaries
    task: "区分发现与授权，列出当前接口版本、执行参数及权限检查。"
  - title: "事件驱动 Agent 的取消与交互状态"
    note: agent-event-interaction
    task: "写出乱序、重复、任务修订、取消与重启的事件时间线。"
  - title: "Agent 评估指标 轨迹边界与协作成本"
    note: agent-evaluation-coordination
    task: "固定任务、验证器和总预算，区分探索成功与重复可靠性。"
  - title: "Agent 轨迹学习 后训练与持续改进"
    note: agent-trajectory-learning
    task: "选择最小改动载体，用边界题和正常任务验收更新并准备回滚。"
---

## 前置与目标

适合已有编程、模型调用、RAG 和评估基础的学习者。先检查各笔记页头的前置知识；缺基础时从 [系统主线](../ai-systematic-learning/) 或 [RAG 与智能体工程](../ai-application-engineering/) 补读。

本路径用任务产物串起教材内容：任务契约、运行状态、上下文预算、来源与权限、事件时间线、评估集和更新记录。可以先用自制数据完成设计，再在具备环境和权限后实现。

## 八步的完成标准

每步留下可由另一人检查的记录。最终能够回答：谁可以触发动作、动作实际发生了什么、任务更新后哪些结果仍适用、系统怎样停止，以及改动是否在独立题集上有效。

Coding Agent、图检索、多 Agent、训练、语音与机器人实验需要各自的模型、软件或设备条件。阅读和设计完成不能登记为实验通过；实际成绩要包含版本、输入、完整输出、失败与成本。

## 来源与后续

固定版本、章节和实验入口见 [教材资料卡](../../resources/bojieli-ai-agent-book/)。完成一个真实项目后，用 [架构与面试路径](../ai-architecture-interview/) 复盘容量、故障、权限与设计选择。

2026-10-10：按知识缺口组织八步阅读与验证任务，未执行上游模型或硬件实验。
