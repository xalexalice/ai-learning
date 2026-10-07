---
slug: vision-foundations
title: "视觉与视觉语言模型：像素、任务与坐标"
summary: "从图像张量、分类、检测和分割进入视觉问答，明确预处理、空间信息与文档理解边界。"
kind: concept
topic: multimodal
tags: ["computer-vision","VLM","OCR"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["d2l-zh-course","hf-smol-course"]
prerequisites: ["deep-learning-training","model-selection"]
related: ["diffusion-generation","audio-asr-tts","llm-evaluation"]
---
## 先区分视觉任务

分类给整张图一个或多个标签；检测给目标类别与框；语义分割给像素类别；实例分割还区分同类的不同对象；OCR 识别文字；视觉语言模型把视觉信息与语言任务连接起来。能回答图片问题不等于具备可靠的精密测量能力。

## 模块知识点

| 模块 | 核心知识点 |
| --- | --- |
| 输入表示 | 高宽、通道、颜色空间、dtype、数值范围与批次轴 |
| 预处理 | resize、crop、归一化、方向与目标坐标同步 |
| CNN | 卷积核、局部感受野、通道、步长与池化 |
| 视觉 Transformer | 图像 patch、位置表示与视觉 token |
| 标注 | 类别、框坐标、掩码；像素/归一化及边界约定 |
| VLM | 视觉编码器、连接组件、语言模型与输入模板 |
| 文档理解 | OCR、版面、表格、阅读顺序、页码和出处 |
| 评估 | 分类、框/掩码、文字与问答应分别定义指标 |

图像张量常有 `[B,C,H,W]` 或 `[B,H,W,C]` 两种布局，不能只看维度数量。RGB 与 BGR 混用、缩放后未更新框坐标，都可能让程序运行但结果错误。

## 坐标示例与多模态边界

假设图从 1000×800 缩小为 500×400，像素框的四个坐标应按相同尺度转换。若同时裁剪，需先考虑坐标原点偏移；归一化坐标则需要确认具体定义。这是几何示例，未运行视觉模型。

VLM 可生成图像描述，但小字、计数、空间关系与表格单位应通过固定样本检查。视频还需关注帧采样、时间顺序和音画对齐，不能把几张抽帧的描述当成完整事件证据。复杂文档可对照 OCR/布局解析结果，并保存页面位置。

## 练习与完成标准

对一张自制图分别定义分类标签、两个检测框和分割区域。手算 resize 后坐标，并设计小字、旋转、表格、遮挡与空图五种测试。说明每种任务的预期输出。本次未调用 VLM/OCR 或记录视觉准确率。

## 复习问题

1. 分类、检测、语义分割和实例分割输出怎样不同？
2. 裁剪为什么除了改变大小，还改变坐标原点？
3. 视频问答为什么需要保留时间与抽帧依据？

## 阅读依据与核验范围

- [多通道图像](https://github.com/d2l-ai/d2l-zh/blob/e6b18ccea71451a55fcd861d7b96fddf2587b09a/chapter_convolutional-neural-networks/channels.md)
- [目标检测数据](https://github.com/d2l-ai/d2l-zh/blob/e6b18ccea71451a55fcd861d7b96fddf2587b09a/chapter_computer-vision/object-detection-dataset.md)
- [语义分割](https://github.com/d2l-ai/d2l-zh/blob/e6b18ccea71451a55fcd861d7b96fddf2587b09a/chapter_computer-vision/semantic-segmentation-and-dataset.md)
- [视觉语言模型](https://github.com/huggingface/smol-course/blob/b712705327d1204353a1209e991334d441b4de7e/units/en/unit3/1.md)

2026-10-07：AI 助手协助原创整理，核对以上 GitHub 章节；示例与练习为本站设计，未执行的任务不作为实验结论。
