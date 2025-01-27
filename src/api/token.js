import { handleRequest, handleRequestWithQueue } from '@/api/axiosConfig.js'

export const postAsyncGoogleLogin = async (accessToken) => {
  return handleRequest(
    '/api/auth/google-login',
    {
      'access_token': accessToken
    },
    'POST'
  )
}

export const postAsyncRegistration = async (email, password, notification) => {
  return await handleRequestWithQueue(
    '/api/auth/registration/',
    {
      email,
      password,
      notify_me: notification
    },
    'POST'
  )
}

export const postAsyncConfirmEmail = async (uidb64, token) => {
  return await handleRequestWithQueue(
    '/api/auth/confirm-email/',
    {
      uidb64,
      token
    },
    'POST'
  )
}

export const postAsyncResetPassword = async (email) => {
  return await handleRequestWithQueue(
    '/api/auth/reset-password/',
    {
      email
    },
    'POST'
  )
}

export const postAsyncCheckChangePassword = async (uidb64, token) => {
  return await handleRequestWithQueue(
    '/api/auth/check-change-password/',
    {
      uidb64,
      token
    },
    'POST'
  )
}

export const postAsyncChangePassword = async (uidb64, token, password1, password2) => {
  return await handleRequestWithQueue(
    '/api/auth/change-password/',
    {
      uidb64,
      token,
      password1,
      password2
    },
    'POST'
  )
}
