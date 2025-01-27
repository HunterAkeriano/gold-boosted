<template>
  <div
    class="dropdown"
    :id="id"
    :tabindex="0"
    @blur="handleBlur"
    :class="{ open: isOpen, dropdown_transparent: isTransparent, dropdown_absolute: isAbsolute }"
  >
    <div class="dropdown__selected-option" @click="toggleDropdown">
      <slot name="selected"></slot>

      <span class="dropdown__arrow">
        <ArrowListIcon class="dropdown__arrow-icon" />
      </span>
    </div>

    <ul class="dropdown__options-list">
      <slot class="dropdown__options-list" name="options" v-if="isOpen"> </slot>
    </ul>
  </div>
</template>

<script setup>
import ArrowListIcon from '@/atoms/icons/ArrowListIcon.vue'

defineProps({
  isTransparent: Boolean,
  isAbsolute: Boolean,
  id: String
})

const isOpen = defineModel()
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const handleBlur = () => {
  isOpen.value = false
}
</script>

<style>
@import './DropDown.scss';
</style>
