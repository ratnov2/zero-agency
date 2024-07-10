import { IAuthForm } from './types'
import { login, register, checkLogin } from '@/../server/server'

export const AuthService = {
  login: async (data: IAuthForm) => {
    const response = await (login(data) as Promise<{ userId: string }>)
    localStorage.setItem('userId', response.userId)
    return response
  },
  loginFromStorage: async () => {
    const userId = localStorage.getItem('userId')
    const response = (await checkLogin(userId)) as Promise<{ userId: string }>
    return response
  },
  register: async (data: IAuthForm) => {
    const response = await (register(data) as Promise<{ userId: string }>)
    localStorage.setItem('userId', response.userId)
    return response
  },
}
