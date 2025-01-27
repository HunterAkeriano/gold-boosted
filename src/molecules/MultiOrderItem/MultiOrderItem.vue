<template>
  <div class="multi-order-item">
    <div class="multi-order-item__image-block">
      <div class="multi-order-item__icon-block">
        <img :src="data.game_logo" :alt="data.game_logo_alt" />
      </div>

      <img :src="data.card_img" :alt="data.card_img_alt" />
    </div>

    <p class="multi-order-item__title">
      {{ data.title }}
    </p>

    <p class="multi-order-item__sub-title">
      {{ data.subtitle }}
    </p>

    <div class="multi-order-item__attributes">
      <div
        class="multi-order-item__attribute"
        v-for="(attribute, index) in data.attributes"
        :key="index"
      >
        <p class="multi-order-item__attribute-title">{{ attribute.title }}:</p>

        <p class="multi-order-item__attribute-value">
          {{ attribute.subtitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['data'])
</script>

<style>
@import 'MultiOrderItem.scss';
</style>
