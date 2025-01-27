import { createI18n } from 'vue-i18n'

const messages = {
  en: require('./locales/en.json'),
  ua: require('./locales/ua.json')
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n
