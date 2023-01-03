<template>
  <NormalHeader headerTitle="Favourites" />
  <Navigation :activeItem="3" />
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <main class="main px-3 pt-3 bg-gray-50">
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
      <button @click="toggleLayout" class="layout-toggle">
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
      <FavouriteItem :rating=5 itemName="Lime" itemType="Shirt" itemColour="Blue" itemSize="L" itemPrice="32" :layoutIsGrid=layoutIsGrid />
      <FavouriteItem :rating=0 itemName="Mango" itemType="Longsleeve Violeta" itemColour="Orange" itemSize="S" itemPrice="42" :layoutIsGrid=layoutIsGrid />
    </div>
  </main>
</template>

<script setup>
import NormalHeader from '~~/layouts/NormalHeader.vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import { ref } from 'vue';

let layoutIsGrid = ref(false)

const toggleLayout = () => {
  layoutIsGrid.value = !layoutIsGrid.value;
};
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
</style>
