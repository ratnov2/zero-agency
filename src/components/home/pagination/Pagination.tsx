'use client'

import { FC } from 'react'
import styles from './Pagination.module.scss'
import { useRouter } from 'next/navigation'
import { totalPages } from '@/app/page/[page]/page'

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
      {[...Array(totalPages)].map((_, index) => {
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
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  )
}
