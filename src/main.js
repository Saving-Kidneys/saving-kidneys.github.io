import { ViteSSG } from 'vite-ssg'
import { createHead } from '@unhead/vue'
import App from './App.vue'
import { routes } from './router'
import './assets/styles/main.css'

export const createApp = ViteSSG(
  App,
  { 
    routes,
    base: '/'
  },
  ({ app, router, isClient }) => {
    const head = createHead()
    app.use(head)
  }
)
