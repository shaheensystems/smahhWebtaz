import Image from 'next/image'

interface Props {
  title: string
  category: string
  content: string
  image: string
}

const ServiceInfo = ({title, category, content, image}: Props) => {
  return (
  <div className='flex flex-col md:flex-row md:justify-around w-full mt-28 p-14 gap-2 bg-white rounded-md shadow-lg'>
    <div className="flex flex-row item-center w-3/5">
      <div>
        <h3 className='text-xl font-semibold text-midnight-300'>{category}</h3>
        <h1 className="text-2xl md:text-4xl font-medium md:leading-[3rem] pt-3">{title}</h1>
        <p className='text-lg md:text-xl font-light md:leading-8 pt-3'>{content}</p>
      </div>
    </div>
    <div className="w-2/5">
      <Image
          src={image}
          alt={`${title} image`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          width={500}
          height={350}
        />
    </div>
  </div>
  )
}

export default ServiceInfo