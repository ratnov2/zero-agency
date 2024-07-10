import { AuthService } from '@/services/auth-service/auth-service'
import { addUser, changeLoaderUser } from '@/store/user'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

export const useUserCheck = () => {
  const query = useQuery({
    queryKey: ['check-user'],
    queryFn: () => AuthService.loginFromStorage(),
  })
  useEffect(() => {
    if (query.isSuccess) {
      const userId = localStorage.getItem('userId')
      if (userId) addUser({ userId })
    }
    console.log(query.isSuccess)
  }, [query.isSuccess])
  useEffect(() => {
    if (!query.isPending) {
      changeLoaderUser('loaded')
    }
  }, [query.isPending])
  return query
}
