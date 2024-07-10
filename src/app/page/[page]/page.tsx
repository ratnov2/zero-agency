import { PostService } from '@/services/post-service/post-service'
import { SharePage } from '@/components/home/share-page/SharePage'
import { notFound } from 'next/navigation'
export const dynamicParams = true // true | false,

export const totalPages = 10

const page = async ({ params }: { params: { page: string } }) => {
  const postId = parseInt(params.page, 10)
  if (isNaN(postId)) {
    return notFound()
  }

  let posts = await PostService.getAllPosts()
  posts = posts.slice(
    +params.page * totalPages - totalPages,
    +params.page * totalPages
  )

  return <SharePage posts={posts} params={params} />
}

export default page
