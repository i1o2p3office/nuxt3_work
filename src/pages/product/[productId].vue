<template>
  <div class="px-[15em] pt-10">
    <div class="grid grid-cols-2 gap-10">
      <div class="w-full flex flex-col gap-5">
        <div class="w-full">
          <img class="w-full" :src="firstImg" />
        </div>
        <div class="grid grid-cols-2 gap-5">
          <div class="w-full" v-for="img in imgs">
            <img class="w-full" :src="img" />
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="sticky top-[36px]">
          <h1 class="font-bold text-black text-4xl mb-2">{{ productData.name }}</h1>
          <div class="flex items-end gap-2 mb-5">
            <p
              v-if="productData.Rebate < 1"
              class="text-[#797979] text-sm leading-4 font-medium line-through"
            >
              NT$ {{ productData.originalPrice.toLocaleString() }}
            </p>
            <p class="text-lg leading-5 font-bold">NT$ {{ productData.price.toLocaleString() }}</p>
          </div>
          <div class="flex flex-col gap-2">
            <!-- size -->
            <p class="font-semibold text-lg text-[#5f5e5e]">{{ $t('front.product.size') }}</p>
            <div class="flex gap-1">
              <button
                class="text-sm rounded-lg px-5 py-1 border border-black"
                :class="select.size !== size ? 'bg-white text-black' : 'bg-black text-white'"
                @click="select.size = size"
                v-for="size in productData.size"
              >
                {{ size }}
              </button>
            </div>
            <!-- color -->
            <p class="font-semibold text-lg text-[#5f5e5e]">{{ $t('front.product.color') }}</p>
            <div class="flex gap-1">
              <button
                class="text-sm rounded-lg px-5 py-1 border border-black"
                :class="select.color !== color ? 'bg-white text-black' : 'bg-black text-white'"
                @click="select.color = color"
                v-for="color in productData.color"
              >
                {{ color }}
              </button>
            </div>
            <!-- stock -->
            <p class="font-semibold text-lg text-[#5f5e5e]">{{ $t('front.product.stock') }}</p>
            <p v-if="productData.stock > 0" class="text-lg text-black">{{ productData.stock }}</p>
            <p v-else class="text-lg text-red-500">{{ $t('front.product.soldOut') }}</p>
            <!-- count -->
            <p class="font-semibold text-lg text-[#5f5e5e]">{{ $t('front.product.count') }}</p>
            <div class="w-[120px]">
              <numberInput v-model:count="select.count" :max="productData.stock" />
            </div>
            <div class="flex">
              <button
                class="w-full py-2 bg-black text-white font-bold rounded-full"
                :disabled="productData.stock === 0"
                @click="addCart"
              >
                {{ $t('front.product.addCart') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useAppStore } from '@/store/app'
import { getProduct } from '~/api/product'

const route = useRoute()
const appStore = useAppStore()
const { t } = useI18n()
const productData = ref({
  img: [],
  price: 0,
  originalPrice: 0,
  stock: 0
})
const select = ref({
  size: '',
  color: '',
  count: 0
})

const firstImg = computed(() => {
  return productData.value.img[0]
})
const imgs = computed(() => {
  // 移除陣列第一個元素
  var arr = [...productData.value.img]
  arr.shift()
  return arr
})

const getData = async () => {
  await useCustomFetch(...getProduct(route.params.productId), {
    success: (res) => {
      productData.value = res
      select.value.size = res.size[0]
      select.value.color = res.color[0]
      if (res.stock > 0) {
        select.value.count = 1
      }
    }
  })
}

const addCart = () => {
  appStore.setNotifys({
    type: 'success',
    message: t('front.addedToCart')
  })
}

getData()

watch(
  () => select.value.count,
  (v) => {
    // 正規化檢查是否數字
    if (!/^\d+$/.test(v)) {
      select.value.count = productData.value.stock > 0 ? 1 : 0
    }
  }
)
</script>
