"use client";

import React, { useState } from "react";
import Image from "next/image";
import TimelineHover from "@/components/TimelineHover";

interface Event {
  title: string;
  image: string;
  description: string;
}

const events: Event[] = [
  {
    title: "Tech-talks",
    description:
      "Gain insights from industry experts. Attend captivating tech-talks by renowned professionals, from various renowned institutions and industries, exploring AI-driven solutions for the world's most pressing challenges, as defined by the SDGs.",
    image: "/images/timeline/tech-talk.png",
  },
  {
    title: "Tech-competitions",
    description:
      "Collaborate and create. Join dynamic tech competitions, working alongside fellow innovators to develop novel solutions, and gain invaluable experience in a competitive environment.",
    image: "/images/timeline/tech-competition.png",
  },
  {
    title: "Hackathons",
    description:
      "Collaborate and create. Participate in an intensive, collaborative event where teams brainstorm, design, and build innovative projects in a limited timeframe.",
    image: "/images/timeline/hackathon-1.png",
  },
  {
    title: "Workshops",
    description:
      "Learn by doing. Engage in interactive workshops facilitated by expert instructors, offering practical exercises and real-world applications.",
    image: "/images/timeline/workshop.png",
  },
  {
    title: "Central Hack",
    description:
      "Join Central Hack is VIT's premier hackathon which is a diverse community of developers, designers, and problem-solvers in an intense, collaborative environment. Over a set period, teams will conceptualize, design, and build working prototypes, culminating in presentations to a panel of expert judges.",
    image: "/images/timeline/hackathon-1.png",
  },
];

export default function Timeline() {
  const [currentEventIndex, setCurrentEventIndex] = useState<number>(0);

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
              Event Types
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto px-4 py-8 md:px-6 xl:px-24">
        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-px top-0 h-full bg-border" />
        <div className="relative grid gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className={`group flex flex-col md:flex-row justify-center items-center mb-3 md:mb-8 relative ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`w-full md:w-[calc(50%-3rem)] h-[calc(100%+0.1rem)] bg-border absolute z-[-10] ${
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
                className={`w-[80%] md:w-[calc(50%-3rem)] relative p-4 bg-black border border-gray-800 text-white group-hover:gradient-bg group-hover:text-black transition-all duration-200 ease-linear rounded-lg ${
                  index % 2 === 1 ? "md:ml-auto" : "md:mr-auto"
                }`}
                style={{
                  clipPath:
                    "polygon(3% 0, 100% 0, 100% 85%, 97% 100%, 0% 100%, 0 15%)",
                  zIndex: 50,
                }}
              >
                <div className="flex flex-col xl:flex-row md:flex-col justify-start items-start xl:justify-between xl:items-center font-space_mono text-xs md:text-base font-medium">
                  <div>
                    <div>{event.title}</div>
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
                className={`group-hover:flex hidden top-20 md:top-28 ${
                  index % 2 === 1
                    ? "flex-row-reverse right-[-0.05rem]"
                    : "left-[-1rem] md:left-[-0.05rem]"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
