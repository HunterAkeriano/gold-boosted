<template>
  <form class="discount-form" @submit.prevent="onSubmit">
    <p class="discount-form__description">
      {{ text }}
    </p>

    <InputBlockComponent
      :placeholderText="$t('footer.discount.inputPlaceholder')"
      :buttonText="$t('footer.discount.button')"
      class="discount-form__input-block"
      v-model="email"
      v-bind="emailAttrs"
    />

    <p class="validate-error" v-if="submitCount > 0">
      {{ errors.email }}
    </p>
  </form>
</template>

<script setup>
import InputBlockComponent from '@/molecules/InputBlock/InputBlock.vue'
import { postAsyncSubscribe } from '@/api/users.js'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const subscribe = async () => {
  await postAsyncSubscribe(email.value)
}

const { handleSubmit, defineField, submitCount, errors } = useForm({
  validationSchema: yup.object({
    email: yup.string().email(t('validate.email.email')).required(t('validate.email.required'))
  })
})

const onSubmit = handleSubmit(() => {
  subscribe(email.value)
})

const [email, emailAttrs] = defineField('email')

defineProps(['text'])
</script>

<style>
@import 'TheDiscount.scss';
</style>
