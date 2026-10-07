---
slug: prompt-design
title: "提示设计：任务、上下文、示例与输出约束"
summary: "用可测试的任务说明替代模糊要求，区分零样本、少样本、任务拆解与证据边界。"
kind: concept
topic: prompting
tags: ["prompt","few-shot","上下文"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["genai-beginners-course"]
prerequisites: ["token-context","model-selection"]
related: ["structured-output-tools","ai-security-boundaries","llm-evaluation"]
---
## 提示应该成为任务契约

一个可比较的提示应说明要做什么、可用什么资料、输出什么以及什么情况算失败。角色描述可以补充语气和视角，但不能代替目标、证据与检查规则。

## 核心知识点

| 部分 | 要写清楚的内容 | 反例 |
| --- | --- | --- |
| 任务 | 动词、对象、范围与成功条件 | “分析得专业一点” |
| 上下文 | 哪些资料可信、日期与来源 | 不标明资料是否过期 |
| 约束 | 证据不足、冲突和未知值如何处理 | 要求每个问题都给肯定答案 |
| 示例 | 展示输入到目标输出的映射 | 只给最容易的例子 |
| 输出 | 字段、类型、长度、引用方式 | 只说“返回 JSON” |
| 检查 | 格式、事实、覆盖度、拒答分别验证 | 以回答更长判定更好 |

零样本只给任务，少样本给若干示例。示例会影响格式和判断边界；应包含容易混淆的情况，不能把评估集答案当 few-shot 示例。复杂任务可以拆成提取事实、核验证据、生成回答等阶段，但拆分会增加调用成本与阶段间错误。

## 一个可检查的提示设计

以下为设计文本，没有进行模型调用：

```text
任务：仅依据给定资料回答退换货时限。
资料：每条包含 source_id、发布日期和正文。
规则：找不到时限时返回 unknown；资料冲突时列出冲突来源。
输出：status（supported/unknown/conflict）、answer、source_ids。
检查：每个实质结论都能在 source_ids 对应正文中找到依据。
```

分隔符帮助区分资料与任务，但本身不是安全隔离。检索文本里即使出现“忽略上述规则”，也不能因此获得指令权限。要求模型自检可以辅助发现遗漏，最终仍需独立的程序和证据检查。

## 怎样迭代

固定一组正常、模糊、缺证据、冲突与恶意输入；一次主要改一个因素，保存提示版本与评分。temperature 等参数影响采样行为，不等于正确率，也不保证完全确定。复杂推理题优先检查可验证结果，不把更长的解释当作更可靠的证据。

## 练习与完成标准

把一个模糊请求改成上述六部分任务契约，为它写五个输入和明确预期。设计一个示例偏差反例，再写出独立检查方式。实际调用前只保存任务和预期，不填写虚构评分。

## 复习问题

1. 为什么“你是专家”不能替代评价标准？
2. 少样本示例与测试集有什么边界？
3. 资料里的指令为什么不能与系统任务具有同等权限？

## 阅读依据与核验范围

- [提示基础](https://github.com/microsoft/generative-ai-for-beginners/blob/d8ec07e31c4b32bd283d565c1abd9b58bb5cf2e8/04-prompt-engineering-fundamentals/README.md)
- [提示技术与迭代](https://github.com/microsoft/generative-ai-for-beginners/blob/d8ec07e31c4b32bd283d565c1abd9b58bb5cf2e8/05-advanced-prompts/README.md)

2026-10-07：AI 助手协助原创整理，核对以上 GitHub 章节；示例与练习为本站设计，未执行的任务不作为实验结论。
