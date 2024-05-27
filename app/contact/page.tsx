import React from 'react'
import PageTitle from '@/components/PageTitle'
import Image from 'next/image'
import ContactForm from './ContactForm'


const contactIcons: { title: string; description: string; image: string }[] = [
  { title: "Phone",
    description: '+64202594363',
    image: '/assets/icon-phone.png',
  },
  { title: "Email",
    description: 'info@smahh.com',
    image: '/assets/icon-mail.png',
  },
  { title: "Location",
    description: 'Wellington, New Zealand',
    image: '/assets/icon-location.png',
  },
]

const Contact = () => {
  return (
    <>
      <PageTitle
        title="Contact Us"
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
        <div className="flex flex-col px-5 md:px-10 py-5 w-full items-center bg-gray-200">

          <div className='flex flex-col md:flex-row items-start max-w-[1260px] pt-5 md:pt-10 mb-14 pb-5 gap-3 xl:gap-10 w-full'>
            <div className='w-full lg:w-1/2 xl:w-1/3 pb-5 md:pb-0 pr-2'>
              <h4 className='text-2xl font-semibold pb-4'>We’d love to hear from you!</h4>
              <p className='pb-3'>Ready to help you, for more information about our services, please call  or message us. We will get in touch as soon as possible.</p>
              {contactIcons?.map((item, index) => (
                <div key={index} className='flex flex-row pt-6'>
                  <Image src={item.image} alt={`${item.title} Icon`} width={40} height={50} />
                  <p className='text-lg font-semibold leading-[34px] inline pl-2 '>{item.description}</p>
                </div>
              ))}
            </div>

            <div className='w-full lg:w-1/2 xl:w-2/3 xl:ml-24 h-[32.5rem] sm:h-[34rem] md:h-[28rem] xl:md:h-[36rem] relative bg-pink-200'>
              <div className='md:absolute md:-top-20 xl:-top-40 md:rigt-0 w-full'>
                <ContactForm />
              </div>
            </div>
          </div>
          
     </div>
    </>
  )
}

export default Contact