// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: [
    '~/assets/main.scss',
    '~/assets/style/style.scss',
    '~/assets/style/transition.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    'nuxt-swiper',
    '@nuxtjs/stylelint-module'
  ],
  imports: {
    dirs: ['stores']
  },
  i18n: {
    // vueI18n: './i18n.config.js',
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
  },
  stylelint: {
    lintOnStart: false, // 專案啟動時不自動檢查所有相關檔案
    chokidar: true // 監聽文件異動進行檢核（文件未列出此選項）
  }
})
