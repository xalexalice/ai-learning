---
slug: ai-app-practice
title: "AI 应用开发实战：服务、项目与验收"
summary: "以可复现交付为目标，完成后端契约、RAG/agent 任务、权限缓存实验和评估报告。"
topic: engineering
tags: [实践, 项目验收, 开发与架构]
status: published
publishedAt: "2026-10-08"
updatedAt: "2026-10-08"
steps:
  - title: "AI 应用实战路线：从开发到架构与面试"
    note: ai-application-roadmap
    task: "确定自己的起点，区分已有证据和后续任务。"
  - title: "AI 服务后端：流式响应、取消与重试"
    note: ai-service-backend
    task: "写请求/事件契约，列断流、取消、重试、幂等与权限测试。"
  - title: "RAG 综合项目：任务拆解与验收清单"
    note: rag-capstone-spec
    task: "用有使用权的语料拆分项目，准备固定题集、版本与交付清单。"
  - title: "权限与缓存实验：同问不同人、撤权与版本"
    note: retrieval-access-cache-lab
    task: "运行 --check，解释六个基线失败和版本漏更新的边界。"
  - title: "智能体项目：状态、轨迹与失败验证"
    note: agent-project-validation
    task: "先定义固定工作流基线，再记录智能体状态、轨迹和重复写入恢复。"
  - title: "AI 项目评估报告：基线、对照与失败证据"
    note: ai-project-evaluation
    task: "在同题集上比较自己的实现，保留逐题输出、实际成本/时延和失败。"
  - title: "AI 服务可靠性：SLI、SLO 与错误预算"
    note: ai-slo-reliability
    task: "给项目定义可测 SLI、目标、错误预算、告警与回滚条件。"
---

## 起点与前置

适合已有编程、模型应用与检索基础的学习者。检查每篇页头的前置知识；缺模型/token、RAG 或评估基础时先补 [系统主线](../ai-systematic-learning/) 和 [RAG/智能体工程](../ai-application-engineering/)。本路径不是从零实现模型训练。

## 实施与验收

共 7 步。只有权限/缓存这一篇包含本轮实际脚本结果，其余项目任务需要用自己的环境执行并记录。完成标准是：他人能按 README 启动；引用、拒答、权限、更新、工具副作用和请求故障有用例；报告可复核版本、题集、基线和失败。

服务性能与安全的前置不在本路径重新讲授，可从 [性能](../../notes/serving-performance/) 和 [安全](../../notes/ai-security-boundaries/) 补读。拿到真实项目记录后，再进入 [架构与面试路径](../ai-architecture-interview/)。

## 核验范围

2026-10-08：按项目交付与笔记前置组织，核对来源和路径；没有启动模型服务、云发布或训练。
