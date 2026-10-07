---
slug: ml-foundations-learning
title: "传统机器学习支线：从特征到可信评估"
summary: "系统学习特征、监督/无监督算法、指标、校准、公平、统计、时序和推荐，形成无泄漏比较方案。"
topic: foundations
tags: [系统学习, 第二轮补充, 练习]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
steps:
  - title: "数据与特征管线：先划分，再拟合"
    note: data-feature-pipelines
    task: "画出数值/类别处理器，标注每个 fit 的数据来源。"
  - title: "监督学习算法：线性、树、集成与距离"
    note: supervised-models
    task: "为回归/分类列基线、线性、树与其他候选的比较口径。"
  - title: "无监督学习：聚类、降维与异常检测"
    note: unsupervised-learning
    task: "写缩放、聚类/降维参数与人工验证计划。"
  - title: "机器学习评估：指标、阈值与交叉验证"
    note: ml-metrics-validation
    task: "手算混淆矩阵和 MAE/RMSE，选择实体或时间划分。"
  - title: "概率校准与不确定性：分数能否支持决策"
    note: calibration-uncertainty
    task: "写训练/校准/测试隔离与可靠性图的字段。"
  - title: "公平性与可解释性：分组评估和解释边界"
    note: fairness-explainability
    task: "设计整体/分组报告，说明特征重要性不等于因果。"
  - title: "实验统计：配对比较、区间与显著性"
    note: experiment-statistics
    task: "设计配对比较及独立抽样单位，不填未经计算的区间。"
  - title: "Embedding 与向量检索：表示、相似度和索引"
    note: embeddings-vector-search
    task: "手算点积与余弦，解释近邻和表示的边界。"
  - title: "时序预测：窗口、基线与滚动验证"
    note: time-series-forecasting
    task: "画预测时点、horizon、lag/滚动窗口及基线。"
  - title: "推荐系统：召回、排序、反馈与冷启动"
    note: recommendation-ranking
    task: "画召回/排序/重排，注明曝光、冷启动和评价候选集合。"
---

## 前置与目标

先读数学与机器学习工作流，遇到向量表示先补 embedding 笔记。共 10 步；时序与推荐是任务选修，可根据目标先完成前七步。 全量关系见 [系统大纲](../../notes/ai-curriculum/)。

## 学习方法

每步先复述概念，完成表格、手算或设计任务，再核对原始资料；缺失的前置通过篇目前置卡补读。区分假设示例与真正执行的日志。

## 完成标准

留下数据字典、划分说明、基线与候选表、指标/校准/群体报告方案。时序与推荐分别增加时间轴和反馈定义。这里是概念、手算与设计任务，没有训练成绩。

## 核验范围

2026-10-07：按笔记前置关系组织；没有启动训练、生产发布、云服务或统计实验。

