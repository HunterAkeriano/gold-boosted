<template>
  <div class="news-card">
    <div class="news-card__img-block">
      <img :src="data.image" width="380" height="170" :alt="data['image_alt']" loading="lazy" />
    </div>

    <div class="news-card__info-block">
      <div class="news-card__sub-title-block">
        <div class="news-card__icon-block">
          <img class="news-card__icon-block-icon" :src="data.game.logo" :alt="data.game.name" />
        </div>

        <p class="news-card__sub-title-block-text">
          {{ data.game.name }}
        </p>
      </div>

      <h3 class="news-card__title">
        {{ data.title }}
      </h3>

      <p class="news-card__description">
        {{ data.description }}
      </p>

      <LinkComponent
        class="news-card__link link_underline-gradient"
        :text="$t('mainPage.readMore')"
        :to="{ name: 'not found', params: { locale: Trans.currentLocale } }"
      />
    </div>
  </div>
</template>

<script setup>
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'
import 'vue-skeletor/dist/vue-skeletor.css'
import Trans from '@/plugins/i18n/translation.js'

defineProps(['data'])
</script>

<style>
@import 'MainNewsCard.scss';
</style>
