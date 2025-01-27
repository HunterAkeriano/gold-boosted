<template>
  <DropDown class="level-dropdown" :isAbsolute="true" v-model="isOpen">
    <template #selected>
      <p class="level-dropdown__name level-dropdown__name_selected">
        {{ selectedValue.title }}
      </p>

      <p class="level-dropdown__price level-dropdown__price_selected">${{ selectedValue.price }}</p>
    </template>

    <template #options>
      <li
        class="level-dropdown__option"
        v-for="(item, index) in valuesList"
        :key="index"
        @click="selectOption(item.id)"
        :class="{ 'level-dropdown__option_select': item.id === selectedValue.id }"
      >
        <p class="level-dropdown__name">
          {{ item.title }}
        </p>

        <p class="level-dropdown__price">${{ item.price }}</p>
      </li>
    </template>
  </DropDown>
</template>

<script setup>
import DropDown from '@/molecules/DropDown/DropDown.vue'
import { ref } from 'vue'
import { defineProps } from 'vue'

const props = defineProps(['valuesList'])

const isOpen = ref(false)

const selectedValue = ref(props.valuesList[0])

const selectModel = defineModel()
selectModel.value = selectedValue.value

const selectOption = async (levelId) => {
  selectedValue.value = props.valuesList.find((level) => level.id === levelId)
  isOpen.value = false
  selectModel.value = selectedValue.value
}
</script>

<style>
@import 'FilterDropDown.scss';
</style>
