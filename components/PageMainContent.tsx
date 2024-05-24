import React from 'react'
import Image from 'next/image'
import { Separator } from './ui/separator'

export interface MainContent {
  title: string;
  clarification: string;
  description: string;
  image: string;
}

interface PageMainContentProps{
  content: MainContent
}

const PageMainContent = ( {content} : PageMainContentProps) => {
  return (
    <div className="flex flex-col px-10 w-full items-center">
      <div className="flex flex-col items-start max-w-[1366px] w-full px-5 py-20 gap-3">
        <h1 className='text-5xl font-light'>{content.title}</h1>
        <Separator className='bg-midnight-300 h-[3px] mb-10' />
        <div className='flex flex-row justify-between gap-5'>
          <div className='w-1/2'>
            <h3 className='text-2xl'>{content.clarification}</h3>
            <p className='pt-5'>{content.description}</p>
          </div>
          <div className='w-1/2'>
            <Image src={content.image} alt='image' width={500} height={200} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageMainContent