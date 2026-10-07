---
slug: mcp-tool-boundaries
title: "MCP：协议、工具发现、版本与授权边界"
summary: "以 2026-07-28 官方规范理解 MCP，区分连接、身份、能力与工具执行权限。"
kind: concept
topic: agents
tags: ["MCP","protocol","authorization"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["mcp-specification"]
prerequisites: ["structured-output-tools","agent-control-loop"]
related: ["ai-security-boundaries","agent-context-memory"]
---
## MCP 解决的是什么问题

MCP 提供应用与外部资料、工具之间的协议契约。Host 是面向用户的应用，client 负责协议交互，server 暴露能力；连接成功不代表所有资料或操作都已获得授权，也不等于模型增加了新的权重知识。

## 必须掌握的模块

| 模块 | 核心知识点 |
| --- | --- |
| 角色 | host/client/server 的责任与信任边界 |
| 消息 | 请求、响应、通知、ID、错误和结构化结果 |
| 版本 | 精确协议 revision、SDK 支持范围和不兼容处理 |
| 能力 | resources、prompts、tools 等声明与发现 |
| 工具 | tools/list、tools/call、input/output schema、调用错误 |
| 授权 | 认证身份、scope、目标资源、token audience |
| 生命周期 | 超时、取消、连接与业务状态的区别 |
| 用户控制 | 操作可见性、拒绝能力、按动作风险设计控制 |

资源提供资料，prompt 提供可复用交互模板，tool 提供可执行操作；这些协议分类不能代替服务端业务鉴权。工具返回的描述和内容也不能被当成更高优先级指令。

## 新旧版本不要混用

本笔记固定核对 2026-07-28 规范。新版以每个请求的元数据传递协议版本、客户端身份信息和能力；更早版本采用基于初始化的流程。官方 versioning 章节有兼容矩阵。实现前应核对 client/server/SDK 的共同支持版本，不能把旧教程中的 initialize 示例无条件套到新版。

连接或进程本身不是用户会话。即使在同一个传输上处理多个请求，也要按实际身份、授权与业务上下文隔离。MCP 授权安全规范要求关注 token audience、权限范围和混淆代理等问题；本文只整理知识点，不提供认证实现。

## 练习与完成标准

为只读笔记查询写 client/server 的责任表，标明版本核验入口、工具 schema 与未授权时的行为。设计“连接已建立但无权限”“协议版本不兼容”“参数合法但对象越权”三条测试预期。本次未安装 MCP server 或执行协议实验。

## 复习问题

1. 工具发现与工具授权有什么不同？
2. 为什么连接身份不能直接当作业务用户身份？
3. 旧初始化教程与 2026-07-28 规范冲突时，应该核对什么？

## 阅读依据与核验范围

- [规范总览](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/0a11bf68c7ec4473526ec15589f592afcd12d1e8/docs/specification/2026-07-28/index.mdx)
- [版本协商与兼容](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/0a11bf68c7ec4473526ec15589f592afcd12d1e8/docs/specification/2026-07-28/basic/versioning.mdx)
- [Tools](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/0a11bf68c7ec4473526ec15589f592afcd12d1e8/docs/specification/2026-07-28/server/tools.mdx)
- [授权安全](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/0a11bf68c7ec4473526ec15589f592afcd12d1e8/docs/specification/2026-07-28/basic/authorization/security-considerations.mdx)

2026-10-07：AI 助手协助原创整理，核对以上 GitHub 章节；示例与练习为本站设计，未执行的任务不作为实验结论。
