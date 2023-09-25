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
  const str = `
_______
_____   _                           _               _____                                                                                                  
|  __ \\ (_)                         | |             / ____|                                                                                                 
| |  | | _ __   __ __ _  _ __   ___ | |__   _   _  | |  __   __ _  _ __  __ _                                                                               
| |  | || |\\ \\ / // _\` || '_ \\ / __|| '_ \\ | | | | | |_ | / _\` || '__|/ _\` |                                                                              
| |__| || | \\ V /| (_| || | | |\\__ \\| | | || |_| | | |__| || (_| || |  | (_| |                                                                              
|_____/ |_|  \\_/  \\__,_||_| |_||___/|_| |_| \\__,_|  \\_____| \\__,_||_|   \\__, |                                                                              
_  _                           _                                    __/ |_  __  ____                                     _  _                          
| |(_)                         | |                                  |___/_ |/_ ||___ \\    ____                           (_)| |                         
__| | _ __   __ __ _  _ __   ___ | |__   _   _     __ _   __ _  _ __  __ _ | | | |  __) |  / __ \\   __ _  _ __ ___    __ _  _ | |    ___  ___   _ __ ___  
/ _\` || |\\ \\ / // _\` || '_ \\ / __|| '_ \\ | | | |   / _\` | / _\` || '__|/ _\` || | | | |__ <  / / _\` | / _\` || '_ \` _ \\  / _\` || || |   / __|/ _ \\ | '_ \` _ \\ 
| (_| || | \\ V /| (_| || | | |\\__ \\| | | || |_| | _| (_| || (_| || |  | (_| || | | | ___) || | (_| || (_| || | | | | || (_| || || | _| (__| (_) || | | | | |
\\__,_||_|  \\_/  \\__,_||_| |_||___/|_| |_| \\__,_|(_)\__, | \\__,_||_|   \\__, ||_| |_||____/  \\ \\__,_| \\__, ||_| |_| |_| \\__,_||_||_|(_)\___|\\___/ |_| |_| |_|
                                              __/ |              __/ |                \\____/   __/ |                                                 
                                             |___/              |___/                         |___/                                                  
`;


  const CarouselData = [
    {
      id: 1,
      img: "bg-[url('./../../public/Banner1.png')]",
      text: "Thalassaemia Solutions: 'Pioneering Breakthroughs for Optimal Well-being'",
    },
    {
      id: 2,
      img: "bg-[url('./../../public/Banner2.png')]",
      text: "Catalyzing Change, Transforming Lives: Affordable Thalassaemia Testing Across India",
    },
    {
      id: 3,
      img: "bg-[url('./../../public/Banner3.png')]",
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
    
    <main className="text-black bg-white relative flex min-h-screen md:h-[2730px] h-[3700px] flex-col items-center ">
      <Navbar />
      <div className="bg-transparent md:h-[62px] "></div>

      <div
        className={`relative md:mx-24 w-full bg-center bg-no-repeat bg-contain md:bg-cover md:h-[500px] h-[400px] ${img} md:mb-4`}
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
            className="md:text-3xl text-white text-xl font-bold text-left h-fit absolute top-0 bottom-0 left-0 right-0 m-auto"
          >
            {text}
          </motion.span>
        </motion.div>
      </div>
      <div
      className="md:mx-24 mx-6"
      >
      <About />
      </div>

      <div className="my-8 md:mx-24 mx-6">
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
        className="grid grid-cols-1 md:grid-cols-2 p-8 gap-8 justify-around"
        >
        

        <img 
        src="/Twitter_post.png"
        className="rounded-md shadow-lg  mx-auto md:w-[350px] w-full aspect-auto"
        alt="Twitter"
        />
        <img 
        src="/newspaper-2.png"
        className=" rounded-md shadow-lg mx-auto md:w-[400px] w-full aspect-auto"
        alt="Newspaper"
        />

<img 
        src="/newspaper.png"
        className=" rounded-md shadow-lg mx-auto "
        alt="Newspaper"
        />
        </div>

        
      </div>
      <Footer />
    </main>
  );
}
