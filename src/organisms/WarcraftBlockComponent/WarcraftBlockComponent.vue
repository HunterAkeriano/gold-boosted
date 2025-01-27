<template>
  <!--  refactoring-->
  <section class="warcraft-section">
    <div class="warcraft-section__container container">
      <CardsFilterBlockComponent
        :title="HotOffers.title"
        :titleIcon="HotOffers.titleIcon"
        :button="HotOffers.button"
        :listItems="HotOffers.listItems"
        :filters="HotOffers.filters"
        :isLoading="true"
      />
    </div>
  </section>
</template>

<script setup>
import CardsFilterBlockComponent from '@/organisms/CardsFilterBlockComponent/CardsFilterBlockComponent.vue'

const HotOffers = {
  title: 'World of Warcraft',
  titleIcon: true,
  button: true,
  filters: [
    { name: 'Raids', filter: 'Raids' },
    { name: 'Dungeons', filter: 'Dungeons' },
    { name: 'Powerleveling', filter: 'Powerleveling' },
    { name: 'Coaching', filter: 'Coaching' }
  ],
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
</script>

<style>
@import './WarcraftBlockComponent.scss';
</style>
