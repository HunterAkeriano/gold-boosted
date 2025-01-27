<template>
  <div
    class="payment-result"
    :class="{
      'payment-result_success': status === 'success',
      'payment-result_error': status === 'error'
    }"
  >
    <div class="payment-result__container container">
      <div class="payment-result__figures">
        <div class="payment-result__figures-container">
          <div
            v-for="i in 6"
            :key="'circle-icon-' + i"
            :class="'payment-result__circle-icon payment-result__circle-icon-' + i"
          />

          <TriangleIcon
            v-for="i in 3"
            :key="'triangle-icon-' + i"
            :class="'payment-result__triangle-icon payment-result__triangle-icon-' + i"
          />
        </div>
      </div>

      <div class="payment-result__round payment-result__round">
        <div class="payment-result__round-inner">
          <div class="payment-result__round-icon-block">
            <CheckMarkIcon class="payment-result__round-icon" v-if="status === 'success'" />

            <span class="payment-result__round-icon" v-if="status === 'error'"></span>
          </div>
        </div>
      </div>

      <h1 class="payment-result__title">
        {{
          status === 'success'
            ? $t('checkoutPage.success.title')
            : status === 'error'
              ? $t('checkoutPage.error.title')
              : ''
        }}
      </h1>

      <p class="payment-result__description">
        {{
          status === 'success'
            ? $t('checkoutPage.success.description')
            : status === 'error'
              ? $t('checkoutPage.error.description')
              : ''
        }}
      </p>

      <ButtonComponent
        v-if="status === 'success'"
        class="payment-result__button"
        rectangle
        transparent
        @click="$router.push({ name: 'orders', params: { locale: $i18n.locale } })"
      >
        {{ $t('checkoutPage.success.buttonText') }}
      </ButtonComponent>

      <ButtonComponent
        v-if="status === 'error'"
        class="payment-result__button"
        rectangle
        transparent
        @click="$router.push({ name: 'basket', params: { locale: $i18n.locale } })"
      >
        {{ $t('checkoutPage.error.buttonText') }}
      </ButtonComponent>

      <div class="payment-result__footer" v-if="status === 'success' || status === 'error'">
        <h2 class="payment-result__footer-title">
          {{
            status === 'success'
              ? $t('checkoutPage.success.footerTitle')
              : status === 'error'
                ? $t('checkoutPage.error.footerTitle')
                : ''
          }}
        </h2>

        <p class="payment-result__footer-description">
          {{
            status === 'success'
              ? $t('checkoutPage.success.footerDescription')
              : status === 'error'
                ? $t('checkoutPage.error.footerDescription')
                : ''
          }}
        </p>

        <div class="payment-result__channels-buttons" v-if="status === 'success'">
          <ButtonComponent class="payment-result__channels-button" circle>
            <FacebookIcon class="payment-result__facebook-icon" />
          </ButtonComponent>

          <ButtonComponent class="payment-result__channels-button" circle>
            <InstagramIcon class="payment-result__instagram-icon" transparent />
          </ButtonComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from '@/atoms/ui/UIButton/UIButton.vue'
import FacebookIcon from '@/atoms/icons/FacebookIcon.vue'
import InstagramIcon from '@/atoms/icons/InstagramIcon.vue'
import CheckMarkIcon from '@/atoms/icons/CheckMarkIcon.vue'
import TriangleIcon from '@/atoms/icons/TriangleIcon.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const status = ref()

if (route.params.status === 'success') {
  status.value = 'success'
} else {
  status.value = 'error'
}
</script>

<style>
@import './PaymentResultComponent.scss';
</style>
