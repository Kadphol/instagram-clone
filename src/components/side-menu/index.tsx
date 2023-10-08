import Popover from '@mui/material/Popover'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { BsPerson } from 'react-icons/bs'
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
    <aside className='flex h-full w-16 flex-col items-center overflow-y-auto border-r border-gray-light bg-white px-3 py-5'>
      <div className='mt-3 pb-6'>
        <Link href='/'>
          <FaInstagram size='1.5rem' />
        </Link>
      </div>
      <div className='my-2 flex flex-col py-3'>
        <div className='my-2 py-3'>
          <Link href='/'>
            <GoHomeFill size='1.5rem' />
          </Link>
        </div>
        <div className='my-2 py-3'>
          <Link href='/'>
            <FiSearch size='1.5rem' />
          </Link>
        </div>
        <div className='my-2 py-3'>
          <Link href='/'>
            <ReelsIcon />
          </Link>
        </div>
        <div className='my-2 py-3'>
          <Link href='/'>
            <RiMessengerLine size='1.5rem' />
          </Link>
        </div>
        <div className='my-2 py-3'>
          <Link href='/'>
            <FiHeart size='1.5rem' />
          </Link>
        </div>
        <div className='my-2 py-3'>
          <Link href='/'>
            <BsPerson size='1.5rem' />
          </Link>
        </div>
      </div>
      <div className='mt-auto flex'>
        <div
          className='my-2 py-3'
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
