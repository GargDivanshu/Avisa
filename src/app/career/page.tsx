"use client"
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {BsUpload} from 'react-icons/bs'
import Link from 'next/link'


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

    
    return (
        <main className="text-black bg-white relative flex h-[1550px] md:h-[1380px] flex-col items-center md:pb-36">
        <Navbar/>
        <div className="md:mt-[50px]">
        </div>

        <div className="w-full h-[200px] bg-[url('/AllBanner.png')]">

        </div>
       
        <form 
        action="mailto:divanshu.garg113@gmail.com"
        className="md:p-8 p-4 text-2xl rounded-md md:w-4/5 w-11/12 flex flex-col my-8 absolute top-24 bg-white"
        >

<div className="font-semibold text-left md:text-5xl text-3xl text-primary">
            Careers
        </div>
{/* 
        <div className="text-left text-primary font-semibold md:text-4xl text-2xl my-8 mb-4">
        Join Us. We are hiring!
        </div>

        <div
        className="text-black w-11/12 text-base"
        >
            We are partnering with people having an entrepreneurial mindset and committed to offer superior investment products and services to our investors. We are committed to promote freedom at work, fair compensation and a collaborative learning environment. We also aim to challenge conventional investment philosophies and facilitate change to pursue growth.
        </div> */}

        <div className="text-left text-primary font-semibold md:text-3xl text-xl my-8 mb-4">
        Apply Below
        </div>
            <div className="grid justify-between grid-cols-1 md:w-1/2 w-full">
                
                <div className="flex flex-col">
                <div className="my-4 flex flex-col">
      <label className="font-semibold text-sm text-black">Name</label>
      <input 
      className="border-[2px] rounded-md my-1 border-gray-200 focus:outline-none p-1 text-sm"
      type="text" name="user_name" required/>
      </div>

      <div className="my-4 flex flex-col">
      <label className="font-semibold text-sm text-black">Email</label>
      <input 
      className="border-[2px] rounded-md my-1 border-gray-200 focus:outline-none p-1 text-sm"
      type="email" name="user_email" required/>
      </div>

      <div className="my-4 flex flex-col">
      <label className="font-semibold text-sm text-black">Position</label>
      <input 
      className="border-[2px] rounded-md my-1 border-gray-200 focus:outline-none p-1 text-sm"
      type="text" name="position" required/>
      </div>

      <div className="my-4 flex flex-col">
        <label className="font-semibold text-sm text-black">Resume <span className="text-sm font-light">(.pdf format)</span></label>
      <label 
      className="font-semibold text-black cursor-pointer border-[2px] rounded-md p-2 my-1 border-gray-200 focus:outline-none text-sm w-fit">
        {/* custom-file-upload */}
    <input  accept=".pdf" className="flex flex-col text-center" type="file" required/>
    <BsUpload fontSize={20} className="mx-auto"/>
</label>
      </div>

      <div className="my-4 flex flex-col">
      <label className="font-semibold text-sm text-black">Work Experience <span className="text-sm font-light">(in Years)</span></label>
      <input 
      className="border-[2px] rounded-md my-1 border-gray-200 focus:outline-none p-1 text-sm"
      type="number" name="workEx" required/>
      </div>

      <div className="my-4 flex flex-col">
      <label 
      className="font-semibold text-sm text-black"
      >Message</label>
      <textarea 
       className="border-[2px] rounded-md my-1 border-gray-200 focus:outline-none p-1 text-sm"
      name="message" />
      </div>
      
      <input className="text-white w-fit px-8 text-sm text-center py-2 rounded-md bg-primary hover:bg-primary/50 font-bold" type="submit" value="Submit" />
                </div>
      </div>
      {/* <ButtonMailto label="Write me an E-Mail" mailto="mailto:divanshu.garg113@gmail.com" /> */}
      
      
    </form>
        <Footer/>
        </main>
    )
}