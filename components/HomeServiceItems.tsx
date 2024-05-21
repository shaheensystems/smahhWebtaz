import Image from 'next/image'
import React from 'react'
// import ServiceImage1 from '../public/assets/home-service1.png'

interface serviceItemProps {
  services: {
    title: string
    content: string
    image: string
  }[]
}

const HomeServiceItems = ({services}: serviceItemProps) => {
  return (
    <>
      <h2 className='text-3xl text-white pb-6'>Smahh Cybersecurity Services</h2>
      <div className='flex flex-row w-full justify-start gap-12'>
        { services.map((item, index) => (
          <div key={index} className='w-1/4'>
            <div className='w-full h-auto mb-5'>
              <Image
                alt='service image'
                src={item.image}
                width={500}
                height={300}
                style={{
                  maxWidth:'100%',
                  height:'auto',
                  objectFit:'cover'
                }} />
            </div>
          <h3 className='text-2xl font-light text-white pb-3'>{item.title}</h3>
          <p className='text-base text-white'>{item.content}</p>
        </div>
        ))}
        
      </div>
    </>
  )
}

export default HomeServiceItems