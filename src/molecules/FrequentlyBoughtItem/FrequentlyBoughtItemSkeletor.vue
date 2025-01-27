<template>
  <div class="frequently-bought__item">
    <div class="frequently-bought__item-images-list">
      <div class="frequently-bought__item-image-block" v-for="(product, index) in 3" :key="index">
        <div class="frequently-bought__item-image-block-container">
          <Skeletor class="frequently-bought__item-image" />
        </div>

        <div class="frequently-bought__item-product">
          <Skeletor class="frequently-bought__item-product-icon" />

          <Skeletor class="frequently-bought__item-product-name" />

          <Skeletor class="frequently-bought__item-product-type" />

          <Skeletor class="frequently-bought__item-product-price" />
        </div>
      </div>
    </div>

    <ul class="frequently-bought__item-products-list">
      <li class="frequently-bought__item-product" v-for="(product, index) in 3" :key="index">
        <Skeletor class="frequently-bought__item-product-icon" />

        <Skeletor class="frequently-bought__item-product-name" />

        <Skeletor class="frequently-bought__item-product-type" />

        <Skeletor class="frequently-bought__item-product-price" />
      </li>
    </ul>

    <div class="frequently-bought__item-footer">
      <div class="frequently-bought__item-total-price">
        <Skeletor class="frequently-bought__item-label" />

        <Skeletor class="frequently-bought__item-total-price-value" />

        <Skeletor class="frequently-bought__item-total-price-value" />
      </div>

      <Skeletor class="frequently-bought__item-button" />
    </div>
  </div>
</template>

<script setup>
import { Skeletor } from 'vue-skeletor'
import 'vue-skeletor/dist/vue-skeletor.css'
</script>
