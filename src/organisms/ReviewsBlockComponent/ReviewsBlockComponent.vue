<template>
  <section class="reviews-section">
    <div class="reviews-section__container container">
      <h2 class="reviews-section__title section-title">
        {{ $t('mainPage.reviews') }}
      </h2>

      <div class="reviews-section__reviews-list reviews-section-embla embla" ref="emblaReviewsRef">
        <div class="reviews-section-embla__container embla__container">
          <template v-if="!isLoading">
            <ReviewComponent
              class="reviews-section__reviews-list-item reviews-section-embla__slide embla__slide"
              v-for="(item, index) in reviewsList"
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
            <ReviewComponent
              class="reviews-section__reviews-list-item reviews-section-embla__slide embla__slide"
              v-for="(item, index) in 4"
              :key="index"
              :isLoading="isLoading"
            />
          </template>
        </div>
      </div>
    </div>

    <PaginationComponent
      class="reviews-section__pagination"
      :countPages="pageCount"
      v-model="currentPage"
    />
  </section>
</template>

<script setup>
import PaginationComponent from '@/molecules/PaginationComponent/PaginationComponent.vue'
import ReviewComponent from '@/molecules/ReviewComponent/ReviewComponent.vue'
import emblaCarouselVue from 'embla-carousel-vue'
import { onMounted, ref, watch } from 'vue'
import axios from 'axios'
import Trans from '@/plugins/i18n/translation.js'
import { useI18n } from 'vue-i18n'

const reviewsList = ref()
const isLoading = ref(true)
const pageSize = 4
const pageCount = ref(1)
const currentPage = ref(1)
const { locale } = useI18n()

const [emblaReviewsRef, emblaApi] = emblaCarouselVue({
  align: 'start',
  breakpoints: {
    '(min-width: 1210px)': { active: false }
  }
})

const fetchData = async (pageSize, currentPage) => {
  try {
    await axios
      .get(`https://goldboost.demodev.cc/api/main/reviews/`, {
        params: {
          page: currentPage,
          page_size: pageSize
        },
        headers: {
          'Accept-Language': Trans.currentLocale
        }
      })
      .then((response) => {
        reviewsList.value = response.data.items
        pageCount.value = response.data.count
        isLoading.value = false
      })
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchData(pageSize, currentPage.value)
})

watch(currentPage, () => {
  isLoading.value = true
  fetchData(pageSize, currentPage.value)
  emblaApi.value.scrollTo(0)
})
</script>

<style>
@import './ReviewsBlockComponent.scss';
</style>
