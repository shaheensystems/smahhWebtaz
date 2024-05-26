"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Contact } from '../../interface/contact'
import { z } from 'zod'
import { contactSchema } from '@/ValidationSchemas/contact'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
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


type ContactFormData = z.infer<typeof contactSchema>

interface Props {
  contact?: Contact
}
const ContactForm = ({contact}: Props) => {

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  async function onSubmit(values: z.infer<typeof contactSchema>){
    try{
      setIsSubmitting(true)
      setError("")

      // if(ticket){
      //   await axios.patch("/api/tickets/" + ticket.id, values)
      // }else {
      //     await axios.post("/api/tickets", values)
      // }
      setIsSubmitting(false)
      router.push("/")
      router.refresh()

    }catch(error){
      setError("Unknown Error Occured.")
      setIsSubmitting(false)
    }
  }

  return (
    <div className='w-full p-20 bg-white rounded-md'>
      <h2 className='text-3xl text-center font-medium pb-10'>Inquiry Form</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 w-full">
          <FormField 
            control={form.control}
            name="name"
            defaultValue={contact?.name}
            render={({field}) => (
              <FormItem>
                <FormLabel>Ticket Title</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          {/* <Controller 
            name="description" 
            control={form.control}
            defaultValue={ticket?.description}
            render={({field}) => (
            <SimpleMDE placeholder="Description" {...field} />
          )} /> */}
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
              defaultValue={contact?.topic} 
              render={({field}) => (
              <FormItem>
                <FormLabel>Inquiry Topic</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Inquiry Topic..." defaultValue={contact?.topic} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="CybersecurityAudit">Cybersecurity Audit</SelectItem>
                    <SelectItem value="IncidentResponse">Incident Response</SelectItem>
                    <SelectItem value="CloudSecurity">Cloud Security</SelectItem>
                    <SelectItem value="PenetrationTesting">Penetration Testing</SelectItem>
                    <SelectItem value="ITPolicySystem">IT Policy System</SelectItem>
                    <SelectItem value="CybersecurityTraining">Cybersecurity Training</SelectItem>
                    <SelectItem value="ProfessionalItServices">Professional It Services</SelectItem>
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
    </div>
  )
}

export default ContactForm