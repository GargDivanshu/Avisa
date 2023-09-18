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
    <main className="bg-white relative flex min-h-screen md:h-[1300px] h-[2150px] flex-col items-center md:px-24 px-6">
      <Navbar/>
      {/* <Sidebar/> */}
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
       
           
          </a>
        </div>
      </div> */}
      <div className="bg-transparent h-[20px]">
      </div>
      
      <div className={`relative md:w-full w-11/12 md:h-[500px] h-screen ${img} object-scale-down md:object-cover mb-8`}>
      <div className="absolute top-0 bottom-0 left-0 right-0 m-auto w-4/5 h-3/5 bg-white/50">
      <span
      className="italic md:text-3xl text-xl font-bold text-center h-fit absolute top-0 bottom-0 left-0 right-0 m-auto"
      >
        {text}
      </span>
      </div>
    </div>

{/* <div className="embla w-screen h-[500px] mt-8" ref={emblaRef}>
      <div className="embla__container">
        <div className="bg-[url('./../../public/pioneer.jpg')] object-cover" ></div>
        <div className="embla__slide text-center">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div> */}
      <About/>

      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}

      <Footer/>
    </main>
  )
}
