---
slug: retrieval-access-cache-lab
title: "权限与缓存实验：同问不同人、撤权与版本"
summary: "用 3 份自制文档和 10 个顺序场景复现缓存越权与过期，记录基线、改进和版本漏更新的边界。"
kind: lab
topic: engineering
tags: ["可复现实验","缓存","权限","多租户"]
status: published
publishedAt: "2026-10-08"
updatedAt: "2026-10-08"
lastReviewedAt: "2026-10-08"
sources: ["system-design-primer","llm-zoomcamp-practice"]
prerequisites: ["ai-service-backend","ai-security-boundaries"]
related: ["rag-capstone-spec","ai-project-evaluation","ai-system-design"]
---

## 目标与范围

仅按问题缓存，会把相同问题误认为同一读取权限与数据版本。本实验用纯 Node 脚本演示这类错误，并比较带身份、租户、权限版本、语料版本的缓存键。

数据是 3 份自制短文档，包含 alpha/beta 两个租户；身份是 fixture 中可信的 alice、bob、carol。这里没有实现真实登录认证、向量库、LLM、分布式缓存或生产授权系统。结果只覆盖明确列出的场景。

## 环境

2026-10-08 在 macOS、Node.js 24.21.0 运行。脚本仅依赖 Node 内置 assert 与 fs/promises；用 npm 获取 Node 24 的执行方式需要网络，已有 Node 24 以上可直接运行。

输入是 labs/access-cache/cases.json；实现是 scripts/access-cache-lab.mjs；记录是 labs/access-cache/results.json。预期可读文档的 ID 与正文由输入 fixture 指定。

## 复现步骤

在项目根目录、Node.js 24 以上执行：

~~~sh
node scripts/access-cache-lab.mjs          # 输出两种策略和已知边界
node scripts/access-cache-lab.mjs --check  # 重新运行并比对已记录结果
npm test                                 # 同时检查内容规则及两篇实验
~~~

维护者有意调整 fixture 时才运行 --write 更新记录，再审查预期与差异。不同策略使用各自的数据与缓存状态，但在各自运行内部，10 个用例按顺序进行；更新、撤权与删除会影响后续用例。

## 比较的实现

基线只用规范化后的 query 作为缓存键；缓存未命中时过滤权限，命中后直接复用旧内容。改进策略的键包含 tenant、user ID、accessRevision、corpusRevision 和 query；读取缓存前还检查当前文档是否存在及可读。

这些版本是实验里的全局计数，不是生产环境完整方案。系统是否能可信地产生身份、及时提交版本变更、处理并发和多节点一致性，需要另外实现与验证。

## 实际结果

| 顺序场景 | 仅 query | 身份/租户/版本键 + 当前授权检查 |
| --- | --- | --- |
| 首次读公开文档 | 通过 | 通过 |
| 同用户公开问题缓存命中 | 通过 | 通过 |
| 有权限用户首次读私有文档 | 通过 | 通过 |
| 同租户另一用户提相同私有问题 | 失败 | 通过 |
| 另一租户提相同私有问题 | 失败 | 通过 |
| 私有文档更新并提高语料版本 | 失败 | 通过 |
| 撤销私有文档权限并提高权限版本 | 失败 | 通过 |
| 删除私有文档并提高语料版本 | 失败 | 通过 |
| 同租户另一用户读公开文档 | 通过 | 通过 |
| 另一租户提相同公开问题 | 失败 | 通过 |

实际匹配预期：基线 4/10；改进 10/10。基线的错误包括向未授权用户/租户返回内容，以及继续返回更新、撤权、删除前的快照。相同文本问题并不足以决定可复用范围。

## 失败与已知边界

另有独立边界实验：先缓存私有正文 V1，再改成 V2，但故意不增加 corpusRevision。改进策略发生缓存命中，返回 V1，与期望 V2 不符。

这说明授权重查能防止已撤权/已删除的文档继续返回，但如果文档仍可读，单靠复合键不会自动发现正文改变。生产方案需要可靠的版本/失效机制，也可用文档版本检查等方法；不能把本实验的 10/10 表述为完整安全或一致性保证。

脚本断言两种策略的匹配数、正常暖缓存命中以及上述边界失败，并把逐项输出写入 JSON。这里的“通过”指 ID 与正文匹配 fixture，不是语义正确率、性能收益或安全审计结论。

## 练习与复习

1. 阅读失败 JSON，逐项解释为什么首次读取授权仍挡不住后续缓存错误。
2. 在你自己的 RAG 服务中加入撤权、删除、文档更新与失效事件丢失案例，保存真实日志。
3. 说明真实身份如何进入请求，怎样防止客户端或模型伪造用户/租户。
4. 如果缓存跨进程共享，版本更新与请求并发会多出哪些窗口？

## 阅读依据与核验

- [README.md](https://github.com/donnemartin/system-design-primer/blob/ae9bbd7b02d90b9866215de185217d33f39ab733/README.md)
- [官方章节](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

2026-10-08：AI 助手协助原创组织与核对来源；实际运行上述离线实验，保存输入、脚本及逐项结果。
