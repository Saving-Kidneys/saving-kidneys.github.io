<script setup>
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
</script>

<template>
  <div class="app-container">
    <TheHeader />
    <main class="main-content">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>
