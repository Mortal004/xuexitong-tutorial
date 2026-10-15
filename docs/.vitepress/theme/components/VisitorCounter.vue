<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const uv = ref('--')

let timer
onMounted(() => {
  // 轮询获取不蒜子更新后的 UV 值
  timer = setInterval(() => {
    const el = document.getElementById('busuanzi_value_site_uv')
    if (el && el.innerText !== '--' && el.innerText !== '') {
      uv.value = el.innerText
      clearInterval(timer)
    }
  }, 500)

  setTimeout(() => clearInterval(timer), 5000)
})

onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <ClientOnly>
    <div class="visitor-counter">
      <div class="visitor-counter__glow" aria-hidden="true"></div>
      <p class="visitor-counter__label">本站总访问量</p>
      <p class="visitor-counter__value">
        <span id="busuanzi_value_site_uv">{{ uv }}</span>
        <span class="visitor-counter__unit">次</span>
      </p>
      <p class="visitor-counter__hint">感谢你的到来，祝你学有所获 ✨</p>
    </div>
  </ClientOnly>
</template>

<style scoped>
.visitor-counter {
  position: relative;
  overflow: hidden;
  max-width: 460px;
  margin: 44px auto 8px;
  padding: 26px 24px 22px;
  text-align: center;
  border-radius: 18px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.visitor-counter:hover {
  border-color: var(--vp-x-border-brand);
  box-shadow: 0 20px 40px -28px var(--vp-x-glow);
}

.visitor-counter__glow {
  position: absolute;
  inset: auto 0 -60% 0;
  height: 120%;
  background: radial-gradient(60% 60% at 50% 100%, var(--vp-c-brand-soft), transparent 70%);
  pointer-events: none;
}

.visitor-counter__label {
  position: relative;
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

.visitor-counter__value {
  position: relative;
  margin: 10px 0 6px;
  font-size: 2.4rem;
  font-weight: 800;
  line-height: 1.1;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
  background: linear-gradient(120deg, var(--vp-c-brand-1), #2dd4bf);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.visitor-counter__unit {
  margin-left: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vp-c-text-3);
  -webkit-text-fill-color: var(--vp-c-text-3);
}

.visitor-counter__hint {
  position: relative;
  margin: 0;
  font-size: 13px;
  color: var(--vp-c-text-2);
}
</style>
