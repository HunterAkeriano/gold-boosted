<template>
  <BreadCrumbsTemplate v-if="!isLoading" :list="list" />

  <BreadCrumbsSkeletor v-else />
</template>

<script setup>
import BreadCrumbsTemplate from '@/molecules/BreadCrumbs/BreadCrumbsTemplate.vue'
import BreadCrumbsSkeletor from '@/molecules/BreadCrumbs/BreadCrumbsSkeletor.vue'

defineProps(['list', 'isLoading'])
</script>

<style>
@import 'BreadCrumbs.scss';
</style>
