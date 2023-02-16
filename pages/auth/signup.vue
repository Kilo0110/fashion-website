<template>
  <div class="bg-gray-50 min-h-[100vh] px-3 pt-3">
    <HeaderLayout headerTitle="Sign up" />
    <FormLayout
      buttonText="Create Account"
      @submit.prevent="signUp(showLoader, email, password)"
    >
      <template #inputs>
        <Input
          inputName="useremail"
          inputLabel="Email"
          inputType="email"
          inputPlaceholder="youremail@email.com"
          v-model="email.value"
          :isValid="email.isValid"
          @input="validateEmail(email)"
        />
        <Input
          inputName="userpassword"
          inputLabel="Password"
          inputType="password"
          inputPlaceholder="*********"
          v-model="password.value"
          :isValid="password.isValid"
          :isPassword="true"
          :passwordError="password.errorMessage"
          @input="validatePassword(password)"
        />
      </template>
    </FormLayout>
    <NuxtLink
      to="/auth/signin"
      class="block my-3 text-sm text-right"
    >
      Already have an account?
      <client-only>
        <font-awesome-icon
          :icon="['fas', 'right-long']"
          class="text-red-500"
        />
      </client-only>
    </NuxtLink>

    <footer class="text-center footer mt-14">
      <p class="text-sm">Or sign up with a social account</p>
      <div class="flex justify-center gap-3 my-4 social-account-icon-container">
        <client-only>
          <font-awesome-icon
            :icon="['fab', 'google']"
            class="bg-white"
          />
        </client-only>
        <client-only>
          <font-awesome-icon
            :icon="['fab', 'square-facebook']"
            class="bg-white"
          />
        </client-only>
      </div>
    </footer>
  </div>
  <transition name="toast">
    <Toast
      :warning="toastOptions.isWarning"
      :error="toastOptions.isError"
      :text="toastOptions.text"
      v-if="showToast"
    />
  </transition>
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <div class="loading-overlay fixed top-0 left-0 w-[100vw] h-[100vh] bg-slate-800 opacity-40 flex justify-center items-center" v-if="showLoader">
    <component :is="ScaleLoader"/>
  </div>
</template>

<script setup>
import HeaderLayout from '../../layouts/BoldHeader.vue';
import FormLayout from '../../layouts/Form.vue';
import Toast from '../../components/Toast.vue';

import { onAuthStateChanged } from 'firebase/auth';
import { storeToRefs } from 'pinia';

import { useUserStore } from '~~/store/user.js';

import {
  validateEmail,
  validatePassword,
} from '~~/composables/useValidation.js';

import {useToast} from '~~/composables/useToast.js';

import { signUp } from '~~/composables/useAuth.js';

import { auth } from '~~/firebase/index.js';

import { reactive, ref } from 'vue';

const ScaleLoader = resolveComponent('ScaleLoader');

const userStore = useUserStore();

const { authenticationError } = storeToRefs(userStore);

const showToast = ref(false);
const showLoader = ref(false);
const toastOptions = ref({
  text: '',
  isError: false,
  isWarning: false,
});

const email = reactive({
  value: '',
  isValid: false,
});

const password = reactive({
  value: '',
  isValid: false,
  errorMessage: '',
});

const redirectToProfileEditPage = () => navigateTo('/profile/verification');

const formatAuthError = (error) => {
  if (error) {
    let formattedError = error.replace('auth/', '').split('-').join(' ');
    return formattedError;
  } else return;
};

watch(authenticationError, () => {
  if (userStore.authenticationError === null) {
    toastOptions.value.text = '';
    showToast.value = false;
  } else {
    showLoader.value = false;
    let errorMsg = formatAuthError(userStore.authenticationError);
    toastOptions.value.isError = true;
    toastOptions.value.text = errorMsg;
    useToast(showToast, userStore.resetAuthenticationError)
  }
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    showLoader.value = false;
    toastOptions.value.isError = false;
    toastOptions.value.text = 'Login successful';
    useToast(showToast, redirectToProfileEditPage)
  }
});
</script>

<style lang="scss" scoped>
/* enter transitions */
.toast-enter-active {
  animation: wobble 0.5s ease;
}
/* leave transitions */
.toast-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.toast-leave-active {
  transition: all 0.3s ease;
}

@keyframes wobble {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  50% {
    transform: translateY(0px);
    opacity: 1;
  }
  60% {
    transform: translateX(8px);
    opacity: 1;
  }
  70% {
    transform: translateX(-8px);
    opacity: 1;
  }
  80% {
    transform: translateX(4px);
    opacity: 1;
  }
  90% {
    transform: translateX(-4px);
    opacity: 1;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
