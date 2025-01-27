<template>
  <div class="user-info">
    <UserInfoItemSkeletor v-for="(item, index) in 3" :key="index" />
  </div>
</template>

<script setup>
import UserInfoItemSkeletor from '@/atoms/UserInfoItem/UserInfoItemSkeletor.vue'
</script>

<style>
@import './UserInfo.scss';
</style>
