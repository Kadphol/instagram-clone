import { MOCK_POST_LIST } from '@/mock/post'
import { FC } from 'react'
import Post from './post'

const Home: FC = () => {
  return (
    <div className='m-auto flex w-[calc(100%-72px)] flex-col justify-center pb-16 sm:ml-auto lg:justify-center'>
      <div className='mx-auto max-w-[470px]'>
        {MOCK_POST_LIST.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Home
