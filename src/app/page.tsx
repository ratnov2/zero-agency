import { SharePage } from '@/components/home/share-page/SharePage'
import { PostService } from '@/services/post-service/post-service'
import { totalPages } from './page/[page]/page'

export default async function HomePage() {
  let posts = await PostService.getAllPosts()
  posts = posts.slice(0, totalPages)

  return <SharePage posts={posts} />
}
