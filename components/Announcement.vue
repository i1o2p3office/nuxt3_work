<template>
  <div v-if="announcementList.length > 0" class="fixed top-0 left-0 w-full h-[36px]">
    <swiper
      :navigation="true"
      :modules="module"
      class="mySwiper"
      :style="{
        '--swiper-navigation-size': '14px',
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
        '--swiper-navigation-sides-offset': '15px'
      }"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false
      }"
      :loop="true"
    >
      <swiper-slide v-for="announcement in announcementList">
        <div
          class="w-full h-full flex items-center justify-center bg-black text-white font-bold cursor-pointer"
          @click="open(announcement.url)"
        >
          {{ announcement.title }}
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
// import required modules
import { Navigation, Autoplay } from 'swiper/modules'
import { getAnnouncement } from '~/api/announcement'

const module = ref([Navigation, Autoplay])

const announcementList = ref([])
const getAnnouncementList = async () => {
  await useCustomFetch(...getAnnouncement(), {
    success: (res) => {
      announcementList.value = res
    }
  })
}
getAnnouncementList()

const open = (url) => {
  if (!url) return
  window.open(url, '_blank')
}
</script>

<style scoped>
.swiper-wrapper:deep(.swiper-button-prev),
.swiper-wrapper:deep(.swiper-button-next) {
  color: #000;
}
</style>
