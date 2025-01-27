<template>
  <section class="latest-news">
    <div class="container">
      <h2 class="latest-news__title">
        {{ $t('mainPage.latestNews') }}
      </h2>

      <div class="latest-news__embla embla" ref="emblaRef">
        <div class="latest-news__embla-container embla__container">
          <MainNewsCardSkeletor v-for="index in 3" :key="index" />
        </div>
      </div>
    </div>

    <div class="latest-news__mobile-list">
      <MainNewsCardSkeletor v-for="index in 3" :key="index" />
    </div>

    <PaginationComponentSkeletor class="latest-news__pagination" />
  </section>
</template>

<script setup>
import emblaCarouselVue from 'embla-carousel-vue'
import MainNewsCardSkeletor from '@/molecules/MainNewsCard/MainNewsCardSkeletor.vue'
import PaginationComponentSkeletor from '@/molecules/PaginationComponent/PaginationComponentSkeletor.vue'
import MainNewsCard from '@/molecules/MainNewsCard/MainNewsCard.vue'

const [emblaRef] = emblaCarouselVue({
  align: 'start',
  breakpoints: {
    '(max-width: 374px)': { active: false },
    '(min-width: 1210px)': { active: false }
  }
})
</script>

<style>
@import 'MainNews.scss';
</style>
