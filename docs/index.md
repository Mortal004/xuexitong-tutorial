---
layout: home
title: 首页
titleTemplate: 刷课脚本使用教程
---

<div class="custom-home">

<HomeHero
  badge="基于 Python + Selenium 的学习通自动化辅助"
  title="刷课脚本使用教程"
  subtitle="把重复的刷课流程交给程序，把时间留给真正值得投入的学习。"
  tagline="从启动程序、配置驱动到报错排查，一份写给非技术用户的完整中文文档。"
  :actions="[
    { text: '开始阅读', link: '/guide/preface', theme: 'brand' },
    { text: '使用教程', link: '/guide/usage', theme: 'alt' },
    { text: '解决报错', link: '/guide/faq', theme: 'alt' },
    { text: 'GitHub 项目', link: 'https://github.com/Mortal004/Xuexitong_shuake', theme: 'sponsor' }
  ]"
/>

<section class="home-section">

<div class="home-section__head">
  <span class="home-section__icon">🚀</span>
  <div>
    <h2 class="home-section__title">核心功能一览</h2>
    <p class="home-section__desc">把繁琐的流程交给脚本，你只需要确认设置无误。</p>
  </div>
</div>

<div class="home-grid">

<FeatureCard icon="⏰" title="定时自动刷课" tag="效率" accent="brand">
支持调节播放倍速（最高 16 倍速），并可自主设定开始与结束刷课的时间，到点自动运行。
</FeatureCard>

<FeatureCard icon="🛡️" title="跳过人脸与全能自动化" tag="自动化" accent="brand">
所有需要人脸认证的环节均可自动跳过。还支持自动刷直播、自动播放音频、自动回复讨论、自动播放 PPT。
</FeatureCard>

<FeatureCard icon="📍" title="任意地点自动签到" tag="签到" accent="cyan">
支持定位签到与普通签到，无需手动操作，打破地理限制，方便快捷。
</FeatureCard>

<FeatureCard icon="🔗" title="连续刷多门课程" tag="批量" accent="cyan">
支持最多连续刷 3 门课程，一门刷完后无需手动切换下一科，全程自动操作。
</FeatureCard>

<FeatureCard icon="🖥️" title="同时刷多门课程" tag="进阶" accent="amber">
支持同时刷一个账号下的 3 门课程，只需在设置中打开“多端学习”。<strong>除非特别紧急，一般不建议开启。</strong>
</FeatureCard>

<FeatureCard icon="🧠" title="智能刷题与作业" tag="AI" accent="violet">
已支持使用 DeepSeek 进行搜题，也可自动完成作业 —— 只需在设置中配置好 DeepSeek API 密钥。
</FeatureCard>

<FeatureCard icon="📊" title="进度查看与可视化控制" tag="可视化" accent="violet">
主页点击“刷课记录”即可实时查看学习进度；customtkinter 搭建的可视化窗口用于控制程序运行与输出信息。
</FeatureCard>

</div>
</section>

<section class="home-section">

<div class="home-section__head">
  <span class="home-section__icon">⬇️</span>
  <div>
    <h2 class="home-section__title">下载方式</h2>
    <p class="home-section__desc">选择任意渠道获取最新版本，建议下载后核对文件完整性。</p>
  </div>
</div>

<DownloadGrid>
  <DownloadButton
    href="https://pan.quark.cn/s/bbcc17bcce22"
    icon="☁️"
    title="夸克网盘"
    desc="无需登录，链接长期有效"
    tone="blue"
  />
  <DownloadButton
    href="https://pan.xunlei.com/s/VOvtzs6dbiSGyNE41Fk5ytgVA1?pwd=tct2#"
    icon="⚡"
    title="迅雷网盘"
    desc="提取码 tct2"
    tone="orange"
  />
  <DownloadButton
    href="https://github.com/Mortal004/Xuexitong_shuake/releases/"
    icon="🐙"
    title="GitHub Releases"
    desc="开源仓库，可查看历史版本"
    tone="dark"
  />
</DownloadGrid>
</section>

<section class="home-section">

<div class="home-section__head">
  <span class="home-section__icon">🧭</span>
  <div>
    <h2 class="home-section__title">三步上手</h2>
    <p class="home-section__desc">第一次使用，按这个顺序走一遍即可正常刷课。</p>
  </div>
</div>

<div class="home-steps">
  <div class="home-step">
    <span class="home-step__num">1</span>
    <h3 class="home-step__title">下载并解压脚本</h3>
    <p class="home-step__desc">从上方任意网盘或 GitHub Releases 下载压缩包，解压到不含中文的目录。</p>
  </div>
  <div class="home-step">
    <span class="home-step__num">2</span>
    <h3 class="home-step__title">填写账号与设置</h3>
    <p class="home-step__desc">双击 <code>start</code> 运行，阅读用户须知后填写学习通账号密码、课程名称与功能选项，最后<strong>务必点击保存</strong>。</p>
  </div>
  <div class="home-step">
    <span class="home-step__num">3</span>
    <h3 class="home-step__title">回到主页开始刷课</h3>
    <p class="home-step__desc">脚本会自动打开浏览器登录并开始刷课。若提示浏览器相关报错，请看 <a href="/xuexitong-tutorial/guide/driver">驱动安装</a>。</p>
  </div>
</div>
</section>

<section class="home-section">

<div class="home-section__head">
  <span class="home-section__icon">📖</span>
  <div>
    <h2 class="home-section__title">从哪里开始？</h2>
    <p class="home-section__desc">按照你的当前状态，选择对应的章节。</p>
  </div>
</div>

<div class="home-links">
  <a class="home-link" href="/xuexitong-tutorial/guide/preface">
    <span class="home-link__icon">✍️</span>
    <span class="home-link__body">
      <span class="home-link__title">第一次使用</span>
      <span class="home-link__desc">先读前言，了解脚本的定位与作者说明</span>
    </span>
  </a>
  <a class="home-link" href="/xuexitong-tutorial/guide/usage">
    <span class="home-link__icon">🎯</span>
    <span class="home-link__body">
      <span class="home-link__title">完整使用教程</span>
      <span class="home-link__desc">逐项说明设置页面的每一项配置</span>
    </span>
  </a>
  <a class="home-link" href="/xuexitong-tutorial/guide/driver">
    <span class="home-link__icon">🧩</span>
    <span class="home-link__body">
      <span class="home-link__title">浏览器报错</span>
      <span class="home-link__desc">Edge / Chrome 驱动下载与配置方法</span>
    </span>
  </a>
  <a class="home-link" href="/xuexitong-tutorial/guide/faq">
    <span class="home-link__icon">🛠️</span>
    <span class="home-link__body">
      <span class="home-link__title">程序弹窗报错</span>
      <span class="home-link__desc">四种排查方法，逐一尝试</span>
    </span>
  </a>
  <a class="home-link" href="/xuexitong-tutorial/guide/update">
    <span class="home-link__icon">🔄</span>
    <span class="home-link__body">
      <span class="home-link__title">想升级版本</span>
      <span class="home-link__desc">四个更新渠道与脚本内检查更新</span>
    </span>
  </a>
  <a class="home-link" href="/xuexitong-tutorial/guide/statement">
    <span class="home-link__icon">📢</span>
    <span class="home-link__body">
      <span class="home-link__title">使用前必读</span>
      <span class="home-link__desc">声明与责任说明，请遵守学校规定</span>
    </span>
  </a>
</div>
</section>

<section class="home-cta">
  <h2 class="home-cta__title">准备好了吗？</h2>
  <p class="home-cta__desc">强烈建议先花 5 分钟读完使用教程，能避免绝大多数配置问题。</p>
  <div class="home-cta__actions">
    <a class="home-cta__btn primary" href="/xuexitong-tutorial/guide/usage">立即开始使用教程</a>
    <a class="home-cta__btn ghost" href="https://github.com/Mortal004/Xuexitong_shuake" target="_blank" rel="noreferrer">给项目点个 Star ⭐</a>
  </div>
</section>

<div class="visitor-section">
<VisitorCounter />
</div>

</div>
