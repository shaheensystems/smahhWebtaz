import React from 'react'
import Link from 'next/link'
import { Button, ButtonProps } from './ui/button'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SheetClose } from './ui/sheet'
import {
  AccordionContent,
} from "@/components/ui/accordion"
import { Content, ContentItem, SidebarItems } from '@/interface/content'

// interface SidebarButtonProps extends ButtonProps {
//   icon?: LucideIcon
// }
interface AccorditonButtonProps{
  title: string
  link: string
}

interface SidebarButtonProps  {
  content: Content
}

export function AccordionButton ( {title, link} : AccorditonButtonProps){
  return (
    // <Button 
    //   variant='ghost' 
    //   className={cn('gap-2 justify-start w-full sm:text-stone-600 md:text-white active:text-gray-600 hover:bg-gray-400 ')} {...props}>
    //   {Icon && <Icon size={20} />}
    //   <span>{children}</span>
    // </Button>
    <AccordionContent>
      <Link href={link}>
        <Button
          variant='ghost' 
          className={cn('gap-2 justify-start w-full text-stone-600 active:text-gray-600 hover:bg-gray-300 ')}
        >
          {title}
        </Button>
      </Link>
    </AccordionContent>
  )
}

// export function SidebarButtonSheet(props: SidebarButtonProps){
//   return (
//     <SheetClose asChild>
//       <AccordionButton {...props} />
//     </SheetClose>
//   )
// }