<template>
  <div class="user-info__item">
    <Skeletor class="user-info__item-title" />

    <Skeletor class="user-info__item-value" />
  </div>
</template>

<script setup>
import { Skeletor } from 'vue-skeletor'
import 'vue-skeletor/dist/vue-skeletor.css'
</script>

<style>
@import './UserInfoItem.scss';
</style>
