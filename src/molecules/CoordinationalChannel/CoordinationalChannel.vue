<template>
  <div class="coordination-channel">
    <h2 class="coordination-channel__title">
      {{ $t('basketPage.coordinationChannel') }}
    </h2>

    <ChannelRadioButtonsList class="coordination-channel__radio-buttons-list" />
  </div>
</template>

<script setup>
import ChannelRadioButtonsList from '@/molecules/ChannelList/ChannelList.vue'
</script>

<style>
@import 'CoordinationalChannel.scss';
</style>
