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
          "rgb(190, 58, 60, 1)",
          "rgb(190, 58, 60, 0.8)",
          "rgb(190, 58, 60, 0.6)",
          "rgb(190, 58, 60, 0.4)",
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
    <div className="bg-white md:h-[2300px] h-[3200px] mx-auto relative flex flex-col">
      <Navbar />
      <div className="bg-transparent h-[50px]"></div>
      <div className="w-full bg-[url('/blood.jpg')] object-cover h-[200px] blur-sm"></div>
      <div className="rounded-md shadow-md absolute top-24 md:top-40 left-0 right-0 mx-auto w-11/12 h-fit bg-white">
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
        <div className="w-3/5 h-fit mx-auto my-16 grid md:grid-cols-2 grid-cols-1 border-b-[1px] border-primary">
          <div className="col-span-1 p-8">
            <Doughnut data={data} options={options} />
          </div>
          <div>
            <div className="flex flex-col h-fit my-auto">
              <div className="text-xl font-bold py-4 my-auto">
                Health Education
              </div>

              <div className="text-xl font-bold py-4 my-auto">
                Health Check-up Camps
              </div>

              <div className="text-xl font-bold py-4 my-auto">
                Health Research
              </div>

              <div className="text-xl font-bold py-4 my-auto">
              Health Informatics
              </div>
            </div>
          </div>
        </div>

        <div className="w-4/5 text-3xl text-primary font-bold mx-auto py-4">
          Health Education
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 px-16">
          <div className="col-span-1 p-4">
            Avisa Swasthya is dedicated to providing health education through
            various initiatives. We will develop comprehensive health education
            programs, targeting different age groups and communities, to promote
            awareness about preventive healthcare, disease management, and
            healthy lifestyle practices. These programs will include workshops,
            seminars, and interactive sessions conducted by our knowledgeable
            healthcare professionals.
          </div>
        </div>

        <div className="w-4/5 text-3xl text-primary font-bold mx-auto py-4 text-center my-8">
          Health Check-up Camps
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 px-16">
          <div>some image</div>
          <div className="col-span-1 p-4 ">
            As part of our community outreach, we will organize health check-up
            camps in collaboration with local communities. These camps will
            serve as a platform to provide free or affordable health screenings,
            consultations, and basic health assessments. Our team of healthcare
            experts will be present to conduct thorough check-ups, offer medical
            advice, and address any health concerns of the participants.
          </div>
        </div>

        <div className="w-4/5 text-3xl text-primary font-bold mx-auto py-4 text-center my-8">
          Health Research
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 px-16">
          <div className="col-span-1 p-4">
            At Avisa Swasthya, we understand the importance of continuous
            research in improving healthcare outcomes. We will actively engage
            in health research by collaborating with renowned medical
            institutions, researchers, and experts. Our research efforts will
            focus on contributing to advancements in healthcare knowledge,
            exploring innovative treatment approaches, and addressing prevalent
            health issues in the community.
          </div>
          <div>some image</div>
        </div>

        {/* <div className="w-4/5 text-3xl text-primary font-bold mx-auto py-4 text-center my-8">
          Postnatal Care
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 px-16">
          <div>some image</div>
          <div className="col-span-1 p-4 ">
            At Avisa Swasthya, we are committed to providing comprehensive
            postnatal care to support the well-being of both mother and child.
            Our experienced healthcare professionals offer regular check-ups and
            screenings to monitor the health and development of the newborn. We
            provide guidance on essential newborn care, breastfeeding support,
            and postpartum recovery for mothers. Through our Maternal and Child
            Care division, we offer specialized services such as vaccinations,
            growth monitoring, and early developmental assessments. With our
            personalized approach and a focus on nurturing both physical and
            emotional well-being, we ensure a smooth transition into parenthood
            and a healthy start for the newborn.
          </div>
        </div> */}

        <div className="w-4/5 text-3xl text-primary font-bold mx-auto py-4 text-center my-8">
        Health Informatics
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 px-16">
          <div className="col-span-1 p-4">
          Leveraging the power of health informatics, we will develop and implement advanced technology solutions to enhance healthcare data management, analysis, and decision-making. Our aim is to ensure efficient and effective healthcare delivery. Through the use of electronic health records, telemedicine, and data analytics, we will streamline processes, improve patient care coordination, and facilitate evidence-based healthcare practices.

          </div>
          <div>some image</div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}