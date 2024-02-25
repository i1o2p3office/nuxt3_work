import { defineStore } from 'pinia'

// 將其命名為useXXXStore，就像vue3的composable一樣
export const useAppStore = defineStore('app', {
  state: () => ({
    loading: false
  }),
  actions: {
    setLoading(loading) {
      this.loading = loading
    }
  },
  getters: {
    getLoading: (state) => state.loading
  }
})
