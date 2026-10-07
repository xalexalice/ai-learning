# GitHub AI 学习资料与笔记索引

首轮核验日期：2026-10-07。本批筛选 14 个教材或维护者仓库，新增 24 篇原创概念笔记、14 张资料卡、4 条学习路径；保留原有 4 篇笔记与入门路径。首轮共 28 篇笔记、19 张资料卡、5 条路径。本页保留首轮来源与模块索引；第二轮另补 16 篇笔记、9 张资料卡、2 条路径，当前总量为 44 / 28 / 7，详见 [开放学习对照与补充](learning-gap-analysis.md)。

## 学习入口

网站入口为知识笔记中的“AI 知识地图”，首页主路径为“AI 系统学习主线”。

- [知识地图](../src/content/notes/ai-knowledge-map.md)：8 模块目录、学习方法和支线选择。
- [系统主线](../src/content/tracks/ai-systematic-learning.md)：扩展为 21 步，按前置顺序学习。
- [应用工程](../src/content/tracks/ai-application-engineering.md)：14 步，RAG/agent/MCP/评估/安全。
- [训练与对齐](../src/content/tracks/ai-model-training.md)：扩展为 8 步，训练实践/迁移/强化学习/SFT/LoRA/偏好。
- [多模态](../src/content/tracks/ai-multimodal-learning.md)：扩展为 5 步，选型/CV/VLM/迁移/生成/语音。
- [原有入门](../src/content/tracks/ai-app-foundations.md)：4 步，包含可实际运行的关键词实验。

## 模块覆盖

| 模块 | 笔记 |
| --- | --- |
| 基础与机器学习 | [ai-mathematics](../src/content/notes/ai-mathematics.md)、[machine-learning-workflow](../src/content/notes/machine-learning-workflow.md)、[deep-learning-training](../src/content/notes/deep-learning-training.md)、[reinforcement-learning](../src/content/notes/reinforcement-learning.md) |
| 语言模型 | [token-context](../src/content/notes/token-context.md)、[transformer-attention](../src/content/notes/transformer-attention.md)、[model-selection](../src/content/notes/model-selection.md)、[llm-training-adaptation](../src/content/notes/llm-training-adaptation.md) |
| 提示与工具接口 | [prompt-design](../src/content/notes/prompt-design.md)、[structured-output-tools](../src/content/notes/structured-output-tools.md) |
| 检索增强 | [embeddings-vector-search](../src/content/notes/embeddings-vector-search.md)、[rag-ingestion-chunking](../src/content/notes/rag-ingestion-chunking.md)、[rag-retrieval-reranking](../src/content/notes/rag-retrieval-reranking.md)、[rag-evidence](../src/content/notes/rag-evidence.md)、[keyword-retrieval-lab](../src/content/notes/keyword-retrieval-lab.md) |
| 智能体 | [agent-control-loop](../src/content/notes/agent-control-loop.md)、[agent-context-memory](../src/content/notes/agent-context-memory.md)、[agent-workflows-orchestration](../src/content/notes/agent-workflows-orchestration.md)、[mcp-tool-boundaries](../src/content/notes/mcp-tool-boundaries.md) |
| 评估 | [evaluation-baseline](../src/content/notes/evaluation-baseline.md)、[llm-evaluation](../src/content/notes/llm-evaluation.md)、[rag-evaluation](../src/content/notes/rag-evaluation.md) |
| 工程与安全 | [serving-performance](../src/content/notes/serving-performance.md)、[ai-security-boundaries](../src/content/notes/ai-security-boundaries.md) |
| 视觉、生成与语音 | [vision-foundations](../src/content/notes/vision-foundations.md)、[diffusion-generation](../src/content/notes/diffusion-generation.md)、[audio-asr-tts](../src/content/notes/audio-asr-tts.md) |

全部新增笔记包含核心知识点、手算或设计示例、适用边界、练习与完成标准、复习问题，以及具体章节的固定 commit 链接。前置知识和继续探索沿用 frontmatter 关系，参与站内主题、搜索和 RSS。

## 搜索与筛选依据

在 GitHub 搜索 `AI learning notes`、`LLM RAG 学习`、`hello-agents org:datawhalechina`、`course org:huggingface`，并用维护者仓库和官网入口核对课程。优先选择原作者教材与项目文档；中文 Datawhale 课程作为补充，不使用个人解答仓库代替原始依据。查看目录后，只读与本批模块相关的章节，不声称逐页审阅完整课程。

下表日期是默认分支最新提交日期，不是每章更新时间。机器可读证据记录提交时间、push 时间、完整 SHA、归档状态、许可入口、阅读路径和笔记映射，见 [核验快照](learning-source-evidence.json)。

| 来源 | 学习内容 | 默认分支提交 / SHA | 许可范围 |
| --- | --- | --- | --- |
| [d2l-ai/d2l-zh](https://github.com/d2l-ai/d2l-zh) | 线性代数、微积分、概率、自动微分、泛化、Transformer、计算机视觉 | 2023-08-18 / e6b18ccea714 | Apache-2.0（根 LICENSE；外链书籍、数据与图片另核对） |
| [microsoft/ML-For-Beginners](https://github.com/microsoft/ML-For-Beginners) | 回归、分类、数据清洗、模型评估与应用 | 2026-09-14 / de2d4e122364 | MIT；sketchnotes 为 CC-BY-SA-4.0 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | 模型选型、提示、函数调用、RAG、应用安全 | 2026-09-18 / d8ec07e31c4b | MIT |
| [microsoft/ai-agents-for-beginners](https://github.com/microsoft/ai-agents-for-beginners) | 工具使用、规划、多智能体、记忆、可信执行 | 2026-09-09 / 25b7985f3b2d | MIT |
| [huggingface/course](https://github.com/huggingface/course) | Transformer、tokenizer、数据、语义检索、聊天模板、LLM 训练 | 2026-10-06 / 8b893f0ede6c | Apache-2.0 |
| [huggingface/smol-course](https://github.com/huggingface/smol-course) | SFT、LoRA/PEFT、DPO、视觉语言模型 | 2026-10-06 / b712705327d1 | Apache-2.0 |
| [huggingface/diffusers](https://github.com/huggingface/diffusers) | 扩散生成、条件控制、scheduler、内存优化 | 2026-10-06 / c6df88a511a9 | Apache-2.0（库代码；模型权重另有许可） |
| [huggingface/audio-transformers-course](https://github.com/huggingface/audio-transformers-course) | 采样率、频谱、CTC、ASR、TTS 与音频评估 | 2026-10-06 / 56b6e8334aef | Apache-2.0 |
| [huggingface/deep-rl-class](https://github.com/huggingface/deep-rl-class) | 状态、动作、奖励、Q-learning、策略梯度与 PPO | 2026-10-06 / dbc53d835828 | Apache-2.0 |
| [datawhalechina/llm-universe](https://github.com/datawhalechina/llm-universe) | 文档读取、清洗、切片、向量库、问答与评估 | 2026-08-27 / 77beb748047e | 未发现根 LICENSE，GitHub API 未识别许可证 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 智能体范式、记忆、上下文工程与工具评估 | 2026-09-29 / 4b014ad47e26 | CC-BY-NC-SA-4.0（根 LICENSE.txt；子项目可能另有许可） |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | KV cache、prefix caching、推理指标与基准 | 2026-10-07 / aecb717f10bc | Apache-2.0 |
| [modelcontextprotocol/modelcontextprotocol](https://github.com/modelcontextprotocol/modelcontextprotocol) | 2026-07-28 规范、版本协商、tools 与授权安全 | 2026-10-06 / 0a11bf68c7ec | 许可迁移中：新代码/规范 Apache-2.0，普通文档 CC-BY-4.0，部分历史贡献保留 MIT |
| [vibrantlabsai/ragas](https://github.com/vibrantlabsai/ragas) | faithfulness、context precision/recall、factual correctness | 2026-02-24 / 298b68274234 | Apache-2.0 |

## 版本与许可差异

- [旧 MCP docs](https://github.com/modelcontextprotocol/docs) 已归档，改用 [当前规范仓库](https://github.com/modelcontextprotocol/modelcontextprotocol)。本批核对 2026-07-28 规范，不混用旧版初始化流程。
- Ragas 旧地址为 `explodinggradients/ragas`，本批使用 [vibrantlabsai/ragas](https://github.com/vibrantlabsai/ragas) 的实际快照。指标文档含新旧 API，运行时需核对安装版本。
- Hello Agents 根 LICENSE.txt 为 CC-BY-NC-SA-4.0，不能笼统标为 MIT。子项目可能另有许可，本批仅链接与原创整理。
- LLM Universe 的核验快照未发现根 LICENSE，GitHub API 也未识别许可。本批不复制原文、图表和代码，不推断可任意商用。
- MCP LICENSE 明确处于迁移期：新代码/规范 Apache-2.0，普通文档 CC-BY-4.0，部分未获重许可同意的历史贡献保留 MIT；旧 README 的 MIT 描述不足以概括当前范围。
- Deep RL README 明确低维护，部分实践功能不可用。选它提供理论来源，不保证课程环境全部可运行。
- 仓库代码许可证不能替代模型权重、数据集、音色、图片或外链内容的许可证。D2L 根 LICENSE 与 Microsoft 插图子目录的声明分别记录，未重新分发教材或插图。

许可结论以每张 [资料卡](../src/content/resources/) 和 JSON 快照中的固定版本 LICENSE 链接为依据。

## 值得借鉴的学习方法

D2L 的“概念→形状/公式→例子→练习”适合理解原理；Microsoft 的任务场景和知识检查适合建立应用思路；Hugging Face 的输入格式、数据与版本记录适合形成实验习惯；Ragas 的分模块指标适合定位错误；vLLM 的指标口径适合性能比较；Datawhale 的中文模块组织适合交叉阅读。

本次借鉴知识结构和学习方法，没有移植上游代码。字段表、虚构案例、手算和练习由本站原创设计。新的训练、API、向量检索、生成、语音与 MCP 实践未执行；只有原有关键词实验有实际结果。后续实测应记录环境、输入、版本、结果、失败和真实日期，再新增 lab 类型笔记。

## 具体阅读章节

## d2l-ai/d2l-zh

先读数学预备知识与线性网络，再读多层感知机；注意力和视觉按支线学习。

- [chapter_preliminaries/linear-algebra.md](https://github.com/d2l-ai/d2l-zh/blob/e6b18ccea71451a55fcd861d7b96fddf2587b09a/chapter_preliminaries/linear-algebra.md)
- [chapter_preliminaries/autograd.md](https://github.com/d2l-ai/d2l-zh/blob/e6b18ccea71451a55fcd861d7b96fddf2587b09a/chapter_preliminaries/autograd.md)
- [chapter_linear-networks/linear-regression.md](https://github.com/d2l-ai/d2l-zh/blob/e6b18ccea71451a55fcd861d7b96fddf2587b09a/chapter_linear-networks/linear-regression.md)
- [chapter_multilayer-perceptrons/underfit-overfit.md](https://github.com/d2l-ai/d2l-zh/blob/e6b18ccea71451a55fcd861d7b96fddf2587b09a/chapter_multilayer-perceptrons/underfit-overfit.md)
- [chapter_multilayer-perceptrons/backprop.md](https://github.com/d2l-ai/d2l-zh/blob/e6b18ccea71451a55fcd861d7b96fddf2587b09a/chapter_multilayer-perceptrons/backprop.md)
- [chapter_attention-mechanisms/transformer.md](https://github.com/d2l-ai/d2l-zh/blob/e6b18ccea71451a55fcd861d7b96fddf2587b09a/chapter_attention-mechanisms/transformer.md)
- [chapter_computer-vision/object-detection-dataset.md](https://github.com/d2l-ai/d2l-zh/blob/e6b18ccea71451a55fcd861d7b96fddf2587b09a/chapter_computer-vision/object-detection-dataset.md)
- [chapter_convolutional-neural-networks/channels.md](https://github.com/d2l-ai/d2l-zh/blob/e6b18ccea71451a55fcd861d7b96fddf2587b09a/chapter_convolutional-neural-networks/channels.md)
- [chapter_preliminaries/calculus.md](https://github.com/d2l-ai/d2l-zh/blob/e6b18ccea71451a55fcd861d7b96fddf2587b09a/chapter_preliminaries/calculus.md)
- [chapter_preliminaries/probability.md](https://github.com/d2l-ai/d2l-zh/blob/e6b18ccea71451a55fcd861d7b96fddf2587b09a/chapter_preliminaries/probability.md)
- [chapter_computer-vision/semantic-segmentation-and-dataset.md](https://github.com/d2l-ai/d2l-zh/blob/e6b18ccea71451a55fcd861d7b96fddf2587b09a/chapter_computer-vision/semantic-segmentation-and-dataset.md)

## microsoft/ML-For-Beginners

从回归和分类章节建立传统机器学习基线；示例数据集、插图许可分别核对。

- [2-Regression/1-Tools/README.md](https://github.com/microsoft/ML-For-Beginners/blob/de2d4e12236445198213a0711855e348e7253cd4/2-Regression/1-Tools/README.md)
- [4-Classification/1-Introduction/README.md](https://github.com/microsoft/ML-For-Beginners/blob/de2d4e12236445198213a0711855e348e7253cd4/4-Classification/1-Introduction/README.md)
- [3-Web-App/1-Web-App/README.md](https://github.com/microsoft/ML-For-Beginners/blob/de2d4e12236445198213a0711855e348e7253cd4/3-Web-App/1-Web-App/README.md)

## microsoft/generative-ai-for-beginners

按模型比较→提示→函数调用→RAG→安全阅读；课程中的模型名和云服务配置不代表本站选型。

- [02-exploring-and-comparing-different-llms/README.md](https://github.com/microsoft/generative-ai-for-beginners/blob/d8ec07e31c4b32bd283d565c1abd9b58bb5cf2e8/02-exploring-and-comparing-different-llms/README.md)
- [04-prompt-engineering-fundamentals/README.md](https://github.com/microsoft/generative-ai-for-beginners/blob/d8ec07e31c4b32bd283d565c1abd9b58bb5cf2e8/04-prompt-engineering-fundamentals/README.md)
- [05-advanced-prompts/README.md](https://github.com/microsoft/generative-ai-for-beginners/blob/d8ec07e31c4b32bd283d565c1abd9b58bb5cf2e8/05-advanced-prompts/README.md)
- [11-integrating-with-function-calling/README.md](https://github.com/microsoft/generative-ai-for-beginners/blob/d8ec07e31c4b32bd283d565c1abd9b58bb5cf2e8/11-integrating-with-function-calling/README.md)
- [15-rag-and-vector-databases/README.md](https://github.com/microsoft/generative-ai-for-beginners/blob/d8ec07e31c4b32bd283d565c1abd9b58bb5cf2e8/15-rag-and-vector-databases/README.md)
- [13-securing-ai-applications/README.md](https://github.com/microsoft/generative-ai-for-beginners/blob/d8ec07e31c4b32bd283d565c1abd9b58bb5cf2e8/13-securing-ai-applications/README.md)

## microsoft/ai-agents-for-beginners

先读 STUDY_GUIDE 和工具使用，再读规划、记忆与可信智能体；不要直接搬用旧 SDK 调用。

- [STUDY_GUIDE.md](https://github.com/microsoft/ai-agents-for-beginners/blob/25b7985f3b2dc37a84f4a7387ccd3c9f0e5b1595/STUDY_GUIDE.md)
- [03-agentic-design-patterns/README.md](https://github.com/microsoft/ai-agents-for-beginners/blob/25b7985f3b2dc37a84f4a7387ccd3c9f0e5b1595/03-agentic-design-patterns/README.md)
- [04-tool-use/README.md](https://github.com/microsoft/ai-agents-for-beginners/blob/25b7985f3b2dc37a84f4a7387ccd3c9f0e5b1595/04-tool-use/README.md)
- [06-building-trustworthy-agents/README.md](https://github.com/microsoft/ai-agents-for-beginners/blob/25b7985f3b2dc37a84f4a7387ccd3c9f0e5b1595/06-building-trustworthy-agents/README.md)
- [07-planning-design/README.md](https://github.com/microsoft/ai-agents-for-beginners/blob/25b7985f3b2dc37a84f4a7387ccd3c9f0e5b1595/07-planning-design/README.md)
- [08-multi-agent/README.md](https://github.com/microsoft/ai-agents-for-beginners/blob/25b7985f3b2dc37a84f4a7387ccd3c9f0e5b1595/08-multi-agent/README.md)
- [13-agent-memory/README.md](https://github.com/microsoft/ai-agents-for-beginners/blob/25b7985f3b2dc37a84f4a7387ccd3c9f0e5b1595/13-agent-memory/README.md)

## huggingface/course

重点阅读 Transformer 原理、FAISS 语义检索、聊天模板；中文翻译和英文原章可交叉核对。

- [chapters/en/chapter1/4.mdx](https://github.com/huggingface/course/blob/8b893f0ede6c781045692a7f892f25a0c92b4805/chapters/en/chapter1/4.mdx)
- [chapters/en/chapter6/7.mdx](https://github.com/huggingface/course/blob/8b893f0ede6c781045692a7f892f25a0c92b4805/chapters/en/chapter6/7.mdx)
- [chapters/en/chapter11/1.mdx](https://github.com/huggingface/course/blob/8b893f0ede6c781045692a7f892f25a0c92b4805/chapters/en/chapter11/1.mdx)
- [chapters/en/chapter12/1.mdx](https://github.com/huggingface/course/blob/8b893f0ede6c781045692a7f892f25a0c92b4805/chapters/en/chapter12/1.mdx)
- [chapters/en/chapter5/6.mdx](https://github.com/huggingface/course/blob/8b893f0ede6c781045692a7f892f25a0c92b4805/chapters/en/chapter5/6.mdx)
- [chapters/en/chapter11/2.mdx](https://github.com/huggingface/course/blob/8b893f0ede6c781045692a7f892f25a0c92b4805/chapters/en/chapter11/2.mdx)
- [chapters/en/chapter12/2.mdx](https://github.com/huggingface/course/blob/8b893f0ede6c781045692a7f892f25a0c92b4805/chapters/en/chapter12/2.mdx)

## huggingface/smol-course

阅读已存在的 unit1/2/3 文件；README 的未来计划不视为已发布内容。实际训练需另核对硬件与模型卡。

- [units/en/unit1/2.md](https://github.com/huggingface/smol-course/blob/b712705327d1204353a1209e991334d441b4de7e/units/en/unit1/2.md)
- [units/en/unit1/3.md](https://github.com/huggingface/smol-course/blob/b712705327d1204353a1209e991334d441b4de7e/units/en/unit1/3.md)
- [units/en/unit1/3a.md](https://github.com/huggingface/smol-course/blob/b712705327d1204353a1209e991334d441b4de7e/units/en/unit1/3a.md)
- [units/en/unit2/1.md](https://github.com/huggingface/smol-course/blob/b712705327d1204353a1209e991334d441b4de7e/units/en/unit2/1.md)
- [units/en/unit3/1.md](https://github.com/huggingface/smol-course/blob/b712705327d1204353a1209e991334d441b4de7e/units/en/unit3/1.md)

## huggingface/diffusers

先理解 pipeline 的组件，再看条件生成与 scheduler；不能用库许可证代替模型权重许可。

- [docs/source/en/using-diffusers/conditional_image_generation.md](https://github.com/huggingface/diffusers/blob/c6df88a511a98740646ee55577b590c9852650ce/docs/source/en/using-diffusers/conditional_image_generation.md)
- [docs/source/en/using-diffusers/schedulers.md](https://github.com/huggingface/diffusers/blob/c6df88a511a98740646ee55577b590c9852650ce/docs/source/en/using-diffusers/schedulers.md)
- [docs/source/en/optimization/memory.md](https://github.com/huggingface/diffusers/blob/c6df88a511a98740646ee55577b590c9852650ce/docs/source/en/optimization/memory.md)

## huggingface/audio-transformers-course

从音频数据开始，再对照 ASR/TTS 的输入输出与评估章节。示例音频与数据集许可单独检查。

- [chapters/en/chapter1/audio_data.mdx](https://github.com/huggingface/audio-transformers-course/blob/56b6e8334aef7e0efa0137574f068c968f3f6e1c/chapters/en/chapter1/audio_data.mdx)
- [chapters/en/chapter3/ctc.mdx](https://github.com/huggingface/audio-transformers-course/blob/56b6e8334aef7e0efa0137574f068c968f3f6e1c/chapters/en/chapter3/ctc.mdx)
- [chapters/en/chapter5/evaluation.mdx](https://github.com/huggingface/audio-transformers-course/blob/56b6e8334aef7e0efa0137574f068c968f3f6e1c/chapters/en/chapter5/evaluation.mdx)
- [chapters/en/chapter6/evaluation.mdx](https://github.com/huggingface/audio-transformers-course/blob/56b6e8334aef7e0efa0137574f068c968f3f6e1c/chapters/en/chapter6/evaluation.mdx)

## huggingface/deep-rl-class

重点用于理论学习。README 明确处于低维护状态，部分实践功能不可用；本次未复现其训练代码。

- [units/en/unit1/rl-framework.mdx](https://github.com/huggingface/deep-rl-class/blob/dbc53d83582884d06fb2a4b9e388405afdd34b18/units/en/unit1/rl-framework.mdx)
- [units/en/unit2/q-learning.mdx](https://github.com/huggingface/deep-rl-class/blob/dbc53d83582884d06fb2a4b9e388405afdd34b18/units/en/unit2/q-learning.mdx)
- [units/en/unit8/intuition-behind-ppo.mdx](https://github.com/huggingface/deep-rl-class/blob/dbc53d83582884d06fb2a4b9e388405afdd34b18/units/en/unit8/intuition-behind-ppo.mdx)

## datawhalechina/llm-universe

以 C3 搭建知识库和 C5 评估为中文补充；只链接与独立整理，未复制代码、图表或课程段落。

- [docs/C3/C3.md](https://github.com/datawhalechina/llm-universe/blob/77beb748047e8a0d8ff708716606a8e0b132dc45/docs/C3/C3.md)
- [docs/C5/C5.md](https://github.com/datawhalechina/llm-universe/blob/77beb748047e8a0d8ff708716606a8e0b132dc45/docs/C5/C5.md)

## datawhalechina/hello-agents

对照第八、九、十二章理解概念；本项目不复制其代码、图片或文本，商用复用须检查具体许可。

- [docs/chapter8/第八章 记忆与检索.md](https://github.com/datawhalechina/hello-agents/blob/4b014ad47e2658af24b59f21e7bdb3f89a66205e/docs/chapter8/第八章%20记忆与检索.md)
- [docs/chapter9/第九章 上下文工程.md](https://github.com/datawhalechina/hello-agents/blob/4b014ad47e2658af24b59f21e7bdb3f89a66205e/docs/chapter9/第九章%20上下文工程.md)
- [docs/chapter12/第十二章 智能体性能评估.md](https://github.com/datawhalechina/hello-agents/blob/4b014ad47e2658af24b59f21e7bdb3f89a66205e/docs/chapter12/第十二章%20智能体性能评估.md)

## vllm-project/vllm

先读 metrics 与 prefix caching；Paged Attention 页面自称历史设计说明，不能视为所有后端的当前实现。

- [docs/design/paged_attention.md](https://github.com/vllm-project/vllm/blob/aecb717f10bccbaae441d43910ae660a8f2e4e3c/docs/design/paged_attention.md)
- [docs/design/prefix_caching.md](https://github.com/vllm-project/vllm/blob/aecb717f10bccbaae441d43910ae660a8f2e4e3c/docs/design/prefix_caching.md)
- [docs/design/metrics.md](https://github.com/vllm-project/vllm/blob/aecb717f10bccbaae441d43910ae660a8f2e4e3c/docs/design/metrics.md)
- [docs/benchmarking/README.md](https://github.com/vllm-project/vllm/blob/aecb717f10bccbaae441d43910ae660a8f2e4e3c/docs/benchmarking/README.md)

## modelcontextprotocol/modelcontextprotocol

本次固定阅读 2026-07-28 规范；旧 docs 仓库已归档。SDK 支持版本需另核对，不能假设旧初始化流程适用于新版。

- [docs/specification/2026-07-28/index.mdx](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/0a11bf68c7ec4473526ec15589f592afcd12d1e8/docs/specification/2026-07-28/index.mdx)
- [docs/specification/2026-07-28/basic/versioning.mdx](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/0a11bf68c7ec4473526ec15589f592afcd12d1e8/docs/specification/2026-07-28/basic/versioning.mdx)
- [docs/specification/2026-07-28/server/tools.mdx](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/0a11bf68c7ec4473526ec15589f592afcd12d1e8/docs/specification/2026-07-28/server/tools.mdx)
- [docs/specification/2026-07-28/basic/authorization/security-considerations.mdx](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/0a11bf68c7ec4473526ec15589f592afcd12d1e8/docs/specification/2026-07-28/basic/authorization/security-considerations.mdx)

## vibrantlabsai/ragas

按评估对象与所需字段学习指标；文档包含新旧 API 示例，执行前需固定实际安装版本与评判模型。

- [docs/concepts/metrics/available_metrics/faithfulness.md](https://github.com/vibrantlabsai/ragas/blob/298b68274234c060deacab3cf5fb52aa3a20e885/docs/concepts/metrics/available_metrics/faithfulness.md)
- [docs/concepts/metrics/available_metrics/context_precision.md](https://github.com/vibrantlabsai/ragas/blob/298b68274234c060deacab3cf5fb52aa3a20e885/docs/concepts/metrics/available_metrics/context_precision.md)
- [docs/concepts/metrics/available_metrics/context_recall.md](https://github.com/vibrantlabsai/ragas/blob/298b68274234c060deacab3cf5fb52aa3a20e885/docs/concepts/metrics/available_metrics/context_recall.md)
- [docs/concepts/metrics/available_metrics/factual_correctness.md](https://github.com/vibrantlabsai/ragas/blob/298b68274234c060deacab3cf5fb52aa3a20e885/docs/concepts/metrics/available_metrics/factual_correctness.md)
