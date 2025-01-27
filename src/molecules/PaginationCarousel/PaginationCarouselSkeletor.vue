<template>
  <section class="hot-offers">
    <div class="hot-offers__container container">
      <div class="cards-filter-block">
        <div class="cards-filter-block__header">
          <div class="cards-filter-block__title-block">
            <h2 class="cards-filter-block__title">
              {{ $t('mainPage.hotOffers') }}
            </h2>
          </div>

          <div class="cards-filter-block__filters-block cards-filter-embla embla" ref="emblaRef">
            <div class="embla__container cards-filter-embla__container">
              <div
                class="cards-filter-block__filter embla__slide cards-filter-embla__slide"
                v-for="index in 4"
                :key="index"
              >
                <Skeletor width="34" height="34" pill />
              </div>
            </div>
          </div>
        </div>

        <div class="cards-filter-block__main cards-products-embla embla" ref="emblaProductsRef">
          <div class="cards-products-embla__container embla__container">
            <ProductCardSkeletor
              class="embla__slide cards-products-embla__slide"
              v-for="index in 4"
              :key="index"
            />
          </div>
        </div>

        <PaginationComponentSkeletor class="hot-offers__pagination" />
      </div>
    </div>
  </section>
</template>

<script setup>
import emblaCarouselVue from 'embla-carousel-vue'
import { Skeletor } from 'vue-skeletor'
import 'vue-skeletor/dist/vue-skeletor.css'
import PaginationComponentSkeletor from '@/molecules/PaginationComponent/PaginationComponentSkeletor.vue'
import ProductCardSkeletor from '@/molecules/ProductCard/ProductCardSkeletor.vue'

const [emblaRef] = emblaCarouselVue({
  align: 'start'
})

const [emblaProductsRef] = emblaCarouselVue({
  align: 'start',
  breakpoints: {
    '(max-width: 374px)': { active: false },
    '(min-width: 1210px)': { active: false }
  }
})
</script>

<style>
@import './HotOffersCarusel.scss';
</style>
