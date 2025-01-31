import { Post } from '@/components/post/Post'
import { PostService } from '@/services/post-service/post-service'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const post = await PostService.getPostById(params.id)

  return {
    title: `Post - ${post.title}`,
    description: post.body,
  }
}
const postPage = async ({ params }: { params: { id: string } }) => {
  const postId = parseInt(params.id, 10)
  if (isNaN(postId)) {
    return notFound()
  }

  const post = await PostService.getPostById(params.id)

  return <Post post={post} />
}

export async function generateStaticParams() {
  const posts = await PostService.getAllPosts()

  return posts.map((post) => ({
    id: post.id.toString(),
  }))
}
export default postPage
