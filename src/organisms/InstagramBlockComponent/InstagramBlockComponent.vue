<template>
  <section class="our-instagram-section">
    <img
      class="our-instagram-section__background-img"
      src="@/assets/images/MainPage/background-2.webp"
      alt="Background"
      loading="lazy"
    />

    <div class="our-instagram-section__container container">
      <h2 class="our-instagram-section__title">
        {{ $t('mainPage.ourInstagram') }}
      </h2>

      <div class="our-instagram-section__link-block">
        <p class="our-instagram-section__link-block-label">
          {{ $t('mainPage.subscribeOurInstagram') }}:
        </p>

        <LinkComponent
          v-if="!isAppLoading"
          class="our-instagram-section__link-block-link link_gradient"
          :text="siteLinks['instagram_nickname']"
          :to="siteLinks['instagram_link']"
          href
        />

        <Skeletor v-else width="114" height="26" pill></Skeletor>
      </div>

      <ul class="our-instagram-section__img-list">
        <template v-if="!isLoading">
          <li
            class="our-instagram-section__img-item"
            v-for="(item, index) in listImages"
            :key="index"
          >
            <img
              v-if="item.img"
              :src="item.img"
              :alt="item.imgAlt"
              @error="$event.target.src = defaultImage"
              loading="lazy"
            />
          </li>
        </template>

        <template v-else>
          <Skeletor v-for="i in 6" :key="i" class="our-instagram-section__img-item"></Skeletor>
        </template>
      </ul>
    </div>
  </section>
</template>

<script setup>
import 'vue-skeletor/dist/vue-skeletor.css'
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'
import axios from 'axios'
import { ref } from 'vue'
import { Skeletor } from 'vue-skeletor'
import defaultImage from '@/assets/images/default.svg'
import Trans from '@/plugins/i18n/translation.js'

const isLoading = ref(true)
defineProps(['siteLinks', 'isAppLoading'])

let listImages

const getInstagramImages = async () => {
  try {
    const response = await axios.get(`https://goldboost.demodev.cc/api/main/instagram/`, {
      headers: {
        'Accept-Language': Trans.currentLocale
      }
    })
    listImages = response.data
    isLoading.value = false
  } catch (error) {
    console.error(error)
  }
}

getInstagramImages()
</script>

<style>
@import './InstagramBlockComponent.scss';
</style>
