<template>
  <UserInfoTemplate :userInfoData="userInfoData" v-if="!isLoading" />

  <UserInfoSkeletor v-else />
</template>

<script setup>
import UserInfoTemplate from '@/molecules/UserInfo/UserInfoTemplate.vue'
import UserInfoSkeletor from '@/molecules/UserInfo/UserInfoSkeletor.vue'

defineProps(['userInfoData', 'isLoading'])
</script>

<style>
@import './UserInfo.scss';
</style>
