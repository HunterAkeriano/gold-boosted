<template>
  <router-view></router-view>

  <section class="page-404">
    <img class="page-404__background" src="@/assets/images/MainPage/background-1.webp" />

    <div class="container">
      <h1 class="page-404__title">404</h1>

      <p class="page-404__description">
        {{ $t('404.pageNotFound') }}
      </p>

      <ButtonComponent class="page-404__button" rectangle transparent @click="goToHome">
        {{ $t('404.backToHome') }}
      </ButtonComponent>
    </div>
  </section>
</template>

<script setup>
import ButtonComponent from '@/atoms/ui/UIButton/UIButton.vue'
import { useRouter } from 'vue-router'
import Trans from '@/plugins/i18n/translation.js'

const router = useRouter()

const goToHome = () => {
  router.replace({ name: 'home', params: { locale: Trans.currentLocale } })
}
</script>

<style>
@import './404.scss';
</style>
