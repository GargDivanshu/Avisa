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
        <main className="bg-white relative flex h-[980px] flex-col items-center  md:pb-36">
        <Navbar/>
        <div className="md:mt-[50px]">
        </div>

        <div className="w-full h-[200px] bg-[url('/banner.jpg')]">

        </div>
        <div className="md:text-left text-center md:text-3xl text-xl text-primary">
            Contact Us
        </div>
        <form 
        className="p-4 text-2xl rounded-md md:w-4/5 w-11/12 shadow-md flex flex-col my-8 absolute top-24 bg-white"
        ref={form} onSubmit={sendEmail}>
            <div className="grid justify-between">
      <label className="font-bold">Name</label>
      <input 
      className="border-[1px] rounded-full p-2"
      type="text" name="user_name" />
      </div>
      <label className="font-bold">Email</label>
      <input type="email" name="user_email" />
      <label className="font-bold">Message</label>
      <textarea name="message" />
      <input className="w-4/5 text-center mx-auto p-2 rounded-full bg-primary hover:bg-primary/50 font-bold" type="submit" value="Send" />
    </form>
        <Footer/>
        </main>
    )
}