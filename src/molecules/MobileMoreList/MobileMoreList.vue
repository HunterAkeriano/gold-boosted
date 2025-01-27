<template>
  <div class="mobile-more-list">
    <template v-for="(pageData, index) in data" :key="index">
      <template v-if="mobileCurrentPage > index">
        <component
          :is="component"
          v-for="(card, index) in pageData.items"
          :key="index"
          :data="card"
        />
      </template>
    </template>

    <PaginationMore
      class="mobile-more-list__button"
      :countPages="data.count"
      v-model="mobileCurrentPage"
    />
  </div>
</template>

<script setup>
import PaginationMore from '@/molecules/PaginationMore/PaginationMore.vue'

defineProps(['data', 'component'])

const mobileCurrentPage = defineModel()
</script>

<style>
@import './MobileMoreList.scss';
</style>
