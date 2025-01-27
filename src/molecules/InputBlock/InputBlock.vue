<template>
  <div class="input-block">
    <InputComponent
      :border="border"
      class="input-block__input"
      :placeholderText="placeholderText"
      v-model="inputValue"
    />

    <ButtonComponent class="input-block__button" type="submit" rectangle>
      {{ buttonText }}
    </ButtonComponent>
  </div>
</template>

<script setup>
import ButtonComponent from '@/atoms/ui/UIButton/UIButton.vue'
import InputComponent from '@/atoms/ui/InputComponent/InputComponent.vue'

defineProps({
  placeholderText: String,
  buttonText: String,
  border: Boolean
})

const inputValue = defineModel()
</script>

<style>
@import 'InputBlock.scss';
</style>
