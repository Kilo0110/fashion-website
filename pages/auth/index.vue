<template>
  <div class="bg-gray-50 min-h-[100vh] px-3 pt-3">
    <NormalHeader headerText=""/>
    <main class="main flex flex-col justify-center gap-2 min-h-[80vh]">
      <p class="welcome-text text-center text-2xl"><span class="text-4xl block font-bold">Hi there!</span> It's nice to see you!</p>
      <CallToActionBtn buttonText="Sign in" @click="redirectToSignIn" />
      <CallToActionBtn buttonText="Create new account" :isColored="false" @click="redirectToSignUp" />
    </main>
  </div>
</template>

<script setup>
import NormalHeader from '~~/layouts/NormalHeader.vue';

const redirectToSignIn = () => navigateTo('/auth/signin')
const redirectToSignUp = () => navigateTo('/auth/signup')

</script>

<style lang="scss" scoped></style>
