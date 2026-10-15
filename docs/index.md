---
layout: home

hero:
  name: "用户须知"
  text: "刷课脚本使用教程"
  tagline: "基于 Python 的自动化学习辅助工具 · 使用说明文档"
  actions:
    - theme: brand
      text: 开始阅读
      link: /guide/preface
    - theme: alt
      text: 使用教程
      link: /guide/usage
    - theme: alt
      text: GitHub 项目
      link: https://github.com/Mortal004/Xuexitong_shuake

features:
  - icon: 📖
    title: 使用教程
    details: 从启动程序、界面设置、账号信息到自动刷课，一步步说明。
    link: /guide/usage
  - icon: 🧩
    title: 驱动安装
    details: Edge / Chrome 驱动下载与配置方法，解决浏览器相关报错。
    link: /guide/driver
  - icon: ❓
    title: 报错处理
    details: 常见弹窗与提示的处理思路，四种方法逐一排查。
    link: /guide/faq
  - icon: 🚀
    title: 更新方式
    details: GitHub Releases、夸克网盘、迅雷网盘与脚本内检查更新。
    link: /guide/update
  - icon: 📢
    title: 使用声明
    details: 仅供个人学习交流，使用后果自负，请遵守学校相关规定。
    link: /guide/statement
  - icon: 💬
    title: 反馈建议
    details: 通过发送邮件至邮箱：`2022865286@qq.com`，提交你的建议。
    link: /guide/conclusion
---

## ✨ 核心功能一览

<div class="custom-home-feature-grid">
  <div class="custom-home-feature-card">
    <h3>⏰ 定时自动刷课</h3>
    <p>基于 Selenium 实现网页自动化，模拟真实用户观看行为。支持调节播放倍速（最高 16 倍速），并可自主设定开始与结束刷课的时间。</p>
  </div>
  <div class="custom-home-feature-card">
    <h3>🛡️ 跳过人脸与全能自动化</h3>
    <p>所有需要人脸认证的环节均可自动跳过，无需手动操作。还支持自动刷直播、自动播放音频、自动回复讨论、自动播放 PPT。</p>
  </div>
  <div class="custom-home-feature-card">
    <h3>📍 自动签到</h3>
    <p>支持在任意地点完成定位签到和普通签到，无需手动操作，打破地理限制，方便快捷。</p>
  </div>
  <div class="custom-home-feature-card">
    <h3>🔗 连续刷多门课程</h3>
    <p>支持最多连续刷 3 门课程，一门课程刷完后无需手动切换下一科，全程自动操作，节省你的时间。</p>
  </div>
  <div class="custom-home-feature-card">
    <h3>🖥️ 同时刷多门课程</h3>
    <p>支持最多同时刷一个账号下的 3 门课程，只需在设置中打开“多端学习”。<span class="custom-home-warning">⚠️ 除非特别紧急，一般不建议开启。</span></p>
  </div>
  <div class="custom-home-feature-card">
    <h3>🧠 智能刷题与作业</h3>
    <p>已支持使用 DeepSeek 进行搜题。同时支持自动做作业，只需在设置中配置好 DeepSeek API 密钥，即可自动完成作业。</p>
  </div>
  <div class="custom-home-feature-card">
    <h3>📊 进度查看与可视化控制</h3>
    <p>主页点击“刷课记录”即可实时查看课程学习进度。借助 customtkinter 搭建可视化窗口，用于控制程序运行和显示输出信息。</p>
  </div>
</div>

## 下载方式

<div class="custom-home-download-grid">
  <a href="https://pan.quark.cn/s/bbcc17bcce22" target="_blank" class="custom-home-download-btn quark">
    <span class="icon">☁️</span>
    <span class="text">夸克网盘</span>
  </a>
  <a href="https://pan.xunlei.com/s/VOvtzs6dbiSGyNE41Fk5ytgVA1?pwd=tct2#" target="_blank" class="custom-home-download-btn xunlei">
    <span class="icon">⚡</span>
    <span class="text">迅雷网盘</span>
  </a>
</div>

## 📖 从哪里开始？

- 第一次使用，请先读 [前言](/guide/preface) 和 [使用教程](/guide/usage)
- 如果开始刷课报浏览器相关错误，请看 [如何安装正确的驱动](/guide/driver)
- 程序弹窗报错，请看 [报错了该怎么办](/guide/faq)
- 想升级版本，请看 [更新](/guide/update)
- 使用前请阅读 [声明](/guide/statement)

<style>
/* 功能卡片网格布局 */
.custom-home-feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
.custom-home-feature-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 20px;
  background-color: var(--vp-c-bg-soft);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.custom-home-feature-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(66, 184, 131, 0.15);
  border-color: var(--vp-c-brand-1);
}
.custom-home-feature-card h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.1em;
  color: var(--vp-c-text-1);
}
.custom-home-feature-card p {
  margin: 0;
  font-size: 0.95em;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}
.custom-home-warning {
  color: #e6a23c;
  font-size: 0.9em;
}

/* 下载按钮网格布局 */
.custom-home-download-grid {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 20px;
}
.custom-home-download-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  color: #fff;
}
.custom-home-download-btn.github {
  background-color: #24292e;
}
.custom-home-download-btn.github:hover {
  background-color: #1a1e22;
}
.custom-home-download-btn.quark {
  background-color: #1677ff;
}
.custom-home-download-btn.quark:hover {
  background-color: #0958d9;
}
.custom-home-download-btn.xunlei {
  background-color: #ff5722;
}
.custom-home-download-btn.xunlei:hover {
  background-color: #e64a19;
}
.custom-home-download-btn .icon {
  font-size: 1.2em;
}
</style>
