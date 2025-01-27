<template>
  <router-view></router-view>

  <div class="catalog-page" v-if="!isCatalogLoading">
    <PageBanner :desktopSrc="catalogBanner.desktopSrc" :mobileSrc="catalogBanner.mobileSrc" />

    <div class="catalog-page__override">
      <div class="container catalog-page__container">
        <div class="catalog-page__inner">
          <div class="catalog-page__games-tabs">
            <template v-if="!isGamesLoading">
              <LinkComponent
                class="catalog-page__games-tab"
                v-for="(game, index) in gamesList"
                :key="index"
                :class="{ 'catalog-page__games-tab_active': catalog['game_id'] === game.id }"
                :to="{
                  name: 'catalog',
                  params: {
                    catalogId: game.items[0].id,
                    locale: $i18n.locale
                  }
                }"
              >
                <img
                  class="catalog-page__games-tab-icon"
                  :src="game['logo_filter']"
                  :alt="game['logo_filter_alt']"
                />
              </LinkComponent>
            </template>

            <template v-else>
              <Skeletor
                width="20"
                heigth="20"
                class="catalog-page__games-tab catalog-page__games-tab_loading"
              />
            </template>
          </div>

          <div class="catalog-page__aside">
            <CatalogFilterComponent v-if="!isCatalogLoading" :gameId="catalog['game_id']" />
          </div>

          <BreadcrumbsComponent class="catalog-page__bread-crumbs" :list="linkItems" />

          <div class="catalog-page__info-block">
            <div class="catalog-page__title-block">
              <div class="catalog-page__title-icon" v-if="GameInfo">
                <img :src="GameInfo['logo_product']" alt="Logo" />
              </div>

              <h1 class="catalog-page__title" v-if="GameInfo">
                {{ GameInfo.name }}
              </h1>
            </div>

            <p class="catalog-page__description">
              {{ catalog.description }}
            </p>
          </div>

          <div class="catalog-page__products-list" v-if="!isProductListLoading">
            <ProductCardComponent
              :data="item"
              v-for="(item, index) in productList.items"
              :key="index"
            />
          </div>
        </div>
      </div>

      <WorthBlockComponent
        class="catalog-page__worth-block"
        v-if="!isWorthListLoading"
        :worthList="worthList"
      />

      <CatalogCalendar class="catalog-page__calendar" />

      <div class="container">
        <ServerTabs
          class="catalog-page__tabs"
          v-if="catalog.tabs.length > 0"
          :tabsTitleList="catalog.tabs"
          page="catalog-page"
        >
        </ServerTabs>
      </div>
    </div>
  </div>

  <CatalogPageSkeletor v-else />
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useToast } from 'vue-toast-notification'
import { useRoute, useRouter } from 'vue-router'

import { getData } from '@/composables/asyncFunc.js'
import { getAsyncCatalog, getAsyncWorthLook } from '@/api/catalog.js'
import { getAsyncGameCarousel, getAsyncGames } from '@/api/game.js'

import BreadcrumbsComponent from '@/molecules/BreadCrumbs/BreadCrumbs.vue'
import CatalogFilterComponent from '@/organisms/CatalogFilterComponent/CatalogFilterComponent.vue'
import ServerTabs from '@/organisms/ProductTabs/ProductTabs.vue'
import CatalogCalendar from '@/organisms/CatalogCalendar/CatalogCalendar.vue'
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'

import Trans from '@/plugins/i18n/translation.js'
import WorthBlockComponent from '@/organisms/WorthBlockComponent/WorthBlockComponent.vue'
import ProductCardComponent from '@/molecules/ProductCard/ProductCard.vue'
import PageBanner from '@/molecules/PageBanner/PageBanner.vue'

import { Skeletor } from 'vue-skeletor'
import 'vue-skeletor/dist/vue-skeletor.css'
import CatalogPageSkeletor from '@/pages/CatalogPage/CatalogPageSkeletor.vue'

defineProps(['siteLinks', 'isAppLoading'])

const catalogBanner = {
  desktopSrc: new URL(`/src/assets/images/Dashboard/background.webp`, import.meta.url),
  mobileSrc: new URL(`/src/assets/images/Dashboard/background.webp`, import.meta.url)
}

const toast = useToast()
const route = useRoute()
const router = useRouter()

const gamesList = ref([])
const catalog = ref()
const linkItems = ref([])

const isGamesLoading = ref(true)
const isCatalogLoading = ref(true)

const GameInfo = ref()

const productList = ref()
const isProductListLoading = ref(true)

const worthList = ref()
const isWorthListLoading = ref(true)

getData(getAsyncGames, gamesList, isGamesLoading)

const initCatalog = async () => {
  await getData(getAsyncWorthLook, worthList, isWorthListLoading, route.params.catalogId)
  await getData(getAsyncCatalog, catalog, isCatalogLoading, route.params.catalogId)
  getData(
    getAsyncGameCarousel,
    productList,
    isProductListLoading,
    1,
    6,
    catalog.value['game_id'],
    route.params.catalogId
  ).then(() => {
    GameInfo.value = gamesList.value.find((item) => item.id === catalog.value['game_id'])
    createLinkItems()
  })
}

watchEffect(() => {
  initCatalog()
})

const createLinkItems = () => {
  linkItems.value = [
    {
      text: GameInfo.value.name,
      link: {
        name: 'catalog',
        params: {
          locale: Trans.currentLocale,
          catalogId: GameInfo.value.items[0].id
        }
      }
    },
    {
      text: catalog.value.title,
      link: {
        name: 'catalog',
        params: { locale: Trans.currentLocale, catalogId: route.params.catalogId }
      }
    }
  ]
}
</script>

<style>
@import './CatalogPage.scss';
</style>
