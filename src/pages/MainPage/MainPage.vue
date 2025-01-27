<template>
  <div class="main-page">
    <router-view> </router-view>

    <PageBanner />

    <div class="main__background-block">
      <picture>
        <source
          media="(max-width: 767px)"
          srcset="@/assets/images/MainPage/background-1-mobile.webp"
        />

        <source media="(min-width: 768px)" srcset="@/assets/images/MainPage/background-1.webp" />

        <img
          class="main__background"
          src="@/assets/images/MainPage/background-1.webp"
          alt="Background"
          fetchpriority="high"
          width="1600"
          height="773"
        />
      </picture>
    </div>

    <SearchSection />

    <template v-if="!isGameListLoading">
      <template v-for="(game, index) in gamesListData" :key="index">
        <GameCarusel :game="game" />
      </template>
    </template>

    <GameCaruselSkeletor v-for="index in 3" :key="index" v-else />

    <component :is="lazyChooseBlock" />

    <component :is="lazyHotOffersBlock" v-if="!isGameListLoading" :gamesList="gamesListData" />

    <component :is="lazyReviewsBlock" />

    <component :is="lazyNewsComponent" />

    <component :is="lazyInstagramBlock" :siteLinks="siteLinks" :isAppLoading="isAppLoading" />
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue'
import { getAsyncGames } from '@/api/game.js'
import { getData } from '@/composables/asyncFunc.js'
import PageBanner from '@/molecules/PageBanner/PageBanner.vue'
import SearchSection from '@/organisms/SearchBlockComponent/SearchSection.vue'
import GameCarusel from '@/organisms/GameCarusel/GameCarusel.vue'
import GameCaruselSkeletor from '@/organisms/GameCarusel/GameCaruselSkeletor.vue'

defineProps(['siteLinks', 'isAppLoading'])

const lazyInstagramBlock = defineAsyncComponent(
  () => import('@/organisms/InstagramBlockComponent/InstagramBlockComponent.vue')
)
const lazyNewsComponent = defineAsyncComponent(() => import('@/organisms/MainNews/MainNews.vue'))
const lazyReviewsBlock = defineAsyncComponent(
  () => import('@/organisms/ReviewsBlock/ReviewsBlock.vue')
)
const lazyChooseBlock = defineAsyncComponent(
  () => import('@/organisms/ChooseBlockComponent/ChooseBlockComponent.vue')
)
const lazyHotOffersBlock = defineAsyncComponent(
  () => import('@/organisms/HotOffersBlockComponent/HotOffersBlockComponent.vue')
)

const gamesListData = ref([])
const isGameListLoading = ref(true)

getData(getAsyncGames, gamesListData, isGameListLoading)
</script>

<style>
@import './MainPage.scss';
</style>
