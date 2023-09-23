'use client'
import React from 'react';
import { hydrateRoot } from 'react-dom';
import ItemGroup from './ItemGroup';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import Link from 'next/link'
import {TfiHandPointRight} from 'react-icons/tfi'
import Iframe from 'react-iframe'

export default function Page() {


      
      return (

        <main className="text-black bg-white relative flex min-h-screen h-[2600px] md:h-[1800px] flex-col items-center md:px-24 px-6">
            <Navbar/>
            <div className="bg-gradient-to-tr from-slate-500 to-stone-700">
            <div className="w-screen filter mix-blend-overlay bg-cover relative bg-[url('./../../public/banner.jpg')] object-cover h-[100px] md:h-[200px]">
            </div>
      </div>
      <div className="text-4xl text-primary font-bold absolute rounded-md w-4/5 text-left right-0 left-0 top-24 md:top-44 mx-auto bg-white h-fit p-8 shadow-md mb-8">
      Press Coverage 

                <div className="text-xl my-4">
                    <div className="flex flex-col my-4 gap-4 text-black justify-center h-fit ">
                        <Link
                        href="https://twitter.com/ombirlakota/status/1655884609777958912?t=er1U56oj83CN-SzCOkisEg&s=08"
                        >
                        <div className="border-[2px] border-primary p-4 shadow-lg flex selector w-full bg-white hover:transform hover:scale-y-110 hover:scale-x-110 hover:transform-origin-bottom duration-500 ease-linear">
                        {/* [url('./../../public/Twitter_post.png')] */}
                        <div
                        className="w-1/6 mx-auto"
                        >
                        <TfiHandPointRight
                        fontSize={25}
                        className="m-auto text-primary"
                        />
                        </div>
                        <div className=" w-5/6">
                        Sar Gangaram Hospital Urges Public and Politicians to Join Thalassemia Awareness Campaign Ft: Om Birla
                        </div>
                        </div>
                        </Link>


                        <Link
                        href="https://newsonair.gov.in/Main-News-Details.aspx?id=460661#.ZFpW56fV9s0.whatsapp"
                        >
                        <div className="border-[2px] border-primary p-4 shadow-lg flex selector w-full bg-white hover:transform hover:scale-y-110 hover:scale-x-110 hover:transform-origin-bottom duration-500 ease-linear">
                        {/* [url('./../../public/Twitter_post.png')] */}
                        <div
                        className="w-1/6 mx-auto"
                        >
                        <TfiHandPointRight
                        fontSize={25}
                        className="m-auto text-primary"
                        />
                        </div>
                        <div className=" w-5/6">
                        Public representatives at all levels from Parliament to Panchayat should make efforts to prevent thalassemia, says Lok Sabha Speaker Om Birla
                        </div>
                        </div>
                        </Link>


                        <Link
                        href="https://www.jagran.com/delhi/new-delhi-city-ncr-om-birla-says-everyone-will-have-to-make-joint-efforts-for-a-thalassemia-free-india-23407351.html"
                        >
                        <div className="border-[2px] border-primary p-4 shadow-lg flex selector w-full bg-white hover:transform hover:scale-y-110 hover:scale-x-110 hover:transform-origin-bottom duration-500 ease-linear">
                        {/* [url('./../../public/Twitter_post.png')] */}
                        <div
                        className="w-1/6 mx-auto"
                        >
                        <TfiHandPointRight
                        fontSize={25}
                        className="m-auto text-primary "
                        />
                        </div>
                        <div className="w-5/6">
                            थैलेसीमिया के लिए पूरे भारत में सबकी स्क्रीनिंग शुरू करने की सख्त आवश्यकता
                            </div>  
                        </div>
                        </Link>

{/* 


                        <div className="selector col-span-1 bg-[url('./../../public/newspaper.png')]  object-fit  rounded-md shadow-lg  hover:transform hover:scale-y-110 hover:scale-x-110 hover:transform-origin-bottom duration-500 ease-linear">
                        </div>

                        <div className="selector col-span-1 bg-[url('./../../public/newspaper-2.png')]  object-fit  rounded-md shadow-lg  hover:transform hover:scale-y-110 hover:scale-x-110 hover:transform-origin-bottom duration-500 ease-linear">
                        </div>                        */}
                    </div>
                </div>

                <span>
                Knowledge Hub
                </span>

                <div className="text-xl my-4">
                    <div className="flex flex-col my-4 gap-4 text-black justify-center h-fit ">
                        <Link
                        href="https://newsonair.gov.in/Main-News-Details.aspx?id=460661#.ZFpW56fV9s0.whatsapp"
                        >
                        <div className="border-[2px] border-primary p-4 shadow-lg flex selector w-full bg-white hover:transform hover:scale-y-110 hover:scale-x-110 hover:transform-origin-bottom duration-500 ease-linear">
                        {/* [url('./../../public/Twitter_post.png')] */}
                        <div
                        className="w-1/6 mx-auto"
                        >
                        <TfiHandPointRight
                        fontSize={25}
                        className="m-auto text-primary"
                        />
                        </div>
                        <div className=" w-5/6">
                        Public representatives should make all efforts to prevent thalassemia: Lok Sabha Speaker Om Birla
                        </div>
                        </div>
                        </Link>


                        <Link
                        href="https://www.indiatoday.in/health/story/what-is-sickle-cell-anemia-the-blood-disorder-india-plans-to-eliminate-by-2047-2329038-2023-02-01"
                        >
                        <div className="border-[2px] border-primary p-4 shadow-lg flex selector w-full bg-white hover:transform hover:scale-y-110 hover:scale-x-110 hover:transform-origin-bottom duration-500 ease-linear">
                        {/* [url('./../../public/Twitter_post.png')] */}
                        <div
                        className="w-1/6 mx-auto"
                        >
                        <TfiHandPointRight
                        fontSize={25}
                        className="m-auto text-primary"
                        />
                        </div>
                        <div className=" w-5/6">
                        What is sickle cell anemia that India plans to eliminate by 2047?
                        </div>
                        </div>
                        </Link>


                        <Link
                        href="https://www.jagran.com/delhi/new-delhi-city-ncr-om-birla-says-everyone-will-have-to-make-joint-efforts-for-a-thalassemia-free-india-23407351.html"
                        >
                        <div className="border-[2px] border-primary p-4 shadow-lg flex selector w-full bg-white hover:transform hover:scale-y-110 hover:scale-x-110 hover:transform-origin-bottom duration-500 ease-linear">
                        {/* [url('./../../public/Twitter_post.png')] */}
                        <div
                        className="w-1/6 mx-auto"
                        >
                        <TfiHandPointRight
                        fontSize={25}
                        className="m-auto text-primary "
                        />
                        </div>
                        <div className="w-5/6">
थैलेसीमिया मुक्त भारत के लिए सबको मिलकर करना होगा प्रयास: ओम बिरला
</div>  
                        </div>
                        </Link>
                    </div>
                </div>

            <div className="w-full flex md:flex-row flex-col p-4 gap-4">
            <Iframe  
            height="260"
            className="md:w-1/2 w-full"
             src="https://www.youtube.com/embed/-8OJKZYGohY?si=hA2QxRgs7pD-6iVU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe >

            <Iframe  
            height="260"npm i react-iframe
            className="md:w-1/2 w-full" src="https://www.youtube.com/embed/VWdsTpcSQAM?si=Em5OZMHMjMqgkXyB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
            </div>

            </div>

            {/* <div className="text-4xl text-primary font-bold absolute rounded-md w-4/5 text-left right-0 left-0 top-24 md:top-44 mx-auto bg-white h-fit p-8 shadow-md mb-8">
      Knowledge Hub

                <div className="text-3xl my-4">
                    <div className="grid grid-cols-2 grid-rows-2 my-4 gap-4 text-black justify-center h-[400px] rounded-md shadow-lg">
                        <div className="selector row-span-2 col-span-1  bg-[url('./../../public/Twitter_post.png')] object-scale-down  hover:transform hover:scale-y-110 hover:scale-x-110 hover:transform-origin-bottom duration-500 ease-linear">
                        </div>

                        <div className="selector col-span-1 bg-[url('./../../public/newspaper.png')]  object-scale-down  rounded-md shadow-lg  hover:transform hover:scale-y-110 hover:scale-x-110 hover:transform-origin-bottom duration-500 ease-linear">
                        </div>

                        <div className="selector col-span-1 bg-[url('./../../public/newspaper-2.png')]  object-scale-down  rounded-md shadow-lg  hover:transform hover:scale-y-110 hover:scale-x-110 hover:transform-origin-bottom duration-500 ease-linear">
                        </div>
                    </div>
                </div>
            </div> */}

            <Footer/>
        </main>
    )
};

// export default Page;

