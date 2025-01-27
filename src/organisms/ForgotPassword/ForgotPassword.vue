<template>
  <PopupComponent>
    <template v-if="!successResult">
      <form class="form forgot-password" @submit="onSubmit">
        <h2 class="form__title">{{ $t('popup.forgotPassword') }}?</h2>

        <InputComponent
          class="form__input input-component_border"
          :class="{ 'validate-input-error': errors.email }"
          :placeholderText="$t('popup.email')"
          v-model="email"
          v-bind="emailAttrs"
        />

        <p class="validate-error" v-if="submitCount > 0">
          {{ errors.email }}
        </p>

        <ButtonComponent class="forgot-password__submit" type="submit" rectangle>
          {{ $t('popup.resetPassword') }}
        </ButtonComponent>

        <ButtonComponent class="forgot-password__back-button" @click="openPopup(0)">
          {{ $t('popup.back') }}
        </ButtonComponent>
      </form>
    </template>

    <template v-else>
      <div class="success-popup forgot-password__success-popup">
        <div class="success-popup__icon-block">
          <SuccessIcon />
        </div>

        <p class="success-popup__description">
          {{ $t('success.forgotPassword.description') }}
        </p>

        <p class="success-popup__link-text">
          {{ $t('success.linkText') }}
          <LinkComponent
            class="link_underline-gradient"
            text="Gmail.com"
            to="https://mail.google.com/"
            href
          />
        </p>
      </div>
    </template>
  </PopupComponent>
</template>

<script setup>
import PopupComponent from '@/molecules/PopupComponent/PopupComponent.vue'
import ButtonComponent from '@/atoms/ui/UIButton/UIButton.vue'
import InputComponent from '@/atoms/ui/InputComponent/InputComponent.vue'
import { useRoute, useRouter } from 'vue-router'
import { useToast } from 'vue-toast-notification'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import axios from 'axios'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'
import SuccessIcon from '@/atoms/icons/SuccessIcon.vue'
import { postAsyncResetPassword } from '@/api/token.js'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const toast = useToast()
const successResult = ref(false)

const { handleSubmit, defineField, submitCount, errors } = useForm({
  validationSchema: yup.object({
    email: yup.string().email(t('validate.email.email')).required(t('validate.email.required'))
  })
})

const [email, emailAttrs] = defineField('email')

const forgotPassword = async (email) => {
  try {
    await postAsyncResetPassword(email)
    successResult.value = true
  } catch (error) {
    console.error(error)
    toast.error(error.response.data.detail)
  }
}

const onSubmit = handleSubmit(() => {
  forgotPassword(email.value)
})
const openPopup = async (popupNumber) => {
  const param = await route.matched[1].children[popupNumber].name
  router.push({ name: param, params: { locale: route.params.locale } })
}
</script>

<style>
@import './ForgotPassword.scss';
</style>
