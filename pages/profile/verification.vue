<template>
  <div class="bg-gray-50 min-h-[100vh] px-3 pt-3">
    <NormalHeader headerText="" />
    <main class="main px-2 flex flex-col justify-center gap-2 min-h-[80vh]">
      <p class="info-text text-center text-xl"><span class="text-3xl block font-bold">Hi there!</span> A verification
        has being sent to your email. Head over there and verify your account to continue.</p>
    </main>
  </div>
</template>

<script setup>
import NormalHeader from '~~/layouts/NormalHeader.vue';

import { auth } from '~~/firebase';
import { sendEmailVerification, onAuthStateChanged } from 'firebase/auth';

// const user = auth.currentUser

// let actionCodeSettings = {
//   url: 'https://www.example.com/?email=' + firebase.auth().currentUser.email,
//   iOS: {
//     bundleId: 'com.example.ios'
//   },
//   android: {
//     packageName: 'com.example.android',
//     installApp: true,
//     minimumVersion: '12'
//   },
//   handleCodeInApp: true,
//   // When multiple custom dynamic link domains are defined, specify which
//   // one to use.
//   dynamicLinkDomain: "example.page.link"
// };
// firebase.auth().currentUser.sendEmailVerification(actionCodeSettings)
//   .then(function () {
//     // Verification email sent.
//   })
//   .catch(function (error) {
//     // Error occurred. Inspect error.code.
//   });

// 
// onAuthStateChanged(auth, user => {
//   user.sendEmailVerification()
// })

</script>

<style lang="scss" scoped>

</style>
