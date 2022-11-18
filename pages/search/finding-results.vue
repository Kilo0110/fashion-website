<template>
  <div class="container flex flex-col gap-3 min-h-[100vh] justify-center items-center text-2xl">
    <client-only>
      <font-awesome-icon :icon="['fas', 'search']" class="text-red-500" />
    </client-only>
    <p class="information font-bold max-w-[250px] text-center">Finding similar results...</p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
