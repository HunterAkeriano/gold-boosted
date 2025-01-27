<template>
  <section class="search-section">
    <div class="search-section__container container">
      <h1 class="search-section__title">
        {{ $t('mainPage.boostYour') }} <span>{{ $t('mainPage.gear') }}</span>
        {{ $t('mainPage.withProfessionalInGame') }}
      </h1>

      <div class="search-section__inner">
        <div class="search-section__buttons-block">
          <LinkComponent
            class="search-section__button"
            v-for="(item, index) in data"
            :key="index"
            :to="{
              name: 'catalog',
              params: { locale: Trans.currentLocale, catalogId: item.items[0].id }
            }"
          >
            <img :src="item.logo_filter" :alt="item.logo_filter_alt" />
          </LinkComponent>
        </div>

        <SearchInput />
      </div>
    </div>
  </section>
</template>

<script setup>
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'
import SearchInput from '@/molecules/SearchInput/SearchInput.vue'
import Trans from '@/plugins/i18n/translation.js'

defineProps(['data'])
</script>

<style>
@import 'SearchSection.scss';
</style>
