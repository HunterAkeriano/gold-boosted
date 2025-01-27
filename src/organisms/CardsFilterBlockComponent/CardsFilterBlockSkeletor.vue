<template>
  <div class="cards-filter-block">
    <div class="cards-filter-block__header">
      <div class="cards-filter-block__title-block">
        <div class="cards-filter-block__icon-block">
          <Skeletor class="cards-filter-block__icon-block-icon" />
        </div>

        <Skeletor class="cards-filter-block__title" />
      </div>

      <div class="cards-filter-block__filters-block cards-filter-embla embla" ref="emblaRef">
        <div class="embla__container cards-filter-embla__container">
          <div
            class="cards-filter-block__filter embla__slide cards-filter-embla__slide"
            v-for="(item, index) in 4"
            :key="index"
          >
            <div class="link_underline">
              <Skeletor />
            </div>
          </div>
        </div>
      </div>

      <UIButtonSkeletor class="cards-filter-block__button" />
    </div>

    <div class="cards-filter-block__main cards-products-embla embla" ref="emblaProductsRef">
      <div class="cards-products-embla__container embla__container">
        <ProductCardSkeletor
          v-for="index in 4"
          :key="index"
          class="embla__slide cards-products-embla__slide"
        />
      </div>
    </div>

    <PaginationComponentSkeletor class="hot-offers__pagination" />
  </div>
</template>

<script setup>
import 'vue-skeletor/dist/vue-skeletor.css'
import PaginationComponent from '@/molecules/PaginationComponent/PaginationComponent.vue'
import UIButtonSkeletor from '@/atoms/ui/UIButton/UIButtonSkeletor.vue'
import PaginationComponentSkeletor from '@/molecules/PaginationComponent/PaginationComponentSkeletor.vue'
import ProductCardSkeletor from '@/molecules/ProductCard/ProductCardSkeletor.vue'
</script>

<style>
@import './CardsFilterBlockComponent.scss';
</style>
