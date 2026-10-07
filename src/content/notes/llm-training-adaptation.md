---
slug: llm-training-adaptation
title: "LLM 训练与适配：预训练、SFT、LoRA 与对齐"
summary: "把知识输入、任务学习和偏好优化分开，理解聊天模板、数据质量与微调评估。"
kind: concept
topic: llm
tags: ["SFT","LoRA","DPO","RLHF"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["hf-smol-course","hf-llm-course"]
prerequisites: ["transformer-attention","machine-learning-workflow"]
related: ["reinforcement-learning","model-selection","llm-evaluation"]
---
## 四种过程解决不同问题

预训练从大规模数据学习表示与预测规律；SFT 使用任务示例继续训练；偏好对齐优化符合目标偏好的输出；RAG 在推理时提供外部证据，通常不更新模型参数。把资料放进向量库不能称为训练了一个模型。

## 训练模块知识点

| 模块 | 应掌握的内容 |
| --- | --- |
| 数据集 | 授权、去重、质量、任务覆盖、敏感信息、训练/验证隔离 |
| 聊天模板 | role、特殊 token、结束标记、工具消息；绑定目标 tokenizer |
| SFT | 输入与目标的构造、哪些 token 计算 loss、训练配置与验证 |
| 全量微调 | 更新模型参数；算力、优化器状态与保存成本较高 |
| LoRA / PEFT | 冻结基础模型，学习较少参数；rank、目标层、adapter 兼容性 |
| 偏好数据 | 同一输入的 preferred/rejected 输出及偏好依据 |
| DPO / RLHF | DPO 直接利用成对偏好；典型 RLHF 流程涉及奖励模型与策略优化 |
| 部署与回归 | 保存基础版本、adapter、tokenizer、配置，测试原有能力与新任务 |

LoRA 可理解为对某层权重添加低秩更新 `ΔW=BA`，其中 `A[r,in]`、`B[out,r]`。低秩减少可训练参数，并不保证任务性能，也不意味着整个训练过程无需加载基础模型或显存。

## 怎样判断是否该微调

如果失败来自资料缺失或内容频繁变化，先验证 RAG。如果已有稳定、足量、授权的任务示例，而且基线提示仍无法满足目标，再评估微调。验证集应保留不同表述、任务边界与拒答样本，不能把训练样本换个顺序就当独立评估。

训练 loss 改善不足以说明偏好、事实性、工具使用或原有通用能力改善。对齐方法也不能把不真实的偏好标签自动变成正确事实。

## 练习与完成标准

设计三条虚构指令样本和一对偏好样本，说明好坏依据。写明 loss 是否只算回答部分、数据如何划分，以及保存哪些文件才能恢复。给出“不微调而先检索”的反例。本次未进行微调，未记录训练收益。

## 复习问题

1. SFT、RAG 与偏好对齐分别改变系统的哪部分？
2. adapter 为什么必须绑定基础模型和目标层？
3. 偏好数据中的“更受喜欢”是否等于“事实正确”？

## 阅读依据与核验范围

- [监督微调](https://github.com/huggingface/smol-course/blob/b712705327d1204353a1209e991334d441b4de7e/units/en/unit1/3.md)
- [LoRA 与 PEFT](https://github.com/huggingface/smol-course/blob/b712705327d1204353a1209e991334d441b4de7e/units/en/unit1/3a.md)
- [偏好对齐与 DPO](https://github.com/huggingface/smol-course/blob/b712705327d1204353a1209e991334d441b4de7e/units/en/unit2/1.md)
- [聊天模板](https://github.com/huggingface/course/blob/8b893f0ede6c781045692a7f892f25a0c92b4805/chapters/en/chapter11/2.mdx)
- [RLHF 与 GRPO 入门](https://github.com/huggingface/course/blob/8b893f0ede6c781045692a7f892f25a0c92b4805/chapters/en/chapter12/2.mdx)

2026-10-07：AI 助手协助原创整理，核对以上 GitHub 章节；示例与练习为本站设计，未执行的任务不作为实验结论。
