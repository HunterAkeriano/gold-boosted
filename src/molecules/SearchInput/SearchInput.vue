<template>
  <div class="search-input" :tabindex="isMenuOpen ? 0 : -1" @blur="handleBlur">
    <label class="search-section__input-component input-component" for="searchInput">
      <input
        class="input-component__input"
        placeholder="Search ..."
        v-model="searchInputValue"
        id="searchInput"
        @change="$emit('inputChange')"
        @input="getSearchResultList(searchInputValue)"
        autocomplete="off"
      />

      <div :tabindex="0" @blur="handleBlur">
        <ButtonComponent
          class="input-component__search"
          arialLabel="Search button"
          @click="openMenu"
        >
          <SearchIcon />
        </ButtonComponent>
      </div>
    </label>

    <ul class="search-input__options-list" v-show="isMenuOpen" :tabindex="0">
      <li
        class="search-input__option"
        v-for="(item, index) in searchResultList"
        :key="index"
        @click="
          $router.push({ name: 'product', params: { locale: $i18n.locale, productId: item.id } })
        "
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import ButtonComponent from '@/atoms/ui/UIButton/UIButton.vue'
import SearchIcon from '@/atoms/icons/SearchIcon.vue'

const isMenuOpen = ref(false)
const searchInputValue = ref()
const searchResultList = ref()
const isLoading = ref()
const getSearchResultList = async (searchInputValue) => {
  try {
    if (!/^[a-zA-Z\s]+$/.test(searchInputValue)) {
      const response = await axios.get(`https://goldboost.demodev.cc/api/products/search/`, {
        params: {
          search_line: searchInputValue
        },
        headers: {
          'Accept-Language': 'uk'
        }
      })
      searchResultList.value = response.data
      isLoading.value = false
      return
    }

    const response = await axios.get(`https://goldboost.demodev.cc/api/products/search/`, {
      params: {
        search_line: searchInputValue
      },
      headers: {
        'Accept-Language': 'en'
      }
    })
    searchResultList.value = response.data
    isLoading.value = false
  } catch (error) {
    console.error(error)
  }
}

window.addEventListener('mousedown', (event) => {
  const searchInput = document.querySelector('.search-input')
  if (!searchInput.contains(event.target)) {
    isMenuOpen.value = false
  }
})

const openMenu = () => {
  isMenuOpen.value = true
}

const handleBlur = () => {
  isMenuOpen.value = false
}
</script>

<style>
@import './SearchInput.scss';
</style>
