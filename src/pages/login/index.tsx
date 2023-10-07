import InstagramIcon from '@/components/icons/instagram'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormEvent, MouseEvent, useState } from 'react'
import { validateEmail, validatePassword } from './utils'

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [emailFormErrors, setEmailFormErrors] = useState('')
  const [passwordFormErrors, setPasswordFormErrors] = useState('')
  const router = useRouter()

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const emailError = validateEmail(email)
    const passwordError = validatePassword(password)

    if (emailError || passwordError) {
      setEmailFormErrors(emailError)
      setPasswordFormErrors(passwordError)
      return
    }

    localStorage.setItem('loggedIn', 'true')
    router.push('/')
  }

  const handleGuestLogin = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    localStorage.setItem('guest', 'true')
    router.push('/')
  }

  const isLoginButtonDisabled =
    emailFormErrors === '' &&
    passwordFormErrors === '' &&
    email !== '' &&
    password !== ''

  return (
    <div>
      <Head>
        <title>Instagram Login</title>
      </Head>
      <div className='md:bg-white-light flex min-h-[100vh] w-full items-center justify-center'>
        <div className='md:border-gray-light flex max-w-[350px] flex-grow flex-col items-center justify-center bg-white md:border'>
          <div className='my-10 h-auto w-[175px]'>
            <InstagramIcon />
          </div>

          <form onSubmit={handleLogin} className='flex flex-col'>
            <input
              className=' bg-white-light border-gray-light w-full border px-2 py-[7px] text-sm focus:outline-none'
              type='email'
              id='signInPageEmail'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setEmailFormErrors('')
              }}
              placeholder='Email address'
              required
            />
            <p className='text-red h-[20px] max-w-[220px] text-xs'>
              {emailFormErrors}
            </p>
            <input
              className='bg-white-light border-gray-light w-full border px-2 py-[7px] text-sm focus:outline-none'
              type='password'
              id='signInPagePassword'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setPasswordFormErrors('')
              }}
              placeholder='Password'
              required
            />
            <p className='text-red h-[20px] max-w-[220px] text-xs'>
              {passwordFormErrors}
            </p>
            <button
              className={`${
                isLoginButtonDisabled
                  ? 'bg-blue'
                  : 'bg-blue-light pointer-events-none cursor-default'
              } my-5 w-full rounded px-2 py-1 text-sm font-semibold text-white`}
              type='submit'
            >
              Log In
            </button>
            <div className='mb-5 flex h-0 items-center justify-center'>
              <div className='border-gray-light w-full border-b border-stone-300' />
              <p className='text-gray mx-2 text-sm font-semibold'>OR</p>
              <div className='border-gray-light w-full border-b border-stone-300' />
            </div>
            <button
              className='bg-blue mb-10 w-full rounded px-2 py-1 text-sm font-semibold text-white'
              onClick={handleGuestLogin}
            >
              Guest Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
