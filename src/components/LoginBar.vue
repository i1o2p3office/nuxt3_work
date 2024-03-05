<template>
  <div
    ref="loginBox"
    class="flex flex-col items-center bg-white duration-200 sticky z-20"
    :style="!isTop ? `top: -${loginBoxHeight}px` : 'top: 0'"
  >
    <div class="grid grid-cols-3 pt-9 px-12 w-full max-w-[100rem]">
      <div></div>
      <div class="flex justify-center font-bold text-2xl cursor-pointer" @click="goHome">
        {{ $t('front.title') }}
      </div>
      <div class="flex justify-end items-center gap-5 text-lg">
        <ClientOnly>
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="cursor-pointer" />
          <font-awesome-icon @click="openLogin" :icon="['fas', 'user']" class="cursor-pointer" />
          <font-awesome-icon :icon="['fas', 'cart-shopping']" class="cursor-pointer" />
        </ClientOnly>
      </div>
    </div>
    <Nav />
  </div>
</template>

<script setup>
import { useAppStore } from '@/store/app'
import Login from '@/components/dialogs/Login'

const router = useRouter()
const appStore = useAppStore()
const isTop = computed(() => appStore.getIsScrollTop)
const loginBox = ref(null)
const loginBoxHeight = ref(0)

const goHome = () => {
  router.push('/')
}

const openLogin = () => {
  appStore.setDialogs({
    name: 'login',
    component: Login,
    width: '50%'
  })
}

onMounted(() => {
  loginBoxHeight.value = loginBox.value.offsetHeight
})
</script>
