import Popover from '@mui/material/Popover'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FiHeart, FiSearch } from 'react-icons/fi'
import { GoHomeFill } from 'react-icons/go'
import { RiMessengerLine } from 'react-icons/ri'
import { RxHamburgerMenu } from 'react-icons/rx'
import ReelsIcon from '../icons/reels'

const SideMenu: FC = () => {
  const router = useRouter()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleLogout = () => {
    localStorage.removeItem('loggedIn')
    localStorage.removeItem('guest')
    setIsOpen(false)
    router.push('/login')
  }

  return (
    <aside className='fixed flex w-full flex-row items-center overflow-y-auto border-b border-gray-light bg-white px-3 py-5 sm:h-full sm:w-16 sm:flex-col sm:border-r'>
      <div className='ml-3 pr-6 sm:ml-0 sm:mt-3 sm:pb-6 sm:pr-0'>
        <Link href='/'>
          <FaInstagram size='1.5rem' />
        </Link>
      </div>
      <div className='mx-2 flex flex-row px-3 max-[425px]:hidden sm:mx-0 sm:my-2 sm:flex-col sm:px-3 sm:py-3'>
        <div className='mx-2 px-3 sm:mx-0 sm:my-2 sm:px-0 sm:py-3'>
          <Link href='/'>
            <GoHomeFill size='1.5rem' />
          </Link>
        </div>
        <div className='mx-2 px-3 sm:mx-0 sm:my-2 sm:px-0 sm:py-3'>
          <Link href='/'>
            <FiSearch size='1.5rem' />
          </Link>
        </div>
        <div className='mx-2 px-3 sm:mx-0 sm:my-2 sm:px-0 sm:py-3'>
          <Link href='/'>
            <ReelsIcon />
          </Link>
        </div>
        <div className='mx-2 px-3 sm:mx-0 sm:my-2 sm:px-0 sm:py-3'>
          <Link href='/'>
            <RiMessengerLine size='1.5rem' />
          </Link>
        </div>
        <div className='mx-2 px-3 sm:mx-0 sm:my-2 sm:px-0 sm:py-3'>
          <Link href='/'>
            <FiHeart size='1.5rem' />
          </Link>
        </div>
        <div className='mx-2 px-3 sm:mx-0 sm:my-2 sm:px-0 sm:py-3'>
          <Link href='/'>
            <Image
              src='https://picsum.photos/24/24'
              width='24'
              height='24'
              alt='profile image'
              className='rounded-full'
            />
          </Link>
        </div>
      </div>
      <div className='ml-auto flex sm:mt-auto'>
        <div
          className='mx-2 px-3 sm:mx-0 sm:my-2 sm:px-0 sm:py-3'
          onClick={(event) => {
            setIsOpen(true)
            setAnchorEl(event.currentTarget)
          }}
          data-testid='menu'
        >
          <RxHamburgerMenu size='1.5rem' />
        </div>
      </div>
      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        onClose={() => setIsOpen(false)}
      >
        <div className='w-32 rounded bg-white'>
          <button className='w-full p-2 text-left' onClick={handleLogout}>
            Log out
          </button>
        </div>
      </Popover>
    </aside>
  )
}

export default SideMenu
