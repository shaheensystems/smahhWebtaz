import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import HomeServiceCard from '@/components/HomeServiceCard'
import HomeServiceItems from '@/components/HomeServiceItems'
import HomeCarousel from '@/components/HomeCarousel'
import HomeLogoCaroucel from '@/components/HomeLogoCaroucel'
import ResourceCard from '@/components/ResourceCard'

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

const securityService: { title: string; content: string, image: string }[] = [
  {
    title: "Cybersecurity Audit",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid.",
    image: "/assets/home-service1.png",
  },
  {
    title: "Incident Response",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "/assets/home-service2.png",
  },
  {
    title: "Cloud Security",
    content: "Lorem ipsum dolor sit amet, consectetur tempor adipiscing elit, sed do eiusmod tempor incidid.",
    image: "/assets/home-service3.png",
  },
  {
    title: "Security Training",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid.",
    image: "/assets/home-service4.png",
  }
]

const itService: { title: string; content: string, image: string }[] = [
  {
    title: "Professional IT Services",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid.",
    image: "/assets/home-service5.png",
  },
  {
    title: "IT Policy System",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "/assets/home-service6.png",
  }
]

export default function Home() {
  return (
    <div className='m-0 p-0'>
      <div className="flex flex-col px-10 w-full min-h-screen items-center
       bg-midnight-900 bg-cetner-top bg-cover bg-one">   
        <div className="flex flex-col items-start max-w-[1366px] px-5 pt-40 pb-5 gap-8">
        <HomeIntro />
        <HomeServiceCard 
          title={serviceCardContents[0].title} 
          category={serviceCardContents[0].category} 
          content={serviceCardContents[0].content}
          image={serviceCardContents[0].image} />
        </div>
      </div>

      <div className="flex flex-col px-10 w-full items-center
       bg-midnight-900 bg-two bg-left-top bg-cover">   
        <div className="flex flex-col max-w-[1366px] px-5 pt-40 pb-5 w-full">
          <div className='w-fll py-20'>
            <CecurityImportant />
          </div>
          <div className='w-fll py-20'>
            <HomeServiceItems services={securityService}  />
          </div>
          <div className='w-fll py-20'>
            <HomeServiceCard 
              title={serviceCardContents[1].title} 
              category={serviceCardContents[1].category} 
              content={serviceCardContents[1].content}
              image={serviceCardContents[1].image}
          />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-10 w-full items-center
       bg-midnight-900"> 
        <div className="flex flex-col max-w-[1366px] px-5 pt-40 pb-5 w-full">
        
          <div className='w-fll py-20'>
            <HomeServiceItems services={itService}  />
          </div>
          <div className='w-fll pt-20 pb-40'>
            <h2 className="text-3xl text-white text-center pb-10">Our Reputation</h2>
            <HomeCarousel />
          </div>
        </div>
      </div>

      <div className='w-full pt-32 bg-white'>
        <h2 className='text-3xl font-semibold text-center pb-8'>Our Clients</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <HomeLogoCaroucel />

      <div className='flex flex-col items-center w-full pt-32 bg-white'>
        <h2 className='text-3xl font-semibold text-center pb-6'>Resources</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="flex flex-col md:flex-row max-w-[1366px] pt-12 pb-5 w-full justify-between gap-14">
          <div className='w-full md:w-1/3 shadow-lg'>
            <ResourceCard />
          </div>
          <div className='w-full md:w-1/3 shadow-lg'>
            <ResourceCard />
          </div>
          <div className='w-full md:w-1/3 shadow-lg'>
            <ResourceCard />
          </div>
        </div>
      </div>
    </div>
  );
}

const HomeIntro = () => {
  return (
  <>
    <div className="w-3/5">
      <h1 className="text-6xl text-white leading-[4.3rem]">Trusted Professionals Cybersecurity Solutions and IT Business Support</h1>
    </div>
    <div className="w-3/5">
      <p className='text-2xl font-light text-white leading-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    </div>
    <div className="w-3/5">
      <Link href={`/services`} className='text-xl text-white font-semibold'>
        Learn about Cybersecurity
        <MoveRight className='inline ml-3 text-midnight-300' />
      </Link>
    </div>
  </>
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
        <h2 className="text-3xl text-white text-center">Why Is Security So Important?</h2>
      </div>
      <div className="w-full flex flex-row justify-between">
        {securityPercentages?.map((item, index) => (
          <div key={index} className='w-60'>
              <p className={`text-[100px] font-semibold leading-tight ${item.percentage > 20 ? 'text-amber-500' : 'text-midnight-300'}`}>
                {item.percentage}
                <span className='text-4xl text-white'>%</span>
              </p>
              <p className='text-sm text-white text-center'>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
