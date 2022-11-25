<template>
  <div
    class="card-container flex flex-col bg-neutral-400 w-full h-48 justify-between gap-2 px-4 py-6 rounded-xl shadow-lg"
  >
    <img
      src="~~/img/Visa.png"
      alt=""
      class="mastercard-img w-10 object-cover self-end"
    />
    <p class="card-number text-white text-xl tracking-[0.2em]">
      **** **** **** 4546
    </p>
    <img
      src="~~/img/chip.png"
      alt=""
      class="chip w-10 object-cover"
    />
    <div class="card-details flex justify-between text-white">
      <div class="card-user-name">
        <p class="text-[0.6rem]">Card Holder Name</p>
        <p class="text-[0.75rem]">Jennyfer Doe</p>
      </div>
      <div class="card-expiry-info">
        <p class="text-[0.6rem]">Expiry Date</p>
        <p class="text-[0.75rem] expiry-date">11/22</p>
      </div>
    </div>
  </div>
  <div class="default-payment-checkbox-container flex gap-2 my-4">
    <input
      type="radio"
      name="defaultCard"
      id="visa"
      class="text-xs bg-black"
    />
    <label
      for="visa"
      class="text-xs"
      >Use as default payment method</label
    >
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
