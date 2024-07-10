'use client'

import { FC } from 'react'
import styles from './pagination.module.scss'
import { useRouter } from 'next/navigation'
import { TOTAL_PAGES } from '@/constants/pagination.constants'

interface IPagination {
  currentPage: number
}

export const Pagination: FC<IPagination> = ({ currentPage }) => {
  const router = useRouter()

  const handlePageChange = (page: number) => {
    router.push(`/page/${page}`)
  }

  return (
    <div className={styles.pagination}>
      <button
        className={styles.pageButton}
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous
      </button>
      {[...Array(TOTAL_PAGES)].map((_, index) => {
        const page = index + 1
        return (
          <button
            key={page}
            className={`${styles.pageButton} ${
              page === currentPage ? styles.active : ''
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        )
      })}
      <button
        className={styles.pageButton}
        disabled={currentPage === TOTAL_PAGES}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  )
}
