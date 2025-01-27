import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import uk from './locales/ua.json'

const datetimeFormats = {
  'en-US': {
    short: {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }
  },
  'uk-UA': {
    short: {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }
  }
}

const getLanguageFromUrl = () => {
  const url = window.location.pathname
  const matches = url.match(/^\/(uk|en)(\/|$)/)
  return matches && matches[1] ? matches[1] : 'en'
}

export default createI18n({
  locale: getLanguageFromUrl(),
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  datetimeFormats: datetimeFormats,
  globalInjection: true,
  messages: { en, uk },
  runtimeOnly: false
})
