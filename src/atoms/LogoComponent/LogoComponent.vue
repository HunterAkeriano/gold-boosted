<template>
  <router-link class="logo" :to="{ name: 'home', params: { locale: $route.params.locale } }">
    <PictureComponent
      class="logo__img"
      :webpSource="logoImg.webp"
      :pngSource="logoImg.png"
      imgAlt="Logo"
    />
  </router-link>
</template>

<script setup>
import PictureComponent from '@/atoms/PictureComponent/PictureComponent.vue'

const logoImg = {
  webp: new URL('@/assets/images/LogoComponent/LogoComponentImg.webp', import.meta.url),
  png: new URL('@/assets/images/LogoComponent/LogoComponentImg.png', import.meta.url)
}
</script>

<style scoped>
@import './LogoComponent.scss';
</style>
