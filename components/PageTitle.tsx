import React from 'react'

interface Props {
  title: string,
  description: string
}

const PageTitle = ({title, description}: Props) => {
  return (
    <div className="flex flex-col px-10 w-full items-center
       bg-midnight-900 bg-cetner-top bg-cover bg-pgtitle">
        <div className="flex flex-col items-start max-w-[1260px] w-full py-16 gap-3">
          <h2 className='text-4xl text-white font-light'>{title}</h2>
          <div className='w-[450px]'>
            <p className='text-white text-sm'>{description}</p>
          </div>
      </div>
    </div>
  )
}

export default PageTitle