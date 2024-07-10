import { SharePage } from '@/components/home/share-page/SharePage'
import { PostService } from '@/services/post-service/post-service'
import { Metadata } from 'next'
import { TOTAL_PAGES } from '@/constants/pagination.constants'

export const metadata: Metadata = {
  title: 'Posts',
  description:
    'Discover a wide range of interesting articles on our blog page. Browse the latest posts, easily navigate between pages, and find content that suits your interests.',
}

export default async function HomePage() {
  let posts = await PostService.getAllPosts()
  posts = posts.slice(0, TOTAL_PAGES)

  return <SharePage posts={posts} />
}
