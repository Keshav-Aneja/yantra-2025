import Image from "next/image";
import { TbClockHour4 } from "react-icons/tb";
import CountdownTimer from "./CountdownTimer";

export default function HeroCenter() {
  return (
    <div className="relative flex flex-col lg:flex-row md:ustify-center items-center w-full lg:w-wrapper text-white font-roboto overflow-hidden h-[92.9vh] border-border border-x ">
      <div className="flex justify-center items-center w-wrapper-sm md:w-full lg:w-1/2 p-0 md:p-8 mt-4 md:mt-0">
        <div className="grid grid-cols-1 lg:grid-rows-12 w-full">
          <div className="row-span-2 p-2 justify-center items-center hidden md:flex border border-b-0 border-1 border-gray-300 w-[15%]">
            <Image src="/1.png" width={40} height={40} alt="" />
          </div>
          <div className="row-span-2 justify-left p-4 pl-16 md:pl-6 md:p-6 text-xs md:text-sm items-center flex border border-1 border-gray-300 relative">
            <div className="h-full absolute top-0 left-0 aspect-square flex md:hidden items-center justify-center border-r border-gray-300">
              <Image
                src="/1.png"
                width={40}
                height={40}
                alt=""
                className="w-7 h-auto"
              />
            </div>
            A WEEK OF TECHNICAL INNOVATION
          </div>
          <div className="row-span-2 justify-left p-3 pl-16 md:pl-6 md:p-6 text-xs md:text-sm items-center flex text-gray-400 border-r-0">
            WITH 30+ HACKATHONS
          </div>
        </div>
      </div>
      <div className="hidden xl:flex justify-center items-center w-[70%] lg:w-1/2 mt-60 md:mt-28 lg:mt-0 p-0 md:p-8 relative z-[100] md:z-0">
        <div className="grid grid-cols-1 lg:grid-rows-16 w-full">
          <div className="row-span-2 text-sm grid grid-cols-[85%_15%] lg:order-1 order-3">
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
              10K+
            </div>
          </div>
          <div className="row-span-1 text-sm flex items-center justify-end text-gray-400 text-right lg:order-2 order-4"></div>
          <div className="row-span-1 text-sm border border-[#353539] border-b-0 pr-6 uppercase h-full flex items-center justify-end lg:order-3 order-5">
            <div className="flex items-center justify-between text-gray-300 text-right h-full w-1/3">
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
            <div className="flex items-center justify-between text-gray-300 text-right h-full w-1/3">
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
          <div className="row-span-1 text-sm border border-[#353539] border-b-0 pr-6 uppercase h-full flex items-center justify-end lg:order-5 order-7">
            <div className="flex items-center justify-between text-gray-300 text-right h-full w-1/3">
              <Image
                src="/icons/arrow-right-solid.svg"
                alt=""
                width={20}
                height={20}
                className="scale-x-[-1] w-[6px] h-auto"
              />
              <span>GUEST SESSIONS</span>
            </div>
          </div>
          <div className="row-span-1 text-sm flex items-center justify-end text-gray-400 text-right border border-[#353539] pr-6 uppercase lg:order-6 order-8">
            AND MUCH MORE
          </div>
          <div className="row-span-4 text-sm flex items-center justify-end text-gray-400 text-right pr-6 lg:order-7 order-9"></div>
          <div className="row-span-4 text-sm grid  lg:order-8 order-2">
            <div className="row-span-2 justify-end p-4 text-xl items-center flex  border border-1 border-gray-300 border-b-0 gap-6 font-bold ">
              <TbClockHour4 />
              <CountdownTimer targetDate="2025-02-03T08:00:00" />
            </div>
            <div className="row-span-2 text-sm grid  lg:order-8 order-2 grid-cols-[85%_15%]">
              <div className="flex items-center justify-end text-right border border-gray-300 p-4 gap-12 text-[#76C38F]">
                <Image
                  src="/icons/arrow-right-solid.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="scale-x-[-1] w-[6px] h-auto"
                />
                <span className="text-base text-gradient">FEBRUARY, 2025</span>
              </div>
              <div className="flex text-lg text-gradient font-bold items-center justify-center border border-gray-300 p-4 border-l-0 text-[#76C38F]">
                3-9
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
