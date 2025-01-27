<template>
  <div class="channels-list channels-list_close">
    <div class="channels-list__column">
      <Skeletor
        v-for="(channel, index) in 3"
        :key="index"
        class="channels-list__radio-button-block"
      />
    </div>

    <div class="channels-list__column">
      <Skeletor
        v-for="(channel, index) in 3"
        :key="index"
        class="channels-list__radio-button-block"
      />
    </div>
  </div>
</template>

<script setup>
import { Skeletor } from 'vue-skeletor'
import 'vue-skeletor/dist/vue-skeletor.css'
</script>

<style>
@import 'ChannelList.scss';
</style>
