import nodemailer from 'nodemailer'
//const nodemailer = require('nodemailer')
import { contactSchema } from '@/ValidationSchemas/contact'
import { z } from 'zod'
import dotenv from "dotenv"
dotenv.config()

const transporter = nodemailer.createTransport({
  //service: process.env.MAIL_SERVICE,
  host: process.env.MAIL_HOST,
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.USER, // Sender gmail address
    pass: process.env.APP_PASSWORD, //App password from Gmail account
  }
})

type ContactFormData = z.infer<typeof contactSchema>

// async..await is not allowed in global scope, must use a wrapper
export const sendEmail = async(values:ContactFormData): Promise<void> => {
  // send mail with defined transport object
  const userName = process.env.USER
  const emailAdd: string | string[] = process.env.EMAIL ? process.env.EMAIL.split(',') : [];
  if (!userName || !emailAdd) {
    throw new Error('Environment variables USER or EMAIL are not defined');
  }
  try {
    await transporter.sendMail({
      from: {
        name: 'Inquiry',
        address: userName,
      },
      to: emailAdd, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>value.message</b>", // html body
    })

  }catch (error) {
    console.log(error)
  }
}