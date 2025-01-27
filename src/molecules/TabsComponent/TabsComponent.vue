<template>
  <div class="tabs-component">
    <div class="tabs-component__header">
      <div class="tabs-component__header-embla embla" ref="emblaRef">
        <div class="tabs-component__header-container embla__container" v-if="!isLoading">
          <div
            class="tabs-component__header-item embla__slide"
            v-for="(tab, index) in tabsTitleList"
            :key="index"
          >
            <input
              :key="'tabButton_' + tab.id"
              :id="'tabButton_' + tab.id"
              class="tabs-component__tab-button"
              type="radio"
              name="tabs"
              :value="tab.title"
              :checked="activeTab.id === tab.id"
              @change="activeTab = tab"
            />

            <label
              :key="'tabLabel_' + tab.id"
              :for="'tabButton_' + tab.id"
              class="tabs-component__tab-label"
              :class="{ 'tabs-component__tab-label-active': activeTab.id === tab.id }"
            >
              {{ tab.title }}
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="tabs-component__body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import emblaCarouselVue from 'embla-carousel-vue'

defineProps(['tabsTitleList', 'isLoading'])
const activeTab = defineModel()

const [emblaRef] = emblaCarouselVue({
  align: 'start',
  breakpoints: {
    '(min-width: 1210px)': { active: false }
  }
})
</script>

<style>
@import './TabsComponent.scss';
</style>
