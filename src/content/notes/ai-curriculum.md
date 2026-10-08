---
slug: ai-curriculum
title: "AI 系统大纲：核心、支线与完成标准"
summary: "对照 GitHub 教材与开放课程，组织 54 篇笔记的前置顺序、知识清单、支线和综合任务。"
kind: recap
topic: foundations
tags: [系统大纲, 知识清单, 开放课程, 查漏补缺]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-08"
lastReviewedAt: "2026-10-08"
sources: [sklearn-user-guide, pytorch-basics-course, fastai-practical-course, google-ml-crash-course, google-recommendation-course, stanford-cs229-archive, made-with-ml-course, fsdl-production-course, scipy-statistics-guide, hf-llm-course]
prerequisites: []
related: [ai-knowledge-map, data-feature-pipelines, ml-metrics-validation, pytorch-training-practice, mlops-lifecycle]
---

## 大纲的范围与使用方式

本大纲面向通用 AI 基础和应用工程，不把所有研究方向都算作初学必修。第二轮对照 scikit-learn、PyTorch、fast.ai、Google、CS229 历史讲义、Made With ML、FSDL 和 SciPy，补充 15 篇专题及本篇大纲。第三轮按应用开发、架构与面试补充。当前共 54 篇笔记、32 张资料卡、9 条路径；关键词检索与权限/缓存两篇包含实际运行的实验。

前置关系表示阅读所需概念。下面将全体笔记编入阶段与支线；主线是起点，专题按任务补读。完成读物不等于具备生产经验，实践成绩需要真实日志支持。

## 核心阶段与全量知识清单

| 阶段 | 对应笔记 | 应能留下的产物 |
| --- | --- | --- |
| 0：导航与数学 | [知识地图](../../notes/ai-knowledge-map/)、本篇大纲、[数学](../../notes/ai-mathematics/) | 张量形状、一步梯度、概率解释及自己的目标 |
| 1：数据与算法 | [工作流](../../notes/machine-learning-workflow/)、[特征管线](../../notes/data-feature-pipelines/)、[监督算法](../../notes/supervised-models/)、[无监督学习](../../notes/unsupervised-learning/) | 数据字典、无泄漏划分、基线和候选比较 |
| 2：训练与适配 | [深度训练](../../notes/deep-learning-training/)、[优化正则](../../notes/optimization-regularization/)、[PyTorch](../../notes/pytorch-training-practice/)、[迁移增强](../../notes/transfer-learning-augmentation/)、[强化学习](../../notes/reinforcement-learning/) | 张量/梯度检查、训练计划、checkpoint 清单与奖励反例 |
| 3：语言任务 | [token](../../notes/token-context/)、[Transformer](../../notes/transformer-attention/)、[选型](../../notes/model-selection/)、[NLP](../../notes/nlp-task-modeling/)、[训练对齐](../../notes/llm-training-adaptation/) | 输入输出契约、标签对齐、模型/adapter 和评估计划 |
| 4：提示与接口 | [提示](../../notes/prompt-design/)、[结构化输出/工具](../../notes/structured-output-tools/) | 格式、业务校验和授权分开的任务契约 |
| 5：检索与证据 | [向量](../../notes/embeddings-vector-search/)、[文档管线](../../notes/rag-ingestion-chunking/)、[检索重排](../../notes/rag-retrieval-reranking/)、[证据](../../notes/rag-evidence/)、[关键词实验](../../notes/keyword-retrieval-lab/) | 索引版本、相关片段标注、引用边界与实验失败记录 |
| 6：智能体 | [执行循环](../../notes/agent-control-loop/)、[记忆](../../notes/agent-context-memory/)、[编排](../../notes/agent-workflows-orchestration/)、[MCP](../../notes/mcp-tool-boundaries/) | 状态、停止、工具结果、隔离及交接规范 |
| 7：评估与统计 | [基线](../../notes/evaluation-baseline/)、[ML 指标](../../notes/ml-metrics-validation/)、[校准](../../notes/calibration-uncertainty/)、[公平解释](../../notes/fairness-explainability/)、[实验统计](../../notes/experiment-statistics/)、[LLM 评估](../../notes/llm-evaluation/)、[RAG 评估](../../notes/rag-evaluation/) | 固定样本、指标分母、分组错误、配对比较和局限 |
| 8：工程闭环 | [性能](../../notes/serving-performance/)、[安全](../../notes/ai-security-boundaries/)、[MLOps](../../notes/mlops-lifecycle/)、[漂移](../../notes/data-drift-monitoring/) | 版本追踪、发布/回滚条件、监控与调查流程 |
| 9：任务支线 | [时序](../../notes/time-series-forecasting/)、[推荐](../../notes/recommendation-ranking/)、[视觉](../../notes/vision-foundations/)、[扩散](../../notes/diffusion-generation/)、[语音](../../notes/audio-asr-tts/) | 预测时点、候选/反馈、坐标、生成配置及模态指标 |
| 10：开发实战 | [应用路线](../../notes/ai-application-roadmap/)、[服务后端](../../notes/ai-service-backend/)、[RAG 项目](../../notes/rag-capstone-spec/)、[权限/缓存实验](../../notes/retrieval-access-cache-lab/)、[Agent 验证](../../notes/agent-project-validation/)、[项目报告](../../notes/ai-project-evaluation/) | 服务契约、自己的项目与逐题结果、失败恢复及交付说明 |
| 11：架构与面试 | [容量成本](../../notes/ai-capacity-cost/)、[系统设计](../../notes/ai-system-design/)、[SLO](../../notes/ai-slo-reliability/)、[面试案例](../../notes/ai-interview-casebook/) | 容量手算、数据流、决策、可靠性与证据复盘 |

评估不应等到训练之后才学习：阶段 1 就选划分和指标；阶段 7 再系统深化统计、校准与应用质量。时序、推荐和多模态按目标选修，不能替代共同的数据/评估基础。

## 九条路径怎样选

| 路径 | 定位 |
| --- | --- |
| [21 步系统主线](../../tracks/ai-systematic-learning/) | 第一次建立全景；补齐数据、算法、评估和训练实践后进入应用 |
| [4 步应用入门](../../tracks/ai-app-foundations/) | 先运行已有 Node 关键词实验，学习怎样记录失败 |
| [传统 ML 支线](../../tracks/ml-foundations-learning/) | 深入数据、算法、无监督、概率、统计、时序和推荐 |
| [RAG/智能体工程](../../tracks/ai-application-engineering/) | 使用已有基础设计检索、证据、工具、状态和权限 |
| [训练与对齐](../../tracks/ai-model-training/) | 从计算图、优化、PyTorch 和迁移进入 Transformer/LoRA/对齐 |
| [多模态](../../tracks/ai-multimodal-learning/) | 视觉、迁移增强、生成与语音的任务规范 |
| [MLOps 闭环](../../tracks/mlops-learning/) | 数据与行为测试、版本、统计、发布和监控 |
| [7 步开发实战](../../tracks/ai-app-practice/) | 从全栈服务基础进入 RAG/agent 综合任务、权限实验与报告 |
| [6 步架构与面试](../../tracks/ai-architecture-interview/) | 用已有项目练容量、边界、SLO、评估解释和案例 |

支线列出的前置笔记若没掌握，先补读，不将路径清单误认为零基础直接可运行的命令。

## 对照开放课程后的补充判断

| 外部资料的重点 | 原有覆盖 | 本轮处理 |
| --- | --- | --- |
| scikit-learn / Google MLCC | 仅工作流概览，传统算法与指标较浅 | 补特征、监督/无监督、指标、校准、公平解释与时序 |
| PyTorch / fast.ai | 有训练概念，缺具体流程检查 | 补优化、训练实践、迁移增强；扩展 NLP 任务 |
| Google 推荐课程 | 没有独立推荐笔记 | 补多阶段推荐、反馈、冷启动与离线排序 |
| CS229 公开历史讲义 / SciPy | 数学基础和评估概念已有，统计比较较浅 | 保留数学笔记，补算法与配对统计方法 |
| Made With ML / FSDL | 推理性能与安全已有，生命周期不完整 | 补数据/模型测试、版本、发布/回滚与漂移监控 |
| 首轮 HF / Microsoft / Datawhale 等 | LLM、RAG、agent、多模态已有核心笔记 | 接入本大纲，扩展任务与训练支线，保留原始来源 |
| 第三轮 LLM Zoomcamp / HF Agents / Primer / SRE Workbook | 概念覆盖较全，但项目交付与架构回答缺证据链 | 补服务、项目验收、缓存实测、评估报告、容量、可靠性和面试复盘 |

这是本站编辑判断，不是课程发布者的评定。免费可读、开放代码许可、免费算力是三个问题，不能混写。CS229 当前课程材料需要校内账号；这里使用公开历史讲义，监督学习 PDF 内标注 2018/2019，不能称为 2026 新教材。

## 三个综合任务与验收

1. 表格预测：自制或有授权的数据，定义时点/标签，按实体或时间划分；比较常量与简单模型，报告混淆矩阵或回归误差，保存管线版本。时序任务另外写 horizon 与窗口。
2. 资料问答：先复现关键词实验，再设计或实现文档索引、证据与拒答；固定问题集，分开统计召回、答案和工具成功。未运行向量/模型时只交设计，不填收益。
3. 模型交付：准备运行清单、数据/行为测试、质量与性能门槛、回滚计划和漂移调查表。使用同样样本作配对比较，说明切片与样本量限制。

每个任务留下环境、输入版本、实际输出、失败和真实日期。需要 GPU、模型服务或真实线上实验的部分，在具备授权与资源后执行；本站不自动为练习启动这些服务。

## 进阶范围与复习

图神经网络、因果推断、贝叶斯深层推导、机器人/控制、多智能体强化学习和分布式训练专修尚未独立展开。已有强化学习是状态/奖励/价值/策略入门；不要把它当完整 RL 工程课程。按目标进入原始课程，并用同一笔记模板继续积累。

复习时检查：能否说明一个模块的数据从何而来、输出是什么、怎样失败、如何独立验证？能否区分设计、手算和实测？最后再尝试不看笔记复述每个阶段。

## 阅读依据与核验范围

- [scikit-learn 用户指南](https://scikit-learn.org/stable/user_guide.html)
- [PyTorch 教程源码](https://github.com/pytorch/tutorials/tree/c80a43460c838fa28efa55e5680f3e97781e288e/beginner_source)
- [Google MLCC](https://developers.google.com/machine-learning/crash-course)、[推荐课程](https://developers.google.com/machine-learning/recommendation)
- [fast.ai](https://course.fast.ai/)、[CS229 历史目录](https://cs229.stanford.edu/index.html-backup-summer23)
- [Made With ML](https://madewithml.com/)、[FSDL 2022](https://fullstackdeeplearning.com/course/2022/)
- [SciPy 配对 bootstrap](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.bootstrap.html)

2026-10-07：AI 助手协助搜索、对照公开大纲和原始章节，原创组织本大纲；访问条件、固定版本和许可见资料卡。未执行新增训练或统计实验。

2026-10-08：全量索引补到 54 篇；来源与许可见 [应用实战路线](../../notes/ai-application-roadmap/) 的四张资料卡。两条新路径保留已有基础为前置；只有新增权限/缓存实验实测，完整模型项目仍是执行任务。
