import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import logo from '/public/assets/smahhLogo.png'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
// import { SidebarButtonSheet as SidebarButton } from './SidebarButton'
import { Menu, X } from 'lucide-react'
import { contentIndexes } from '@/data/data'
import { ContentItem } from '@/interface/content'
import { AccordionButton } from '@/components/AccordionButton'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const NavMobile = () => {
  const pathname = usePathname()
  return (
    <div className='py-2 flex flex-row justify-center fixed top-0 w-full bg-white z-50 shadow-md'>
      <Link href="/">
        <Image 
        src={logo}
        width={150}
        priority
        alt="Smahh Logo"
        />
      </Link>
      <Sheet>
        
      <SheetTrigger asChild>
        <Button size='icon' variant='ghost' className='fixed top-0.5 left-3'>
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      {/* <SheetContent side='left' className='px-3 py-4' hideClose> */}
      <SheetContent side='left' className='px-3 py-4'>
        <SheetHeader className='flex flex-row justify-between items-center space-y-0'>
          <SheetClose asChild>
            <Button className='h-7 w-7 p-0' variant='ghost'>
              <X size={15} />
            </Button>
          </SheetClose>
        </SheetHeader>
        <div className='h-full'>

            
          <div className='mt-5 flex flex-col w-full gap-1'>
            {contentIndexes.map((content, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{content.title}</AccordionTrigger>
                    {content.links.map((item, index) => (
                      <AccordionButton 
                        key={index} 
                        title={item.title}
                        link={item.href} />
                    ))}
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  </div>
  )
}

export default NavMobile