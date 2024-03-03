<template>
  <div class="flex justify-center py-24">
    <div class="text-center font-semibold" v-html="discountText"></div>
  </div>
</template>

<script setup>
import { getDiscountText } from '~/api/mainPage'

const discountText = ref('')
const { data } = await useFetch(...getDiscountText())
discountText.value = data.value.html
</script>
