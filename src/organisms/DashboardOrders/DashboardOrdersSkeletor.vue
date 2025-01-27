<template>
  <DashboardOrderSkeletor v-for="index in 7" :key="index" />
</template>

<script setup>
import DashboardOrderSkeletor from '@/organisms/DashboardOrder/DashboardOrderSkeletor.vue'
</script>

<style>
@import 'DashboardOrders.scss';
</style>
