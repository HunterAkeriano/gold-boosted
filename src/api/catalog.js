import { handleRequest } from '@/api/axiosConfig.js'

export const getAsyncCatalog = async (catalogId) => {
  return handleRequest(`/api/catalog-page/${catalogId}/`)
}

export const getAsyncWorthLook = async (catalogId) => {
  return handleRequest(`/api/catalog-page/${catalogId}/worth-look/`)
}

export const getAsyncCalendar = async (catalogId) => {
  return handleRequest(`/api/catalog-page/${catalogId}/calendar/`)
}

export const getAsyncCalendarItems = async (calendarId) => {
  return handleRequest(`/api/catalog-page/${calendarId}/calendar-items/`)
}

export const getAsyncTabContent = async (tabId) => {
  return handleRequest(`/api/catalog-page/tab-content/${tabId}/`)
}
