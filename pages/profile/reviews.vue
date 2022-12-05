<template>
  <NormalHeader headerTitle="Your Reviews" />
  <main class="main px-3 pt-3 bg-gray-100">
    <h2 class="review-count text-xl font-bold">8 reviews</h2>
    <div class="reviews-container flex flex-col gap-5">
      <Review
        itemName="Gucci shirt"
        reviewDate="August 12, 2023"
        reviewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, neque. Labore nostrum temporibus omnis quaerat exercitationem quidem iste, aperiam maxime deserunt rem praesentium ullam beatae doloremque nesciunt sint odit sequi?"
        :rating="4"
      />
      <Review
        itemName="Versace shoe"
        reviewDate="August 12, 2021"
        reviewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, neque. Labore nostrum temporibus omnis quaerat exercitationem quidem iste, aperiam maxime deserunt rem praesentium ullam beatae doloremque nesciunt sint odit sequi?"
        :rating="4"
      />
    </div>
  </main>
</template>

<script setup>
import NormalHeader from '~~/layouts/NormalHeader.vue';
</script>

<style lang="scss" scoped></style>
