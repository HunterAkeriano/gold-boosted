<template>
  <div class="tabs-component">
    <div class="tabs-component__header embla" ref="emblaRef">
      <div class="tabs-component__header-container embla__container" v-if="!isTitleLoading">
        <div
          class="tabs-component__header-item embla__slide"
          v-for="(tab, index) in 4"
          :key="index"
        >
          <Skeletor class="tabs-component__header-item_skeletor" />
        </div>
      </div>
    </div>

    <div class="tabs-component__body">
      <Skeletor class="tabs-component__body_skeletor" />
    </div>
  </div>
</template>
