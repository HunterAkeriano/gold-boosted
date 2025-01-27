<template>
  <ButtonComponent @click="currentPage++" v-if="countPages > currentPage" rectangle transparent>
    {{ $t('more') }}
  </ButtonComponent>
</template>

<script setup>
import ButtonComponent from '@/atoms/ui/UIButton/UIButton.vue'

defineProps({
  countPages: { default: 4 }
})

const currentPage = defineModel()
</script>

<style>
@import './PaginationMore.scss';
</style>
