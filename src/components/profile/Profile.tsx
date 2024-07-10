'use client'

import Image from 'next/image'
import style from './profile.module.scss'
import { useStore } from '@nanostores/react'
import { $user } from '@/store/user'

export const Profile = () => {
  const user = useStore($user)

  return (
    <div className={style.userProfile}>
      <div className={style.header}>
        <Image
          src="https://cs13.pikabu.ru/avatars/1873/x1873132-1972677953.png"
          alt="User Profile"
          className={style.userPhoto}
          width={140}
          height={140}
        />
      </div>
      <div className={style.body}>
        <h2>User ID: {user.user?.userId}</h2>
      </div>
    </div>
  )
}
