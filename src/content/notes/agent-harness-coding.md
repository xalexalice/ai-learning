---
slug: agent-harness-coding
title: "Harness 与 Coding Agent 的执行和验收"
summary: "把模型建议、工具执行和任务完成分开，用工作区隔离、补丁、验证器、预算与恢复构成运行环境。"
kind: concept
topic: agents
tags: [Harness, Coding Agent, 沙盒, 失败恢复]
status: published
publishedAt: "2026-10-10"
updatedAt: "2026-10-10"
lastReviewedAt: "2026-10-10"
sources: [bojieli-ai-agent-book, hf-agents-practice]
prerequisites: [agent-control-loop, structured-output-tools, ai-security-boundaries]
related: [agent-project-validation, agent-context-skills-cache, agent-evaluation-coordination]
---

## Harness 承担什么

Harness 是围绕模型组织输入、工具、状态、执行约束与验证的运行环境。模型提出下一步，运行环境决定动作是否允许、怎样执行、怎样记录，以及何时结束。能够生成补丁和声称“测试通过”，与实际修改文件、运行测试和满足需求是不同状态。

Coding Agent 可利用软件工程已有的类型检查、测试和版本控制形成反馈。测试覆盖不完整或预期写错时，反馈也会失真，因此要让验收条件来自任务要求，而非由模型随意改写。

## 一次代码任务的组件

| 组件 | 应持有的信息 | 验证重点 |
| --- | --- | --- |
| 任务契约 | 允许修改的文件、预期行为、完成条件 | 需求发生修订后使用最新版本 |
| 工作区 | 起始提交、独立副本、读写范围 | 不覆盖其他人的未提交修改 |
| 工具适配 | 参数 schema、调用 ID、超时、实际参数 | 模型看到的参数与执行参数一致 |
| 执行边界 | 文件与网络权限、隔离进程、资源限额 | 生成代码不能自行扩大权限 |
| 验证器 | 类型检查、任务测试、产物检查 | 测试修改与业务修改分开审查 |
| 状态记录 | 补丁、stdout/stderr、退出码、未完成项 | 运行失败或中断不能记成成功 |

工具返回应能说明执行了什么以及结果在哪里。长输出可以截断，但必须明示截断并提供完整记录位置；“没有看到错误”不能代替检查退出码和预期产物。

## 原创任务设计

假设需要修复一个 CSV 解析函数，让带引号的逗号和换行能够被正确读取。先在固定起始版本建立独立用例，再允许 Agent 修改解析器。验收同时检查新用例、已有用例、修改范围和实际导出结果；只检查函数存在或代码能编译是不够的。

一次可审查的循环是：读取相关实现，提出最小补丁，校验补丁适用位置，执行检查，再根据具体失败修正。没有命中预期位置时应重新读取文件，避免模糊替换误改邻近代码。新增测试不能只重复实现内部步骤，应检查用户关心的行为。

## 故障与恢复

| 故障位置 | 例子 | 恢复方式 |
| --- | --- | --- |
| 模型服务 | 限流、网络断开、输出被截断 | 在剩余 deadline 与重试预算内恢复完整响应 |
| 工具 | 参数非法、对象不存在、权限不足 | 修正参数或停止，不能原样无限重试 |
| 上下文 | 工具结果缺失、压缩丢掉约束 | 回查来源和已执行状态，重建必要记录 |
| 控制流 | 同一失败反复发生、恢复又失败 | 识别无进展，终止或交接未完成事项 |

模型请求可以重试，不代表它之前发起的外部写入也可以重复。结果未知时，先按操作 ID 查询实际状态。工作区 checkpoint 保存成功也不证明外部操作成功；两者需要单独核验。

## 练习与完成标准

为上述 CSV 任务设计五种失败：补丁位置不匹配、测试失败、工具超时、重复调用、用户缩小修改范围。逐一写出运行环境的状态、恢复动作和最终报告。留下起始版本、任务用例、补丁与执行记录后，才可判断实现是否完成。

复习时解释：为什么验证器应独立于生成者？如何检测重复调用中的无进展？什么证据支持“已完成”，什么状态只能报告“结果未知”？

## 阅读来源与核验

- [第 1 章 Harness](https://github.com/bojieli/ai-agent-book/blob/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/book/chapter1.md)
- [第 5 章 Coding Agent 与故障恢复](https://github.com/bojieli/ai-agent-book/blob/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/book/chapter5.md)
- [Coding Agent 项目说明](https://github.com/bojieli/ai-agent-book/blob/dbc046eb896ac4e39aa19c7774c8bf49583b89a6/chapter5/README.md)

2026-10-10：AI 助手协助原创整理；CSV 案例为设计练习，未记录模型执行成绩。
