<template>
  <router-view></router-view>

  <div class="catalog-page">
    <PageBanner :desktopSrc="catalogBanner.desktopSrc" :mobileSrc="catalogBanner.mobileSrc" />

    <div class="catalog-page__override">
      <div class="container catalog-page__container">
        <div class="catalog-page__inner">
          <div class="catalog-page__games-tabs">
            <Skeletor
              v-for="index in 5"
              :key="index"
              class="catalog-page__games-tab catalog-page__games-tab_loading"
            />
          </div>

          <div class="catalog-page__aside">
            <CatalogFilterComponentSkeletor />
          </div>

          <BreadCrumbsSkeletor class="catalog-page__bread-crumbs" />

          <div class="catalog-page__info-block">
            <div class="catalog-page__title-block">
              <Skeletor class="catalog-page__title-icon" />

              <Skeletor class="catalog-page__title" />
            </div>

            <Skeletor class="catalog-page__description_skeletor" />
          </div>

          <div class="catalog-page__products-list">
            <ProductCardSkeletor />
          </div>
        </div>
      </div>

      <div class="container">
        <TabsSkeletor class="catalog-page__tabs" page="catalog-page" />
      </div>
    </div>
  </div>
</template>

<script setup>
import PageBanner from '@/molecules/PageBanner/PageBanner.vue'

import { Skeletor } from 'vue-skeletor'
import 'vue-skeletor/dist/vue-skeletor.css'
import CatalogFilterComponentSkeletor from '@/organisms/CatalogFilterComponent/CatalogFilterComponentSkeletor.vue'
import BreadCrumbsSkeletor from '@/molecules/BreadCrumbs/BreadCrumbsSkeletor.vue'
import ProductCardSkeletor from '@/molecules/ProductCard/ProductCardSkeletor.vue'
import TabsSkeletor from '@/molecules/TabsComponent/TabsSkeletor.vue'

const catalogBanner = {
  desktopSrc: new URL(`/src/assets/images/Dashboard/background.webp`, import.meta.url),
  mobileSrc: new URL(`/src/assets/images/Dashboard/background.webp`, import.meta.url)
}
</script>

<style>
@import './CatalogPage.scss';
</style>
