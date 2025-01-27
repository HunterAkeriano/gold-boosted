<template>
  <div class="basket-product-order">
    <template v-if="product.items.length > 1">
      <template v-for="(item, index) in product.items" :key="index">
        <ProductOrder
          :product="item"
          v-if="index === 0"
          button="true"
          @deleteProduct="$emit('deleteProduct', product.id)"
        />

        <ProductOrder :product="item" v-else @deleteProduct="$emit('deleteProduct', product.id)" />
      </template>

      <div class="basket-product-order__total">
        <div class="basket-product-order__total-price">
          <template v-if="product['sale_active']">
            <p class="basket-product-order__total-price-title">Total price:</p>

            <p class="basket-product-order__total-price-current">
              ${{ product['cost_with_sale'].toFixed(2) }}
            </p>

            <p class="basket-product-order__total-price-last">${{ product.cost.toFixed(2) }}</p>

            <p class="basket-product-order__total-price-discount">
              {{ product['sale_percent'] }}
            </p>
          </template>
        </div>
      </div>
    </template>

    <ProductOrder
      :product="product.items[0]"
      button="true"
      v-else
      @deleteProduct="$emit('deleteProduct', product.id)"
    />
  </div>
</template>

<script setup>
import ProductOrder from '@/molecules/ProductOrder/ProductOrder.vue'

defineProps(['product'])
</script>

<style>
@import './BasketProductOrder.scss';
</style>
