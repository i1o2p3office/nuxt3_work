<template>
  <div class="w-full">
    <div class="px-[15em]">
      <p class="font-bold text-xl mb-5">{{ $t('front.mainPage.newProduct') }}</p>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12">
        <ProductBox
          v-for="n in newList"
          :key="n.id"
          :img="n.img"
          :imgSub="n.imgSub"
          :name="n.name"
          :Rebate="n.Rebate"
          :originalPrice="n.originalPrice"
          :price="n.price"
        />
      </div>
      <div class="flex justify-center w-full py-16">
        <NuxtLink to="/category/1" class="bg-black text-white font-bold px-8 py-3">
          {{ $t('front.mainPage.newButton') }}
        </NuxtLink>
      </div>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-3 w-full">
      <div v-for="h in hotList" class="relative w-full h-[36rem] overflow-hidden group">
        <img class="absolute w-full h-full object-cover object-center" :src="h.img" />
        <div
          class="absolute w-full h-full flex justify-center items-center z-[1] duration-500 opacity-0 group-hover:opacity-100"
        >
          <div class="absolute w-full h-full bg-black opacity-60"></div>
          <p class="text-base text-white z-[1] text-center">
            {{ h.name }}<br />Price: ${{ h.price }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getTopNewProduct, getHotProduct } from '~/api/product'

const newList = ref([])
const getNewList = async (p) => {
  await useCustomFetch(...getTopNewProduct(p), {
    success: (res) => {
      newList.value = res
    }
  })
}

const hotList = ref([])
const getHotList = async (p) => {
  await useCustomFetch(...getHotProduct(p), {
    success: (res) => {
      hotList.value = res
    }
  })
}

getNewList(1)
getHotList(1)
</script>
