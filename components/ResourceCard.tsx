import React from 'react'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Resource1 from '../public/assets/home-resource1.png'
import { Separator } from "@/components/ui/separator"
import { MoveRight } from 'lucide-react'



const HomeResourceCard = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className='font-light'>Cybersecurity</CardTitle>
          <Separator />
          <CardDescription className='pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image src={Resource1} alt="Cybersecurity" />
        </CardContent>
        <CardFooter>
            <p>
              Read more
              <MoveRight className='inline ml-3 text-midnight-300' />
            </p>       
        </CardFooter>
      </Card>
    </div>
  )
}

export default HomeResourceCard