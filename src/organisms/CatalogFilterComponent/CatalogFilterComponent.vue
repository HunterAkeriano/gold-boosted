<template>
  <div class="catalog-filter" v-if="!isAccordionDataLoading">
    <template v-if="accordionData.length">
      <CatalogFilter
        v-for="(filterData, index) in accordionData"
        :key="index"
        :filterData="filterData"
      />
    </template>
  </div>

  <CatalogFilterComponentSkeletor v-else />
</template>

<script setup>
import CatalogFilter from '@/molecules/CatalogFilter/CatalogFilter.vue'
import { getData } from '@/composables/asyncFunc.js'
import { getAsyncGameCatalogs } from '@/api/game.js'
import { ref, watchEffect } from 'vue'
import CatalogFilterComponentSkeletor from '@/organisms/CatalogFilterComponent/CatalogFilterComponentSkeletor.vue'

const props = defineProps(['gameId'])

const accordionData = ref()
const isAccordionDataLoading = ref(true)

getData(getAsyncGameCatalogs, accordionData, isAccordionDataLoading, props.gameId)

watchEffect(() => {
  getData(getAsyncGameCatalogs, accordionData, isAccordionDataLoading, props.gameId)
})
</script>

<style>
@import './CatalogFilterComponent.scss';
</style>
