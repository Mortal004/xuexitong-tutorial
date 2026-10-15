<script setup>
defineProps({
  icon: { type: String, default: '✨' },
  title: { type: String, default: '' },
  tag: { type: String, default: '' },
  accent: { type: String, default: 'brand' }
})
</script>

<template>
  <article class="feature-card" :class="`accent-${accent}`">
    <div class="feature-card__head">
      <span class="feature-card__icon">{{ icon }}</span>
      <span v-if="tag" class="feature-card__tag">{{ tag }}</span>
    </div>
    <h3 class="feature-card__title">{{ title }}</h3>
    <p class="feature-card__details"><slot /></p>
  </article>
</template>

<style scoped>
.feature-card {
  position: relative;
  height: 100%;
  padding: 22px 22px 20px;
  border-radius: 16px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  overflow: hidden;
  transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.28s ease,
    border-color 0.28s ease, background-color 0.28s ease;
}

.feature-card::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 2px;
  background: linear-gradient(90deg, var(--vp-x-accent), transparent 85%);
  opacity: 0;
  transition: opacity 0.28s ease;
}

.feature-card::after {
  content: '';
  position: absolute;
  top: -60%;
  right: -35%;
  width: 70%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(circle, var(--vp-x-accent-soft), transparent 68%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.32s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  border-color: var(--vp-x-accent);
  box-shadow: 0 18px 36px -22px var(--vp-x-accent);
}

.feature-card:hover::before,
.feature-card:hover::after {
  opacity: 1;
}

.accent-brand {
  --vp-x-accent: var(--vp-c-brand-1);
  --vp-x-accent-soft: var(--vp-c-brand-soft);
}
.accent-cyan {
  --vp-x-accent: #06b6d4;
  --vp-x-accent-soft: rgba(6, 182, 212, 0.16);
}
.accent-amber {
  --vp-x-accent: #f59e0b;
  --vp-x-accent-soft: rgba(245, 158, 11, 0.16);
}
.accent-violet {
  --vp-x-accent: #8b5cf6;
  --vp-x-accent-soft: rgba(139, 92, 246, 0.16);
}

.feature-card__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 12px;
}

.feature-card__icon {
  display: inline-grid;
  place-items: center;
  width: 40px;
  height: 40px;
  font-size: 20px;
  line-height: 1;
  border-radius: 11px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  box-shadow: inset 0 1px 0 var(--vp-x-highlight);
}

.feature-card__tag {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: 3px 9px;
  border-radius: 999px;
  color: var(--vp-x-accent);
  background: var(--vp-x-accent-soft);
  border: 1px solid transparent;
  white-space: nowrap;
}

.feature-card__title {
  margin: 0 0 8px;
  font-size: 1.05rem;
  font-weight: 650;
  line-height: 1.45;
  color: var(--vp-c-text-1);
}

.feature-card__details {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.feature-card__details :deep(strong) {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.feature-card__details :deep(code) {
  font-size: 0.85em;
}
</style>
