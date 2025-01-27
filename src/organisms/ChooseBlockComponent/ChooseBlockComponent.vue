<template>
  <section class="choose-section">
    <div class="choose-section__container container">
      <h2 class="choose-section__title">
        {{ $t('mainPage.whyChooseUs') }}
      </h2>

      <div class="choose-section__cards-list choose-section-embla embla" ref="emblaRef">
        <div class="choose-section-embla__container embla__container">
          <ChooseCardComponent
            class="choose-section-embla__slide embla__slide"
            v-for="(item, index) in chooseData"
            :key="index"
            :icon="item.icon"
            :iconAlt="item['icon_alt']"
            :title="item.title"
            :description="item.description"
            :isLoading="isChooseLoading"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ChooseCardComponent from '@/molecules/ChooseCard/ChooseCard.vue'
import emblaCarouselVue from 'embla-carousel-vue'
import { ref } from 'vue'
import { getData } from '@/composables/asyncFunc.js'
import { getAsyncWhyChooseUs } from '@/api/main.js'

const chooseData = ref([{}, {}, {}])
const isChooseLoading = ref(true)

const [emblaRef] = emblaCarouselVue({
  align: 'start',
  breakpoints: {
    '(max-width: 374px)': { active: false },
    '(min-width: 1200px)': { active: false }
  }
})

getData(getAsyncWhyChooseUs, chooseData, isChooseLoading)
</script>

<style>
@import './ChooseBlockComponent.scss';
</style>
