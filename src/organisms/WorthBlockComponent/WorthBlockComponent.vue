<template>
  <section class="worth" v-if="worthList">
    <div class="container">
      <h2 class="worth__title">{{ $t('catalogPage.worthALook') }}</h2>

      <div class="worth__slider embla" ref="worthSliderRef">
        <div class="worth__slider-container embla__container">
          <WorthCardComponent
            class="worth__slider-slide embla__slide"
            v-for="(item, index) in worthList"
            :key="index"
            :id="item['catalog_page']"
            :img="item.image"
            :imgAlt="item['image_alt']"
            :title="item.title"
            :countOffers="item.offers"
            :link="item.link"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import WorthCardComponent from '@/molecules/WorthCardComponent/WorthCardComponent.vue'
import emblaCarouselVue from 'embla-carousel-vue'

defineProps(['worthList'])

let [worthSliderRef] = emblaCarouselVue({
  align: 'start'
})
</script>

<style>
@import 'WorthBlockComponent.scss';
</style>
