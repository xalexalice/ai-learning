# 开发、架构与面试资料对照

2026-10-08 按已确认的“AI 应用工程 → 完整项目 → 架构与面试”路线补充。这是本项目对学习缺口的判断，不是资料发布者对岗位能力的认证。固定版本及章节见 [核验证据](practice-learning-evidence.json)。

## 四组资料

| 资料 | 内容与学习位置 | 版本/更新信息 | 访问与许可 |
| --- | --- | --- | --- |
| [LLM Zoomcamp 实战：RAG、评估与监控](https://github.com/DataTalksClub/llm-zoomcamp) | 从检索和工具调用到完整应用、评估、监控与项目文档，作为应用工程练习参考。 | 默认分支 main，commit c04d02f2ea71；提交日期 2026-09-14，仓库 push 日期 2026-09-15 | 核验快照未发现根 LICENSE，API 未识别许可；公开可读不等于可任意再分发。本站仅原创整理和链接。 |
| [Hugging Face Agents Course：框架与项目实作](https://huggingface.co/learn/agents-course/en/unit0/introduction) | 用 state、node、edge 组织智能体，完成工具组合、Agentic RAG 与评估项目。 | 默认分支 main，commit 3c469e773ec0；提交日期 2026-10-06，仓库 push 日期 2026-10-06 | 仓库根 LICENSE 为 Apache-2.0；数据、模型、课程图片和外链材料分别核对。 |
| [System Design Primer：容量、缓存与设计面试](https://github.com/donnemartin/system-design-primer) | 需求与约束、容量估算、负载、缓存、异步队列、存储和系统设计讨论方法。 | 默认分支 master，commit ae9bbd7b02d9；提交日期 2026-03-20，仓库 push 日期 2026-09-15 | 根 LICENSE.txt 为 CC BY 4.0；外链、引用图片及第三方材料按各自声明核对。 |
| [Google SRE Workbook：SLO 与可靠性实践](https://sre.google/workbook/implementing-slos/) | 定义服务级别指标、目标、错误预算、告警和负载管理，形成服务可靠性的决策依据。 | 官方在线章节未注明具体更新时间；2026-10-08 核验 | 官方在线版可阅读；本次没有核定整本书的再分发许可，只原创整理并链接，不转载正文或图表。 |

提交日期、仓库 push 日期与每个章节更新时间不同。SRE 访问日期不能称为更新日期；课程 cohort 链接也不能直接当作当前认证流程。HF/LLM 项目使用的模型、API、数据、账号与计算费用要单独核对。

## 新知识点与参考位置

| 缺口 | 新笔记 | 参考依据与实际产物 |
| --- | --- | --- |
| 服务接口缺少故障契约 | [AI 服务后端](../src/content/notes/ai-service-backend.md) | WHATWG SSE、OWASP 授权、应用项目；请求/事件表与故障用例 |
| 概念没有完整交付任务 | [RAG 项目](../src/content/notes/rag-capstone-spec.md)、[Agent 验证](../src/content/notes/agent-project-validation.md) | LLM Zoomcamp project/agentic-rag、HF state/node/edge/项目；自己的可运行工程与轨迹 |
| 缓存、撤权与数据更新缺实测 | [权限缓存实验](../src/content/notes/retrieval-access-cache-lab.md) | Primer 缓存、OWASP 授权；本站原创离线脚本及逐项输出 |
| 结果解释与验收较抽象 | [项目评估报告](../src/content/notes/ai-project-evaluation.md) | Zoomcamp evaluation 与已有评估基础；同题基线/候选、分母与失败报告 |
| 系统设计缺算量与取舍 | [容量成本](../src/content/notes/ai-capacity-cost.md)、[系统设计](../src/content/notes/ai-system-design.md) | Primer 与负载管理；手算、数据流和决策记录 |
| 可靠性缺测量和动作 | [SLO](../src/content/notes/ai-slo-reliability.md) | SRE Workbook SLO/告警/负载/过载；指标、预算、降级与回滚 |
| 面试缺项目证据链 | [案例](../src/content/notes/ai-interview-casebook.md)、[实践路线](../src/content/notes/ai-application-roadmap.md) | 以自己的项目回答与复盘；不把课程分数当招聘门槛 |

## 阅读章节

### DataTalksClub/llm-zoomcamp

- [README.md](https://github.com/DataTalksClub/llm-zoomcamp/blob/c04d02f2ea7171d0be1e2b17d555c49651f2b5a3/README.md)
- [project.md](https://github.com/DataTalksClub/llm-zoomcamp/blob/c04d02f2ea7171d0be1e2b17d555c49651f2b5a3/project.md)
- [01-agentic-rag/README.md](https://github.com/DataTalksClub/llm-zoomcamp/blob/c04d02f2ea7171d0be1e2b17d555c49651f2b5a3/01-agentic-rag/README.md)
- [04-evaluation/README.md](https://github.com/DataTalksClub/llm-zoomcamp/blob/c04d02f2ea7171d0be1e2b17d555c49651f2b5a3/04-evaluation/README.md)
- [05-monitoring/README.md](https://github.com/DataTalksClub/llm-zoomcamp/blob/c04d02f2ea7171d0be1e2b17d555c49651f2b5a3/05-monitoring/README.md)

### huggingface/agents-course

- [units/en/unit0/introduction.mdx](https://github.com/huggingface/agents-course/blob/3c469e773ec04e5f338b727ff20e3a6ea823ff81/units/en/unit0/introduction.mdx)
- [units/en/unit2/langgraph/building_blocks.mdx](https://github.com/huggingface/agents-course/blob/3c469e773ec04e5f338b727ff20e3a6ea823ff81/units/en/unit2/langgraph/building_blocks.mdx)
- [units/en/unit3/agentic-rag/agent.mdx](https://github.com/huggingface/agents-course/blob/3c469e773ec04e5f338b727ff20e3a6ea823ff81/units/en/unit3/agentic-rag/agent.mdx)
- [units/en/unit4/introduction.mdx](https://github.com/huggingface/agents-course/blob/3c469e773ec04e5f338b727ff20e3a6ea823ff81/units/en/unit4/introduction.mdx)
- [units/en/unit4/hands-on.mdx](https://github.com/huggingface/agents-course/blob/3c469e773ec04e5f338b727ff20e3a6ea823ff81/units/en/unit4/hands-on.mdx)
- [LICENSE](https://github.com/huggingface/agents-course/blob/3c469e773ec04e5f338b727ff20e3a6ea823ff81/LICENSE)

### donnemartin/system-design-primer

- [README.md](https://github.com/donnemartin/system-design-primer/blob/ae9bbd7b02d90b9866215de185217d33f39ab733/README.md)
- [README-zh-Hans.md](https://github.com/donnemartin/system-design-primer/blob/ae9bbd7b02d90b9866215de185217d33f39ab733/README-zh-Hans.md)
- [LICENSE.txt](https://github.com/donnemartin/system-design-primer/blob/ae9bbd7b02d90b9866215de185217d33f39ab733/LICENSE.txt)

### 官方开放章节

- [Implementing SLOs](https://sre.google/workbook/implementing-slos/)
- [Alerting on SLOs](https://sre.google/workbook/alerting-on-slos/)
- [Managing Load](https://sre.google/workbook/managing-load/)
- [Identifying and Recovering from Overload](https://sre.google/workbook/overload/)
- [Server-sent events](https://html.spec.whatwg.org/multipage/server-sent-events.html)
- [Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

## 使用与验收

先看 [7 步开发路径](../src/content/tracks/ai-app-practice.md)，再用实际项目进入 [6 步架构/面试路径](../src/content/tracks/ai-architecture-interview.md)。工作表在 [项目交付](practice/rag-project-checklist.md)、[评估报告](practice/evaluation-report.md)、[架构设计](practice/architecture-worksheet.md)、[面试复盘](practice/interview-review.md)。

新内容是原创说明、手算和练习；不复制课程原文或示例代码。两篇真实实验均可复现。本轮缓存实验 4/10 → 10/10 只反映十个指定场景，另测到版本未更新会产生旧结果。没有执行完整模型应用、负载测量或生产故障演练。
