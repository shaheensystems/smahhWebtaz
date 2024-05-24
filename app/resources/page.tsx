import PageMainContent from '@/components/PageMainContent'
import PageTitle from '@/components/PageTitle'
import React from 'react'
import ServiceProcess from '../services/ServiceProcess'
import AnyQuestion from '@/components/AnyQuestion'
import ResourceCards from './ResourceCards'
import { MainContent } from '@/components/PageMainContent'

const resourceContents: MainContent[]  = [
  { title: "Cybersecurity",
    clarification: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: '/assets/home-resource1.png'
  },
  { title: "Cyber Risk",
    clarification: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: '/assets/home-service1.png'
  },
]

const Resources = () => {
  return (
    <>
    <PageTitle
      title="Resources"
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
    <PageMainContent content={resourceContents[0]} />
    <div className='flex flex-col items-center px-5 py-20 gap-3'>
      <ServiceProcess />
      <ResourceCards />
      <AnyQuestion />
    </div>
  </>
  )
}

export default Resources