import { MOCK_POST_LIST } from '@/mock/post'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Post from './index'

describe('<Post/>', () => {
  const mockPost = MOCK_POST_LIST[0]

  it('renders the post component', () => {
    render(<Post post={mockPost} />)

    expect(screen.getByText(mockPost.caption)).toBeInTheDocument()
    expect(screen.getByTestId('like')).toBeInTheDocument()
  })

  it('should change icon when liked button is clicked', async () => {
    const user = userEvent.setup()

    render(<Post post={mockPost} />)

    const likeButton = screen.getByTestId('like-button')

    await user.click(likeButton)

    expect(screen.getByTestId('liked')).toBeInTheDocument()
  })

  it('should change icon when liked button is clicked twice', async () => {
    const user = userEvent.setup()

    render(<Post post={mockPost} />)

    const likeButton = screen.getByTestId('like-button')

    await user.click(likeButton)
    await user.click(likeButton)

    expect(screen.getByTestId('like')).toBeInTheDocument()
  })

  it('should focus on comment input when comment button is clicked', async () => {
    const user = userEvent.setup()

    render(<Post post={mockPost} />)

    const commentButton = screen.getByTestId('comment-button')

    await user.click(commentButton)

    expect(screen.getByPlaceholderText('Add a comment...')).toHaveFocus()
  })

  it('should show comment when clicked view all comment', async () => {
    const user = userEvent.setup()

    render(<Post post={mockPost} />)

    const viewAllCommentButton = screen.getByText(
      `View all ${mockPost.comments.length} comments`
    )

    await user.click(viewAllCommentButton)

    expect(screen.getByText(mockPost.comments[1].comment)).toBeInTheDocument()
  })

  it('should create new comment when comment is posted', async () => {
    const user = userEvent.setup()

    render(<Post post={mockPost} />)

    const commentInput = screen.getByPlaceholderText('Add a comment...')

    fireEvent.change(commentInput, {
      target: { value: 'This is a new comment' },
    })

    const postCommentButton = screen.getByRole('button', { name: 'Send' })

    await user.click(postCommentButton)

    const viewAllCommentButton = screen.getByText(
      `View all ${mockPost.comments.length + 1} comments`
    )

    expect(viewAllCommentButton).toBeInTheDocument()

    await user.click(viewAllCommentButton)

    expect(screen.getByText('This is a new comment')).toBeInTheDocument()
  })
})
