<template>
  <div class="input-block">
    <Skeletor class="input-block__input" />

    <UIButtonSkeletor class="input-block__button" />
  </div>
</template>

<script setup>
import UIButtonSkeletor from '@/atoms/ui/UIButton/UIButtonSkeletor.vue'
import { Skeletor } from 'vue-skeletor'
import 'vue-skeletor/dist/vue-skeletor.css'
</script>

<style>
@import 'InputBlock.scss';
</style>
