<template>
  <div class="flex justify-center items-center w-full">
    <div class="flex gap-2 items-center text-lg">
      <font-awesome-icon
        :icon="['fas', 'angles-left']"
        :class="nowPage == 1 ? 'text-[#b1b1b1] cursor-not-allowed' : 'text-black cursor-pointer'"
        @click="change(1)"
      />
      <font-awesome-icon
        :icon="['fas', 'angle-left']"
        :class="nowPage == 1 ? 'text-[#b1b1b1] cursor-not-allowed' : 'text-black cursor-pointer'"
        @click="change(nowPage - 1)"
      />
    </div>
    <div class="flex gap-5 items-center text-lg mx-5">
      <div
        v-for="page in pages"
        :class="nowPage == page ? 'text-[#b1b1b1] cursor-not-allowed' : 'text-black cursor-pointer'"
        @click="change(page)"
      >
        {{ page }}
      </div>
    </div>
    <div class="flex gap-2 items-center text-lg">
      <font-awesome-icon
        :icon="['fas', 'angle-right']"
        :class="
          nowPage == maxPage ? 'text-[#b1b1b1] cursor-not-allowed' : 'text-black cursor-pointer'
        "
        @click="change(nowPage + 1)"
      />
      <font-awesome-icon
        :icon="['fas', 'angles-right']"
        :class="
          nowPage == maxPage ? 'text-[#b1b1b1] cursor-not-allowed' : 'text-black cursor-pointer'
        "
        @click="change(maxPage)"
      />
    </div>
  </div>
</template>

<script setup>
const porps = defineProps({
  nowPage: {
    type: Number,
    required: true
  },
  maxPage: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
})
const emit = defineEmits(['changePage'])

const pages = computed(() => {
  let startPage = porps.nowPage - 2
  let endPage = porps.nowPage + 2

  if (startPage < 1) {
    startPage = 1
    endPage = startPage + 4
  }

  if (endPage > porps.maxPage) {
    endPage = porps.maxPage
    startPage = porps.maxPage - 4 > 0 ? porps.maxPage - 4 : 1
  }

  let pages = []
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  return pages
})

const change = (page) => {
  if (page == porps.nowPage) return
  emit('changePage', page)
}
</script>
