<template>
  <div class="input-container bg-white py-2 px-4 flex flex-col gap-1 shadow-md relative">
    <label
      class="text-sm text-slate-400"
      :for="props.inputName"
      >{{ inputLabel }}</label
    >
    <input
      class="text-black text-md"
      :type="props.inputType"
      :name="props.inputName"
      :placeholder="props.inputPlaceholder"
      :class="props.additionalClasses"
    />
    <client-only>
      <font-awesome-icon
        :icon="['fas', 'check']"
        class="text-green-500 absolute top-1/2 -translate-y-1/2 right-4 bg-white"
      />
    </client-only>
  </div>
</template>

<script setup>
const props = defineProps({
  inputName: {
    type: String,
    required: true,
  },
  inputLabel: {
    type: String,
    required: true,
  },
  inputType: {
    type: String,
    required: true,
  },
  inputPlaceholder: {
    type: String,
    required: true,
  },
  additionalClasses: {
    type: Array,
    default: [],
  },
});
</script>

<style lang="scss" scoped>
input {
  outline: none !important;
}
</style>
