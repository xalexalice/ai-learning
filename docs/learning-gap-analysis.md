# 开放 AI 学习资料：第二轮对照与系统补充

核验日期：2026-10-07。对照原有 28 篇笔记，新增 15 篇专题笔记和 1 篇系统大纲、9 张资料卡、2 条路径。当前共 44 篇笔记（42 concept、1 recap、1 实测 lab）、28 张资料卡、7 条路径，保持原有八主题导航。

## 结论与学习入口

原有内容对 LLM、RAG、agent 和多模态的应用概念覆盖较多；传统算法、特征管线、概率与统计、训练操作检查、生产生命周期还较浅，时序和推荐没有独立专题。此次补齐这些部分，并保留原有内容的精确来源。差距判定是本项目编辑分析，不是课程发布者的评价。

- [系统大纲](../src/content/notes/ai-curriculum.md)：全体 44 篇笔记的阶段、前置、必修/任务支线和三个综合任务。
- [知识地图](../src/content/notes/ai-knowledge-map.md)：八主题导航与新增缺口表。
- [21 步主线](../src/content/tracks/ai-systematic-learning.md)：加入特征、算法、指标、优化和 PyTorch。
- [传统 ML 支线](../src/content/tracks/ml-foundations-learning.md)：10 步；后两类任务按目标选修。
- [MLOps 支线](../src/content/tracks/mlops-learning.md)：8 步，版本/测试/统计/发布/监控。
- 原有训练路径扩展为 8 步，多模态扩展为 5 步；RAG/agent 工程 14 步与入门 4 步保留。

## GitHub 与开放平台比较

此次新增来源来自八组教学/维护团队，Google 分为 MLCC 与推荐系统两张卡。比较维度是知识覆盖、材料版本、访问条件与可复用边界，不以 star 或 push 日期排名。

| 来源 | 补充内容 | 版本与日期 | 访问条件 | 许可与复用边界 |
| --- | --- | --- | --- | --- |
| [scikit-learn 用户指南：算法、验证与校准](https://scikit-learn.org/stable/user_guide.html) | 监督/无监督算法、Pipeline、数据泄漏、交叉验证、概率校准和特征重要性。 | 官网 1.9.1；main 快照 2f7da7445dc5；提交 2026-10-07 | 公开指南与源码可读；本次未安装或运行 Python 示例。官网发布版和 main 快照不是同一版本。 | 代码及仓库文档 BSD-3-Clause；第三方数据另查。 |
| [PyTorch 官方教程：训练循环与迁移学习](https://github.com/pytorch/tutorials) | Dataset/DataLoader、autograd、优化、保存加载、冻结和微调。 | main 快照 c80a43460c83；提交 2026-10-05 | 文字与源码公开；本地训练需另配 Python/PyTorch，CPU/GPU 条件由具体实验决定。 | 教程仓库 BSD-3-Clause；示例图片、数据集和权重分别核对。 |
| [fast.ai 实践课程：从完整任务学习深度学习](https://course.fast.ai/) | 先完成任务再拆解模型：梯度下降、迁移学习、图像分类、文本和推荐。 | 2022 课程；course22 快照 230390584ba5；提交 2024-10-08 | 课程免费阅读；Kaggle/Colab 交互运行可能需要账号及计算配额。2024 仓库提交不是课程重录日期。 | course22 快照未发现根 LICENSE；公开可读不等于允许复制再分发，外链书籍另有声明。 |
| [Made With ML：测试、版本与产品工作流](https://madewithml.com/) | 数据处理、实验追踪、数据/行为测试、版本、部署与监控。 | 代码快照 3361aeb8ddfc；提交 2026-03-04 | 公开课程与仓库可读；现场班、云部署及托管工具的访问和费用另计。本次只阅读资料。 | 仓库代码 MIT；网站文字版权声明另核对，不将整站材料都视为 MIT。 |
| [Full Stack Deep Learning：2022 产品工程课程](https://fullstackdeeplearning.com/course/2022/) | 数据管理、训练与服务、发布、反馈及持续学习闭环。 | 2022 课程；官网仓库快照 191019c4ba7a；提交 2026-09-09 | 2022 课程已结束，讲义/视频/实验材料免费公开；网站 2026 更新不代表每节课技术栈都已更新。 | 官网仓库未发现覆盖整站的根 LICENSE；课程公开阅读，未推断转载授权。 |
| [Google ML Crash Course：分类、数据与公平性](https://developers.google.com/machine-learning/crash-course) | 回归/分类、数据表示、泛化、神经网络、生产系统和偏差检查。 | 持续维护网页；分类指标页 2026-01-12 | 公开网页可读；浏览器练习与 Colab 环境、账号或配额要求应逐项检查。 | 网页内容默认 CC-BY-4.0、示例代码 Apache-2.0，以各页例外声明为准。 |
| [Google 推荐系统课程：召回、评分与重排](https://developers.google.com/machine-learning/recommendation) | 内容推荐、协同过滤、矩阵分解、DNN、召回/评分/重排。 | 课程首页更新 2025-08-25 | 课程概念页免费阅读；不保证外部实验或托管算力免费可用。 | 网页内容默认 CC-BY-4.0、示例代码 Apache-2.0，以各页声明为准。 |
| [Stanford CS229：公开历史机器学习讲义](https://cs229.stanford.edu/index.html-backup-summer23) | 监督学习的目标、线性/逻辑回归和损失函数；数学推导作为进阶参考。 | 2023 目录；已读监督学习讲义标注 2018/2019 | 核验的历史讲义公开可读；2026 夏季当前课程大纲/材料需要 Stanford 账号。未尝试获取受限资料。 | 历史讲义未确认可再分发许可；仅链接与原创整理。 |
| [SciPy 统计指南：bootstrap 与置换检验](https://docs.scipy.org/doc/scipy/reference/stats.html) | 配对重采样、置信区间、置换检验、随机数与退化样本的注意事项。 | 已读 API 页面标示 SciPy 1.18.0 | API 文档公开可读；本次统计例子为手算/实验设计，未运行 SciPy。 | SciPy v1.18.0 根 LICENSE.txt 为 BSD-3-Clause；外部参考书和论文另查。 |

课程可免费阅读、代码允许复用、算力免费可用是不同条件。对实际运行没有完成的环境和依赖，不标为已复现。各 GitHub 的 push 时间、默认分支 SHA、章节路径和许可核验保存在 [第二轮证据](open-learning-evidence.json)；网页动态更新按核验时观察记录。

## 缺口怎样对应到笔记

| 知识模块 | 补充前的状况 | 本轮补充 | 学习验收 |
| --- | --- | --- | --- |
| 数据/特征 | 工作流仅概述 | EDA、缺失、编码、缩放、Pipeline 和 fit 隔离 | 画训练/验证/服务管线，指出泄漏 |
| 传统算法 | 回归/分类只有任务定义 | 线性、树、集成、SVM/kNN、聚类/PCA/异常 | 写假设、成本、预处理与共同基线 |
| 训练 | 有梯度与计算图概念 | 优化/正则、DataLoader/autograd、checkpoint、迁移增强 | 标注形状、模式、状态和重载对照 |
| NLP | 以 Transformer/生成应用为主 | 分类、NER 对齐、抽取问答、摘要任务 | 数据/标签/评价契约，避免截断和对齐错误 |
| 指标/可信度 | 评估以 LLM/RAG 为主 | 混淆矩阵、ROC/PR、回归指标、校准、公平、解释 | 手算、阈值理由与整体/切片报告 |
| 实验统计 | 固定样本概念已有 | 配对 bootstrap、区间、置换、独立单位、多重比较 | 写抽样与比较方案，未执行不填区间 |
| 时序/推荐 | 无独立笔记 | horizon/窗口/滚动验证；召回/排序/反馈/冷启动 | 时间轴与曝光/候选评价规范 |
| 工程闭环 | 性能/安全已有 | 数据/行为测试、版本、发布/回滚、监控/漂移 | 可追溯运行及告警调查表 |
| LLM/RAG/agent/多模态 | 已有核心笔记 | 纳入统一大纲与任务支线 | 按前置复用，不重复同一概念 |

## 新增笔记索引

- [AI 系统大纲](../src/content/notes/ai-curriculum.md)
- [数据与特征管线：先划分，再拟合](../src/content/notes/data-feature-pipelines.md)
- [监督学习算法：线性、树、集成与距离](../src/content/notes/supervised-models.md)
- [无监督学习：聚类、降维与异常检测](../src/content/notes/unsupervised-learning.md)
- [优化与正则化：学习率、泛化与训练曲线](../src/content/notes/optimization-regularization.md)
- [机器学习评估：指标、阈值与交叉验证](../src/content/notes/ml-metrics-validation.md)
- [概率校准与不确定性：分数能否支持决策](../src/content/notes/calibration-uncertainty.md)
- [公平性与可解释性：分组评估和解释边界](../src/content/notes/fairness-explainability.md)
- [PyTorch 训练实践：数据、梯度与 checkpoint](../src/content/notes/pytorch-training-practice.md)
- [迁移学习与数据增强：冻结、微调和标签一致性](../src/content/notes/transfer-learning-augmentation.md)
- [NLP 任务建模：分类、标注、问答与生成](../src/content/notes/nlp-task-modeling.md)
- [时序预测：窗口、基线与滚动验证](../src/content/notes/time-series-forecasting.md)
- [推荐系统：召回、排序、反馈与冷启动](../src/content/notes/recommendation-ranking.md)
- [MLOps 生命周期：版本、测试、发布与回滚](../src/content/notes/mlops-lifecycle.md)
- [数据漂移与监控：分布变化不等于质量下降](../src/content/notes/data-drift-monitoring.md)
- [实验统计：配对比较、区间与显著性](../src/content/notes/experiment-statistics.md)

每篇含知识点、原创例子或手算、失败边界、设计练习、复习问题和具体阅读依据。前置关系由机器校验，来源资料卡自动回链笔记。

## 值得借鉴的代码与组织方式

| 来源 | 值得阅读的部分 | 借鉴目标 |
| --- | --- | --- |
| scikit-learn | [compose](https://github.com/scikit-learn/scikit-learn/blob/2f7da7445dc5a8038fe863997aa2beb3ad03f0d4/doc/modules/compose.rst)、[时间 lag 示例](https://github.com/scikit-learn/scikit-learn/blob/2f7da7445dc5a8038fe863997aa2beb3ad03f0d4/examples/applications/plot_time_series_lagged_features.py) | 用 Pipeline 保证折内拟合，用时间实验揭示随机划分的乐观误差 |
| PyTorch | [optimization](https://github.com/pytorch/tutorials/blob/c80a43460c838fa28efa55e5680f3e97781e288e/beginner_source/basics/optimization_tutorial.py)、[saveloadrun](https://github.com/pytorch/tutorials/blob/c80a43460c838fa28efa55e5680f3e97781e288e/beginner_source/basics/saveloadrun_tutorial.py) | 清晰的训练/验证循环、模式、梯度、保存/加载检查 |
| Made With ML | [数据测试](https://github.com/GokuMohandas/Made-With-ML/blob/3361aeb8ddfc2affdba9f545c978c38c85cee764/tests/data/test_dataset.py)、[行为测试](https://github.com/GokuMohandas/Made-With-ML/blob/3361aeb8ddfc2affdba9f545c978c38c85cee764/tests/model/test_behavioral.py) | 将数据契约和模型行为分开测试，而不是只测接口成功 |
| HF 课程 | [token 分类](https://github.com/huggingface/course/blob/8b893f0ede6c781045692a7f892f25a0c92b4805/chapters/en/chapter7/2.mdx) | 样本、subword 标签和评价对齐 |
| FSDL / Google / CS229 / fast.ai | 已核验公开章节和任务教学顺序 | 借鉴概念结构与实验设计；未确认许可的材料不直接复制 |
| SciPy | [bootstrap](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.bootstrap.html)、[置换](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.permutation_test.html) | 看 API 对配对和零假设的区分，不随意重排数据 |

本轮只原创整理和链接，没有导入上游代码、课程原文、图片、答案或数据集。真正复用代码时保留其声明，并核对依赖及嵌套内容许可；仓库许可不覆盖所有权重、外链课程和网站文字。

## 日期、许可与访问核验的关键差异

1. [CS229 当前首页](https://cs229.stanford.edu/)为 2026 夏季课程，当前大纲/材料需要 Stanford 账号；[公开监督学习 PDF](https://cs229.stanford.edu/summer2023/cs229-notes1.pdf)虽位于 2023 目录，内部标注 Fall 2018 与 2019-06-28 的轻微更新。两者不能混称当前开放教材。
2. [FSDL](https://fullstackdeeplearning.com/course/2022/)和 [fast.ai](https://course.fast.ai/)所读课程是 2022 版。网站/仓库后续提交只表明维护活动。原 FSDL 网站仓库地址已重定向至 the-full-stack/the-full-stack-website，以实际仓库记录为准。
3. [scikit-learn 官网](https://scikit-learn.org/stable/user_guide.html)报告 1.9.1；本轮 GitHub main 为独立固定快照，不保证与官网发布版 API 完全相同。[SciPy API](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.bootstrap.html)报告 1.18.0，[AdamW 官方页](https://docs.pytorch.org/docs/2.14/generated/torch.optim.AdamW.html)报告 PyTorch 2.14。
4. [Google 分类指标页](https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall)显示 2026-01-12，[推荐首页](https://developers.google.com/machine-learning/recommendation)与 [偏差评估](https://developers.google.com/machine-learning/crash-course/fairness/evaluating-for-bias)显示 2025-08-25；页面脚注区分 CC-BY-4.0 内容与 Apache-2.0 示例代码。
5. fastai/course22 与 FSDL 官网仓库快照未发现覆盖整仓库的根许可；Made With ML 根 MIT 是代码仓库声明，不把官网全部文字都标成 MIT。本站保留自己原创文字的现有内容政策。

## 尚未展开与验证范围

通用基础与应用工程已形成连贯入口；GNN、因果推断、贝叶斯专修、机器人/控制、深层强化学习和分布式训练没有独立全面展开。按学习目标进入原课程，不宣称已覆盖整个 AI 领域。

本轮没有运行新训练、GPU 推理、云发布、统计检验、模型 API 或真实线上 A/B。手算与虚构例子明确标注；原有关键词实验可继续独立复现。网站验证另见 verification-open-learning.md。

