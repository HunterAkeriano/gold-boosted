<template>
  <button
    :type="type"
    class="button"
    :class="{
      button_circle: circle,
      button_rectangle: rectangle,
      button_transparent: transparent,
      button_active: active
    }"
    :aria-label="arialLabel"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  arialLabel: String,
  rectangle: Boolean,
  circle: Boolean,
  transparent: Boolean,
  active: Boolean,
  type: { type: String, default: 'button' }
})
</script>

<style>
@import 'UIButton.scss';
</style>
