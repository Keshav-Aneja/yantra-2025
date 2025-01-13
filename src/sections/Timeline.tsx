"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Event {
  week: string;
  title: string;
  date: string;
}

const events: Event[] = [
  { week: "Week", title: "Inauguration", date: "06 JUN" },
  { week: "Week", title: "Event 2", date: "13 JUN" },
  { week: "Week", title: "Event 3", date: "20 JUN" },
  { week: "Week", title: "Event 4", date: "27 JUN" },
  { week: "Week", title: "Event 5", date: "04 JUL" },
  { week: "Week", title: "Event 6", date: "11 JUL" },
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
    <div className="w-[75%] border border-border mx-auto border-t-0 font-roboto">
      <div className="w-full h-full border-r border-border flex flex-col justify-end">
        <div className={"p-8 pb-8 flex gap-5"}>
          <Image
            src={"/icons/arrow-right-solid.svg"}
            height={11}
            width={8}
            alt={"arrow-right"}
          />
          <div className={"font-roboto_mono text-white text-4xl font-medium"}>
            Timeline
          </div>
        </div>
      </div>
      <div className="relative mx-auto px-4 py-8  px-24">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-px top-0 h-full bg-border" />
        <div className="relative">
          {events.map((event, index) => (
            <div
              key={index}
              className={`flex items-center mb-8 ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`w-[calc(50%-6rem)] p-4 rounded-lg ${
                  index === currentEventIndex
                    ? "gradient-bg text-black"
                    : "bg-gray-900/50 border border-gray-800 text-white"
                }`}
                style={{
                  clipPath:
                    "polygon(3% 0, 100% 0, 100% 85%, 97% 100%, 0% 100%, 0 15%)",
                }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div
                      className={`${
                        index === currentEventIndex
                          ? "text-black"
                          : "text-white"
                      }`}
                    >
                      {event.week}
                    </div>
                    <div
                      className={`${
                        index === currentEventIndex
                          ? "text-black"
                          : "text-white"
                      }`}
                    >
                      {event.title}
                    </div>
                  </div>
                  <div
                    className={`${
                      index === currentEventIndex ? "text-black" : "text-white"
                    } mt-1`}
                  >
                    {event.date}
                  </div>
                </div>
              </div>
              <div className="w-8 h-8 absolute left-1/2 transform -translate-x-1/2">
                <div
                  className={`w-9 h-9 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 ${
                    index === currentEventIndex ? "gradient-bg" : "bg-white"
                  }`}
                >
                  <div
                    className={`w-5 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-black`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
