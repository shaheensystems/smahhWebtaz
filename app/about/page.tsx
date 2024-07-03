import React, { Suspense } from 'react'
import Image from 'next/image'
import AnyQuestion from '@/components/AnyQuestion'
import aboutImages from '@/public/assets/about-twoImages.png'

const partnerLogos: { company: string; image: string, width: number, height: number }[] = [
  { company: "Microsoft",
    image: '/assets/logo-microsoft.png',
    width: 200,
    height: 80,
  },
  { company: "Amazon",
    image: '/assets/logo-amazon.png',
    width: 150,
    height: 80,
  },
  { company: "Google Cloud",
    image: '/assets/logo-google.png',
    width: 220,
    height: 80,
  },
  { company: "Cisco",
    image: '/assets/logo-cisco.png',
    width: 150,
    height: 80,
  },
]

const featureIcons: { title: string; description: string; image: string }[] = [
  { title: "Experience",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/assets/icon-experienced.png',
  },
  { title: "Expertise",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/assets/icon-expertise.png',
  },
  { title: "Communication",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/assets/icon-communication.png',
  },
]

const About = () => {
  return (
    <>
      <div className="flex flex-col px-5 md:px-10 w-full items-center
       bg-midnight-900 bg-cover bg-one">
        <div className="flex flex-col md:flex-row items-start max-w-[1260px] pt-20 xl:mb-14 pb-3 sm:pb-10 gap-10">
          <div className="w-full md:w-3/5">
            <h3 className="text-xl text-white pb-2 lg:pb-4">About Smahh</h3>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light 
              leading-[2.4rem] md:leading-[2.8rem] lg:leading-[3.8rem] text-white pb-4">
              We support Local and <br />Global businesses</h1>
            <p className="xl:text-lg text-white lg:pr-10 xl:pr-36">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <Suspense fallback={<p className='text-center animate-pulse'>Fetching data...</p>}>
            <div className="w-full md:w-2/5 h-[32rem] sm:h-[24rem] md:h-[18rem] lg:h-[24rem] xl:h-[26rem] relative">
              <Image src='/assets/about.png' width={450} height={200} alt='Office image' className='md:float-right invisible md:visible' />
              <div>
                <Image src='/assets/about1.png' width={450} height={200} alt='Office image' 
                  className='visible md:invisible absolute top-0 right-0 z-20 md:static' />
                <Image src='/assets/about2.png' width={450} height={200} alt='Office image' 
                  className='visible md:invisible absolute top-60 sm:top-20 z-10 md:static' />
              </div>
            </div>
          </Suspense>
        </div>
      </div>

      <div className="flex flex-col justify-a px-5 md:px-10 py-12 md:py-32 w-full items-center">   
        <div className="flex flex-col md:flex-row max-w-[1260px] px-5 md:px-10 lg:px-20 py-10 lg:py-14 w-full gap-8 lg:gap-14 
        bg-gray-200 rounded-md justify-center items-center shadow-lg">
          <div className='md:pr-2 lg:pr-20'>
            <Image src="/assets/about-manager.png" alt="Manager Image" width={200} height={200} />
          </div>
          <div className='w-full md:w-3/5'>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
              officia deserunt mollit anim id est laborum.
            </p>
            <h4 className='text-lg font-semibold pt-3'>Managing Director <span className='font-normal pl-2'>Tom Smith</span></h4>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center px-15 py-10 md:px-10 md::py-5 gap-0 md:gap-3'>
        <h3 className='text-2xl font-semibold pb-16 md:pb-8'>Smahh Partners</h3>
        <div className='flex flex-col md:flex-wrap lg:flex-row justify-center lg:justify-between items-center max-w-[1260px] w-full'>
          {partnerLogos?.map((item, index) => (
            <div key={index} className='w-[8rem]  md:w-1/2 lg:w-fit pb-20 md:pb-8 item-center flex justify-around lg:justify-none'>
              <Image 
                src={item.image} 
                alt={`${item.company} Logo`}
                width={item.width} height={item.height}
              />
          </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-around px-5 md:px-10 mx:px-10 md:pt-32 w-full items-center">   
        <div className="flex flex-col max-w-[1260px] p-5 md:p-10 lg:p-20 w-full md:gap-10
        bg-midnight-900 rounded-md justify-center shadow-lg">
          <div className='flex flex-col lg:flex-row pb-0 md:pb-10'>
            <div className='w-full lg:w-1/3'>
              <h3 className='text-3xl text-white text-center'>Why Smahh?</h3>
            </div>
            <div className='w-full lg:w-2/3 pt-5 lg:pt-0'>
              <p className='text-lg text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip.
              </p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-betweeen item-center md:pt-10 px-0 sm:px-20 md:px-0 md:gap-10 xl:gap-20'>
            {featureIcons?.map((item, index) => (
              <div key={index} className='w-full lg:w-1/3 flex flex-col pt-10 md:pt-0 items-center'>
                <Image src={item.image} alt='Experience Icon' width={80} height={80} className='w-[20%] md:w-[30%]' />
                <h4 className='text-xl text-white font-semibold pt-5'>{item.title}</h4>
                <p className="text-sm font-light text-white text-center pt-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <AnyQuestion />
      </div>
    </>
  )
}

export default About