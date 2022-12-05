<template>
  <div
    class="favourite-item relative flex flex-col gap-1 bg-white"
    :class="props.layoutIsGrid ? '' : 'favourite-item-list-layout'"
  >
    <div class="img-container relative w-full">
      <img
        src=""
        alt=""
        class="favourite-item__img rounded-lg w-full aspect-square"
      />
      <button
        class="add-to-bag-btn flex justify-center items-center rounded-full shadow-lg bg-red-500 text-white p-2 absolute -bottom-3 right-0"
      >
        <client-only>
          <font-awesome-icon :icon="['fas', 'bag-shopping']" />
        </client-only>
      </button>
    </div>
    <button
      class="delete-item-btn absolute top-2 right-2 text-gray-200 cursor-pointer"
    >
      <client-only>
        <font-awesome-icon :icon="['fas', 'trash-can']" />
      </client-only>
    </button>
    <Ratings :rating="props.rating" />
    <div class="favourite-item__name-and-type">
      <p class="favourite-item__name text-xs">{{ props.itemName }}</p>
      <p class="favourite-item__type font-bold text-sm">{{ props.itemType }}</p>
    </div>
    <div class="favourite-item__colour-and-size flex gap-3 items-center">
      <p class="favourite-item__colour text-sm">
        Colour: <span class="font-bold">{{ props.itemColour }}</span>
      </p>
      <p class="favourite-item__size">
        Size:
        <span class="font-bold text-sm uppercase">{{ props.itemSize }}</span>
      </p>
    </div>
    <p class="favourite-item__price font-bold text-sm">
      ${{ props.itemPrice }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  rating: {
    type: Number,
  },
  itemName: {
    type: String,
    required: true,
  },
  itemType: {
    type: String,
    required: true,
  },
  itemColour: {
    type: String,
    required: true,
  },
  itemSize: {
    type: String,
    required: true,
  },
  itemPrice: {
    type: String,
    required: true,
  },
  layoutIsGrid: {
    type: Boolean,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.favourite-item-list-layout {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-areas:
    'img nt nt'
    'img cs cs'
    'img pr ra';
  align-items: center;

  .favourite-item__name-and-type {
    grid-area: nt;
    margin-top: 0.5em;
  }

  .favourite-item__colour-and-size {
    grid-area: cs;
  }

  .favourite-item__price {
    grid-area: pr;
    margin-bottom: 0.5em;
  }

  .rating-container {
    grid-area: ra;
    margin-bottom: 0.5em;
  }

  .img-container {
    grid-area: img;

    .favourite-item__img {
      width: 100px !important;
    }
  }
}
</style>
