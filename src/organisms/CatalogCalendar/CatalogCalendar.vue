<template>
  <section v-if="eventsList && eventsList.length > 0" class="catalog-calendar">
    <div class="container">
      <h2 class="catalog-calendar__title">
        {{ $t('catalogPage.calendar') }}
      </h2>

      <div class="catalog-calendar__event" v-for="(item, index) in eventsList" :key="index">
        <div class="catalog-calendar__event-header">
          <h3 class="catalog-calendar__event-title">
            {{ item.title }}
          </h3>

          <p class="catalog-calendar__event-description">
            {{ item.subtitle }}
          </p>
        </div>

        <Suspense>
          <template #default>
            <CalendarDateList :id="item.id" />
          </template>

          <template #fallback> Загрузка </template>
        </Suspense>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import CalendarDateList from '@/molecules/CalendarDateList/CalendarDateList.vue'
import { getData } from '@/composables/asyncFunc.js'
import { getAsyncCalendar } from '@/api/catalog.js'
import { useRoute } from 'vue-router'

const route = useRoute()
const eventsList = ref()
const isEventsLoading = ref(true)

getData(getAsyncCalendar, eventsList, isEventsLoading, route.params.catalogId)
</script>

<style>
@import './CatalogCalendar.scss';
</style>
