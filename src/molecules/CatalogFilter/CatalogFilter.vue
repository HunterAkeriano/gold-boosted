<template>
  <div class="catalog-filter-accordion">
    <TheAccordion>
      <template #header>
        <div class="catalog-filter-accordion__header">
          <LinkComponent
            :class="{
              'catalog-filter-accordion__header_active': filterData.id === $route.params.catalogId
            }"
            :text="filterData.title"
            :to="{ name: 'catalog', params: { locale: $i18n.locale, catalogId: filterData.id } }"
          />

          <div class="catalog-filter-accordion__button" v-if="filterData.items.length > 0"></div>
        </div>
      </template>

      <template #default>
        <CatalogFilter
          v-for="(filter, index) in filterData.items"
          :key="index"
          :filterData="filter"
        />
      </template>
    </TheAccordion>
  </div>
</template>

<script setup>
import CatalogFilter from '@/molecules/CatalogFilter/CatalogFilter.vue'
import TheAccordion from '@/atoms/ui/Accordion/TheAccordion.vue'
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'

defineProps(['filterData'])
</script>

<style>
@import './CatalogFilter.scss';
</style>
