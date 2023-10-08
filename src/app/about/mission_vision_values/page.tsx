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
    <main className="bg-white relative flex min-h-screen lg:h-[1600px] md:h-[2000px] h-[2700px] flex-col items-center md:pb-36">
      <Navbar />
      <div className="md:mt-[50px]">
        </div>

        <div className="w-full h-[200px] bg-[url('/AllBanner.png')]"></div>

        
      <div id="" className="md:mb-48 mb-96 md:mx-36 mx-6 ">
      <h1 className="md:text-3xl text-2xl text-primary font-semibold m-8">
          Mission, Vision, Values
        </h1>

        <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="flex md:flex-row flex-col text-sm py-6 my-6 ">
          <motion.div 
          variants={fadeIn('up', 'tween', 0.1, 0.9)}
          className=" shadow shadow-primary text-black text-center justify-center md:px-24 p-6 m-8 flex flex-col  bg-white">
            <TbTargetArrow
              fontSize={75}
              className="mx-auto mb-4 text-primary"
            />
            <span className="text-lg font-bold text-primary">Mission</span>
            &quot;We are dedicated to revolutionizing healthcare accessibility
            in India, with a primary focus on hemoglobinopathy and maternal
            care. We dedicated enable efficient testing of hemoglobin related
            diseases, even in the remotest part of India. Our mission is to
            eradicate genetic diseases and reducing maternal mortality, enabling
            safe childbirth across the nation.&quot;
          </motion.div>

          <motion.div 
          variants={fadeIn('up', 'tween', 0.1, 0.9)}
          className=" shadow shadow-primary text-black text-center justify-center md:px-24 p-6 m-8 flex flex-col bg-white">
            <SlBadge fontSize={75} className="mx-auto mb-4 text-primary" />
            <span className="text-lg font-bold text-primary">Vision</span>
            &quot;Our vision aligns with the nation&apos;s goal to transform
            India into a nation free of sickle cell anemia and preventing
            maternal and infant mortality. We envision creating a nation where
            quality medical services are within the reach of every individual.
            In the coming years, Avisa Swasthya strives to be the cornerstone of
            change in the Indian healthcare landscape.&quot;
          </motion.div>
        </motion.div>

        <div className=" p-8">
          <div className="mx-auto text-center text-4xl font-bold text-primary">
            Our Values
          </div>

          <div className="flex flex-col">
            {Values.map((item) => (
              <div key={item.id} className="grid w-4/5 mx-auto grid-cols-10">
                <div className="text-6xl text-center font-bold md:my-auto text-primary col-span-1">
                  {item.char}
                </div>
                <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                className="flex flex-col p-2 font-semibold col-span-9 md:pl-0">
                  <div className="text-primary text-xl">{item.word}</div>
                  <motion.div 
                  variants={fadeIn('up', 'tween', 0.1, 0.9)}
                  className="text-black font-normal text-sm">
                    {item.desc}
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>


          {/* mobile view */}
         


     
    
      </div>

      <Footer/>
    </main>
  );
}

