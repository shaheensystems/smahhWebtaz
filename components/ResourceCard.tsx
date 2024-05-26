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

interface ContentItem {
  title: string;
  subTitle: string;
  href: string;
  description?: string | null;
  image: string
}

interface Props {
  resourceItem: ContentItem
}


const ResourceCard = ({resourceItem}: Props) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className='font-light'>{resourceItem.title}</CardTitle>
          <Separator />
          <CardDescription className='pt-3'>{resourceItem.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image src={resourceItem.image} alt="Cybersecurity" width={300} height={250} />
        </CardContent>
        <CardFooter>
            <Link href={resourceItem.href}>
              Read more
              <MoveRight className='inline ml-3 text-midnight-300' />
            </Link>       
        </CardFooter>
      </Card>
    </div>
  )
}

export default ResourceCard