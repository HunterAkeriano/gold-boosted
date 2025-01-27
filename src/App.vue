<template>
  <HeaderComponent :siteLinks="siteLinks" />

  <div class="wrapper" id="wrapper">
    <router-view :siteLinks="siteLinks" :isAppLoading="isLoading"> </router-view>

    <FooterComponent v-if="!isLoading" :siteLinks="siteLinks" :isLoading="isLoading" />

    <TheFooterSkeletor v-else />
  </div>
</template>

<script setup>
import HeaderComponent from '@/organisms/HeaderComponent/HeaderComponent.vue'
import FooterComponent from '@/organisms/TheFooter/TheFooter.vue'
import axios from 'axios'
import { useToast } from 'vue-toast-notification'
import { ref } from 'vue'
import Trans from '@/plugins/i18n/translation.js'
import TheFooterSkeletor from '@/organisms/TheFooter/TheFooterSkeletor.vue'

const toast = useToast()
const isLoading = ref(true)
let siteLinks = {}

const getSiteLinks = async () => {
  try {
    const response = await axios.get(`https://goldboost.demodev.cc/api/main/settings/`, {
      headers: {
        'Accept-Language': Trans.currentLocale
      }
    })
    siteLinks = response.data
    isLoading.value = false
  } catch (error) {
    console.error(error)
    toast.error(error.response.data.detail)
  }
}

getSiteLinks()
</script>

<style></style>
