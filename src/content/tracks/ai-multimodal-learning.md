---
slug: ai-multimodal-learning
title: "多模态支线：视觉、图像生成与语音"
summary: "按输入输出分别学习 CV/VLM、扩散生成与 ASR/TTS，为每类任务定义预处理、配置和评估。"
topic: multimodal
tags: [系统学习, 知识点, 练习]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
steps:
  - title: "AI 模型选型：先看任务，再比较模型"
    note: model-selection
    task: "填写三类任务的模型选型表，标记尚未核验的字段。"
  - title: "视觉与视觉语言模型：像素、任务与坐标"
    note: vision-foundations
    task: "区分标签、框、掩码与文字输出，手算 resize 后坐标。"
  - title: "扩散与图像生成：噪声、条件、调度器与复现"
    note: diffusion-generation
    task: "写三组单因素比较计划及完整生成配置，不填虚构结果。"
  - title: "语音 AI：音频数据、ASR、TTS 与评估"
    note: audio-asr-tts
    task: "手算 WER，写采样处理、转写规范与 TTS 评价规则。"
---

## 前置与目标

先掌握深度学习和基本模型选型。此支线的目标是分清不同模态任务，知道哪些输入变换会改变坐标、时间或语义，并为结果设计评价依据。

## 学习方法

先用自制图片做坐标手算，再为图像生成写单因素比较计划，最后设计采样率、转写与试听检查。视频问题需要保留帧与时间依据，不把抽帧结果当完整事件记录。

## 完成标准

留下视觉输入规范与标注、图像生成配置表、ASR/TTS 样本表和各自评分规则。实际使用素材、模型与声音时核对授权；本次不包含模型运行的分数或生成文件。

## 核验范围

2026-10-07：4 步支线；没有执行视觉推理、图像生成、语音转写或音色训练。
