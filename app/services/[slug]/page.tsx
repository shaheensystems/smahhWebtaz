'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { contentIndexes } from '@/data/data'
import AnyQuestion from '@/components/AnyQuestion'
import PageMainContent from '@/components/PageMainContent'
import PageTitle from '@/components/PageTitle'
import ServiceProcess from '@/app/services/[slug]/ServiceProcess'

const ServiceDetail = () => {
  const params = useParams<{slug:string}>()
  const slug = params.slug as string
  let target = slug.toLowerCase().split('-')
  target = target.map(element => element.charAt(0).toUpperCase() + element.slice(1))
  const targetString = target.join(" ")
  const serviceContent = contentIndexes[0].links.find(content => content.title.includes(targetString) )

  if(!serviceContent){
    return<div>Service not found</div>
  }

  return (
    <>
      <header>
        <PageTitle 
        title="Services"
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
      </header>
      <main>
        <PageMainContent content={serviceContent} />
        <div className='flex flex-col items-center gap-3'>
          <ServiceProcess />
          <AnyQuestion />
        </div>
      </main>
    </>
  )
}

export default ServiceDetail