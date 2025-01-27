<template>
  <div class="payment-method">
    <h2 class="payment-method__title basket-section-title">
      {{ $t('basketPage.paymentMethod') }}
    </h2>

    <PaymentList class="payment-method__payments-list" />
  </div>
</template>

<script setup>
import PaymentList from '@/molecules/PaymentList/PaymentList.vue'
</script>

<style>
@import 'PaymentMethod.scss';
</style>
