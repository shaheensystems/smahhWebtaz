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
import Link from 'next/link'
import { ContentItem } from '@/interface/content'

interface Props {
  linkItem: ContentItem
}

const ResourceCard = ({linkItem}: Props) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className='font-light'>{linkItem.title}</CardTitle>
          <Separator />
          <CardDescription className='pt-3'>{linkItem.description}</CardDescription>
        </CardHeader>
        <CardContent>
          {linkItem.image? <Image src={linkItem.image} alt="Cybersecurity" width={300} height={250} /> : null}
        </CardContent>
        <CardFooter>
            <Link href={linkItem.href} className='hover:text-midnight-300 hover:opacity-70'>
              Read more
              <MoveRight className='inline ml-3 text-midnight-300' />
            </Link>       
        </CardFooter>
      </Card>
    </div>
  )
}

export default ResourceCard