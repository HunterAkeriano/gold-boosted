<template>
  <PopupComponent>
    <form class="form sign-in" @submit="onSubmit">
      <h2 class="form__title">
        {{ $t('popup.signIn') }}
      </h2>

      <InputComponent
        v-model="email"
        v-bind="emailAttrs"
        class="form__input input-component_border"
        :class="{ 'validate-input-error': errors.email }"
        :placeholderText="$t('popup.email')"
      />

      <p class="validate-error" v-if="submitCount > 0">
        {{ errors.email }}
      </p>

      <InputComponent
        v-model="password"
        v-bind="passwordAttrs"
        class="form__input input-component_border"
        :class="{ 'validate-input-error': errors.password }"
        type="password"
        :placeholderText="$t('popup.password')"
      />

      <p class="validate-error" v-if="submitCount > 0">
        {{ errors.password }}
      </p>

      <ButtonComponent class="sign-in__forgot-password-button" @click="openPopup(2)">
        {{ $t('popup.forgotPassword') }}?
      </ButtonComponent>

      <ButtonComponent class="sign-in__submit" type="submit" rectangle>
        {{ $t('signIn') }}
      </ButtonComponent>

      <ButtonComponent class="sign-in__sign-up-button" @click="openPopup(1)">
        {{ $t('signUp') }}
      </ButtonComponent>

      <div class="sign-in__social">
        <h3 class="sign-in__social-title">{{ $t('popup.connectUsing') }}:</h3>

        <div class="sign-in__social-buttons">
          <ButtonComponent class="sign-in__social-button" circle>
            <FacebookIcon />
          </ButtonComponent>

          <ButtonComponent
            class="sign-in__social-button"
            :disabled="!isReady"
            @click="() => login()"
            circle
          >
            <GooglePlusIcon />
          </ButtonComponent>

          <ButtonComponent class="sign-in__social-button" circle>
            <TwitterIcon />
          </ButtonComponent>
        </div>
      </div>
    </form>
  </PopupComponent>
</template>

<script setup>
import PopupComponent from '@/molecules/PopupComponent/PopupComponent.vue'
import ButtonComponent from '@/atoms/ui/UIButton/UIButton.vue'
import GooglePlusIcon from '@/atoms/icons/GooglePlusIcon.vue'
import TwitterIcon from '@/atoms/icons/TwitterIcon.vue'
import InputComponent from '@/atoms/ui/InputComponent/InputComponent.vue'
import FacebookIcon from '@/atoms/icons/FacebookIcon.vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import axios from 'axios'
import { useToast } from 'vue-toast-notification'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { hasTokens } from '@/composables/CheckToken.js'
import { useTokenClient } from 'vue3-google-signin'
import { postAsyncGoogleLogin } from '@/api/token.js'
import Trans from '@/plugins/i18n/translation.js'

const { t, locale } = useI18n()
const route = useRoute()
const router = useRouter()
const toast = useToast()

const { handleSubmit, defineField, submitCount, errors } = useForm({
  validationSchema: yup.object({
    email: yup.string().email(t('validate.email.email')).required(t('validate.email.required')),
    password: yup
      .string()
      .required(t('validate.password.required'))
      .max(128, t('validate.password.max'))
  })
})

const onSubmit = handleSubmit(() => {
  signIn(email.value, password.value)
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
const signIn = async (email, password) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/token/pair`, {
      email,
      password
    })
    const data = response.data

    document.cookie = `access=${data.access}; path=/; max-age=3600`
    document.cookie = `email=${data.email}; path=/; max-age=3600`
    document.cookie = `refresh=${data.refresh}; path=/; max-age=3600`
    hasTokens.value = true

    router.replace({ name: 'home', params: { locale: locale.value } })
  } catch (error) {
    console.error(error)
    toast.error(error.response.data.detail)
  }
}

const openPopup = async (popupNumber) => {
  const param = await route.matched[1].children[popupNumber].name
  router.push({ name: param, params: { locale: route.params.locale } })
}

const handleOnSuccess = async (response) => {
  postAsyncGoogleLogin(response.access_token).then((data) => {
    document.cookie = `access=${data.access}; path=/; max-age=3600`
    document.cookie = `refresh=${data.refresh}; path=/; max-age=3600`
    hasTokens.value = true
  })

  const param = await route.matched[1].name

  router.replace({ name: param, params: { locale: Trans.currentLocale } })
}

const handleOnError = (errorResponse) => {
  console.log('Error: ', errorResponse)
}

const { isReady, login } = useTokenClient({
  onSuccess: handleOnSuccess,
  onError: handleOnError
})
</script>

<style>
@import './SignInComponent.scss';
</style>
