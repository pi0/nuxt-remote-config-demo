import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    'nuxt-remote-config'
  ],
  routeRules: {
    '/static': { prerender: true },
    '/swr': { swr: true },
    '/spa': { ssr: false }
  },
  nitro: {
    prerender: {
      routes: ['/static', '/spa']
    }
  }
})
