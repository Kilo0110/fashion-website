<template>
  <div class="rating-container flex gap-1">
    <client-only v-for="rating in props.rating">
      <font-awesome-icon
        :icon="['fas', 'star']"
        class="text-amber-400 text-xs"
      />
    </client-only>
  </div>
</template>

<script setup>
const props = defineProps({
  rating: {
    type: Number,
    default: 1,
  },
});
</script>

<style lang="scss" scoped></style>
