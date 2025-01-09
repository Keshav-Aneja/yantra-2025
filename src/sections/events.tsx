import React from "react";
import EventCard, { EventCardProps } from "@/components/event-card";
import Image from "next/image";
import { BiSolidRightArrow } from "react-icons/bi";

interface EventsProps {
  events: EventCardProps[];
}

const Events = ({ events }: EventsProps) => {
  return (
    <section className={"h-full my-12"}>
      <div className={"m-5 flex gap-5"}>
        <Image
          src={"/icons/arrow-right-solid.svg"}
          height={11}
          width={8}
          alt={"arrow-right"}
        />
        <div className={"font-roboto_mono text-white text-4xl font-semibold"}>
          OUR EVENTS
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
