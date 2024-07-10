import { Profile } from '@/components/profile/Profile'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profile',
  description: 'Your profile',
}

const profilePage = () => {
  return <Profile />
}

export default profilePage
