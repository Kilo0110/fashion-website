<template>
  <div class="address-container flex flex-col justify-center gap-2 bg-white rounded-lg shadow-xl p-5 relative">
    <button class="edit-address-btn text-red-500 absolute top-5 right-5 font-bold text-xs">Edit</button>
    <p class="name font-bold text-xs">{{ props.name }}</p>
    <div class="address">
      <p class="street text-xs">{{ props.street }}</p>
      <p class="city text-xs">{{ props.city }}</p>
    </div>
    <div class="default-address-checkbox-container flex gap-2">
      <input
        type="radio"
        name="defaultShippingAddress"
        :id="props.id"
        class="text-xs bg-black"
      />
      <label
        :for="props.id"
        class="text-xs"
        >Use as default shipping method</label
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
