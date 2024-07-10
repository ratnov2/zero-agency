import { getPostById } from '@/components/home/request/post-by-page'
import { PostService } from '@/services/post-service/post-service'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await PostService.getAllPosts()

  const postsEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${process.env.NEXT_PUBLIC_APP_URL}/post/${post.id}`,
    priority: 0.7,
    lastModified: new Date(),
    changeFrequency: 'yearly',
  }))

  return [
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/home`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://acme.com/profile',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    ...postsEntries,
  ]
}
