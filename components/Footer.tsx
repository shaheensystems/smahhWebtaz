import React from 'react'
import Image from 'next/image'
import Logo from '../public/assets/smahhLogo-footer.png'
import Link from 'next/link'
import Linkedin from '../public/assets/linkedin.png'
import { contentIndexes } from '@/data/data'

const Footer = () => {
  return (
    <div className='flex flex-row bg-midnight-900 w-full py-24 px-5 relative'>
      <div className='w-2/5'>
        <Image src={Logo} alt='Smahh Logo' />
        <div className='absolute bottom-5 left-5'>
          <Image src={Linkedin} alt='Linkedin Logo' />
          <p className='text-white pt-3'>© 2024 Smahh LTD.  All Rights Reserved</p>
        </div>
      </div>

      <div className='w-3/5 flex flex-row justify-around'>
        {contentIndexes?.map((item, index) => (
          <div key={index} className='1/4'>
            <h4 className="text-2xl text-white pb-4">{item.title}</h4>
            {item.links?.map((link, linkIndex) => (
              <Link
                key={linkIndex}
                href={link.href}
                className="block text-white font-extralight py-1 hover:text-midnight-300"
              >
                {link.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer