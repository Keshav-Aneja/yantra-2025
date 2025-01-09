import React from 'react'
import Image from 'next/image'
import HeroCenter from '@/components/Hero-Center'

const Hero = () => {
  return (
    <>
    <div className="bg-background flex justify-center items-center relative">
        <HeroCenter />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-[40%] -translate-y-1/2">
          <Image src="/robot.webp" width={600} height={600} alt="Robot" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 p-4 space-y-1">
        <div className="text-white p-2 text-2xl w-2/3 font-roboto">
          OFFICE OF STUDENTS’ WELFARE PRESENTS
        </div>
        <div className="text-white p-2 font-bold text-8xl">YANTRA'25</div>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-12 mr-4 mt-8">
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
      </div>
      </>
  )
}

export default Hero