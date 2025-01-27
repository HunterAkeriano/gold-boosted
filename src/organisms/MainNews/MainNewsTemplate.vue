<template>
  <section class="latest-news">
    <div class="container">
      <h2 class="latest-news__title">
        {{ $t('mainPage.latestNews') }}
      </h2>

      <div class="latest-news__embla embla" ref="emblaRef">
        <div class="latest-news__embla-container embla__container">
          <MainNewsCard
            class="latest-news__embla-slide embla__slide"
            v-for="(item, index) in newsData[currentPage - 1].items"
            :key="index"
            :data="item"
          />
        </div>
      </div>

      <MobileMoreList :data="newsData" :component="MainNewsCard" v-model="mobileCurrentPage" />
    </div>

    <PaginationComponent
      class="latest-news__pagination"
      :countPages="newsData[currentPage - 1].count"
      v-model="currentPage"
    />
  </section>
</template>

<script setup>
import MainNewsCard from '@/molecules/MainNewsCard/MainNewsCard.vue'
import emblaCarouselVue from 'embla-carousel-vue'
import PaginationComponent from '@/molecules/PaginationComponent/PaginationComponent.vue'
import { watch } from 'vue'
import ProductCard from '@/molecules/ProductCard/ProductCard.vue'
import MobileMoreList from '@/molecules/MobileMoreList/MobileMoreList.vue'

defineProps(['newsData'])

const currentPage = defineModel('currentPage')
const mobileCurrentPage = defineModel('mobileCurrentPage')

const [emblaRef, emblaApi] = emblaCarouselVue({
  align: 'start',
  breakpoints: {
    '(max-width: 374px)': { active: false },
    '(min-width: 1210px)': { active: false }
  }
})

watch(currentPage, () => {
  emblaApi.value.scrollTo(0)
})
</script>

<style>
@import 'MainNews.scss';
</style>
