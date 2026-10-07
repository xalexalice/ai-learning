---
slug: agent-workflows-orchestration
title: "工作流与多智能体：拆解、路由、协作和交接"
summary: "按任务依赖选择固定流程、路由或多智能体，明确状态所有权、合并规则与失败恢复。"
kind: concept
topic: agents
tags: ["workflow","multi-agent","orchestration"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["agents-beginners-course"]
prerequisites: ["agent-control-loop","agent-context-memory"]
related: ["llm-evaluation","ai-security-boundaries"]
---
## 先判断任务是否需要多个 Agent

固定步骤可用工作流；输入类型明确可用路由；下一步依赖不确定信息时再考虑模型规划。多个 agent 适合有明确职责与可验证交接的任务，也会带来更多调用、消息、状态冲突和失败路径。

## 模式与模块知识点

| 模式 | 适用情况 | 必须定义 |
| --- | --- | --- |
| 顺序流水线 | 后一步依赖前一步结果 | 每步输入输出契约、失败时是否继续 |
| 路由 | 任务可分类到不同处理器 | 分类标准、未知类型的处理 |
| 并行分工 | 子任务独立，可汇总 | 去重、冲突、合并与超时规则 |
| 规划与执行 | 步骤由当前观察决定 | 计划可执行性、重规划边界 |
| 交接 hand-off | 责任转给另一个 agent | 当前负责人、上下文、完成与回传 |
| 审查/迭代 | 输出需对照标准修改 | 独立依据、最大迭代与停止条件 |

“研究者、作者、审查者”三个名字不自动产生独立观点。如果它们共用错误来源，可能只是重复同一种错误。审查应对照证据与评分规则，而非依靠角色称谓。

## 工程设计示例

整理资料任务可以拆成“读取授权来源→抽取出处→原创归纳→检查链接”。只有独立来源读取适合并行；写同一个摘要或共享文件时，应指定唯一写入者或明确合并协议。

交接记录可包含 `task_id、goal、constraints、evidence、pending、owner、status`。失败恢复应区分已完成、未开始和结果未知；外部写入不能因为上游重跑而无条件重复执行。

## 练习与完成标准

画出资料整理流程，标明每条依赖、状态负责人和失败出口。比较单 agent 与多 agent 的预期收益和额外成本，再构造两个结果互相矛盾的合并案例。这里是设计练习，未启动多个 agent 执行。

## 复习问题

1. 什么时候并行会违反任务依赖？
2. hand-off 与调用工具的责任关系有什么差别？
3. 多个 agent 对同一答案投票为什么不一定更可靠？

## 阅读依据与核验范围

- [规划与任务拆解](https://github.com/microsoft/ai-agents-for-beginners/blob/25b7985f3b2dc37a84f4a7387ccd3c9f0e5b1595/07-planning-design/README.md)
- [多智能体设计模式](https://github.com/microsoft/ai-agents-for-beginners/blob/25b7985f3b2dc37a84f4a7387ccd3c9f0e5b1595/08-multi-agent/README.md)

2026-10-07：AI 助手协助原创整理，核对以上 GitHub 章节；示例与练习为本站设计，未执行的任务不作为实验结论。
