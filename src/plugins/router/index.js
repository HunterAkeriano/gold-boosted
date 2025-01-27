import { createRouter, createWebHistory, RouterView } from 'vue-router'
import Tr from '@/plugins/i18n/translation'
import MainPage from '@/pages/MainPage/MainPage.vue'
import SignInComponent from '@/organisms/SignInComponent/SignInComponent.vue'
import Page404 from '@/pages/404/404.vue'
import CatalogPage from '@/pages/CatalogPage/CatalogPage.vue'
import ProductPage from '@/pages/ProductPage/ProductPage.vue'
import CabinetPage from '@/pages/DashboardPage/DashboardPage.vue'
import BasketPage from '@/pages/BasketPage/BasketPage.vue'
import CheckoutPage from '@/pages/CheckoutPage/CheckoutPage.vue'
import SignUpComponent from '@/organisms/SignUpComponent/SignUpComponent.vue'
import ForgotPassword from '@/organisms/ForgotPassword/ForgotPassword.vue'
import ConfirmEmailComponent from '@/organisms/ConfirmEmailComponent/ConfirmEmailComponent.vue'
import ResetPasswordComponent from '@/organisms/ResetPasswordComponent/ResetPasswordComponent.vue'
import DashboardProfile from '@/organisms/DashboardProfile/DashboardProfile.vue'
import DashboardOrders from '@/organisms/DashboardOrders/DashboardOrders.vue'
import DashboardCharacter from '@/organisms/DashboardCharacter/DashboardCharacter.vue'
import Trans from '@/plugins/i18n/translation'
import { auth, log } from '@/middleware/auth.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/:locale?',
      name: 'locale',
      component: RouterView,
      beforeEnter: Tr.routeMiddleware,
      children: [
        {
          path: '',
          name: 'home',
          component: MainPage,
          props: true,
          meta: {
            title: ['Main', 'Головна'],
            metaTags: [
              {
                middleware: log,
                name: 'description',
                content: 'Опис головної сторінки'
              }
            ]
          },
          children: [
            {
              path: 'sign-in',
              name: 'home sign in',
              component: SignInComponent,
              meta: {
                title: ['Sign in', 'Вхід']
              }
            },
            {
              path: 'sign-up',
              name: 'home sign up',
              component: SignUpComponent,
              meta: {
                title: ['Sign up', 'Регістрація']
              }
            },
            {
              path: 'forgot-password',
              name: 'home forgot password',
              component: ForgotPassword,
              meta: {
                title: ['Forgot password', 'Відновлення пароля']
              }
            },
            {
              path: 'confirm-reset/:uidb64/:token',
              name: 'home reset password',
              component: ResetPasswordComponent,
              meta: {
                title: ['Reset password', 'Відновлення пароля']
              }
            },
            {
              path: 'confirm-email/:uidb64/:token',
              name: 'emailConfirmation',
              component: ConfirmEmailComponent,
              meta: {
                title: ['Confirm email', 'Підтвердження пошти']
              }
            }
          ]
        },
        {
          path: 'catalog/:catalogId',
          name: 'catalog',
          component: CatalogPage,
          meta: {
            title: ['Catalog', 'Каталог']
          },
          children: [
            {
              path: 'sign-in',
              name: 'catalog sign in',
              component: SignInComponent,
              meta: {
                title: ['Sign in', 'Вхід']
              }
            },
            {
              path: 'sign-up',
              name: 'catalog sign up',
              component: SignUpComponent,
              meta: {
                title: ['Sign up', 'Регістрація']
              }
            },
            {
              path: 'forgot-password',
              name: 'catalog forgot password',
              component: ForgotPassword,
              meta: {
                title: ['Forgot password', 'Відновлення пароля']
              }
            }
          ]
        },
        {
          path: 'product/:productId',
          name: 'product',
          component: ProductPage,
          meta: {
            title: ['Product page', 'Сторінка продукту']
          },
          children: [
            {
              path: 'sign-in',
              name: 'product sign in',
              component: SignInComponent,
              meta: {
                title: ['Sign in', 'Вхід']
              }
            },
            {
              path: 'sign-up',
              name: 'product sign up',
              component: SignUpComponent,
              meta: {
                title: ['Sign up', 'Регістрація']
              }
            },
            {
              path: 'forgot-password',
              name: 'product forgot password',
              component: ForgotPassword,
              meta: {
                title: ['Forgot password', 'Відновлення пароля']
              }
            }
          ]
        },
        {
          path: 'Dashboard',
          name: 'dashboard',
          component: CabinetPage,
          redirect: { name: 'orders' },
          meta: {
            title: ['Dashboard', 'Кабінет'],
            middleware: [auth, log]
          },
          children: [
            {
              path: 'orders',
              name: 'orders',
              component: DashboardOrders,
              meta: {
                title: ['Orders', 'Покупки'],
                middleware: [auth, log]
              }
            },
            {
              path: 'profile',
              name: 'profile',
              component: DashboardProfile,
              meta: {
                title: ['Profile', 'Профіль'],
                middleware: [auth, log]
              }
            },
            {
              path: 'character',
              name: 'character',
              component: DashboardCharacter,
              meta: {
                title: ['Characters', 'Персонажі']
              }
            }
          ]
        },
        {
          path: 'Basket',
          name: 'basket',
          component: BasketPage,
          meta: {
            title: ['Basket', 'Корзина']
          },
          children: [
            {
              path: 'sign-in',
              name: 'basket sign in',
              component: SignInComponent,
              meta: {
                title: ['Sign in', 'Вхід']
              }
            },
            {
              path: 'sign-up',
              name: 'basket sign up',
              component: SignUpComponent,
              meta: {
                title: ['Sign up', 'Регістрація']
              }
            },
            {
              path: 'forgot-password',
              name: 'basket forgot password',
              component: ForgotPassword,
              meta: {
                title: ['Forgot password', 'Відновлення пароля']
              }
            }
          ]
        },
        {
          path: 'checkout/:status',
          name: 'checkout',
          component: CheckoutPage,
          meta: {
            title: ['Checkout', 'Результат']
          },
          children: [
            {
              path: 'sign-in',
              name: 'checkout sign in',
              component: SignInComponent,
              meta: {
                title: ['Sign in', 'Вхід']
              }
            },
            {
              path: 'sign-up',
              name: 'checkout sign up',
              component: SignUpComponent,
              meta: {
                title: ['Sign up', 'Регістрація']
              }
            },
            {
              path: 'forgot-password',
              name: 'checkout forgot password',
              component: ForgotPassword,
              meta: {
                title: ['Forgot password', 'Відновлення пароля']
              }
            }
          ]
        },
        {
          path: ':pathMatch(.*)*',
          redirect: { name: 'not found' }
        },
        {
          path: '404',
          name: 'not found',
          component: Page404,
          meta: {
            title: ['404', '404']
          },
          children: [
            {
              path: 'sign-in',
              name: 'not found sign in',
              component: SignInComponent,
              meta: {
                title: ['Sign in', 'Вхід']
              }
            },
            {
              path: 'sign-up',
              name: 'not found sign up',
              component: SignUpComponent,
              meta: {
                title: ['Sign up', 'Регістрація']
              }
            },
            {
              path: 'forgot-password',
              name: 'not found forgot password',
              component: ForgotPassword,
              meta: {
                title: ['Forgot password', 'Відновлення пароля']
              }
            }
          ]
        }
      ]
    }
  ],
  scrollBehavior(to, from) {
    if (
      (!to.name.includes('sign in') &&
        !to.name.includes('sign up') &&
        !to.name.includes('forgot password')) ||
      (!from.name.includes('sign in') &&
        !from.name.includes('sign up') &&
        !from.name.includes('forgot password'))
    ) {
      const wrapper = document.getElementById('wrapper')
      wrapper.scrollTop = 0
    }
  }
})

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index]

  if (!subsequentMiddleware) return context.next

  return (...parameters) => {
    context.next(...parameters)

    const nextMiddleware = nextFactory(context, middleware, index + 1)
    subsequentMiddleware({ ...context, next: nextMiddleware })
  }
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware]

    const context = {
      from,
      router,
      to,
      next // Додано `next` в контекст
    }
    const nextMiddleware = nextFactory(context, middleware, 0)

    // Викликаємо перше middleware, передаючи йому контекст та функцію nextMiddleware
    return middleware[0]({ ...context, next: nextMiddleware }) // Повернення результату middleware
  } else {
    document.title =
      Trans.currentLocale === 'en'
        ? to.meta.title[0]
        : Trans.currentLocale === 'uk'
          ? to.meta.title[1]
          : 'Gold Boost'

    // Продовжуємо навігацію
    next()
  }
})

export default router
