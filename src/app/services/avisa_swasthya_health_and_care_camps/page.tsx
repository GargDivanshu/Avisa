"use client";

import React from "react";
import Navbar from "./../../components/Navbar";
import Footer from "./../../components/Footer";
import Image from "next/image";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

export default function Page() {
  const data = {
    datasets: [
      {
        // label: '# of Votes',
        data: [20, 20, 20, 20, 20],
        backgroundColor: [
          "rgb(190, 58, 60, 1)",
          "rgb(190, 58, 60, 0.8)",
          "rgb(190, 58, 60, 0.6)",
          "rgb(190, 58, 60, 0.4)",
          "rgb(190, 58, 60, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {},
  };

  return (
    <div className="text-black bg-white md:h-[2400px] h-[4500px] mx-auto relative">
      <Navbar />
      <div className="bg-transparent h-[50px]"></div>
      <div className="w-full bg-[url('/AllBanner.png')] object-cover h-[200px] blur-sm"></div>
      <div className="rounded-md absolute top-16 md:top-40 left-0 right-0 mx-auto w-11/12 h-fit bg-white py-24">
        {/* <div className="mx-auto w-2/5 h-fit text-center md:text-3xl font-bold text-primary text-xl">
        Vacuum Assisted Delivery Machine
        </div>

        <div className="w-3/5 my-2 pb-8 border-b-[1px] border-primary mx-auto h-fit text-lg text-center">
        Avisa, in collaboration with Medela Healthcare, is dedicated to improving maternal and child care by introducing a Vacuum Assisted Delivery (VAD) Machine. This innovative device assists healthcare professionals in safe and effective childbirth. Avisa's VAD machine is designed to provide controlled suction to aid in the delivery process, reducing maternal and fetal complications. By partnering with Medela Healthcare, Avisa ensures the availability of advanced medical equipment to healthcare facilities, promoting better outcomes for both mothers and babies. The VAD machine enhances obstetric care, allowing healthcare providers to manage complicated deliveries with precision and improved safety. Avisa's commitment to maternal and child care is evident through their efforts to introduce this cutting-edge technology.

        </div>

        */}

        <div className="w-4/5 text-3xl text-primary font-bold mx-auto py-4 text-center">
          Avisa Swasthya Health and Care Camp
        </div>

        <div className="md:w-3/5 w-4/5 my-2 pb-8 border-b-[1px] border-primary text-black mx-auto h-fit text-lg text-center">
        Our main goal is to help people lead healthier lives by providing useful
information. We&apos;re dedicated to creating educational programs about
health for different ages and communities. Our aim is to make more
people aware of how to prevent illnesses, manage diseases, and live
healthily. Our programs, led by our knowledgeable healthcare team,
include workshops, talks, and interactive sessions. We also believe in
the importance of research to make healthcare better. We&apos;re teaming
up with respected medical institutions and experts to improve medical
knowledge, find new ways of treating health issues, and tackle common
community health problems. At Avisa Swasthya, we&apos;re here to promote
health awareness and drive important research for a healthier future.&quot;
        </div>

        <div className="w-3/5 text-center h-fit mx-auto my-16 grid md:grid-cols-2 grid-cols-1 border-b-[1px] border-primary">
          {/* <div className="col-span-1 p-8">
            <Doughnut data={data} options={options} />
          </div> */}
        
          
        <div className="text-xl text-black font-bold py-4 my-auto flex flex-col h-full ">
                <img 
                src="/15.png"
                alt="Mass Sickle Cell and Thalassemia Diagnosis"
                className="md:w-[100px] w-[75px] aspect-auto mx-auto my-8"
                />
                Mass Sickle Cell and Thalassemia Diagnosis
              </div>

              <div className="text-xl text-black font-bold py-4 my-auto flex flex-col h-full ">
                <img 
                src="/16.png"
                alt="Mass General Health Check-Up "
                className="md:w-[100px] w-[75px] aspect-auto mx-auto my-8"
                />
                Mass General Health Check-Up 
              </div>
{/* 
              <li className="text-xl font-bold py-4 my-auto">
                Counseling for Genetic Diseases
              </li> */}
{/* 
              <li className="text-xl font-bold py-4 my-auto">
                Postnatal Care
              </li>

              <li className="text-xl font-bold py-4 my-auto">
                Antenatal Care
              </li> */}
           
          </div>
      

        

        <div className="text-center w-4/5 text-3xl text-primary font-bold mx-auto py-4">
          Sickle Cell and Thalassemia Diagnosis
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:mx-28 py-4 border-b-[1px] border-b-primary">
        <div className="text-xl col-span-1 font-bold py-4 my-auto flex flex-col h-full">
                <img 
                src="/17.png"
                alt="Screening and Diagnosis"
                className="md:w-[200px] w-[125px] aspect-auto mx-auto my-8"
                />
                </div>
          <div className="col-span-2 p-2">
          <li className="py-2">
              We regularly organize health check-up camps in targeted regions,
specifically designed to identify and prevent hemoglobin-related
diseases such as sickle cell anemia and thalassemia.
            </li>

            <li className="py-2">
              Our camps prioritize early detection as a cornerstone of preventive
healthcare. By offering accessible and free screenings, we empower
individuals to identify hemoglobin disorders at an early stage, enabling
timely intervention and personalized care
            </li>

            <li className="py-2">
              Our team of skilled healthcare professionals doesn&apos;t stop at diagnosis.
We provide expert-led awareness sessions and counseling during these
camps, ensuring participants understand the implications of
hemoglobin-related conditions and guiding them toward informed
healthcare decisions.
            </li>

            <li className="py-2">
              We actively contribute to community health improvement. By detecting
and preventing hemoglobin-related diseases, we work toward healthier
futures, fostering well-being, and reducing the burden of these
conditions on individuals and families.

            </li>
          </div>
        </div>

        <div className="w-4/5 text-3xl text-primary font-bold mx-auto py-4 text-center my-8">
          General Health Camps
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:mx-28 py-4 border-b-[1px] border-b-primary">
        <div className="text-xl col-span-1 font-bold py-4 my-auto flex flex-col h-full">
                <img 
                src="/18.png"
                alt="Screening and Diagnosis"
                className="md:w-[200px] w-[125px] aspect-auto mx-auto my-8"
                />
                </div>
          <div className="col-span-2 p-2 ">
          <li className="py-2">
              Avisa Swasthya is committed to equitable healthcare access. We organize
general health check-up camps in regions lacking proper medical facilities,
ensuring that even underprivileged communities receive essential
healthcare services.
            </li>

            <li className="py-2">
              Our camps aim to bridge the healthcare gap by providing comprehensive
check-ups to individuals who might otherwise have limited access to
medical attention.

            </li>

            <li className="py-2">
              Beyond diagnosing health issues, our camps focus on preventive care. We
offer screenings, consultations, and health education to empower
participants with knowledge about maintaining well-being and making
informed lifestyle choices.
            </li>

            <li className="py-2">
              By conducting general health check-up camps in underserved areas, we
contribute to the overall health and vitality of underprivileged individuals,
fostering a healthier and more resilient community.

            </li>
          </div>
        </div>

        {/* <div className="w-4/5 text-3xl text-primary font-bold mx-auto py-4 text-center my-8">
        Counseling for Genetic Diseases
        </div> */}
        {/* <div className="grid md:grid-cols-2 grid-cols-1 px-16">
          <div className="col-span-1 p-4">
          Beyond diagnosing health issues, our camps focus on preventive care. We
offer screenings, consultations, and health education to empower
participants with knowledge about maintaining well-being and making
informed lifestyle choices.

          </div>
          <div>some image</div>
        </div> */}


        {/* <div className="w-4/5 text-3xl text-primary font-bold mx-auto py-4 text-center my-8">
        Postnatal Care 
        </div> */}
        {/* <div className="grid md:grid-cols-2 grid-cols-1 px-16">
          <div>some image</div>
          <div className="col-span-1 p-4 ">
          By conducting general health check-up camps in underserved areas, we
contribute to the overall health and vitality of underprivileged individuals,
fostering a healthier and more resilient community.
          </div>
        </div> */}

        {/* <div className="w-4/5 text-3xl text-primary font-bold mx-auto py-4 text-center my-8">
        Antenatal Care
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 px-16">
          <div className="col-span-1 p-4">
          At Avisa Swasthya, we will be at the forefront of providing comprehensive antenatal care to support the health and well-being of expectant mothers. Our dedicated team of healthcare professionals will offer regular check-ups, screenings, and personalized guidance throughout the pregnancy journey. We will provide essential services such as prenatal tests, ultrasound scans, and nutritional counseling to ensure a healthy pregnancy. With our advanced thalassaemia diagnosis machine, we will identify any potential genetic risks early on, enabling proactive measures and tailored care. Through our holistic approach to antenatal care, we will empower mothers with the knowledge and support needed for a safe and successful pregnancy.
          </div>
          <div>some image</div>
        </div> */}


      </div>

      <Footer/>
    </div>
  );
}
