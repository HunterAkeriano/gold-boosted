<template>
  <div class="product-order">
    <UIButton
      v-if="button"
      class="product-order__delete-button"
      @click="$emit('deleteProduct')"
      circle
    >
      <span></span>
    </UIButton>

    <div class="product-order__name-block">
      <div class="product-order__img-block">
        <img :src="product['card_img']" :alt="product['card_img_alt']" />
      </div>

      <div class="product-order__game-logo-block">
        <img
          class="product-order__game-logo"
          :src="product['game_logo']"
          :alt="product['game_logo_alt']"
        />
      </div>

      <div class="product-order__text-block">
        <p class="product-order__name">
          {{ product.title }}
        </p>

        <p class="product-order__type">
          {{ product.subtitle }}
        </p>
      </div>
    </div>

    <div class="product-order__attributes" v-if="product.attributes">
      <div
        class="product-order__attribute"
        v-for="(atribute, index) in product.attributes"
        :key="index"
      >
        <p class="product-order__attribute-title">{{ atribute.title }}:</p>

        <p class="product-order__attribute-value">
          {{ atribute.subtitle }}
        </p>
      </div>
    </div>

    <div class="product-order__total">
      <div class="product-order__quantity" v-if="quantity">
        <p class="product-order__quantity-title">{{ $t('product.quantity') }}:</p>

        <p class="product-order__quantity-value">
          {{ quantity }}
        </p>
      </div>

      <div class="product-order__bonus" v-if="bonusPoints">
        <p class="product-order__bonus-title">{{ $t('product.bonusPoints') }}:</p>

        <p class="product-order__bonus-icon-value">
          <PointIcon class="product-order__bonus-icon" />

          <span class="product-order__bonus-value">
            {{ bonusPoints }}
          </span>
        </p>
      </div>

      <div class="product-order__price">
        <template v-if="product['sale_active']">
          <p class="product-order__price-title">{{ $t('product.price') }}:</p>

          <p class="product-order__price-current">${{ product['sale_price'].toFixed(2) }}</p>

          <p class="product-order__price-last">${{ product['price'].toFixed(2) }}</p>

          <p class="product-order__price-discount">-{{ product['sale_percent'] }}%</p>
        </template>

        <template v-else>
          <p class="product-order__price-title">{{ $t('product.price') }}:</p>

          <p class="product-order__price-current">${{ product['price'].toFixed(2) }}</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import PointIcon from '@/atoms/icons/PointIcon.vue'
import UIButton from '@/atoms/ui/UIButton/UIButton.vue'

defineProps(['product', 'button', 'quantity', 'bonusPoints'])
defineEmits(['deleteProduct'])
</script>

<style>
@import './ProductOrder.scss';
</style>
