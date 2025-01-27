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
                v-for="(item, index) in gamesList"
                :key="index"
              >
                <UIButton class="link_underline" @click="$emit('changeActiveGameId', item.id)">
                  <img
                    class="cards-filter-block__filter-icon"
                    :class="{ 'cards-filter-block__filter-icon_active': activeGameId === item.id }"
                    v-if="item['logo_filter']"
                    :src="item['logo_filter']"
                    :alt="item['logo_filter_alt']"
                  />
                </UIButton>
              </div>
            </div>
          </div>
        </div>

        <div class="cards-filter-block__main cards-products-embla embla" ref="emblaProductsRef">
          <div class="cards-products-embla__container embla__container">
            <ProductCard
              class="embla__slide cards-products-embla__slide"
              v-for="(item, index) in hotOffersData[currentPage - 1].items"
              :key="index"
              :data="item"
            />
          </div>
        </div>

        <PaginationComponent
          class="hot-offers__pagination"
          :countPages="hotOffersData[currentPage - 1].count"
          v-model="currentPage"
        />

        <MobileMoreList
          :data="hotOffersData"
          :component="ProductCard"
          v-model="mobileCurrentPage"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { watch } from 'vue'
import PaginationComponent from '@/molecules/PaginationComponent/PaginationComponent.vue'
import ProductCard from '@/molecules/ProductCard/ProductCard.vue'
import UIButton from '@/atoms/ui/UIButton/UIButton.vue'
import emblaCarouselVue from 'embla-carousel-vue'
import MobileMoreList from '@/molecules/MobileMoreList/MobileMoreList.vue'

defineProps(['gamesList', 'activeGameId', 'hotOffersData'])
defineEmits(['changeActiveGames'])

const mobileCurrentPage = defineModel('mobileCurrentPage')
const currentPage = defineModel('currentPage')
const [emblaRef] = emblaCarouselVue({
  align: 'start'
})

const [emblaProductsRef, emblaApi] = emblaCarouselVue({
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
