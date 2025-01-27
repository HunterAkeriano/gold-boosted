<template>
  <div class="range-slider">
    <input
      type="range"
      min="1"
      :max="list.length"
      v-model="checkedIndex"
      class="slider"
      id="myRange"
    />

    <div class="range-slider__list-value">
      <div
        class="range-slider__item"
        :class="{ 'range-slider__item_select': checkedIndex == index + 1 }"
        v-for="(item, index) in list"
        :key="index"
        @click="changeCheckedValue(index + 1)"
      >
        <span class="range-slider__item-price"> ${{ item.price }} </span>

        <span class="range-slider__item-name"> {{ item.title }} </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineModel, ref, watchEffect } from 'vue'

const props = defineProps(['list'])

const checkedIndex = ref(1)

const changeCheckedValue = (newCheckedIndex) => {
  checkedIndex.value = newCheckedIndex
}

const checkedObject = defineModel()

watchEffect(() => {
  checkedObject.value = props.list[checkedIndex.value - 1]
})
</script>

<style>
@import './RangeSlider.scss';
</style>
