import React from 'react'

const PageTitle = () => {
  return (
    <div className="flex flex-col px-10 w-full items-center
       bg-midnight-900 bg-cetner-top bg-cover bg-pgtitle">
        <div className="flex flex-col items-start max-w-[1366px] w-full px-5 py-16 gap-3">
          <h2 className='text-4xl text-white font-light'>Our Services</h2>
          <p className='text-white text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
    </div>
  )
}

export default PageTitle