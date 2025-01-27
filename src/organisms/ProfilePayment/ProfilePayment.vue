<template>
  <div class="profile__payments-methods">
    <h2 class="profile__title">
      {{ $t('dashboardPage.favoritePaymentMethod') }}
    </h2>

    <PaymentList class="profile__payments-list" />
  </div>
</template>

<script setup>
import PaymentList from '@/molecules/PaymentList/PaymentList.vue'
</script>
