<template>
  <div>
    <template v-for="(filter, index) in accordionData" :key="index">
      <CatalogFilter :title="filter.title">
        <NestedFilters :accordionData="filter.items" />
      </CatalogFilter>
    </template>
  </div>
</template>

<script setup>
import CatalogFilter from '@/molecules/CatalogFilter/CatalogFilter.vue'

defineProps({
  accordionData: {
    type: Array,
    required: true
  }
})
</script>
