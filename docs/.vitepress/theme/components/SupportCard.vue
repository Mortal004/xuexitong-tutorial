<script setup>
defineProps({
  repo: { type: String, default: 'https://github.com/Mortal004/Xuexitong_shuake' },
  email: { type: String, default: '2022865286@qq.com' }
})
</script>

<template>
  <section class="support">
    <header class="support__head">
      <span class="support__icon">💚</span>
      <div>
        <h2 class="support__title">支持这个项目</h2>
        <p class="support__desc">脚本完全免费开源。如果它帮你省下了时间，下面任何一种方式都是很大的鼓励。</p>
      </div>
    </header>

    <div class="support__grid">
      <a class="support__card" :href="repo" target="_blank" rel="noreferrer">
        <span class="support__card-icon">⭐</span>
        <span class="support__card-title">给项目点星</span>
        <span class="support__card-desc">在 GitHub 上点个 Star，让更多需要的人找到它</span>
      </a>
      <a class="support__card" :href="`mailto:${email}`">
        <span class="support__card-icon">✉️</span>
        <span class="support__card-title">反馈与建议</span>
        <span class="support__card-desc">{{ email }}</span>
      </a>
      <a class="support__card" :href="`${repo}/issues`" target="_blank" rel="noreferrer">
        <span class="support__card-icon">🐛</span>
        <span class="support__card-title">提交问题</span>
        <span class="support__card-desc">遇到报错时，附上报错截图与系统信息</span>
      </a>
      <a class="support__card" :href="`${repo}/discussions`" target="_blank" rel="noreferrer">
        <span class="support__card-icon">💬</span>
        <span class="support__card-title">参与讨论</span>
        <span class="support__card-desc">脚本问题、体验评价与使用技巧都可以聊</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.support {
  margin: 40px 0 8px;
  padding: 28px 26px 26px;
  border-radius: 20px;
  border: 1px solid var(--vp-x-border-brand);
  background:
    radial-gradient(80% 130% at 0% 0%, var(--vp-c-brand-soft), transparent 62%),
    var(--vp-c-bg-soft);
  overflow: hidden;
}

.support__head {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 22px;
}

.support__icon {
  flex: none;
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  font-size: 20px;
  border-radius: 13px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-x-border-brand);
}

.support__title {
  margin: 0;
  font-size: 1.24rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
}

.support__desc {
  margin: 5px 0 0;
  font-size: 0.88rem;
  line-height: 1.65;
  color: var(--vp-c-text-2);
}

.support__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 13px;
}

.support__card {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 17px 18px;
  border-radius: 14px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  text-decoration: none !important;
  color: var(--vp-c-text-1) !important;
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.support__card:hover {
  transform: translateY(-3px);
  border-color: var(--vp-x-border-brand);
  box-shadow: var(--vp-x-shadow-brand);
}

.support__card-icon {
  font-size: 20px;
  line-height: 1;
  margin-bottom: 4px;
}

.support__card-title {
  font-size: 0.95rem;
  font-weight: 650;
}

.support__card-desc {
  font-size: 0.8rem;
  line-height: 1.55;
  color: var(--vp-c-text-3);
  word-break: break-all;
}
</style>
