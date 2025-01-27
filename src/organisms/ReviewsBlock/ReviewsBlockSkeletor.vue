<template>
  <section class="reviews-section">
    <div class="reviews-section__container container">
      <h2 class="reviews-section__title section-title">
        {{ $t('mainPage.reviews') }}
      </h2>

      <div class="reviews-section__reviews-list reviews-section-embla embla" ref="emblaReviewsRef">
        <div class="reviews-section-embla__container embla__container">
          <Skeletor
            class="reviews-section__reviews-list-item reviews-section-embla__slide embla__slide"
            v-for="index in pageSize"
            :key="index"
          />
        </div>
      </div>
    </div>

    <PaginationComponentSkeletor class="reviews-section__pagination" />
  </section>
</template>

<script setup>
import emblaCarouselVue from 'embla-carousel-vue'
import PaginationComponentSkeletor from '@/molecules/PaginationComponent/PaginationComponentSkeletor.vue'
import { Skeletor } from 'vue-skeletor'
import 'vue-skeletor/dist/vue-skeletor.css'

const pageSize = 4

const [emblaReviewsRef] = emblaCarouselVue({
  align: 'start',
  breakpoints: {
    '(min-width: 1210px)': { active: false }
  }
})
</script>

<style>
@import 'ReviewsBlockSkeletor.scss';
</style>
