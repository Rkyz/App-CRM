
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export function requireAuth(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  const token = localStorage.getItem('token')
  if (token) {
    next() // allow user to access route
  } else {
    next({ name: 'login' }) // redirect to login page
  }
}
