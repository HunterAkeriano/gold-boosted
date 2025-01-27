import { axiosInstance, handleRequest, handleRequestWithQueue } from '@/api/axiosConfig.js'
import { useToast } from 'vue-toast-notification'
import router from '@/plugins/router/index.js'
import Trans from '@/plugins/i18n/translation.js'

const toast = useToast()
export const getAsyncMyBasket = async (page, pageSize) => {
  return handleRequest(`/api/orders/my-cart/`, {
    page: page,
    page_size: pageSize
  })
}

export const deleteAsyncMyBasketItem = async (itemId) => {
  return handleRequest(`/api/orders/my-cart/items/${itemId}/`, {}, 'DELETE')
}

export const postAsyncNewOrder = async (promoCode) => {
  try {
    await axiosInstance.post(`/api/orders/new/`, { promo_code: promoCode }).then((response) => {
      toast.success(response.data.message)
      router.push({ name: 'checkout', params: { locale: Trans.currentLocale, status: 'success' } })
    })
  } catch (error) {
    toast.error(error.response.data.detail)
    await router.push({
      name: 'checkout',
      params: { locale: Trans.currentLocale, status: 'error' }
    })
  }
}

export const getAsyncMyOrders = async (page, pageSize) => {
  return handleRequest(`/api/orders/my-orders/`, { page: page, page_size: pageSize })
}

export const getAsyncOrderDetails = async (page, pageSize, number) => {
  return handleRequest(`/api/orders/${number}/detail/`, { page: page, page_size: pageSize })
}

export const postAsyncRepeatOrder = async (number) => {
  return handleRequestWithQueue(`/api/orders/${number}/repeat-order/`, {}, 'POST')
}

export const getAsyncCheckPromoCode = async (promoCode) => {
  return handleRequest(`/api/orders/check-promo-code/${promoCode}/`)
}
