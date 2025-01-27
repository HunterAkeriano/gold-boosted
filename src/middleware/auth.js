import { checkCookie } from '@/composables/useCookie.js'
import Trans from '@/plugins/i18n/translation.js'

export const auth = ({ from, next, router }) => {
  if (!checkCookie('access')) {
    router.push({ name: 'home sign in', params: { locale: Trans.currentLocale } })
  }

  next()
}

export const log = ({ next, to }) => {
  console.log(to.name)

  return next()
}
