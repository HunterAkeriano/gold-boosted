<template>
  <div class="product-filters">
    <ProductFilter
      v-for="(filter, index) in filtersList"
      :key="index"
      :filter="filter"
      v-model="checkedFiltersList[index]"
    />
  </div>
</template>

<script setup>
import ProductFilter from '@/organisms/ProductFilter/ProductFilter.vue'

defineProps(['filtersList'])

const checkedFiltersList = defineModel()
</script>

<style>
@import 'ProductFilters.scss';
</style>
