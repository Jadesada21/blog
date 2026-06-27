import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "../store/auth.store"


export const ProtechedRoute = () => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
    const isLoading = useAuthStore((state) => state.isLoading)

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />
}