<template>
  <form class="form sign-in" @submit.prevent="handleSubmit" action="">
    <h2 class="form__title">Sign In</h2>

    <InputComponent class="form__input" placeholderText="Email" />

    <InputComponent class="form__input" placeholderText="Password" />

    <LinkComponent class="sign-in__forgot-password" text="Forgot password?" to="/" />

    <ButtonComponent class="sign-in__submit" rectangle @click="handleSubmit">
      Sign in
    </ButtonComponent>

    <LinkComponent class="sign-in__sign-up-button" text="Sign up" to="/" />

    <div class="sign-in__social">
      <h3 class="sign-in__social-title">Or connect using:</h3>

      <div class="sign-in__social-buttons">
        <ButtonComponent circle>
          <FacebookIcon />
        </ButtonComponent>

        <ButtonComponent circle>
          <GooglePlusIcon />
        </ButtonComponent>

        <ButtonComponent circle>
          <TwitterIcon />
        </ButtonComponent>
      </div>
    </div>
  </form>
</template>

<script setup>
import InputComponent from '@/atoms/ui/InputComponent/InputComponent.vue'
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'
import ButtonComponent from '@/atoms/ui/UIButton/UIButton.vue'
import FacebookIcon from '@/atoms/icons/FacebookIcon.vue'
import GooglePlusIcon from '@/atoms/icons/GooglePlusIcon.vue'
import TwitterIcon from '@/atoms/icons/TwitterIcon.vue'
import { ref } from 'vue'
import axios from 'axios'

const email = ref('')
const password = ref('')

const handleSubmit = async () => {
  console.log('send')
  try {
    const response = await axios.post(`https://goldboost.demodev.cc/api/users/registration/`, {
      email: email.value,
      password: password.value,
      notify_me: true
    })
    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}
</script>

<style>
@import './RegistrationComponent.scss';
</style>
