"use client"
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Page() {
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      emailjs.sendForm(
        `${process.env.SERVICE_KEY}`,
        `${process.env.TEMPLATE_ID}`,
        form.current?.form,
        `${process.env.PUBLIC_KEY}`
      )
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <main className="text-black bg-white relative flex h-[1380px] flex-col items-center md:pb-36">
        <Navbar/>
        <div className="md:mt-[50px]">
        </div>

        <div className="w-full h-[200px] bg-[url('/banner.jpg')]">

        </div>
       
        <form 
        className="md:p-8 p-4 text-2xl rounded-md md:w-4/5 w-11/12 shadow-md flex flex-col my-8 absolute top-24 bg-white"
        ref={form} onSubmit={sendEmail}>

<div className="font-semibold text-left md:text-3xl text-xl text-primary">
            Contact Us
        </div>

        <div className="text-center font-semibold">
            Feel free to get in touch with us
        </div>
            <div className="grid justify-between md:grid-cols-2 grid-cols-1">

                <div>

                    Address
                </div>
                
                <div className="flex flex-col">
                <div className="my-4 flex flex-col">
      <label className="font-semibold text-sm text-gray-500">Name</label>
      <input 
      className="border-[2px] rounded-md my-1 border-gray-200 focus:outline-none p-1 text-sm"
      type="text" name="user_name" />
      </div>

      <div className="my-4 flex flex-col">
      <label className="font-semibold text-sm text-gray-500">Email</label>
      <input 
      className="border-[2px] rounded-md my-1 border-gray-200 focus:outline-none p-1 text-sm"
      type="email" name="user_email" />
      </div>

      <div className="my-4 flex flex-col">
      <label 
      className="font-semibold text-sm text-gray-500"
      >Message</label>
      <textarea 
       className="border-[2px] rounded-md my-1 border-gray-200 focus:outline-none p-1 text-sm"
      name="message" />
      </div>
      
      <input className="text-white w-fit px-8 text-sm text-center py-2 rounded-md bg-primary hover:bg-primary/50 font-bold" type="submit" value="Send" />
                </div>
      </div>

      
      
    </form>
        <Footer/>
        </main>
    )
}