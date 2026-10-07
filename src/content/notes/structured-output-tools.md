---
slug: structured-output-tools
title: "结构化输出与工具调用：格式正确之后还要验证"
summary: "区分 JSON、schema、工具提议和实际执行，建立类型、业务、权限与幂等检查。"
kind: concept
topic: prompting
tags: ["JSON-schema","tool-calling","validation"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["genai-beginners-course","agents-beginners-course"]
prerequisites: ["prompt-design"]
related: ["agent-control-loop","mcp-tool-boundaries","ai-security-boundaries"]
---
## 四层正确性

JSON 能解析，只证明语法合法；schema 通过，只证明声明的结构约束满足；业务正确需要检查内容与状态；允许执行还需要鉴权与授权。结构化输出约束不能证明事实正确，也不能自动赋予工具权限。

## 知识点与检查位置

| 层次 | 应掌握 | 检查例子 |
| --- | --- | --- |
| 序列化 | 合法 JSON、编码、大小限制 | 是否能解析，是否截断 |
| Schema | required、类型、enum、额外字段、嵌套 | count 必须是非负整数 |
| 业务 | 字段关系、状态、来源存在性 | end 不早于 start，source_id 可查到 |
| 工具定义 | 名称、描述、input schema、输出约定 | 模型是否选了正确工具 |
| 执行边界 | 服务端权限、允许对象、超时与预算 | 当前用户能否读取目标资源 |
| 结果回传 | call ID、失败类型、工具输出 | 不能把执行失败写成成功 |
| 幂等 | 重试、去重、请求标识 | 同一写入重试不会重复创建 |

## 设计示例

假设模型提议调用 `lookup_note({slug:"rag-evidence"})`，程序先验证 slug 格式与工具白名单，再检查该笔记是否允许当前用户读取，最后返回结果。模型生成的 `user_id` 不能代替经过认证的用户身份。

一个事实提取结果即使是 `{"status":"supported","source_ids":["missing"]}`，也可能符合字段类型，却引用不存在的来源。需要程序检查 source_id 存在，并独立核验结论是否被支持。

典型流程是“模型提出调用→程序验证并执行→工具结果回传→模型继续或结束”。不能仅看到模型说“已保存”就判定保存成功。工具返回的文本也属于外部数据，可能包含错误或注入内容。

## 练习与完成标准

为只读资料查询写一份 schema 和五个失败样本：缺字段、类型错误、未知对象、越权对象、工具超时。给每个失败定义处理结果。再设计写入工具的幂等键与成功证据，但本次不执行写入或 API 调用。

## 复习问题

1. JSON/schema/业务/授权分别验证什么？
2. 模型能否通过传入另一人的 user_id 获得其权限？
3. 一次调用超时后，为什么不能默认“没有执行”？

## 阅读依据与核验范围

- [函数调用流程](https://github.com/microsoft/generative-ai-for-beginners/blob/d8ec07e31c4b32bd283d565c1abd9b58bb5cf2e8/11-integrating-with-function-calling/README.md)
- [工具使用模式](https://github.com/microsoft/ai-agents-for-beginners/blob/25b7985f3b2dc37a84f4a7387ccd3c9f0e5b1595/04-tool-use/README.md)

2026-10-07：AI 助手协助原创整理，核对以上 GitHub 章节；示例与练习为本站设计，未执行的任务不作为实验结论。
