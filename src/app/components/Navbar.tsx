"use client";

import React, { FC, useState, useRef, useEffect } from "react";
import { useRouter } from 'next/navigation'
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

const Navbar: FC = ({missionRef, careRef}) => {

  const router = useRouter();
  // const missionRef = useRef(null);
  useEffect(() => {
    if (missionRef) {
      missionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [missionRef]);

  useEffect(() => {
    if(careRef) {
      careRef.current.scrollIntoView({behavior: 'smooth'});
    }
  }, [careRef])

  const handleMissionClick = () => {
    router.push('/about');
    // if (missionRef) {
    //   missionRef.current.scrollIntoView({ behavior: 'smooth' });
    // }
  };

  const handleCareClick = () => {
    router.push('/about')
  }


  const [hidden, setHidden] = useState<Boolean>(true);

  const [aboutHidden, setAboutHidden] = useState<Boolean>(false);

  const [hover, setHover] = useState(false);

  console.log(hover + " hover");
  function MouseOver(event: React.MouseEvent) {
    setHover(true);
  }
  function MouseOut(event: React.MouseEvent) {
    setHover(false);
  }

  function MouseOverAbout(event: React.MouseEvent) {
    setAboutHidden(true);
  }
  function MouseOutAbout(event: React.MouseEvent) {
    setAboutHidden(false);
  }

  const [hoverAbout, setHoverAbout] = useState(false);
  const [hoverServices, setHoverServices] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseOverAbout = () => {
    setHoverAbout(true);
    setShowDropdown(true);
    setHoverServices(false);
  };

  const handleMouseOverServices = () => {
    setHoverServices(true);
    setShowDropdown(true);
    setHoverAbout(false);
  };

  const handleMouseLeave = () => {
    setHoverAbout(false);
    setHoverServices(false);
    setShowDropdown(false);
  };

  return (
    <>
      <div
    //   onMouseLeave={handleMouseLeave}
        onClick={handleMouseLeave}
        className="z-20 sm:flex fixed hidden bg-white w-full shadow-md border-b-[4px] border-b-primary p-1"
      >
        <Link
        href="/"
        >
        <Image
          src="/Avisa-Logo-noname.svg"
          alt="Avisa"
          width="100"
          height="40"
          className="ml-8"
        />
        </Link>
        <ul className="flex font-semibold text-gray-500 mx-auto my-4">
          <Link href="/">
            <li className="px-4 hover:text-black hover:cursor-pointer">Home</li>
          </Link>

          <Link onMouseOver={handleMouseOverAbout} href="/about">
          <li className="px-4 hover:text-black hover:cursor-pointer">
            About
          </li>
        </Link>
        <li
          onMouseOver={handleMouseOverServices}
          className="px-4 hover:text-black hover:cursor-pointer"
        >
          Services
        </li>

          <Link href="/contact">
            <li className="px-4 hover:text-black my-auto hover:cursor-pointer">
              Contact
            </li>
          </Link>

          {/* <Link 
            
            // onMouseOut={MouseOut}
            href="/Services"> */}

          {/* </Link> */}

          <Link href="/information_center">
            <li className="px-4 hover:text-black hover:cursor-pointer">Information Center</li>
          </Link>
        </ul>
      </div>
      <div 
      onMouseLeave={handleMouseLeave}
      className="w-[200px] h-fit mx-auto">
      {showDropdown && (
        <div  className={`mx-auto z-10 fixed bg-white rounded-md p-4 mt-[60px] h-fit shadow-md w-[320px] text-center ${
            showDropdown ? "" : "hidden"}`}>
          {hoverAbout && (
            <ul className=" text-gray-500">
              <div className=" hover:cursor-pointer py-2 text-left flex flex-col border-b-[1px]  ">
                Company Profile
              <Link
              href="/about"
              >
              <li className="w-3/4 text-left mx-auto hover:text-black rounded-md hover:bg-black/10 p-1 duration-100 ease-in">About Us</li></Link>
              <li 
              onClick={handleCareClick}
              className="w-3/4 text-left mx-auto hover:text-black rounded-md hover:bg-black/10 p-1 duration-100 ease-in">Care Guidelines</li>
              </div>
            
              <li 
              onClick={handleMissionClick}
              className="hover:text-black py-2 text-left border-b-[1px] rounded-md hover:bg-black/10 p-4 duration-100 ease-in">Mission,Vision,Values</li>
         
              <Link href="/team"><li className="rounded-md hover:bg-black/10 hover:text-black hover:cursor-pointer p-4 duration-100 ease-in text-left border-b-[1px] ">Our Team</li></Link>
            </ul>
          )}
          {hoverServices && (
            <ul className="text-gray-500">
              <Link href="/services/avisa_swasthya_hemoglobinopathy">
              <div className="hover:bg-black/10 rounded-md p-4 border-b-[1px] cursor-pointer duration-100 ease-in">
                Avisa Swasthya Hemoglobinopathy
              </div>
            </Link>

            <Link href="/services/avisa_swasthya_maternal_and_child_care">
              <div className="p-4 border-b-[1px] rounded-md hover:bg-black/10 cursor-pointer duration-100 ease-in">
                Avisa Swasthya Maternal and Child Care
              </div>
            </Link>

            <Link href="/services/avisa_swasthya_awareness">
              <div className="p-4 hover:bg-black/10 rounded-md border-b-[1px]  cursor-pointer duration-100 ease-in">
                Avisa Swasthya Awareness
              </div>
            </Link>
            </ul>
          )}
        </div>
      )}
        </div>
      
      {/* <div className="w-1/4 h-fit mx-auto">
        <div
          onMouseOver={MouseOver}
          onMouseOut={MouseOut}
          className={`mx-auto z-10 fixed bg-white rounded-md p-4 mt-[60px] h-fit shadow-md w-fit ${
            hover ? "" : "hidden"
          }`}
        >
          <div className="flex flex-col m-auto h-fit text-sm">
            <Link href="/services/avisa_swasthya_hemoglobinopathy">
              <div className="hover:bg-black/10 rounded-md p-4 border-b-[1px] cursor-pointer duration-100 ease-in">
                Avisa Swasthya Hemoglobinopathy
              </div>
            </Link>

            <Link href="/services/avisa_swasthya_maternal_and_child_care">
              <div className="p-4 border-b-[1px] rounded-md hover:bg-black/10 cursor-pointer">
                Avisa Swasthya Maternal and Child Care
              </div>
            </Link>

            <Link href="/services/avisa_swasthya_awareness">
              <div className="p-4 hover:bg-black/10 rounded-md  cursor-pointer">
                Avisa Swasthya Awareness
              </div>
            </Link>
          </div>
        </div>

        <div className="w-1/4 h-fit mx-auto">
          <div
            onMouseOver={MouseOverAbout}
            onMouseOut={MouseOutAbout}
            className={`mx-auto z-10 fixed bg-white rounded-md p-4 mt-[60px] h-fit shadow-md w-fit ${
              aboutHidden ? "" : "hidden"
            }`}
          >
            <div className="flex flex-col m-auto h-fit text-sm">
              <Link href="/services/avisa_swasthya_hemoglobinopathy">
                <div className="hover:bg-black/10 rounded-md p-4 border-b-[1px] cursor-pointer duration-100 ease-in">
                  Avisa Swasthya Hemoglobinopathy
                </div>
              </Link>

              <Link href="/services/avisa_swasthya_maternal_and_child_care">
                <div className="p-4 border-b-[1px] rounded-md hover:bg-black/10 cursor-pointer">
                  Avisa Swasthya Maternal and Child Care
                </div>
              </Link>

              <Link href="/services/avisa_swasthya_awareness">
                <div className="p-4 hover:bg-black/10 rounded-md  cursor-pointer">
                  Avisa Swasthya Awareness
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      <div className="p-4 sm:hidden relative w-full">
        <HiMenu
          onClick={() => setHidden(!hidden)}
          className="absolute left-0 top-0.5 text-black"
          fontSize={32}
        />
        <div
          className={`rounded-r-md shadow-lg bg-white z-20 mt-8 absolute min-h-screen w-4/5 ease-in-out duration-500 ${
            hidden ? "-translate-x-96" : "-translate-x-28"
          }`}
        >
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

            <Link href="/Services">
              <li className="px-4 hover:text-black hover:cursor-pointer text-secondary text-center py-2 border-b-[1px] border-primary/50">
                Services
              </li>
            </Link>

            <Link href="/contact">
              <li className="px-4 hover:text-black hover:cursor-pointer text-secondary text-center py-2 border-b-[1px] border-primary/50">
                Contact
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
  );
};

export default Navbar;
