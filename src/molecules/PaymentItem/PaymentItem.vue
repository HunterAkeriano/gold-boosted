<template>
  <radio-button
    :id="'payment_' + payment.id"
    :ariaLabel="payment.ariaLabel"
    class="payment-item"
    name="paymentMethod"
    :value="payment.ariaLabel"
    v-model="selectedPaymentName"
  >
    <component class="payment-list__icon" :is="payment.icon" />
  </radio-button>
</template>

<script setup>
import RadioButton from '@/atoms/ui/RadioButtonComponent/RadioButton.vue'

defineProps(['payment'])
const selectedPaymentName = defineModel()
</script>

<style>
@import './PaymentItem.scss';
</style>
