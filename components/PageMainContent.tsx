import React from 'react'
import Image from 'next/image'
import { Separator } from './ui/separator'
import { ContentItem } from '@/interface/content'

interface PageMainContentProps{
  content: ContentItem
}

const PageMainContent = ( {content} : PageMainContentProps) => {
  return (
    <div className="flex flex-col px-5 md:px-10 w-full items-center">
      <div className="flex flex-col items-start max-w-[1260px] w-full py-10 md:py-20 gap-3">
        <h1 className='text-2xl sm:text-3xl md:text-5xl font-light'>{content.title}</h1>
        <Separator className='bg-midnight-300 h-[2px] md:h-[3px] mb-3 sm:mb-5 md:mb-10' />

        <div className='flex flex-col-reverse md:flex-row justify-between gap-5 md:gap-20 lg:gap-10'>
          <div className='w-full sm:w-4/5 lg:w-1/2'>
            <h3 className='text-2xl'>{content.subTitle}</h3>
            <p className='pt-3 md:pt-5'>{content.description}</p>
          </div>
          <div className='w-full sm:2/5 lg:w-1/2'>
            {content.image? 
              <Image src={content.image} alt='image' width={500} height={200} className='lg:float-right xl:float-left' />
              : <p>No image</p>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageMainContent