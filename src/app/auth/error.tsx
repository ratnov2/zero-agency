'use client'

import Link from 'next/link'
import style from './style.module.scss'

const error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  return (
    <div className={style.errorContainer}>
      <h1 className={style.errorTitle}>Упс! Что-то пошло не так.</h1>
      <p className={style.errorMessage}>
        Мы не можем найти страницу, которую вы ищете. Это может быть временная
        проблема.
      </p>
      <Link href="/">
        <span className={style.backHome}>Вернуться на главную</span>
      </Link>
    </div>
  )
}
export default error
