<template>
  <div class="popup" :class="{ popup__show: isOpen }">
    <div class="popup__block">
      <div class="popup__outside" @click="closePopup"></div>

      <div class="popup__container container">
        <button class="popup__close-button" @click="closePopup"></button>

        <div class="popup__inner">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Trans from '@/plugins/i18n/translation.js'

const route = useRoute()
const router = useRouter()

defineProps({
  urlName: String
})

const removeSignInFromUrl = async () => {
  const param = await route.matched[1].name

  router.push({ name: param, params: { locale: Trans.currentLocale } })
}

const isOpen = ref(true)

const closePopup = () => {
  isOpen.value = false
  toggleAppScroll()
  removeSignInFromUrl()
}

const toggleAppScroll = () => {
  document.body.classList.toggle('scroll-lock', isOpen.value)
}

toggleAppScroll()
</script>

<style>
@import './PopupComponent.scss';
</style>
