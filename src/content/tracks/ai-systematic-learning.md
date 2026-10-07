---
slug: ai-systematic-learning
title: "AI 系统学习主线：从基础到应用"
summary: "按前置关系走过数学、模型、提示、RAG、智能体、评估、工程与视觉，再选择深入支线。"
topic: foundations
tags: [系统学习, 知识点, 练习]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
steps:
  - title: "建立 AI 全景与学习顺序"
    note: ai-knowledge-map
    task: "选定目标路径，列出每个模块的输入、输出与一个失败案例。"
  - title: "AI 数学基础：张量、梯度与概率"
    note: ai-mathematics
    task: "写张量形状，手算一次梯度更新，解释条件概率的方向。"
  - title: "机器学习工作流：任务、数据与泛化"
    note: machine-learning-workflow
    task: "写数据字典、划分理由、泄漏反例和多数类基线。"
  - title: "数据与特征管线：先划分，再拟合"
    note: data-feature-pipelines
    task: "为数值/类别字段写处理方案，标注所有 fit 的训练来源。"
  - title: "监督学习算法：线性、树、集成与距离"
    note: supervised-models
    task: "对照基线、线性和树模型，写预处理、假设与成本。"
  - title: "机器学习评估：指标、阈值与交叉验证"
    note: ml-metrics-validation
    task: "手算混淆矩阵，写阈值、分组/时间划分与测试隔离理由。"
  - title: "深度学习训练：计算图、损失与优化"
    note: deep-learning-training
    task: "标注训练循环与梯度清零位置，解释两组假想曲线。"
  - title: "优化与正则化：学习率、泛化与训练曲线"
    note: optimization-regularization
    task: "手算一步 SGD，为三种训练曲线写单因素检查计划。"
  - title: "PyTorch 训练实践：数据、梯度与 checkpoint"
    note: pytorch-training-practice
    task: "标注训练循环的形状与梯度状态，列保存和重载清单。"
  - title: "Token 与上下文"
    note: token-context
    task: "列出输入预算，说明为什么字符数不能代替 token 数。"
  - title: "Transformer：注意力、位置与生成"
    note: transformer-attention
    task: "画因果掩码，标注注意力形状，解释训练与生成的并行差别。"
  - title: "AI 模型选型：先看任务，再比较模型"
    note: model-selection
    task: "填写三类任务的模型选型表，标记尚未核验的字段。"
  - title: "提示设计：任务、上下文、示例与输出约束"
    note: prompt-design
    task: "写六部分任务契约与五个固定输入、预期输出。"
  - title: "结构化输出与工具调用：格式正确之后还要验证"
    note: structured-output-tools
    task: "写工具 schema、五个失败输入和独立授权检查。"
  - title: "Embedding 与向量检索：表示、相似度和索引"
    note: embeddings-vector-search
    task: "手算点积与余弦，设计语义、编号、否定和版本查询。"
  - title: "让答案回到证据"
    note: rag-evidence
    task: "构造引用存在但结论越界的反例，指出缺失证据。"
  - title: "智能体执行循环：模型、工具、状态与停止"
    note: agent-control-loop
    task: "模拟成功、缺证据、超时和重复调用四条执行轨迹。"
  - title: "评估基线"
    note: evaluation-baseline
    task: "定义输入、预期、实际、失败四列和固定命中规则。"
  - title: "LLM 评估：样本、评分、评判模型与回归"
    note: llm-evaluation
    task: "设计十个测试样本、独立评分规则与错误类别。"
  - title: "AI 推理工程：延迟、缓存、吞吐与复现"
    note: serving-performance
    task: "设计三种负载，明确延迟、吞吐、质量与缓存比较口径。"
  - title: "视觉与视觉语言模型：像素、任务与坐标"
    note: vision-foundations
    task: "区分标签、框、掩码与文字输出，手算 resize 后坐标。"
---

## 学习目标与前置

适合会阅读基础代码、希望建立完整概念框架的学习者。主线共 21 步，不要求先购买模型服务。先用手算、虚构数据与纸上流程完成每步任务；实际训练或调用留到条件具备后。

## 学习方法

每一步先读笔记，再完成下方验证任务，最后不看笔记复述核心概念。页头前置与页底来源可帮助查漏；这条主线覆盖入门关系，不以读完概念笔记冒充实践熟练度。

## 完成标准

留下一个资料问答应用的任务契约、模型选型表、数据流、权限边界与评估计划。每个设计决策都能说明输入、输出、失败和检查方法。若要先做实测，可转到 [四步应用入门](../ai-app-foundations/) 复现现有关键词实验。

## 继续深入

应用系统见 [RAG 与智能体工程](../ai-application-engineering/)；参数学习见 [模型训练与对齐](../ai-model-training/)；视觉、生成和语音见 [多模态支线](../ai-multimodal-learning/)。

传统算法与统计见 [传统 ML 支线](../ml-foundations-learning/)；测试、发布和监控见 [MLOps 支线](../mlops-learning/)。全部知识清单和综合验收见 [系统大纲](../../notes/ai-curriculum/)。

## 核验范围

2026-10-07：按本批笔记的前置关系组织主线，设计验证任务；训练、向量模型与生成 API 实践未执行。
