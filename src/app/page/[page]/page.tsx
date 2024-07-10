import { PostService } from '@/services/post-service/post-service'
import { SharePage } from '@/components/home/share-page/SharePage'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { TOTAL_PAGES } from '@/constants/pagination.constants'
import { getPostById } from '@/components/home/request/post-by-page'

export const dynamicParams = true

export async function generateMetadata({ params }: IParams): Promise<Metadata> {
  return {
    title: `Post on page ${+params.page * TOTAL_PAGES} - ${
      +params.page * TOTAL_PAGES + TOTAL_PAGES
    }`,
    description:
      'Discover a wide range of interesting articles on our blog page. Browse the latest posts, easily navigate between pages, and find content that suits your interests.',
  }
}

const page = async ({ params }: IParams) => {
  const postId = parseInt(params.page, 10)
  if (isNaN(postId)) {
    return notFound()
  }

  const posts = await getPostById(params.page)

  return <SharePage posts={posts} params={params} />
}

interface IParams {
  params: { page: string }
}

export default page
