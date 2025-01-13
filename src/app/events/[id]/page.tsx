"use client";

import { useParams } from "next/navigation";
import { events } from "@/constants/events";
import Image from "next/image";
import EventImageContainer from "@/components/event-image";
import EventCard, {EventCardProps} from "@/components/event-card";
import Seemore from "@/components/seemore";
import {VerticalLine} from "@/components/lines";

export default function EventPage() {
  const { id } = useParams();

  const event = events.find((event) => event.id === parseInt(id as string));

  if (!event) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl">Event not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="w-[75%] max-md:w-wrapper-md mx-auto font-roboto border border-[#313135] border-b-0">
        <div className="grid grid-cols-2 grid-rows-1">
          <div className="border border-[#313135] p-4"></div>
          <div className="border border-[#313135] p-4"></div>
        </div>

        <div className="border border-[#313135] p-4">
          <h2 className="text-6xl max-md:text-4xl font-medium text-white font-armstrong px-6 py-3">
            {event.event.name}
          </h2>
          <h3
            style={{ color: event.event.typeColor }}
            className={`text-base max-md:text-sm relative -top-3 font-bold font-space_mono px-6`}
          >
            {event.event.type}
          </h3>
        </div>

        <div className="border border-[#313135] p-4 text-white font-space_mono">
          <p className={`text-lg max-md:text-base font-semibold px-6`}>
            EVENT DATE:{" "}
            <span className="font-normal text-base max-md:text-sm">
              {new Date(event.event.startDate).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </p>
        </div>

        <div className="border border-[#313135] p-4 text-white">
          <p className={`text-lg max-md:text-base font-semibold px-6`}>
            EVENT TIME:{" "}
            <span className="font-normal text-base max-md:text-sm">
              {new Date(event.event.startDate).toLocaleTimeString()}
            </span>
          </p>
        </div>

        <div className="border border-[#313135] p-4 text-white">
          <p className={`text-lg max-md:text-base font-semibold px-6`}>
            BY:{" "}
            <span className="font-normal text-base max-md:text-sm">
              {event.organisation.name}
            </span>
          </p>
        </div>

        <div className={"relative flex flex-col items-center"}>
          <VerticalLine className={"absolute h-full max-lg:hidden"} />
          <div className="grid grid-cols-2 grid-rows-1 max-lg:flex max-lg:flex-col">
            <div className="p-4 max-md:p-2 flex items-center justify-center">
              <EventImageContainer removeBg>
                <Image src={event.event.image} width={600} height={600} alt="" />
              </EventImageContainer>
            </div>
            <div className="p-2 text-white">
              <p className="text-base font-space_mono font-normal leading-7 max-md:leading-5 p-4 max-md:p-2 m-4">
                {event.event.description}
              </p>
            </div>
          </div>

          <div className="w-full flex justify-center p-4 text-white text-center">
            <button
              className="gradient-bg text-black px-8 max-md:px-5 py-4 max-md:py-3 transition-colors flex items-center gap-2 justify-center text-xl"
              style={{
                clipPath:
                  "polygon(5% 0, 100% 0, 100% 85%, 95% 100%, 0% 100%, 0 15%)",
                background:
                  "linear-gradient(23.96deg, #76C38F 0%, #60CF8C 48.44%, #A7C12C 100%)",
              }}
            >
              <span className="uppercase max-md:text-sm">Register Now</span>
              <Image
                src="/icons/register-arrow.svg"
                width={12}
                height={12}
                alt=""
                className="w-2 h-auto"
              />
            </button>
          </div>
          <RelatedEvents events={events} />
        </div>
      </div>
    </div>
  );
}

const RelatedEvents = ({
    events
}: {
  events: EventCardProps[]
}) => (
    <div className={"w-full h-full max-md:border-t max-md:border-border max-md:mt-2"}>
      <div className={"p-8 pb-16 max-md:pb-10 flex gap-5"}>
        <Image
            src={"/icons/arrow-right-solid.svg"}
            height={11}
            width={8}
            alt={"arrow-right"}
        />
        <div className={"font-roboto_mono text-white text-4xl max-md:text-2xl font-medium"}>
          {"RELATED EVENTS"}
        </div>
      </div>
      <div className={"lg:flex h-full w-full md:grid md:grid-cols-2 gap-2 max-md:flex-col max-md:gap-4"}>
        {events.slice(0, 3).map(event => (
            <EventCard {...event} key={event.id} />
        ))}
        <div className={"w-full h-full border py-[7.5rem] max-md:py-[5rem] border-border flex justify-center items-center"}>
          <Seemore />
        </div>
      </div>
    </div>
)
