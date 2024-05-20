import { MoveRight } from 'lucide-react';
import Link from 'next/link'


export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center bg-midnight-900 bg-[url('../assets/background_one.png')] bg-right-top bg-cover">   
      <div className="flex flex-col items-start max-w-[1580px] py-40 gap-8">
        <div className="w-1/2">
          <h1 className="text-6xl text-white leading-[4.3rem]">Trusted Professionals Cybersecurity Solutions and IT Business Support</h1>
        </div>
        <div className="w-1/2">
          <p className='text-2xl font-light text-white leading-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
        <div className="w-1/2">
          <Link href={`/services`} className='text-xl text-white font-semibold'>
            Lern about Cybersecurity
            <MoveRight className='inline ml-3 text-midnight-300' />
          </Link>
        </div>
      </div>
    </div>
  );
}
