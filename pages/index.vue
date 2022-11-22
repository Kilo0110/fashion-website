<template>
  <main>
    <Navigation :activeItem="0" />
    <section
      class="hero-section flex flex-col max-w-[100vw] min-h-[100vh] basis-1/2"
    >
      <swiper
        :slides-per-view="1"
        :loop="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="w-full"
      >
        <swiper-slide
          class="flex items-end justify-end text-white min-h-[60vh]"
          id="new-collection-slide"
        >
          <div class="intro-slide__text-container text-2xl pb-3 pr-3 font-bold">
            <p class="capitalize">New collection</p>
            <CallToActionBtn
              buttonText="Shop now"
              :isColored="false"
            />
          </div>
        </swiper-slide>
        <swiper-slide
          class="flex items-end justify-end text-white min-h-[60vh]"
          id="funky-collection-slide"
        >
          <div class="intro-slide__text-container text-2xl pb-3 pr-3 font-bold">
            <p class="capitalize">Funky collection</p>
            <CallToActionBtn
              buttonText="Shop now"
              :isColored="false"
            />
          </div>
        </swiper-slide>
        <swiper-slide
          class="flex items-end justify-end text-white min-h-[60vh]"
          id="jewellery-collection-slide"
        >
          <div class="intro-slide__text-container text-2xl pb-3 pr-3 font-bold">
            <p class="capitalize">Jewellery collection</p>
            <CallToActionBtn
              buttonText="Shop now"
              :isColored="true"
            />
          </div>
        </swiper-slide>
      </swiper>
      <div
        class="sales-highlight-container grid grid-cols-2 grid-rows-2 min-h-[60vh]"
      >
        <h2
          class="sale-highlight-header flex justify-center items-center col-span-1 col-start-1 text-red-600 text-2xl font-bold px-4"
        >
          Summer Sale
        </h2>
        <div
          class="sale-image col-span-1 col-start-1 row-start-2 text-white flex items-end pl-2 pb-2 text-2xl font-bold"
          id="first-sale-image"
        >
          Black
        </div>
        <div
          class="sale-image col-span-1 col-start-2 row-start-1 row-span-2 text-white"
          id="second-sale-image"
        ></div>
      </div>
    </section>
    <section class="products-section pl-4">
      <Products categoryName="Sale" categoryInfo="Super summer sale" />
      <Products categoryName="New" categoryInfo="You've never seen it before" />
    </section>
  </main>
</template>

<script setup>
import Navigation from '~~/layouts/Navigation.vue';
import Products from '~~/layouts/Products.vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
</script>

<style lang="scss" scoped>
#new-collection-slide {
  background: url('~~/img/main.png') top center / cover;
}

#funky-collection-slide {
  background: url('~~/img/Banner.png') top center / cover;
}

#jewellery-collection-slide {
  background: url('~~/img/necklace.png') top center / cover;
}

#first-sale-image {
  background: url('~~/img/black.png') top center / cover;
}

#second-sale-image {
  background: url('~~/img/mens-hoodies.png') top center / cover;
}
</style>
