<template>
  <div class="user-info">
    <UserInfoItem v-for="(item, index) in userInfoData" :key="index" :userInfoDataItem="item" />
  </div>
</template>

<script setup>
import UserInfoItem from '@/atoms/UserInfoItem/UserInfoItem.vue'

defineProps(['userInfoData'])
</script>

<style>
@import './UserInfo.scss';
</style>
