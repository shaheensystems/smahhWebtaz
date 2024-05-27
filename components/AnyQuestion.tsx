import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const AnyQuestion = () => {
  return (
    <div className="flex flex-col max-w-[1260px] py-32 w-full items-center gap-3">
      <h2 className='text-3xl md:4xl lg:text-5xl font-semibold leading-none'>Any Question?</h2>
      <p className='pb-3 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        <span className='inline md:block'> 
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </p>
      <Button asChild>
        <Link href='/contact'>Contact Us</Link>
      </Button>
    </div>
  )
}

export default AnyQuestion