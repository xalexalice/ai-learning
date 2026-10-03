---
slug: string-normalize
title: "MDN：字符串 Unicode 规范化"
summary: "查阅 JavaScript normalize 的定义与 NFKC 行为，为关键词检索中的全角字符处理提供依据。"
type: doc
topic: engineering
tags: [Unicode, NFKC, JavaScript]
status: published
sourceUrl: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
author: "MDN contributors"
sourcePublishedAt: null
accessedAt: "2026-10-03"
version: "String.prototype.normalize()，访问时版本"
reuseRights: "MDN 文档按其页面与站点许可声明；本站仅保存链接和原创摘要，没有复制文档示例。"
publishedAt: "2026-10-03"
updatedAt: "2026-10-03"
---

## 为什么收录

看起来相同的文字未必使用相同的 Unicode 表示。规范化能处理其中一类差异，适合学习文本预处理的作用与边界。

## 阅读重点

比较 NFC 与 NFKC，再思考兼容性规范化是否符合自己的场景。展示名称、密码或原始证据不应无条件改写；实验只对检索比较副本使用 NFKC。

## 本站应用

关键词实验比较精确匹配与 NFKC 加小写转换。保留原始文档和查询，便于复核变化由哪一步产生。
