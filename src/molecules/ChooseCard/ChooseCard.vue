<template>
  <div class="choose-card">
    <div class="choose-card__icon-block">
      <img class="choose-card__icon" :src="icon" :alt="iconAlt" v-if="!isLoading" />

      <Skeletor v-else width="40" height="40" pill></Skeletor>
    </div>

    <h3 class="choose-card__title">
      <template v-if="!isLoading">
        {{ title }}
      </template>

      <Skeletor v-else width="100%" height="21" pill></Skeletor>
    </h3>

    <p class="choose-card__description">
      <template v-if="!isLoading">
        {{ description }}
      </template>

      <Skeletor v-else width="100%" height="57" pill></Skeletor>
    </p>
  </div>
</template>

<script setup>
import { Skeletor } from 'vue-skeletor'
import 'vue-skeletor/dist/vue-skeletor.css'

defineProps({
  icon: String,
  iconAlt: String,
  title: String,
  description: String,
  isLoading: Boolean
})
</script>

<style>
@import 'ChooseCard.scss';
</style>
