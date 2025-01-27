<template>
  <div class="checkbox-component" :class="{ 'checkbox-component_rectangle': rectangle }">
    <div class="checkbox-container">
      <input
        class="checkbox-input"
        type="checkbox"
        v-model="checkbox"
        :value="value"
        :id="id"
        :name="name"
        :true-value="value"
        :false-value="false"
        :checked="checked"
      />

      <div class="checkbox-custom" :class="{ 'checkbox-custom_rectangle': rectangle }">
        <CheckboxCheckedIcon class="checkbox-custom-icon" v-if="rectangle && checkbox" />
      </div>

      <label class="checkbox-component__label" :for="id">
        <slot></slot>
      </label>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import CheckboxCheckedIcon from '@/atoms/icons/CheckboxCheckedIcon.vue'

defineProps(['value', 'id', 'name', 'rectangle', 'checked'])

const checkbox = defineModel()
</script>

<style>
@import './CheckboxComponent.scss';
</style>
