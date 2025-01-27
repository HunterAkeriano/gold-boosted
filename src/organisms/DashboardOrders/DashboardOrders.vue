<template>
  <div class="dashboard-orders">
    <template v-if="!isLoadingOrders">
      <template v-for="(item, index) in OrdersData" :key="index">
        <template v-if="item.items.length > 0">
          <DashboardOrder
            v-for="(order, index) in item.items"
            :key="index"
            :data="order"
            @updateOrdersList="updateOrdersList"
          />
        </template>

        <EmptyProducts v-else :emptyData="emptyData" />
      </template>

      <PaginationMore v-model="currentPage" v-if="OrdersData[0].count > currentPage" />
    </template>

    <DashboardOrdersSkeletor v-else />
  </div>
</template>

<script setup>
import DashboardOrder from '@/organisms/DashboardOrder/DashboardOrder.vue'
import DashboardOrdersSkeletor from '@/organisms/DashboardOrders/DashboardOrdersSkeletor.vue'
import { ref, watch } from 'vue'
import { pushData } from '@/composables/asyncFunc.js'
import { getAsyncMyOrders } from '@/api/orders.js'
import EmptyProducts from '@/organisms/EmptyProducts/EmptyProducts.vue'
import Trans from '@/plugins/i18n/translation.js'
import { useI18n } from 'vue-i18n'
import PaginationMore from '@/molecules/PaginationMore/PaginationMore.vue'

const { t } = useI18n()

const OrdersData = ref([])
const isLoadingOrders = ref(true)
const currentPage = ref(1)
const pageSize = 7

const emptyData = {
  title: t('basketPage.empty.title'),
  description: t('basketPage.empty.description'),
  buttonText: t('basketPage.empty.buttonText'),
  buttonLink: { name: 'catalog', params: { locale: Trans.currentLocale, catalogId: 1 } }
}

const updateOrdersList = () => {
  currentPage.value = 1
  OrdersData.value = []
  pushData(getAsyncMyOrders, OrdersData, isLoadingOrders, currentPage.value, pageSize)
}

watch(currentPage, () => {
  pushData(getAsyncMyOrders, OrdersData, isLoadingOrders, currentPage.value, pageSize)
})

pushData(getAsyncMyOrders, OrdersData, isLoadingOrders, currentPage.value, pageSize)
</script>

<style>
@import 'DashboardOrders.scss';
</style>
