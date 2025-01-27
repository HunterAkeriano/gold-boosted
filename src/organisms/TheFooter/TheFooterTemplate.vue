<template>
  <footer class="footer">
    <hr class="line footer__line" />

    <div class="footer__container container">
      <div class="footer__inner">
        <LogoComponent class="footer__logo" />

        <div class="footer__info-block">
          <p class="footer__info-text">
            {{ siteLinks['footer_description'] }}
          </p>

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
                <LinkComponent
                  class="footer__locations-item-link"
                  :text="siteLinks.address1"
                  :to="siteLinks['address1_link']"
                  href
                />
              </li>

              <li class="footer__locations-item">
                <LinkComponent
                  class="footer__locations-item-link"
                  :text="siteLinks.address2"
                  :to="siteLinks['address2_link']"
                  href
                />
              </li>
            </ul>
          </div>
        </div>

        <nav class="footer__nav footer-nav">
          <div class="footer-nav__item" v-for="(item, index) in footerData" :key="index">
            <p class="footer-nav__item-title">
              {{ $t(item.title) }}
            </p>

            <div class="footer-nav__item-list">
              <LinkComponent
                class="footer-nav__item-link link_regular"
                v-for="(link, index) in item.linksList"
                :key="index"
                :href="link.href"
                :text="link.locale ? $t(link.text) : link.text"
                :to="link.to"
              >
                <component :is="link.icon" class="footer__social-icon"></component>
              </LinkComponent>
            </div>
          </div>
        </nav>

        <DiscountComponent
          class="footer__discount-block"
          :text="siteLinks['subscribe_form_text']"
        />
      </div>
    </div>

    <hr class="line footer__line" />

    <div class="footer__container container">
      <p class="footer__all-rights">
        {{ siteLinks['footer_bottom_text'] }}
      </p>
    </div>
  </footer>
</template>

<script setup>
import LogoComponent from '@/atoms/LogoComponent/LogoComponent.vue'
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'
import DiscountComponent from '@/molecules/TheDiscount/TheDiscount.vue'
import LocateIcon from '@/atoms/icons/LocateIcon.vue'

defineProps(['footerData', 'siteLinks'])
</script>

<style>
@import 'TheFooter.scss';
</style>
