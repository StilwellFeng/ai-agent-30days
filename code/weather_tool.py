#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
天气查询“工具” —— Day 10
==========================
一个真正会联网查天气的 Python 函数，可作为 Agent 的 Tool 使用。

不依赖任何 API Key：使用免费的 wttr.in 服务（https://wttr.in）。
用法：python3 weather_tool.py 北京
说明：需要能联网；wttr.in 为第三方免费服务，仅供学习，请勿高频调用。
"""
import sys
import urllib.parse
import urllib.request

def get_weather(city: str) -> str:
    """查询指定城市的当前天气，返回纯文本。失败时返回错误说明而不是抛异常。"""
    if not city.strip():
        return "错误：城市不能为空"
    # 中文字符也要能放进 URL
    q = urllib.parse.quote(city.strip())
    url = f"https://wttr.in/{q}?format=3&lang=zh"
    req = urllib.request.Request(url, headers={"User-Agent": "curl/8"})
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            return resp.read().decode("utf-8", "replace").strip()
    except Exception as e:
        return f"查询失败：{e.__class__.__name__}（请检查网络或稍后再试）"

if __name__ == "__main__":
    city = sys.argv[1] if len(sys.argv) > 1 else "北京"
    print(f"城市：{city}")
    print(f"天气：{get_weather(city)}")
