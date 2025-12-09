// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '@/assets/styles/fonts.css',
    '@/assets/styles/design-system.css',
  ],

  ssr: false,                // SSG mode
  nitro: {
    preset: 'vercel-static', // Important for Vercel hosting
  },
  app: {
    baseURL: '/',            // Keep root
  }
})
