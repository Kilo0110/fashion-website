<template>
  <div
    class="review flex flex-col gap-2 rounded-2xl bg-white py-3 px-4 relative shadow-lg"
  >
    <button
      class="delete-item-btn absolute top-1 right-3 text-gray-200 cursor-pointer"
    >
      <client-only>
        <font-awesome-icon :icon="['fas', 'trash-can']" />
      </client-only>
    </button>
    <p class="text-xs font-bold item-name">{{props.itemName}}</p>
    <div class="rating-and-date-container flex justify-between items-center">
      <Ratings :rating=props.rating />
      <p class="time text-xs text-gray-400">{{props.reviewDate}}</p>
    </div>
    <p class="review__text text-xs font-light">{{props.reviewText}}</p>
    <CallToActionBtn buttonText="View this item" />
  </div>
</template>

<script setup>
const props = defineProps({
  itemName: {
    type: String,
    required: true
  },
  reviewDate: {
    type: String,
    required: true
  },
  reviewText: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
  },
})
</script>

<style lang="scss" scoped></style>
