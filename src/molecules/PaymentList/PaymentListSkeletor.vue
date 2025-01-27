<template>
  <div class="payment-list">
    <PaymentItemSkeletor v-for="(payment, index) in 4" :key="index" />
  </div>
</template>

<script setup>
import PaymentItemSkeletor from '@/molecules/PaymentItem/PaymentItemSkeletor.vue'
</script>

<style>
@import 'PaymentList.scss';
</style>
