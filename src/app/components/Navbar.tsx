'use client'

import React, {FC, useState} from 'react'
import {HiMenu} from 'react-icons/hi'
import Link from 'next/link'
const Navbar:FC = () => {
    
    const [hidden, setHidden] = useState<Boolean>(true)
    const handleConsole = () => {
        console.log("nwkeufh")
    }


  return (
    <>
    <div className="z-20 p-4 sm:flex fixed hidden bg-white w-full shadow-md">
        <ul className="flex text-sm font-semibold text-gray-500 mx-auto ">
            
            <Link href="/">
                <li className="px-4 hover:text-black hover:cursor-pointer">
                Home
                </li>
            </Link>

            <Link href="/about">
            <li className="px-4 hover:text-black hover:cursor-pointer">
                About
            </li>
            </Link>

            <Link href="/Contact">
            <li className="px-4 hover:text-black hover:cursor-pointer">
                Contact
            </li>
            </Link>

            <Link href="/Services">
            <li className="px-4 hover:text-black hover:cursor-pointer">
                Services
            </li>
            </Link>

            <Link href="/team">
            <li className="px-4 hover:text-black hover:cursor-pointer">
                Team
            </li>
            </Link>
        </ul>
    </div>

    <div className="p-4 sm:hidden relative w-full">
     <HiMenu
     onClick={() => setHidden(!hidden)}
     className="absolute left-0 top-0.5 text-black"
     fontSize={32}
     />
    <div className={`rounded-r-md shadow-lg shadow-primary bg-white z-20 mt-8 absolute min-h-screen w-4/5 ease-in-out duration-500 ${(hidden) ? ("-translate-x-96") : ("-translate-x-28")}`}>
        <ul className="flex flex-col mt-16 text-sm font-semibold">
        <Link href="/">
                <li className="px-4 hover:text-black hover:cursor-pointer text-secondary text-center py-2 border-y-[1px] border-primary/50">
                Home
                </li>
            </Link>

            <Link href="/about">
            <li className="px-4 hover:text-black hover:cursor-pointer text-secondary text-center py-2 border-b-[1px] border-primary/50">
                About
            </li>
            </Link>

            <Link href="/Contact">
            <li className="px-4 hover:text-black hover:cursor-pointer text-secondary text-center py-2 border-b-[1px] border-primary/50">
                Contact
            </li>
            </Link>

            <Link href="/Services">
            <li className="px-4 hover:text-black hover:cursor-pointer text-secondary text-center py-2 border-b-[1px] border-primary/50">
                Services
            </li>
            </Link>

            <Link href="/team">
            <li className="px-4 hover:text-black hover:cursor-pointer text-secondary text-center py-2 border-b-[1px] border-primary/50">
                Team
            </li>
            </Link>
        </ul>
     </div>
    </div>
</>
  )
}

export default Navbar