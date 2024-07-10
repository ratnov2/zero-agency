import { TOTAL_PAGES } from '@/constants/pagination.constants'
import { PostService } from '@/services/post-service/post-service'

export async function getPostById(page: string) {
  const posts = (await PostService.getAllPosts()).slice(
    +page * TOTAL_PAGES - TOTAL_PAGES,
    +page * TOTAL_PAGES
  )
  return posts
}
