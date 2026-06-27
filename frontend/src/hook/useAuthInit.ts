import { useEffect } from "react"
import { getMeApi } from '../api/auth.api'
import { useAuthStore } from "../store/auth.store"

export const useAuthInit = () => {
    const setUser = useAuthStore((state) => state.setUser)
    const finishLoading = useAuthStore((state) => state.finishLoading)

    useEffect(() => {
        getMeApi()
            .then((data) => {
                setUser({ id: data.id, username: data.username })
            })
            .catch(() => {
                finishLoading()
            })
    }, [setUser, finishLoading])
}