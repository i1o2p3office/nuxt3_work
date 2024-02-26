import { defineStore } from 'pinia'

// 將其命名為useXXXStore，就像vue3的composable一樣
export const useAppStore = defineStore('app', {
  state: () => ({
    loading: false,
    scrollX: 0,
    scrollY: 0,
    isScrollTop: false
  }),
  actions: {
    setLoading(loading) {
      this.loading = loading
    },
    setScrollX(scrollY) {
      this.scrollY = scrollY
    },
    setScrollY(scrollY) {
      this.scrollY = scrollY
    },
    setIsScrollTop(isScrollTop) {
      this.isScrollTop = isScrollTop
    }
  },
  getters: {
    getLoading: (state) => state.loading,
    getScrollX: (state) => state.scrollX,
    getScrollY: (state) => state.scrollY,
    getIsScrollTop: (state) => state.isScrollTop
  }
})
