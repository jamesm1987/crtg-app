// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxtjs/supabase'
  ],

  devtools: {
    enabled: true
  },

  future: {
    compatibilityVersion: 4,
  },

  css: ['~/assets/css/main.css'],
  extends: [
    './layers/admin'
  ],

  routeRules: {
    '/': { prerender: true },
    '/admin/**': {ssr: false}
  },

    supabase: {
        redirectOptions: {
        login: '/login',
        callback: '/confirm',
        include: undefined,
        exclude: [],
        saveRedirectToCookie: false,
    }
  },
  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})