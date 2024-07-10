import Link from 'next/link'
import style from './sidebar.module.scss'
import { ProfileLayout } from '@/layout/ProfileLayout'

export const Header = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navbar__left}>
        <Link href={'/'} className={style.navbar__title}>
          Zero-Agency
        </Link>
      </div>
      <ProfileLayout />
    </div>
  )
}
