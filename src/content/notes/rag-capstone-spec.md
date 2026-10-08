---
slug: rag-capstone-spec
title: "RAG 综合项目：任务拆解与验收清单"
summary: "围绕自制知识库完成检索、生成、权限、更新、评估和交付，明确每阶段应提供的证据。"
kind: concept
topic: rag
tags: ["综合项目","验收","RAG"]
status: published
publishedAt: "2026-10-08"
updatedAt: "2026-10-08"
lastReviewedAt: "2026-10-08"
sources: ["llm-zoomcamp-practice","datawhale-llm-universe"]
prerequisites: ["ai-service-backend","rag-ingestion-chunking","rag-retrieval-reranking","rag-evaluation"]
related: ["ai-project-evaluation","retrieval-access-cache-lab","ai-system-design"]
---

## 做一个可验证的知识助手

使用自制或明确授权的文档，覆盖可回答、资料缺失、冲突版本、更新、删除和权限差异。问题先按真实任务写好，再标注来源与预期行为；模型生成的问题或标签需要人工复核，不能直接当可靠事实。

本站任务以个人或小组知识库为例。学习者应自己完成关键代码，记录选择和失败；最终项目需要真实检索与生成日志，只有检索脚本或聊天界面不足以证明整个链路有效。

## 分阶段产物

| 阶段 | 实现内容 | 验收证据 |
| --- | --- | --- |
| 任务/数据 | 目标读者、问题范围、授权、源版本和权限 | 数据字典与允许/拒绝示例 |
| 入库 | 解析、切片、稳定 ID、元数据、失败记录 | 同一文档重入不重复；更新/删除可追踪 |
| 检索 | 先简单基线，再向量/混合/重排按收益增加 | 相同问题集的候选、分数、相关性判断 |
| 生成 | 上下文与预算、引用、无证据拒答 | 单条回答回溯具体 source/chunk/revision |
| 服务 | API/UI、认证、取消、超时、日志 | 正常和失败的端到端演示 |
| 评估 | 质量、权限、时效、成本和延迟分开 | 固定样本结果与错误分类 |
| 交付 | 环境、依赖、配置、启动、监控和回滚 | 他人按说明可运行，结果可解释 |

入库、检索、引用和缓存必须使用同一权限语义。删除应检查源文档、索引、缓存和引用回溯；搜索无结果不能证明存储中的所有副本已删除。

## 最小学习里程碑

先完成检索与权限实验，再接入一套明确版本的 embedding/生成方案，最后做评估和交付。没有硬件、模型服务或费用条件时，先交检索和系统设计阶段；最终完成状态仍需保留未完成项，不能填假答案成绩。

只有固定基线差在哪、下一种方法预期解决哪类失败都说清，才增加复杂度。一个可解释的完整方案优先于同时使用多个框架。

## 原创验收场景

虚构手册 v1 写“维护日为周一”，v2 改为“周二”。更新后回答应引用 v2；删去该手册后不能继续给出旧日期。另建仅用户 A 可读的文档，用户 B 的查询、缓存和引用均不能暴露其内容。

## 交付文件建议

README 说明目的、数据与启动；设计说明包含数据流和取舍；结果表保存逐条输入、预期、实际和版本；演示展示成功、拒答、撤权、更新和失败恢复。模板位于源码的 docs/practice/rag-project-checklist.md，可复制后填自己的结果。

## 复习问题

1. 召回到了旧版本，问题属于哪层？
2. 为什么引用格式正确还需检查其支持关系？
3. 怎样证明权限检查也覆盖缓存命中？

## 阅读依据

- [project.md](https://github.com/DataTalksClub/llm-zoomcamp/blob/c04d02f2ea7171d0be1e2b17d555c49651f2b5a3/project.md)
- [01-agentic-rag/README.md](https://github.com/DataTalksClub/llm-zoomcamp/blob/c04d02f2ea7171d0be1e2b17d555c49651f2b5a3/01-agentic-rag/README.md)

2026-10-08：AI 助手协助原创组织知识点、案例和练习，核对以上原始资料。具体模型项目成绩以实际日志为准。
