<template>
  <div ref="el">
    <!-- 至頂優惠訊息 -->
    <Announcement />
    <!-- 因至頂優惠高度36px -->
    <div class="pt-[36px]">
      <!-- 登入bar -->
      <LoginBar />
      <!-- 頁面pages -->
      <slot />
    </div>
    <!-- footer -->
    <Footer />
    <!-- loading -->
    <Loading v-if="isLoading" />
    <!-- 彈出視窗 -->
    <TransitionGroup name="nested">
      <component
        v-for="d in dialogs"
        :is="d.component"
        :data="d.data"
        @closeDialogs="closeDialogs(d.name)"
      ></component>
    </TransitionGroup>
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
const dialogs = computed(() => appStore.getDialogs)

const closeDialogs = (name) => {
  appStore.deleteDialogs(name)
}

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
