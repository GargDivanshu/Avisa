"use client";
import React, { FC } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <div className="w-full text-black md:h-[300px] h-fit bg-gray-200 absolute bottom-0 ">
      <div className="md:mx-24 my-auto mx-4 text-sm md:flex-row flex-col flex justify-evenly mb-16 md:mt-8">
        <div className="flex text-center flex-col">
          <div className="text-xl text-primary font-bold py-2">About</div>

          <Link
          href="/about"
          >
          <div className="py-1">About Us</div>
          </Link>

          <Link 
          href="/about/care_guidelines"
          >
          <div className="py-1">Care Guidelines</div>
          </Link>

          <Link 
          href="/about/mission_vision_values"
          >
          <div className="py-1">Mission, Vision, Values</div>
          </Link>

          <Link
          href="/about/team"
          >
          <div className="py-1">Our Team</div>
          </Link>
        </div>

        <div className="flex text-center flex-col">
          <div className="text-xl text-primary font-bold py-2">Services</div>

          <Link
          href="/services/avisa_swasthya_hemoglobinopathy"
          >
          <div className="py-1">Avisa Swasthya Hemoglobinopathy</div>
          </Link>

          <Link
          href="/services/avisa_swasthya_maternal_and_child_care"
          >
          <div className="py-1">Avisa Swasthya Maternal and Child Care</div>
          </Link>


          <Link
          href="/services/avisa_swasthya_awareness"
          >
          <div className="py-1">Avisa Swasthya Awareness</div>
          </Link>

          <Link
          href="/services/avisa_swasthya_health_and_care_camps"
          >
          <div className="py-1">Avisa Swasthya Health and Care Camp</div>
          </Link>
        </div>

        <div className="relative flex text-center flex-col">
          <div className="text-xl text-primary font-bold py-2">Contact Us</div>

          <div className="py-1">
            Sovereign Global Markets (P) Ltd.
            <br />
            409, Mercantile House, K.G. Marg,
            <br />
            New Delhi, India - 110001
            <br />
          </div>

          <div className="md:absolute md:bottom-0 py-1 font-semibold text-primary">
            Tel: +91 11 40827709/10/11
          </div>

          {/* <div className="py-1">
            Avisa Swasthya Awareness
            </div> */}

          {/* <div className="py-1">
            Avisa Swasthya Health and Care Camp
            </div> */}
        </div>
      </div>

      <div className="text-white md:px-24 w-full h-[60px] p-2 bg-primary absolute bottom-0 flex flex-col justify-between md:flex-row text-center">
        <div className="my-auto text-xs ">© Avisa / Disclaimer</div>

        <div className="flex justify-evenly my-2">
          <AiFillLinkedin fontSize={20} className="my-auto mx-4" />

          <BsInstagram fontSize={20} className="my-auto mx-4" />

          <FaXTwitter fontSize={20} className="my-auto mx-4" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
