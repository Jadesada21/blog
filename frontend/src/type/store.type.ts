

export interface User {
    id: number
    username: string
}

export interface AuthState {
    user: User | null
    isAuthenticated: boolean
    isLoading: boolean
    setUser: (user: User | null) => void
    logout: () => void
    finishLoading: () => void
}