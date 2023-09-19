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
    <div className="bg-white md:h-[3100px] h-[4900px] mx-auto relative">
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
                Vacuum Assisted Delivery Machine
              </div>

              <div className="text-xl font-bold py-4 my-auto">
                Prenatal Care
              </div>

              <div className="text-xl font-bold py-4 my-auto">
                Counseling for Genetic Diseases
              </div>

              <div className="text-xl font-bold py-4 my-auto">
                Postnatal Care
              </div>

              <div className="text-xl font-bold py-4 my-auto">
                Antenatal Care
              </div>
            </div>
          </div>
        </div>

        <div className="w-4/5 text-3xl text-primary font-bold mx-auto py-4">
          Vacuum Assisted Delivery Machine
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 px-16">
          <div className="col-span-1 p-4">
            Avisa, in collaboration with Medela Healthcare, is dedicated to
            improving maternal and child care by introducing a Vacuum Assisted
            Delivery (VAD) Machine. This innovative device assists healthcare
            professionals in safe and effective childbirth. Avisa&apos;s VAD machine
            is designed to provide controlled suction to aid in the delivery
            process, reducing maternal and fetal complications. By partnering
            with Medela Healthcare, Avisa ensures the availability of advanced
            medical equipment to healthcare facilities, promoting better
            outcomes for both mothers and babies. The VAD machine enhances
            obstetric care, allowing healthcare providers to manage complicated
            deliveries with precision and improved safety. Avisa&apos;s commitment to
            maternal and child care is evident through their efforts to
            introduce this cutting-edge technology.
          </div>
        </div>

        <div className="w-4/5 text-3xl text-primary font-bold mx-auto py-4 text-center my-8">
          Prenatal Care
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 px-16">
          <div>some image</div>
          <div className="col-span-1 p-4 ">
            Avisa Swasthya is dedicated to providing comprehensive prenatal care
            with a focus on preventive measures and early intervention. With our
            state-of-the-art thalassaemia diagnosis machine, we can offer
            testing to couples before conception, identifying any potential risk
            of thalassaemia or other genetic disorders. Our skilled healthcare
            professionals work closely with expectant parents, offering
            personalized counseling and guidance based on the test results.
            Through regular check-ups, screenings, and education, we ensure the
            well-being of both the mother and the developing baby, fostering a
            healthy pregnancy journey. Our holistic approach to prenatal care
            aims to optimize outcomes and give parents peace of mind during this
            critical phase of life.
          </div>
        </div>

        <div className="w-4/5 text-3xl text-primary font-bold mx-auto py-4 text-center my-8">
        Counseling for Genetic Diseases
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 px-16">
          <div className="col-span-1 p-4">
          Our skilled healthcare professionals work closely with expectant parents, offering personalized counseling and guidance based on the test results. Through regular check-ups, screenings, and education, we ensure the well-being of both the mother and the developing baby, fostering a healthy pregnancy journey. Our holistic approach to prenatal care aims to optimize outcomes and give parents peace of mind during this critical phase of life.
          </div>
          <div>some image</div>
        </div>


        <div className="w-4/5 text-3xl text-primary font-bold mx-auto py-4 text-center my-8">
        Postnatal Care 
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 px-16">
          <div>some image</div>
          <div className="col-span-1 p-4 ">
          At Avisa Swasthya, we are committed to providing comprehensive postnatal care to support the well-being of both mother and child. Our experienced healthcare professionals offer regular check-ups and screenings to monitor the health and development of the newborn. We provide guidance on essential newborn care, breastfeeding support, and postpartum recovery for mothers. Through our Maternal and Child Care division, we offer specialized services such as vaccinations, growth monitoring, and early developmental assessments. With our personalized approach and a focus on nurturing both physical and emotional well-being, we ensure a smooth transition into parenthood and a healthy start for the newborn.

          </div>
        </div>

        <div className="w-4/5 text-3xl text-primary font-bold mx-auto py-4 text-center my-8">
        Antenatal Care
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 px-16">
          <div className="col-span-1 p-4">
          At Avisa Swasthya, we will be at the forefront of providing comprehensive antenatal care to support the health and well-being of expectant mothers. Our dedicated team of healthcare professionals will offer regular check-ups, screenings, and personalized guidance throughout the pregnancy journey. We will provide essential services such as prenatal tests, ultrasound scans, and nutritional counseling to ensure a healthy pregnancy. With our advanced thalassaemia diagnosis machine, we will identify any potential genetic risks early on, enabling proactive measures and tailored care. Through our holistic approach to antenatal care, we will empower mothers with the knowledge and support needed for a safe and successful pregnancy.
          </div>
          <div>some image</div>
        </div>


      </div>

      <Footer/>
    </div>
  );
}