"use client"
import {useEffect, useState} from 'react'
import Image from 'next/image'
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import {HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight} from 'react-icons/hi'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' 
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {motion} from 'framer-motion'
import { navVariants, textVariant, textContainer, staggerContainer } from './utils/motion';

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
    }
  ]

  const [img, setImg] = useState(CarouselData[0].img);
  const [text, setText] = useState(CarouselData[0].text)

  useEffect(() => {
    const interval = setInterval(() => {
      setImg(CarouselData[(CarouselData.findIndex(item => item.img === img) + 1) % CarouselData.length].img);
      setText(CarouselData[(CarouselData.findIndex(item => item.text === text) + 1) % CarouselData.length].text);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [CarouselData, img, text]);
  
  return (
    <main className="text-black bg-white relative flex min-h-screen md:h-[1800px] h-[2800px] flex-col items-center md:px-24 px-6">
      <Navbar/>

      <div className="bg-transparent md:h-[62px] ">
      </div>
      
      <div className={`relative md:w-full w-11/12 md:h-[500px] h-[500px] ${img} object-scale-down md:object-cover md:mb-4 mb-64`}>
      <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="container rounded-lg absolute top-0 bottom-0 left-0 right-0 m-auto w-4/5 h-fit bg-white/50">
      <motion.span
      variants={textVariant(1.1)}
      className="md:text-3xl text-xl font-bold text-center h-fit absolute top-0 bottom-0 left-0 right-0 m-auto"
      >
        {text}
      </motion.span>
      </motion.div>
    </div>
      <About/>
      <Footer/>
    </main>
  )
}
