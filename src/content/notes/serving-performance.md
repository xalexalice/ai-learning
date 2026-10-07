---
slug: serving-performance
title: "AI 推理工程：延迟、缓存、吞吐与复现"
summary: "区分 prefill、decode 和端到端延迟，理解 KV/prefix cache、批处理与量化的工程取舍。"
kind: concept
topic: engineering
tags: ["serving","KV-cache","TTFT","observability"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["vllm-serving-docs"]
prerequisites: ["transformer-attention","model-selection"]
related: ["llm-evaluation","ai-security-boundaries"]
---
## 用户感知与服务器指标分开看

端到端延迟包含排队、模型计算、网络与应用处理。prefill 处理输入上下文，decode 逐步生成输出；长输入、长输出和高并发造成的瓶颈可能不同。

## 工程知识点

| 模块 | 重点学习 |
| --- | --- |
| 延迟 | TTFT、相邻输出间隔、TPOT、端到端延迟及统计口径 |
| 吞吐 | 请求/秒、输入/输出 token/秒；不能脱离输入分布比较 |
| KV cache | 保存历史注意力键值，显存随请求和长度变化 |
| Prefix cache | 复用共享前缀计算；命中依赖内容、顺序和实际实现 |
| 批处理 | 调度多个请求，提高资源利用，也影响排队与尾延迟 |
| 精度/量化 | 权重和计算表示、硬件支持、内存与质量回归 |
| 可观测性 | 请求 ID、版本、错误、队列、缓存、分位数与资源使用 |
| 可靠性 | 超时、取消、限流、重试、降级和版本回滚 |

vLLM 文档区分相邻流式输出间隔与每请求 TPOT；输出一次可能包含多个 token，聚合方式也不同，不能随意互换。容量比较应至少固定模型 revision、硬件、后端、精度、并发、输入长度与输出限制。

## 缓存的收益与边界

相同前缀可避免重复 prefill；它不等于缓存整段答案，也不保证减少每个 decode 步骤。某些系统会改变模板或插入动态字段，影响缓存命中。

Paged Attention 页面是历史设计说明，用于理解块状 KV 管理的动机；当前后端实现以目标版本为准。减少权重精度可能降低内存占用，但是否更快、质量是否保持，都需要对应硬件与任务实测。

## 练习与完成标准

设计短输入/长输出、长输入/短输出和高并发三组负载。列出应采集的 p50/p95 延迟、吞吐、失败率和质量，说明冷缓存与热缓存分别怎样比较。先写实验计划；本次未启动 vLLM、GPU 服务或性能压测。

## 复习问题

1. TTFT 很好但总耗时很长，可能需要看什么？
2. 前缀缓存为什么可能改善 prefill，却不解决长输出问题？
3. 为什么不同长度和并发下的 token/秒不能直接排名？

## 阅读依据与核验范围

- [推理指标](https://github.com/vllm-project/vllm/blob/aecb717f10bccbaae441d43910ae660a8f2e4e3c/docs/design/metrics.md)
- [前缀缓存](https://github.com/vllm-project/vllm/blob/aecb717f10bccbaae441d43910ae660a8f2e4e3c/docs/design/prefix_caching.md)
- [Paged Attention 历史设计](https://github.com/vllm-project/vllm/blob/aecb717f10bccbaae441d43910ae660a8f2e4e3c/docs/design/paged_attention.md)
- [基准测试入口](https://github.com/vllm-project/vllm/blob/aecb717f10bccbaae441d43910ae660a8f2e4e3c/docs/benchmarking/README.md)

2026-10-07：AI 助手协助原创整理，核对以上 GitHub 章节；示例与练习为本站设计，未执行的任务不作为实验结论。
