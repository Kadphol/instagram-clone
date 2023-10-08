import { Comment, Post } from '@/types'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Image from 'next/image'
import { FC, useRef, useState } from 'react'
import { RiHeartFill, RiHeartLine } from 'react-icons/ri'
import { TbMessageCircle } from 'react-icons/tb'

interface PostProps {
  post: Post
}

dayjs.extend(relativeTime)

const Post: FC<PostProps> = ({ post }) => {
  const commentInputRef = useRef<HTMLInputElement>(null)
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [comments, setComments] = useState<Omit<Comment, 'id'>[]>(post.comments)
  const [comment, setComment] = useState<string>('')
  const [isCommentDisplay, setIsCommentDisplay] = useState<boolean>(false)

  const handleLikeClick = () => {
    setIsLiked((prev: boolean) => !prev)
  }

  const handlePostComment = () => {
    if (comment === '') return
    setComments((prev) => [
      ...prev,
      {
        name: 'Guest',
        comment,
        timestamp: new Date().toISOString(),
      },
    ])
    setComment('')
  }

  return (
    <div
      key={post.id}
      className='my-4 flex w-full flex-col items-center overflow-hidden rounded-lg border-gray-light sm:border'
    >
      <div className='ml-4 flex w-full items-center justify-start gap-2 py-4'>
        <Image
          src={post.user.image}
          alt='user image'
          width={32}
          height={32}
          className='rounded-full'
        />
        <span>{post.user.name}</span>
      </div>
      <Image
        src={post.images}
        alt='post image'
        className='h-auto w-full'
        width='0'
        height='0'
        sizes='100vw'
      />

      <div className='flex w-full items-center gap-2 p-4'>
        <button onClick={handleLikeClick} data-testid='like-button'>
          {isLiked ? (
            <RiHeartFill size='1.5rem' color='red' data-testid='liked' />
          ) : (
            <RiHeartLine size='1.5rem' data-testid='like' />
          )}
        </button>
        <button
          onClick={() => commentInputRef.current?.focus()}
          data-testid='comment-button'
        >
          <TbMessageCircle size='1.5rem' />
        </button>
      </div>
      <div className='flex w-full flex-col gap-2 px-4 pb-4'>
        <div className='flex w-full justify-items-start text-sm'>
          <span>
            Liked by <span className='font-bold'>{post.likes[0]} </span>
            {post.likes.length > 1 && (
              <span>
                and
                <span className='font-bold'>
                  {` ${post.likes.length - 1 + Number(isLiked)} others`}
                </span>
              </span>
            )}
          </span>
        </div>
        {post.caption && (
          <div className='flex w-full justify-items-start text-sm'>
            <span>
              <span className='font-bold'>{post.user.name} </span>
              {post.caption}
            </span>
          </div>
        )}
        {comments.length > 0 && (
          <div className='flex w-full flex-col justify-items-start gap-1 text-sm'>
            <span className='flex flex-col'>
              <span>
                <span className='font-bold'>{comments[0].name} </span>
                {comments[0].comment}
              </span>
              <span className='text-gray'>
                {dayjs(new Date(comments[0].timestamp)).fromNow()}
              </span>
            </span>
            {isCommentDisplay &&
              comments.slice(1).map((comment) => (
                <span key={comment.timestamp} className='flex flex-col'>
                  <span>
                    <span className='font-bold'>{comment.name} </span>
                    {comment.comment}
                  </span>
                  <span className='text-gray'>
                    {dayjs(new Date(comment.timestamp)).fromNow()}
                  </span>
                </span>
              ))}
            {comments.length > 1 && !isCommentDisplay && (
              <span
                className='cursor-pointer text-gray'
                onClick={() => setIsCommentDisplay(true)}
              >
                View all {comments.length} comments
              </span>
            )}
          </div>
        )}
        <div className='flex w-full justify-items-start text-sm'>
          <span className='text-gray'>
            {dayjs(new Date(post.timestamp)).format('MMMM D, YYYY')}
          </span>
        </div>
      </div>
      <div className='flex w-full justify-between border-t border-gray-light p-4 text-sm '>
        <input
          className='w-full bg-white-light focus:outline-none'
          type='text'
          value={comment}
          onChange={(e) => {
            setComment(e.target.value)
          }}
          placeholder='Add a comment...'
          ref={commentInputRef}
        />
        <button className='text-blue' onClick={handlePostComment}>
          Send
        </button>
      </div>
    </div>
  )
}

export default Post
