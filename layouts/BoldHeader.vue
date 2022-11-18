<template>
  <header class="header">
    <nav class="nav flex flex-col gap-5 w-full min-h-[20vh]">
      <BackButton />
      <h1 class="text-2xl font-bold" :class="props.alignment">{{ props.headerTitle }}</h1>
    </nav>
  </header>
</template>

<script setup>
const props = defineProps({
  headerTitle: {
    type: String,
    default: ""
  },
  alignment: {
    type: String,
    default: ""
  }
})
</script>

<style lang="scss" scoped></style>
