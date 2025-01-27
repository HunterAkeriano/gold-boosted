<template>
  <div
    class="dropdown"
    :tabindex="0"
    @blur="handleBlur"
    :class="{ open: isOpen, dropdown_transparent: isTransparent, dropdown_absolute: isAbsolute }"
  >
    <div class="dropdown__selected-option" @click="toggleDropdown">
      <!--      refactoring-->
      <div class="dropdown__img-block">
        <img
          class="dropdown__flag"
          v-if="selectedOption && selectedOption.img"
          :src="selectedOption.img"
          alt="Flag"
        />
      </div>

      <span>{{ selectedOption ? selectedOption.value : '' }}</span>

      <span class="dropdown__arrow">
        <ArrowListIcon class="dropdown__arrow-icon" />
      </span>
    </div>

    <ul class="dropdown__options-list" v-if="isOpen">
      <li
        class="dropdown__options-list-item"
        v-for="(option, index) in optionsList"
        :key="index"
        @click="selectOption(option)"
      >
        <div class="dropdown__img-block" v-if="option && option.img">
          <img :src="option.img" class="dropdown__img-block-img" alt="Flag" />
        </div>

        <span>{{ option.value ? option.value : option.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import ArrowListIcon from '@/atoms/icons/ArrowListIcon.vue'

defineProps(['optionsList', 'selectedOption', 'isTransparent', 'isAbsolute'])

const isOpen = ref(false)
const emit = defineEmits(['optionSelected'])

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option) => {
  emit('optionSelected', option)
  isOpen.value = false
}

const handleBlur = () => {
  isOpen.value = false
}
</script>

<style scoped>
@import './DropdownComponent.scss';
</style>
