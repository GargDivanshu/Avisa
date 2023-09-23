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
    <main className="bg-white relative flex min-h-screen flex-col items-center md:px-36 px-6 md:pb-36">
      <Navbar />
      <div className="bg-transparent h-[100px]"></div>
      <div id="" className="md:mb-48 mb-96 w-11/12">
      {/* 
        <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        // viewport={{ once: false, amount: 0.25 }}
        className="grid md:grid-cols-2 grid-cols-1 my-4">
          <Image
            alt="Avisa Logo"
            src="/images/Avisa-Logo.svg"
            width="350"
            height="200"
            className=" border-r-[1px] border-primary text-primary"
          />

          <motion.div 
          variants={fadeIn('up', 'tween', 0.1, 0.9)}
          className="h-fit my-auto text-center font-bold text-gray-500 align-middle">
            At Avisa Swasthya, we are dedicated to transforming healthcare
            through innovation and compassion. With our advanced diagnostic
            solutions, we ensure accurate and accessible testing for all. From
            comprehensive prenatal and postnatal care to health education and
            community outreach, our mission is to empower individuals, families,
            and communities with personalized healthcare solutions for a
            healthier future.
          </motion.div>
        </motion.div>

        <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        ref={missionRef}
        className="flex md:flex-row flex-col text-sm py-6 my-6">
          <motion.div 
          variants={fadeIn('up', 'tween', 0.1, 0.9)}
          className=" shadow shadow-primary text-gray-500 text-center justify-center md:px-24 p-6 m-8 flex flex-col">
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
          className=" shadow shadow-primary text-gray-500 text-center justify-center md:px-24 p-6 m-8 flex flex-col">
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
                className="flex flex-col p-4 font-semibold col-span-9 pl-0">
                  <div className="text-primary">{item.word}</div>
                  <motion.div 
                  variants={fadeIn('up', 'tween', 0.1, 0.9)}
                  className="text-gray-500 font-normal text-sm">
                    {item.desc}
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div> */}

        <div
        // ref={careRef}
        >
          {/* laptop view */}
          <div className="mx-auto text-center text-4xl font-bold text-primary">
            Our Care Guidelines
          </div>


          <div className="sm:grid grid-cols-2 gap-4 text-white p-16 hidden">
            <div className="relative bg-primary h-24 gap-4">
              <div className="absolute top-0 left-0 p-2 text-sm w-4/5">
                Community participation in society at large.
              </div>

              <div className="absolute bottom-0 right-0 text-5xl font-bold bg-red-400 text-white rounded-tl-full p-4 text-center align-middle">
                C
              </div>
            </div>

            <div className="relative h-24 bg-primary gap-4">
              <div className="absolute text-5xl font-bold bottom-0 left-0 bg-red-400 text-white rounded-tr-full p-4 text-center align-middle">
                A
              </div>

              <div className="text-sm right-0 top-0 absolute p-2 w-4/5">
                Adequate deployment of products with latest technology.
              </div>
            </div>

            <div className="relative bg-primary h-24 gap-4">
              <div className="absolute right-0 top-0 font-bold text-5xl p-4 rounded-bl-full bg-red-400 text-white text-center align-middle">
                R
              </div>

              <div className="absolute left-0 bottom-0 p-2 text-sm w-4/5">
                Reduce gap between awareness Equal opportunities for one and
                all. & practice.
              </div>
            </div>

            <div className="relative bg-primary h-24 gap-4">
              <div className="absolute left-0 top-0 font-bold text-5xl p-4 rounded-br-full bg-red-400 text-white text-center align-middle">
                E
              </div>
              
              <div className="text-sm absolute bottom-0 right-0 p-2 w-4/5 text-right">
              Equal opportunities for one and all.
              </div>
            </div>
          </div>

          {/* mobile view */}
          <div className="sm:hidden grid grid-cols-1 my-16">

            <div className="flex flex-col w-10/12 mx-auto my-4">
               <div className="bg-red-400 text-white text-center text-6xl py-4">
                C
               </div>

               <div className="text-white bg-primary text-xl p-4 text-center">
               Community participation in society at large.
               </div>
            </div>


            <div className="flex flex-col w-10/12 mx-auto my-4">
               <div className="bg-red-400 text-white text-center text-6xl py-4">
                A
               </div>

               <div className="text-white bg-primary text-xl p-4 text-center">
               Adequate deployment of products with latest technology.
               </div>
            </div>


            <div className="flex flex-col w-10/12 mx-auto my-4">
               <div className="bg-red-400 text-white text-center text-6xl py-4">
                R
               </div>

               <div className="text-white bg-primary text-xl p-4 text-center">
               Reduce gap between awareness Equal opportunities for one and
                all. & practice.
               </div>
            </div>


            <div className="flex flex-col w-10/12 mx-auto my-4">
               <div className="bg-red-400 text-white text-center text-6xl py-4">
                E
               </div>

               <div className="text-white bg-primary text-xl p-4 text-center">
               Equal opportunities for one and all.
               </div>
            </div>


          </div>
        </div>
      </div>

      <Footer/>
    </main>
  );
}
