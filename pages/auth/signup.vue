<template>
  <div class="bg-gray-50 min-h-[100vh] px-3 pt-3">
    <HeaderLayout headerTitle="Sign up" />
    <FormLayout
      buttonText="Create Account"
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
    userStore.signUserUp(email.value, password.value)
  }
};
</script>

<style lang="scss" scoped></style>
