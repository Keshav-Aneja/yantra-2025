"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/sections/footer";
import { useParams } from "next/navigation";
import { events } from "@/constants/events";
import Image from "next/image";
import Events from "@/sections/events";
import EventImageContainer from "@/components/event-image";

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
      <div className="w-[75%] mx-auto font-roboto border border-[#313135] border-b-0">
        <div className="grid grid-cols-2 grid-rows-1">
          <div className="border border-[#313135] p-4"></div>
          <div className="border border-[#313135] p-4"></div>
        </div>

        <div className="border border-[#313135] p-4">
          <h2 className="text-6xl font-medium text-white font-armstrong px-6 py-3">
            {event.event.name}
          </h2>
          <h3
            style={{ color: event.event.typeColor }}
            className={`text-base relative -top-3 font-bold font-space_mono px-6`}
          >
            {event.event.type}
          </h3>
        </div>

        <div className="border border-[#313135] p-4 text-white font-space_mono">
          <p className={`text-lg font-semibold px-6`}>
            EVENT DATE:{" "}
            <span className="font-normal text-base">
              {new Date(event.event.startDate).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </p>
        </div>

        <div className="border border-[#313135] p-4 text-white">
          <p className={`text-lg font-semibold px-6`}>
            EVENT TIME:{" "}
            <span className="font-normal text-base">
              {new Date(event.event.startDate).toLocaleTimeString()}
            </span>
          </p>
        </div>

        <div className="border border-[#313135] p-4 text-white">
          <p className={`text-lg font-semibold px-6`}>
            BY:{" "}
            <span className="font-normal text-base">
              {event.organisation.name}
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 grid-rows-1">
          <div className="border border-[#313135] p-4 flex items-center justify-center">
            <EventImageContainer removeBg>
              <Image src={event.event.image} width={600} height={600} alt="" />
            </EventImageContainer>
          </div>
          <div className="border border-[#313135] p-2 text-white">
            <p className="text-sm font-space_mono font-normal leading-6 p-4 m-4">
              {event.event.description}
            </p>
          </div>
        </div>

        <div className="border border-[#313135] w-full flex justify-center p-4 text-white text-center">
          <button
            className="gradient-bg text-black px-8 py-4 transition-colors flex items-center gap-2 justify-center text-xl"
            style={{
              clipPath:
                "polygon(5% 0, 100% 0, 100% 85%, 95% 100%, 0% 100%, 0 15%)",
              background:
                "linear-gradient(23.96deg, #76C38F 0%, #60CF8C 48.44%, #A7C12C 100%)",
            }}
          >
            <span className="uppercase">Register Now</span>
            <Image
              src="/icons/register-arrow.svg"
              width={12}
              height={12}
              alt=""
              className="w-2 h-auto"
            />
          </button>
        </div>

        <Events events={events} related />
      </div>
    </div>
  );
}
