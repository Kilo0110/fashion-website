<template>
  <NormalHeader headerTitle="Favourites" />
  <main class="main px-3 pt-3">
    <swiper
      class="filter-carousel"
      :slidesPerView="4"
      :spaceBetween="30"
    >
      <swiper-slide>
        <button
          class="filter-button text-xs text-center flex justify-center items-center bg-black text-white rounded-full py-2 px-4"
        >
          Summer
        </button>
      </swiper-slide>
      <swiper-slide>
        <button
          class="filter-button text-xs text-center flex justify-center items-center bg-black text-white rounded-full py-2 px-4"
        >
          T-shirts
        </button>
      </swiper-slide>
      <swiper-slide>
        <button
          class="filter-button text-xs text-center flex justify-center items-center bg-black text-white rounded-full py-2 px-4"
        >
          Shirts
        </button>
      </swiper-slide>
      <swiper-slide>
        <button
          class="filter-button text-xs text-center flex justify-center items-center bg-black text-white rounded-full py-2 px-4"
        >
          Shorts
        </button>
      </swiper-slide>
      <swiper-slide>
        <button
          class="filter-button text-xs text-center flex justify-center items-center bg-black text-white rounded-full py-2 px-4"
        >
          Gowns
        </button>
      </swiper-slide>
      <swiper-slide>
        <button
          class="filter-button text-xs text-center flex justify-center items-center bg-black text-white rounded-full py-2 px-4"
        >
          Beanies
        </button>
      </swiper-slide>
    </swiper>
    <div class="filter-container flex justify-between items-center my-3">
      <p class="filter-text flex items-center gap-2 text-xs">
        <client-only>
          <font-awesome-icon :icon="['fas', 'filter']" />
        </client-only>
        Filters
      </p>
      <p class="price-filter flex items-center gap-2 text-xs">
        <client-only>
          <font-awesome-icon :icon="['fas', 'sort']" />
        </client-only>
        <span
          v-text="
            true ? 'Price: lowest to highest' : 'Price: highest to lowest'
          "
        ></span>
      </p>
      <button class="layout-toggle">
        <client-only>
          <font-awesome-icon
            :icon="layoutIsGrid ? ['fas', 'grip-vertical'] : ['fas', 'list']"
          />
        </client-only>
      </button>
    </div>
    <div
      class="favourites-container"
      :class="layoutIsGrid ? 'grid-layout' : 'flex-layout'"
    >
      <div
        class="favourite-item"
        :class="
          layoutIsGrid
            ? 'favourite-item-grid-layout'
            : 'favourite-item-flex-layout'
        "
      >
        <img src="" alt="" class="favourite__img rounded-lg w-20 aspect-square">
        <Ratings :rating="props.rating" />
        <p class="favourite-item__name">{{props.itemName}}</p>
      </div>
    </div>
  </main>
</template>

<script setup>
import NormalHeader from '~~/layouts/NormalHeader.vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

const props = defineProps({
  rating: {
    type: Number
  }
})

let layoutIsGrid = true;
</script>

<style lang="scss" scoped>
.grid-layout {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
}

.flex-layout {
  display: flex;
  flex-direction: column;
  gap: 3em;
}

.favourite-item-grid-layout {

}
</style>
