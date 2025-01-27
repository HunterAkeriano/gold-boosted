<template>
  <div class="dashboard-page">
    <div class="dashboard-page__overflow">
      <PageBanner :desktop-src="dashboardBanner.desktopSrc" />

      <div class="container">
        <BreadcrumbsComponent :list="linkItems" />
      </div>

      <div class="container">
        <h1 class="dashboard-page__title page-title">
          {{ $t('dashboardPage.dashboard') }}
        </h1>
      </div>

      <Tabs class="dashboard-page__tabs" :tabsTitleList="tabsList" v-model="activeTab">
        <div class="container">
          <RouterView> </RouterView>
        </div>
      </Tabs>
    </div>
  </div>
</template>

<script setup>
import Tabs from '@/molecules/TabsComponent/TabsComponent.vue'
import BreadcrumbsComponent from '@/molecules/BreadCrumbs/BreadCrumbs.vue'
import DashboardCharacterComponent from '@/organisms/DashboardCharacter/DashboardCharacter.vue'
import DashboardProfileComponent from '@/organisms/DashboardProfile/DashboardProfile.vue'
import { computed, onMounted, ref, watch, watchEffect } from 'vue'
import DashboardOrdersComponent from '@/organisms/DashboardOrders/DashboardOrders.vue'
import Trans from '@/plugins/i18n/translation.js'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import PageBanner from '@/molecules/PageBanner/PageBanner.vue'

const dashboardBanner = {
  desktopSrc: new URL(`/src/assets/images/Dashboard/background.webp`, import.meta.url),
  mobileSrc: new URL(`/src/assets/images/Dashboard/background.webp`, import.meta.url)
}

const { t } = useI18n()

const linkItems = [
  {
    text: t('dashboardPage.dashboard'),
    link: { params: { locale: Trans.currentLocale } }
  }
]

const tabComponents = {
  Orders: DashboardOrdersComponent,
  Profile: DashboardProfileComponent,
  Character: DashboardCharacterComponent
}

const tabsList = Object.keys(tabComponents).map((key) => ({
  title: t(`dashboardPage.${key.toLowerCase()}`),
  id: key.toLowerCase()
}))

const router = useRouter()
const route = useRoute()
const activeTab = ref(tabsList.find((item) => item.id === route.name))

// Ініціалізуємо activeTab при завантаженні компоненту
onMounted(() => {
  activeTab.value = tabsList.find((item) => item.id === route.name)
})

// Відстежуємо зміни маршруту і оновлюємо activeTab
watch(
  () => route.name,
  (newRouteName) => {
    activeTab.value = tabsList.find((item) => item.id === newRouteName)
  }
)

// Відстежуємо зміни activeTab і оновлюємо маршрут
watch(activeTab, (newActiveTab) => {
  if (newActiveTab && newActiveTab.id !== route.name) {
    router.push({ name: newActiveTab.id, params: { locale: Trans.currentLocale } })
  }
})
</script>

<style>
@import 'DashboardPage.scss';
</style>
