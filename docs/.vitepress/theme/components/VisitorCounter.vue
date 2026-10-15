<template>
  <ClientOnly>
    <div class="visitor-counter">
      <p>✨ 本网站总访客量为 <span id="busuanzi_value_site_uv" class="highlight">{{ uv }}</span> 人</p>
      <p>👋 你是第 <span class="highlight">{{ uv }}</span> 个访问本站的！</p>
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const uv = ref('--')

onMounted(() => {
  // 轮询获取不蒜子更新后的 UV 值
  const timer = setInterval(() => {
    const el = document.getElementById('busuanzi_value_site_uv')
    if (el && el.innerText !== '--' && el.innerText !== '') {
      uv.value = el.innerText
      clearInterval(timer) // 获取到值后停止轮询
    }
  }, 500)

  // 超过 5 秒还没加载出来，就停止轮询（防止死循环）
  setTimeout(() => clearInterval(timer), 5000)
})
</script>

<style scoped>
.visitor-counter {
  text-align: center;
  margin: 40px auto;
  padding: 20px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  max-width: 600px;
  font-size: 16px;
  color: var(--vp-c-text-1);
}
.visitor-counter p {
  margin: 8px 0;
}
.highlight {
  font-weight: bold;
  color: var(--vp-c-brand-1);
  font-size: 1.2em;
  margin: 0 4px;
}
</style>