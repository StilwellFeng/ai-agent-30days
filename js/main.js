/* ============ 课程数据：30 天路线图 ============ */
const DAYS = [
  {n:1,  t:"什么是 AI Agent：从 AI 到智能体",            file:"day01.html", blurb:"理清 AI / 机器学习 / 大模型 / Agent 的关系，建立第一个直觉"},
  {n:2,  t:"大语言模型（LLM）是怎么工作的",               file:"day02.html", blurb:"Token、预测下一个词、训练三阶段与 LLM 的边界"},
  {n:3,  t:"Agent 的四大核心部件与工作循环",              file:"day03.html", blurb:"规划 / 记忆 / 工具 / 行动，理解 Agent 的思考-行动循环"},
  {n:4,  t:"提示词工程入门：学会和模型对话",              file:"day04.html", blurb:"结构化提示、Few-shot、思维链，把需求说清楚"},
  {n:5,  t:"工具调用：让 Agent 长出“手脚”",               file:"day05.html", blurb:"Function Calling 原理、工具执行闭环与安全边界"},
  {n:6,  t:"记忆机制：短期、长期与向量检索",              file:"day06.html", blurb:"上下文窗口、向量数据库、Embedding 入门"},
  {n:7,  t:"动手搭建你的第一个 Agent（迷你版）",          file:"day07.html", blurb:"不用 API 也能跑：用 Python 写一个会规划、会调用工具的迷你 Agent"},
  {n:8,  t:"提示词进阶：角色、约束与输出控制",            file:"day08.html", blurb:"系统提示词、结构化输出（JSON）、少样本与反例"},
  {n:9,  t:"上下文工程：窗口、压缩与缓存",                file:"day09.html", blurb:"Token 预算、对话历史管理、摘要与关键信息提取"},
  {n:10, t:"工具调用实战：写一个天气/新闻查询助手",       file:"day10.html", blurb:"对接公开 API，处理错误与超时"},
  {n:11, t:"RAG 入门：给 Agent 外接知识库",               file:"day11.html", blurb:"文档切分、向量化、检索增强生成全流程"},
  {n:12, t:"Embedding 与向量数据库上手",                  file:"day12.html", blurb:"相似度搜索、本地向量库实践"},
  {n:13, t:"Agent 的规划能力：任务拆解与反思",            file:"day13.html", blurb:"Plan-and-Execute、Self-Refine、ReAct 详解"},
  {n:14, t:"本周实战：个人学习笔记问答助手",              file:"day14.html", blurb:"综合运用提示词 + 记忆 + 检索"},
  {n:15, t:"认识 Agent 开发框架（LangChain / LlamaIndex）",file:"day15.html", blurb:"框架解决了什么问题，核心抽象是什么"},
  {n:16, t:"LangChain 核心组件动手用",                    file:"day16.html", blurb:"Model / Prompt / Tool / Memory / Chain"},
  {n:17, t:"用框架组装一个完整 Agent",                    file:"day17.html", blurb:"从零组装：读配置、接工具、跑通对话"},
  {n:18, t:"多工具与多步骤任务编排",                      file:"day18.html", blurb:"工具选择、失败重试、步骤间的数据传递"},
  {n:19, t:"多 Agent 协作入门",                           file:"day19.html", blurb:"分工协作模式：主管-员工、流水线、辩论"},
  {n:20, t:"Agent 的记忆与状态持久化实战",                file:"day20.html", blurb:"会话存储、用户画像、长期记忆落地"},
  {n:21, t:"本周实战：自动化信息收集小助手",              file:"day21.html", blurb:"定时抓取 + 总结 + 报告一条龙"},
  {n:22, t:"把 Agent 接上“真世界”：API 与权限安全",       file:"day22.html", blurb:"最小权限、沙箱、成本与限流控制"},
  {n:23, t:"Agent 的评测：怎么知道它变好了",              file:"day23.html", blurb:"测试集、评估指标、回归测试"},
  {n:24, t:"成本与性能优化：Token、缓存与并发",           file:"day24.html", blurb:"省钱省时的工程手段"},
  {n:25, t:"多模态 Agent 初探：文字之外的世界",           file:"day25.html", blurb:"图片理解、语音、屏幕操作"},
  {n:26, t:"实战：办公自动化 Agent（文档/表格/邮件）",    file:"day26.html", blurb:"处理真实文件，注意数据安全"},
  {n:27, t:"实战：个人知识库 + 问答 Agent 完整项目",       file:"day27.html", blurb:"从需求到上线的全流程"},
  {n:28, t:"部署你的 Agent：API 服务与简单前端",          file:"day28.html", blurb:"本地起服务、加一个聊天界面"},
  {n:29, t:"Agent 安全与伦理专题",                        file:"day29.html", blurb:"幻觉防护、Prompt 注入、滥用风险"},
  {n:30, t:"毕业设计：设计并实现你的专属 Agent",          file:"day30.html", blurb:"选题、拆解、实现、演示与复盘"}
];

const STORE_KEY = "aiagent30-progress";
function getDone(){ try{ return JSON.parse(localStorage.getItem(STORE_KEY))||[]; }catch(e){ return []; } }
function setDone(a){ try{ localStorage.setItem(STORE_KEY, JSON.stringify(a)); }catch(e){} }

function esc(s){ return String(s).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }

/* ---------- 侧边栏 ---------- */
function renderSidebar(){
  const host = document.getElementById("sidebar-list");
  if(!host) return;
  const cur = location.pathname.split("/").pop();
  host.innerHTML = DAYS.map(d=>{
    const cls = [];
    if(d.file===cur) cls.push("active");
    if(!d.file) cls.push("todo");
    if(getDone().includes(d.n)) cls.push("done");
    const label = d.file
      ? `<a href="lessons/${d.file}"><span class="n">D${d.n}</span>${esc(d.t)}</a>`
      : `<span class="n">D${d.n}</span>${esc(d.t)}<span class="tag">待更新</span>`;
    return `<li class="${cls.join(" ")}">${label}</li>`;
  }).join("");
}

/* ---------- 首页渲染 ---------- */
function renderHome(){
  if(!document.getElementById("index-root")) return;
  const done = getDone();
  const weeks = [[1,7],[8,14],[15,21],[22,30]];
  const names = ["第一周 · 零基础入门：概念与第一个 Agent",
                 "第二周 · 提示词 / 记忆 / 检索：让 Agent 更聪明",
                 "第三周 · 框架与工程：像工程师一样开发",
                 "第四周 · 实战与毕业设计：做出自己的作品"];
  document.getElementById("done-count").textContent = done.length;
  document.getElementById("bar").style.width = (done.length/30*100)+"%";
  document.getElementById("index-root").innerHTML = weeks.map(([a,b],i)=>{
    const list = DAYS.filter(d=>d.n>=a&&d.n<=b).map(d=>{
      const locked = !d.file;
      const isDone = done.includes(d.n);
      return `<div class="dayitem ${locked?"locked":""} ${isDone?"done":""}">
        ${d.file?`<a href="lessons/${d.file}">`:"<span>"}
          <div class="d">第 ${d.n} 天${isDone?" · ✅":""}</div>
          <div class="t">${esc(d.t)}</div>
          <div style="font-size:12px;color:#8a93a8;margin-top:6px">${locked?d.blurb:""}</div>
        ${d.file?"</a>":"</span>"}
      </div>`;
    }).join("");
    return `<div class="week"><div class="whead">
        <span class="badge">W${i+1}</span>
        <div><h3>${names[i]}</h3><p>第 ${a}–${b} 天</p></div>
      </div><div class="daylist">${list}</div></div>`;
  }).join("");
}

/* ---------- 课程页：打卡 + 前后导航 ---------- */
function findDay(){
  const cur = location.pathname.split("/").pop();
  return DAYS.find(d=>d.file===cur);
}
function renderLesson(){
  const d = findDay();
  if(!d) return;
  const done = getDone();
  const btn = document.getElementById("checkin-btn");
  const setBtn = ()=>{
    const ok = getDone().includes(d.n);
    btn.textContent = ok ? "✅ 本课已完成，点此取消" : "完成本课打卡";
    btn.classList.toggle("done", ok);
  };
  btn.addEventListener("click", ()=>{
    let arr = getDone();
    arr = arr.includes(d.n) ? arr.filter(x=>x!==d.n) : arr.concat(d.n);
    setDone(arr); setBtn();
  });
  setBtn();
  const prev = DAYS.filter(x=>x.n<d.n).reverse().find(x=>x.file);
  const next = DAYS.find(x=>x.n>d.n && x.file);
  document.getElementById("prev-link").innerHTML = prev
    ? `<span class="dir">← 前一天</span><div class="t">D${prev.n} ${esc(prev.t)}</div>`
    : "";
  document.getElementById("prev-link").href = prev ? `./${prev.file}` : "#";
  document.getElementById("next-link").innerHTML = next
    ? `<span class="dir">后一天 →</span><div class="t">D${next.n} ${esc(next.t)}</div>`
    : `<span class="dir">已到当前最后一课</span><div class="t">继续学习更多内容请告诉我们</div>`;
  document.getElementById("next-link").href = next ? `./${next.file}` : "#";
}

document.addEventListener("DOMContentLoaded", ()=>{
  renderSidebar(); renderHome(); renderLesson();
});
