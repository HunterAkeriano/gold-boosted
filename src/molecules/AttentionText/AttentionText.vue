<template>
  <div class="attention-block">
    <WarningIcon class="attention-block__icon" />

    <p class="attention-block__text">
      {{ attentionText }}
    </p>
  </div>
</template>

<script setup>
import WarningIcon from '@/atoms/icons/WarningIcon.vue'
defineProps(['attentionText'])
</script>

<style>
@import 'AttentionText.scss';
</style>
