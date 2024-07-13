'use client'

import { useReportWebVitals } from 'next/web-vitals'

export function useWebVitals() {
  useReportWebVitals((metric) => {
    console.log(metric)
  })
  return {}
}
