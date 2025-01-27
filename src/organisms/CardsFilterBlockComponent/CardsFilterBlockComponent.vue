<template>
  <div class="cards-filter-block">
    <div class="cards-filter-block__header">
      <div class="cards-filter-block__title-block">
        <div class="cards-filter-block__icon-block" v-if="titleIcon">
          <img
            class="cards-filter-block__icon-block-icon"
            :src="titleIcon"
            loading="lazy"
            alt="Warcraft logo"
          />
        </div>

        <h2 class="cards-filter-block__title">
          {{ title }}
        </h2>
      </div>

      <div class="cards-filter-block__filters-block cards-filter-embla embla" ref="emblaRef">
        <div class="embla__container cards-filter-embla__container">
          <div
            class="cards-filter-block__filter embla__slide cards-filter-embla__slide"
            v-for="(item, index) in filters"
            :key="index"
          >
            <ButtonComponent
              class="link_underline"
              :class="{ 'link_underline-active': activeGameId === item.id }"
              @click="changeActiveGameId(item.id)"
            >
              {{ item.title }}
            </ButtonComponent>
          </div>
        </div>
      </div>

      <ButtonComponent
        class="cards-filter-block__button"
        rectangle
        transparent
        @click="
          $router.push({
            name: 'catalog',
            params: {
              locale: $i18n.locale,
              catalogId: filters && filters[0] && filters[0].id ? filters[0].id : 1
            }
          })
        "
      >
        Catalog
      </ButtonComponent>
    </div>

    <div class="cards-filter-block__main cards-products-embla embla" ref="emblaProductsRef">
      <div class="cards-products-embla__container embla__container">
        <ProductCard
          class="embla__slide cards-products-embla__slide"
          v-for="(item, index) in listItems"
          :key="index"
          :data="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from '@/atoms/ui/UIButton/UIButton.vue'
import emblaCarouselVue from 'embla-carousel-vue'
import 'vue-skeletor/dist/vue-skeletor.css'
import ProductCard from '@/molecules/ProductCard/ProductCard.vue'

defineProps(['title', 'titleIcon', 'filters', 'button', 'listItems', 'countPages'])

const activeGameId = defineModel()

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

const changeActiveGameId = (id) => {
  if (activeGameId.value !== id) {
    activeGameId.value = id
  } else {
    activeGameId.value = null
  }
}
</script>

<style>
@import './CardsFilterBlockComponent.scss';
</style>
