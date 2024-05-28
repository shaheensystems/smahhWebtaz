import Image from 'next/image'
import React from 'react'
import { ContentItem } from '@/interface/content'
// import ServiceImage1 from '../public/assets/home-service1.png'

interface serviceItemProps {
  services: ContentItem
}

const HomeServiceItems = ({services}: serviceItemProps) => {
  return (
    <>
      <div className='w-full h-auto mb-5'>
        {services.image? 
          <Image
            alt='ervice image'
            src={services.image}
            width={500}
            height={300}
            style={{
              maxWidth:'100%',
              height:'auto',
              objectFit:'cover'
            }} /> 
           : null}
      </div>
      <h3 className='text-2xl font-light text-white pb-3'>{services.title}</h3>
      <p className='text-base text-white'>{services.subTitle}</p>
    </>
  )
}

export default HomeServiceItems