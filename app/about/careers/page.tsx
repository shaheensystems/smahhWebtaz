import React from 'react'
import Image from 'next/image'
import PageTitle from '@/components/PageTitle'
import { Separator } from '@/components/ui/separator'
import AnyQuestion from '@/components/AnyQuestion'
import CareerImage from '@/public/assets/career.png'

const Careers = () => {
  return (
    <>
      <PageTitle
        title="Careers"
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.' />

      <div className="flex flex-col px-5 md:px-10 py-0 md:py-12 w-full items-center">
          <div className="max-w-[1260px] md:px-5 py-10 md:py-14 w-full">
          <h4 className='text-lg font-medium text-midnight-300 pb-2 md:pb-5'>Sybersecurity</h4>
          <h2 className='text-2xl md:text-3xl lg:text-4xl pb-2 md:pb-5'>Sybersecurity Assistant</h2>

          <Separator className='bg-midnight-300 h-[3px] mb-8 md:mb-10' />

          <div className='flex flex-col md:flex-row gap-10 xl:gap-5'>
            <div className='w-full md:w-2/5 xl:w-1/4'>
              <Image src={CareerImage} alt='Testimonial Image' width={260} height={200} />
            </div>
            <div className='w-full md:w-3/5 xl:w-4/5'>
              <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Careers