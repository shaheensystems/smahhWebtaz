import ResourceCard from '@/components/ResourceCard'
import React from 'react'
import { contentIndexes } from '@/data/data'

const ResourceCards = () => {
  return (
    <div className='flex flex-col items-center w-full pt-32 bg-white'>
      <h2 className='text-3xl font-semibold text-center pb-6'>More Resources</h2>
      <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className="flex flex-col lg:flex-row max-w-[1260px] pt-12 pb-5 w-full justify-between gap-14">
          {contentIndexes[1]?.links.slice(0, 3).map((linkItem, index) => (
            <div key={index} className='w-full lg:w-1/3 shadow-lg'>
                <ResourceCard linkItem={linkItem} />       
            </div>
          ))}
        </div>
    </div>
  )
}

export default ResourceCards