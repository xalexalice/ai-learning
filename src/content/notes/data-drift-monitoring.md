---
slug: data-drift-monitoring
title: "数据漂移与监控：分布变化不等于质量下降"
summary: "区分输入、标签先验和概念漂移，结合数据质量、迟到标签及告警调查维护模型。"
kind: concept
topic: engineering
tags: ["数据漂移","概念漂移","监控"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["fsdl-production-course","made-with-ml-course"]
prerequisites: ["mlops-lifecycle"]
related: ["calibration-uncertainty","fairness-explainability","time-series-forecasting"]
---

## 先区分服务故障、数据错误和模型退化

接口超时、字段单位变化、输入人群变化和模型规律失效，处理方法不同。监控应能关联具体模型/数据版本和时间窗口，保留调查证据。

## 漂移类型

| 类型 | 变化 | 例子与边界 |
| --- | --- | --- |
| 输入/协变量漂移 | P(X) 改变 | 新渠道占比变高；可能不影响决策正确率 |
| 标签先验漂移 | P(Y) 改变 | 正例比例变化；严格 label shift 还假定 P(X\|Y) 稳定 |
| 概念漂移 | P(Y\|X) 改变 | 同样输入的目标关系改变，需要标签证据 |
| 数据质量事件 | schema/单位/缺失机制异常 | 金额单位从元改为分，是管线问题，不能只重训 |

输入分布变动不能独自证明概念漂移或性能下降。延迟标签未齐时只能看到代理信号，应明确哪些质量结论尚不能验证。

## 监控维度与动作

数据侧看缺失、范围、类别、新值和分布；服务侧看错误率、延迟、吞吐和资源；模型侧看预测分布、带标签的分数、校准及关键切片；产品侧看实际任务结果。基准窗口、当前窗口、采样和最低样本量要固定，节假日/季节性需解释。

告警流程是发现→检查管线/版本→确认影响→选择修复、回滚或新训练→独立验证。不能让任意分布告警直接触发无条件重训并替换生产模型。

## 原创反例

新渠道用户增加导致输入分布不同，但带标签测试显示各渠道准确率稳定，这是变化信号而非质量失败证明。相反，输入分布近似不变而标签规则改变，模型也可能退化。

如果结果标签一周后才到，当天的“准确率稳定”可能只覆盖早到标签，具有选择偏差；报告覆盖率和标签延迟。

## 练习与完成标准

为虚构工单系统写监控表：字段、窗口、基准版本、最低样本数、告警负责人、调查动作。设计渠道变化、单位错误、标签规则变化三个案例。未连接生产监控或运行漂移检验。

## 复习问题

1. 输入分布改变可以直接证明概念漂移吗？
2. 没有及时标签时能报告哪些事实？
3. 为什么告警后要先排查管线？

## 阅读依据与核验范围

- [docs/course/2022/lecture-6-continual-learning/index.md](https://github.com/the-full-stack/the-full-stack-website/blob/191019c4ba7aa5408c0f2ae9c4517d59d831209d/docs/course/2022/lecture-6-continual-learning/index.md)
- [docs/course/2022/lecture-4-data-management/index.md](https://github.com/the-full-stack/the-full-stack-website/blob/191019c4ba7aa5408c0f2ae9c4517d59d831209d/docs/course/2022/lecture-4-data-management/index.md)

2026-10-07：AI 助手协助原创整理并核对原始章节。示例、手算和练习由本站设计；未执行的任务不作为实验结论。

