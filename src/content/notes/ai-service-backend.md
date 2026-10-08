---
slug: ai-service-backend
title: "AI 服务后端：流式响应、取消与重试"
summary: "把模型应用接入服务工程：定义请求契约、流式事件、截止时间、幂等和身份传播。"
kind: concept
topic: engineering
tags: ["SSE","幂等","取消","后端"]
status: published
publishedAt: "2026-10-08"
updatedAt: "2026-10-08"
lastReviewedAt: "2026-10-08"
sources: ["llm-zoomcamp-practice","system-design-primer"]
prerequisites: ["structured-output-tools","ai-security-boundaries"]
related: ["rag-capstone-spec","ai-slo-reliability","retrieval-access-cache-lab"]
---

## 请求契约先于模型调用

一个知识助手服务需要明确输入长度、任务类型、身份来源、可读资料范围、请求 ID、超时及返回格式。身份应由认证链路得到；模型输出、用户正文和工具参数里的 user_id 都不能自行扩大权限。

入库/更新常是异步任务，应有 job ID、状态、错误与可重试规则；问答请求可以返回完整响应或事件流。前端看到文字，不能直接推断服务已经成功结束。

## 服务知识点

| 环节 | 需要实现与记录 | 常见失败 |
| --- | --- | --- |
| 流式输出 | 元数据、增量、错误、完成事件；客户端按协议解析 | 把网络 chunk 当完整事件，或断线后仍显示成功 |
| 截止时间 | 请求整体 deadline，分配检索/模型/工具子预算 | 每层各等完整超时，总耗时失控 |
| 取消 | 前端取消向下游传播并检查资源释放 | 页面关闭但服务继续运行、收费或写入 |
| 重试 | 可重试错误、次数、退避、总时限 | 重试风暴；工具写入被重复执行 |
| 幂等 | 操作键、请求参数指纹、结果状态与保存期限 | 同一个键用于不同动作，或只在进程内去重 |
| 限流/背压 | 身份、租户和资源预算；队列容量与拒绝行为 | 无界排队使请求普遍超时 |
| 可观测性 | request/trace ID、阶段时间、版本、状态 | 日志只留下答案，不能定位检索或执行错误 |

SSE 使用 text/event-stream 和空行分隔事件；浏览器原生 EventSource 的标准接口以 URL 建立连接，不能像普通 fetch 任意设置请求方法或认证头。需要 POST 输入时可采用 fetch 流式读取并自行解析，或先创建任务再订阅事件，按实际认证方式选择。

EventSource 的自动重连和 Last-Event-ID 不会自动完成业务去重；服务器仍需有事件身份、保留窗口和恢复规则。成功完成与错误结束必须在 UI 中区分。

## 原创失败案例

工具执行了“创建记录”，但响应在网络中丢失。客户端直接重试可能创建两条记录。应先用同一操作 ID 查询或恢复已有结果，业务层保证重复提交行为，而不是仅把模型 temperature 改低。

两个用户发出同样问题，缓存答案也可能包含不同权限的资料；请求相同不意味着可复用结果。下一个练习可复现这个问题。

## 练习与完成标准

写一个请求 schema 和流式事件表，模拟输入过长、断流、用户取消、429、超时和重复写入。每个案例注明客户端状态、服务端状态、重试条件和资源是否已释放。本篇是实现任务清单，未接入模型服务。

## 复习问题

1. 第一段文字出现后为什么仍可能失败？
2. 网络重试为什么不能替代业务幂等？
3. 请求 deadline 怎样传给多步工具调用？

## 阅读依据

- [官方规范或指南](https://html.spec.whatwg.org/multipage/server-sent-events.html)
- [官方规范或指南](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)
- [project.md](https://github.com/DataTalksClub/llm-zoomcamp/blob/c04d02f2ea7171d0be1e2b17d555c49651f2b5a3/project.md)

2026-10-08：AI 助手协助原创组织知识点、案例和练习，核对以上原始资料。具体模型项目成绩以实际日志为准。
