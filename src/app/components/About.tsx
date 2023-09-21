import React, { FC } from "react";
import Image from 'next/image'
import Link from 'next/link'
import {fadeIn, staggerContainer, textVariant} from './../utils/motion'
import {motion} from 'framer-motion'

const About: FC = () => {
  return (
    <div className="shadow-md rounded-md md:w-full w-full flex flex-col justify-center text-center">

<motion.div 
variants={staggerContainer}
initial="hidden"
whileInView="show"
// viewport={{ once: false, amount: 0.1 }}
className="md:text-5xl text-3xl font-bold h-fit my-auto text-primary">
  <motion.p
  // variants={fadeIn('up', 'tween', 0.2, 1)}
  >
    About Us
  </motion.p>
  
  </motion.div>
      <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      // viewport={{ once: false, amount: 0.1 }}
      className="md:text-3xl text-2xl font-bold h-fit my-auto text-primary">
        <motion.p
        className="py-8"
        // variants={fadeIn('up', 'tween', 0.2, 1)}
        >Who We Are ?
        </motion.p></motion.div>

      <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      // viewport={{ once: false, amount: 0.1 }}
      className="md:col-span-2 text-gray-500 p-2">
       <motion.p
         variants={fadeIn('up', 'tween', 0.1, 0.9)}
       >

At Avisa Swasthya, we are dedicated to transforming healthcare through
        innovation and compassion. With our advanced diagnostic solutions, we
        ensure accurate and accessible testing for all. From comprehensive
        prenatal and postnatal care to health education and community outreach,
        our mission is to empower individuals, families, and communities with
        personalized healthcare solutions for a healthier future.
       </motion.p>
      
      </motion.div>


      <motion.span 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      // viewport={{ once: false, amount: 0.1 }}
      className="text-center md:text-3xl text-2xl  text-primary font-bold col-span-4 py-4">
        <motion.p
      //  variants={fadeIn('up', 'tween', 0.2, 1)}
        >OUR SERVICES</motion.p>
        
      </motion.span>
      <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      // viewport={{ once: false, amount: 0.1 }}
      className="grid md:grid-cols-4 grid-cols-1 col-span-3 text-sm font-semibold text-white">
       <Link
       href="/services/avisa_swasthya_hemoglobinopathy"
       >
        <div 
        // variants={fadeIn('up', 'tween', 0.1, 0.9)}
        className="bg-primary p-4 flex flex-col py-8  hover:transform hover:scale-y-110 hover:scale-x-110 hover:transform-origin-bottom duration-500">
          <Image 
          src="/1.png"
          alt="Avisa Swasthya Hemoglobinopathy"
          width="75"
          height="75"
          className="mx-auto my-4 "
          />
        Avisa Swasthya<br/> Hemoglobinopathy
        </div>
        </Link>

        <Link
        href="/services/avisa_swasthya_maternal_and_child_care"
        >
        <div 
        // variants={fadeIn('up', 'tween', 0.1, 0.9)}
        className="bg-primary/90 p-4 flex flex-col py-8 hover:transform hover:scale-y-110 hover:scale-x-110 hover:transform-origin-bottom duration-500">
        <Image 
          src="/2.png"
          alt="Avisa Swasthya Hemoglobinopathy"
          width="75"
          height="75"
          className="mx-auto my-4"
          />
        Avisa Swasthya Maternal and Child Care 
        </div>
        </Link>



        <div 
        // variants={fadeIn('up', 'tween', 0.1, 0.9)}
        className="bg-primary/70 p-4 flex flex-col py-8 hover:transform hover:scale-y-110 hover:scale-x-110 hover:transform-origin-bottom duration-500">
        <Image 
          src="/4.png"
          alt="Avisa Swasthya Hemoglobinopathy"
          width="75"
          height="75"
          className="mx-auto my-4"
          />
        Avisa Swasthya Health and Care Camps
        </div>
        <Link
        href="/services/avisa_swasthya_awareness"
        >
        <div 
        // variants={fadeIn('up', 'tween', 0.1, 0.9)}
        className="bg-primary/80 p-4 flex flex-col py-8 hover:transform hover:scale-y-110 hover:scale-x-110 hover:transform-origin-bottom duration-500">
        <Image 
          src="/3.png"
          alt="Avisa Swasthya Hemoglobinopathy"
          width="75"
          height="75"
          className="mx-auto my-4"
          />
        Avisa Swasthya <br/> Awareness
        </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default About;
