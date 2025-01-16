import React from 'react'
import Image from 'next/image'
import PageTitle from '@/components/PageTitle'
import { Separator } from '@/components/ui/separator'
import AnyQuestion from '@/components/AnyQuestion'

const testimonials: { title: string; category: string; description: string; image: string; caption: string | undefined }[] = [
  { 
    title: 'Comprehensive Cybersecurity Services',
    category: 'Cybersecurity Audit',
    description: 'We provide detailed and proactive cybersecurity audits to safeguard your business from potential threats. Our services ensure that your organisation remains compliant with security standards while minimising risks.',
    image: '/assets/testimonial1.png',
    caption: 'John From Whitecliffe'
  },
  { 
    title: 'Reliable IT Support',
    category: 'IT Support',
    description: 'Our IT support team ensures that your business operates smoothly with minimal disruptions. From troubleshooting to ongoing support, we are here to assist with all your IT needs.',
    image: '/assets/testimonial2.png',
    caption: 'Whitecliffe'
  },
  { 
    title: 'Secure Cloud Solutions',
    category: 'Cloud Security',
    description: 'Our cloud security solutions provide your organisation with robust protection for data and systems in the cloud. We ensure that your operations are secure, scalable, and efficient.',
    image: '/assets/testimonial3.png',
    caption: undefined
  },
];

const Testimonials = () => {
  return (
    <>
      <PageTitle
        title="Testimonials"
        description="Hear from our clients about how our tailored cybersecurity and IT solutions have supported their business goals." />

      <div className="flex flex-col px-5 md:px-10 py-0 md:py-12 w-full items-center">
        {testimonials?.map((item, index) => (
          <div key={index} className="max-w-[1260px] md:px-5 py-10 md:py-14 w-full">
            <h4 className='text-lg font-medium text-midnight-300 pb-2 md:pb-3'>{item.category}</h4>
            <h2 className='text-2xl md:text-3xl lg:text-4xl pb-2 md:pb-5'>{item.title}</h2>

            <Separator className='bg-midnight-300 h-[3px] mb-8 md:mb-10' />

            <div className='flex flex-col md:flex-row gap-3 md:gap-10 xl:gap-5'>
              <div className='w-full md:w-2/5 xl:w-1/4'>
                <Image src={item.image} alt='Testimonial Image' width={260} height={200} />
                <p className='text-sm font-semibold pt-2'>{item.caption}</p>
              </div>
              <div className='w-full md:w-3/5 xl:w-4/5'>
                <p className='text-lg'>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
        <AnyQuestion />
      </div>
    </>
  )
}

export default Testimonials
