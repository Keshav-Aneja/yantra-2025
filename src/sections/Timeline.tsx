"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import TimelineHover from "@/components/TimelineHover";

interface Event {
  week: string;
  title: string;
  date: string;
  image: string;
  description: string,
}

const events: Event[] = [
  {
    week: "Week",
    title: "Inauguration",
    description: "Dolor esse do fugiat culpa laborum occaecat excepteur ipsum.",
    date: "06 JUN",
    image: "/images/timeline/inaugration.png"
  },
  {
    week: "Week",
    title: "Tech Competition",
    description: "Dolor esse do fugiat culpa laborum occaecat excepteur ipsum.",
    date: "13 JUN",
    image: "/images/timeline/tech-competition.png"
  },
  {
    week: "Week",
    title: "Hackathon",
    description: "Dolor esse do fugiat culpa laborum occaecat excepteur ipsum.",
    date: "20 JUN",
    image: "/images/timeline/hackathon-1.png"
  },
  {
    week: "Week",
    title: "Workshop",
    description: "Dolor esse do fugiat culpa laborum occaecat excepteur ipsum.",
    date: "27 JUN",
    image: "/images/timeline/workshop.png"
  },
  {
    week: "Week",
    title: "Tech Talk",
    description: "Dolor esse do fugiat culpa laborum occaecat excepteur ipsum.",
    date: "04 JUL",
    image: "/images/timeline/tech-talk.png"
  },
  {
    week: "Week",
    title: "Hackathon",
    description: "Dolor esse do fugiat culpa laborum occaecat excepteur ipsum.",
    date: "11 JUL",
    image: "/images/timeline/hackathon-2.png"
  },
];

export default function Timeline() {
  const [currentEventIndex, setCurrentEventIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentIndex = events.findIndex(
        (event) => new Date(event.date).getTime() > now.getTime()
      );
      setCurrentEventIndex(
        currentIndex === -1 ? events.length - 1 : currentIndex
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-wrapper-sm md:w-wrapper border border-border mx-auto border-t-0 font-roboto"
      id="timeline"
    >
      <div className="w-full h-32 md:h-60 grid grid-cols-2 border-b border-border">
        <div className="w-full h-full border-r border-border flex flex-col justify-end col-span-2 md:col-span-1">
          <div className={"p-4 md:p-8 pb-8 flex gap-5"}>
            <Image
              src={"/icons/arrow-right-solid.svg"}
              height={11}
              width={8}
              alt={"arrow-right"}
            />
            <div
              className={
                "font-roboto_mono text-white text-xl md:text-4xl font-medium"
              }
            >
              Timeline
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto px-4 py-8  px-24">
        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-px top-0 h-full bg-border " />
        <div className="relative">
          {events.map((event, index) => (
            <div
              key={index}
              className={`group flex items-center mb-3 md:mb-8 relative ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`w-full md:w-[calc(50%-5.9rem)] h-[calc(100%+0.1rem)] bg-border absolute  z-[-10]  
                  ${
                    index % 2 === 1
                      ? "md:flex-row-reverse top-[-0.05rem] right-[-0.05rem]"
                      : "top-[-0.05rem] left-[-0.05rem]"
                  }`}
                style={{
                  clipPath:
                    "polygon(3% 0, 100% 0, 100% 85%, 97% 100%, 0% 100%, 0 15%)",
                }}
              ></div>
              <div
                className={`w-[80%] md:w-[calc(50%-6rem)]  relative left-12 p-4 bg-black border border-gray-800 text-white group-hover:gradient-bg group-hover:text-black transition-all duration-200 ease-linear rounded-lg `}
                style={{
                  clipPath:
                    "polygon(3% 0, 100% 0, 100% 85%, 97% 100%, 0% 100%, 0 15%)",
                  zIndex: 50,
                }}
              >
                <div className="flex justify-between items-center font-space_mono text-xs md:text-xl font-medium   ">
                  <div>
                    <div>{event.week}</div>
                    <div>{event.title}</div>
                  </div>
                  <div className={` mt-1 text-sm md:text-[1.325rem] `}>
                    {event.date}
                  </div>
                </div>
              </div>
              <div className="w-4 h-4 md:w-8 md:h-8 absolute left-4 md:left-1/2 transform -translate-x-1/2">
                <div
                  className={`w-5 md:w-9 h-5 md:h-9 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 group-hover:gradient-bg bg-white`}
                >
                  <div
                    className={`w-2 md:w-5 h-2 md:h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-black`}
                  />
                </div>
              </div>
              <TimelineHover
                title={event.title}
                description={event.description}
                image={event.image}
                className={`group-hover:flex hidden top-20 md:top-28  ${
                  index % 2 === 1
                    ? "flex-row-reverse   right-[-0.05rem]"
                    : " left-[-1rem] md:left-[-0.05rem]"
                } `}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
