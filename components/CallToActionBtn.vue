<template>
  <button class="block w-full text-white text-center text-xs py-3 uppercase rounded-full shadow-md transition-all duration-300 active:scale-90" :class="props.isColored ? 'bg-red-600' : 'bg-transparent border-2 border-white hover:bg-red-600 hover:border-red-600'">
    {{ props.buttonText }}
  </button>
</template>

<script setup>
const props = defineProps({
  buttonText: {
    type: String,
    required: true,
  },
  isColored: {
    type: Boolean,
    default: true,
  },
  additionalClasses: {
    type: String,
    default: true,
  },
});
</script>

<style lang="scss" scoped></style>
