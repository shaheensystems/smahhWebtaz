'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/assets/smahh-logo.png'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
// import { SidebarButtonSheet as SidebarButton } from './SidebarButton'
import { Menu } from 'lucide-react'
import { contentIndexes } from '@/data/data'
import { AccordionButton } from '@/components/AccordionButton'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const NavMobile = () => {
  const [sheetOpen, setSheetOpen] = useState(false)

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
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button size='icon' variant='ghost' className='fixed top-0.5 left-3'>
            <Menu size={20} />
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className='px-3 py-4'>
          <SheetHeader className='flex flex-row justify-between items-center space-y-0'>
            <SheetClose asChild>
            </SheetClose>
          </SheetHeader>
          <NavBar sheetOpen={sheetOpen} setOpen={setSheetOpen} />
      </SheetContent>
    </Sheet>
  </div>
  )
}

const NavBar= (props: any) => {
  return (
    <div className='h-full'>
      <div className='mt-8 mx-1 flex flex-col w-full gap-1'>
        {contentIndexes.map((content, index) => (
          
          <Accordion key={index} type="single" collapsible>
            <AccordionItem value="item-1" className='p-0 m-0'>
              <AccordionTrigger>{content.title}</AccordionTrigger>
                {content.links.map((item, index) => (
                  <AccordionContent key={index} className='py-1'>
                    <button key={index} onClick={() => props.setOpen(false)} className=' w-full'>
                      <AccordionButton 
                        title={item.title}
                        link={item.href} />
                    </button>
                  </AccordionContent>
                ))}
              </AccordionItem>
            </Accordion>
          ))}
      </div>
    </div>
  );
};

export default NavMobile