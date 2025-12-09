// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '@/assets/styles/fonts.css',
    '@/assets/styles/design-system.css',
  ],

    ssr: false,       // Disable SSR completely
    nitro: {
      preset: 'vercel-static' // ensures static output for Vercel
    },
    app: {
      baseURL: '/',  // Important for Vercel
    },
})
