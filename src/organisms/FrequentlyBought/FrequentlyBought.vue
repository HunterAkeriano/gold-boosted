<template>
  <section class="frequently-bought">
    <div class="container">
      <h2 class="frequently-bought__title section-title">
        {{ $t('product.frequentlyBought') }}
      </h2>

      <div class="frequently-bought__list">
        <template v-if="!isLoading">
          <FrequentlyBoughtItem v-for="(item, index) in frequentlyList" :key="index" :item="item" />
        </template>

        <template v-else>
          <FrequentlyBoughtItemSkeletor v-for="item in 2" :key="item" />
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import FrequentlyBoughtItem from '@/molecules/FrequentlyBoughtItem/FrequentlyBoughtItem.vue'
import { ref } from 'vue'
import FrequentlyBoughtItemSkeletor from '@/molecules/FrequentlyBoughtItem/FrequentlyBoughtItemSkeletor.vue'
import { getData } from '@/composables/asyncFunc.js'
import { getAsyncFrequentlyBought } from '@/api/product.js'

const frequentlyList = ref(null)
const isLoading = ref(true)

getData(getAsyncFrequentlyBought, frequentlyList, isLoading)
</script>

<style>
@import './FrequentlyBought.scss';
</style>
