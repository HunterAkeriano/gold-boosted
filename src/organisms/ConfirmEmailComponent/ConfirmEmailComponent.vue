<template>
  <PopupComponent v-if="active">
    <div class="confirm-email__success-popup success-popup">
      <div class="success-popup__icon-block">
        <SuccessIcon />
      </div>

      <p class="success-popup__description">
        {{ successMessage }}
      </p>

      <p class="success-popup__link-text">
        {{ $t('success.linkText') }}
        <LinkComponent
          class="link_underline-gradient"
          :text="$t('success.confirmEmail.home')"
          :to="{ name: 'home', params: { locale: $i18n.locale } }"
        />
      </p>
    </div>
  </PopupComponent>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import PopupComponent from '@/molecules/PopupComponent/PopupComponent.vue'
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import SuccessIcon from '@/atoms/icons/SuccessIcon.vue'
import Trans from '@/plugins/i18n/translation.js'

const route = useRoute()
const router = useRouter()
let active = ref(false)
let successMessage = ref('')

const handleSubmit = async () => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/auth/confirm-email/`,
      {
        uidb64: route.params.uidb64,
        token: route.params.token
      },
      {
        headers: {
          'Accept-Language': Trans.currentLocale
        }
      }
    )
    successMessage.value = response.data.message
    active.value = true
  } catch (error) {
    console.error(error.response.data.detail)
    router.replace({ name: 'not found' })
  }
}

onBeforeMount(() => {
  handleSubmit()
})
</script>

<style>
@import './ConfirmEmailComponent.scss';
</style>
