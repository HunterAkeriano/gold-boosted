<template>
  <div class="accordion">
    <div class="accordion__header" :class="{ open: isOpen }" @click="toggleAccordion()">
      <slot name="header"></slot>
    </div>

    <transition-group name="accordion-slide">
      <slot class="accordion__content" v-if="isOpen"></slot>
    </transition-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleAccordion = () => {
  console.log(isOpen)
  isOpen.value = !isOpen.value
}
</script>

<style>
@import './TheAccordion.scss';
</style>
