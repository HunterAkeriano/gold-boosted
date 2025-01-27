<template>
  <div class="profile-data">
    <h2 class="profile-data__title basket-section-title">
      {{ $t('basketPage.profileData') }}
    </h2>

    <div class="profile-data__inputs">
      <inputComponent id="input-name" :placeholderText="$t('basketPage.name')" border />

      <inputComponent id="input-email" :placeholderText="$t('basketPage.email')" border />

      <inputComponent id="input-surname" :placeholderText="$t('basketPage.surName')" border />

      <inputComponent id="input-country" :placeholderText="$t('basketPage.country')" border />
    </div>

    <attention-component
      class="profile-data__attention-block"
      :attentionText="$t('basketPage.profileWarrning')"
    />
  </div>
</template>

<script setup>
import InputComponent from '@/atoms/ui/InputComponent/InputComponent.vue'
import AttentionComponent from '@/molecules/AttentionText/AttentionText.vue'
</script>

<style>
@import 'ProfileData.scss';
</style>
