<template>
  <div class="multi-order-block">
    <UIButton class="single-order__delete-button" @click="$emit('deleteProduct')" circle>
      <span></span>
    </UIButton>

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
        <div class="single-order__quantity">
          <p class="single-order__quantity-title">{{ $t('ordersPage.quantity') }}:</p>

          <p class="single-order__quantity-value">{{ multiData.quantity }}</p>
        </div>

        <div class="single-order__price">
          <p class="single-order__price-title">{{ $t('ordersPage.price') }}:</p>

          <div class="single-order__price-flex" v-if="multiData.sale_active">
            <p class="single-order__price-current">${{ multiData.cost_with_sale.toFixed(2) }}</p>

            <p class="single-order__price-last">${{ multiData.cost }}</p>

            <p class="single-order__price-percent">{{ multiData.sale_percent }}</p>
          </div>

          <p class="single-order__price-value" v-else>${{ multiData.cost_with_sale.toFixed(2) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MultiOrderItem from '@/molecules/MultiOrderItem/MultiOrderItem.vue'
import emblaCarouselVue from 'embla-carousel-vue'
import UIButton from '@/atoms/ui/UIButton/UIButton.vue'

defineProps(['multiData'])

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
