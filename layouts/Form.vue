<template>
  <form action="" class="form flex flex-col gap-4 py-5" @submit.prevent="handleSubmit">
    <slot name="inputs"></slot>
    <CallToActionBtn :buttonText="props.buttonText" />
  </form>
</template>

<script setup>
const props = defineProps({
  buttonText: {
    type: String,
    required: true
  },
})

const emits = defineEmits(['onSubmit'])

const handleSubmit = (event) => {
  emits("onSubmit", event);
}
</script>

<style lang="scss" scoped></style>
