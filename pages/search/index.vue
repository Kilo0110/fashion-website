<template>
  <div class="bg-gray-50 min-h-[100vh]">
    <NormalHeader headerTitle="Visual search" />
    <main class="main min-h-[90vh] flex flex-col gap-3 justify-center px-4 min-w-[100vw]">
      <p class="information text-xl text-white">
        Search for an outfit by taking a photo or uploading an image
      </p>
      <div class="cta-container flex flex-col w-full gap-2">
        <CallToActionBtn buttonText="Take a photo" />
        <CallToActionBtn buttonText="Upload an image" :isColored=false />
      </div>
    </main>
  </div>
</template>

<script setup>
import NormalHeader from '~~/layouts/NormalHeader.vue';
</script>

<style lang="scss" scoped>
.main {
  background: url('~~/img/visual\ search\ 1.png') top center / cover;
}
</style>
