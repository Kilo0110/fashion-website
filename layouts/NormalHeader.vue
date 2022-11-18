<template>
  <header class="header">
    <nav class="nav flex items-center gap-5 w-full min-h-[10vh] px-3">
      <BackButton additionalClasses="self-center" />
      <h1 class="m-[0_auto]" :class="props.alignment">{{ props.headerTitle }}</h1>
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
