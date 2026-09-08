# 🤖 AI Agent 30 天 · 零基础图文学习计划

一个**每天一课、从零基础开始、图文结合**的 AI Agent 自学课程，全部内容在本地即可浏览，无需联网、无需注册。

## 快速开始

直接用浏览器打开 [`index.html`](index.html)（双击即可），从左侧 **Day 1** 开始学。

**🌐 在线学习（已发布）**：<https://stilwellfeng.github.io/ai-agent-30days/> 手机/电脑打开即学，含 30 课与单文件手机版页面。

**📱 想在手机上学？** 用 [`AI-Agent-30天课程-手机版.html`](AI-Agent-30天课程-手机版.html)（单文件，已内置全部 30 课与图示）：AirDrop/微信发到手机，用浏览器打开即可离线学习；带「今日学习」导航与打卡。内容更新后可用 `python3 tools/build_mobile.py` 重新生成。

- 每课结构：文字讲解 → 手绘 SVG 图解 → 课后练习 → 打卡
- 打卡进度自动保存在本机浏览器
- Day 7 起需要 Python 3（Mac 自带，终端执行 `python3 --version` 可确认）

## 目录结构

```
AI agent/
├── index.html            # 课程首页：30 天路线图 + 进度
├── css/style.css         # 样式
├── js/main.js            # 课程数据(30 天) + 打卡/目录逻辑
├── code/
│   ├── mini_agent.py    # Day 7 迷你 Agent（可运行）
│   └── weather_tool.py  # Day 10 天气工具（可运行）
├── diagrams/             # 手绘 SVG 概念图（31 张）
├── lessons/
│   └── day01.html ~ day30.html   # 全部 30 天课程（已上线）
└── README.md
```

## 30 天路线图

| 阶段 | 天数 | 主题 |
| --- | --- | --- |
| W1 零基础入门 | Day 1–7 | AI/LLM 概念、Agent 四要素与循环、提示词入门、工具调用、记忆机制、动手写迷你 Agent |
| W2 让 Agent 变聪明 | Day 8–14 | 提示词进阶、上下文工程、工具实战、RAG、向量库、任务规划、笔记问答助手 |
| W3 工程化开发 | Day 15–21 | 框架（LangChain/LlamaIndex）、组装 Agent、多工具编排、多 Agent、记忆持久化、信息收集助手 |
| W4 实战与毕业设计 | Day 22–30 | API 与安全、评测、成本优化、多模态、办公自动化、知识库问答、部署、毕业设计 |

> ✅ 30 天全部课程已上线（2026-09-07 完成 Day 8–30）。配套 Codex 自动化「AI Agent 每日学习提醒」（每晚 20:00）会引导每天学习一课。

## 验证状态

- `code/mini_agent.py`：已通过 `python3 -m py_compile` 与功能冒烟测试（含注入安全测试）
- 所有 HTML 中引用的图片/链接已做一致性检查（见课程搭建记录）

## 安全说明

Day 7 的 `calculate()` 采用 AST 白名单校验，**不会执行任意代码**；课程中强调工具最小权限与人工确认原则，请勿在生产环境随意放开工具权限。
