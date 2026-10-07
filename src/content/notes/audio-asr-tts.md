---
slug: audio-asr-tts
title: "语音 AI：音频数据、ASR、TTS 与评估"
summary: "从采样率和频谱进入转写与语音合成，区分 WER/CER、自然度、流式延迟和说话人边界。"
kind: concept
topic: multimodal
tags: ["audio","ASR","TTS","WER"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["hf-audio-course"]
prerequisites: ["deep-learning-training","model-selection"]
related: ["vision-foundations","llm-evaluation"]
---
## 输入输出先分清

ASR 把语音变为文字，TTS 把文字变为语音；说话人分离、声音分类和语音翻译是不同任务。转写可用于会议笔记，但标点、说话人、时间戳和事实理解不自动由 ASR 完成。

## 模块知识点

| 模块 | 核心知识点 |
| --- | --- |
| 数字音频 | 采样率、幅度、位深、声道、时长与编码 |
| 表示 | waveform、频谱、spectrogram、mel 表示 |
| 预处理 | 重采样、声道处理、归一化、切分与静音 |
| ASR 架构 | CTC 的对齐与重复折叠；seq2seq 的生成方式 |
| 流式处理 | chunk、重叠、上下文、端点检测与部分结果修正 |
| 说话人与时间 | diarization、时间戳、重叠讲话与错误归属 |
| TTS | 文本规范化、发音、韵律、声学表示与波形生成 |
| 评估 | 转写错误、实时性、可懂度、自然度和说话人适配 |

采样率是每秒样本数，不是波形播放速度的任意标签。16 kHz 的单声道两秒音频约有 32000 个样本；不能只改元数据把 48 kHz 输入“变成”16 kHz，必须正确重采样。

## 指标与边界

WER 可写为 `(S+D+I)/N`，分别计替换、删除、插入与参考词数；插入很多时可能超过 1。中文需要明确分词与规范化方式，CER 按字符计数，是不同口径。

假设参考有五个词，预测含一处替换、无删除、一处插入，WER 为 2/5。该数字是手算示例，不是模型结果。去掉标点、大小写或数字形式会改变评估结果，必须报告规范化规则。

TTS 不应只看频谱损失；同一句文本可能有多种合理语音，应检查可懂度、自然度、发音和目标场景。声音素材及说话人使用授权需要单独确认，不从课程许可推断音色可任意复用。

## 练习与完成标准

用自录且明确同意使用的短音频设计噪声、口音、数字、混合语言和多人讲话样本。写明采样处理、转写规则、WER/CER 与延迟口径。实际运行后再记录错误与试听结果；本次未进行 ASR/TTS 调用或声纹处理。

## 复习问题

1. 改采样率标签为什么不等于重采样？
2. WER 和 CER 为什么不能直接互相比大小？
3. 转写正确是否证明说话人、时间戳与会议结论都正确？

## 阅读依据与核验范围

- [音频数据](https://github.com/huggingface/audio-transformers-course/blob/56b6e8334aef7e0efa0137574f068c968f3f6e1c/chapters/en/chapter1/audio_data.mdx)
- [CTC 架构](https://github.com/huggingface/audio-transformers-course/blob/56b6e8334aef7e0efa0137574f068c968f3f6e1c/chapters/en/chapter3/ctc.mdx)
- [ASR 评估](https://github.com/huggingface/audio-transformers-course/blob/56b6e8334aef7e0efa0137574f068c968f3f6e1c/chapters/en/chapter5/evaluation.mdx)
- [TTS 评估](https://github.com/huggingface/audio-transformers-course/blob/56b6e8334aef7e0efa0137574f068c968f3f6e1c/chapters/en/chapter6/evaluation.mdx)

2026-10-07：AI 助手协助原创整理，核对以上 GitHub 章节；示例与练习为本站设计，未执行的任务不作为实验结论。
