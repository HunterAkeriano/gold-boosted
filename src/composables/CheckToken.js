import { ref } from 'vue'

export const hasTokens = ref(
  document.cookie.includes('access=') && document.cookie.includes('refresh=')
)
