import React, { FC } from "react";
import Image from 'next/image'
import Link from 'next/link'



const About: FC = () => {
  return (
    <div className="shadow-md rounded-md md:w-3/4 w-full flex flex-col justify-center text-center h-screen">

<div className="md:text-5xl sm:text-3xl font-bold h-fit my-auto text-primary">About Us</div>
      <div className="md:text-3xl sm:text-xl font-bold h-fit my-auto text-primary">Who We Are ?</div>

      <div className="md:col-span-2 text-gray-500 p-2">
        At Avisa Swasthya, we are dedicated to transforming healthcare through
        innovation and compassion. With our advanced diagnostic solutions, we
        ensure accurate and accessible testing for all. From comprehensive
        prenatal and postnatal care to health education and community outreach,
        our mission is to empower individuals, families, and communities with
        personalized healthcare solutions for a healthier future.
      </div>


      <span className="text-center md:text-3xl sm:text-xl  text-primary font-bold col-span-4 py-4">
        OUR SERVICES
      </span>
      <div className="grid md:grid-cols-4 grid-cols-1 col-span-3 text-sm font-semibold text-white">
       <Link
       href="/services/avisa_swasthya_hemoglobinopathy"
       >
        <div 
        style={{
          
        }}
        className="bg-primary p-4 flex flex-col py-8  hover:transform hover:scale-y-110 hover:scale-x-110 hover:transform-origin-bottom duration-500">
          <Image 
          src="/1.png"
          alt="Avisa Swasthya Hemoglobinopathy"
          width="75"
          height="75"
          className="mx-auto my-4 "
          />
        Avisa Swasthya Hemoglobinopathy
        </div>
        </Link>

        <Link
        href="/services/avisa_swasthya_maternal_and_child_care"
        >
        <div className="bg-primary/90 p-4 flex flex-col py-8 hover:transform hover:scale-y-110 hover:scale-x-110 hover:transform-origin-bottom duration-500">
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



        <div className="bg-primary/70 p-4 flex flex-col py-8 hover:transform hover:scale-y-110 hover:scale-x-110 hover:transform-origin-bottom duration-500">
        <Image 
          src="/4.png"
          alt="Avisa Swasthya Hemoglobinopathy"
          width="75"
          height="75"
          className="mx-auto my-4"
          />
        Avisa Swasthya Health and Care Camps
        </div>
        <div className="bg-primary/80 p-4 flex flex-col py-8 hover:transform hover:scale-y-110 hover:scale-x-110 hover:transform-origin-bottom duration-500">
        <Image 
          src="/3.png"
          alt="Avisa Swasthya Hemoglobinopathy"
          width="75"
          height="75"
          className="mx-auto my-4"
          />
        Avisa Swasthya Awareness
        </div>
      </div>
    </div>
  );
};

export default About;
