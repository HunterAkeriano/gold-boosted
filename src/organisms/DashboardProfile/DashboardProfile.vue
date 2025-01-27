<template>
  <DashboardProfileTemplate
    @updateProfile="patchAsyncUpdateProfile(profileData)"
    v-if="!isProfileDataLoading"
    v-model="profileData"
  />

  <DashboardProfileSkeletor v-else />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getData } from '@/composables/asyncFunc.js'
import { getAsyncMyProfile, patchAsyncUpdateProfile } from '@/api/users.js'
import DashboardProfileTemplate from '@/organisms/DashboardProfile/DashboardProfileTemplate.vue'
import DashboardProfileSkeletor from '@/organisms/DashboardProfile/DashboardProfileSkeletor.vue'

const profileData = ref()
const isProfileDataLoading = ref(true)

onMounted(() => {
  getData(getAsyncMyProfile, profileData, isProfileDataLoading)
})
</script>

<style>
@import 'DashboardProfile.scss';
</style>
