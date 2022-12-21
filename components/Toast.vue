<template>
  <div class="toast-wrapper">
    <div
      class="toast p-4 text-sm rounded-lg shadow-md text-center max-w-[90vw] mx-auto my-auto"
      :class="
        props.warning
          ? 'warning-toast'
          : props.error
          ? 'error-toast'
          : 'success-toast'
      "
    >
      {{ props.text }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  warning: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.toast-wrapper {
  position: fixed;
  width: 100%;
  top: 20px;
}
.error-toast {
  color: white;
  background: #ff0062;
}
.warning-toast {
  color: white;
  background: rgb(211, 196, 28);
}
.success-toast {
  color: white;
  background: seagreen;
}
</style>
