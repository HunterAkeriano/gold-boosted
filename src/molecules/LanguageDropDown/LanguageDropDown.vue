<template>
  <DropDown class="language-dropdown" isTransparent isAbsolute v-model="isOpen">
    <template #selected>
      <Component class="language-dropdown__flag" :is="getFlag(selectLanguage)" />

      <div class="language-dropdown__selected-language">
        {{ selectLanguage }}
      </div>
    </template>

    <template #options>
      <li
        class="language-dropdown__option"
        :class="{ 'language-dropdown__option_select': locale === selectLanguage }"
        v-for="(locale, index) in getAllLanguages()"
        :key="index"
        @click="selectOption(locale)"
      >
        <Component class="language-dropdown__flag" :is="getFlag(locale)" />
        {{ locale }}
      </li>
    </template>
  </DropDown>
</template>

<script setup>
import UkIcon from '@/atoms/icons/UkIcon.vue'
import EnIcon from '@/atoms/icons/EnIcon.vue'
import DropDown from '@/molecules/DropDown/DropDown.vue'
import Trans from '@/plugins/i18n/translation'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const selectLanguage = ref(Trans.currentLocale)
const isOpen = ref(false)
const router = useRouter()
const route = useRoute()

const getAllLanguages = () => {
  return Trans.supportedLocales
}

const getFlag = (locale) => {
  if (locale === 'en') {
    return EnIcon
  } else {
    return UkIcon
  }
}

const selectOption = async (newLocale) => {
  router.push({ name: route.name, params: { locale: newLocale } }).then(() => {
    router.go(0)
  })
}
</script>

<style>
@import './LanguageDropDown.scss';
</style>
