---
slug: diffusion-generation
title: "扩散与图像生成：噪声、条件、调度器与复现"
summary: "理解迭代去噪、潜空间与生成管线，区分模型、scheduler、引导强度与可重复运行条件。"
kind: concept
topic: multimodal
tags: ["diffusion","scheduler","image-generation"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["hf-diffusers-docs"]
prerequisites: ["deep-learning-training","vision-foundations"]
related: ["model-selection","serving-performance"]
---
## 从噪声到图像

经典扩散建模学习加噪过程的逆向生成，通过多步预测和去噪逐渐得到样本。潜空间方法在压缩表示中进行生成，再解码为图像。现代生成架构存在差异，不能把所有图像模型都等同为同一套 UNet/DDPM 实现。

## 生成模块知识点

| 模块 | 应掌握 |
| --- | --- |
| 文本编码器 | 将提示变为条件表示；长度与 tokenizer 依模型而定 |
| 去噪/生成模型 | 在当前状态和条件下预测更新所需量 |
| Scheduler | 时间步、噪声计划与采样更新；需与目标模型兼容 |
| VAE 等编解码器 | 图像与潜表示的转换，不是所有模型都相同 |
| 条件与 guidance | 文本、参考图、结构条件与引导强度 |
| 图生图/局部编辑 | 初始图、强度、mask 与保留区域的约定 |
| 推理配置 | steps、分辨率、精度、随机状态、内存策略 |
| 复现与许可 | 权重 revision、依赖、硬件、模型卡与素材授权 |

增加 steps 或 guidance 并不保证更好。过强条件可能损害自然度，更多步骤会增加成本；改变 scheduler、精度或模型版本后，结果也不能只按提示相同来比较。

## 怎样记录一次实验

保存提示、负向提示（仅当管线支持）、seed/随机生成器状态、尺寸、步数、scheduler 配置、模型 revision、库版本、设备、精度、输入图及 mask 的来源。固定 seed 有助于比较，不代表不同硬件和后端会逐像素一致。

以“红色方块位于蓝色圆形左侧”为设计任务，评价对象应包括颜色、数量、空间关系和编辑保留区域，而不是只凭“看起来漂亮”。Diffusers 的 Apache 许可覆盖库；下载的模型权重和参考图需要分别核验。

## 练习与完成标准

设计一个只改变单个因素的三组比较方案，写出视觉评分规则与完整配置表。实际生成后才保留图片、失败案例与耗时；本次没有生成图像、下载权重或宣称哪组更好。

## 复习问题

1. 模型权重与 scheduler 分别影响什么？
2. 为什么相同 seed 不保证跨平台完全一致？
3. 图生图强度与局部编辑 mask 需要核对哪些约定？

## 阅读依据与核验范围

- [条件图像生成](https://github.com/huggingface/diffusers/blob/c6df88a511a98740646ee55577b590c9852650ce/docs/source/en/using-diffusers/conditional_image_generation.md)
- [调度器](https://github.com/huggingface/diffusers/blob/c6df88a511a98740646ee55577b590c9852650ce/docs/source/en/using-diffusers/schedulers.md)
- [内存优化](https://github.com/huggingface/diffusers/blob/c6df88a511a98740646ee55577b590c9852650ce/docs/source/en/optimization/memory.md)

2026-10-07：AI 助手协助原创整理，核对以上 GitHub 章节；示例与练习为本站设计，未执行的任务不作为实验结论。
