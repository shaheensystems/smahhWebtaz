import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import HomeServiceCard from '@/components/home/HomeServiceCard'
import HomeServiceItems from '@/components/home/HomeServiceItems'
import HomeCarousel from '@/components/home/HomeCarousel'
import HomeLogoCaroucel from '@/components/home/HomeLogoCaroucel'
import ResourceCard from '@/components/ResourceCard'
import AnyQuestion from '@/components/AnyQuestion'
import { contentIndexes } from '@/data/data'

const serviceCardContents: { title: string; category: string, content: string, image: string }[] = [
  {
    title: "We are experienced Cybersecurity specialists.",
    category: "CyberSecurity",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ex quis nostrud exercitation.ercitation.",
    image: "/assets/home-cybersecurity.png",
  },
  {
    title: "Proactive we resolve issues promptly.",
    category: "IT Services and  Supports",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ex quis nostrud exercitation.ercitation.",
    image: "/assets/home-ITservices.png",
  },
]

export default function Home() {
  return (
    <div className='m-0 p-0'>
      <div className="flex flex-col px-5 md:px-10 w-full min-h-screen items-center
        bg-midnight-900 bg-cetner-top bg-cover bg-one">   
        <div className="max-w-[1260px] py-20 gap-10">
          <HomeIntro />
          <HomeServiceCard cardContent={serviceCardContents[0]} />
        </div>
      </div>

      <div className="flex flex-col px-5 md:px-10 w-full items-center
       bg-midnight-900 bg-two bg-left-top bg-cover">
        <div className="flex flex-col max-w-[1260px] pt-20 lg:pt-38  w-full">
          <div className='w-full pb-20'>
            <CecurityImportant />
          </div>

          <div className='w-full py-10 md:py-20'>
            <h2 className='text-2xl sm:text-3xl text-center text-white pb-10'>
              Smahh Cybersecurity Services
            </h2>
            <div className='flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap 
              w-full justify-between sm:justify-center lg:justify-start gap-10 md:gap-20 lg:gap-12'>
                {contentIndexes[0]?.links.slice(0, 4).map((linkItem, index) => (
                <div key={index} className='w-full sm:w-[40%] lg:w-1/4'>
                  <HomeServiceItems services={linkItem} />
                </div>  
              ))}
            </div>
          </div>

          <div className='w-full py-20'>
            <HomeServiceCard cardContent={serviceCardContents[1]} />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-5 md:px-10 w-full items-center
       bg-midnight-900"> 
        <div className="flex flex-col max-w-[1260px] pt-20 pb-5 w-full">
          <div className='w-fll pb-20'>
            <h2 className='text-2xl sm:text-3xl text-center text-white pb-10'>
              Smahh IT Services and Supports
            </h2>
            <div className='flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap 
              w-full justify-between sm:justify-center lg:justify-start gap-10 md:gap-20 lg:gap-12'>
                {contentIndexes[0]?.links.slice(4, 6).map((linkItem, index) => (
                <div key={index} className='w-full sm:w-[40%] lg:w-1/4'>
                <HomeServiceItems services={linkItem} />
                </div>  
              ))}
            </div>
          </div>

          <div className='w-fll pt-20 pb-40 mx-10'>
            <h2 className="text-2xl sm:text-3xl text-white text-center pb-10">Our Reputation</h2>
            <HomeCarousel />
          </div>
        </div>
      </div>

      <div className='w-full pt-32 bg-white'>
        <h2 className='text-2xl sm:text-3xl font-semibold text-center pb-8'>Our Clients</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          <span className='inline md:block'> 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </p>
      </div>
      <HomeLogoCaroucel />

      

      <div className='flex flex-col items-center w-full pt-32 px-5 md:px-10 bg-white'>
        <h2 className='text-2xl sm:text-3xl font-semibold text-center pb-6'>Resources</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          <span className='inline md:block'> 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </p>

        <div className="flex flex-col md:flex-row max-w-[1260px] pt-12 pb-5 w-full items-center md:justify-between gap-8 xl:gap-14">
          {contentIndexes[1]?.links.slice(0, 3).map((linkItem, index) => (
            <div key={index} className='w-full max-w-[22rem] md:w-1/3 shadow-lg'>
                <ResourceCard linkItem={linkItem} />     
            </div>
          ))}
        </div>

        <AnyQuestion />
      </div>
    </div>
  )
}

const HomeIntro = () => {
  return (
  <div className='w-full md:w-4/5 lg:w-3/5 flex flex-col py-10 space-y-8'>
      <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[3rem] md:leading-[3.7rem] lg:leading-[4.5rem] text-white">
        Trusted Professionals Cybersecurity Solutions and IT Business Support
      </h1>
      <p className='text-lg md:text-xl lg:text-2xl font-light leading-7 lg:leading-10 text-white'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
      <Link href={`/services`} className='text-base lg:text-xl text-white font-semibold'>
        Learn about Cybersecurity
        <MoveRight className='inline ml-3 text-midnight-300' />
      </Link>
  </div>
  )
}

const securityPercentages: { title: string; percentage: number }[] = [
  {
    title: "Lorem ipsum dolor sit amet",
    percentage: 85.5,
  },
  {
    title: "Lorem ipsum dolor sit amet",
    percentage: 34.5,
  },
  {
    title: "Lorem ipsum dolor sit amet",
    percentage: 10.5,
  },
]

const CecurityImportant = () => {
  return (
    <div className='flex flex-col md:justify-around w-full'>
      <div className="w-full pb-7">
        <h2 className="text-2xl sm:text-3xl text-white text-center">Why Is Security So Important?</h2>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between">
        {securityPercentages?.map((item, index) => (
          <div key={index} className='w-full md:w-1/3 lg:w-64'>
              <p className={`text-[5rem] lg:text-[6.5rem] font-semibold text-center
                leading-tight ${item.percentage > 20 ? 'text-amber-500' : 'text-midnight-300'}`}>
                {item.percentage}
                <span className='text-2xl lg:text-4xl text-white'>%</span>
              </p>
              <p className='text-xs md:text-sm text-white text-center pb-10 md:pb-0'>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
