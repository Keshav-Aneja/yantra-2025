import React from "react";
import Image from "next/image";
import HeroCenter from "@/components/Hero-Center";
import { FaArrowDown } from "react-icons/fa";
import { TbClockHour4 } from "react-icons/tb";
import CountdownTimer from "@/components/CountdownTimer";

const Hero = () => {
  return (
    <>
      <div className="bg-custom-gradient flex justify-center items-center relative">
        <div className="w-wrapper-sm h-full border-x border-border absolute left-1/2 -translate-x-1/2 top-0 md:hidden"></div>
        <span className="absolute bottom-6 left-6 md:bottom-6 md:left-12 flex items-center gap-3 font-roboto_mono text-white/60 text-sm">
          <h2>SCROLL</h2>
          <FaArrowDown className="text-xl text-white" />
        </span>
        <HeroCenter />
        <div className="absolute w-full md:w-auto top-[43%] md:top-1/2 left-1/2 -translate-x-[40%]  md:-translate-x-[35%] -translate-y-[57%] md:-translate-y-1/2">
          <Image
            src="/robot.webp"
            width={1200}
            height={1200}
            alt="Robot"
            className="w-[90%] md:w-[85%] h-auto"
          />
        </div>
      </div>
      <div className="absolute bottom-72 md:bottom-68 xl:bottom-16 left-4 md:left-8 p-4 space-y-1">
        <div className="text-white p-2 text-xs w-2/3 font-roboto">
          <span className="whitespace-nowrap text-sm  md:text-2xl">
            OFFICE OF STUDENTS&apos; WELFARE
          </span>{" "}
          PRESENTS
        </div>
        <div className="text-white p-2 text-4xl sm:text-5xl md:text-7xl font-armstrong">
          YANTRA &apos;25
        </div>
        </div>
      <div className="absolute -bottom-4 right-0 xl:hidden justify-center items-center text-white pb-12">
        <div className="grid grid-cols-1 lg:grid-rows-16 w-[90%] self-end">
          <div className="row-span-2 text-sm grid grid-cols-[75%_25%] lg:order-1 order-3">
            <div className="flex items-center justify-end text-right border border-gray-300 p-6 gap-14">
              <Image
                src="/icons/arrow-right-solid.svg"
                alt=""
                width={20}
                height={20}
                className="scale-x-[-1] w-[6px] h-auto"
              />
              <span>PARTICIPANTS</span>
            </div>
            <div className="flex items-center justify-center border border-gray-300 p-6 border-l-0 text-xl">
              10L+
            </div>
          </div>
          <div className="row-span-1 text-sm flex items-center justify-end text-gray-400 text-right lg:order-2 order-4"></div>
          <div className="row-span-1 text-sm border border-[#353539] border-b-0 pr-6 uppercase h-full flex items-center justify-end lg:order-3 order-5">
            <div className="flex items-center justify-between text-gray-300 text-right h-full w-1/2">
              <Image
                src="/icons/arrow-right-solid.svg"
                alt=""
                width={20}
                height={20}
                className="scale-x-[-1] w-[6px] h-auto"
              />
              <span>HACKATHONS</span>
            </div>
          </div>
          <div className="row-span-1 text-sm border border-[#353539] border-b-0 pr-6 uppercase h-full flex items-center justify-end lg:order-4 order-6">
            <div className="flex items-center justify-between text-gray-300 text-right h-full w-1/2">
              <Image
                src="/icons/arrow-right-solid.svg"
                alt=""
                width={20}
                height={20}
                className="scale-x-[-1] w-[6px] h-auto"
              />
              <span>WORKSHOPS</span>
            </div>
          </div>
          <div className="row-span-4 text-sm flex items-center justify-end text-gray-400 text-right pr-6 lg:order-7 order-9"></div>
          <div className="row-span-4 text-sm grid  lg:order-8 order-2">
            <div className="row-span-2 justify-end p-4 text-xl items-center flex  border border-1 border-gray-300 border-b-0 gap-6 font-bold ">
              <TbClockHour4 />
              <CountdownTimer targetDate="2025-02-03T08:00:00" />
            </div>
            <div className="row-span-2 text-sm grid  lg:order-8 order-2 grid-cols-[75%_25%]">
              <div className="flex items-center justify-end text-right border border-gray-300 p-2 md:p-4 gap-12 text-[#76C38F]">
                <Image
                  src="/icons/arrow-right-solid.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="scale-x-[-1] w-[6px] h-auto"
                />
                <span className="text-base text-gradient">FEBRUARY, 2025</span>
              </div>
              <div className="flex text-lg text-gradient font-bold items-center justify-center border border-gray-300 p-2 md:p-4 border-l-0 text-[#76C38F]">
                3-9
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
