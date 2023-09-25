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
        data: [33, 33, 33],
        backgroundColor: [
          "rgb(190, 58, 60, 1)",
          "rgb(190, 58, 60, 0.8)",
          "rgb(190, 58, 60, 0.6)",
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
    <div className="text-black bg-white md:h-[3300px] h-[6000px] mx-auto relative">
      <Navbar />
      <div className="bg-transparent h-[50px]"></div>
      <div className="w-full bg-[url('/AllBanner.png')] object-cover h-[200px] blur-sm"></div>
      <div className="rounded-md absolute top-16 md:top-40 left-0 right-0 mx-auto w-11/12 h-fit bg-white py-24">
        {/* <Image
          src="/ques_mark.png"
          alt="What is Hemoglobinopathy"
          width="200"
          height="400"
          className="mx-auto my-4 floating"
        /> */}

        <div className="mx-auto md:w-2/5 w-4/5 h-fit text-center md:text-3xl font-bold text-primary text-xl">
          What is Hemoglobinopathy?
        </div>

        <div className="md:w-3/5 w-4/5 my-8 pb-8 border-b-[1px] border-primary text-black mx-auto h-fit text-lg text-center">
          Hemoglobinopathy refers to a group of genetic disorders that affect
          the structure or production of hemoglobin, the molecule responsible
          for carrying oxygen in red blood cells. These disorders include
          conditions such as sickle cell disease and thalassemia.
          Hemoglobinopathies can result in abnormal hemoglobin function, leading
          to a range of symptoms including anemia, organ damage, and pain
          crises. Management of hemoglobinopathies often involves supportive
          care, blood transfusions, and specialized therapies like bone marrow
          transplantation.
        </div>

        <div className="w-4/5 text-3xl text-primary font-bold mx-auto py-4 text-center">
          Our Services in Hemoglobinopathy
        </div>
        <div className="w-3/5 h-fit mx-auto my-16 grid md:grid-cols-3 grid-cols-1 border-b-[1px] border-primary text-center">
          {/* <div className="col-span-1 p-8">
            <Doughnut data={data} options={options} />
          </div> */}
          {/* <div className="justify-center"> */}
            {/* <div className="flex flex-col h-fit my-auto"> */}
              <div className="text-xl font-bold py-4 my-auto flex flex-col h-full">
                <img 
                src="/5.png"
                alt="Screening and Diagnosis"
                className="md:w-[100px] w-[75px] aspect-auto mx-auto my-8"
                />
                Screening and Diagnosis
              </div>

              <div className="text-xl font-bold py-4 my-auto flex flex-col  h-full">
              <img 
                src="/6.png"
                alt="Counseling and guidance"
                className="md:w-[100px] w-[75px] aspect-auto mx-auto my-8"
                />
                Counseling and guidance
              </div>

              <div className="text-xl font-bold py-4 my-auto flex flex-col h-full">
              <img 
                src="/7.png"
                alt="Testing"
                className="md:w-[100px] w-[75px] aspect-auto mx-auto my-8"
                />
                Testing</div>
            {/* </div> */}
          {/* </div> */}
        </div>

        <div className="w-4/5 text-3xl text-center text-primary font-bold mx-auto py-4">
          Screening and Diagnosis 
          {/* (Sickle Cell, Thalassemia (gazelle) and Anemia */}
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:px-16 px-8">
            <div>
                <img 
                src="/8.png"
                alt="Counseling and Guidance"
                className="md:w-[300px] w-[150px] m-auto aspect-auto"
                />
            </div>
        
            <div className="col-span-1 p-2">
            <li className="py-2">
               Our cutting-edge diagnosis machine is designed to test for Hemoglobinopathy diseases like Sickle Cell
and beta thalassemia. With its advanced AI and Machine Learning capabilities, it delivers accurate and
precise results, revolutionizing the diagnostic process.

            </li>

            <li className="py-2">
              It aims to make diagnosis accessible and affordable for all, ensuring that individuals and communities
have access to crucial information about their health. By leveraging AI and Machine Learning algorithms, it
analyzes genetic markers and provides comprehensive reports that aid in the early detection and
management of Hemoglobinopathy diseases.
            </li>

            <li className="py-2">
              This diagnostic machine not only enhances the efficiency of the
              diagnostic process but also empowers healthcare professionals with
              valuable insights for personalized treatment plans. Its
              user-friendly interface and automated processes make it easy to
              operate, enabling widespread adoption across healthcare
              facilities.
            </li>

            <li className="py-2">
              At <strong>Avisa Swasthya</strong>, we are committed to
              utilizing advanced technology like Gazelle to bridge the gap in
              healthcare accessibility. By offering accurate and affordable
              testing for Hemoglobinopathy diseases, we aim to improve patient
              outcomes, raise awareness, and contribute to the overall
              well-being of individuals and communities.
            </li>
          </div>
        </div>
  

        <div className="w-4/5 text-3xl text-primary font-bold mx-auto py-4 text-center my-8">
          Counseling and Guidance
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:px-16 px-8">
            <div>
                <img 
                src="/9.png"
                alt="Counseling and Guidance"
                className="md:w-[300px] w-[150px] m-auto aspect-auto"
                />
            </div>
          <div className="col-span-1 p-2">
          <li className="py-2">
              Avisa will play a crucial role in providing counseling and guidance for
individuals with hemoglobinopathy diseases.

            </li>

            <li className="py-2">
              They offer specialized services to educate patients and their families
about the condition, its symptoms, and treatment options.

            </li>

            <li className="py-2">
              Avisa&apos;s team of experts provide personalized counseling sessions to
address the emotional and psychological aspects of living with
hemoglobinopathies.
            </li>

            <li className="py-2">
              They offer guidance on managing symptoms, promoting healthy
lifestyles, and navigating the healthcare system.

            </li>

            <li className="py-2">Avisa also works closely with healthcare professionals to ensure
comprehensive care and support for individuals affected by
hemoglobinopathies.

            </li>
          </div>
        </div>


        <div className="w-4/5 text-3xl text-primary font-bold mx-auto py-4 text-center my-8">
          Treatment
        </div>
        <div>
          <img 
                src="/10.png"
                alt="Counseling and Guidance"
                className="md:w-[300px] w-[150px] m-auto aspect-auto"
                />
            </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:px-16 px-8">
          <div  className="col-span-1 p-2">
        <li className="py-2">
              Avisa is dedicated to advancing the treatment of hemoglobinopathy
diseases.

            </li>

            <li className="py-2">
              They invest in research and development to develop innovative therapies
specifically tailored for these conditions.

            </li>

            <li className="py-2">
              Avisa collaborates with healthcare professionals and experts in the field to
design effective treatment protocols
            </li>

            <li className="py-2">
              They provide access to cutting-edge medications and therapies that target
the underlying mechanisms of hemoglobinopathies.

            </li>

            <li className="py-2">Avisa also offers patient support programs to ensure adherence to
treatment plans and provide resources for managing potential side effects.

            </li>

            <li className="py-2">
            Through their commitment to improving treatment options, Avisa aims to
enhance the quality of life for individuals with hemoglobinopathies.
            </li>
            </div>
        </div>


      </div>

      <Footer/>
    </div>
  );
}
