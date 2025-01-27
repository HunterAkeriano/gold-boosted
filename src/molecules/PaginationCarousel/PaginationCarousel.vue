<template>
  <div class="pagination-carousel">
    <div class="pagination-carousel__desktop-products">
      <div class="pagination-carousel__embla embla" ref="emblaProductsRef">
        <div class="pagination-carousel__container embla__container">
          <ProductCard
            class="pagination-carousel__slide embla__slide"
            v-for="(item, index) in allData[desktopCurrentPage - 1].items"
            :key="index"
            :data="item"
          />
        </div>
      </div>
    </div>

    <div class="pagination-carousel__mobile-products">
      <template v-for="(pageData, index) in allData" :key="index">
        <template v-if="mobileCurrentPage > index">
          <component
            :is="component"
            v-for="(card, index) in pageData.items"
            :key="index"
            :data="card"
          />
        </template>
      </template>
    </div>

    <div class="pagination-carousel__desktop-pagination">
      <PaginationComponent
        v-if="!isBestSellersLoading"
        class="hot-offers__pagination"
        :countPages="bestSellersData[currentPage - 1].count"
        v-model="currentPage"
      />
    </div>

    <div class="pagination-carousel__mobile-pagination">
      <PaginationMore
        class="mobile-more-list__button"
        :countPages="data.count"
        v-model="mobileCurrentPage"
      />
    </div>
  </div>
</template>

<script setup>
import emblaCarouselVue from 'embla-carousel-vue'
import 'vue-skeletor/dist/vue-skeletor.css'
import ProductCard from '@/molecules/ProductCard/ProductCard.vue'
import PaginationComponent from '@/molecules/PaginationComponent/PaginationComponent.vue'
import PaginationMore from '@/molecules/PaginationMore/PaginationMore.vue'
import { ref } from 'vue'

defineProps(['allData'])
const mobileCurrentPage = ref(1)
const desktopCurrentPage = ref(1)

const [emblaProductsRef] = emblaCarouselVue({
  align: 'start',
  breakpoints: {
    '(max-width: 374px)': { active: false },
    '(min-width: 1210px)': { active: false }
  }
})
</script>

<style>
@import './PaginationCarousel.scss';
</style>
