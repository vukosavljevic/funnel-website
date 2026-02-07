import { computed } from 'vue'

export function usePrice() {
  const price = computed(() => {
    const path = window.location.pathname
    if (path.includes('/metal')) {
      return '$9,299'
    }
    return '$7,299'
  })

  const priceNumber = computed(() => {
    const path = window.location.pathname
    if (path.includes('/metal')) {
      return '9,299'
    }
    return '7,299'
  })

  return {
    price,
    priceNumber
  }
}
