<template>
  <label class="input-component" :class="{ 'input-component_border': border }" :for="id">
    <template v-if="type !== 'password'">
      <input
        class="input-component__input"
        :aria-label="ariaLabel"
        :placeholder="placeholderText"
        autocomplete="off"
        v-model="inputValue"
        :id="id"
        @change="$emit('inputChange')"
      />

      <ButtonComponent
        class="input-component__search"
        arialLabel="Search button"
        v-if="searchButton"
      >
        <SearchIcon />
      </ButtonComponent>
    </template>

    <template v-else>
      <input
        class="input-component__input"
        :type="inputType"
        :placeholder="placeholderText"
        v-model="inputValue"
        @change="$emit('inputChange')"
      />

      <ButtonComponent arialLabel="View password" @click="togglePasswordVisibility">
        <EyeIcon />
      </ButtonComponent>
    </template>
  </label>
</template>

<script setup>
import ButtonComponent from '@/atoms/ui/UIButton/UIButton.vue'
import SearchIcon from '@/atoms/icons/SearchIcon.vue'
import EyeIcon from '@/atoms/icons/EyeIcon.vue'
import { ref } from 'vue'

defineProps(['placeholderText', 'searchButton', 'ariaLabel', 'type', 'border', 'value', 'id'])
defineEmits(['inputChange'])

const inputType = ref('password')
const inputValue = defineModel()

const togglePasswordVisibility = () => {
  inputType.value = inputType.value === 'password' ? 'text' : 'password'
}
</script>

<style>
@import './InputComponent.scss';
</style>
