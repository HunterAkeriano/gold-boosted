<template>
  <Tabs
    v-if="!isTitleLoading"
    class="product-tabs"
    :tabsTitleList="tabsTitleList"
    v-model="activeTab"
  >
    <div v-if="!isTabLoading" v-html="tabContent"></div>

    <Skeletor class="product-tabs__tab_skeletor" v-else width="100%" height="400"></Skeletor>
  </Tabs>
</template>

<script setup>
import Tabs from '@/molecules/TabsComponent/TabsComponent.vue'
import { onMounted, ref, watch, watchEffect } from 'vue'
import axios from 'axios'
import Trans from '@/plugins/i18n/translation.js'
import { Skeletor } from 'vue-skeletor'
import 'vue-skeletor/dist/vue-skeletor.css'

const props = defineProps(['tabsTitleList', 'page', 'isTitleLoading'])
const activeTab = ref({ id: props.tabsTitleList[0].id })
const tabContent = ref()
const isTabLoading = ref(true)

const getTabContent = async (id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/${props.page}/tab-content/${id}/`,
      {
        headers: {
          'Accept-Language': Trans.currentLocale
        }
      }
    )
    tabContent.value = response.data.content
    isTabLoading.value = false
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getTabContent(activeTab.value.id)
})

watch([activeTab], () => {
  getTabContent(activeTab.value.id)
})

watchEffect(() => {
  activeTab.value = { id: props.tabsTitleList[0].id }
})
</script>

<style>
@import './ProductTabs.scss';
</style>
