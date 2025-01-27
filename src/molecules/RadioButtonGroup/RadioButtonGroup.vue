<template>
  <div>
    <RadioButton
      class="product-filter__radiobutton"
      v-for="(param, index) in filter.subfilters"
      :key="index"
      :value="param"
      :name="filter.title + filter.id"
      :id="param.title + index"
      :index="index"
      v-model="selectedValue"
    >
      <span class="product-filter__name">
        {{ param.title }}
      </span>

      <span class="product-filter__price">${{ param.price }}</span>
    </RadioButton>
  </div>
</template>

<script setup>
import RadioButton from '@/atoms/ui/RadioButtonComponent/RadioButton.vue'

const props = defineProps(['filter', 'defaultCheckedIndex'])

const selectedValue = defineModel()
selectedValue.value = props.filter.subfilters[props.defaultCheckedIndex]
</script>
