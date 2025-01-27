<template>
  <div class="radio-component">
    <div class="radio-container">
      <input
        class="radio-input"
        type="radio"
        :value="value"
        :aria-label="ariaLabel"
        :id="id"
        :name="name"
        v-model="selectedValue"
      />

      <div class="radio-custom"></div>

      <label class="radio-component__label" :for="id">
        <slot></slot>
      </label>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps(['value', 'id', 'name', 'ariaLabel'])

const selectedValue = defineModel()
</script>

<style>
@import './RadioButton.scss';
</style>
