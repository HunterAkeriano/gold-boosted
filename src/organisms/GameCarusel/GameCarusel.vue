<template>
  <section class="game-carusel">
    <div class="game-carusel__container container" v-if="!isLoading">
      <CardsFilterBlockComponent
        class="game-carusel__desktop"
        :title="game.name"
        :listItems="productsListData[currentPage - 1].items"
        :countPages="productsListData[currentPage - 1].count"
        :filters="game.items"
        v-model="activeFilter"
        :title-icon="game.logo_product"
      />

      <MobileMoreList
        class="game-carusel__mobile"
        :data="productsListData"
        :component="ProductCard"
        v-model="mobileCurrentPage"
        v-if="!isLoading"
      />

      <PaginationComponent
        class="latest-news__pagination"
        :countPages="productsListData[currentPage - 1].count"
        v-model="currentPage"
        v-if="!isLoading"
      />
    </div>

    <GameCarouselSkeletor v-else />
  </section>
</template>

<script setup>
import CardsFilterBlockComponent from '@/organisms/CardsFilterBlockComponent/CardsFilterBlockComponent.vue'
import { ref, watch } from 'vue'
import { getAsyncGameCarousel } from '@/api/game.js'
import { pushData } from '@/composables/asyncFunc.js'
import PaginationComponent from '@/molecules/PaginationComponent/PaginationComponent.vue'
import MobileMoreList from '@/molecules/MobileMoreList/MobileMoreList.vue'
import ProductCard from '@/molecules/ProductCard/ProductCard.vue'
import GameCarouselSkeletor from '@/organisms/GameCarusel/GameCarouselSkeletor.vue'

const props = defineProps(['game'])

const productsListData = ref([])
const isLoading = ref(true)
const pageSize = 4
const currentPage = ref(1)
const mobileCurrentPage = ref(1)
const activeFilter = ref(0)

pushData(
  getAsyncGameCarousel,
  productsListData,
  isLoading,
  currentPage.value,
  pageSize,
  props.game.id
)

watch(currentPage, () => {
  if (productsListData.value[currentPage.value - 1] == null) {
    isLoading.value = true
    pushData(
      getAsyncGameCarousel,
      productsListData,
      isLoading,
      currentPage.value,
      pageSize,
      props.game.id
    )
  }
})

watch(activeFilter, () => {
  productsListData.value = []
  isLoading.value = true
  pushData(
    getAsyncGameCarousel,
    productsListData,
    isLoading,
    currentPage.value,
    pageSize,
    props.game.id,
    activeFilter.value
  )
})

watch(mobileCurrentPage, () => {
  if (productsListData.value[mobileCurrentPage.value - 1] == null) {
    pushData(
      getAsyncGameCarousel,
      productsListData,
      isLoading,
      mobileCurrentPage.value,
      pageSize,
      props.game.id
    )
  }
})
</script>

<style>
@import './GameCarusel.scss';
</style>
