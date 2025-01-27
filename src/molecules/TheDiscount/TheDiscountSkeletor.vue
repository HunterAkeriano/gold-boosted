<template>
  <div class="discount-form">
    <Skeletor class="discount-form__description_skeletor" />

    <InputBlockSkeletor class="discount-form__input-block" />
  </div>
</template>

<script setup>
import { Skeletor } from 'vue-skeletor'
import 'vue-skeletor/dist/vue-skeletor.css'
import InputBlockSkeletor from '@/molecules/InputBlock/InputBlockSkeletor.vue'
</script>

<style>
@import 'TheDiscount.scss';
</style>
