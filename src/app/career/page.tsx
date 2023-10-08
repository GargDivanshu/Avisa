"use client"
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {BsUpload} from 'react-icons/bs'
import Link from 'next/link'
import { useState } from 'react';


const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            href='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};


export default function Page() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [position, setPos] = useState("")
    const [workEx, setEx] = useState("")
    const [msg, setMsg] = useState("")
    // const []
    console.log(name);
    
    const handleSubmit = (e) => { 
        e.preventDefault()
        console.log('Sending')
      let data = {
          name,
          email,
          position,
          workEx,
          msg
        }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
              console.log('Response succeeded!')
              setSubmitted(true)
              setName('')
              setEmail('')
              setPos('')
              setEx('')
              setMsg('')
            }
          })
      }


    
    return (
        <main className="text-black bg-white relative flex h-[1350px] md:h-[1000px] flex-col items-center md:pb-36">
        <Navbar/>
        <div className="md:mt-[50px]">
        </div>

        <div className="w-full h-[200px] bg-[url('/AllBanner.png')]">

        </div>
       
        <form 
        method="post" action={`mailto:divanshu.garg113@gmail.com`}
        className="md:p-8 p-4 text-2xl rounded-md md:w-4/5 w-11/12 flex flex-col my-8 absolute top-24 bg-white"
        >

<div className="font-semibold text-left md:text-5xl text-3xl text-primary">
            Careers
        </div>

        <div className="text-left text-primary font-semibold md:text-4xl text-2xl my-8 mb-4">
        Join Us. We are hiring!
        </div>

        <div
        className="text-black w-11/12 text-base"
        >
            We are partnering with people having an entrepreneurial mindset and committed to offer superior investment products and services to our investors. We are committed to promote freedom at work, fair compensation and a collaborative learning environment. We also aim to challenge conventional investment philosophies and facilitate change to pursue growth.
        </div>

        <div className="text-left text-primary font-semibold md:text-3xl text-xl my-8 mb-4">
        Apply Below
        </div>
            <div className="">
                
                <div className="">
                {/* <div className="my-4 flex flex-col">
      <label className="font-semibold text-sm text-black">Name</label>
      <input 
      onChange={(e) => setName(e.target.value)}
      className="border-[2px] rounded-md my-1 border-gray-200 focus:outline-none p-1 text-sm"
      type="text" name="user_name" required/>
      </div> */}

      {/* <div className="my-4 flex flex-col">
      <label className="font-semibold text-sm text-black">Email</label>
      <input 
      onChange={(e) => setEmail(e.target.value)}
      className="border-[2px] rounded-md my-1 border-gray-200 focus:outline-none p-1 text-sm"
      type="email" name="user_email" required/>
      </div> */}

      {/* <div className="my-4 flex flex-col">
      <label className="font-semibold text-sm text-black">Position</label>
      <input 
      onChange={(e) => setPos(e.target.value)}
      className="border-[2px] rounded-md my-1 border-gray-200 focus:outline-none p-1 text-sm"
      type="text" name="position" required/>
      </div> */}

      {/* <div className="my-4 flex flex-col">
        <label className="font-semibold text-sm text-black">Resume <span className="text-sm font-light">(.pdf format)</span></label>
      <label 
      className="font-semibold text-black cursor-pointer border-[2px] rounded-md p-2 my-1 border-gray-200 focus:outline-none text-sm w-fit">
        
    <input 
     accept=".pdf" className="flex flex-col text-center" type="file" />
    <BsUpload fontSize={20} className="mx-auto"/>
</label>
      </div> */}

      {/* <div className="my-4 flex flex-col">
      <label className="font-semibold text-sm text-black">Work Experience <span className="text-sm font-light">(in Years)</span></label>
      <input 
      onChange={(e) => setEx(e.target.value)}
      className="border-[2px] rounded-md my-1 border-gray-200 focus:outline-none p-1 text-sm"
      type="number" name="workEx" required/>
      </div> */}

      {/* <div className="my-4 flex flex-col">
      <label 
      className="font-semibold text-sm text-black"
      >Message</label>
      <textarea 
      onChange={(e) => setMsg(e.target.value)}
       className="border-[2px] rounded-md my-1 border-gray-200 focus:outline-none p-1 text-sm"
      name="message" />
      </div> */}
      
      <div
        className="text-black w-11/12 text-base"
        >
          Please mention your name, email for contact, the position you want to apply for, along with the latest updated Resume meantioning current work experience in years.
        </div>
      <input 
    //   onClick={(e)=>{handleSubmit(e)}}
      className="text-white my-4 w-fit px-8 text-sm text-center py-2 rounded-md bg-primary hover:bg-primary/50 font-bold" type="submit" value="Submit" />
                </div>
      </div>
      {/* <ButtonMailto label="Write me an E-Mail" mailto="mailto:divanshu.garg113@gmail.com" /> */}
      
      
    </form>
        <Footer/>
        </main>
    )
}