import { create } from 'zustand'
import type { AuthState } from '../type/store.type'

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: true,

    setUser: (user) =>
        set({
            user,
            isAuthenticated: !!user,
            isLoading: false,
        }),

    logout: () =>
        set({
            user: null,
            isAuthenticated: false,
            isLoading: false
        }),

    finishLoading: () =>
        set({ isLoading: false })
}))