import { handleRequest } from '@/api/axiosConfig.js'

export const getAsyncNews = async (page, pageSize) => {
  return handleRequest(`/api/main/news/`, { page: page, page_size: pageSize })
}

export const getAsyncWhyChooseUs = async () => {
  return handleRequest(`/api/main/why-choose-us/`)
}

export const getAsyncReviews = async (page, pageSize) => {
  return handleRequest(`/api/main/reviews/`, { page: page, page_size: pageSize })
}
