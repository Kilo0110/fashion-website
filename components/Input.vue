<template>
  <div
    class="relative flex flex-col gap-1 px-4 py-2 bg-white shadow-md input-container"
  >
    <label
      class="text-xs text-slate-400"
      :for="props.inputName"
      >{{ inputLabel }}</label
    >
    <template v-if="!props.isPassword">
      <input
        class="text-sm text-black rounded-lg"
        :type="props.inputType"
        :name="props.inputName"
        :placeholder="props.inputPlaceholder"
        :value="props.modelValue"
        @input="(event) => emits('update:modelValue', event.target.value)"
      />
      <client-only>
        <font-awesome-icon
          :icon="props.isValid ? ['fas', 'check'] : ['fas', 'xmark']"
          class="absolute -translate-y-1/2 bg-white top-1/2 right-4"
          :class="props.isValid ? 'text-green-500' : 'text-red-500'"
        />
      </client-only>
    </template>
    
    <template v-else>
      <input
        class="text-sm text-black rounded-lg"
        :type="fieldType"
        :name="props.inputName"
        :placeholder="props.inputPlaceholder"
        :value="props.modelValue"
        @input="(event) => emits('update:modelValue', event.target.value)"
      />
      <client-only>
        <font-awesome-icon @click="makePasswordVisible"
          :icon="showPasswordIcon ? ['fas', 'eye-slash'] : ['fas', 'eye']"
          class="absolute -translate-y-1/2 bg-white top-1/2 right-4 cursor-pointer"
        />
      </client-only>
  
      <div v-if="props.isPassword" class="mt-1 password-error-message text-xs italic text-red-500 w-full">
        {{props.passwordError}}
      </div>
    </template>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

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
const showPasswordIcon = ref(true)
const fieldType = ref('text')

const makePasswordVisible = () => {
  showPasswordIcon.value = !showPasswordIcon.value
  if (fieldType.value === 'password') {
    fieldType.value = 'text'
  } else fieldType.value = 'password'
}

watch(props.inputType, (type) => {
  fieldType.value = type
})

onMounted(() => [
  fieldType.value = props.inputType
])
</script>

<style lang="scss" scoped>
input {
  outline: none !important;
}
</style>
