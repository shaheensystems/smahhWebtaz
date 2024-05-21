import { MoveRight } from 'lucide-react';
import Link from 'next/link'
import Image from 'next/image'
// import SecurityImage from '@/assets/home_cybersecurity.png'


interface Props {
  title: string
  category: string
  content: string
  image: string
}

const ServiceContents: { title: string; category: string, content: string, image: string }[] = [
  {
    title: "We are experienced Cybersecurity specialists.",
    category: "CyberSecurity",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ex quis nostrud exercitation.ercitation.",
    image: "/assets/home_cybersecurity.png",
  },
  {
    title: "Proactive we resolve issues promptly.",
    category: "IT Services and  Supports",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ex quis nostrud exercitation.ercitation.",
    image: "/assets/home_ITservices.png",
  },
]


export default function Home() {
  return (
    <>
      <div className="flex flex-col px-10 w-full min-h-screen items-center bg-midnight-900 bg-[url('../public/assets/background_one.png')] bg-cetner-top bg-cover">   
        <div className="flex flex-col items-start max-w-[1366px] px-5 pt-40 pb-5 gap-8">
        <HomeIntro />
        <ServiceInfo 
          title={ServiceContents[0].title} 
          category={ServiceContents[0].category} 
          content={ServiceContents[0].content}
          image={ServiceContents[0].image}
         />
        </div>
      </div>
      <div className="flex flex-col px-10 w-full min-h-screen items-center bg-midnight-900">   
        <div className="flex flex-col items-center max-w-[1366px] px-5 pt-40 pb-5 gap-8 w-full">
        <CecurityImportant />
        <ServiceInfo 
          title={ServiceContents[1].title} 
          category={ServiceContents[1].category} 
          content={ServiceContents[1].content}
          image={ServiceContents[1].image}
         />
      </div>
    </div>
    </>
    
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
        Lern about Cybersecurity
        <MoveRight className='inline ml-3 text-midnight-300' />
      </Link>
    </div>
  </>
  )
}

const ServiceInfo = ({title, category, content, image}: Props) => {
  return (
  <div className='flex flex-col md:flex-row md:justify-around w-full mt-28 p-14 gap-2 bg-white rounded-md'>
    <div className="flex flex-row item-center w-3/5">
      <div>
        <h3 className='text-xl font-semibold text-midnight-300'>{category}</h3>
        <h1 className="text-2xl md:text-4xl font-medium md:leading-[3rem] pt-3">{title}</h1>
        <p className='text-lg md:text-xl font-light md:leading-8 pt-3'>{content}</p>
      </div>
    </div>
    <div className="w-2/5">
      <Image
          src={image}
          alt={`${title} image`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          width={500}
          height={350}
        />
    </div>
  </div>
  )
}

const CecurityImportant = () => {
  return (
    <div className='flex flex-col md:justify-around w-full'>
      <div className="w-full pb-7">
        <h1 className="text-3xl text-white text-center">Why Is Security So Important?</h1>
      </div>
      <div className="w-full flex flex-row justify-between">
        <div className='w-60'>
          <p className='text-[100px] font-semibold text-amber-500 leading-tight'>85.5<span className='text-4xl text-white'>%</span></p>
          <p className='text-sm text-white text-center'>Lorem ipsum dolor sit amet</p>
        </div>
        <div className='w-60'>
          <p className='text-[100px] font-semibold text-amber-500 leading-tight'>34.5<span className='text-4xl text-white'>%</span></p>
          <p className='text-sm text-white text-center'>Lorem ipsum dolor sit amet</p>
        </div>
        <div className='w-60'>
          <p className='text-[100px] font-semibold text-midnight-300 leading-tight'>34.5<span className='text-4xl text-white'>%</span></p>
          <p className='text-sm text-white text-center'>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  )
}

const components: { title: string; percentage: number }[] = [
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

const CecurityServices = () => {


  return (
    <>
    <div className="w-full pb-7">
      <h1 className="text-3xl text-white text-center">Why Is Security So Important?</h1>
    </div>
    <div className="w-full flex flex-row justify-between">
      {components.map((item, index) => (
        <div className='w-60' key={index}>
          <p className={`text-[100px] font-semibold
            leading-tight ${item.percentage> 15 ? 'text-amber-500' : 'text-midnight-300'}`}>
            {item.percentage}<span className='text-4xl text-white'>%</span></p>
          <p className='text-sm text-white text-center'>{item.title}</p>
        </div>
      ))}
    </div>
  </>
  )
}

