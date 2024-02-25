export default defineI18nConfig(async () => ({
  legacy: false,
  locale: 'zh-TW',
  messages: {
    'zh-TW': {
      back: await fetch('/api/locales/zh-TW', {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache'
        }
      })
        .then((res) => res.json())
        .catch((err) => console.error(err))
    }
  }
}))
