<template>
  <div class="bg-gray-50 min-h-[100vh]">
    <HeaderLayout headerTitle="Login" />
    <FormLayout>
      <template #inputs>
        <Input
          inputName="useremail"
          inputLabel="Email"
          inputType="email"
          inputPlaceholder="youremail@email.com"
        />
        <Input
          inputName="userpassword"
          inputLabel="Password"
          inputType="password"
          inputPlaceholder="*********"
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
    <CallToActionBtn buttonText="Login" />

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
</script>

<style lang="scss" scoped></style>
