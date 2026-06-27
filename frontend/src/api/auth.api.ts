import api from "./axios"

export const loginApi = async (
    username: string,
    password: string
) => {
    const { data } = await api.post('/auth/login', {
        username,
        password,
    })
    return data
}

export const logoutApi = async () => {
    const { data } = await api.post('/auth/logout')
    return data
}

export const getMeApi = async () => {
    const { data } = await api.get('/auth/me')
    return data
}