<template>
  <footer class="footer">
    <hr class="line footer__line" />

    <div class="footer__container container">
      <div class="footer__inner">
        <LogoComponent class="footer__logo" />

        <div class="footer__info-block">
          <Skeletor class="footer__info-text footer__info-text_skeletor" />

          <div class="footer__locations">
            <div class="footer__locations-title">
              <div class="footer__locations-icon-block">
                <LocateIcon class="footer__locations-icon" />
              </div>

              <p class="footer__locations-title-text">
                {{ $t('footer.location.title') }}
              </p>
            </div>

            <ul class="footer__locations-list">
              <li class="footer__locations-item">
                <Skeletor
                  class="footer__locations-item-link footer__locations-item-link_skeletor"
                />
              </li>

              <li class="footer__locations-item">
                <Skeletor
                  class="footer__locations-item-link footer__locations-item-link_skeletor"
                />
              </li>
            </ul>
          </div>
        </div>

        <nav class="footer__nav footer-nav">
          <div class="footer-nav__item" v-for="index in 3" :key="index">
            <Skeletor class="footer-nav__item-title" />

            <div class="footer-nav__item-list">
              <Skeletor class="footer-nav__item-link_skeletor" v-for="index in 3" :key="index" />
            </div>
          </div>
        </nav>

        <TheDiscountSkeletor class="footer__discount-block" />
      </div>
    </div>

    <hr class="line footer__line" />

    <div class="footer__container container">
      <Skeletor class="footer__all-rights footer__all-rights_skeletor" />
    </div>
  </footer>
</template>

<script setup>
import LogoComponent from '@/atoms/LogoComponent/LogoComponent.vue'
import LocateIcon from '@/atoms/icons/LocateIcon.vue'
import { Skeletor } from 'vue-skeletor'
import 'vue-skeletor/dist/vue-skeletor.css'
import TheDiscountSkeletor from '@/molecules/TheDiscount/TheDiscountSkeletor.vue'
</script>

<style>
@import 'TheFooter.scss';
</style>
