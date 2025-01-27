<template>
  <div class="worth-card">
    <div class="worth-card__image-block">
      <img class="worth-card__image" :src="img" :alt="imgAlt" width="280" height="220" />
    </div>

    <div class="worth-card__info-block">
      <h3 class="worth-card__title">
        {{ title }}
      </h3>

      <p class="worth-card__countOffers">
        {{ countOffers }}
        {{ $t('catalogPage.offers') }}
      </p>

      <ButtonComponent
        class="worth-card__button"
        @click="$router.push({ name: 'catalog', params: { catalogId: id, locale: $i18n.locale } })"
        rectangle
        transparent
      >
        {{ $t('catalogPage.watch') }}
      </ButtonComponent>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from '@/atoms/ui/UIButton/UIButton.vue'

defineProps(['id', 'img', 'imgAlt', 'title', 'countOffers', 'link'])
</script>

<style>
@import './WorthCardComponent.scss';
</style>
