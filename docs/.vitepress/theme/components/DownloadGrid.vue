<template>
  <div class="download-grid">
    <slot />
  </div>
</template>

<style scoped>
.download-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 14px;
  margin: 22px 0 8px;
}
</style>
