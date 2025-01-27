<template>
  <!--  refactoring-->
  <section class="search-section">
    <div class="search-section__container container">
      <h1 class="search-section__title">
        {{ $t('mainPage.boostYour') }} <span>{{ $t('mainPage.gear') }}</span>
        {{ $t('mainPage.withProfessionalInGame') }}
      </h1>

      <div class="search-section__inner">
        <div class="search-section__buttons-block">
          <LinkComponent class="search-section__button" text="" to="/Catalog/WOW">
            <img src="" alt="Warcraft Classic" />
          </LinkComponent>

          <LinkComponent class="search-section__button" text="" to="/Catalog/WOWClassic">
            <img src="" alt="Warcraft" />
          </LinkComponent>
        </div>

        <SearchInput />
      </div>
    </div>
  </section>
</template>

<script setup>
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'
import axios from 'axios'
import { ref } from 'vue'
import SearchInput from '@/molecules/SearchInput/SearchInput.vue'

const searchResultData = ref()
const isLoading = true

const fetchResultData = async () => {
  try {
    const response = await axios.get(`https://goldboost.demodev.cc/api/games/`)
    searchResultData.value = response.data
    isLoading.value = false
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

fetchResultData()
</script>

<style>
@import './SearchBlockComponent.scss';
</style>
