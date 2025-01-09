import React from "react";
import EventCard, { EventCardProps } from "@/components/event-card";
import Image from "next/image";
import { BiSolidRightArrow } from "react-icons/bi";

interface EventsProps {
  events: EventCardProps[];
}

const Events = ({ events }: EventsProps) => {
  return (
    <section className={"w-wrapper h-full border border-t-0 border-border"}>
      <div className="w-full grid grid-cols-2 h-[10rem] min-h-fit">
        <div className="border-r border-border h-full flex flex-col justify-end p-8">
          <div className={"flex items-center gap-5  "}>
            <BiSolidRightArrow size={11} className="invert" />
            <div
              className={"font-roboto_mono text-white text-4xl font-semibold"}
            >
              OUR EVENTS
            </div>
          </div>
        </div>
      </div>
      <div className={"flex"}>
        {events.map((eventCardProps, index) => (
          <EventCard key={index} {...eventCardProps} />
        ))}
      </div>
    </section>
  );
};
export default Events;
