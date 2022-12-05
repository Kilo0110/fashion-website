<template>
  <NormalHeader headerTitle="Filters" />
  <main class="filter-container px-3 pt-3">
    <h2 class="text-xs font-bold">Price range</h2>
    <div class="price-filter-container">
      <Slider v-model="value" :step=-1 :max=1000 :tooltips=true showTooltip="drag" @update="getRangeValues" />
    </div>
  </main>
</template>

<script setup>
import NormalHeader from '~~/layouts/NormalHeader.vue';
import Slider from '@vueform/slider'

import { ref } from 'vue';

const value = ref([0, 100])

const getRangeValues = () => {
  let rangeValues = [...value.value]
}

</script>

<style lang="scss" src="@vueform/slider/themes/default.css"></style>
