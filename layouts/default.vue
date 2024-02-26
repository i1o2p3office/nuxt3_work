<template>
  <div ref="el">
    <Announcement />
    <div class="pt-[36px]">
      <LoginBar />
      {{ isScrolling }}
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const el = ref(null)
const { x: scrollX, y: scrollY } = useWindowScroll(el)
const currentY = ref(0)

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
</script>
