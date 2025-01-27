<template>
  <router-view />

  <div class="product-page">
    <div class="product-page__background-block">
      <img
        class="product-page__background"
        src="@/assets/images/ProductPage/background-first.webp"
      />
    </div>

    <div class="container">
      <BreadCrumbs
        class="product-page__bread-crumbs"
        :isLoading="isProductLoading"
        :list="breadCrumbsList"
        v-if="!isGameCatalogsLoading"
      />

      <h1 class="product-page__title page-title">
        <template v-if="!isProductLoading">
          {{ product.title }}
        </template>

        <Skeletor class="product-page__title_skeletor" v-else />
      </h1>

      <div class="product-page__main">
        <div class="product-page__image-block">
          <img
            class="product-page__image"
            v-if="!isProductLoading"
            :src="product.image"
            :alt="product['image_alt']"
          />

          <Skeletor class="product-page__image_skeletor" v-else />
        </div>

        <div class="product-page__aside">
          <template v-if="!isProductLoading">
            <ProductFilters
              class="product-page__product-filters"
              v-if="product.filters.length > 0"
              :filtersList="product.filters"
              v-model="checkedFiltersList"
            />
          </template>

          <Skeletor class="product-page__product-filters_skeletor" v-else />

          <ProductTotal
            :isLoading="isProductLoading"
            :product="product"
            :checkedFiltersList="checkedFiltersList"
          />
        </div>

        <div class="product-page__product-info">
          <p class="product-page__description">
            <template v-if="!isProductLoading">
              {{ product.description }}
            </template>

            <Skeletor class="product-page__description_skeletor" v-else> is loading </Skeletor>
          </p>

          <template v-if="!isProductLoading">
            <ProductTabs
              class="product-page__tabs"
              v-if="product && product.tabs && product.tabs.length > 0"
              :tabsTitleList="product.tabs"
              :isTitleLoading="isProductLoading"
              page="products"
            >
            </ProductTabs>
          </template>

          <template v-else>
            <div class="product-page__tabs">
              <div class="product-tabs__header">
                <Skeletor class="product-tabs_skeletor" v-for="index in 4" :key="index" />
              </div>

              <Skeletor class="product-tabs__tab_skeletor" />
            </div>
          </template>
        </div>
      </div>
    </div>

    <FrequentlyBought class="product-page__frequently-bought" />

    <how-to-buy class="product-page__how-to-buy" />

    <BestSellers class="product-page__bestsellers" />

    <reviews-block-component class="product-page__reviews" />
  </div>
</template>

<script setup>
import BreadCrumbs from '@/molecules/BreadCrumbs/BreadCrumbs.vue'
import ProductTabs from '@/organisms/ProductTabs/ProductTabs.vue'
import ReviewsBlockComponent from '@/organisms/ReviewsBlock/ReviewsBlock.vue'
import BestSellers from '@/organisms/BestSellers/BestSellers.vue'
import HowToBuy from '@/organisms/HowToBuy/HowToBuy.vue'
import FrequentlyBought from '@/organisms/FrequentlyBought/FrequentlyBought.vue'
import ProductFilters from '@/organisms/ProductFilters/ProductFilters.vue'
import ProductTotal from '@/organisms/ProductTotal/ProductTotal.vue'
import { useRoute } from 'vue-router'
import { ref, watchEffect } from 'vue'
import { Skeletor } from 'vue-skeletor'
import 'vue-skeletor/dist/vue-skeletor.css'
import { getData } from '@/composables/asyncFunc.js'
import { getAsyncProduct } from '@/api/product.js'
import Trans from '@/plugins/i18n/translation.js'
import { getAsyncGameCatalogs } from '@/api/game.js'

defineProps(['siteLinks', 'isAppLoading'])

const route = useRoute()
const product = ref()
const isProductLoading = ref(true)

const breadCrumbsList = ref([])
const gameCatalogsData = ref()
const isGameCatalogsLoading = ref(true)

const checkedFiltersList = ref([])

getData(getAsyncProduct, product, isProductLoading, route.params.productId).then(() => {
  getData(getAsyncGameCatalogs, gameCatalogsData, isGameCatalogsLoading, product.value.game.id)
  console.log(product.value)
})

watchEffect(async () => {
  await getData(getAsyncProduct, product, isProductLoading, route.params.productId)
  await getData(
    getAsyncGameCatalogs,
    gameCatalogsData,
    isGameCatalogsLoading,
    product.value.game.id
  )
  if (product.value.filters.length === 0) {
    checkedFiltersList.value = []
  }
  breadCrumbsList.value = [
    {
      text: product.value.game.name,
      link: {
        name: 'catalog',
        params: { catalogId: gameCatalogsData.value[0].id, locale: Trans.currentLocale }
      }
    },
    {
      text: product.value['catalog_page'].title,
      link: {
        name: 'catalog',
        params: { catalogId: product.value['catalog_page'].id, locale: Trans.currentLocale }
      }
    },
    {
      text: product.value.title,
      link: {
        name: 'product',
        params: { productId: product.value.id, locale: Trans.currentLocale }
      }
    }
  ]
})
</script>

<style>
@import './ProductPage.scss';
</style>
