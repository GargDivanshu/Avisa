"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "./../../components/Navbar";
import { TbTargetArrow } from "react-icons/tb";
import { SlBadge } from "react-icons/sl";
import Footer from './../../components/Footer';
import {motion} from 'framer-motion'
import {fadeIn, staggerContainer, textVariant} from './../../utils/motion'
// type Props = {
//   missionRef?: MutableRefObject<null>;
//   careRef?: MutableRefObject<null>;
// };


export default function Page() {

  // const useMouseMove = () => {
  //   useEffect(() => {
  //     const handleMouseMove = (e: MouseEventInit) => {
  //       const cards = document.getElementsByClassName("card");
  //       for (const card of cards) {
  //         const rect = card.getBoundingClientRect();
  //         const x = e.clientX - rect.left;
  //         const y = e.clientY - rect.top;
  //         card.style.setProperty("--mouse-x", `${x}px`);
  //         card.style.setProperty("--mouse-y", `${y}px`);
  //       }
  //     };

  //     document.getElementById("cards").addEventListener("mousemove", handleMouseMove);

  //     return () => {
  //       document.getElementById("cards").removeEventListener("mousemove", handleMouseMove);
  //     };
  //   }, []);
  // };

  const Values = [
    {
      id: 1,
      char: "A",
      word: "ccessibility",
      desc: "We commit ourselves to ensure every individual, irrespective of location, has access to our advanced healthcare services",
    },
    {
      id: 2,
      char: "V",
      word: "isionary Innovation",
      desc: "We constantly push the boundaries of possibilities in healthcare, embracing AI, and advanced technologies.",
    },
    {
      id: 3,
      char: "I",
      word: "ntegrity",
      desc: "We uphold the standards of professional conduct, promising transparency, honesty, and respect in all our interactions.",
    },
    {
      id: 4,
      char: "S",
      word: "ervice Excellence",
      desc: "We strive to go beyond expectations, delivering top-tier healthcare services and creating a patient-centered environment.",
    },
    {
      id: 5,
      char: "A",
      word: "mbition",
      desc: "We work relentlessly to pursue our goal of eradicating sickle cell disease from India and reducing maternal immortality.",
    },
  ];

  return (
    <main className="bg-white relative flex min-h-screen h-[1800px] flex-col items-center md:px-36 px-6 md:pb-36">
      <Navbar />
      <div className="bg-transparent h-[100px]"></div>
      

      <Footer/>
    </main>
  );
}
