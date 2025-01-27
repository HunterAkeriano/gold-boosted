<template>
  <div class="basket-orders">
    <div class="product-order-block__footer">
      <PromoComponent class="product-order-block__promo" />

      <div class="bonus-points">
        <p class="bonus-points__title">Bonus points:</p>

        <PointIcon class="bonus-points__icon" />

        <p class="bonus-points__value">12</p>
      </div>

      <div class="total-price">
        <p class="total-price__title">Total:</p>

        <p class="total-price__value">$560</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductOrderListComponent from '@/molecules/ProductOrderList/ProductOrderList.vue'
import PromoComponent from '@/molecules/PromoComponent/PromoComponent.vue'
import PointIcon from '@/atoms/icons/PointIcon.vue'
</script>

<style>
@import './ProductOrderBlockComponent.scss';
</style>
