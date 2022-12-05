<template>
  <div
    class="rating-container flex gap-1"
  >
    <client-only v-for="(rating, index) in 5">
      <font-awesome-icon
        v-if="index < props.rating"
        :icon="['fas', 'star']"
        class="text-amber-400 text-xs"
      />
      <font-awesome-icon
        v-else
        :icon="['fas', 'star']"
        class="text-gray-200 text-xs"
      />
    </client-only>
  </div>
</template>

<script setup>
const props = defineProps({
  rating: {
    type: Number,
    default: 0,
  },
});
</script>

<style lang="scss" scoped></style>
