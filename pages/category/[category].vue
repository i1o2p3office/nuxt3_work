<template>
  <div class="px-[15em] pt-10">
    <div class="font-extrabold text-black text-4xl mb-8">
      {{ $t(`front.category.${$route.params.category}`) }}
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 mb-8">
      <ProductBox
        v-for="l in list.data"
        :pid="l.pid"
        :img="l.img"
        :imgSub="l.imgSub"
        :name="l.name"
        :rebate="l.Rebate"
        :originalPrice="l.originalPrice"
        :price="l.price"
      />
    </div>
    <Page :nowPage="nowPage" :maxPage="list.maxPage" :total="list.total" @changePage="changePage" />
  </div>
</template>

<script setup>
import { getList } from '~/api/product'

const route = useRoute()
const { y } = useWindowScroll()

const nowPage = ref(1)
const list = ref([])
const limit = ref(12)

const getLists = async () => {
  await useCustomFetch(...getList(nowPage.value, limit.value, route.params.category), {
    success: (res) => {
      list.value = res
      y.value = 0
    }
  })
}

const changePage = (p) => {
  nowPage.value = p
  getLists()
}

getLists()
</script>
