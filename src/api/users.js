import { axiosInstance, handleRequest, handleRequestWithQueue } from '@/api/axiosConfig.js'
import { useToast } from 'vue-toast-notification'
import Trans from '@/plugins/i18n/translation.js'

const toast = useToast()

export const postAsyncSubscribe = async (email) => {
  try {
    await axiosInstance.post('/api/users/subscribe/', { email: email }).then((data) => {
      toast.success(data.data.message)
    })
  } catch (e) {
    toast.error(e.response.data.detail)
  }
}

export const patchAsyncUpdateProfile = async (profileData) => {
  handleRequestWithQueue('/api/users/my-profile/', profileData, 'PATCH').then((response) => {
    console.log(response)
    if (response) {
      toast.success(Trans.currentLocale === 'uk' ? 'Оновлення успішне' : 'Update success')
    }
  })
}

export const getAsyncMyProfile = async () => {
  return handleRequest('/api/users/my-profile/')
}

export const getAsyncMyCharacters = async () => {
  return handleRequest('/api/users/my-characters/')
}

export const postAsyncAddNewCharacter = async () => {
  return handleRequest('/api/users/create-default-character/', {}, 'POST')
}

export const deleteAsyncDeleteMyCharacter = async (characterId) => {
  return handleRequest(`/api/users/my-character/${characterId}`, {}, 'DELETE')
}

export const patchAsyncUpdateMyCharacter = async (characterId, characterData) => {
  handleRequest(`/api/users/my-character/${characterId}`, characterData, 'PATCH').then(
    (response) => {
      console.log(response)
      if (response) {
        toast.success(Trans.currentLocale === 'uk' ? 'Оновлення успішне' : 'Update success')
      }
    }
  )
}
