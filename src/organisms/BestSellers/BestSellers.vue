<template>
  <section class="best-sellers">
    <div class="container" v-if="!isBestSellersLoading">
      <BestSellersFilter
        :title="$t('productPage.bestSellers')"
        :listItems="bestSellersData[currentPage - 1].items"
        :countPages="bestSellersData[0].count"
        v-model="currentPage"
      />

      <MobileMoreList
        :data="bestSellersData"
        :component="ProductCard"
        v-model="mobileCurrentPage"
      />

      <PaginationComponent
        v-if="!isBestSellersLoading"
        class="hot-offers__pagination"
        :countPages="bestSellersData[currentPage - 1].count"
        v-model="currentPage"
      />
    </div>

    <BestSellerFilterSkeletor v-else />
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import { getAsyncBestsellers } from '@/api/product.js'
import { pushData } from '@/composables/asyncFunc.js'
import BestSellersFilter from '@/molecules/BestSellersFilter/BestSellersFilter.vue'
import PaginationComponent from '@/molecules/PaginationComponent/PaginationComponent.vue'
import ProductCard from '@/molecules/ProductCard/ProductCard.vue'
import MobileMoreList from '@/molecules/MobileMoreList/MobileMoreList.vue'
import BestSellerFilterSkeletor from '@/molecules/BestSellersFilter/BestSellerFilterSkeletor.vue'

const bestSellersData = ref([])
const isBestSellersLoading = ref(true)
const pageSize = 4
const mobileCurrentPage = ref(1)
const currentPage = ref(1)

pushData(getAsyncBestsellers, bestSellersData, isBestSellersLoading, currentPage.value, pageSize)

watch(currentPage, () => {
  if (bestSellersData.value[currentPage.value - 1] == null) {
    isBestSellersLoading.value = true
    pushData(
      getAsyncBestsellers,
      bestSellersData,
      isBestSellersLoading,
      currentPage.value,
      pageSize
    )
  }
})

watch(mobileCurrentPage, () => {
  if (bestSellersData.value[mobileCurrentPage.value - 1] == null) {
    pushData(
      getAsyncBestsellers,
      bestSellersData,
      isBestSellersLoading,
      mobileCurrentPage.value,
      pageSize
    )
  }
})
</script>

<style>
@import './BestSellers.scss';
</style>
