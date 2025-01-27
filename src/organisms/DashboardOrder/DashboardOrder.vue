<template>
  <TheAccordion class="order">
    <template #header>
      <div class="order__header">
        <div class="order__header-infos">
          <div class="order__header-info">
            <div class="order__header-item order__header-number">
              <p class="order__header-item-title">{{ $t('ordersPage.id') }}:</p>

              <p class="order__header-item-value">
                {{ data.number }}
              </p>
            </div>
          </div>

          <div class="order__header-status order__header-status_progress">
            <UIButton
              class="order__header-repeat-button"
              v-if="data.repeat_btn"
              circle
              @click="orderRepeat(data.number)"
            >
              <repeat-icon class="order__header-repeat-icon" />
            </UIButton>

            <p class="order__header-progress-value" :class="addStatusColor(data.status)">
              {{ data.status }}
            </p>
          </div>
        </div>

        <div class="order__header-arrow">
          <ArrowListIcon />
        </div>
      </div>
    </template>

    <template #default>
      <div class="order__body" v-if="!isOrderDetailsLoading">
        <template v-for="(orders, index) in orderDetails" :key="index">
          <div class="order__list-multi-orders">
            <template v-for="(order, index) in orders.items" :key="index">
              <MultiOrder v-if="order.items.length > 1" :multiData="order" />
            </template>
          </div>

          <div class="order__list-single-orders" v-if="!isOrderDetailsLoading">
            <template v-for="(order, index) in orders.items" :key="index">
              <SingleOrder v-if="order.items.length === 1" :data="order" />
            </template>
          </div>
        </template>

        <PaginationMore
          v-if="!isOrderDetailsLoading && orderDetails[0].count > currentPage"
          :count-pages="orderDetails[0].count"
          v-model="currentPage"
        />

        <div class="order__total">
          <div class="order__total-date">
            <p class="order__total-date-title">{{ $t('ordersPage.date') }}:</p>

            <p class="order__total-date-value">
              {{ dateNormalize(data.date_created) }}
            </p>
          </div>

          <div class="order__total-price">
            <p class="order__total-price-title">{{ $t('ordersPage.total') }}:</p>

            <p class="order__total-price-value">${{ data.total_price.toFixed(2) }}</p>
          </div>
        </div>
      </div>
    </template>
  </TheAccordion>
</template>

<script setup>
import TheAccordion from '@/atoms/ui/Accordion/TheAccordion.vue'
import RepeatIcon from '@/atoms/icons/RepeatIcon.vue'
import ArrowListIcon from '@/atoms/icons/ArrowListIcon.vue'
import UIButton from '@/atoms/ui/UIButton/UIButton.vue'
import SingleOrder from '@/molecules/SingleOrder/SingleOrder.vue'
import { pushData } from '@/composables/asyncFunc.js'
import { getAsyncOrderDetails, postAsyncRepeatOrder } from '@/api/orders.js'
import { ref, watch } from 'vue'
import PaginationMore from '@/molecules/PaginationMore/PaginationMore.vue'
import MultiOrder from '@/molecules/MultiOrder/MultiOrder.vue'

const props = defineProps(['data'])
const orderDetails = ref([])
const isOrderDetailsLoading = ref(true)
const currentPage = ref(1)
const pageSize = 6

pushData(
  getAsyncOrderDetails,
  orderDetails,
  isOrderDetailsLoading,
  currentPage.value,
  pageSize,
  props.data.number
).then(() => {
  console.log(orderDetails.value)
})

const emit = defineEmits(['update-orders-list'])

const dateNormalize = (asyncDate) => {
  return new Date(asyncDate).toLocaleString()
}

const orderRepeat = async (number) => {
  event.stopPropagation()
  await postAsyncRepeatOrder(number)
  emit('update-orders-list')
}

watch(currentPage, () => {
  pushData(
    getAsyncOrderDetails,
    orderDetails,
    isOrderDetailsLoading,
    currentPage.value,
    pageSize,
    props.data.number
  ).then(() => {
    console.log(orderDetails.value)
  })
})

const addStatusColor = (status) => {
  if (status === 'В ПРОЦЕСІ' || status === 'IN PROGRESS') {
    return 'order__header-status_in-progress'
  } else if (status === 'ВИКОНАНО' || status === 'COMPLETED') {
    return 'order__header-status_completed'
  } else if (status === 'СКАСОВАНО' || status === 'CANCELED') {
    return 'order__header-status_canceled'
  }
}
</script>

<style lang="scss">
@import './DashboardOrder';
</style>
