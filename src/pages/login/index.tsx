import InstagramIcon from '@/components/icons/instagram'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC, FormEvent, MouseEvent, useState } from 'react'
import { validateEmail, validatePassword } from './utils'

const LoginPage: FC = () => {
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
        <link rel='icon' href='/instagram.png' />
      </Head>
      <div className='flex min-h-[100vh] w-full items-center justify-center md:bg-white-light'>
        <div className='flex max-w-[350px] flex-grow flex-col items-center justify-center bg-white md:border md:border-gray-light'>
          <div className='my-10 h-auto w-[175px]'>
            <InstagramIcon />
          </div>

          <form onSubmit={handleLogin} className='flex flex-col'>
            <input
              className=' w-full border border-gray-light bg-white-light px-2 py-[7px] text-sm focus:outline-none'
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
            <p className='h-[20px] max-w-[220px] text-xs text-red'>
              {emailFormErrors}
            </p>
            <input
              className='w-full border border-gray-light bg-white-light px-2 py-[7px] text-sm focus:outline-none'
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
            <p className='h-[20px] max-w-[220px] text-xs text-red'>
              {passwordFormErrors}
            </p>
            <button
              className={`${
                isLoginButtonDisabled
                  ? 'bg-blue'
                  : 'pointer-events-none cursor-default bg-blue-light'
              } my-5 w-full rounded px-2 py-1 text-sm font-semibold text-white`}
              type='submit'
            >
              Log In
            </button>
            <div className='mb-5 flex h-0 items-center justify-center'>
              <div className='border-stone-300 w-full border-b border-gray-light' />
              <p className='mx-2 text-sm font-semibold text-gray'>OR</p>
              <div className='border-stone-300 w-full border-b border-gray-light' />
            </div>
            <button
              className='mb-10 w-full rounded bg-blue px-2 py-1 text-sm font-semibold text-white'
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
