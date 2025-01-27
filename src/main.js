import '@/assets/styles/base/index.scss'
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/plugins/router'
import i18n from '@/plugins/i18n/index.js'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
import GoogleSignInPlugin from 'vue3-google-signin'

const app = createApp(App)
app
  .use(router)
  .use(i18n)
  .use(VueToast)
  .use(GoogleSignInPlugin, {
    clientId: '521528310518-umob37i43lec1amua50vg46rvb7dorb7.apps.googleusercontent.com'
  })
  .mount('#app')

