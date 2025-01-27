<template>
  <div class="basket-page">
    <RouterView></RouterView>

    <PageBanner :desktop-src="banner.desktopSrc" :mobile-src="banner.mobileSrc" />

    <div class="container">
      <BreadcrumbsComponent :list="breadcrumbsItems" />

      <h1 class="basket-page__title page-title">{{ $t('orderInfoPage.title') }}</h1>

      <template v-if="!isBasketLoading">
        <div v-if="basketData[0].items.length > 0">
          <div class="basket-page__products">
            <template v-for="(pageData, index) in basketData" :key="index">
              <div class="basket-page__multi-orders-list" v-if="pageData.items.length > 0">
                <template v-for="(product, index) in pageData.items" :key="index">
                  <MultiOrderBasket
                    v-if="product.items.length > 1"
                    :multiData="product"
                    @deleteProduct="deleteProduct(product.id)"
                  />
                </template>
              </div>

              <div class="basket-page__single-orders-list" v-if="pageData.items.length > 0">
                <template v-for="(product, index) in pageData.items" :key="index">
                  <SingleOrderBasket
                    v-if="product.items.length === 1"
                    :data="product"
                    @deleteProduct="deleteProduct(product.id)"
                  />
                </template>
              </div>
            </template>
          </div>

          <PaginationMore class="more-button" v-model="page" v-if="basketData[0].count > page" />

          <div class="basket-page__total">
            <PromoComponent v-if="checkCookie('access')" v-model="discount" />

            <div class="basket-page__total-bonus">
              <span class="basket-page__total-bonus-text">
                {{ $t('basketPage.bonusPoints') }}:
                <PointIcon class="basket-page__total-bonus-text-icon"
              /></span>

              <span class="basket-page__total-bonus-value">{{ basketData[0].total_bonuses }}</span>
            </div>

            <div class="basket-page__total-price">
              <span class="basket-page__total-price-text"> {{ $t('basketPage.total') }}: </span>

              <span class="basket-page__total-price-value">
                <template v-if="discount > 0">
                  <span class="basket-page__total-price-currency">
                    ${{ basketData[0].total_price.toFixed(2) }}
                  </span>

                  <span class="basket-page__total-price-last">
                    {{ basketData[0].total_price.toFixed(2) }}
                  </span>

                  <span class="basket-page__total-price-discount">
                    {{ discount }}
                  </span>
                </template>

                <template v-else>
                  <span class="basket-page__total-price-currency">
                    ${{ basketData[0].total_price.toFixed(2) }}
                  </span>
                </template>
              </span>
            </div>
          </div>

          <ProfileDataComponent />

          <CoordinationalChannelComponent />

          <PaymentMethodComponent />

          <ButtonComponent class="basket-page__button" @click="newOrder" rectangle>
            {{ $t('basketPage.buyNow') }}
          </ButtonComponent>
        </div>

        <EmptyProducts v-else :emptyData="emptyData" />
      </template>

      <template v-else>
        <BasketProductsSkeletor />

        <ProfileDataSkeletor />

        <CoordinationalChannelSkeletor />

        <PaymentMethodSkeletor />

        <UIButtonSkeletor class="basket-page__button" />
      </template>
    </div>
  </div>
</template>

<script setup>
import BreadcrumbsComponent from '@/molecules/BreadCrumbs/BreadCrumbs.vue'
import ButtonComponent from '@/atoms/ui/UIButton/UIButton.vue'
import Trans from '@/plugins/i18n/translation.js'
import { useI18n } from 'vue-i18n'
import PageBanner from '@/molecules/PageBanner/PageBanner.vue'
import { deleteAsyncMyBasketItem, getAsyncMyBasket, postAsyncNewOrder } from '@/api/orders.js'
import { ref, watchEffect } from 'vue'
import { pushData } from '@/composables/asyncFunc.js'
import ProfileDataComponent from '@/organisms/ProfileData/ProfileData.vue'
import CoordinationalChannelComponent from '@/molecules/CoordinationalChannel/CoordinationalChannel.vue'
import PaymentMethodComponent from '@/organisms/PaymentMethod/PaymentMethod.vue'
import ProfileDataSkeletor from '@/organisms/ProfileData/ProfileDataSkeletor.vue'
import CoordinationalChannelSkeletor from '@/molecules/CoordinationalChannel/CoordinationalChannelSkeletor.vue'
import PaymentMethodSkeletor from '@/organisms/PaymentMethod/PaymentMethodSkeletor.vue'
import UIButtonSkeletor from '@/atoms/ui/UIButton/UIButtonSkeletor.vue'
import router from '@/plugins/router/index.js'
import EmptyProducts from '@/organisms/EmptyProducts/EmptyProducts.vue'
import PromoComponent from '@/molecules/PromoComponent/PromoComponent.vue'
import { checkCookie } from '@/composables/useCookie.js'
import PointIcon from '@/atoms/icons/PointIcon.vue'
import BasketProductsSkeletor from '@/pages/BasketPage/BasketProductsSkeletor.vue'
import SingleOrderBasket from '@/molecules/SingleOrderBasket/SingleOrderBasket.vue'
import MultiOrderBasket from '@/molecules/MultiOrderBasket/MultiOrderBasket.vue'
import PaginationMore from '@/molecules/PaginationMore/PaginationMore.vue'
import { useToast } from 'vue-toast-notification'

const { t } = useI18n()

const breadcrumbsItems = [
  {
    text: t('orderInfoPage.title'),
    link: { name: 'basket', params: { locale: Trans.currentLocale } }
  }
]

const basketData = ref([])
const isBasketLoading = ref(true)
const page = ref(1)
const pageSize = 3
const discount = ref(0)
const toast = useToast()

const emptyData = {
  title: t('basketPage.empty.title'),
  description: t('basketPage.empty.description'),
  buttonText: t('basketPage.empty.buttonText'),
  buttonLink: { name: 'catalog', params: { locale: Trans.currentLocale, catalogId: 1 } }
}

watchEffect(() => {
  pushData(getAsyncMyBasket, basketData, isBasketLoading, page.value, pageSize)
})

const banner = {
  desktopSrc: new URL(`/src/assets/images/Dashboard/background.webp`, import.meta.url),
  mobileSrc: new URL(`/src/assets/images/Dashboard/background.webp`, import.meta.url)
}

const newOrder = () => {
  postAsyncNewOrder()
}

const deleteProduct = async (itemId) => {
  await deleteAsyncMyBasketItem(itemId)
  await pushData(getAsyncMyBasket, basketData, isBasketLoading, page.value, pageSize)

  if (page.value > basketData.value.count) {
    page.value = basketData.value.count
  }
}
</script>

<style>
@import './BasketPage.scss';
</style>
