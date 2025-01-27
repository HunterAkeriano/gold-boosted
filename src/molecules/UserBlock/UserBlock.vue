<!--TODO-->
<template>
  <div class="user-block" :class="{ 'user-block_main': $route.name === 'home' }">
    <div class="user-block__points-block" v-if="hasTokens">
      <PointIcon class="user-block__points-icon" />

      <span class="user-block__points-value" v-if="!isMyProfileLoading">
        {{ myProfile.bonus_points }}
      </span>
    </div>

    <ButtonComponent v-if="$route.name !== 'home'" @click="goToSearch" circle>
      <SearchIcon />
    </ButtonComponent>

    <div class="user-block__search-template" v-else></div>

    <ButtonComponent ariaLabel="Basket button" circle @click="goToBasket">
      <SupermarketIcon />
    </ButtonComponent>

    <template v-if="!hasTokens">
      <ButtonComponent rectangle transparent @click="goToSignIn">
        {{ $t('signIn') }}
      </ButtonComponent>
    </template>

    <template v-else>
      <ButtonComponent circle @click="goToDashboard">
        <UserIcon />
      </ButtonComponent>
    </template>
  </div>
</template>

<script setup>
import SearchIcon from '@/atoms/icons/SearchIcon.vue'
import SupermarketIcon from '@/atoms/icons/SupermarketIcon.vue'
import ButtonComponent from '@/atoms/ui/UIButton/UIButton.vue'
import { useRoute, useRouter } from 'vue-router'
import { hasTokens } from '@/composables/CheckToken.js'
import Trans from '@/plugins/i18n/translation.js'
import UserIcon from '@/atoms/icons/UserIcon.vue'
import PointIcon from '@/atoms/icons/PointIcon.vue'
import { ref, watch } from 'vue'
import { getAsyncMyProfile } from '@/api/users.js'
import { getData } from '@/composables/asyncFunc.js'

const route = useRoute()
const router = useRouter()
const myProfile = ref()
const isMyProfileLoading = ref(true)

const emit = defineEmits(['closeBurger'])

const goToDashboard = () => {
  emit('closeBurger')
  router.push({ name: 'profile', params: { locale: Trans.currentLocale } })
}

const goToBasket = () => {
  emit('closeBurger')
  router.push({ name: 'basket', params: { locale: Trans.currentLocale } })
}

const goToSearch = () => {
  emit('closeBurger')
  router.push({ name: 'home', params: { locale: Trans.currentLocale } })
}

if (hasTokens.value) {
  getData(getAsyncMyProfile, myProfile, isMyProfileLoading)
}

watch(hasTokens, () => {
  if (hasTokens.value) {
    getData(getAsyncMyProfile, myProfile, isMyProfileLoading)
  }
})

const goToSignIn = async () => {
  if (route.matched[1].children.length > 0) {
    const param = await route.matched[1].children[0].name
    router.push({ name: param, params: { locale: route.params.locale } })
  }
}
</script>

<style>
@import 'UserBlock.scss';
</style>
