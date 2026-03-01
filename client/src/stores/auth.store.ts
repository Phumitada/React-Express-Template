import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface User {
  userId: string
  email: string
  role: string
}

interface AuthState {
  user: User | null
  accessToken: string | null
  isAuthenticated: boolean
  isLoading: boolean

  setAuth: (user: User, accessToken: string) => void
  setAccessToken: (accessToken: string) => void
  clearAuth: () => void
  setLoading: (loading: boolean) => void
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        accessToken: null,
        isAuthenticated: false,
        isLoading: true,

        setAuth: (user, accessToken) =>
          set({ user, accessToken, isAuthenticated: true, isLoading: false }),

        setAccessToken: (accessToken) =>
          set({ accessToken }),

        clearAuth: () =>
          set({ user: null, accessToken: null, isAuthenticated: false, isLoading: false }),

        setLoading: (isLoading) =>
          set({ isLoading }),
      }),
      {
        name: 'auth-storage',
        partialize: (state) => ({
          user: state.user,
          accessToken: state.accessToken,
          isAuthenticated: state.isAuthenticated,
        }),
      }
    ),
    { name: 'auth-store' }
  )
)