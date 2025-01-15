import React from "react";
import Image from "next/image";
import HeroCenter from "@/components/Hero-Center";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="bg-custom-gradient flex justify-center items-center relative">
        <span className="absolute bottom-6 left-12 flex items-center gap-3 font-roboto_mono text-white/60 text-sm">
          <h2>SCROLL</h2>
          <FaArrowDown className="text-xl text-white" />
        </span>
        <HeroCenter />
        <div className="absolute w-full md:w-auto top-1/2 left-1/2 -translate-x-[40%]  md:-translate-x-[35%] -translate-y-1/2">
          <Image
            src="/robot.webp"
            width={1200}
            height={1200}
            alt="Robot"
            className="w-full md:w-[85%] h-auto"
          />
        </div>
      </div>
      <div className="absolute bottom-16 left-8 p-4 space-y-1">
        <div className="text-white p-2 text-base w-2/3 font-roboto">
          <span className="whitespace-nowrap text-lg sm:text-xl md:text-2xl">
            OFFICE OF STUDENTS&apos; WELFARE
          </span>{" "}
          PRESENTS
        </div>
        <div className="text-white p-2 text-4xl sm:text-5xl md:text-7xl font-armstrong">
          YANTRA &apos;25
        </div>
      </div>
      {/* <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-12 mr-4 mt-8">
        <div className="flex flex-col items-center space-y-12">
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        </div>
        <div className="mt-4">
          <button className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div> */}
    </>
  );
};

export default Hero;
