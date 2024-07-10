'use client'

import { $user } from '@/store/user'
import { useStore } from '@nanostores/react'
import style from './profile-layout.module.scss'
import { LoaderSvg } from '@/svgs/LoaderSvg'
import { useUserCheck } from '@/hooks/useUserCheck'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export const ProfileLayout = () => {
  const { loading, user } = useStore($user)
  const router = useRouter()
  useUserCheck()

  if (loading === 'loading') {
    return (
      <div className={style.navbar__right}>
        <div className={style.navbar__profile}>
          <LoaderSvg width={40} height={40} />
        </div>
      </div>
    )
  }

  if (user) {
    return (
      <div className={style.navbar__right}>
        <Link href={'/profile'} className={style.navbar__profile}>
          <Image
            src="https://cs13.pikabu.ru/avatars/1873/x1873132-1972677953.png"
            alt="Profile"
            width={40}
            height={40}
          />
        </Link>
      </div>
    )
  }
  return (
    <button onClick={() => router.push('/auth')} className={style.loginButton}>
      Login
    </button>
  )
}
