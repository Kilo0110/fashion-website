<template>
  <NormalHeader headerTitle="Payment methods" />
  <main class="main min-h-[100vh] bg-gray-50 px-3 pt-3" :class="modalIsOpen ? 'pointer-events-none' : ''">
    <h2 class="font-bold text-xs my-4">Your payment cards</h2>
    <Mastercard />
    <Visa />
    <button @click="toggleModal" class="add-card-btn flex justify-center items-center rounded-full shadow-lg bg-black text-white p-2 fixed bottom-3 right-3">
      <client-only>
        <font-awesome-icon :icon="['fas', 'plus']" />
      </client-only>
    </button>
    <div v-show="modalIsOpen" class="overlay fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>
  </main>
  <AddNewCard @click="toggleModal" v-show="modalIsOpen" />

</template>

<script setup>
import NormalHeader from '~~/layouts/NormalHeader.vue';

import { ref } from 'vue';

let modalIsOpen = ref(false)

const toggleModal = () => {
  modalIsOpen.value = !modalIsOpen.value;
};
</script>

<style lang="scss" scoped></style>
