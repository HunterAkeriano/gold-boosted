<template>
  <div class="user-info__item">
    <p class="user-info__item-title">
      {{ userInfoDataItem.title }}
    </p>

    <p class="user-info__item-value">
      {{ userInfoDataItem.value }}
    </p>
  </div>
</template>

<script setup>
defineProps(['userInfoDataItem'])
</script>

<style>
@import './UserInfoItem.scss';
</style>
