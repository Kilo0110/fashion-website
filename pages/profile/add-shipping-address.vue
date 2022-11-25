<template>
  <NormalHeader headerTitle="Add Shipping Address" />
  <main class="main bg-gray-50 px-3 pt-3">
    <Form buttonText="Add address">
      <template #inputs>
        <Input inputName="shopper-name" inputLabel="Full Name" inputType="text" inputPlaceholder="John Doe" />
        <Input inputName="shippingAddress" inputLabel="Address" inputType="text" inputPlaceholder="10 Downing Washington" />
        <Input inputName="shippingAddressCity" inputLabel="City" inputType="text" inputPlaceholder="Chino Hills" />
        <Input inputName="shippingAddressState" inputLabel="State/Province/Region" inputType="text" inputPlaceholder="California" />
        <Input inputName="shippingAddressZipCode" inputLabel="Zip Code (Postal Code)" inputType="number" inputPlaceholder="012345" />
        <Input inputName="shippingAddressCountry" inputLabel="Country" inputType="text" inputPlaceholder="Your country" />
      </template>
    </Form>
  </main>
</template>

<script setup>
import NormalHeader from '~~/layouts/NormalHeader.vue';
import Form from '~~/layouts/Form.vue';
</script>

<style lang="scss" scoped></style>
