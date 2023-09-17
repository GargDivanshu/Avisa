import React, { FC } from "react";
import Image from 'next/image'


const About: FC = () => {
  return (
    <div className="shadow-md rounded-md md:w-3/4 w-full md:grid md:grid-cols-3 grid-cols-1 justify-center text-center">
      <div className="md:text-4xl sm:text-xl font-bold p-4 col-span-1">Who We Are ?</div>

      <div className="md:col-span-2 text-gray-500 text-sm p-4">
        At Avisa Swasthya, we are dedicated to transforming healthcare through
        innovation and compassion. With our advanced diagnostic solutions, we
        ensure accurate and accessible testing for all. From comprehensive
        prenatal and postnatal care to health education and community outreach,
        our mission is to empower individuals, families, and communities with
        personalized healthcare solutions for a healthier future.
      </div>


      <span className="text-center md:text-4xl sm:text-lg text-primary font-bold col-span-4 py-4">
        OUR SERVICES
      </span>
      <div className="grid md:grid-cols-4 grid-cols-1 col-span-3 text-sm font-semibold text-white">
        <div className="bg-primary p-4 flex flex-col">
          <Image 
          src="/1.png"
          alt="Avisa Swasthya Hemoglobinopathy"
          width="75"
          height="75"
          className="mx-auto my-4"
          />
        Avisa Swasthya Hemoglobinopathy
        </div>
        <div className="bg-primary/90 p-4 flex flex-col">
        <Image 
          src="/2.png"
          alt="Avisa Swasthya Hemoglobinopathy"
          width="75"
          height="75"
          className="mx-auto my-4"
          />
        Avisa Swasthya Maternal and Child Care 
        </div>
        <div className="bg-primary/80 p-4 flex flex-col">
        <Image 
          src="/3.png"
          alt="Avisa Swasthya Hemoglobinopathy"
          width="75"
          height="75"
          className="mx-auto my-4"
          />
        Avisa Swasthya Awareness
        </div>
        <div className="bg-primary/70 p-4 flex flex-col">
        <Image 
          src="/4.png"
          alt="Avisa Swasthya Hemoglobinopathy"
          width="75"
          height="75"
          className="mx-auto my-4"
          />
        Avisa Swasthya Health and Care Camps
        </div>
      </div>
    </div>
  );
};

export default About;
