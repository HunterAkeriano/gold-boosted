<template>
  <div class="product-card">
    <div class="product-card__img-block">
      <img
        class="product-card__img-block-img"
        :src="data['card_img']"
        :alt="data['card_img_alt']"
        width="280"
        height="220"
        @error="$event.target.src = defaultImage"
      />

      <img
        class="product-card__img-block-logo"
        :src="data['game_logo']"
        :alt="data['game_logo_alt']"
        width="26"
        height="26"
      />

      <div class="product-card__tags">
        <span
          v-if="data && data.tag"
          class="product-card__tag"
          :style="{ background: data.tag.color }"
        >
          {{ data.tag.name }}
        </span>

        <div class="product-card__tag-period" v-if="data['sale_period'] !== null">
          <TimerIcon />

          <TimerComponent :endTime="data['sale_until']" />
        </div>
      </div>
    </div>

    <div class="product-card__info-block">
      <h3 class="product-card__title">
        {{ data.title }}
      </h3>

      <p class="product-card__subTitle">
        {{ data.subtitle }}
      </p>

      <div class="product-card__price-block">
        <p class="product-card__price-block-label">
          {{
            data['price_type'] === 'range' ? $t('product.from') + ':' : $t('product.price') + ':'
          }}
        </p>

        <p class="product-card__price-block-price">
          <template v-if="data['price_type'] === 'range'">{{
            `\$${data['price_from']}-\$${data['price_to']}`
          }}</template>

          <template v-else-if="data['sale_active'] === true">
            <span>${{ data.sale_price }}</span>

            <span class="basket-product-order__total-price-last">{{ data.price }}</span>

            <span class="product-total__sale-discount">{{ data.sale_percent }}</span>
          </template>

          <span class="product-order__price" v-else>${{ data.price }}</span>
        </p>
      </div>

      <ButtonComponent class="product-card__button" @click="openProductPage(data.id)" rectangle>
        {{ $t('product.buyNow') }}
      </ButtonComponent>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from '@/atoms/ui/UIButton/UIButton.vue'
import defaultImage from '@/assets/images/default.svg'
import { useRouter } from 'vue-router'
import Trans from '@/plugins/i18n/translation.js'
import TimerComponent from '@/molecules/TimerComponent/TimerComponent.vue'
import TimerIcon from '@/atoms/icons/TimerIcon.vue'

defineProps(['data'])
const router = useRouter()

const scrollToTop = () => {
  window.scrollTo({
    top: 0
  })
}

const openProductPage = (productId) => {
  router
    .push({ name: 'product', params: { productId: productId, locale: Trans.currentLocale } })
    .then(() => {
      scrollToTop()
    })
}
</script>

<style>
@import 'ProductCard.scss';
</style>
