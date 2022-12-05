<template>
  <div class="bg-gray-50 min-h-[100vh] px-3 pt-3">
    <HeaderLayout headerTitle="Login" />
    <FormLayout
      buttonText="Login"
      @submit.prevent="handleSubmit"
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
      to="/auth/recover-password"
      class="my-3 block text-right text-sm"
    >
      Forgot your password?
      <client-only>
        <font-awesome-icon
          :icon="['fas', 'right-long']"
          class="text-red-500"
        />
      </client-only>
    </NuxtLink>

    <footer class="footer text-center mt-14">
      <p class="text-sm">Or log in with a social account</p>
      <div class="social-account-icon-container flex justify-center gap-3 my-4">
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
</template>

<script setup>
import HeaderLayout from '../../layouts/BoldHeader.vue';
import FormLayout from '../../layouts/Form.vue';
import {
  validateEmail,
  validatePassword,
} from '~~/composables/useValidation.js';
import { reactive } from 'vue';

import { useUserStore } from '~~/store/user';

const email = reactive({
  value: '',
  isValid: false,
});

const password = reactive({
  value: '',
  isValid: false,
  errorMessage: '',
});

const userStore = useUserStore();

const handleSubmit = () => {
  if (!validateEmail(email) && !validatePassword(password)) {
    console.warn('Inputs are not valid');
    return;
  } else {
    console.log('Inputs are valid');
    userStore.signUserIn(email.value, password.value);
  }
};
</script>

<style lang="scss" scoped></style>
