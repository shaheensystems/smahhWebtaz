import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { MoveRight } from 'lucide-react'
import { ContentItem } from '@/interface/content'

interface Props {
  linkItem: ContentItem
}

function limitWords(str:string, wordLimit:number) {
  // Split the string into an array of words
  const words = str.split(' ');

  // Slice the array to get only the first `wordLimit` words
  const limitedWords = words.slice(0, wordLimit);

  // Join the words back into a single string
  return limitedWords.join(' ');
}


const ResourceCard = ({linkItem}: Props) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className='font-light'>{linkItem.title}</CardTitle>
          <Separator />
          <CardDescription className='pt-3'>{limitWords(linkItem.description??'', 18)+'...'}</CardDescription>
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