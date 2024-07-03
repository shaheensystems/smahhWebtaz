import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/assets/smahh-logo.png'
import PhoneIcon from '@/public/assets/icon-phone.png'
import { NavMenu } from './NavMenu'

const NavDesktop = () => {
  return (
    <div className='flex flex-row w-full justify-center'>
      <div className='flex flex-row px-10 py-2 justify-between w-full'>
        <div>
          <Link href="/">
            <Image 
            src={logo}
            width={230}
            priority
            alt="Smahh Logo"
            />
          </Link>
        </div>
        <div className='flex flex-row'>
          <NavMenu />
          <div className='w-8 h-8 pt-1.5 ml-5'>
            <Image src={PhoneIcon} alt='Phone Icon' />
          </div>
          
          <p className='font-semibold leading-[42px]'>+64202594363</p>
        </div>
      </div>
    </div>
  )
}

export default NavDesktop