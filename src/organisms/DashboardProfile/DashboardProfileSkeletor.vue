<template>
  <div class="profile">
    <UserInfoSkeletor class="profile__user-info" />

    <div class="profile__payments-methods">
      <h2 class="profile__title">
        {{ $t('dashboardPage.favoritePaymentMethod') }}
      </h2>

      <PaymentListSkeletor class="profile__payments-list" />
    </div>

    <div class="profile__communication-channels">
      <h2 class="profile__title">
        {{ $t('dashboardPage.favoriteCommunicationChannel') }}
      </h2>

      <ChannelListSkeletor class="profile__channels-list" />
    </div>

    <div class="profile__notification">
      <h2 class="profile__title">
        {{ $t('dashboardPage.notifications') }}
      </h2>

      <Skeletor class="profile__checkbox" />
    </div>

    <UIButtonSkeletor class="profile__button" rectangle />
  </div>
</template>

<script setup>
import { Skeletor } from 'vue-skeletor'
import 'vue-skeletor/dist/vue-skeletor.css'
import PaymentListSkeletor from '@/molecules/PaymentList/PaymentListSkeletor.vue'
import UserInfoSkeletor from '@/molecules/UserInfo/UserInfoSkeletor.vue'
import ChannelListSkeletor from '@/molecules/ChannelList/ChannelListSkeletor.vue'
import UIButtonSkeletor from '@/atoms/ui/UIButton/UIButtonSkeletor.vue'
</script>
