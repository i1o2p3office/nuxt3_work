<template>
  <div ref="loginBox" class="flex flex-col items-center bg-white duration-500">
    <div class="grid grid-cols-3 pt-9 px-12 w-full max-w-[100rem]">
      <div></div>
      <div class="flex justify-center font-bold text-2xl cursor-pointer" @click="goHome">
        {{ $t('front.title') }}
      </div>
      <div class="flex justify-end items-center gap-5 text-lg">
        <ClientOnly>
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="cursor-pointer" />
          <font-awesome-icon :icon="['fas', 'user']" class="cursor-pointer" />
          <font-awesome-icon :icon="['fas', 'cart-shopping']" class="cursor-pointer" />
        </ClientOnly>
      </div>
    </div>
    <Nav />
  </div>
</template>

<script setup>
import { useAppStore } from '@/store/app'

const router = useRouter()
const appStore = useAppStore()
const isTop = computed(() => appStore.getIsScrollTop)
const loginBox = ref(null)

const goHome = () => {
  router.push('/')
}

watch(isTop, (v) => {
  if (v) {
    loginBox.value.classList.add('login-bar')
  } else {
    loginBox.value.classList.remove('login-bar')
  }
})
</script>

<style scoped>
.login-bar {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 20;
}
</style>
