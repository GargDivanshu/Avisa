"use client";

import React, { FC, useState, useRef, useEffect } from "react";
import { useRouter } from 'next/navigation'
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'


const Navbar: FC = ({missionRef, careRef}) => {

  const router = useRouter();
  // const missionRef = useRef(null);
  // useEffect(() => {
  //   if (missionRef) {
  //     missionRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }, [missionRef]);

  // useEffect(() => {
  //   if(careRef) {
  //     careRef.current.scrollIntoView({behavior: 'smooth'});
  //   }
  // }, [careRef])

  const handleMissionClick = () => {
    router.push('/about');
    setHidden(false)
    // if (missionRef) {
    //   missionRef.current.scrollIntoView({ behavior: 'smooth' });
    // }
  };

  const handleCareClick = () => {
    router.push('/about')
    setHidden(false)
  }


  const [hidden, setHidden] = useState<Boolean>(true);

  const [aboutHidden, setAboutHidden] = useState<Boolean>(false);

  const [hover, setHover] = useState(false);


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

  const closeNav = () => {
    setHidden(false)
  }

  const [mobileAbout, setMobileAbout] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  return (
    <>
      <div
    //   onMouseLeave={handleMouseLeave}
        onClick={handleMouseLeave}
        className="z-20 text-primary sm:flex fixed hidden bg-white w-full shadow-md border-b-[4px] border-b-primary p-1 "
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
        <ul className="flex font-semibold text-primary mx-auto my-4 mr-4">
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

        <Link href="/information_center">
            <li className="px-4 hover:text-black hover:cursor-pointer">Information Center</li>
          </Link>

          <Link href="/career">
            <li className="px-4 hover:text-black my-auto hover:cursor-pointer">
              Careers
            </li>
          </Link>

          <Link href="/contact">
            <li className="px-4 hover:text-black my-auto hover:cursor-pointer">
              Contact
            </li>
          </Link>


          {/* <Link 
            
            // onMouseOut={MouseOut}
            href="/Services"> */}

          {/* </Link> */}

        
        </ul>
      </div>
      <div 
      onMouseLeave={handleMouseLeave}
      className="w-[200px] h-fit mx-auto  text-sm">
      {showDropdown && (
        <div  className={`mx-auto z-10 fixed bg-white rounded-md p-4 mt-[60px] h-fit shadow-md w-[320px] text-center ${
            showDropdown ? "" : "hidden"}`}>
          {hoverAbout && (
            <ul className=" text-primary">
              <Link href="/about">
              <div className="py-2 text-left border-b-[1px] rounded-md hover:bg-black/10 p-4 duration-100 ease-in hover:cursor-pointer">
                Company Profile
              {/* <Link
              href="/about"
              >
              <li className="w-3/4 text-left mx-auto hover:text-black rounded-md hover:bg-black/10 p-1 duration-100 ease-in">About Us</li></Link>
              <Link
              href="/about/care_guidelines"
              >
              <li 
              className="w-3/4 text-left mx-auto hover:text-black rounded-md hover:bg-black/10 p-1 duration-100 ease-in">Care Guidelines</li>
              </Link> */}
              </div>
              </Link>
            
            <Link
            href="/about/mission_vision_values"
            >
              <li 
              className=" py-2 text-left border-b-[1px] rounded-md hover:bg-black/10 p-4 duration-100 ease-in hover:cursor-pointer">Mission,Vision,Values</li>
              </Link>
          
              <Link href="/about/team"><li className="py-2 text-left border-b-[1px] rounded-md hover:bg-black/10 p-4 duration-100 ease-in hover:cursor-pointer ">Our Team</li></Link>
            </ul>
          )}
          {hoverServices && (
            <ul className="text-primary text-sm">
              <Link href="/services/avisa_swasthya_hemoglobinopathy">
              <div className="hover:bg-black/10 rounded-md p-2 border-b-[1px] cursor-pointer duration-100 ease-in">
                Avisa Swasthya Hemoglobinopathy
              </div>
            </Link>

            <Link href="/services/avisa_swasthya_maternal_and_child_care">
              <div className="p-2 border-b-[1px] rounded-md hover:bg-black/10 cursor-pointer duration-100 ease-in">
                Avisa Swasthya Maternal and Child Care
              </div>
            </Link>

            <Link href="/services/avisa_swasthya_health_and_care_camps">
              <div className="hover:bg-black/10 rounded-md p-2 border-b-[1px] cursor-pointer duration-100 ease-in">
                Avisa Swasthya Health and Care Camp
              </div>
            </Link>

            <Link href="/services/avisa_swasthya_awareness">
              <div className="p-2 hover:bg-black/10 rounded-md border-b-[1px]  cursor-pointer duration-100 ease-in">
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

      <div className="p-6 py-1 sm:hidden fixed w-full justify-evenly z-30 bg-white shadow-lg ">
        <HiMenu
          onClick={() => setHidden(!hidden)}
          className="absolute  top-0 bottom-0 my-auto text-primary z-30"
          fontSize={32}
        />

        <Image
        src="/Avisa-Logo-noname.svg"
        width="90"
        height="70"
        alt="Avisa" 
        className="mx-auto"
        />
        <div
          className={`rounded-r-md w-full h-fit mx-auto left-0 right-0 shadow-lg bg-white z-20 mt-8 absolute w-fit ease-in-out duration-500 ${
            hidden ? "-translate-y-[900px] shadow-none" : "-translate-y-36"
          }`}
        >
          <ul className="flex flex-col mt-16 font-semibold">
            <Link 
            onClick={closeNav}
            href="/">
              <li className="shadow-lg p-4 hover:text-black hover:cursor-pointer text-primary text-center ">
                Home
              </li>
            </Link>

           
              <li 
              onClick={() => setMobileAbout(!mobileAbout)}
              className={`
              ${(!mobileAbout) ? "" : "border-b-[2px] border-primary"}
              shadow-lg p-4 hover:text-black hover:cursor-pointer text-primary text-center flex`}>
                <p
                className="mx-auto"
                >About</p>

                {
                  (mobileAbout) ? 
                  <MdKeyboardArrowDown
                fontSize={25}
                className=" text-primary"
                />
                : 
                <MdKeyboardArrowUp
                fontSize={25}
                className=" text-primary"
                />
                }
              </li>
              
              <div className={`${(mobileAbout)  ? ("ease-linear duration-900 transition bg-[#F4F4F4]") : ("ease-linear duration-900 transition hidden")}`}>          
               <Link
               href="/about"
               onClick={closeNav}
               >
               <li className={`p-2 hover:text-black hover:cursor-pointer text-sm text-primary text-center`}>
                Company Profile
              </li>
               </Link>

               {/* <Link
              href="/about/care_guidelines"
              >
               <li 
               className="p-2 hover:text-black hover:cursor-pointer text-sm text-primary text-center">
                Care Guidelines
              </li>
              </Link> */}
            

            <Link
            href="/about/mission_vision_values"
            >
               <li 
               className="p-2 hover:text-black hover:cursor-pointer text-sm text-primary text-center ">
               Mission,Vision,Values
              </li>
              </Link>
               

               <Link
               href="/about/team"
               onClick={closeNav}
               >
               <li className="p-2 hover:text-black hover:cursor-pointer text-sm text-primary text-center ">
               Our Team
              </li>
               </Link>
               </div>
          
              <li 
              onClick={() => setMobileServices(!mobileServices)}
              className={`
              ${(!mobileServices) ? "" : "border-b-[2px] border-primary"}
              shadow-lg p-4 hover:text-black hover:cursor-pointer text-primary text-center flex`}>
                <p
                className="mx-auto"
                >Services</p>
                {
                  (mobileServices) ? 
                  <MdKeyboardArrowDown
                fontSize={25}
                className=" text-primary"
                />
                : 
                <MdKeyboardArrowUp
                fontSize={25}
                className="text-primary"
                />
                }
              </li>

              <div 
              className={(mobileServices) ? "ease-linear duration-900 transition bg-[#F4F4F4]" : "hidden ease-linear duration-900 transition"}
              >
              <Link 
              onClick={closeNav}
              href="/services/avisa_swasthya_hemoglobinopathy">
              <div className="hover:bg-black/10 text-primary text-center rounded-md p-2 text-sm cursor-pointer duration-100 ease-in">
                Avisa Swasthya Hemoglobinopathy
              </div>
            </Link>

            <Link 
            onClick={closeNav}
            href="/services/avisa_swasthya_maternal_and_child_care">
              <div className="p-2 text-primary rounded-md text-center hover:bg-black/10 text-sm cursor-pointer duration-100 ease-in">
                Avisa Swasthya Maternal and Child Care
              </div>
            </Link>

            <Link 
            onClick={closeNav}
            href="/services/avisa_swasthya_awareness">
              <div className="p-2 text-center text-sm text-primary hover:bg-black/10 rounded-md cursor-pointer duration-100 ease-in">
                Avisa Swasthya Awareness
              </div>
            </Link>

            <Link 
            onClick={closeNav}
            href="/services/avisa_swasthya_health_and_care_camps">
              <div className="p-2 text-center text-sm text-primary hover:bg-black/10 rounded-md cursor-pointer duration-100 ease-in">
                Avisa Swasthya Health and Care Camp
              </div>
            </Link>
            </div>
          

            <Link 
            onClick={closeNav}
            href="/information_center">
              <li className="shadow-lg p-4 hover:text-black hover:cursor-pointer text-primary text-center ">
                Information Center
              </li>
            </Link>

            <Link 
            onClick={closeNav}
            href="/career">
              <li className="shadow-lg p-4 hover:text-black hover:cursor-pointer text-primary text-center ">
                Career
              </li>
            </Link>

            <Link 
            onClick={closeNav}
            href="/contact">
              <li className="shadow-lg p-4 hover:text-black hover:cursor-pointer text-primary text-center ">
                Contact
              </li>
            </Link>

            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
