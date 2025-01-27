<template>
  <div class="payment-method">
    <h2 class="payment-method__title basket-section-title">
      {{ $t('basketPage.paymentMethod') }}
    </h2>

    <PaymentListSkeletor class="payment-method__payments-list" />
  </div>
</template>

<script setup>
import PaymentListSkeletor from '@/molecules/PaymentList/PaymentListSkeletor.vue'
</script>

<style>
@import 'PaymentMethod.scss';
</style>
