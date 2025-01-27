<template>
  <DropDown class="character-dropdown" :isAbsolute="true" v-model="isOpen" :id="id">
    <template #selected>
      <p class="character-dropdown__name character-dropdown__name_selected">
        {{ selectedValue }}
      </p>
    </template>

    <template #options>
      <li
        class="character-dropdown__option"
        v-for="(item, index) in valuesList"
        :key="index"
        @click="selectOption(item)"
        :class="{ 'character-dropdown__option_select': item === selectedValue }"
      >
        <p class="character-dropdown__name">
          {{ item }}
        </p>
      </li>
    </template>
  </DropDown>
</template>

<script setup>
import DropDown from '@/molecules/DropDown/DropDown.vue'
import { onMounted, ref } from 'vue'
import { defineProps } from 'vue'

const props = defineProps(['valuesList', 'id'])

const isOpen = ref(false)
const selectModel = defineModel()

const selectedValue = ref(props.valuesList[0])

if (selectModel.value !== '') {
  selectedValue.value = selectModel.value
}

const emit = defineEmits(['selectOption'])

const selectOption = async (levelId) => {
  selectedValue.value = props.valuesList.find((level) => level === levelId)
  isOpen.value = false
  selectModel.value = selectedValue.value
  emit('selectOption', selectedValue.value)
}
</script>

<style>
@import 'CharacterDropDown.scss';
</style>
