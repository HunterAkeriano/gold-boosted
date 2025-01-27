<template>
  <div class="frequently-bought__item">
    <div class="frequently-bought__item-images-list">
      <div
        class="frequently-bought__item-image-block"
        v-for="(product, index) in item.products"
        :key="index"
      >
        <div class="frequently-bought__item-image-block-container">
          <img
            class="frequently-bought__item-image"
            :src="product['card_img']"
            :alt="product['card_img_alt']"
          />
        </div>

        <div class="frequently-bought__item-product">
          <i class="frequently-bought__item-product-icon">
            <SuccessIcon />
          </i>

          <p class="frequently-bought__item-product-name">
            {{ product.title }}
          </p>

          <p class="frequently-bought__item-product-type">
            {{ product.subtitle }}
          </p>

          <p class="frequently-bought__item-product-price">${{ product.price }}</p>
        </div>
      </div>
    </div>

    <ul class="frequently-bought__item-products-list">
      <li
        class="frequently-bought__item-product"
        v-for="(product, index) in item.products"
        :key="index"
      >
        <i class="frequently-bought__item-product-icon">
          <SuccessIcon />
        </i>

        <p class="frequently-bought__item-product-name">
          {{ product.title }}
        </p>

        <p class="frequently-bought__item-product-type">
          {{ product.subtitle }}
        </p>

        <p class="frequently-bought__item-product-price">${{ product.price }}</p>
      </li>
    </ul>

    <div class="frequently-bought__item-footer">
      <div class="frequently-bought__item-price">
        <p class="frequently-bought__item-price-title">{{ $t('product.totalPrice') }}:</p>

        <p class="frequently-bought__item-total-price">
          <template v-if="item.discount">
            <span class="frequently-bought__item-total-price-value">
              ${{ getDiscountPrice(item.products, item.discount) }}
            </span>

            <span class="frequently-bought__item-last-price-value">
              ${{ getTotalPrice(item.products) }}
            </span>

            <span class="frequently-bought__item-discount discount">
              {{ item.discount }}
            </span>
          </template>

          <template v-else>
            <span class="frequently-bought__item-total-price-value">
              {{ getTotalPrice(item.products) }}
            </span>
          </template>
        </p>
      </div>

      <ButtonComponent class="frequently-bought__item-button" @click="buy(item.id)" rectangle>
        {{ $t('product.buyNow') }}
      </ButtonComponent>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from '@/atoms/ui/UIButton/UIButton.vue'
import SuccessIcon from '@/atoms/icons/SuccessIcon.vue'
import { postAsyncToCartFrequentlyBought } from '@/api/product.js'
import { useToast } from 'vue-toast-notification'

defineProps(['item'])

const toast = useToast()

const getTotalPrice = (productsList) => {
  return productsList.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price
  }, 0)
}

const buy = (id) => {
  postAsyncToCartFrequentlyBought(id).then((response) => {
    toast.success(response.message)
  })
}

const getDiscountPrice = (productsList, discount) => {
  const totalPrice = getTotalPrice(productsList)
  return (totalPrice - (totalPrice * discount) / 100).toFixed(2)
}
</script>
