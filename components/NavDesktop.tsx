import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/smahhLogo.png'
import { Button } from './ui/button'
import { NavMenu } from './NavMenu'


const NavDesktop = () => {
  return (
    <div className='flex flex-row w-full justify-center'>
      <div className='flex flex-row px-5 py-2 justify-between w-full max-w-[1560px]'>
        <div>
          <Link href="/">
            <Image 
            src={logo}
            width={250}
            priority
            alt="Smahh Logo"
            />
          </Link>
        </div>
        <div className='flex flex-row'>
          <NavMenu />
          <p>+64202594363</p>
        </div>
      </div>
    </div>
  )
}

export default NavDesktop