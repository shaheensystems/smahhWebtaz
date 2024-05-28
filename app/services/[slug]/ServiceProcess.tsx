import React from 'react'

const processes: { id: number; title: string; description: string}[] = [
  {
    id: 1,
    title: "Determine Scope",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    title: "Identify Threats",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    title: "Plan Response",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
]

const ServiceProcess = () => {
  return (
    <div className='flex flex-col items-center px-5 py-20 gap-3'>
      <h3 className='text-2xl font-semibold pb-8'>Cyber Audit Process</h3>
      {processes.map((process, index) => (
        <div key={index} className='w-3/5 max-w-[1200px] relative pb-10'>
          <div className='w-20 h-20 bg-midnight-300 rounded-full'>
            <p className='text-white text-center pt-3'>Step</p>
            <p className='text-white text-3xl text-center font-light'>{process.id}</p>
          </div>
          <div className='w-full border-4 border-midnight-300 rounded-full p-3 absolute top-3'>
            <h4 className='text-xl font-medium pl-24'>{process.title}</h4>
          </div>
          <p className='pl-28 pt-3'>{process.description}</p>
        </div>
      ))}
      

    </div>
  )
}

export default ServiceProcess