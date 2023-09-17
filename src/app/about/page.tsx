"use client";
import React , {useEffect} from 'react'
import Image from "next/image";
import Navbar from './../components/Navbar';
import {TbTargetArrow} from 'react-icons/tb'
import {SlBadge} from 'react-icons/sl'


export default function Page() {

  const useMouseMove = () => {
    useEffect(() => {
      const handleMouseMove = (e) => {
        const cards = document.getElementsByClassName("card");
        for (const card of cards) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        }
      };
  
      document.getElementById("cards").addEventListener("mousemove", handleMouseMove);
  
      return () => {
        document.getElementById("cards").removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
  };

  const Values = [
    {
      id: 1,
      char: 'A',
      word: 'ccessibility',
      desc: 'We commit ourselves to ensure every individual, irrespective of location, has access to our advanced healthcare services',
    },
    {
      id: 2,
      char: 'V',
      word: 'isionary Innovation',
      desc: 'We constantly push the boundaries of possibilities in healthcare, embracing AI, and advanced technologies.',
    },
    {
      id: 3,
      char: 'I',
      word: 'ccessibility',
      desc: 'We commit ourselves to ensure every individual, irrespective of location, has access to our advanced healthcare services',
    },
    {
      id: 4,
      char: 'S',
      word: 'ccessibility',
      desc: 'We commit ourselves to ensure every individual, irrespective of location, has access to our advanced healthcare services',
    },
    {
      id: 5,
      char: 'A',
      word: 'ccessibility',
      desc: 'We commit ourselves to ensure every individual, irrespective of location, has access to our advanced healthcare services',
    },
  ]


  return (
    <main className="bg-white relative flex min-h-screen flex-col items-center md:px-36 px-6">
      <Navbar/>
      <div className="bg-transparent h-[100px]">
      </div>
      <div id="">
        <div className="grid md:grid-cols-2 grid-cols-1 my-4">
          <Image
          
            alt="Avisa Logo"
            src="/images/Avisa-Logo.svg"
            width="350"
            height="200"
            className=" border-r-[1px] border-primary text-primary"
          />

          <div className="text-center font-bold text-gray-500 align-middle">
          At Avisa Swasthya, we are dedicated to transforming healthcare through
        innovation and compassion. With our advanced diagnostic solutions, we
        ensure accurate and accessible testing for all. From comprehensive
        prenatal and postnatal care to health education and community outreach,
        our mission is to empower individuals, families, and communities with
        personalized healthcare solutions for a healthier future.
          </div>
        </div>

        <div className="flex md:flex-row flex-col text-sm my-12">
        <div className=" shadow shadow-primary text-gray-500 text-center justify-center md:px-24 p-6 m-8 flex flex-col">
          <TbTargetArrow
          fontSize={75}
          className="mx-auto mb-4 text-primary"
          />
          <span className="text-lg font-bold text-primary">
            Mission
          </span>
        &quot;We are dedicated to revolutionizing healthcare accessibility in India, with a primary focus on hemoglobinopathy
and maternal care. We dedicated enable efficient testing of hemoglobin related diseases, even in the remotest
part of India. Our mission is to eradicate genetic diseases and reducing maternal mortality, enabling safe
childbirth across the nation.&quot;
        </div>

        <div className=" shadow shadow-primary text-gray-500 text-center justify-center md:px-24 p-6 m-8 flex flex-col">
        <SlBadge
          fontSize={75}
          className="mx-auto mb-4 text-primary"
          />
          <span className="text-lg font-bold text-primary">
            Vision
          </span>
        &quot;Our vision aligns with the nation&apos;s goal to transform India into a nation free of sickle cell anemia and preventing
maternal and infant mortality. We envision creating a nation where quality medical services are within the reach of
every individual. In the coming years, Avisa Swasthya strives to be the cornerstone of change in the Indian
healthcare landscape.&quot;
        </div>
        </div>


        <div className="mx-auto text-center text-4xl font-bold text-primary">
          Our Values
        </div>

        <div className="flex flex-col">
          
            
            {
              Values.map((item) => (
<div 
key={item.id}
className="grid w-3/5 mx-auto grid-cols-10">
              <div className="text-6xl text-center font-bold md:my-auto text-primary col-span-1">
              {item.char}
            </div>
            <div className="flex flex-col p-4 font-semibold col-span-9">
              <div className="text-primary">
                {item.word}
              </div>
              <div className="text-gray-500 font-normal text-sm">
              {item.desc}
              </div>
            </div>
            </div>
                          ))
            }
            
         
        </div>


      </div>
    </main>
  );
}
