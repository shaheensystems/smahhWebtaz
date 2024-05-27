import React from 'react'
import Image from 'next/image'
import PageTitle from '@/components/PageTitle'
import { Separator } from '@/components/ui/separator'
import AnyQuestion from '@/components/AnyQuestion'

const testimonials: { title: string; category:string; description: string; image: string, caption: string|undefined }[] = [
  { 
    title: 'Lorem ipsum dolor sit amet, onsectetur',
    category:'Cybersecurity Audit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    image: '/assets/testimonial1.png',
    caption: 'John From Whitecliffe'
  },
  { 
    title: 'Lorem ipsum dolor sit amet, onsectetur',
    category:'IT Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    image: '/assets/testimonial2.png',
    caption: 'Whitecliffe'
  },
  { 
    title: 'Lorem ipsum dolor sit amet, onsectetur',
    category:'Cloud Security',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    image: '/assets/testimonial3.png',
    caption: undefined
  },
]


const Testimonials = () => {
  return (
    <>
      <PageTitle
        title="Testimonials"
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.' />

      <div className="flex flex-col px-5 md:px-10 py-0 md:py-12 w-full items-center">
        {testimonials?.map((item, index) => (
          <div key={index} className="max-w-[1260px] md:px-5 py-10 md:py-14 w-full">
          <h4 className='text-lg font-medium text-midnight-300 pb-2 md:pb-5'>{item.category}</h4>
          <h2 className='text-2xl md:text-3xl lg:text-4xl pb-2 md:pb-5'>{item.title}</h2>

          <Separator className='bg-midnight-300 h-[3px] mb-8 md:mb-10' />

          <div className='flex flex-col md:flex-row gap-10 xl:gap-5'>
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