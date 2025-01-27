<template>
  <form class="promo-block" @submit.prevent="checkPromoCode">
    <InputBlockComponent
      border
      placeholderText="Enter the promo code"
      buttonText="Apply"
      v-model="inputValue"
    >
    </InputBlockComponent>

    <p class="promo-block__promo-active" v-if="discount > 0">Promo code activated!</p>
  </form>
</template>

<script setup>
import InputBlockComponent from '@/molecules/InputBlock/InputBlock.vue'
import { ref } from 'vue'
import { getAsyncCheckPromoCode } from '@/api/orders.js'

const inputValue = ref('')
const discount = defineModel()

const checkPromoCode = () => {
  getAsyncCheckPromoCode(inputValue.value).then((response) => {
    discount.value = response.discount
  })
}
</script>

<style>
@import './PromoComponent.scss';
</style>
