"use client";

import React from "react";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
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
    <div className="text-black bg-white md:h-[2200px] h-[3400px] mx-auto relative">
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
          Products
        </div>

        <div className="md:w-3/5 w-4/5 my-2 pb-8 border-b-[1px] border-primary text-black mx-auto h-fit text-lg text-center">
        Here are products that we offer
        </div>

        {/* <div className="w-3/5 text-center h-fit mx-auto my-16 grid md:grid-cols-2 grid-cols-1 border-b-[1px] border-primary">
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
           
          </div> */}
      

        

        <div className="text-center w-4/5 text-3xl text-primary font-bold mx-auto py-4">
        Hemoglobinopathy
Diagnostic Machine
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:mx-28 py-4 border-b-[1px] border-b-primary">
        <div className="text-xl col-span-1 font-bold py-4 my-auto flex flex-col h-full">
                <img 
                src="/22.png"
                alt="Screening and Diagnosis"
                className="md:w-[200px] w-[125px] aspect-auto mx-auto my-8"
                />
                </div>
          <div className="col-span-2 p-2">
          <li className="py-2">
          A machine made in India using American
technology by HemexDx. Gazelle Hb Variant
leverages AI and Machine Learning to detect
Hemoglobin related diseases.
            </li>

            <li className="py-2">
            Gazelle Hb Variant is
a miniaturized version of the gold standard test
known as cellulose acetate electrophoresis.
            </li>

            <li className="py-2">
            Administration of the test requires minimal
training. Results are displayed in 8 minutes,
including hemoglobin percentages by type, and can
be stored locally or transmitted to the Cloud for
patient and disease tracking.

            </li>
{/* 
            <li className="py-2">
              We actively contribute to community health improvement. By detecting
and preventing hemoglobin-related diseases, we work toward healthier
futures, fostering well-being, and reducing the burden of these
conditions on individuals and families.

            </li> */}
          </div>
        </div>

        <div className="w-4/5 text-3xl text-primary font-bold mx-auto py-4 text-center my-8">
        Vacuum Assisted Delivery Machine
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:mx-28 py-4 border-b-[1px] border-b-primary">
        <div className="text-xl col-span-1 font-bold py-4 my-auto flex flex-col h-full">
                <img 
                src="/23.png"
                alt="Screening and Diagnosis"
                className="md:w-[200px] w-[125px] aspect-auto mx-auto my-8"
                />
                </div>
          <div className="col-span-2 p-2 ">
          <li className="py-2">
          Medela is a Swiss Healthcare company that
focuses mainly on professional Vacuum Systems
and its Vacuum Assisted Delivery (VAD) machine is
one of them
            </li>

            <li className="py-2">
            Vacuum assisted delivery is used to
aid birth when labor has become prolonged and the
mother is experiencing extreme stress and
difficulties.

            </li>

            <li className="py-2">
            The goal is to support the mother and
ensure that delivery of the baby can take place in a
gentle and controlled manner.
            </li>

            <li className="py-2">
            The machine offers
a complete system that includes a surgical suction
pump with all the necessary components and a
large choice of suction cups.

            </li>
          </div>
        </div>



        <div className="w-4/5 text-3xl text-primary font-bold mx-auto py-4 text-center my-8">
        Blood Grouping ABD Pad
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:mx-28 py-4 border-b-[1px] border-b-primary">
        <div className="text-xl col-span-1 font-bold py-4 my-auto flex flex-col h-full">
                <img 
                src="/24.png"
                alt="Screening and Diagnosis"
                className="md:w-[200px] w-[125px] aspect-auto mx-auto my-8"
                />
                </div>
          <div className="col-span-2 p-2 ">
          <li className="py-2">
          Diagast is a French Company that focuses on
providing solutions to the problems related to
Immuno-Haematology.
            </li>

            <li className="py-2">
            ABD PAD® was conceived
for a simple and versatile use, without the
limitations imposed by refrigerated storage and
centrifugation

            </li>

            <li className="py-2">
            Therefore, ABD PAD® can be used
inside the lab or outdoors in order to perform a
blood group control
            </li>

            <li className="py-2">
            ABD PAD® is an in vitro
diagnostic medical device for the confirmation of
blood group (ABO/RH1).

            </li>

            <li className="py-2">
            It allows this confirmation
in less than 30 seconds, with no need of sample
preparation.

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
