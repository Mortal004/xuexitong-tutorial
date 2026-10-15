<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  badge: { type: String, default: '✨ 个人学习辅助工具' },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  tagline: { type: String, default: '' },
  actions: { type: Array, default: () => [] }
})

const pointerStyle = ref({})
const onMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width) * 100
  const y = ((e.clientY - rect.top) / rect.height) * 100
  pointerStyle.value = {
    '--pointer-x': `${x}%`,
    '--pointer-y': `${y}%`
  }
}

const mounted = ref(false)
onMounted(() => {
  requestAnimationFrame(() => {
    mounted.value = true
  })
})

let observer
onMounted(() => {
  const root = document.documentElement
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  if (reduced || !('IntersectionObserver' in window)) return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-inview', entry.isIntersecting)
      })
    },
    { threshold: 0.15 }
  )
  document.querySelectorAll('.custom-home .reveal, .vp-doc .reveal').forEach((el) => {
    observer.observe(el)
  })
  void root
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <section
    class="home-hero"
    :class="{ 'is-ready': mounted }"
    :style="pointerStyle"
    @mousemove="onMove"
  >
    <div class="home-hero__glow" aria-hidden="true"></div>
    <div class="home-hero__grid-bg" aria-hidden="true"></div>

    <div class="home-hero__inner">
      <p v-if="badge" class="home-hero__badge">
        <span class="home-hero__badge-dot"></span>{{ badge }}
      </p>

      <h1 class="home-hero__title">
        <span class="home-hero__title-gradient">{{ title }}</span>
      </h1>

      <p v-if="subtitle" class="home-hero__subtitle">{{ subtitle }}</p>
      <p v-if="tagline" class="home-hero__tagline">{{ tagline }}</p>

      <div v-if="actions.length" class="home-hero__actions">
        <a
          v-for="action in actions"
          :key="action.text"
          class="home-hero__btn"
          :class="`theme-${action.theme || 'alt'}`"
          :href="action.link"
          :target="action.target || (action.link?.startsWith('http') ? '_blank' : undefined)"
          :rel="action.link?.startsWith('http') ? 'noreferrer' : undefined"
        >
          {{ action.text }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-hero {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: 68px 0 72px;
  margin-bottom: 8px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.home-hero__grid-bg {
  position: absolute;
  inset: 0;
  z-index: -2;
  background-image:
    linear-gradient(var(--vp-x-grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--vp-x-grid-line) 1px, transparent 1px);
  background-size: 34px 34px;
  mask-image: radial-gradient(ellipse 90% 75% at 50% 40%, #000 5%, transparent 78%);
  -webkit-mask-image: radial-gradient(ellipse 90% 75% at 50% 40%, #000 5%, transparent 78%);
}

.home-hero__glow {
  position: absolute;
  inset: -30% -10% auto -10%;
  height: 130%;
  z-index: -1;
  background:
    radial-gradient(
      420px circle at var(--pointer-x, 50%) var(--pointer-y, 30%),
      var(--vp-x-glow) 0%,
      transparent 62%
    ),
    radial-gradient(900px 420px at 12% 8%, var(--vp-c-brand-soft) 0%, transparent 62%),
    radial-gradient(760px 380px at 88% 22%, rgba(6, 182, 212, 0.14) 0%, transparent 66%);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.home-hero.is-ready .home-hero__glow {
  opacity: 1;
}

.home-hero__inner {
  position: relative;
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
}

.home-hero__badge {
  display: inline-flex;
  align-items: center;
  justify-self: center;
  gap: 8px;
  margin: 0 auto 22px;
  padding: 6px 15px 6px 12px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  border-radius: 999px;
  border: 1px solid var(--vp-x-border-brand);
  background: var(--vp-c-brand-soft);
  backdrop-filter: blur(6px);
  opacity: 0;
  transform: translateY(12px);
  animation: hero-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.05s forwards;
}

.home-hero__badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  box-shadow: 0 0 0 4px var(--vp-c-brand-soft);
  animation: pulse-dot 2.4s ease-in-out infinite;
}

.home-hero__title {
  margin: 0;
  font-size: clamp(2.5rem, 1.6rem + 3.4vw, 4.2rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.035em;
  opacity: 0;
  transform: translateY(16px);
  animation: hero-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.14s forwards;
}

.home-hero__title-gradient {
  background: linear-gradient(
    100deg,
    var(--vp-c-brand-1) 0%,
    #2dd4bf 42%,
    var(--vp-c-brand-1) 100%
  );
  background-size: 220% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-pan 9s linear infinite;
}

.home-hero__subtitle {
  max-width: 720px;
  margin: 22px auto 0;
  font-size: clamp(1.05rem, 0.95rem + 0.4vw, 1.35rem);
  font-weight: 600;
  line-height: 1.6;
  color: var(--vp-c-text-1);
  opacity: 0;
  transform: translateY(16px);
  animation: hero-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.22s forwards;
}

.home-hero__tagline {
  max-width: 640px;
  margin: 14px auto 0;
  font-size: clamp(0.9rem, 0.85rem + 0.25vw, 1rem);
  line-height: 1.75;
  color: var(--vp-c-text-2);
  opacity: 0;
  transform: translateY(16px);
  animation: hero-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards;
}

.home-hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 38px;
  opacity: 0;
  transform: translateY(16px);
  animation: hero-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.38s forwards;
}

.home-hero__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 132px;
  padding: 0 22px;
  height: 46px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 12px;
  text-decoration: none !important;
  white-space: nowrap;
  transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.22s ease,
    background-color 0.22s ease, border-color 0.22s ease;
}

.home-hero__btn:hover {
  transform: translateY(-2px);
}

.home-hero__btn.theme-brand {
  color: #fff !important;
  border: 1px solid transparent;
  background: linear-gradient(135deg, var(--vp-c-brand-2), var(--vp-c-brand-1) 55%, #14b8a6);
  box-shadow: 0 12px 26px -12px var(--vp-x-glow);
}

.home-hero__btn.theme-brand:hover {
  box-shadow: 0 18px 34px -14px var(--vp-x-glow);
}

.home-hero__btn.theme-alt {
  color: var(--vp-c-text-1) !important;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.home-hero__btn.theme-alt:hover {
  border-color: var(--vp-x-border-brand);
  background: var(--vp-c-brand-soft);
}

.home-hero__btn.theme-sponsor {
  color: #b45309 !important;
  border: 1px solid rgba(245, 158, 11, 0.42);
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.18), rgba(245, 158, 11, 0.06));
}

.home-hero__btn.theme-sponsor:hover {
  border-color: #f59e0b;
  box-shadow: 0 16px 30px -18px #f59e0b;
}

.dark .home-hero__btn.theme-sponsor {
  color: #fbbf24 !important;
}

@keyframes hero-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradient-pan {
  to {
    background-position: 220% center;
  }
}

@keyframes pulse-dot {
  0%,
  100% {
    box-shadow: 0 0 0 4px var(--vp-c-brand-soft);
  }
  50% {
    box-shadow: 0 0 0 8px transparent;
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-hero__badge,
  .home-hero__title,
  .home-hero__subtitle,
  .home-hero__tagline,
  .home-hero__actions {
    opacity: 1;
    transform: none;
    animation: none;
  }
  .home-hero__title-gradient {
    animation: none;
  }
}

@media (max-width: 640px) {
  .home-hero {
    padding: 48px 0 52px;
  }
  .home-hero__inner {
    padding: 0 20px;
  }
  .home-hero__btn {
    flex: 1 1 100%;
    min-width: 0;
  }
}
</style>
