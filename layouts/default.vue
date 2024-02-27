<template>
  <div ref="el">
    <Announcement />
    <div class="pt-[36px]">
      <LoginBar />
      {{ isScrolling }}
      <slot />
    </div>
    <Footer />
    <Loading v-if="isLoading" />
  </div>
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const el = ref(null)
const { x: scrollX, y: scrollY } = useWindowScroll(el)
const currentY = ref(0)
const isLoading = computed(() => appStore.getLoading)

watch(scrollX, (v) => {
  appStore.setScrollX(v)
})
watch(scrollY, (v) => {
  appStore.setScrollY(v)
})
watch(scrollY, (v) => {
  if (currentY.value < v) {
    appStore.setIsScrollTop(false)
  } else {
    appStore.setIsScrollTop(true)
  }
  currentY.value = v
})
// watch(isLoading, (v) => {
//   if (v) {
//     document.body.style.overflow = 'hidden'
//   } else {
//     document.body.style.overflow = 'auto'
//   }
// })
</script>
