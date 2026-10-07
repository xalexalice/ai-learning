---
slug: mlops-lifecycle
title: "MLOps 生命周期：版本、测试、发布与回滚"
summary: "把数据、模型、代码和配置形成可追溯版本，明确数据测试、行为测试与模型发布门槛。"
kind: concept
topic: engineering
tags: ["MLOps","版本管理","发布","回滚"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["made-with-ml-course","fsdl-production-course"]
prerequisites: ["machine-learning-workflow","ml-metrics-validation"]
related: ["serving-performance","data-drift-monitoring","ai-security-boundaries"]
---

## 模型文件不是完整交付

一次可复现运行应关联数据版本、划分、特征/预处理、代码提交、依赖、模型/adapter、配置、种子和指标。实验追踪记录这些关系，模型注册管理候选和发布版本；二者职责不同。

## 生命周期知识点

| 阶段 | 产物 | 验证 |
| --- | --- | --- |
| 数据进入 | schema、标签约定、授权和版本 | 类型、范围、缺失、重复和划分隔离 |
| 训练比较 | 运行 ID、参数、日志、checkpoint | 同一评价条件，与简单基线对照 |
| 测试 | 数据/代码/模型测试 | 正常、异常、边界、群体及行为变化 |
| 打包 | 模型、预处理、映射、依赖 | 加载前后同输入预测一致性 |
| 发布 | 版本、门槛、灰度计划、负责人 | 服务延迟、错误率、质量和回滚可用性 |
| 监控反馈 | 输入、输出、迟到标签、事件记录 | 触发调查，重新训练后再次验证 |

行为测试可检查不改变任务语义的变换是否保持预测，以及改变关键事实时结果是否按预期改变。测试规则先写清，不能让模型自己决定是否通过。

训练与服务必须使用一致的特征含义和预处理，尤其类别映射、时间窗口和缺失处理。单纯容器化不能保证语义一致。

## 原创发布例子

虚构分类器 v2 整体 F1 上升，但某重要类别召回下降。发布门槛应同时包含整体与关键切片质量，不能只按平均值替换 v1。保存可部署的 v1 与对应预处理，定义回滚触发和数据兼容性。

灰度和自动化执行是否允许，需服从项目现有授权及实际平台约束；本篇是学习设计，不会操作真实生产环境。

## 练习与完成标准

填写一次运行的版本清单，设计三条数据测试、两条行为测试、发布门槛和回滚步骤。把指标和日志分开，标明敏感信息处理与保留时间。本次未部署、发布或回滚任何模型。

## 复习问题

1. 为什么数据版本和代码版本都需要保存？
2. 训练与服务差异可以怎样发现？
3. 回滚为什么可能需要同时恢复预处理？

## 阅读依据与核验范围

- [madewithml/data.py](https://github.com/GokuMohandas/Made-With-ML/blob/3361aeb8ddfc2affdba9f545c978c38c85cee764/madewithml/data.py)
- [madewithml/evaluate.py](https://github.com/GokuMohandas/Made-With-ML/blob/3361aeb8ddfc2affdba9f545c978c38c85cee764/madewithml/evaluate.py)
- [tests/data/test_dataset.py](https://github.com/GokuMohandas/Made-With-ML/blob/3361aeb8ddfc2affdba9f545c978c38c85cee764/tests/data/test_dataset.py)
- [tests/model/test_behavioral.py](https://github.com/GokuMohandas/Made-With-ML/blob/3361aeb8ddfc2affdba9f545c978c38c85cee764/tests/model/test_behavioral.py)
- [docs/course/2022/lecture-5-deployment/index.md](https://github.com/the-full-stack/the-full-stack-website/blob/191019c4ba7aa5408c0f2ae9c4517d59d831209d/docs/course/2022/lecture-5-deployment/index.md)

2026-10-07：AI 助手协助原创整理并核对原始章节。示例、手算和练习由本站设计；未执行的任务不作为实验结论。

