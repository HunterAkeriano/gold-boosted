<template>
  <form class="profile" @submit.prevent="$emit('updateProfile')">
    <UserInfo class="profile__user-info" :userInfoData="userInfoData" :isLoading="false" />

    <div class="profile__payments-methods">
      <h2 class="profile__title">
        {{ $t('dashboardPage.favoritePaymentMethod') }}
      </h2>

      <PaymentList class="profile__payments-list" v-model="profileData['payment_method']" />
    </div>

    <div class="profile__communication-channels">
      <h2 class="profile__title">
        {{ $t('dashboardPage.favoriteCommunicationChannel') }}
      </h2>

      <ChannelRadioButtonsList class="profile__channels-list" v-model="profileData.communication" />
    </div>

    <div class="profile__notification">
      <h2 class="profile__title">
        {{ $t('dashboardPage.notifications') }}
      </h2>

      <CheckboxComponent
        class="profile__checkbox"
        id="profile-notification"
        :value="true"
        v-model="profileData['notify_me']"
      >
        {{ $t('dashboardPage.receiveNotifications') }}
      </CheckboxComponent>
    </div>

    <ButtonComponent type="submit" class="profile__button" rectangle>
      {{ $t('dashboardPage.save') }}
    </ButtonComponent>

    <ButtonComponent type="button" class="profile__button" transparent rectangle @click="signOut">
      {{ $t('header.signOut') }}
    </ButtonComponent>
  </form>
</template>

<script setup>
import PaymentList from '@/molecules/PaymentList/PaymentList.vue'
import ChannelRadioButtonsList from '@/molecules/ChannelList/ChannelList.vue'
import CheckboxComponent from '@/atoms/ui/CheckboxComponent/CheckboxComponent.vue'
import ButtonComponent from '@/atoms/ui/UIButton/UIButton.vue'
import UserInfo from '@/molecules/UserInfo/UserInfo.vue'
import { useI18n } from 'vue-i18n'
import { hasTokens } from '@/composables/CheckToken.js'
import router from '@/plugins/router/index.js'
import Trans from '@/plugins/i18n/translation.js'

const profileData = defineModel()

const signOut = () => {
  document.cookie = `access=1; path=/; max-age=0`
  document.cookie = `email=1; path=/; max-age=0`
  document.cookie = `refresh=1; path=/; max-age=0`
  hasTokens.value = false

  router.push({ name: 'home', params: { locale: Trans.currentLocale } })
}

const { t } = useI18n()
const userInfoData = [
  {
    title: t('dashboardPage.email'),
    value: profileData.value['email']
  },
  {
    title: t('dashboardPage.name'),
    value: profileData.value['first_name']
  },
  {
    title: t('dashboardPage.surName'),
    value: profileData.value['last_name']
  }
]
</script>

<style>
@import 'DashboardProfile.scss';
</style>
