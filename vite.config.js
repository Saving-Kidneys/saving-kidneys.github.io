import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/saving-kidneys.github.io/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
