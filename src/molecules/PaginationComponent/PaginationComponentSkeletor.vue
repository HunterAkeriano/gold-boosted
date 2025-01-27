<template>
  <div class="pagination">
    <UIButtonSkeletor class="pagination__button pagination__button_prev" />

    <div
      class="pagination__circle-list"
      :class="{ 'pagination__circle-list_mobile-hiden': mobileButton }"
    >
      <UIButtonSkeletor v-for="index in 4" :key="index" class="pagination__button-circle" />
    </div>

    <UIButtonSkeletor class="pagination__button pagination__button_next" />

    <UIButtonSkeletor class="pagination__more-button" v-if="mobileButton" />
  </div>
</template>

<script setup>
import UIButtonSkeletor from '@/atoms/ui/UIButton/UIButtonSkeletor.vue'

defineProps(['mobileButton'])
</script>

<style>
@import './PaginationComponent.scss';
</style>
