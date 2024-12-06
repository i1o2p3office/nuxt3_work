<template>
	<li class="notify" :class="data.type" @click="closeNotifys">
		<span>{{ data.message }}</span>
		<div class="progress" :style="`width: ${progress}%`"></div>
	</li>
</template>

<script setup>
const porps = defineProps({
	data: {
		type: Object,
		default: () => ({})
	}
})

const emit = defineEmits(['closeNotifys'])

const closeNotifys = () => {
  emit('closeNotifys')
}

const progress = ref(0)

onMounted(() => {
  let currentProgress = 0
  const interval = setInterval(() => {
    currentProgress += 1
    progress.value = currentProgress
    if (currentProgress >= 100) {
      clearInterval(interval)
			closeNotifys()
    }
  }, 50)
})
</script>

<style scoped>
@import '@/assets/style/notify.scss';
</style>
