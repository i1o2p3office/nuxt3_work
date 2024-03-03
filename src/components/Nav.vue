<template>
  <div class="flex justify-center mt-8 pb-5 border-b border-[#e7e7e7] w-full">
    <ul class="flex gap-6">
      <li class="items-center font-bold text-sm">
        <NuxtLink to="/">{{ $t('front.home') }}</NuxtLink>
      </li>
      <li
        v-for="nav in navList"
        class="relative flex items-center gap-2 font-bold text-sm group"
        @mouseover="mouseover(nav)"
        @mouseout="mouseout(nav)"
      >
        <NuxtLink :to="`/category/${nav.id}`">{{ nav.title }}</NuxtLink>
        <ClientOnly>
          <font-awesome-icon v-if="nav.sub" :icon="['fas', 'angle-down']" />
        </ClientOnly>
        <div
          :ref="(el) => setNavRefMap(el, nav)"
          v-if="nav.sub"
          class="absolute top-[20px] bg-white duration-300 overflow-hidden z-20"
          :style="'height: 0px;'"
        >
          <div
            :ref="(el) => setSubRefMap(el, nav)"
            class="pl-3 pr-10 py-6 flex flex-col gap-4 border border-[#b1b1b1]"
          >
            <NuxtLink
              :to="`/category/${sub.id}`"
              v-for="sub in nav.sub"
              class="font-bold text-sm whitespace-nowrap"
            >
              {{ sub.title }}
            </NuxtLink>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { getNav } from '~/api/nav'

const navList = ref([])
const { data } = await useFetch(...getNav())
navList.value = data.value
// const getNavList = async () => {
//   await useCustomFetch(...getNav(), {
//     success: (res) => {
//       navList.value = res
//     }
//   })
// }
// getNavList()

const mouseover = (nav) => {
  if (refSub.value[`sub${nav.id}`]) {
    navSub.value[`nav${nav.id}`].style.height = `${refSub.value[`sub${nav.id}`].offsetHeight}px`
  }
}
const mouseout = (nav) => {
  if (navSub.value[`nav${nav.id}`]) {
    navSub.value[`nav${nav.id}`].style.height = `0px`
  }
}

const refSub = ref({})
const setSubRefMap = (el, item) => {
  if (el) {
    refSub.value[`sub${item.id}`] = el
  }
}
const navSub = ref({})
const setNavRefMap = (el, item) => {
  if (el) {
    navSub.value[`nav${item.id}`] = el
  }
}

// watch(
//   () => refSub,
//   (newValue) => {
//     navList.value.forEach((item) => {
//       if (!item.sub) return
//       console.log(newValue.value[`sub${item.id}`].offsetHeight)
//     })
//   },
//   {
//     deep: true
//   }
// )

onMounted(() => {})
</script>
