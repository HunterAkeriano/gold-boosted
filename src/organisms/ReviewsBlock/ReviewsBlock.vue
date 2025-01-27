<template>
  <section class="reviews-section">
    <div class="reviews-section__container container">
      <h2 class="reviews-section__title section-title">
        {{ $t('mainPage.reviews') }}
      </h2>

      <div class="reviews-section__reviews-list reviews-section-embla embla" ref="emblaReviewsRef">
        <div class="reviews-section-embla__container embla__container">
          <template v-if="!isReviewsDataLoading">
            <ReviewComponent
              class="reviews-section-embla__slide embla__slide"
              v-for="(item, index) in reviewsDataList[currentPage - 1].items"
              :key="index"
              :date="item['date_published']"
              :rate="item['stars_count']"
              :title="item.author"
              :description="item.comment"
              :textLink="item['source_of_review']"
              :link="item['source_of_review_url']"
            />
          </template>

          <template v-else>
            <ReviewComponentSkeletor
              class="reviews-section-embla__slide embla__slide"
              v-for="index in pageSize"
              :key="index"
            />
          </template>
        </div>
      </div>
    </div>

    <PaginationComponent
      class="reviews-section__pagination"
      :countPages="reviewsDataList[currentPage - 1].items.count"
      v-model="currentPage"
      v-if="!isReviewsDataLoading"
    />

    <PaginationComponentSkeletor class="reviews-section__pagination" v-else />
  </section>
</template>

<script setup>
import PaginationComponent from '@/molecules/PaginationComponent/PaginationComponent.vue'
import ReviewComponent from '@/molecules/ReviewComponent/ReviewComponent.vue'
import emblaCarouselVue from 'embla-carousel-vue'
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { pushData } from '@/composables/asyncFunc.js'
import { getAsyncReviews } from '@/api/main.js'
import PaginationComponentSkeletor from '@/molecules/PaginationComponent/PaginationComponentSkeletor.vue'
import ReviewComponentSkeletor from '@/molecules/ReviewComponent/ReviewComponentSkeletor.vue'

const reviewsDataList = ref([])
const isReviewsDataLoading = ref(true)
const pageSize = 4
const currentPage = ref(1)
const { locale } = useI18n()

const [emblaReviewsRef, emblaApi] = emblaCarouselVue({
  align: 'start',
  breakpoints: {
    '(min-width: 1210px)': { active: false }
  }
})

pushData(getAsyncReviews, reviewsDataList, isReviewsDataLoading, currentPage.value, pageSize)

watch(currentPage, () => {
  if (reviewsDataList.value[currentPage.value - 1] == null) {
    isReviewsDataLoading.value = true
    pushData(getAsyncReviews, reviewsDataList, isReviewsDataLoading, currentPage.value, pageSize)
  }
  emblaApi.value.scrollTo(0)
})
</script>

<style>
@import 'ReviewsBlockSkeletor.scss';
</style>
