import React from 'react'
import Image from 'next/image'
import { Separator } from './ui/separator'
import { Button } from './ui/button'

const PageMainContent = () => {
  return (
    <div className="flex flex-col px-10 w-full items-center">
      <div className="flex flex-col items-start max-w-[1366px] w-full px-5 py-20 gap-3">
        <h1 className='text-5xl font-light'>Cybersecurity Audit</h1>
        <Separator className='bg-midnight-300 h-[3px] mb-10' />
        <div className='flex flex-row justify-between gap-5'>
          <div className='w-1/2'>
            <h3 className='text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
            <p className='pt-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className='w-1/2'>
            <Image src='/assets/home-service1.png' alt='image' width={500} height={200} />
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center px-5 py-20 gap-3'>
        <h3 className='text-2xl font-semibold pb-6'>Cyber Audit Process</h3>
        <div className='w-3/5'>
          <h4>Step1: Determine Scope</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        
        <div className="flex flex-col max-w-[1366px] py-32 w-full items-center gap-3">
          <h2 className='text-5xl font-semibold leading-none'>Any Question?</h2>
          <p className='pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Button>Contact Us</Button>
        </div>
      </div>
    </div>
  )
}

export default PageMainContent