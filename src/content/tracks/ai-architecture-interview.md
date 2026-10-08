---
slug: ai-architecture-interview
title: "AI 架构与面试：容量、可靠性与项目证据"
summary: "以已完成的应用为背景，练容量成本、系统边界、SLO、评估解释和六类面试案例。"
topic: engineering
tags: [实践, 项目验收, 开发与架构]
status: published
publishedAt: "2026-10-08"
updatedAt: "2026-10-08"
steps:
  - title: "AI 应用实战路线：从开发到架构与面试"
    note: ai-application-roadmap
    task: "检查开发项目证据是否齐备，列出本次设计的真实约束。"
  - title: "AI 容量与成本：并发、存储和请求预算"
    note: ai-capacity-cost
    task: "标单位估算在途请求、向量存储和成功任务成本，标明待测假设。"
  - title: "AI 系统设计：边界、数据流与架构取舍"
    note: ai-system-design
    task: "画入库和请求两条数据流，写一份有依据的方案选择记录。"
  - title: "AI 服务可靠性：SLI、SLO 与错误预算"
    note: ai-slo-reliability
    task: "定义完整请求成功的分母与目标，手算错误预算，写告警动作。"
  - title: "AI 项目评估报告：基线、对照与失败证据"
    note: ai-project-evaluation
    task: "复核报告分母、配对样本和局限，分清实测与归因。"
  - title: "AI 开发与架构面试：六类案例和回答证据"
    note: ai-interview-casebook
    task: "用自己的项目回答六类案例，保存追问、证据与未掌握项。"
---

## 前置与范围

先完成 [应用开发实战](../ai-app-practice/) 或已有同等可运行项目，再来讨论它的架构。RAG 综合项目、安全和推理性能是外部前置，不在这 6 步里从头展开。没有项目时可以做设计练习，但不能声称具有生产落地经验。

## 完成标准

留下需求与假设表、数据/请求流、容量成本手算、方案选择、SLO/故障处理、可复核报告和一次面试复盘。解释每个复杂组件的必要性和重新决策的触发条件。

面试能力与岗位要求、个人实现和真实经验有关。本路径提供检查项，不保证招聘通过；算法/训练岗位需另走 [训练与对齐](../ai-model-training/) 及相关基础支线。

## 核验范围

2026-10-08：按项目交付与笔记前置组织，核对来源和路径；没有启动模型服务、云发布或训练。
