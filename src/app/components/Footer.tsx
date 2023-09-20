'use client'
import React, {FC} from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {FaXTwitter} from 'react-icons/fa6'


const Footer:FC = () => {
  return (
    <div className="w-full md:h-[300px] h-[200px] bg-gray-200 absolute bottom-0">
        
        <div className="md:mx-8 mx-4" >

        </div>

        <div className="text-white px-12 w-full h-[60px] p-2 bg-primary absolute bottom-0 flex flex-col md:flex-row justify-around text-center">
         <span
         className="my-auto text-xs "
         >
         © Avisa / Disclaimer
         </span>

         <div className="flex mx-auto">
            <AiFillLinkedin
            fontSize={20}
            className="my-auto mx-4"
            />

            <BsInstagram
            fontSize={20}
            className="my-auto mx-4"
            />

            <FaXTwitter
            fontSize={20}
            className="my-auto mx-4"
            />
         </div>
        </div>
    </div>
  )
}

export default Footer