<template>
  <section class="how-to-buy">
    <div class="how-to-buy__background-block">
      <picture>
        <source srcset="@/assets/images/ProductPage/background.webp" media="(min-width: 564px)" />

        <img
          class="how-to-buy__background"
          src="@/assets/images/ProductPage/background-mobile.webp"
          alt="Background"
        />
      </picture>
    </div>

    <div class="container">
      <h2 class="how-to-buy__title">
        {{ $t('howToBuy.title') }}
      </h2>

      <div class="how-to-buy__list">
        <div class="how-to-buy__item" v-for="(item, index) in howToBuyList" :key="index">
          <div class="how-to-buy__item-header">
            <div class="how-to-buy__item-icon-block">
              <component class="how-to-buy__item-icon" :is="item.icon" />
            </div>

            <HowToBuyArrowIcon
              class="how-to-buy__item-arrow-icon"
              v-if="index + 1 < howToBuyList.length"
            />
          </div>

          <p class="how-to-buy__item-title">
            {{ $t(item.title) }}
          </p>

          <p class="how-to-buy__item-description">
            {{ $t(item.description) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ChooseIcon from '@/atoms/icons/ChooseIcon.vue'
import HowToBuyArrowIcon from '@/atoms/icons/HowToBuyArrowIcon.vue'
import OptionsIcon from '@/atoms/icons/OptionsIcon.vue'
import SupermarketIcon from '@/atoms/icons/SupermarketIcon.vue'
import BoxIcon from '@/atoms/icons/BoxIcon.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const howToBuyList = [
  {
    icon: ChooseIcon,
    title: 'howToBuy.choose.title',
    description: 'howToBuy.choose.description'
  },
  {
    icon: OptionsIcon,
    title: 'howToBuy.additional.title',
    description: 'howToBuy.additional.description'
  },
  {
    icon: SupermarketIcon,
    title: 'howToBuy.checkout.title',
    description: 'howToBuy.checkout.description'
  },
  {
    icon: BoxIcon,
    title: 'howToBuy.boost.title',
    description: 'howToBuy.boost.description'
  }
]
</script>

<style>
@import './HowToBuy.scss';
</style>
