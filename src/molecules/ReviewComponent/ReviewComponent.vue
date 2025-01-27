<template>
  <div class="review">
    <div class="review__date-block">
      <CalendarIcon class="review__date-block-icon" />

      <p class="review__date-block-date single-line-truncate">
        <i18n-d
          :value="new Date(date)"
          :locale="$i18n.locale === 'en' ? 'en-US' : 'uk-UA'"
          format="short"
        ></i18n-d>
      </p>
    </div>

    <div class="review__rate-block">
      <template v-for="index in 5" :key="index">
        <StarIcon class="review__rate-block-rate" :gradient="rate >= index" />
      </template>
    </div>

    <h3 class="review__title single-line-truncate">
      {{ title }}
    </h3>

    <pre class="review__description multi-line-truncate"
      >{{ description }}
    </pre>

    <div class="review__link-block">
      <p class="review__link-block-label">{{ $t('mainPage.sourceReview') }}:</p>

      <LinkComponent
        class="review__link-block-link single-line-truncate"
        :text="textLink"
        :to="link"
        href
      />
    </div>
  </div>
</template>

<script setup>
import CalendarIcon from '@/atoms/icons/CalendarIcon.vue'
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'
import StarIcon from '@/atoms/icons/StarIcon.vue'

defineProps({
  date: String,
  rate: Number,
  title: String,
  description: String,
  textLink: String,
  link: String
})
</script>

<style>
@import './ReviewComponent.scss';
</style>
