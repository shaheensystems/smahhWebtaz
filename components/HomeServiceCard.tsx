import Image from 'next/image'

interface CardContent {
  title: string
  category: string
  content: string
  image: string
}

interface Props {
  cardContent: CardContent
}

const ServiceInfo = ({cardContent}: Props) => {
  return (
  <div className='flex flex-col lg:flex-row md:justify-around w-full mt-28 p-10 md:p-20 gap-10 bg-white rounded-md shadow-lg'>
    <div className="w-full lg:w-1/2 xl:w-3/5 flex flex-col space-y-3 md:pb-5">
      <h3 className='text-lg lg:text-xl font-semibold text-midnight-300'>{cardContent.category}</h3>
      <h1 className="text-3xl lg:text-4xl font-medium md:leading-[2rem]  lg:leading-[3rem]">{cardContent.title}</h1>
      <p className='text-base md:text-lg lg:text-xl font-light leading-6 lg:leading-8'>{cardContent.content}</p>
    </div>
    <div className="w-full lg:w-1/2 xl:w-2/5">
      <Image
          src={cardContent.image}
          alt={`${cardContent.title} image`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          width={500}
          height={350}
        />
    </div>
  </div>
  )
}

export default ServiceInfo