<template>
  <MainNewsTemplate
    v-if="!isNewsLoading"
    :newsData="newsData"
    v-model:currentPage="currentPage"
    v-model:mobileCurrentPage="mobileCurrentPage"
  />

  <MainNewsSkeletor v-else />
</template>

<script setup>
import { ref, watch } from 'vue'
import { getAsyncNews } from '@/api/main.js'
import { pushData } from '@/composables/asyncFunc.js'
import MainNewsTemplate from '@/organisms/MainNews/MainNewsTemplate.vue'
import MainNewsSkeletor from '@/organisms/MainNews/MainNewsSkeletor.vue'

const newsData = ref([])
const isNewsLoading = ref(true)
const currentPage = ref(1)
const mobileCurrentPage = ref(1)
const pageSize = ref(3)
const countPages = ref()
pushData(getAsyncNews, newsData, isNewsLoading, currentPage.value, pageSize.value)

watch(currentPage, () => {
  if (newsData.value[currentPage.value - 1] == null) {
    isNewsLoading.value = true
    pushData(getAsyncNews, newsData, isNewsLoading, currentPage.value, pageSize.value)
  }
})

watch(mobileCurrentPage, () => {
  if (newsData.value[mobileCurrentPage.value - 1] == null) {
    pushData(getAsyncNews, newsData, isNewsLoading, mobileCurrentPage.value, pageSize.value)
  }
})
</script>

<style>
@import 'MainNews.scss';
</style>
