<template>
  <PopupComponent v-if="isTokenActive">
    <template v-if="!successResult">
      <form class="form reset-password" @submit="onSubmit">
        <h2 class="form__title">{{ $t('popup.resetPassword') }}</h2>

        <InputComponent
          v-model="password1"
          v-bind="password1Attrs"
          type="password"
          class="form__input input-component_border"
          :class="{ 'validate-input-error': errors.password1 }"
          :placeholderText="$t('popup.newPassword')"
        />

        <p class="validate-error" v-if="submitCount > 0">
          {{ errors.password1 }}
        </p>

        <InputComponent
          v-model="password2"
          v-bind="password2Attrs"
          class="form__input input-component_border"
          :class="{ 'validate-input-error': errors.password2 }"
          type="password"
          :placeholderText="$t('popup.repeatPassword')"
        />

        <p class="validate-error" v-if="submitCount > 0">
          {{ errors.password2 }}
        </p>

        <ButtonComponent class="sign-in__submit" type="submit" rectangle>
          {{ $t('popup.resetMyPassword') }}
        </ButtonComponent>
      </form>
    </template>

    <template v-else>
      <div class="success-popup">
        <div class="success-popup__icon-block">
          <SuccessIcon />
        </div>

        <p class="success-popup__description">
          {{ $t('success.resetPassword.description') }}
        </p>

        <p class="success-popup__link-text">
          {{ $t('success.linkText') }}
          <LinkComponent
            class="link_underline-gradient"
            :text="$t('success.resetPassword.home')"
            :to="{ name: 'home' }"
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
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toast-notification'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import Trans from '@/plugins/i18n/translation.js'
import { postAsyncChangePassword, postAsyncCheckChangePassword } from '@/api/token.js'
import SuccessIcon from '@/atoms/icons/SuccessIcon.vue'
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'

const { t } = useI18n()
const toast = useToast()
const route = useRoute()
const router = useRouter()
const isTokenActive = ref(false)
const successResult = ref(false)

const checkToken = async () => {
  try {
    await postAsyncCheckChangePassword(route.params.uidb64, route.params.token)
    isTokenActive.value = true
  } catch (error) {
    toast.error(error.response.data.detail)
    router.push({ name: 'not found', params: { locale: Trans.currentLocale } })
  }
}

checkToken()

const { handleSubmit, defineField, submitCount, errors } = useForm({
  validationSchema: yup.object({
    password1: yup
      .string()
      .required(t('validate.password.required'))
      .max(128, t('validate.password.max')),
    password2: yup
      .string()
      .required(t('validate.password.required'))
      .max(128, t('validate.password.max'))
  })
})

const [password1, password1Attrs] = defineField('password1')
const [password2, password2Attrs] = defineField('password2')

const onSubmit = handleSubmit(() => {
  resetPassword(password1.value, password2.value)
})

const resetPassword = async (password1, password2) => {
  try {
    await postAsyncChangePassword(route.params.uidb64, route.params.token, password1, password2)
    successResult.value = true
  } catch (error) {
    toast.error(error.response.data.detail)
  }
}
</script>
