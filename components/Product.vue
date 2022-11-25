<template>
  <div class="product flex flex-col gap-1 min-w-[130px] max-w-[130px]">
    <div class="img-container relative">
      <img
        src="~~/img/products/image-2.png"
        alt=""
        class="rounded-xl object-cover block h-[35vh] w-full"
      />
      <span
        v-show="props.productDiscount"
        class="discount-tag rounded-full text-white bg-red-600 px-2 py-1 text-[0.70em] absolute top-2 left-3"
        >-{{ props.productDiscount }}%</span
      >
      <button
        class="favourite-btn flex justify-center items-center rounded-full shadow-lg bg-white p-2 absolute bottom-0 right-0"
      >
        <client-only>
          <font-awesome-icon class="text-sm" :icon="['far', 'heart']" />
        </client-only>
      </button>
    </div>
    <Ratings :rating="props.rating" />
    <p class="product-designer text-xs text-gray-800">
      {{ props.productDesigner }}
    </p>
    <p class="product-name font-bold">
      {{ props.productName }}
    </p>
    <p class="product-price text-xs flex gap-1">
      <span
        class="normalProductPrice"
        :class="props.productDiscount ? 'line-through text-gray-700' : ''"
        >${{ props.productNormalPrice }}</span
      >
      <span
        v-show="props.productDiscount"
        class="discountProductPrice text-red-500"
        >{{ discountPrice }}</span
      >
    </p>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue';

const props = defineProps({
  rating: {
    type: Number,
    default: 1,
  },
  productDesigner: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productNormalPrice: {
    type: Number,
    required: true,
  },
  productDiscount: {
    type: Number,
  },
});

let discountPrice = reactive(null);

if (props.productDiscount) {
  let discount = parseInt(props.productDiscount);

  discountPrice = computed(() => {
    return `\$${
      props.productNormalPrice - props.productNormalPrice * (discount / 100)
    }`;
  });
}
</script>

<style lang="scss" scoped></style>
