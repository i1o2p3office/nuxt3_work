<template>
  <div>
    <NuxtPage />
    {{ loading }}
  </div>
</template>

<script setup>
import { useMouse } from '@vueuse/core'
import { getTest } from '~/api/test'
import { useAppStore } from '@/store/app'

// const { x, y } = useMouse();
const appStore = useAppStore()
const loading = computed(() => appStore.getLoading)

const getTestData = async () => {
  await useCustomFetch(...getTest(), {
    success: (res) => {
      console.log('data', res)
    }
  })
}

await getTestData()

// watch(
//   () => x,
//   (newValue, oldValue) => {
//     console.log("x", newValue.value);
//   },
//   { deep: true }
// );
</script>
