<template>
  <NormalHeader headerTitle="Shipping Addresses" />
  <main class="main px-3 pt-3 bg-gray-50 flex flex-col gap-5">
    <h2 class="font-bold text-xs">Your shipping addresses</h2>
    <Address
      name="Jane Doe"
      street="3 Newbridge Court"
      city="Chino Hills, CA 91709, United States"
      id="first-address"
    />
    <Address
      name="John Doe"
      street="3 Newbridge Court"
      city="Chino Hills, CA 91709, United States"
      id="second-address"
    />
    <Address
      name="John Doe"
      street="51 Riverside"
      city="Chino Hills, CA 91709, United States"
      id="third-address"
    />
  </main>
  <NuxtLink to="/profile/add-shipping-address"
    @click="toggleModal"
    class="add-card-btn flex justify-center items-center rounded-full shadow-lg bg-black text-white p-2 fixed bottom-3 right-3"
  >
    <client-only>
      <font-awesome-icon :icon="['fas', 'plus']" />
    </client-only>
  </NuxtLink>
</template>

<script setup>
import NormalHeader from '~~/layouts/NormalHeader.vue';
</script>

<style lang="scss" scoped></style>
