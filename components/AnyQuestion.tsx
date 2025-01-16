import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const AnyQuestion = () => {
  return (
    <div className="flex flex-col max-w-[1260px] py-32 w-full items-center gap-3">
      <h2 className='text-3xl md:4xl lg:text-5xl font-semibold leading-none'>Any Questions?</h2>
      <p className='pb-3 text-center'>Have a query or need assistance? Our team is here to help, ensuring your questions are addressed with clarity and precision. 
        <span className='inline md:block'> 
          Reach out today for expert support tailored to your needs.
        </span>
      </p>
      <Button asChild>
        <Link href='/contact'>Contact Us</Link>
      </Button>
    </div>
  )
}

export default AnyQuestion
