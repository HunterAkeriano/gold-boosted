<template>
  <section class="character-basket">
    <h2 class="character-basket__title basket-section-title">Character information</h2>

    <CharacterComponent class="character-basket__inputs" />
  </section>
</template>

<script setup>
import CharacterComponent from '@/molecules/CharacterInfo/CharacterInfo.vue'
</script>

<style>
@import './CharacterBasketComponent.scss';
</style>
