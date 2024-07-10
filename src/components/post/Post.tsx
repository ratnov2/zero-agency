import { IPost } from '@/services/post-service/types'
import { FC } from 'react'
import style from './post.module.scss'
import Image from 'next/image'

interface IPostComp {
  post: IPost
}
export const Post: FC<IPostComp> = ({ post }) => {
  return (
    <div className={style.singlePost}>
      <div className={style.headerImage}>
        <Image
          src={
            'https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg'
          }
          alt={`post by ${post.userId}`}
          width={400}
          height={400}
        />
      </div>
      <div className={style.content}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <div className={style.user}>
          <Image
            src={'https://cs13.pikabu.ru/avatars/1873/x1873132-1972677953.png'}
            alt={`post by ${post.userId}`}
            width={40}
            height={40}
          />
          <div className={style.userInfo}>
            <h5>Username</h5>
            <small>2h ago</small>
          </div>
        </div>
      </div>
    </div>
  )
}
