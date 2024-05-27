import React from 'react'
import Image from 'next/image'
import Logo from '../public/assets/smahhLogo-footer.png'
import Link from 'next/link'
import Linkedin from '../public/assets/linkedin.png'
import { contentIndexes } from '@/data/data'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap 
      bg-midnight-900 w-full py-5 md:py-10 xl:py-20 px-5 md:px-10 relative'>
      <div className='w-full xl:w-2/5 pb-5 md:pb-10 xl:pb-0'>
        <Image src={Logo} alt='Smahh Logo' />
      </div>

      <div className='w-full xl:w-3/5 flex flex-col md:flex-row justify-between xl:justify-around pb-32'>
        {contentIndexes?.map((item, index) => (
          <div key={index}>
            <h4 className="text-xl md:2xl text-white pt-10 md:pt-0 pb-4">{item.title}</h4>
            {item.links?.map((link, linkIndex) => (
              <Link
                key={linkIndex}
                href={link.href}
                className="block text-white font-extralight py-2 lg:py-1 hover:text-midnight-300"
              >
                {link.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className='absolute bottom-5 md:bottom-10 lefy-5 md:left-10'>
        <Image src={Linkedin} alt='Linkedin Logo' />
        <p className='text-xs text-white pt-5'>© 2024 Smahh LTD.  All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer