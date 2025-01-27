<template>
  <div class="breadcrumbs">
    <LinkComponent
      class="breadcrumbs__link link_gradient"
      :text="$t('home')"
      :to="{ name: 'home', params: { locale: $i18n.locale } }"
    >
      <HomeIcon class="icon" />
    </LinkComponent>

    <div class="breadcrumbs__link-block" v-for="(item, index) in list" :key="index">
      /
      <LinkComponent class="breadcrumbs__link" :text="item.text" :to="item.link"> </LinkComponent>
    </div>
  </div>
</template>

<script setup>
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'
import HomeIcon from '@/atoms/icons/HomeIcon.vue'

defineProps(['list'])
</script>

<style>
@import 'BreadCrumbs.scss';
</style>
