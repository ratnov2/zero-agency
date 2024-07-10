import { Auth } from '@/components/auth/Auth'
import { SITE_DESCRIPTION } from '@/constants/seo.constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Auth',
  description:
    'Securely log in to your account to access personalized features and content. Enter your credentials to sign in or register for a new account. Enjoy a safe and seamless login experience.',
}

const authPage = () => {
  return <Auth />
}

export default authPage
