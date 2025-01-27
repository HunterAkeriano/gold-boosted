<!--TODO-->
<template>
  <DropdownComponent
    :optionsList="countries"
    :selectedOption="selectedOption"
    @optionSelected="handleOptionSelected"
    isAbsolute="true"
    isTransparent="true"
  />
</template>

<script setup>
import DropdownComponent from '@/atoms/ui/DropdownComponent/DropdownComponent.vue'
import Trans from '@/plugins/i18n/translation'

const supportedLocales = Trans.supportedLocales

const countries = supportedLocales.map((locale) => ({
  value: locale,
  img: new URL(`/src/assets/images/flags/${locale}.svg`, import.meta.url)
}))

const getSelectedOption = () => {
  const localeValue = Trans.currentLocale

  return {
    value: localeValue,
    img: new URL(`/src/assets/images/flags/${localeValue}.svg`, import.meta.url)
  }
}

const selectedOption = getSelectedOption()

const switchLanguage = async (value) => {
  const newLocale = value

  await Trans.switchLanguage(newLocale)
}

const handleOptionSelected = (option) => {
  selectedOption.value = option.value
  selectedOption.img = new URL(`/src/assets/images/flags/${option.value}.svg`, import.meta.url)
  switchLanguage(selectedOption.value)
}
</script>
