<template>
  <section class="search-section">
    <div class="search-section__container container">
      <h1 class="search-section__title">
        {{ $t('mainPage.boostYour') }} <span>{{ $t('mainPage.gear') }}</span>
        {{ $t('mainPage.withProfessionalInGame') }}
      </h1>

      <div class="search-section__inner">
        <div class="search-section__buttons-block">
          <Skeletor class="search-section__button" v-for="index in 3" :key="index" />
        </div>

        <SearchInput />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SearchInput from '@/molecules/SearchInput/SearchInput.vue'
import { getAsyncGames } from '@/api/game.js'
import { getData } from '@/composables/asyncFunc.js'
import { Skeletor } from 'vue-skeletor'
import 'vue-skeletor/dist/vue-skeletor.css'

const gamesListData = ref()
const isGameListLoading = ref(true)

getData(getAsyncGames, gamesListData, isGameListLoading)
</script>

<style>
@import 'SearchSection.scss';
</style>
