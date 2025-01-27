<template>
  <!--  refactoging-->
  <section class="warcraft-classic-section">
    <div class="warcraft-classic-section__container container">
      <CardsFilterBlockComponent
        :title="$t('mainPage.hotOffers')"
        :listItems="productsList"
        :isLoading="isLoading"
      />
    </div>
  </section>
</template>

<script setup>
import CardsFilterBlockComponent from '@/organisms/CardsFilterBlockComponent/CardsFilterBlockComponent.vue'
import { onMounted, ref, watch } from 'vue'
import axios from 'axios'

const WarcraftClassic = {
  title: 'World of Warcraft Classic',
  titleIcon: true,
  filters: [
    { name: 'Raids', filter: 'Raids' },
    { name: 'Dungeons', filter: 'Dungeons' },
    { name: 'Powerleveling', filter: 'Powerleveling' },
    { name: 'Coaching', filter: 'Coaching' }
  ],
  button: true,
  listItems: [
    {
      img: new URL(`@/assets/images/MainPage/product-1.webp`, import.meta.url),
      imgAlt: 'Product 1',
      title: 'World of Warcraft: Shadowlands',
      subTitle: 'Heroic Raid Run',
      price: 120
    },
    {
      img: new URL(`@/assets/images/MainPage/product-2.webp`, import.meta.url),
      imgAlt: 'Product 2',
      title: 'World of Warcraft: Shadowlands',
      subTitle: 'Heroic Raid Run',
      price: 120
    },
    {
      img: new URL(`@/assets/images/MainPage/product-3.webp`, import.meta.url),
      imgAlt: 'Product 3',
      title: 'World of Warcraft: Shadowlands',
      subTitle: 'Heroic Raid Run',
      price: 120
    },
    {
      img: new URL(`@/assets/images/MainPage/product-4.webp`, import.meta.url),
      imgAlt: 'Product 4',
      title: 'World of Warcraft: Shadowlands',
      subTitle: 'Heroic Raid Run',
      price: 120
    }
  ]
}

const productsList = ref([])
const isLoading = ref(true)
const pageSize = 4
const pageCount = ref(1)
const currentPage = ref(1)
const activeGameId = ref()
const getGameProducts = async (pageSize, currentPage, activeGameId) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/games/product-carousels/`,
      {
        params: {
          page: currentPage.value,
          page_size: pageSize,
          game_id: 1
        }
      }
    )
    productsList.value = response.data.items
    pageCount.value = response.data.count
    isLoading.value = false
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getGameProducts(pageSize, currentPage, activeGameId.value)
})

watch([currentPage, activeGameId], () => {
  getGameProducts(pageSize, currentPage, activeGameId.value)
})
</script>

<style>
@import './WarcraftClassicBlockComponent.scss';
</style>
