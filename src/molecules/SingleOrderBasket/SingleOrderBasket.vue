<template>
  <div class="single-order">
    <UIButton class="single-order__delete-button" @click="$emit('deleteProduct')" circle>
      <span></span>
    </UIButton>

    <div class="single-order__image-block">
      <div class="single-order__icon-block">
        <img :src="data.items[0].game_logo" :alt="data.items[0].game_logo_alt" />
      </div>

      <img :src="data.items[0].card_img" :alt="data.items[0].card_img_alt" />
    </div>

    <p class="single-order__title">
      {{ data.items[0].title }}
    </p>

    <p class="single-order__sub-title">
      {{ data.items[0].subtitle }}
    </p>

    <div class="single-order__attributes">
      <div
        class="single-order__attribute"
        v-for="(attribute, index) in data.items[0].attributes"
        :key="index"
      >
        <p class="single-order__attribute-title">{{ attribute.title }}:</p>

        <p class="single-order__attribute-value">
          {{ attribute.subtitle }}
        </p>
      </div>
    </div>

    <div class="single-order__total">
      <div class="single-order__quantity">
        <p class="single-order__quantity-title">{{ $t('ordersPage.quantity') }}:</p>

        <p class="single-order__quantity-value">
          {{ data.quantity }}
        </p>
      </div>

      <div class="single-order__price">
        <p class="single-order__price-title">{{ $t('ordersPage.price') }}:</p>

        <div class="single-order__price-flex" v-if="data.sale_active">
          <p class="single-order__price-current">${{ data.cost_with_sale.toFixed(2) }}</p>

          <p class="single-order__price-last">${{ data.cost }}</p>

          <p class="single-order__price-percent">{{ data.sale_percent }}</p>
        </div>

        <p class="single-order__price-value" v-else>${{ data.cost_with_sale.toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import UIButton from '@/atoms/ui/UIButton/UIButton.vue'
defineProps(['data'])
</script>

<style>
@import './SingleOrder.scss';
</style>
