'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { contentIndexes } from '@/data/data'
import AnyQuestion from '@/components/AnyQuestion'
import ResourceCard from '@/components/ResourceCard'
import ResourceDetails from '@/app/resources/[slug]/ResourceDetails'
import PageMainContent from '@/components/PageMainContent'
import PageTitle from '@/components/PageTitle'
import { ContentItem } from '@/interface/content'

const Resources = () => {
  const params = useParams<{slug:string}>()
  const slug = params.slug as string
  let target = slug.toLowerCase().split('-')
  target = target.map(element => element.charAt(0).toUpperCase() + element.slice(1))
  const targetString = target.join(" ")
  const serviceContent = contentIndexes[1].links.find(content => content.title.includes(targetString))

  if(!serviceContent){
    return<div>Resource not found</div>
  }

  let resoueces: (ContentItem | undefined)[] = []
  let next: number
  const currentId = serviceContent.id
  const contentLength:number = contentIndexes[1].links.length
  if(currentId){
    for(let i=1; i<4; i++){
      next = currentId + i
      if(next >= 6){
        next = next-contentLength
        console.log(next)
      }
      let resource =  contentIndexes[1].links.find(content => content.id === next)
      console.log(resource)
      if(resoueces){
        resoueces?.push(resource)
      }
    }
    console.log(resoueces)
    //resoueces = contentIndexes[1].links.filter(content => content.title !== targetString).slice(0, 3)
  }


  return (
    <>
    <PageTitle
      title="Resources"
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
    <PageMainContent content={serviceContent} />
    <div className='flex flex-col items-center px-5 md:px-10 gap-3'>
      <ResourceDetails />
      <div className="flex flex-col lg:flex-row max-w-[1260px] pt-12 pb-5 w-full justify-between gap-14">
        {resoueces?.map((linkItem, index) => (
          <div key={index} className='w-full lg:w-1/3 shadow-lg'>
            {linkItem?<ResourceCard linkItem={linkItem} />:undefined}  
          </div>
        ))}
      </div>
      <AnyQuestion />
    </div>
  </>
  )
}

export default Resources