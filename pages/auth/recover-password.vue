<template>
  <div class="bg-gray-50 min-h-[100vh] px-3 pt-3">
    <HeaderLayout headerTitle="Recover password" />
    <p class="text-xs">
      Please, enter your email address. You will receive a link to create a new password via email.
    </p>
    <FormLayout>
      <template #inputs>
        <Input
          inputName="useremail"
          inputLabel="Email"
          inputType="email"
          inputPlaceholder="youremail@email.com"
        />
      </template>
    </FormLayout>
    <CallToActionBtn buttonText="Send" />

  </div>
</template>

<script setup>
import HeaderLayout from '../../layouts/BoldHeader.vue';
import FormLayout from '../../layouts/Form.vue';
</script>

<style lang="scss" scoped></style>
