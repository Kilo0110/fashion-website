<template>
  <form action="" class="form flex flex-col gap-4 py-5">
    <slot name="inputs"></slot>
    <CallToActionBtn :buttonText="props.buttonText" />
  </form>
</template>

<script setup>
const props = defineProps({
  buttonText: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
