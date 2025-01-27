<template>
  <Tabs class="catalog__tabs" :tabsTitleList="tabsTitleList" v-model="activeTab">
    <div v-if="!isLoading" v-html="tabContent"></div>

    <div v-else>Завантаження...</div>
  </Tabs>
</template>

<script setup>
import Tabs from '@/molecules/TabsComponent/TabsComponent.vue'
import { onMounted, ref, watch } from 'vue'
import axios from 'axios'
import Trans from '@/plugins/i18n/translation.js'

const props = defineProps(['tabsTitleList'])

const activeTab = ref({ id: props.tabsTitleList[0].id })
const tabContent = ref()
const isLoading = ref(true)

const getTabContent = async (id) => {
  try {
    const response = await axios.get(
      `https://goldboost.demodev.cc/api/products/tab-content/${id}/`,
      {
        headers: {
          'Accept-Language': Trans.currentLocale
        }
      }
    )
    tabContent.value = response.data.content
    console.log(tabContent.value)
    isLoading.value = false
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
</script>
