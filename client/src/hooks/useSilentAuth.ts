import { useEffect } from 'react'
import { useAuthStore } from '@/stores/auth.store'

export const useSilentAuth = () => {
  const { isAuthenticated, clearAuth } = useAuthStore()

  useEffect(() => {
    const originalConsoleError = console.error
    console.error = (...args: any[]) => {
      const has401Error = args.some(arg => 
        typeof arg === 'object' && 
        arg?.response?.status === 401 ||
        (typeof arg === 'string' && arg.includes('401'))
      )
      
      if (!has401Error) {
        originalConsoleError(...args)
      }
    }

    return () => {
      console.error = originalConsoleError
    }
  }, [])

  const handleSilentLogout = () => {
    clearAuth()
    window.location.href = '/login'
  }

  return {
    handleSilentLogout,
    isAuthenticated
  }
}
