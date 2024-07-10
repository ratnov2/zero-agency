import { $host } from '@/api/config'
import { IPost } from './types'

export const PostService = {
  getAllPosts: async () => {
    const response = await $host<IPost[]>('/posts')
    return response.data
  },
  getPostById: async (postId: string) => {
    const response = await $host<IPost>(`/posts/${postId}`)
    return response.data
  },
}
