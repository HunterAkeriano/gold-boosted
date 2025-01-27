<template>
  <div class="single-order">
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

        <p class="single-order__price-value">${{ data.cost }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['data'])
console.log(props.data)
</script>

<style>
@import './SingleOrder.scss';
</style>
