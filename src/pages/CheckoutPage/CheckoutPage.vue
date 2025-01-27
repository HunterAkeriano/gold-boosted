<template>
  <router-view></router-view>

  <div class="checkout-page">
    <PaymentResultComponent />
  </div>
</template>

<script setup>
import PaymentResultComponent from '@/organisms/PaymentResultComponent/PaymentResultComponent.vue'
</script>

<style>
@import './CheckoutPage.scss';
</style>
