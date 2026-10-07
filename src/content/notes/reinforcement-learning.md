---
slug: reinforcement-learning
title: "强化学习：奖励、价值与策略"
summary: "建立状态、动作、奖励与回报的概念，理解 Q-learning、策略梯度和 PPO 的学习目标。"
kind: concept
topic: foundations
tags: ["强化学习","Q-learning","PPO"]
status: published
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastReviewedAt: "2026-10-07"
sources: ["hf-rl-course","hf-llm-course"]
prerequisites: ["deep-learning-training"]
related: ["llm-training-adaptation","agent-control-loop"]
---
## 与普通问答智能体的区别

强化学习研究如何根据与环境交互得到的奖励学习策略。一个 LLM 调用搜索工具，并不表示系统正在进行强化学习；只有存在训练过程，才讨论策略参数如何根据奖励更新。

## 必须掌握的知识点

| 概念 | 含义 |
| --- | --- |
| 状态与观察 | 环境信息；观察可能只是完整状态的一部分 |
| 动作与策略 | 动作是可选操作；策略决定在给定观察下怎样选动作 |
| 奖励与回报 | 奖励是某一步反馈；回报累计多步奖励，常带折扣 |
| 价值与动作价值 | 估计状态或状态动作对的未来回报 |
| 探索与利用 | 尝试不熟悉动作与选择当前认为最好的动作之间的取舍 |
| on-policy / off-policy | 学习目标策略与产生样本的行为策略是否相同 |
| Q-learning / DQN | 学动作价值；DQN 用网络近似，表格方法用 Q 表 |
| policy gradient / PPO | 直接优化策略；PPO 通过限制策略更新幅度改善稳定性 |

有限回合的折扣回报可以写为 `G_t = r_t + γr_(t+1) + γ²r_(t+2) + ...`。折扣因子、奖励尺度和结束条件都会影响学到的行为。

## 手算与奖励反例

若两步奖励为 `0, 10`，折扣 `γ=0.9`，第一步回报为 `9`；另一条路径即刻奖励为 `5` 并结束，回报为 `5`。只盯着即时奖励会错过更好的长期结果。

如果给资料助手“每次工具调用加分”，它可能通过不断调用工具获得高分。奖励是目标的代理指标，代理指标的缺陷会被优化过程放大。LLM 中的 RLHF、GRPO 等还涉及序列生成、奖励设计与对照策略；应在理解基础后阅读专门章节。

## 练习与完成标准

设计一个三格迷宫，列出状态、动作、结束条件和奖励。手算两条路径的回报，并构造一个能刷分的奖励漏洞。再说明普通 agent 执行任务与训练 agent 的差别。本次未运行游戏环境或 PPO 训练；原课程处于低维护状态，实践兼容性需单独检查。

## 复习问题

1. 为什么高训练奖励仍可能代表糟糕行为？
2. 部分可观察环境为什么可能需要记忆？
3. PPO 的稳定性目标是否保证得到全局最优策略？

## 阅读依据与核验范围

- [强化学习框架](https://github.com/huggingface/deep-rl-class/blob/dbc53d83582884d06fb2a4b9e388405afdd34b18/units/en/unit1/rl-framework.mdx)
- [Q-learning](https://github.com/huggingface/deep-rl-class/blob/dbc53d83582884d06fb2a4b9e388405afdd34b18/units/en/unit2/q-learning.mdx)
- [PPO 直觉](https://github.com/huggingface/deep-rl-class/blob/dbc53d83582884d06fb2a4b9e388405afdd34b18/units/en/unit8/intuition-behind-ppo.mdx)
- [强化学习与 LLM](https://github.com/huggingface/course/blob/8b893f0ede6c781045692a7f892f25a0c92b4805/chapters/en/chapter12/2.mdx)

2026-10-07：AI 助手协助原创整理，核对以上 GitHub 章节；示例与练习为本站设计，未执行的任务不作为实验结论。
