---
slug: ai-application-engineering
title: "RAG 与智能体工程：从资料到可验证执行"
summary: "拆解切片、召回、证据、工具、记忆、协作、MCP、评估与安全，形成一套可测试的应用方案。"
topic: engineering
tags: [系统学习, 知识点, 练习]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
steps:
  - title: "关键词检索实验"
    note: keyword-retrieval-lab
    task: "实际运行原有实验并对照记录，新增一个失败查询。"
  - title: "Embedding 与向量检索：表示、相似度和索引"
    note: embeddings-vector-search
    task: "手算点积与余弦，设计语义、编号、否定和版本查询。"
  - title: "RAG 文档管线：解析、清洗、切片与版本"
    note: rag-ingestion-chunking
    task: "设计切片元数据及更新、删除后的索引预期。"
  - title: "RAG 检索：召回、混合搜索与重排"
    note: rag-retrieval-reranking
    task: "标记六个查询的相关片段，区分召回、排序与生成失败。"
  - title: "让答案回到证据"
    note: rag-evidence
    task: "构造引用存在但结论越界的反例，指出缺失证据。"
  - title: "结构化输出与工具调用：格式正确之后还要验证"
    note: structured-output-tools
    task: "写工具 schema、五个失败输入和独立授权检查。"
  - title: "智能体执行循环：模型、工具、状态与停止"
    note: agent-control-loop
    task: "模拟成功、缺证据、超时和重复调用四条执行轨迹。"
  - title: "上下文与记忆：选择、压缩、隔离与遗忘"
    note: agent-context-memory
    task: "设计冲突、更新、过期与撤销记录，检查摘要保留关键限制。"
  - title: "工作流与多智能体：拆解、路由、协作和交接"
    note: agent-workflows-orchestration
    task: "画任务依赖、状态负责人、交接契约与冲突合并规则。"
  - title: "MCP：协议、工具发现、版本与授权边界"
    note: mcp-tool-boundaries
    task: "核对协议版本，设计版本不兼容和对象越权的测试预期。"
  - title: "LLM 评估：样本、评分、评判模型与回归"
    note: llm-evaluation
    task: "设计十个测试样本、独立评分规则与错误类别。"
  - title: "RAG 评估：召回、排序、忠实度与正确性"
    note: rag-evaluation
    task: "分别诊断漏检、排序、忠实度、事实错误与正确拒答。"
  - title: "AI 应用安全：数据、权限、注入与执行"
    note: ai-security-boundaries
    task: "为五种注入/越权输入标记应阻断的程序层。"
  - title: "AI 推理工程：延迟、缓存、吞吐与复现"
    note: serving-performance
    task: "设计三种负载，明确延迟、吞吐、质量与缓存比较口径。"
---

## 前置与目标

先完成 [系统学习主线](../ai-systematic-learning/) 中的模型、提示、工具和评估部分，或按篇目前置补读。目标是知道每种失败属于哪个模块，并能设计独立检查。

## 学习方法

先复现已有关键词实验，再设计向量检索与完整 RAG。扩展到 agent 时保留真实工具状态；只在清楚职责和收益时考虑多智能体。所有练习先用虚构或明确许可的资料。

## 完成标准

交付文档入库/更新/删除方案、查询轨迹、工具 schema、状态机、权限设计、固定评估样本和性能测试计划。每种失败都能定位到解析、召回、排序、生成、执行或授权。新的向量和 agent 计划没有实测成绩。

## 核验范围

2026-10-07：串联 14 个步骤。现有关键词实验可独立运行；其他步骤是学习与设计任务，实际模型/服务调用需另行执行并记录环境。
