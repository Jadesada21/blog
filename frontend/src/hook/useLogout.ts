import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../store/auth.store"
import { useMutation } from "@tanstack/react-query"
import { logoutApi } from "../api/auth.api"

export const useLogout = () => {
    const navigate = useNavigate()
    const logout = useAuthStore((state) => state.logout)

    return useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            logout()
            navigate('/')
        }
    })
}