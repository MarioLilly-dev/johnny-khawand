<template>
  <div v-if="visible" class="preloader">
    <div class="loader-bar"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const visible = ref(true);

onMounted(() => {
  // Hide after small delay (simulate loading)
    visible.value = false;
});
</script>

<style scoped>
.preloader {
  position: fixed;
  inset: 0;
  background: var(--bg);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader-bar {
  width: 80px;
  height: 2px;
  background: var(--text-dark);
  animation: loading 1.2s ease infinite;
}

@keyframes loading {
  0% { transform: scaleX(0); opacity: 0.5; }
  50% { transform: scaleX(1); opacity: 1; }
  100% { transform: scaleX(0); opacity: 0.5; }
}
</style>
