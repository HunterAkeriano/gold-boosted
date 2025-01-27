<template>
  <CheckboxComponent
    class="product-filter__checkbox"
    v-for="(param, index) in filter.subfilters"
    :key="index"
    :value="param"
    :id="param.title + index"
    rectangle="true"
    v-model="selectedValues[index]"
  >
    <span class="product-filter__checkbox-name">
      {{ param.title }}
    </span>

    <span class="product-filter__checkbox-price">${{ param.price }}</span>
  </CheckboxComponent>
</template>

<script setup>
import CheckboxComponent from '@/atoms/ui/CheckboxComponent/CheckboxComponent.vue'

defineProps(['filter'])

const selectedValues = defineModel()
</script>
