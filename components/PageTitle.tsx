import React from 'react'

interface Props {
  title: string,
  description: string
}

const PageTitle = ({title, description}: Props) => {
  return (
    <div className="flex flex-col px-5 md:px-10 w-full items-center
       bg-midnight-900 md:bg-right-top lg:bg-cetner-top bg-cover bg-pgtitle">
        <div className="flex flex-row items-end max-w-[1260px] w-full pt-20 pb-10 lg:py-16">
          <div className='w-[450px]'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl text-white font-light'>{title}</h2>
            <p className='text-white text-sm pt-2 md:pt-3'>{description}</p>
          </div>
      </div>
    </div>
  )
}

export default PageTitle