<template>
  <div class="product-filter">
    <p class="product-filter__title">
      {{ filter.title }}
    </p>

    <LevelDropDown
      class="product-filter__dropdown"
      v-if="filter.type === 'Select'"
      :valuesList="filter.subfilters"
      v-model="selectedValues[0]"
    />

    <template v-if="filter.type === 'Slider'">
      <RangeSlider :list="filter.subfilters" v-model="selectedValues[0]" />
    </template>

    <template v-if="filter.type === 'Radio'">
      <RadioButtonGroup
        :defaultCheckedIndex="defaultCheckedIndex"
        :filter="filter"
        v-model="selectedValues[0]"
      />
    </template>

    <template v-if="filter.type === 'CheckBox'">
      <CheckBoxGroup :filter="filter" v-model="selectedValues" />
    </template>
  </div>
</template>

<script setup>
import LevelDropDown from '@/molecules/FilterDropDown/FilterDropDown.vue'
import RangeSlider from '@/atoms/ui/RangeSlider/RangeSlider.vue'
import { ref } from 'vue'
import RadioButtonGroup from '@/molecules/RadioButtonGroup/RadioButtonGroup.vue'
import CheckBoxGroup from '@/molecules/CheckBoxGroup/CheckBoxGroup.vue'

defineProps(['isLoading', 'filter'])

const selectedValues = ref([])
const defaultCheckedIndex = 0
const checkedFilter = defineModel()

checkedFilter.value = selectedValues.value
</script>

<style>
@import './ProductFilter.scss';
</style>
