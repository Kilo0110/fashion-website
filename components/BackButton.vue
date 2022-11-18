<template>
  <button class="self-start" :class="props.additionalClasses" @click="goToPreviousPage">
    <client-only>
      <font-awesome-icon
        :icon="['fas', 'chevron-left']"
      />
    </client-only>
  </button>
</template>

<script setup>
const props = defineProps({
  additionalClasses: {
    type: String,
    default: ""
  }
})
const router = useRouter()
const goToPreviousPage = () => {
  router.go(-1)
}
</script>

<style lang="scss" scoped></style>
