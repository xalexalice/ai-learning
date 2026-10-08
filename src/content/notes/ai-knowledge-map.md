---
slug: ai-knowledge-map
title: "AI 知识地图：八个模块与学习顺序"
summary: "把常见 AI 方向组织成 8 个模块、54 篇笔记与 9 条路径，按前置知识、练习和原始来源学习。"
kind: concept
topic: foundations
tags: [知识地图, 学习顺序, GitHub]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-08"
lastReviewedAt: "2026-10-08"
sources: [d2l-zh-course, ml-beginners-course, genai-beginners-course, agents-beginners-course, hf-llm-course, hf-smol-course, hf-diffusers-docs, hf-audio-course, hf-rl-course, datawhale-llm-universe, datawhale-hello-agents, mcp-specification, vllm-serving-docs, ragas-evaluation-docs]
prerequisites: []
related: [ai-curriculum, machine-learning-workflow, model-selection, prompt-design, rag-ingestion-chunking, agent-control-loop, llm-evaluation, serving-performance, vision-foundations]
---

## 从这里开始

先区分 AI 的层次：机器学习从数据学习规律，深度学习用多层网络，生成式模型生成内容；RAG、agent 和 MCP 属于应用方法或接口体系，不能与模型权重混为一谈。

首轮根据 14 个 GitHub 教材与维护者仓库整理；第二轮加入 9 张 GitHub/开放学习平台资料卡，补齐传统算法、训练实践、统计和工程闭环；第三轮补开发项目、架构与面试。当前共 54 篇笔记、32 张资料卡、9 条路径。八个模块保留为导航；全部篇目、阶段、选修和综合任务见 [AI 系统大纲](../../notes/ai-curriculum/)。

## 八个模块的知识点

| 模块 | 学习目标 | 按顺序阅读 |
| --- | --- | --- |
| 基础与机器学习 | 理解数学、数据划分、训练闭环与奖励学习 | [AI 数学基础：张量、梯度与概率](../../notes/ai-mathematics/)、[机器学习工作流：任务、数据与泛化](../../notes/machine-learning-workflow/)、[深度学习训练：计算图、损失与优化](../../notes/deep-learning-training/)、[强化学习：奖励、价值与策略](../../notes/reinforcement-learning/) |
| 语言模型 | 理解 token、注意力、模型类型、训练与适配 | [Token 与上下文](../../notes/token-context/)、[Transformer：注意力、位置与生成](../../notes/transformer-attention/)、[AI 模型选型：先看任务，再比较模型](../../notes/model-selection/)、[LLM 训练与适配：预训练、SFT、LoRA 与对齐](../../notes/llm-training-adaptation/) |
| 提示与工具接口 | 写任务契约，验证格式、业务和执行边界 | [提示设计：任务、上下文、示例与输出约束](../../notes/prompt-design/)、[结构化输出与工具调用：格式正确之后还要验证](../../notes/structured-output-tools/) |
| 检索增强 | 把入库、向量、召回、排序和证据核验分开 | [Embedding 与向量检索：表示、相似度和索引](../../notes/embeddings-vector-search/)、[RAG 文档管线：解析、清洗、切片与版本](../../notes/rag-ingestion-chunking/)、[RAG 检索：召回、混合搜索与重排](../../notes/rag-retrieval-reranking/)、[让答案回到证据](../../notes/rag-evidence/)、[关键词检索实验](../../notes/keyword-retrieval-lab/) |
| 智能体 | 设计执行循环、状态、记忆、协作与协议 | [智能体执行循环：模型、工具、状态与停止](../../notes/agent-control-loop/)、[上下文与记忆：选择、压缩、隔离与遗忘](../../notes/agent-context-memory/)、[工作流与多智能体：拆解、路由、协作和交接](../../notes/agent-workflows-orchestration/)、[MCP：协议、工具发现、版本与授权边界](../../notes/mcp-tool-boundaries/) |
| 评估 | 用固定样本区分格式、事实、忠实度与任务成功 | [评估基线](../../notes/evaluation-baseline/)、[LLM 评估：样本、评分、评判模型与回归](../../notes/llm-evaluation/)、[RAG 评估：召回、排序、忠实度与正确性](../../notes/rag-evaluation/) |
| 工程与安全 | 测量延迟吞吐，保证权限、数据与外部执行边界 | [AI 推理工程：延迟、缓存、吞吐与复现](../../notes/serving-performance/)、[AI 应用安全：数据、权限、注入与执行](../../notes/ai-security-boundaries/) |
| 视觉、生成与语音 | 理解图像、扩散、VLM、ASR、TTS 的输入输出与评价 | [视觉与视觉语言模型：像素、任务与坐标](../../notes/vision-foundations/)、[扩散与图像生成：噪声、条件、调度器与复现](../../notes/diffusion-generation/)、[语音 AI：音频数据、ASR、TTS 与评估](../../notes/audio-asr-tts/) |

每篇笔记都有知识点、设计或手算示例、失败边界、练习、复习问题和固定版本来源。页头列出前置笔记，页底提供继续探索与路径导航。

## 第二轮补齐的知识点

| 对照发现的缺口 | 新增专题 |
| --- | --- |
| 传统算法与特征讲得较浅 | [特征管线](../../notes/data-feature-pipelines/)、[监督算法](../../notes/supervised-models/)、[无监督/PCA](../../notes/unsupervised-learning/) |
| 训练缺操作层检查 | [优化与正则化](../../notes/optimization-regularization/)、[PyTorch](../../notes/pytorch-training-practice/)、[迁移与增强](../../notes/transfer-learning-augmentation/)、[NLP 任务](../../notes/nlp-task-modeling/) |
| 缺少系统的指标与统计 | [ML 指标与验证](../../notes/ml-metrics-validation/)、[概率校准](../../notes/calibration-uncertainty/)、[公平与解释](../../notes/fairness-explainability/)、[实验统计](../../notes/experiment-statistics/) |
| 没有时序/推荐独立专题 | [时序预测](../../notes/time-series-forecasting/)、[推荐系统](../../notes/recommendation-ranking/) |
| 缺生产生命周期与反馈 | [MLOps](../../notes/mlops-lifecycle/)、[漂移监控](../../notes/data-drift-monitoring/) |

对应平台、访问条件、年份和来源比较见 [系统大纲](../../notes/ai-curriculum/) 及其资料卡。这些缺口是对照本项目后的编辑判断。

## 选一条学习路径

| 路径 | 适合什么目标 | 完成后留下什么 |
| --- | --- | --- |
| [系统学习主线](../../tracks/ai-systematic-learning/) | 从基础到完整 AI 应用概念 | 数学手算、数据划分、模型选型、接口和评估设计 |
| [原有应用入门](../../tracks/ai-app-foundations/) | 想先完成一个不依赖模型 API 的实验 | 真实关键词检索结果与失败分析 |
| [RAG 与智能体工程](../../tracks/ai-application-engineering/) | 已有模型基础，想拆解应用系统 | 文档管线、检索、状态、权限和回归方案 |
| [模型训练与对齐](../../tracks/ai-model-training/) | 想深入参数学习和微调 | 数据/模板/训练/评估的可执行计划 |
| [多模态支线](../../tracks/ai-multimodal-learning/) | 想理解图像与语音任务 | 坐标、生成配置、音频与评估记录表 |
| [传统 ML 支线](../../tracks/ml-foundations-learning/) | 想补齐算法、概率、统计、时序和推荐 | 管线、指标、配对比较和任务边界 |
| [MLOps 支线](../../tracks/mlops-learning/) | 想形成可复现交付与监控闭环 | 版本、测试、发布/回滚、漂移调查 |
| [应用开发实战](../../tracks/ai-app-practice/) | 已有全栈基础，想完成可复核 AI 应用 | 服务契约、RAG/agent 项目、权限实验与评估报告 |
| [架构与面试](../../tracks/ai-architecture-interview/) | 已有项目，想解释容量、故障和设计选择 | 容量成本、SLO、架构决策与案例复盘 |

主线按前置关系安排。支线先检查篇目前置知识，缺哪部分就补哪部分；不要求第一次阅读就完成 GPU 训练或所有 API 实验。

第三轮按“应用工程 → 完整项目 → 架构与面试”衔接，具体顺序与独立完成检查见 [应用实战路线](../../notes/ai-application-roadmap/)。学习任务有完成标准，模型项目的真实结果仍需自己执行。

## 各类 AI 应该怎样理解

文本/代码生成、embedding、reranker、视觉、图像生成、语音和强化学习具有不同输入输出与学习目标；比较时先确定任务，再核对精确模型版本、权重许可、部署方式和评估条件。详细分类与选型表见 [模型选型](../../notes/model-selection/)。

框架、低代码工具和聊天产品可以帮助使用模型，但不能替代数据、证据、评估和权限设计。学习某个厂商时，应将它的当前官方文档填入选型表；本站不把旧课程示例里的产品版本或价格当作现状。

## 怎样复习与记录进度

每篇按四个动作学习：先复述核心概念，再手算或画数据流，完成练习设计，最后检查原始章节。可以在自己的笔记副本记录“已阅读、能复述、已完成练习、已复核结果”与日期；本站没有在线进度同步功能。

检查自己是否能回答：这个模块接收什么、输出什么、依赖什么、怎样失败、怎样验证？如果只能记住缩写，就回到示例与反例。

## 来源与复用原则

底部资料卡记录仓库、访问时间、固定 commit 与许可，笔记底部链接具体章节。本次没有复制课程原文、图表或代码，练习是本站设计；新笔记中的手算与假设不能称为模型运行结果。实际执行的实验包括原有关键词检索和 [权限/缓存实验](../../notes/retrieval-access-cache-lab/)，后者只覆盖自制数据的明确场景。

维护时核对章节变动、依赖和许可，再更新真实核验日期。特别留意：旧 MCP docs 仓库已归档；Ragas 已迁移；Hello Agents 的根许可含非商用与相同方式共享条件；LLM Universe 未发现根许可；MCP 正在迁移许可，不能仅相信旧 README 或 GitHub 标签。依据见各资料卡的固定版本链接。

## 核验记录

2026-10-07：两轮 AI 助手协助搜索与原创整理；第二轮对照 GitHub 及开放课程，查阅章节、快照、许可与访问条件，更新系统大纲及路径。未下载模型权重、运行训练或调用收费模型服务。

2026-10-08：补充四组工程资料、10 篇笔记和两条实践路径，实际复现权限/缓存问题与版本漏更新边界；没有调用模型 API 或发布线上服务。
