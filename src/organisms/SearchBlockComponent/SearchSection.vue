<template>
  <SearchSectionTemplate v-if="!isGameListLoading" :data="gamesListData" />

  <SearchSectionSkeletor v-else />
</template>

<script setup>
import { ref } from 'vue'
import { getAsyncGames } from '@/api/game.js'
import { getData } from '@/composables/asyncFunc.js'
import SearchSectionTemplate from '@/organisms/SearchBlockComponent/SearchSectionTemplate.vue'
import SearchSectionSkeletor from '@/organisms/SearchBlockComponent/SearchSectionSkeletor.vue'

const gamesListData = ref()
const isGameListLoading = ref(true)

getData(getAsyncGames, gamesListData, isGameListLoading)
</script>

<style>
@import 'SearchSection.scss';
</style>
