<template>
  <div class="products-carousel-container w-full flex flex-col gap-3 pt-7">
    <header class="products-carouse__header relative flex flex-col">
      <h1 class="product-category-name text-3xl font-bold">
        {{ props.categoryName }}
      </h1>
      <span class="product-category-info text-xs text-gray-500">
        {{ props.categoryInfo }}
      </span> 
      <NuxtLink class="text-gray-500 absolute right-2 top-1/2 -translate-y-1/2 text-xs">
        View all
        <client-only>
          <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </client-only>
      </NuxtLink>
    </header>
    <swiper
      :slides-per-view="3"
      :loop="true"
      :space-between="120"
      class="w-full"
    >
      <swiper-slide class="flex">
        <Product
          :rating="3"
          productDesigner="Dorothy Perkins"
          productName="Evening Dress"
          :productNormalPrice="15"
          :productDiscount="20"
        />
      </swiper-slide>
      <swiper-slide>
        <Product
          :rating="4"
          productDesigner="Jenny Perkins"
          productName="Evening Dress"
          :productNormalPrice="25"
          :productDiscount="20"
        />
      </swiper-slide>
      <swiper-slide>
        <Product
          :rating="2"
          productDesigner="Dorothy Hyacinth"
          productName="Evening Dress"
          :productNormalPrice="15"
          :productDiscount="20"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

const props = defineProps({
  categoryName: {
    type: String,
    required: true,
  },
  categoryInfo: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped></style>
