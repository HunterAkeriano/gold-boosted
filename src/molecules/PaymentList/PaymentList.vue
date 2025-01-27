<template>
  <template v-if="!isPaymentMethodsLoading">
    <PaymentListTemplate :paymentMethods="paymentMethods" v-model="selectedPaymentMethod" />
  </template>

  <template v-else>
    <PaymentListSkeletor />
  </template>
</template>

<script setup>
import PaymentListSkeletor from '@/molecules/PaymentList/PaymentListSkeletor.vue'
import PaymentListTemplate from '@/molecules/PaymentList/PaymentListTemplate.vue'
import PaypalIcon from '@/atoms/icons/PaypalIcon.vue'
import VisaIcon from '@/atoms/icons/VisaIcon.vue'
import MasterCardIcon from '@/atoms/icons/MasterCardIcon.vue'
import AmericanExpressIcon from '@/atoms/icons/AmericanExpressIcon.vue'

const selectedPaymentMethod = defineModel()

const paymentMethods = [
  { id: 0, icon: PaypalIcon, ariaLabel: 'PayPal' },
  { id: 1, icon: VisaIcon, ariaLabel: 'Visa' },
  { id: 2, icon: MasterCardIcon, ariaLabel: 'MasterCard' },
  { id: 3, icon: AmericanExpressIcon, ariaLabel: 'AmericanExpress' }
]

const isPaymentMethodsLoading = false
</script>

<style>
@import './PaymentList.scss';
</style>
