<template>
  <div class="profile-data">
    <h2 class="profile-data__title basket-section-title">
      {{ $t('basketPage.profileData') }}
    </h2>

    <div class="profile-data__inputs">
      <Skeletor class="profile-data__input" v-for="index in 4" :key="index" />
    </div>

    <attention-component
      class="profile-data__attention-block"
      :attentionText="$t('basketPage.profileWarrning')"
    />
  </div>
</template>

<script setup>
import AttentionComponent from '@/molecules/AttentionText/AttentionText.vue'
import { Skeletor } from 'vue-skeletor'
import 'vue-skeletor/dist/vue-skeletor.css'
</script>

<style>
@import 'ProfileData.scss';
</style>
