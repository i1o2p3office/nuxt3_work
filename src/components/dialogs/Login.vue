<template>
  <div class="dialog-mask">
    <div class="absolute w-full h-full bg-black opacity-90 z-[-1]" @click.self="closeDialogs"></div>
    <!-- 內容 -->
    <div class="dialog-container w-full lg:w-1/3 xl:w-1/4">
      <!-- 標題 -->
      <div class="flex justify-center mb-2">
        <div class="text-2xl text-black font-bold">{{ $t('front.login.title') }}</div>
      </div>
      <div class="flex flex-col gap-2 full">
        <div class="w-full">
          <input class="w-full rounded-full" :placeholder="$t('front.login.accountPlaceholder')" />
        </div>
        <div class="w-full">
          <input class="w-full rounded-full" :placeholder="$t('front.login.passwordPlaceholder')" />
        </div>
        <div class="w-full flex justify-center">
          <button class="w-full py-2 bg-black text-white font-bold rounded-full">
            {{ $t('front.login.title') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})
const emit = defineEmits(['closeDialogs'])

const closeDialogs = () => {
  emit('closeDialogs')
}
</script>

<style scoped>
@import '@/assets/style/Dialog.scss';
</style>
