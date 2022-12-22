<template>
  <template v-if="props.isPassword">
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
        :type="fieldType"
        :name="props.inputName"
        :placeholder="props.inputPlaceholder"
        :value="props.modelValue"
        @input="(event) => emits('update:modelValue', event.target.value)"
      />
      <client-only>
        <font-awesome-icon
          @click="makePasswordVisible"
          :icon="showPasswordIcon ? ['fas', 'eye-slash'] : ['fas', 'eye']"
          class="absolute -translate-y-1/2 bg-white top-1/2 right-4 cursor-pointer"
        />
      </client-only>

      <div
        class="mt-1 password-error-message text-xs italic text-red-500 w-full"
      >
        {{ props.passwordError }}
      </div>
    </div>
  </template>
  <template v-else-if="props.inputType === 'radio'">
    <div class="relative flex flex-col gap-1 px-4 input-container">
      <label
        class="text-xs text-slate-500"
        :for="props.inputID"
        >{{ inputLabel }}</label
      >
      <input
        class="text-sm text-black rounded-lg"
        :type="props.inputType"
        :name="props.inputName"
        :id="props.inputID"
      />
    </div>
  </template>
  <template v-else>
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
        :type="fieldType"
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
    </div>
  </template>
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
  inputID: {
    type: String,
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
const showPasswordIcon = ref(true);
const fieldType = ref('text');

const makePasswordVisible = () => {
  showPasswordIcon.value = !showPasswordIcon.value;
  if (fieldType.value === 'password') {
    fieldType.value = 'text';
  } else fieldType.value = 'password';
};

if (props.inputType === 'password') {
  watch(props.inputType, (type) => {
    fieldType.value = type;
  });
}

onMounted(() => [(fieldType.value = props.inputType)]);
</script>

<style lang="scss" scoped>
input {
  outline: none !important;
}
</style>
