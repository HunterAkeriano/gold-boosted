import { handleRequest, handleRequestWithQueue } from '@/api/axiosConfig.js'

export const getAsyncProduct = async (productId) => {
  return handleRequest(`/api/products/${productId}/`)
}

export const getAsyncSearchProduct = async (searchLine, gameId = null) => {
  return handleRequest(`/api/products/search/`, { search_line: searchLine, game_id: gameId })
}

export const getAsyncTabContent = async (tabId) => {
  return handleRequest(`/api/products/tab-content/${tabId}/`)
}

export const getAsyncFrequentlyBought = async () => {
  return handleRequest(`/api/products/freqbot-section/`)
}

export const getAsyncBestsellers = async (page, pageSize) => {
  return handleRequest(`/api/products/bestsellers/`, {
    page: page,
    page_size: pageSize
  })
}

export const getAsyncHotOffers = async (page, gameId, pageSize) => {
  return handleRequest(`/api/products/hot-offers/`, {
    page: page,
    page_size: pageSize,
    game_id: gameId === 0 ? null : gameId
  })
}

export const postAsyncToCartFrequentlyBought = async (freqbotId) => {
  return handleRequestWithQueue(`/api/products/freqbot/${freqbotId}/to-cart/`, {}, 'POST')
}

export const postAsyncToCartProduct = async (productId, attributes, quantity) => {
  return handleRequestWithQueue(
    `/api/products/${productId}/to-cart/`,
    { attributes: attributes, quantity: quantity },
    'POST'
  )
}
