<template>
  <div class="breadcrumbs">
    <Skeletor width="60" heigth="12" pill />

    <div class="breadcrumbs__link-block" v-for="item in 2">
      /
      <Skeletor width="100" heigth="12" pill />
    </div>
  </div>
</template>

<script setup>
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'
import HomeIcon from '@/atoms/icons/HomeIcon.vue'
import { Skeletor } from 'vue-skeletor'
import 'vue-skeletor/dist/vue-skeletor.css'

defineProps(['list', 'isLoading'])
</script>

<style>
@import 'BreadCrumbs.scss';
</style>
