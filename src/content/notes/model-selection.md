---
slug: model-selection
title: "AI 模型选型：先看任务，再比较模型"
summary: "区分产品、模型、权重和服务；用任务、版本、数据边界与固定样本建立可复查的选型表。"
kind: concept
topic: llm
tags: ["模型选型","model-card","开放权重"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["genai-beginners-course","hf-smol-course"]
prerequisites: ["token-context"]
related: ["prompt-design","llm-training-adaptation","llm-evaluation","vision-foundations","audio-asr-tts"]
---
## 先区分四个层次

聊天产品提供界面和工具；模型定义计算与能力；权重是参数文件；服务负责部署、鉴权、限流和计费。产品同名不表示后端版本不变，开放权重也不等于完整开源，更不自动允许任意商业用途。

“各种 AI”首先应按任务分类，而不是把聊天产品、向量模型和 agent 框架放在同一个排行榜。

## 各类模型需要了解什么

| 类型 | 典型输入输出 | 重点核对 |
| --- | --- | --- |
| 文本/代码生成模型 | 文本或消息 → token 序列 | 基础或指令版本、模板、上下文、工具能力 |
| Embedding 模型 | 文本 → 向量 | 维度、语言、池化、归一化、query/document 模板 |
| Reranker | 查询与候选 → 分数/排序 | 最大长度、语言、延迟、分数含义 |
| 视觉/视觉语言模型 | 图像及问题 → 标签、框、掩码或文本 | 分辨率、坐标、视觉 token、小字与空间能力 |
| 图像/视频生成模型 | 文本及条件 → 图像或帧 | 权重许可、调度器、资源消耗与一致性 |
| 语音模型 | 音频 → 文本，或文本 → 音频 | 采样率、语言、流式能力、说话人与授权 |
| 传统预测模型 | 特征 → 数值或类别 | 标签、特征可用时点、泛化与漂移 |

## 选型表怎么写

先固定目标场景，例如“中文资料问答，证据不足时拒答”。记录精确 model ID/revision、服务或本地部署方式、模型卡链接、权重许可、输入限制、所需工具与输出格式、数据留存政策，再记录同一组样本的质量、延迟与实际费用。

对 API，记录观测日期、输入输出计量与限流条件；对本地权重，记录硬件、精度、依赖、显存与吞吐。价格、功能和版本会变化，本站没有给出当前厂商排名或未经测量的性能数字。

## 选择优化方式

缺最新资料通常先考虑检索与来源维护；固定格式问题先做模板、约束和验证；稳定任务模式可评估微调；服务吞吐问题检查推理部署。更大的模型不是对所有问题都最优的答案。

## 练习与完成标准

为文本问答、图片问答、语音转写分别填写一张选型表，未知字段写“未核验”并列出官方核验入口。准备五个固定问题，包含一个缺证据问题；先定义评分规则，实际调用后再记录结果。本次未调用模型或比较厂商。

## 复习问题

1. 为什么不能用库代码的 Apache/MIT 许可代替模型许可？
2. 基础模型和指令模型为什么可能需要不同输入处理？
3. 什么时候应改检索或模板，而不是换模型？

## 阅读依据与核验范围

- [比较不同模型](https://github.com/microsoft/generative-ai-for-beginners/blob/d8ec07e31c4b32bd283d565c1abd9b58bb5cf2e8/02-exploring-and-comparing-different-llms/README.md)
- [Base 与 Instruct 模型](https://github.com/huggingface/smol-course/blob/b712705327d1204353a1209e991334d441b4de7e/units/en/unit1/2.md)
- [视觉语言模型](https://github.com/huggingface/smol-course/blob/b712705327d1204353a1209e991334d441b4de7e/units/en/unit3/1.md)

2026-10-07：AI 助手协助原创整理，核对以上 GitHub 章节；示例与练习为本站设计，未执行的任务不作为实验结论。
