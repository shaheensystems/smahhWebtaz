import React from 'react'
import { Button } from './ui/button'

const AnyQuestion = () => {
  return (
    <div className="flex flex-col max-w-[1260px] py-32 w-full items-center gap-3">
      <h2 className='text-5xl font-semibold leading-none'>Any Question?</h2>
      <p className='pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <Button>Contact Us</Button>
    </div>
  )
}

export default AnyQuestion