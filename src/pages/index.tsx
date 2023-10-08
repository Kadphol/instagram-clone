import Home from '@/components/home'
import SideMenu from '@/components/side-menu'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!localStorage.getItem('loggedIn') && !localStorage.getItem('guest')) {
        router.push('/login')
      }
    }
  }, [router])

  return (
    <main className='text-dark-light h-screen overflow-y-scroll bg-white-light'>
      <Head>
        <title>Instagram</title>
        <link rel='icon' href='/instagram.png' />
      </Head>
      <SideMenu />
      <Home />
    </main>
  )
}
