<template>
  <div class="payment-list">
    <PaymentItem
      v-for="(payment, index) in paymentMethods"
      :key="index"
      :payment="payment"
      v-model="selectedPaymentName"
    />
  </div>
</template>

<script setup>
import PaymentItem from '@/molecules/PaymentItem/PaymentItem.vue'

defineProps(['paymentMethods'])
const selectedPaymentName = defineModel()
</script>

<style></style>
