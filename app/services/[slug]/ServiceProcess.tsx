import React from 'react'

const processes: { id: number; title: string; description: string}[] = [
  {
    id: 1,
    title: "Determine Scope",
    description:"Defining the scope is the first critical step in any cybersecurity process. It involves identifying the systems, data, and assets requiring protection, as well as understanding their value and role within the organisation. By outlining boundaries and priorities, you ensure clarity and focus, which helps allocate resources efficiently and minimise vulnerabilities within your chosen scope.",
  },
  {
    id: 2,
    title: "Identify Threats",
    description:"Understanding potential threats is essential to safeguard your assets. This step includes analysing risks, recognising vulnerabilities, and identifying possible threat actors, such as hackers or malicious software. By mapping out potential attack vectors and prioritising threats based on their likelihood and impact, you can focus on critical security gaps and anticipate future challenges effectively.",
  },
  {
    id: 3,
    title: "Plan Response",
    description:"Planning an effective response ensures that your organisation is prepared for potential security incidents. This step involves developing action plans, establishing incident response protocols, and assigning roles and responsibilities to key team members. Proactive preparation minimises downtime, mitigates damage, and ensures a swift, coordinated recovery in the face of cybersecurity threats.",
  },
]

const ServiceProcess = () => {
  return (
    <div className='flex flex-col items-center px-5 py-5 md:py-10 lg:py-20 gap-3'>
      <h3 className='text-2xl font-semibold pb-8'>Cyber Audit Process</h3>
      {processes.map((process, index) => (
        <div key={index} className='w-full md:w-4/5 lg:w-3/5 max-w-[1200px] relative pb-10'>
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