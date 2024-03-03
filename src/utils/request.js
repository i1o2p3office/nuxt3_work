import { hash } from 'ohash'
import { useAppStore } from '@/store/app'
// import { useAsyncData } from "nuxt/app";

const request = (url = '', method = '', payload = null) => {
  const appStore = useAppStore()

  let options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'test123456'
    },
    onRequest({ request, options }) {
      // 開始請求時執行
      appStore.setLoading(true)
    },
    onResponse({ request, response, options }) {
      // 處理請求回覆資料
      appStore.setLoading(false)
    },
    onResponseError({ request, response, options }) {
      // 捕捉請求回覆時發生的錯誤
    }
  }

  if (payload) {
    if (method === 'GET') {
      options.query = payload
    } else {
      options.body = payload
    }
  }

  options['key'] = hash([payload ? JSON.stringify(payload) : '', url])
  return [url, options]
}

export default request
