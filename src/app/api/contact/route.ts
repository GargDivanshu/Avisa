import nodemailer from 'nodemailer'
import { NextApiRequest, NextApiResponse } from 'next';
export async function POST(req: NextApiRequest, res: NextApiResponse){
    require('dotenv').config()
    
    if(req.method === 'POST') {
      const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: 'divanshugarg_me21b14_20@dtu.ac.in',
          pass: 'D1V@n$huDTU',
        },
        secure: true,
      })
      const mailData = {
        from: 'divanshu.garg113@gmail.com',
        to: 'divanshu.garg113@yahoo.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`
      }
      transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })
      res.status(200)
    }
    
  }

  // export default handler