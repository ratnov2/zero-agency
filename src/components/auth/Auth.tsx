'use client'
import { MouseEvent, useEffect, useState } from 'react'
import style from './auth.module.scss'
import { useMutation } from '@tanstack/react-query'
import { AuthService } from '@/services/auth-service/auth-service'
import { IAuthForm } from '@/services/auth-service/types'
import { useStore } from '@nanostores/react'
import { $user, addUser } from '@/store/user'
import { useRouter } from 'next/navigation'

export const Auth = () => {
  const { user } = useStore($user)
  const router = useRouter()

  useEffect(() => {
    if (user?.userId) {
      router.push('/')
    }
  }, [user])

  const [username, setUsename] = useState('')
  const [password, setPassword] = useState('')

  const loginMutate = useMutation({
    mutationKey: ['login'],
    mutationFn: (data: IAuthForm) => AuthService.login(data),
    onSuccess: (data) => {
      addUser(data)
    },
  })

  const registerMutate = useMutation({
    mutationKey: ['register'],
    mutationFn: (data: IAuthForm) => AuthService.register(data),
    onSuccess: (data) => {
      addUser(data)
    },
  })

  const onSubmit = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    type: 'login' | 'register'
  ) => {
    e.preventDefault()
    if (type === 'login') {
      loginMutate.mutate({ email: username, password })
    } else {
      registerMutate.mutate({ email: username, password })
    }
  }

  return (
    <div className={style.loginForm}>
      <h2>SIGN IN</h2>
      <form>
        <div className={style.inputGroup}>
          <input
            value={username}
            onChange={(e) => setUsename(e.currentTarget.value)}
            type="text"
            placeholder="Username"
          />
        </div>
        <div className={style.inputGroup}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Password"
          />
        </div>
        <div className={style.options}>
          <a href="#">Forgot Password</a>
          <a href="#">Signup</a>
        </div>
        <div className={style.buttons}>
          <button type="submit" onClick={(e) => onSubmit(e, 'login')}>
            {!loginMutate.isPending ? 'Login' : 'Loading...'}
          </button>
          <button
            type="submit"
            onClick={(e) => onSubmit(e, 'register')}
            className={style.signupButton}
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  )
}
