<template>
  <div class="empty-products">
    <h2 class="empty-products__title">
      {{ emptyData.title }}
    </h2>

    <p class="empty-products__description">
      {{ emptyData.description }}
    </p>

    <UIButton class="empty-products__button" @click="goToCatalog" rectangle transparent>
      {{ emptyData.buttonText }}
    </UIButton>
  </div>
</template>

<script setup>
import UIButton from '@/atoms/ui/UIButton/UIButton.vue'
import { useRouter } from 'vue-router'

const props = defineProps(['emptyData'])

const router = useRouter()
const goToCatalog = () => {
  router.push(props.emptyData.buttonLink)
}
</script>

<style>
@import './EmptyProducts.scss';
</style>
