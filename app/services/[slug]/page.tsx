'use client'

import React from 'react'
import AnyQuestion from '@/components/AnyQuestion'
import PageMainContent from '@/components/PageMainContent'
import PageTitle from '@/components/PageTitle'
import ServiceProcess from '@/app/services/ServiceProcess'
import { MainContent } from '@/components/PageMainContent'
import { useParams } from 'next/navigation'


const serviceContents: MainContent[]  = [
  { title: "Cybersecurity Audit",
    clarification: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: '/assets/home-service1.png'
  },
]

const ServiceDetail = () => {
  const params = useParams<{slug:string}>();
  console.log(params)
  let target = params.slug.replace("-", " ").toUpperCase()
  console.log("Target", target)

  return (
    <>
      <PageTitle 
        title="Services"
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
      <PageMainContent content={serviceContents[0]} />
      <div className='flex flex-col items-center gap-3'>
        <p>{params.slug}</p>
        <ServiceProcess />
        <AnyQuestion />
      </div>
    </>
  )
}

export default ServiceDetail