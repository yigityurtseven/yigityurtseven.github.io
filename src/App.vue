<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Group home + project routes under one key so HomePage doesn't re-mount on modal open/close
const routeKey = computed(() => {
  if (route.name === 'home' || route.name === 'project') return 'home'
  return route.path
})
</script>

<template>
  <div class="app-shell">
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" :key="routeKey" />
      </Transition>
    </RouterView>
  </div>
</template>

<style>
* {
  font-family: 'Clash Display', 'Archivo', 'Helvetica', sans-serif;
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #0F0F0F;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-shell {
  min-height: 100vh;
}

/* Page transitions */
.page-enter-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.page-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
