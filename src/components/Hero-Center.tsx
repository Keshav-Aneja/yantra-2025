import Image from "next/image";

export default function HeroCenter() {
  return (
    <div className="relative flex space-x-24 flex-row justify-center items-center w-[60%] text-white px-4 font-roboto h-[92.9vh]">
      <div className="flex justify-center items-center w-1/2">
        <div className="grid grid-rows-12 w-full">
          <div className="row-span-2 p-2 justify-center items-center flex border border-b-0 border-1 border-gray-300 w-[15%]">
            <Image src="/1.png" width={40} height={40} alt="" />
          </div>
          <div className="row-span-2 justify-left p-6 text-sm items-center flex border border-1 border-r-0 border-gray-300">
            A WEEK OF TECHNICAL INNOVATION
          </div>
          <div className="row-span-2 justify-left p-6 text-sm items-center flex text-gray-400 border-r-0">
            WITH 30+ HACKATHONS
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/2 mt-28">
        <div className="grid grid-rows-16 w-full">
          <div className="row-span-2 text-sm grid grid-cols-[85%_15%]">
            <div className="flex items-center justify-end text-right border border-gray-300 p-6 border-l-0">
              PARTICIPANTS
            </div>
            <div className="flex items-center justify-center border border-gray-300 p-6 border-l-0">
              10L+
            </div>
          </div>
          <div className="row-span-1 text-sm flex items-center justify-end text-gray-400 text-right"></div>
          <div className="row-span-1 text-sm flex items-center justify-end text-white text-right border border-[#353539] border-b-0 pr-6 border-l-0 uppercase">
            HACKATHONS
          </div>
          <div className="row-span-1 text-sm flex items-center justify-end text-gray-200 text-right border border-[#353539] border-b-0 pr-6 border-l-0 uppercase">
            WORKSHOPS
          </div>
          <div className="row-span-1 text-sm flex items-center justify-end text-gray-300 text-right border border-[#353539] border-b-0 pr-6 border-l-0 uppercase">
            GUEST SESSIONS
          </div>
          <div className="row-span-1 text-sm flex items-center justify-end text-gray-400 text-right border border-[#353539] pr-6 border-l-0 uppercase">
            AND MUCH MORE
          </div>
          <div className="row-span-4 text-sm flex items-center justify-end text-gray-400 text-right pr-6"></div>
          <div className="row-span-2 justify-end p-4 text-xl items-center flex border border-1 border-gray-300 border-l-0 border-b-0">
            06D:06H:06M:06S
          </div>
          <div className="row-span-2 text-sm grid grid-cols-[85%_15%]">
            <div className="flex items-center  justify-end text-right border border-gray-300 p-4 border-l-0">
              FEBRUARY, 2025
            </div>
            <div className="flex text-lg items-center justify-center border border-gray-300 p-4 border-l-0">
              3-9
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}