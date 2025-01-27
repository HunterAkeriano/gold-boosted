<template>
  <div class="coordination-channel">
    <h2 class="coordination-channel__title">
      {{ $t('basketPage.coordinationChannel') }}
    </h2>

    <ChannelListSkeletor class="coordination-channel__radio-buttons-list" />
  </div>
</template>

<script setup>
import ChannelListSkeletor from '@/molecules/ChannelList/ChannelListSkeletor.vue'
</script>

<style>
@import 'CoordinationalChannel.scss';
</style>
