<template>
  <div>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const layout = ref('default')
// import { useMouse } from '@vueuse/core'
// import { getTest } from '~/api/test'
// import { useAppStore } from '@/store/app'

// const { x, y } = useMouse();
// const appStore = useAppStore()
// const loading = computed(() => appStore.getLoading)

// const getTestData = async () => {
//   await useCustomFetch(...getTest(), {
//     success: (res) => {
//       console.log('data', res)
//     }
//   })
// }

// await getTestData()

// watch(
//   () => x,
//   (newValue, oldValue) => {
//     console.log("x", newValue.value);
//   },
//   { deep: true }
// );
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
