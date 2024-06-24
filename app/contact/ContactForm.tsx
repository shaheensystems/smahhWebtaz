"use client"
import React, { FC, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Contact } from '@/interface/contact'
import { sendEmail } from '@/lib/sendEmailUtil'
import { z } from 'zod'
import { contactSchema } from '@/ValidationSchemas/contact'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Select,
  SelectContent, 
  SelectItem,
  SelectTrigger,
  SelectValue,
 } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import ModalMessage from '@/components/ModalMessage'


export type ContactFormData = z.infer<typeof contactSchema>

interface Props {
  contact?: Contact
}

const ContactForm: FC = ({contact}: Props) => {
  const [ showModal, setShowModal ] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  async function onSubmit(values: z.infer<typeof contactSchema>){
    try{
      setIsSubmitting(true)
      await sendEmail(values)
      setShowModal(true)
      setIsSubmitting(false)
    }catch(error){
      setError('Unknown Error')
    }
  }

  return (
    <div className='w-full p-5 sm:p-10 md:p-5 lg:p-10 xl:p-20 bg-white rounded-md'>
      <h2 className='text-2xl xl:text-3xl text-center font-medium pb-10'>Inquiry Form</h2>
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)} 
          className="space-y-6 xl:space-y-10 w-full"
        >
          <FormField 
            control={form.control}
            name="name"
            defaultValue={contact?.name}
            render={({field}) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField 
            control={form.control}
            name="email"
            defaultValue={contact?.email}
            render={({field}) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your Email*" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
 
            <FormField 
              control={form.control} 
              name="topic"
              defaultValue={contact?.category} 
              render={({field}) => (
              <FormItem>
                <FormLabel>Inquiry Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Inquiry Topic..." defaultValue={contact?.category} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="CybersecurityAudit">Cybersecurity Audit</SelectItem>
                    <SelectItem value="IncidentResponse">Incident Response</SelectItem>
                    <SelectItem value="CloudSecurity">Cloud Security</SelectItem>
                    <SelectItem value="PenetrationTesting">Penetration Testing</SelectItem>
                    <SelectItem value="ITPolicySystem">IT Policy System</SelectItem>
                    <SelectItem value="CybersecurityTraining">Cybersecurity Training</SelectItem>
                    <SelectItem value="ProfessionalItServices">Professional IT Services</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )} />

          <FormField 
            control={form.control}
            name="message"
            defaultValue={contact?.message}
            render={({field}) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Message*" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className='w-full' disabled={isSubmitting}>Submit</Button>
        </form>
      </Form>
      <p className="text-destructive">{error}</p>
      { showModal ? <ModalMessage /> : null }
      
    </div>
  )
}

export default ContactForm