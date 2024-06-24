import nodemailer from 'nodemailer'
//const nodemailer = require('nodemailer')
import dotenv from "dotenv"
import { type NextRequest, NextResponse } from 'next/server';
import Mail from 'nodemailer/lib/mailer';
dotenv.config()
interface Props {
  from: {
    name: string
    address: string
  },
  to: string
  subject: string
  //text: string | string[]
  text: string
  html:string
}

export async function POST(request: NextRequest) {
  const { email, name, message } =await request.json()

  const transport = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,

    auth: {
      user: process.env.USER,
      pass: process.env.APP_PASSWORD,
    },
    
  })

  const mailOptions: Mail.Options = {
    from: process.env.USER,
    to: process.env.EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    text: message,
  }

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      })
    })

    try {
      await sendMailPromise();
      return NextResponse.json({ message: 'Email sent' });
    } catch (err) {
      return NextResponse.json({ error: err }, { status: 500 });
    }
  // try {
  //   const transporter = nodemailer.createTransport({
  //     //service: process.env.MAIL_SERVICE,
  //     host: process.env.MAIL_HOST,
  //     port: 587,
  //     secure: false, // Use `true` for port 465, `false` for all other ports
  //     auth: {
  //       user: process.env.USER, // Sender gmail address
  //       pass: process.env.APP_PASSWORD, //App password from Gmail account
  //     }
  //   })
  //   const userName:string = process.env.USER ? process.env.USER : 'undefined'
  //   const emailAdd: string = process.env.EMAIL ? process.env.EMAIL : 'undefined'
  
  //   const mailOption: Props = {
  //     from: {
  //       name: 'Inquiry',
  //       address: userName
  //     },
  //     to: emailAdd, // list of receivers
  //     subject: "Hello ✔", // Subject line
  //     text: "Hello world?", // plain text body
  //     html: `<h3>hello</h3>
  //           <li>title: hacdkshka</li>
  //           <li>message: cbadjsfa</li>
  //     `, // html body
  //   }
    
  //   await transporter.sendMail(mailOption)
  //   return NextResponse.json({ message: 'Email Sent Successfully'}, { status: 200})

  // } catch(error) {
  //   return NextResponse.json({ message: 'Fail to Sent Email'}, { status: 500})
  // }
  

}