<template>
  <div
    class="relative w-full flex-wrap md:flex-nowrap min-h-[20rem] lg:min-h-[45rem] xl:min-h-[46.4rem] flex flex-col justify-end"
  >
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
      <img
        class="absolute w-full h-full object-cover object-center"
        src="~/assets/img/bg-2381.jpg"
      />
      <div class="absolute w-full h-full bg-black opacity-60 z-[1]"></div>
    </div>
    <div class="flex flex-col grow justify-center items-center text-white z-10">
      <p class="text-4xl mb-5">New in 5% off</p>
      <p class="text-xl">FREE SHIPPING OVER $2,000</p>
    </div>
    <div class="flex justify-center items-center z-10 pb-20">
      <button class="bg-white text-black font-bold px-8 py-3">
        {{ $t('front.mainPage.bannerButton') }}
      </button>
    </div>
  </div>
</template>
