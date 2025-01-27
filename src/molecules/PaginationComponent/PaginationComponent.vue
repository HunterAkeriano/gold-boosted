<template>
  <div class="pagination">
    <ButtonComponent
      class="pagination__button pagination__button_prev"
      circle
      transparent
      @click="changeCurrentPage(currentPage - 1)"
      v-show="maxPagesComp > 1"
    >
      <ArrowIcon />
    </ButtonComponent>

    <div class="pagination__circle-list">
      <ButtonComponent
        v-show="maxPagesComp > 1"
        v-for="index in maxPagesComp"
        class="pagination__button-circle"
        :class="{ 'pagination__button-circle_active': index === currentPage }"
        circle
        :key="index"
        @click="changeCurrentPage(index)"
      />
    </div>

    <ButtonComponent
      v-show="maxPagesComp > 1"
      class="pagination__button pagination__button_next"
      circle
      transparent
      @click="changeCurrentPage(currentPage + 1)"
    >
      <ArrowIcon />
    </ButtonComponent>
  </div>
</template>

<script setup>
import ButtonComponent from '@/atoms/ui/UIButton/UIButton.vue'
import ArrowIcon from '@/atoms/icons/ArrowIcon.vue'
import { computed } from 'vue'

const props = defineProps({
  countPages: { default: 4 },
  maxPages: { default: 4 }
})
const maxPagesComp = computed(() => {
  return props.countPages > props.maxPages ? props.maxPages : props.countPages
})

const currentPage = defineModel()

const changeCurrentPage = (pageNumber) => {
  if (pageNumber <= maxPagesComp.value && pageNumber >= 1) {
    currentPage.value = pageNumber
  } else if (pageNumber > maxPagesComp.value) {
    currentPage.value = 1
  } else if (pageNumber < 1) {
    currentPage.value = maxPagesComp.value
  }
}
</script>

<style>
@import './PaginationComponent.scss';
</style>
