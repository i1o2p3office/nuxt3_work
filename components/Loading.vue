<template>
  <div class="fixed top-0 left-0 w-full h-full z-[99999]">
    <div class="absolute w-full h-full bg-black opacity-90 z-0"></div>
    <div class="container absolute top-[calc(50%-30px)] left-[calc(50%-30px)] z-10">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 60px;
}
.item {
  @apply animate-loading;
  width: 32%;
  height: 0;
  padding-top: 31%;
  margin-bottom: 3%;
  background-color: rgb(255, 255, 255);
}
.item:nth-child(1) {
  animation-delay: 0s;
}
.item:nth-child(2),
.item:nth-child(4) {
  animation-delay: 0.15s;
}
.item:nth-child(3),
.item:nth-child(5),
.item:nth-child(7) {
  animation-delay: 0.3s;
}
.item:nth-child(6),
.item:nth-child(8) {
  animation-delay: 0.45s;
}
.item:nth-child(9) {
  animation-delay: 0.6s;
}
</style>
