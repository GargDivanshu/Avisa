"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
} from "react-icons/hi";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import {
  navVariants,
  textVariant,
  textContainer,
  staggerContainer,
} from "./utils/motion";
import {AiOutlineInfoCircle} from 'react-icons/ai'
import Link from 'next/link'



export default function Home() {
  const CarouselData = [
    {
      id: 1,
      img: "bg-[url('./../../public/pioneer.jpg')]",
      text: "Thalassaemia Solutions: 'Pioneering Breakthroughs for Optimal Well-being'",
    },
    {
      id: 2,
      img: "bg-[url('./../../public/testing.jpg')]",
      text: "Catalyzing Change, Transforming Lives: Affordable Thalassaemia Testing Across India",
    },
    {
      id: 3,
      img: "bg-[url('./../../public/ai_adv.jpeg')]",
      text: "The Future of Thalassaemia Diagnosis: Leveraging AI for precise results",
    },
  ];

  const [img, setImg] = useState(CarouselData[0].img);
  const [text, setText] = useState(CarouselData[0].text);

  useEffect(() => {
    const interval = setInterval(() => {
      setImg(
        CarouselData[
          (CarouselData.findIndex((item) => item.img === img) + 1) %
            CarouselData.length
        ].img
      );
      setText(
        CarouselData[
          (CarouselData.findIndex((item) => item.text === text) + 1) %
            CarouselData.length
        ].text
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [CarouselData, img, text]);

  return (
    <main className="text-black bg-white relative flex min-h-screen md:h-[2550px] h-[3300px] flex-col items-center md:px-24 px-6">
      <Navbar />

      <div className="bg-transparent md:h-[62px] "></div>

      <div
        className={`relative md:w-full w-screen bg-center bg-no-repeat bg-contain md:bg-cover md:h-[500px] h-[500px] ${img} md:mb-4`}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="container rounded-lg absolute top-0 bottom-0 left-0 right-0 m-auto w-4/5 h-fit bg-white/50"
        >
          <motion.span
            variants={textVariant(1.1)}
            className="md:text-3xl text-xl font-bold text-center h-fit absolute top-0 bottom-0 left-0 right-0 m-auto"
          >
            {text}
          </motion.span>
        </motion.div>
      </div>
      <About />

      <div className="my-8">
        {/* <h1
         className="md:text-3xl text-center my-4 py-8 text-2xl font-bold h-fit my-auto text-primary"
        >Information Center</h1> */}

        <iframe
          height="260"
          className="md:w-1/2 w-full mx-auto"
          src="https://www.youtube.com/embed/-8OJKZYGohY?si=gxgWRliT3lCEQELj"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

<Link
        href="/information_center"
        >
        <button
        className="my-8 flex border-[1px] font-semibold rounded-full bg-primary text-white p-4 justify-center w-fit mx-auto"
        >
          <AiOutlineInfoCircle
          fontSize={25}
          className="mx-2"
          />
          Information Center
        </button>
        </Link>

        <div
        className="grid md:grid-cols-3 grid-cols-1 md:grid-rows-2 grid-rows-1 p-8 gap-8"
        >
        <img 
        src="/newspaper.png"
        className="col-span-2 row-span-2 rounded-md shadow-lg mx-auto"
        alt="Newspaper"
        />

        <img 
        src="/Twitter_post.png"
        className="rounded-md shadow-lg row-span-1 mx-auto"
        alt="Twitter"
        />
        <img 
        src="/newspaper-2.png"
        className=" rounded-md shadow-lg row-span-1 mx-auto"
        alt="Newspaper"
        />
        </div>

        
      </div>
      <Footer />
    </main>
  );
}
