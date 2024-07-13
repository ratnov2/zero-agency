import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import QueryProvider from '@/providers/QueryProvider'
import { Header } from '@/components/header/Header'
import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'
import { WebVitals } from '@/components/web-witals'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: { absolute: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  authors: {
    name: SITE_NAME,
    url: process.env.NEXT_PUBLIC_APP_URL,
  },
  publisher: SITE_NAME,
  icons: {
    shortcut: '/logo.svg',
    icon: '/logo.svg',
  },
  openGraph: {
    url: process.env.NEXT_PUBLIC_APP_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: process.env.NEXT_PUBLIC_APP_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/img.jpg`,
        width: 256,
        height: 256,
        alt: SITE_NAME,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WebVitals />
        <QueryProvider>
          <Header />
          {children}
        </QueryProvider>
      </body>
    </html>
  )
}
