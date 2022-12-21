<template>
  <div
    class="relative flex flex-col gap-1 px-4 py-2 bg-white shadow-md input-container"
  >
    <label
      class="text-xs text-slate-400"
      :for="props.inputName"
      >{{ inputLabel }}</label
    >
    <input
      class="text-sm text-black rounded-lg"
      :type="props.inputType"
      :name="props.inputName"
      :placeholder="props.inputPlaceholder"
      :value="props.modelValue"
      @input="(event) => emits('update:modelValue', event.target.value)"
    />
    
    <client-only v-if="!props.isPassword">
      <font-awesome-icon
        :icon="props.isValid ? ['fas', 'check'] : ['fas', 'xmark']"
        class="absolute -translate-y-1/2 bg-white top-1/2 right-4"
        :class="props.isValid ? 'text-green-500' : 'text-red-500'"
      />
    </client-only>

    <client-only v-if="props.isPassword">
      <font-awesome-icon @click="makePasswordVisible"
        :icon="showPassword ? ['fas', 'eye-slash'] : ['fas', 'eye']"
        class="absolute -translate-y-1/2 bg-white top-1/2 right-4 cursor-pointer"
      />
    </client-only>

    <div v-if="props.isPassword" class="mt-1 password-error-message text-xs italic text-red-500 w-full">
      {{props.passwordError}}
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(['update:modelValue']);
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
  isValid: {
    type: Boolean,
    default: false,
  },
  isPassword: {
    type: Boolean,
    default: false,
  },
  passwordError: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
  },
});
const showPassword = ref(true)

const makePasswordVisible = () => {
  showPassword.value = !showPassword.value
  if (props.inputType === 'password') {
    props.inputType = 'text'
  } else props.inputType = 'password'
}
</script>

<style lang="scss" scoped>
input {
  outline: none !important;
}
</style>
