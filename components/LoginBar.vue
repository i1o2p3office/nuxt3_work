<template>
  <div>
    <div class="grid grid-cols-3 pt-9 px-12">
      <div></div>
      <div class="flex justify-center font-bold text-2xl cursor-pointer" @click="goHome">
        {{ $t('front.title') }}
      </div>
      <div class="flex justify-end items-center gap-5 text-lg">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="cursor-pointer" />
        <font-awesome-icon :icon="['fas', 'user']" class="cursor-pointer" />
        <font-awesome-icon :icon="['fas', 'cart-shopping']" class="cursor-pointer" />
      </div>
    </div>
    <Nav />
  </div>
</template>

<script setup>
const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>
