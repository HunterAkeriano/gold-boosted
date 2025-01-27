<template>
  <div class="multi-order embla" ref="emblaRef">
    <div class="multi-order__container embla__container">
      <MultiOrderItem
        class="multi-order__slide embla__slide"
        v-for="(item, index) in multiData.items"
        :key="index"
        :data="item"
      />
    </div>

    <div class="multi-order__total">
      <div class="single-order__price">
        <p class="single-order__price-title">Price:</p>

        <p class="single-order__price-value">${{ multiData.cost.toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import MultiOrderItem from '@/molecules/MultiOrderItem/MultiOrderItem.vue'
import emblaCarouselVue from 'embla-carousel-vue'

const props = defineProps(['multiData'])
console.log(props)

const [emblaRef] = emblaCarouselVue({
  align: 'start',
  breakpoints: {
    '(min-width: 1210px)': { active: false }
  }
})
</script>

<style lang="scss">
@import './MultiOrder.scss';
</style>
