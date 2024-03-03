<template>
  <NuxtLink :to="`/product/${pid}`" class="relative flex flex-col gap-2 cursor-pointer group">
    <div class="relative w-full h-[28.5rem] overflow-hidden">
      <img
        class="absolute w-full h-full object-cover object-center duration-500 opacity-100 group-hover:opacity-0"
        :src="img"
      />
      <img
        class="absolute w-full h-full object-cover object-center duration-500 opacity-0 group-hover:opacity-100"
        :src="imgSub"
      />
    </div>
    <p class="font-bold text-lg group-hover:underline">{{ name }}</p>
    <div class="flex items-center gap-1">
      <p v-if="rebate < 1" class="text-[#797979] text-sm font-medium line-through">
        NT$ {{ originalPrice.toLocaleString() }}
      </p>
      <p class="text-lg font-medium">NT$ {{ price.toLocaleString() }}</p>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  pid: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  imgSub: {
    type: String,
    required: true
  },
  name: {
    type: String,
    default: ''
  },
  rebate: {
    type: Number,
    default: 1
  },
  originalPrice: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})
</script>
