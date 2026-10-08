---
slug: ai-application-roadmap
title: "AI 应用实战路线：从开发到架构与面试"
summary: "衔接现有基础、后端、RAG/agent 综合项目、实测与架构讨论，按可交付成果学习。"
kind: recap
topic: engineering
tags: ["实践路线","开发","架构","面试"]
status: published
publishedAt: "2026-10-08"
updatedAt: "2026-10-08"
lastReviewedAt: "2026-10-08"
sources: ["llm-zoomcamp-practice","hf-agents-practice","system-design-primer","google-sre-workbook"]
prerequisites: ["ai-knowledge-map"]
related: ["ai-curriculum","rag-capstone-spec","ai-interview-casebook"]
---

## 先确定目标与起点

已有全栈基础时，优先走“AI 应用工程 → 完整项目 → 架构与面试”。模型训练、传统 ML 和多模态仍保留为支线；不必先读完所有方向才能开始项目。若数据、评估、token 和安全基础薄弱，先从 [系统主线](../../tracks/ai-systematic-learning/) 补读。

阅读能建立知识框架。达到开发准备度还需要独立实现和验证；架构岗位通常还要能处理真实约束、故障、容量和交付取舍。本站可以提供学习任务与案例，不能承诺就业或面试通过。

## 四组资料怎样配合

| 资料 | 重点 | 放在路线哪一步 |
| --- | --- | --- |
| LLM Zoomcamp | RAG 应用、评估、监控和项目交付 | 综合问答项目及报告 |
| Hugging Face Agents Course | 图状态、工具、执行轨迹与项目评估 | 固定工作流基线之后的智能体项目 |
| System Design Primer | 需求、容量、缓存、队列和存储取舍 | 项目能够运行后练系统设计 |
| Google SRE Workbook | SLI/SLO、错误预算、告警和负载管理 | 定义可靠性与发布决策 |

资料卡保留访问条件和版本。LLM Zoomcamp 核验快照没有根许可证；Primer 根许可为 CC BY 4.0；HF 仓库根许可为 Apache-2.0；SRE 在线可读但本次没有核定整书再分发许可。课程认证、外链材料和计算资源另行核对。

## 开发实践的交付顺序

| 阶段 | 知识点 | 完成证据 |
| --- | --- | --- |
| 服务接口 | 流式事件、取消、deadline、重试、幂等、身份传播 | 契约和失败场景测试 |
| RAG 项目 | 自有语料、版本、检索、证据、拒答、访问过滤 | 可启动项目、固定问题集与逐题输出 |
| 权限与缓存 | 用户/租户、撤权、删除、更新与失效 | 本站已有可运行实验；再验证自己的项目 |
| Agent 项目 | 固定流程与智能体选择、状态、工具副作用和停止 | 轨迹、失败恢复、边界用例 |
| 评估报告 | 基线、分母、配对对照、错误、性能和成本 | 带版本、原始结果和局限的报告 |
| 交付 | 启动说明、配置、数据许可、测试、监控与回滚 | 另一人按 README 成功复现 |

按 [应用开发实战路径](../../tracks/ai-app-practice/) 逐步完成。仓库的四份工作表在 docs/practice/，分别用于项目、评估、架构和面试复盘。

## 架构与面试的后续路径

完成一个可运行的应用后，沿 [架构与面试路径](../../tracks/ai-architecture-interview/) 学容量/成本、系统边界、SLO 和故障，再用真实项目练六类案例。架构图必须能解释文档更新、授权、请求超时、缓存和恢复怎样共同工作。

准备至少一次方案选择记录：选了什么、什么约束、放弃了哪个替代、验证证据、何时重新决策。组件越多并不自动代表设计更好。

## 四个独立完成检查

1. 给你一批有使用权的文档，能否从零启动一个带引用与拒答的问答应用？
2. 能否用固定题集比较基线和改动，保留逐项失败并解释收益范围？
3. 能否画数据/请求流，估容量，解释权限、重复写入、过载与回滚？
4. 能否在项目演示和追问中区分个人实现、团队贡献、手算与实测？

前两项有证据可支持应用开发准备；后两项仍需结合岗位和实际系统经验评估。不能只凭阅读完成度判断。

## 本轮完成与尚需执行

本轮新增 10 篇笔记、4 张资料卡和 2 条路径，现有全站 54 篇笔记、32 张资料卡、9 条路径。两篇实验均有实际脚本与记录：关键词检索、权限与缓存；其余设计任务和手算都有明确标注。

完整模型问答、agent 执行、负载与真实费用测量是学习者后续执行的项目任务，本轮没有调用模型 API、训练、下载权重或发布线上服务。不要把这些任务表当成已经完成的模型应用。

## 复习问题

1. 本阶段要交的证据是什么，怎样由另一人复核？
2. 你需要补基础，还是已经可以进入综合项目？
3. 架构回答中哪条假设还缺测量？

## 阅读依据与核验

- [project.md](https://github.com/DataTalksClub/llm-zoomcamp/blob/c04d02f2ea7171d0be1e2b17d555c49651f2b5a3/project.md)
- [units/en/unit4/hands-on.mdx](https://github.com/huggingface/agents-course/blob/3c469e773ec04e5f338b727ff20e3a6ea823ff81/units/en/unit4/hands-on.mdx)
- [README.md](https://github.com/donnemartin/system-design-primer/blob/ae9bbd7b02d90b9866215de185217d33f39ab733/README.md)
- [官方章节](https://sre.google/workbook/implementing-slos/)

2026-10-08：AI 助手协助原创组织与核对来源；案例、练习与手算的执行状态见正文；不把学习任务视为已完成的模型或线上实验。
