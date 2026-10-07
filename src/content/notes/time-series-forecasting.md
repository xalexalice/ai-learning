---
slug: time-series-forecasting
title: "时序预测：窗口、基线与滚动验证"
summary: "围绕预测时点组织 lag、季节性和窗口特征，避免未来信息泄漏和随机切分的乐观误差。"
kind: concept
topic: foundations
tags: ["时序","forecasting","TimeSeriesSplit"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["sklearn-user-guide"]
prerequisites: ["data-feature-pipelines","ml-metrics-validation"]
related: ["data-drift-monitoring","experiment-statistics"]
---

## 先画出预测时点

定义采样频率、预测步长 horizon、输入窗口、标签窗口和数据到达延迟。“预测明天工单量”与“预测未来七天总量”是不同任务。趋势、季节性、自相关和结构变化需要分别理解，不能只套随机划分的回归模板。

## 核心知识点

| 知识点 | 设计方式 | 边界 |
| --- | --- | --- |
| lag | 用过去已知的值预测未来 | 当前真实值尚未到达时不能当特征 |
| 滚动统计 | 先移位，再对历史计算均值/最大值 | 直接把当前目标纳入均值会泄漏 |
| 日历/外生变量 | 周期、节假日等预测时可知信息 | 使用未来实测天气代替当时预报会不公平 |
| 简单基线 | 最近一次、上周同期、季节均值 | 复杂模型需在同一 horizon 下胜过基线 |
| 滚动验证 | 多个时间截点训练过去、预测后段 | 不打乱；保留部署时的重训频率 |
| gap 与标签窗口 | 为重叠窗口、延迟等留间隔 | gap 大小由业务与窗口推导，不能盲抄示例 |

不规则时间间隔先检查缺失和采样；连续多步预测要说明直接预测、递归预测还是多输出。递归使用自己的预测，会累积误差。

## 原创手算例子

历史工单量为 10、12、14，下一天预测的三日均值为 12。若目标日真实值为 20，把它纳入后三日均值得到约 15.33，就使用了预测当时未知的数据。

一周季节性任务可以先用上周同一天作为预测。评价按 horizon 与峰值/节假日拆分；整体 MAE 可能掩盖旺季失败。

## 练习与完成标准

画出一张预测时间轴，列每个字段的可用时刻，写最近值/季节基线和三个滚动验证截点。解释 gap，检查统计窗口是否已移位。本篇未下载数据或训练时序模型。

## 复习问题

1. 为什么随机切分通常不能模拟预测未来？
2. 标签覆盖七天时需要检查什么重叠？
3. 线上更新频率为什么要体现在验证方案中？

## 阅读依据与核验范围

- [examples/applications/plot_time_series_lagged_features.py](https://github.com/scikit-learn/scikit-learn/blob/2f7da7445dc5a8038fe863997aa2beb3ad03f0d4/examples/applications/plot_time_series_lagged_features.py)
- [doc/modules/cross_validation.rst](https://github.com/scikit-learn/scikit-learn/blob/2f7da7445dc5a8038fe863997aa2beb3ad03f0d4/doc/modules/cross_validation.rst)

2026-10-07：AI 助手协助原创整理并核对原始章节。示例、手算和练习由本站设计；未执行的任务不作为实验结论。

