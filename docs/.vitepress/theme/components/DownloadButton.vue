<script setup>
defineProps({
  href: { type: String, required: true },
  icon: { type: String, default: '🔗' },
  title: { type: String, default: '' },
  desc: { type: String, default: '' },
  tone: { type: String, default: 'brand' }
})
</script>

<template>
  <a class="dl-btn" :class="`tone-${tone}`" :href="href" target="_blank" rel="noreferrer">
    <span class="dl-btn__icon">{{ icon }}</span>
    <span class="dl-btn__body">
      <span class="dl-btn__title">{{ title }}</span>
      <span v-if="desc" class="dl-btn__desc">{{ desc }}</span>
    </span>
    <span class="dl-btn__arrow" aria-hidden="true">→</span>
  </a>
</template>

<style scoped>
.dl-btn {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 18px;
  border-radius: 14px;
  border: 1px solid var(--vp-x-tone, var(--vp-c-divider));
  background: linear-gradient(135deg, var(--vp-x-tone-soft, var(--vp-c-bg-soft)), var(--vp-c-bg-soft));
  text-decoration: none !important;
  color: var(--vp-c-text-1) !important;
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.dl-btn:hover {
  transform: translateY(-3px);
  border-color: var(--vp-x-tone);
  box-shadow: 0 16px 32px -20px var(--vp-x-tone);
}

.dl-btn__icon {
  flex: none;
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  font-size: 20px;
  line-height: 1;
  border-radius: 12px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
}

.dl-btn__body {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
}

.dl-btn__title {
  font-weight: 650;
  font-size: 0.98rem;
  line-height: 1.4;
}

.dl-btn__desc {
  font-size: 0.82rem;
  line-height: 1.5;
  color: var(--vp-c-text-3);
}

.dl-btn__arrow {
  flex: none;
  font-size: 1rem;
  color: var(--vp-x-tone);
  transition: transform 0.25s ease;
}

.dl-btn:hover .dl-btn__arrow {
  transform: translateX(4px);
}

.tone-brand {
  --vp-x-tone: var(--vp-c-brand-1);
  --vp-x-tone-soft: var(--vp-c-brand-soft);
}
.tone-blue {
  --vp-x-tone: #1677ff;
  --vp-x-tone-soft: rgba(22, 119, 255, 0.14);
}
.tone-orange {
  --vp-x-tone: #ff5722;
  --vp-x-tone-soft: rgba(255, 87, 34, 0.14);
}
.tone-dark {
  --vp-x-tone: #6b7280;
  --vp-x-tone-soft: rgba(107, 114, 128, 0.14);
}
</style>
