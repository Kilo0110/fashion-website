<template>
  <div class="container rounded-t-3xl px-3 pt-6 min-h-[70vh] fixed z-20 w-full bottom-0 left-0 bg-gray-50 flex flex-col">
    <button class="mb-5 w-12 h-1 bg-gray-600 rounded-full self-center" @click="handleClick"></button>
    <h2 class="header text-center text-sm font-bold">Add new card</h2>
    <Form buttonText="Add card">
      <template #inputs>
        <Input inputName="cardName" inputLabel="Name on card" inputType="text" inputPlaceholder="John Doe" />
        <Input inputName="cardNumber" inputLabel="Card number" inputType="number" inputPlaceholder="1234 5678 9012 3456" />
        <Input inputName="cardExpiryDate" inputLabel="Expiry Date" inputType="text" inputPlaceholder="01/01" />
        <Input inputName="cardCVV" inputLabel="CVV" inputType="number" inputPlaceholder="000" />
      </template>
    </Form>
  </div>
</template>

<script setup>
import Form from "~~/layouts/Form.vue"

const emits = defineEmits(["onClick"])

const handleClick = (event) => {
  emits("onClick", event);
}
</script>

<style lang="scss" scoped></style>
