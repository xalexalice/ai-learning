---
slug: bojieli-ai-agent-book
title: "深入理解 AI Agent 设计原理与工程实践"
summary: "李博杰的十章 Agent 教材，重点补读 Harness、Skills、结构化知识、异步交互、评估、后训练与持续进化。"
topic: agents
tags: [GitHub, 中文教材, Harness, Agent]
status: published
publishedAt: "2026-10-10"
updatedAt: "2026-10-10"
type: repo
sourceUrl: https://github.com/bojieli/ai-agent-book
author: "Bojie Li（李博杰）及项目贡献者"
sourcePublishedAt: null
accessedAt: "2026-10-10"
version: "README 标记书稿 2.0 · main 快照 dbc046eb896ac4e39aa19c7774c8bf49583b89a6"
reuseRights: "根 LICENSE 为 Apache-2.0，Copyright 2025 Bojie Li；子项目和外部依赖分别核对。本站使用原创归纳与链接，未导入书稿、图片或实验代码。"
---

## 与现有课程怎样配合

这本书围绕模型输入、工具执行及其运行环境组织 Agent 工程。适合已有编程和模型应用基础的读者，补充现有通用 AI 大纲中的执行、交互和改进机制。它不是传统机器学习、数学或分布式训练的替代教材。

先看 [十章对照与补充清单](../../notes/ai-agent-book-comparison/)，再沿 [Agent 工程进阶路径](../../tracks/agent-engineering-deep-dive/) 阅读。基础薄弱时，先补本站的执行循环、记忆、工具调用和评估笔记。

## 固定版本的章节入口

| 章节 | 学习重点 |
| --- | --- |
| [第 1 章](https://github.com/bojieli/ai-agent-book/blob/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/book/chapter1.md) | Agent 组成与 Harness |
| [第 2 章](https://github.com/bojieli/ai-agent-book/blob/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/book/chapter2.md) | 上下文结构、缓存、Skills 与压缩 |
| [第 3 章](https://github.com/bojieli/ai-agent-book/blob/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/book/chapter3.md) | 用户记忆、检索及结构化知识 |
| [第 4 章](https://github.com/bojieli/ai-agent-book/blob/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/book/chapter4.md) | 工具分类、发现和执行边界 |
| [第 5 章](https://github.com/bojieli/ai-agent-book/blob/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/book/chapter5.md) | Coding Agent 与故障恢复 |
| [第 6 章](https://github.com/bojieli/ai-agent-book/blob/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/book/chapter6.md) | 事件、语音、Computer Use 与机器人 |
| [第 7 章](https://github.com/bojieli/ai-agent-book/blob/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/book/chapter7.md) | 验证器、轨迹、指标和评估环境 |
| [第 8 章](https://github.com/bojieli/ai-agent-book/blob/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/book/chapter8.md) | 后训练数据、奖励与环境 |
| [第 9 章](https://github.com/bojieli/ai-agent-book/blob/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/book/chapter9.md) | 由运行反馈改进知识、指令、程序和参数 |
| [第 10 章](https://github.com/bojieli/ai-agent-book/blob/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/book/chapter10.md) | 多 Agent 协作、隔离与协调 |

## 实验阅读入口

值得按机制阅读的项目包括 [Coding Agent](https://github.com/bojieli/ai-agent-book/tree/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/chapter5/coding-agent)、[上下文压缩](https://github.com/bojieli/ai-agent-book/tree/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/chapter2/context-compression)、[结构化索引](https://github.com/bojieli/ai-agent-book/tree/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/chapter3/structured-index)、[事件触发](https://github.com/bojieli/ai-agent-book/tree/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/chapter6/agent-with-event-trigger)、[记忆边界评估](https://github.com/bojieli/ai-agent-book/tree/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/chapter7/user-memory-policy-eval)、[更新门禁](https://github.com/bojieli/ai-agent-book/tree/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/chapter9/harness-safety-gate) 和 [并行资料收集](https://github.com/bojieli/ai-agent-book/tree/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/chapter10/parallel-web-research)。

README 自述 109 个配套实验，包含仓库内项目、外部复现和未满足完整验收的项目。这个数字不能解释为本站完成了 109 次实验。每项先读自己的 README，分别检查代码入口、实际运行证据、依赖和任务范围；失败或负结果同样值得学习。

根 `pyproject.toml` 的 Python 范围为 `>=3.11,<3.14`。模型 Key、浏览器、外部仓库、GPU 和硬件要求因项目而异，章节环境并不保证每个实验可直接运行。按项目说明选择环境，不把“开放权重”理解为免费 API 或无需算力。

## 版本与许可

本次快照最后提交时间为 `2026-09-30T03:03:28Z`，提交说明是更新 star history 图表；这不是各章正文的更新时间。README 标记 2.0，交互、评估、后训练和进化分别在第 6、7、8、9 章，旧 PDF 的章节编号可能不同。

固定版本的 [根 LICENSE](https://github.com/bojieli/ai-agent-book/blob/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/LICENSE) 为 Apache-2.0，标注 Copyright 2025 Bojie Li。未来实际导入具体代码时，应按该文件和子项目声明保留许可、版权及修改说明；外部模型、数据和依赖不能自动继承根许可。

2026-10-10：核对目录、小结、重点段落及上述实验的阅读说明，使用原创笔记和链接建立学习入口；未运行上游模型或硬件实验。
