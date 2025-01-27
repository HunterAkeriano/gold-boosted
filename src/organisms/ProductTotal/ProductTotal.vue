<template>
  <form class="product-total" @submit="onSubmit">
    <div class="product-total__sale" v-if="!isLoading && product['sale_active']">
      <p class="product-total__sale-title">
        {{ $t('product.sale') }}
      </p>

      <p class="product-total__sale-period" v-if="product['sale_period'] != null">Time</p>

      <span class="product-total__sale-discount">
        {{ product['sale_percent'] }}
      </span>
    </div>

    <div class="product-total__inner">
      <div class="product-total__price">
        <template v-if="!isLoading">
          <p class="product-total__price-title">{{ $t('product.price') }}:</p>

          <p class="product-total__price-value">
            <span class="product-total__price-value-total"> ${{ getPrice() }} </span>

            <template v-if="product['sale_active']">
              <span class="product-total__price-value-last"> ${{ getLastPrice() }} </span>
            </template>
          </p>
        </template>

        <template v-else>
          <Skeletor class="product-total__price-title_skeletor" />

          <Skeletor class="product-total__price-value_skeletor" />

          <Skeletor class="product-total__price-title_skeletor" />
        </template>
      </div>

      <div class="product-total__bonus">
        <template v-if="!isLoading">
          <p class="product-total__bonus-title">{{ $t('product.bonusPoints') }}:</p>

          <p class="product-total__bonus-value">
            <PointIcon />
            {{ product['bonus_points'] * quantity }}
          </p>
        </template>

        <template v-else>
          <Skeletor class="product-total__bonus-title_skeletor" />

          <Skeletor class="product-total__bonus-value_skeletor" />
        </template>
      </div>

      <div class="product-total__quantity">
        <template v-if="!isLoading">
          <p class="product-total__quantity-title">{{ $t('product.quantity') }}</p>

          <div class="product-total__quantity-value">
            <input
              class="product-total__quantity-input"
              name="myInput"
              type="number"
              min="1"
              max="100"
              value="1"
              v-model="quantity"
              @input="validateQuantity"
            />
          </div>
        </template>

        <template v-else>
          <Skeletor class="product-total__quantity-title_skeletor" />

          <Skeletor class="product-total__quantity-value_skeletor" />
        </template>
      </div>

      <ButtonComponent rectangle type="submit" class="product-total__button" v-if="!isLoading">
        {{ $t('product.buyNow') }}
      </ButtonComponent>

      <Skeletor class="product-total__button_skeletor" v-else />

      <div class="product-total__payments">
        <template v-if="!isLoading">
          <PaypalIcon class="product-total__payment" />

          <VisaIcon class="product-total__payment" />

          <MasterCardIcon class="product-total__payment" />

          <AmericanExpressIcon class="product-total__payment" />
        </template>

        <template v-else>
          <Skeletor
            class="product-total__payment_skeletor"
            v-for="(item, index) in 4"
            :key="index"
          />
        </template>
      </div>
    </div>
  </form>
</template>

<script setup>
import ButtonComponent from '@/atoms/ui/UIButton/UIButton.vue'
import PointIcon from '@/atoms/icons/PointIcon.vue'
import MasterCardIcon from '@/atoms/icons/MasterCardIcon.vue'
import PaypalIcon from '@/atoms/icons/PaypalIcon.vue'
import VisaIcon from '@/atoms/icons/VisaIcon.vue'
import AmericanExpressIcon from '@/atoms/icons/AmericanExpressIcon.vue'
import { Skeletor } from 'vue-skeletor'
import 'vue-skeletor/dist/vue-skeletor.css'
import { ref, watch } from 'vue'
import { postAsyncToCartProduct } from '@/api/product.js'
import { useToast } from 'vue-toast-notification'
import { useRoute } from 'vue-router'

const props = defineProps(['product', 'isLoading', 'checkedFiltersList'])

const toast = useToast()
const quantity = ref(1)
const getPrice = () => {
  if (props.product['sale_active'] && props.product['sale_period'] != null) {
    return (
      ((props.product.price + calculateTotalPrice(props.checkedFiltersList)) *
        (quantity.value ? quantity.value : 1) *
        (100 - props.product['sale_percent'])) /
      100
    ).toFixed(2)
  } else {
    return (
      (props.product.price + calculateTotalPrice(props.checkedFiltersList)) *
      (quantity.value ? quantity.value : 1)
    ).toFixed(2)
  }
}

const validateQuantity = (event) => {
  let inputValue = parseInt(event.target.value)
  if (isNaN(inputValue) || inputValue < 1) {
    inputValue = 1
  } else if (inputValue > 99) {
    inputValue = 99
  }
  quantity.value = inputValue
}

const extractIds = (data) => {
  let allIds = []

  data.forEach((subarray) => {
    subarray.forEach((item) => {
      if (item && item.id !== undefined) {
        allIds.push(item.id)
      }
    })
  })

  return allIds
}

const calculateTotalPrice = (data) => {
  let totalPrice = 0

  data.forEach((subarray) => {
    subarray.forEach((item) => {
      if (item && item.price !== undefined) {
        totalPrice += item.price
      }
    })
  })

  return totalPrice
}

const route = useRoute()
const onSubmit = () => {
  event.preventDefault()
  postAsyncToCartProduct(
    props.product.id,
    extractIds(props.checkedFiltersList),
    quantity.value
  ).then((response) => {
    if (response && response.message) {
      toast.success(response.message)
    }
  })
}

const getLastPrice = () => {
  return (
    (props.product.price + calculateTotalPrice(props.checkedFiltersList)) *
    (quantity.value ? quantity.value : 1)
  ).toFixed(2)
}

watch(
  () => route.params,
  () => {
    quantity.value = 1
  }
)
</script>

<style>
@import './ProductTotal.scss';
</style>
