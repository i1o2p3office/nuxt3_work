<template>
  <div class="flex items-center justify-between border border-[#d3d3d3] p-3">
    <ClientOnly>
      <font-awesome-icon
        :icon="['fas', 'minus']"
        class="cursor-pointer"
        @click="updateCount('minus')"
      />
    </ClientOnly>
    <input v-model="thisCount" class="w-10 text-center border-0 !pl-0" />
    <ClientOnly>
      <font-awesome-icon
        :icon="['fas', 'plus']"
        class="cursor-pointer"
        @click="updateCount('plus')"
      />
    </ClientOnly>
  </div>
</template>

<script setup>
const props = defineProps({
  count: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 0
  }
})
const emit = defineEmits(['update:count'])

const thisCount = ref(0)

const updateCount = (type) => {
  if (type === 'plus') {
    thisCount.value++
  } else {
    thisCount.value--
  }
}

watch(
  () => props.count,
  (v) => {
    thisCount.value = v
  }
)

watch(
  () => thisCount.value,
  (v) => {
    if (v < 0) {
      thisCount.value = 0
    }
    if (v > props.max) {
      thisCount.value = props.max
    }

    if (v == 0 && props.count > 0) {
      thisCount.value = 1
    }

    emit('update:count', thisCount.value)
  }
)
</script>
