'use client'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useWebVitals } from '@/components/web-witals'

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode
}) {
  console.log('FEFEEFFEEFFE', process.env.NEXT_PUBLIC_GOOGLE_GID)
  useWebVitals()
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000,
          },
        },
      })
  )
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
