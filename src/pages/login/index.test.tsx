import { createMockRouter, renderWithRouter } from '@/utils/test-utils'
import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginPage from './index'

describe('LoginPage', () => {
  const router = createMockRouter({ push: jest.fn() })

  beforeEach(() => {
    jest.restoreAllMocks()
    localStorage.clear()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render the login form', () => {
    renderWithRouter(<LoginPage />)

    const emailInput = screen.getByPlaceholderText('Email address')
    const passwordInput = screen.getByPlaceholderText('Password')
    const loginButton = screen.getByText('Log In')
    const guestLoginButton = screen.getByText('Guest Login')

    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(loginButton).toBeInTheDocument()
    expect(guestLoginButton).toBeInTheDocument()
  })

  it('should show error messages when email and password are invalid', async () => {
    const user = userEvent.setup()
    renderWithRouter(<LoginPage />)

    const emailInput = screen.getByPlaceholderText('Email address')
    const passwordInput = screen.getByPlaceholderText('Password')
    const loginButton = screen.getByText('Log In')

    fireEvent.change(emailInput, { target: { value: 'invalid@email' } })
    fireEvent.change(passwordInput, { target: { value: 'short' } })
    await user.click(loginButton)

    const emailError = screen.getByText('Please use a valid email address!')
    const passwordError = screen.getByText(
      'Password must contain at least one lowercase and uppercase letter'
    )

    expect(emailError).toBeInTheDocument()
    expect(passwordError).toBeInTheDocument()
  })

  it('should redirect to home page when login is successful', async () => {
    const user = userEvent.setup()

    renderWithRouter(<LoginPage />, { router })

    const emailInput = screen.getByPlaceholderText('Email address')
    const passwordInput = screen.getByPlaceholderText('Password')
    const loginButton = screen.getByText('Log In')

    fireEvent.change(emailInput, {
      target: { value: 'valid-email@example.com' },
    })
    fireEvent.change(passwordInput, { target: { value: 'Valid-password123' } })

    await user.click(loginButton)

    expect(localStorage.getItem('loggedIn')).toBe('true')
    expect(router.push).toBeCalledWith('/')
  })

  it('should set guest flag in local storage when guest login button is clicked', async () => {
    const user = userEvent.setup()

    renderWithRouter(<LoginPage />, { router })

    const guestLoginButton = screen.getByText('Guest Login')

    await user.click(guestLoginButton)

    expect(localStorage.getItem('guest')).toBe('true')
    expect(router.push).toBeCalledWith('/')
  })
})
