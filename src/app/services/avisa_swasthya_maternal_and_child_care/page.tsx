/* eslint-disable @next/next/no-img-element */
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
        data: [25, 25, 25, 25],
        backgroundColor: [
          // "rgb(190, 58, 60, 1)",
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
    <div className="text-black bg-white md:h-[3300px] h-[6300px] mx-auto relative">
      <Navbar />
      <div className="bg-transparent h-[50px]"></div>
      <div className="w-full bg-[url('/blood.jpg')] object-cover h-[200px] blur-sm"></div>
      <div className="rounded-md absolute top-16 md:top-40 left-0 right-0 mx-auto w-11/12 h-fit bg-white">
        {/* <div className="mx-auto w-2/5 h-fit text-center md:text-3xl font-bold text-primary text-xl">
        Vacuum Assisted Delivery Machine
        </div>

        <div className="w-3/5 my-2 pb-8 border-b-[1px] border-primary mx-auto h-fit text-lg text-center">
        Avisa, in collaboration with Medela Healthcare, is dedicated to improving maternal and child care by introducing a Vacuum Assisted Delivery (VAD) Machine. This innovative device assists healthcare professionals in safe and effective childbirth. Avisa's VAD machine is designed to provide controlled suction to aid in the delivery process, reducing maternal and fetal complications. By partnering with Medela Healthcare, Avisa ensures the availability of advanced medical equipment to healthcare facilities, promoting better outcomes for both mothers and babies. The VAD machine enhances obstetric care, allowing healthcare providers to manage complicated deliveries with precision and improved safety. Avisa's commitment to maternal and child care is evident through their efforts to introduce this cutting-edge technology.

        </div>

        */}
        <div className="w-4/5 text-3xl text-primary font-bold mx-auto py-4 text-center">
          Avisa Swasthya Maternal and Child Care
        </div>

        <div className="md:w-3/5 w-4/5 my-8 pb-8 border-b-[1px] border-primary text-black mx-auto h-fit text-lg text-center">
        We're proud to present our groundbreaking Vacuum Assisted Delivery (VAD) Machine, developed with Medela Healthcare. This advanced device ensures safer childbirths, reducing risks for both mothers and babies. Our commitment extends through prenatal, antenatal, and postnatal care. Our cutting-edge thalassemia diagnosis machine helps predict genetic risks for tailored care. Our experts offer full support, from check-ups and screenings to personalized advice, promoting healthy pregnancies and smooth transitions to parenthood. We focus on physical and emotional well-being, providing vital services like vaccinations, growth monitoring, and postpartum recovery. At Avisa Swasthya, we're here for you during life's most precious moments."
        </div>
        <div className="text-black text-center w-3/5 h-fit mx-auto my-16 grid md:grid-cols-4 grid-cols-1 border-b-[1px] border-primary">
          {/* <div className="col-span-1 p-8">
            <Doughnut data={data} options={options} />
          </div> */}
        
           
        <div className="text-xl font-bold py-4 my-auto flex flex-col h-full ">
                <img 
                src="/11.png"
                alt="Vacuum Assisted Delivery Machine"
                className="md:w-[100px] w-[75px] aspect-auto mx-auto my-8"
                />
                Vacuum Assisted Delivery Machine
              </div>

              <div className="text-xl font-bold py-4 my-auto flex flex-col h-full">
                <img 
                src="/12.png"
                alt="Prenatal Care "
                className="md:w-[100px] w-[75px] aspect-auto mx-auto my-8"
                />
                Prenatal Care 
              </div>

              <div className="text-xl font-bold py-4 my-auto flex flex-col h-full">
                <img 
                src="/13.png"
                alt="Antenatal Care"
                className="md:w-[100px] w-[75px] aspect-auto mx-auto my-8"
                />
                Antenatal Care
              </div>

              <div className="text-xl font-bold py-4 my-auto flex flex-col h-full">
                <img 
                src="/14.png"
                alt="Postnatal Care"
                className="md:w-[100px] w-[75px] aspect-auto mx-auto my-8"
                />
                Postnatal Care
              </div>

          </div>
   

        <div className="text-center w-4/5 text-3xl text-primary font-bold mx-auto py-4">
          Vacuum Assisted Delivery Machine
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:px-16 px-8">
        <div className="col-span-1">
                <img 
                src="/11.png"
                alt="Vacuum Assisted Delivery Machine"
                className="md:w-[300px] w-[150px] m-auto aspect-auto"
                />
            </div>
          <div className="col-span-2 p-2">
            <li className="py-2">
              Avisa is dedicated to improving maternal and child care by
              introducing a Vacuum Assisted Delivery (VAD) Machine.
            </li>

            <li className="py-2">
              This innovative device assists healthcare professionals in safe
              and effective childbirth.
            </li>

            <li className="py-2">
              The machine is designed to provide controlled suction to aid in
              the delivery process, reducing maternal and fetal complications.
              By partnering with Medela Healthcare, Avisa ensures availability
              of advanced medical equipment to healthcare facilities
            </li>

            <li className="py-2">
              The VAD machine enhances obstetric care, allowing healthcare
              providers to manage complicated deliveries with precision and
              improved safety
            </li>

            <li className="py-2">
              Avisa&apos;s commitment to maternal and child care is evident
              through their efforts to introduce this cutting-edge technology.sa
              also offers patient support programs to ensure adherence to
              treatment plans and provide resources for managing potential side
              effects.
            </li>
          </div>
        </div>

        <div className="w-4/5 text-3xl text-primary font-bold mx-auto py-4 text-center my-8">
          Prenatal Care
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 px-8">
          {/* <div>some image</div> */}
          <div className="col-span-2 p-2">
            <li className="py-2">
              Avisa Swasthya is dedicated to providing comprehensive prenatal
              care with a focus on preventive measures and early intervention.
            </li>

            <li className="py-2">
              With our state-of-the-art thalassaemia diagnosis machine, we
              can offer testing to couples before conception, identifying any
              potential risk of thalassaemia or other genetic disorders.
            </li>

            <li className="py-2">
              Our skilled healthcare professionals work closely with
              expectant parents, offering personalized counseling and guidance
              based on the test results.
            </li>

            <li className="py-2">
              Through regular check-ups, screenings, and education, we ensure
              the wellbeing of both the mother and the developing baby,
              fostering a healthy pregnancy journey
            </li>

            <li className="py-2">
              Our holistic approach to prenatal care aims to optimize outcomes
              and give parents peace of mind during this critical phase of life.
            </li>
          </div>
          <div className="col-span-1">
                <img 
                src="/12.png"
                alt="Vacuum Assisted Delivery Machine"
                className="md:w-[300px] w-[150px] m-auto aspect-auto"
                />
            </div>
        </div>

        <div className="w-4/5 text-3xl text-primary font-bold mx-auto py-4 text-center my-8">
          Antenatal Care
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 px-8">
        <div className="col-span-1">
                <img 
                src="/13.png"
                alt="Vacuum Assisted Delivery Machine"
                className="md:w-[300px] w-[150px] m-auto aspect-auto"
                />
            </div>
          <div className="col-span-2 p-2">
            <li className="py-2">
              At Avisa Swasthya, we will be at the forefront of providing
              comprehensive antenatal care to support the health and well-being
              of expectant mothers.
            </li>

            <li className="py-2">
              Our dedicated team of healthcare professionals will offer
              regular checkups, screenings, and personalized guidance throughout
              the pregnancy journey.
            </li>

            <li className="py-2">
              We will provide essential services such as prenatal tests,
              ultrasound scans, and nutritional counseling to ensure a healthy
              pregnancy
            </li>

            <li className="py-2">
              With our advanced thalassaemia diagnosis machine, we will
              identify any potential genetic risks early on, enabling proactive
              measures and tailored care.
            </li>

            <li className="py-2">
              Through our holistic approach to antenatal care, we will
              empower mothers with the knowledge and support needed for a safe
              and successful pregnancy
            </li>
          </div>
          {/* <div>some image</div> */}
        </div>

        {/* <div className="w-4/5 text-3xl text-primary font-bold mx-auto py-4 text-center my-8">
        Counseling for Genetic Diseases
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 px-16">
          <div className="col-span-1 p-4">
          Our skilled healthcare professionals work closely with expectant parents, offering personalized counseling and guidance based on the test results. Through regular check-ups, screenings, and education, we ensure the well-being of both the mother and the developing baby, fostering a healthy pregnancy journey. Our holistic approach to prenatal care aims to optimize outcomes and give parents peace of mind during this critical phase of life.
          </div>
          <div>some image</div>
        </div> */}

        <div className="w-4/5 text-3xl text-primary font-bold mx-auto py-4 text-center my-8">
          Postnatal Care
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 px-8">
        <div className="col-span-1">
                <img 
                src="/14.png"
                alt="Vacuum Assisted Delivery Machine"
                className="md:w-[300px] w-[150px] m-auto aspect-auto"
                />
            </div>
          <div className="col-span-2 p-2">
            <li className="py-2">
              At Avisa Swasthya, we are committed to providing comprehensive
postnatal care to support the well-being of both mother and child.
            </li>

            <li className="py-2">
              Our experienced healthcare professionals offer regular check-ups and
screenings to monitor the health and development of the newborn.
            </li>

            <li className="py-2">
              We provide guidance on essential newborn care, breastfeeding support,
and postpartum recovery for mothers. Through our Maternal and Child
Care division, we offer specialized services such as vaccinations, growth
monitoring, and early developmental assessments.
            </li>

            <li className="py-2">
              With our personalized approach and a focus on nurturing both physical
and emotional well-being, we ensure a smooth transition into parenthood
and a healthy start for the newborn.
            </li>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
