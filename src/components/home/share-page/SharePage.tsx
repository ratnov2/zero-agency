import style from '@/components/home/share-page/sharePage.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { Pagination } from '@/components/home/pagination/Pagination'
import { IPost } from '@/services/post-service/types'
import { FC } from 'react'
import img from '../../../../public/img.jpg'

interface ISharePage {
  params?: { page: string }
  posts: IPost[]
}

export const SharePage: FC<ISharePage> = ({
  params = { page: '1' },
  posts,
}) => {
  return (
    <>
      <div className={style.cardContainer}>
        {posts.map((post, index) => (
          <Link href={`/post/${post.id}`} className={style.card} key={index}>
            <div className={style.cardHeader}>
              <Image
                src={
                  img
                }
                alt={`post by ${post.userId}`}
                // width={400}
                // height={400}
                priority
                placeholder={'blur'}
                blurDataURL={'/blur.jpg'}
              />
            </div>
            <div className={style.cardBody}>
              <span className={`${style.tag} ${style.tagTechnology}`}>
                Technology {post.userId}
              </span>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
              <div className={style.user}>
                <Image
                  src={
                    'https://cs13.pikabu.ru/avatars/1873/x1873132-1972677953.png'
                  }
                  alt={`post by ${post.userId}`}
                  width={40}
                  height={40}
                />
                <div className={style.userInfo}>
                  <h5>Username {post.id}</h5>
                  <small>2h ago</small>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination currentPage={+params.page} />
    </>
  )
}
