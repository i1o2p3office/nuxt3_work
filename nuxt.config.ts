// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  modules: ['@vueuse/nuxt', '@pinia/nuxt', '@nuxtjs/i18n'],
  imports: {
    dirs: ['stores']
  },
  i18n: {
    vueI18n: './i18n.config.js',
    strategy: 'no_prefix',
    langDir: './locales',
    locales: [
      {
        code: 'zh-TW',
        file: 'zh-TW.json'
      }
    ],
    lazy: true,
    defaultLocale: 'zh-TW'
  }
})
