---
slug: ai-agent-book-comparison
title: "AI Agent 教材十章对照与知识补充"
summary: "将 ai-agent-book 的十章与现有知识库逐项对照，补充六个工程专题，明确学习顺序与实验边界。"
kind: recap
topic: agents
tags: [ai-agent-book, 教材对照, 查漏补缺, Agent]
status: published
publishedAt: "2026-10-10"
updatedAt: "2026-10-10"
lastReviewedAt: "2026-10-10"
sources: [bojieli-ai-agent-book]
prerequisites: [agent-control-loop]
related: [agent-harness-coding, agent-context-skills-cache, agent-structured-memory, agent-event-interaction, agent-evaluation-coordination, agent-trajectory-learning, ai-curriculum]
---

## 对照结论

现有知识库已覆盖 LLM、RAG、工具调用、记忆、工作流、微调和基础评估。这本教材的补充价值主要在于把这些组件连成可执行、可纠错、可持续改进的 Agent 系统。新增六个专题，重点处理原有概览尚未展开的运行环境、结构化信息、异步状态及评估机制。

本对照使用 [资料卡](../../resources/bojieli-ai-agent-book/) 中的 2.0 书稿快照；“已有覆盖”和“需要深化”是对本站内容的编辑判断，不是教材作者对本站的评价。

## 十章与本站内容的对应关系

| 原书章节 | 已有知识 | 本次补充或衔接 |
| --- | --- | --- |
| 1 Agent 入门 | [执行循环](../../notes/agent-control-loop/)、[项目状态](../../notes/agent-project-validation/) | [Harness 与 Coding Agent](../../notes/agent-harness-coding/)：用执行记录、验证器和失败出口支撑完成声明 |
| 2 上下文工程 | [token](../../notes/token-context/)、[上下文与记忆](../../notes/agent-context-memory/) | [Skills 与缓存](../../notes/agent-context-skills-cache/)：渐进加载、稳定前缀、预算和压缩验收 |
| 3 用户记忆和知识库 | [记忆生命周期](../../notes/agent-context-memory/)、[检索与重排](../../notes/rag-retrieval-reranking/) | [结构化记忆与知识索引](../../notes/agent-structured-memory/)：主体消歧、时间、摘要树、实体关系及权限 |
| 4 工具 | [结构化输出](../../notes/structured-output-tools/)、[MCP 边界](../../notes/mcp-tool-boundaries/) | 继续使用协议笔记，结合 Harness 和 Skills 深化按需发现、参数真值与执行检查 |
| 5 Coding Agent | [安全](../../notes/ai-security-boundaries/)、[项目验证](../../notes/agent-project-validation/) | [Harness 与 Coding Agent](../../notes/agent-harness-coding/)：工作副本、补丁、测试、模型与工具故障分类 |
| 6 交互 | [语音](../../notes/audio-asr-tts/)、[视觉](../../notes/vision-foundations/)、[后端取消](../../notes/ai-service-backend/) | [事件与交互](../../notes/agent-event-interaction/)：迟到结果、修订号、抢占、Computer Use 观察和动作确认 |
| 7 评估 | [LLM 评估](../../notes/llm-evaluation/)、[统计](../../notes/experiment-statistics/)、[项目报告](../../notes/ai-project-evaluation/) | [Agent 评估与协作](../../notes/agent-evaluation-coordination/)：pass@k、连续通过、轨迹前缀、根因与协调成本 |
| 8 后训练 | [训练与适配](../../notes/llm-training-adaptation/)、[强化学习](../../notes/reinforcement-learning/) | [轨迹学习](../../notes/agent-trajectory-learning/)：任务蓝图、示范筛选、环境重置、奖励与信用分配 |
| 9 持续进化 | [MLOps](../../notes/mlops-lifecycle/)、[漂移监控](../../notes/data-drift-monitoring/) | [轨迹学习](../../notes/agent-trajectory-learning/)：知识、指令、程序、参数四种更新载体与独立发布门禁 |
| 10 多 Agent | [工作流与交接](../../notes/agent-workflows-orchestration/) | [Agent 评估与协作](../../notes/agent-evaluation-coordination/)：信息增量、版本冲突、取消传播和唯一结算 |

## 开发者的学习顺序

沿 [八步 Agent 工程进阶](../../tracks/agent-engineering-deep-dive/) 阅读：先了解缺口，建立 Coding Agent 运行骨架，再管理上下文和记忆，补协议边界与异步交互，最后用评估决定改进和训练。

已有主线仍承担数学、数据、算法、训练和通用应用基础。没有必要为了学习 Agent 先跑完整本书的训练与机器人项目；先完成一个边界明确的只读任务，再扩大动作能力。

## 值得研究的实现机制

| 实验入口 | 阅读时追踪什么 | 自己的验证任务 |
| --- | --- | --- |
| `chapter5/coding-agent` | 读取、搜索、补丁、执行、反馈和终止如何衔接 | 对一个小仓库定义修改范围和独立验收测试 |
| `chapter2/context-compression` | 摘要怎样保留来源、约束和未完成项 | 同一组虚构信息压缩前后都能回答边界问题 |
| `chapter3/structured-index` | 原文、摘要、实体关系和查询怎样关联 | 一题查细节、一题查跨实体关系，均返回原文证据 |
| `chapter6/agent-with-event-trigger` | 事件入队、任务归属、处理中更新和结果回收 | 覆盖重复、乱序、取消、迟到和重启 |
| `chapter7/user-memory-policy-eval` | 在检索已经成功时，怎样单独测记忆的使用边界 | 新指令与旧偏好冲突时采取正确的下一步动作 |
| `chapter9/harness-safety-gate` | 更新提案为何可能被验证器拒绝 | 有害提案不能发布，正常任务仍可通过 |
| `chapter10/parallel-web-research` | 来源隔离、任务状态、消息和取消怎样配合 | 比较串行基线与并行方案，检查冲突及重复结算 |

固定版本的项目链接见资料卡。可借鉴的是控制流、契约和验收方法；具体 API、依赖和外部写入权限需在自己的项目里重新检查。上游报告的分数和运行记录属于上游环境，不能写成自己的复现成绩。

例如 [Coding Agent 的 README](https://github.com/bojieli/ai-agent-book/blob/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/chapter5/coding-agent/README.md) 将 `WebFetch`、`WebSearch`、`Task` 标为 stub。学习时可以追踪编码循环和接口组织，接入实际项目前须补齐并验证这些能力。项目描述中的“生产级”字样本身不能代替实现审查与任务验收。

## 不应直接推广的结论

“更大的上下文”“更多 Agent”“采用 RL”都不能单独证明系统更可靠。先找出错误发生在数据、工具、控制流、模型策略还是验证器，再选择改动。书中的具体模型、榜单、训练与硬件案例有任务范围，不能代替当前官方接口和自己的对照测试。

机器人控制、完整 RL 训练、跨组织互操作仍需对应原始资料与实际环境。本轮增加的是概念笔记、设计案例和学习任务；本站仍只有关键词检索、权限与缓存两篇包含实际运行的实验。

## 阅读来源与核验

- [2.0 目录和阅读说明](https://github.com/bojieli/ai-agent-book/blob/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/README.md)
- [正文目录](https://github.com/bojieli/ai-agent-book/tree/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/book)
- [许可](https://github.com/bojieli/ai-agent-book/blob/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/LICENSE)

2026-10-10：AI 助手协助对照十章目录、小结和重点段落，原创设计本站案例与练习。未导入原文、图片或课程代码，未运行上游实验。
