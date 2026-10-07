---
slug: mlops-learning
title: "MLOps 支线：从可复现运行到监控反馈"
summary: "串联数据、指标、统计、版本、性能、安全和漂移，定义模型发布与回滚的验证闭环。"
topic: engineering
tags: [系统学习, 第二轮补充, 练习]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
steps:
  - title: "数据与特征管线：先划分，再拟合"
    note: data-feature-pipelines
    task: "列训练与服务共用的预处理与字段语义。"
  - title: "监督学习算法：线性、树、集成与距离"
    note: supervised-models
    task: "写候选算法和简单基线，固定比较条件。"
  - title: "机器学习评估：指标、阈值与交叉验证"
    note: ml-metrics-validation
    task: "确定质量指标、切片、阈值与划分。"
  - title: "实验统计：配对比较、区间与显著性"
    note: experiment-statistics
    task: "设计同样本配对比较与区间，不把离线差异当因果收益。"
  - title: "MLOps 生命周期：版本、测试、发布与回滚"
    note: mlops-lifecycle
    task: "写数据/行为测试、运行清单与发布/回滚门槛。"
  - title: "AI 推理工程：延迟、缓存、吞吐与复现"
    note: serving-performance
    task: "设计负载、质量、延迟、吞吐和版本记录。"
  - title: "AI 应用安全：数据、权限、注入与执行"
    note: ai-security-boundaries
    task: "明确权限、敏感日志和外部执行边界。"
  - title: "数据漂移与监控：分布变化不等于质量下降"
    note: data-drift-monitoring
    task: "写数据/服务/模型监控、标签延迟和告警调查流程。"
---

## 前置与目标

先掌握数学和机器学习工作流。共 8 步，复用现有性能与安全笔记；实际部署、训练和线上实验需要具体平台与授权，此路径先完成可核查设计。 全量关系见 [系统大纲](../../notes/ai-curriculum/)。

## 学习方法

每步先复述概念，完成表格、手算或设计任务，再核对原始资料；缺失的前置通过篇目前置卡补读。区分假设示例与真正执行的日志。

## 完成标准

交付一次运行的版本清单、数据/行为测试、模型质量与性能门槛、回滚步骤和监控表。每个告警区分管线错误、分布变化和质量退化；记录负责人和证据，不自动替换模型。

## 核验范围

2026-10-07：按笔记前置关系组织；没有启动训练、生产发布、云服务或统计实验。

