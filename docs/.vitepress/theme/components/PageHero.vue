<script setup>
defineProps({
  index: { type: String, default: '' },
  icon: { type: String, default: '📄' },
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' }
})
</script>

<template>
  <header class="page-hero">
    <div class="page-hero__left">
      <div class="page-hero__icon">{{ icon }}</div>
      <div class="page-hero__text">
        <h1 class="page-hero__title">{{ title }}</h1>
        <p v-if="subtitle" class="page-hero__subtitle">{{ subtitle }}</p>
      </div>
    </div>
    <div v-if="index" class="page-hero__index">{{ index }}</div>
  </header>
</template>

<style scoped>
.page-hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin: 0 0 32px;
  padding: 26px 28px;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  background:
    radial-gradient(120% 180% at 0% 0%, var(--vp-c-brand-soft) 0%, transparent 58%),
    var(--vp-c-bg-soft);
}

.page-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(var(--vp-x-grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--vp-x-grid-line) 1px, transparent 1px);
  background-size: 26px 26px;
  mask-image: linear-gradient(120deg, transparent 35%, #000 100%);
  -webkit-mask-image: linear-gradient(120deg, transparent 35%, #000 100%);
  opacity: 0.6;
}

.page-hero__left {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
}

.page-hero__icon {
  flex: none;
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  font-size: 26px;
  line-height: 1;
  border-radius: 14px;
  border: 1px solid var(--vp-x-border-brand);
  background: var(--vp-c-brand-soft);
  box-shadow: 0 6px 18px -8px var(--vp-x-glow);
}

.page-hero__title {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: clamp(1.5rem, 1.1rem + 1.4vw, 2rem);
  line-height: 1.3;
  letter-spacing: -0.01em;
  background: linear-gradient(100deg, var(--vp-c-text-1) 20%, var(--vp-c-brand-1) 130%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-hero__subtitle {
  margin: 6px 0 0;
  font-size: 0.94rem;
  line-height: 1.55;
  color: var(--vp-c-text-2);
}

.page-hero__index {
  position: relative;
  z-index: 1;
  flex: none;
  font-size: 2.6rem;
  font-weight: 800;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.04em;
  color: transparent;
  -webkit-text-stroke: 1.5px var(--vp-x-border-brand);
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

@media (max-width: 640px) {
  .page-hero {
    padding: 20px;
  }
  .page-hero__index {
    display: none;
  }
  .page-hero__icon {
    width: 44px;
    height: 44px;
    font-size: 22px;
  }
}
</style>
