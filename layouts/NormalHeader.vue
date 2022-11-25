<template>
  <header class="header">
    <nav class="nav flex justify-center relative items-center gap-5 w-full min-h-[10vh] px-3 bg-white">
      <BackButton additionalClasses="absolute top-1/2 -translate-y-1/2 left-2" />
      <h1 class="font-bold" :class="props.alignment">{{ props.headerTitle }}</h1>
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
