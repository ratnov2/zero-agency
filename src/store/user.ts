import { IUser } from '@/services/auth-service/types'
import { atom } from 'nanostores'

export const $user = atom<{ loading: LoadingStatus; user: IUser | null }>({
  loading: 'loading',
  user: null,
})

export function addUser(user: IUser) {
  $user.set({ user, loading: 'loaded' })
}
export function changeLoaderUser(status: LoadingStatus) {
  $user.set({ ...$user.get(), loading: status })
}
export type LoadingStatus = 'empty' | 'loading' | 'loaded'
