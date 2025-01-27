<template>
  <HotOffersCarusel
    v-if="!isHotOffersLoading"
    :hotOffersData="hotOffersData"
    :activeGameId="activeGameId"
    :gamesList="gamesList"
    v-model:currentPage="currentPage"
    v-model:mobileCurrentPage="mobileCurrentPage"
    @changeActiveGameId="changeActiveGameId"
  />

  <HotOffersCaruselSkeletor v-else />
</template>

<script setup>
import { ref, watch } from 'vue'
import { pushData } from '@/composables/asyncFunc.js'
import { getAsyncHotOffers } from '@/api/product.js'
import HotOffersCarusel from '@/molecules/HotOffersCarusel/HotOffersCarusel.vue'
import HotOffersCaruselSkeletor from '@/molecules/HotOffersCarusel/HotOffersCaruselSkeletor.vue'

defineProps(['gamesList'])

const hotOffersData = ref([[]])
const isHotOffersLoading = ref(true)
const pageSize = 4
const currentPage = ref(1)
const mobileCurrentPage = ref(1)
const activeGameId = ref(0)

pushData(
  getAsyncHotOffers,
  hotOffersData,
  isHotOffersLoading,
  currentPage.value,
  activeGameId.value,
  pageSize
)

const changeActiveGameId = (id) => {
  if (activeGameId.value === id) {
    activeGameId.value = null
  } else {
    activeGameId.value = id
  }
}

watch(currentPage, () => {
  if (hotOffersData.value[currentPage.value - 1] == null) {
    isHotOffersLoading.value = true
    pushData(
      getAsyncHotOffers,
      hotOffersData,
      isHotOffersLoading,
      currentPage.value,
      activeGameId.value,
      pageSize
    )
  }
})

watch(activeGameId, () => {
  hotOffersData.value = []
  currentPage.value = 1
  mobileCurrentPage.value = 1
  if (hotOffersData.value[currentPage.value - 1] == null) {
    isHotOffersLoading.value = true
    pushData(
      getAsyncHotOffers,
      hotOffersData,
      isHotOffersLoading,
      currentPage.value,
      activeGameId.value,
      pageSize
    )
  }
})

watch(mobileCurrentPage, () => {
  if (mobileCurrentPage.value === 1) {
    isHotOffersLoading.value = true
  }

  if (hotOffersData.value[mobileCurrentPage.value - 1] == null) {
    pushData(
      getAsyncHotOffers,
      hotOffersData,
      isHotOffersLoading,
      mobileCurrentPage.value,
      activeGameId.value,
      pageSize
    )
  }
})
</script>

<style>
@import './HotOffersBlockComponent.scss';
</style>
