<template>
  <div class="character-block">
    <div class="character-block__item character-block__item-battleTag">
      <Skeletor class="character-block__item-label">
        <Skeletor class="character-block__item-input" />
      </Skeletor>
    </div>

    <div class="character-block__item character-block__item-class">
      <Skeletor class="character-block__item-label">
        <Skeletor class="character-block__item-input" />
      </Skeletor>
    </div>

    <div class="character-block__item character-block__item-character-name">
      <Skeletor class="character-block__item-label">
        <Skeletor class="character-block__item-input" />
      </Skeletor>
    </div>

    <div class="character-block__item character-block__item-faction">
      <Skeletor class="character-block__item-label">
        <Skeletor class="character-block__item-input" />
      </Skeletor>
    </div>

    <div class="character-block__item character-block__item-realm">
      <Skeletor class="character-block__item-label">
        <Skeletor class="character-block__item-input" />
      </Skeletor>
    </div>

    <div class="character-block__item character-block__item-additional">
      <Skeletor class="character-block__item-label">
        <Skeletor class="character-block__item-input" />
      </Skeletor>
    </div>

    <div class="character-block__item">
      <UIButtonSkeletor />
    </div>

    <div class="character-block__item">
      <UIButtonSkeletor class="character-block__item-button-delete" />
    </div>
  </div>
</template>

<script setup>
import { Skeletor } from 'vue-skeletor'
import 'vue-skeletor/dist/vue-skeletor.css'
import UIButtonSkeletor from '@/atoms/ui/UIButton/UIButtonSkeletor.vue'
</script>

<style>
@import 'CharacterInfo.scss';
</style>
