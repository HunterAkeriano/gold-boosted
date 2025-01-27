<template>
  <PopupComponent v-if="active">
    <div v-if="active" class="form">
      <p>
        Your email address has been successfully confirmed. You are now fully registered in our
        system.
      </p>

      <LinkComponent text="Home" :to="{ name: 'home', params: { locale: $route.params.locale } }" />
    </div>
  </PopupComponent>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { onBeforeMount } from 'vue'
import PopupComponent from '@/molecules/PopupComponent/PopupComponent.vue'
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const router = useRouter()
const { locale } = useI18n()
let active = ref(false)

const handleSubmit = async () => {
  console.log('send')
  try {
    await axios.get(
      `https://goldboost.demodev.cc/api/auth/confirm-email/${route.params.uidb64}/${route.params.token}`
    )
    active.value = true
  } catch (error) {
    router.push({ name: 'not found', params: { locale: locale.value } })
    console.error(error.response.data.detail)
  }
}

onBeforeMount(() => {
  handleSubmit()
})
</script>

<style></style>
