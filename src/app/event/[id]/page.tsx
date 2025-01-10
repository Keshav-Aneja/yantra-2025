"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/sections/footer";
import { useParams } from "next/navigation";
import { events } from "@/constants/events";
import Image from "next/image";
import Events from "@/sections/events";

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
      <Navbar />
      <div className="w-[75%] mx-auto font-roboto border-2 border-[#313135] border-b-0">
        <div className="grid grid-cols-2 grid-rows-1">
          <div className="border border-[#313135] p-4"></div>
          <div className="border border-[#313135] p-4"></div>
        </div>

        <div className="border border-[#313135] p-4">
          <h2 className="text-4xl font-bold text-white px-6 py-3">
            {event.event.name}
          </h2>
          <h3
            style={{ color: event.event.typeColor }}
            className={`text-xl font-bold px-6`}
          >
            {event.event.type}
          </h3>
        </div>

        <div className="border border-[#313135] p-4 text-white">
          <p className={`text-lg font-bold px-6`}>
            EVENT DATE:{" "}
            {new Date(event.event.startDate).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="border border-[#313135] p-4 text-white">
          <p className={`text-lg font-bold px-6`}>
            EVENT TIME: {new Date(event.event.startDate).toLocaleTimeString()}
          </p>
        </div>

        <div className="border border-[#313135] p-4 text-white">
          <p className={`text-lg font-bold px-6`}>
            BY: {event.organisation.name}
          </p>
        </div>

        <div className="grid grid-cols-2 grid-rows-1">
          <div className="border border-[#313135] p-4 flex items-center justify-center">
            <Image src={event.event.image} width={500} height={500} alt="" />
          </div>
          <div className="border border-[#313135] p-4 text-white">
            <p className="text-lg font-bold p-4 m-4">
              {event.event.description}
            </p>
          </div>
        </div>

        <div className="border border-[#313135] p-4 text-white text-center">
          <button className="gradient-bg text-black px-4 py-2 transition-colors">
            Register Now
          </button>
        </div>

        <Events events={events} />
      </div>
      <Footer />
    </div>
  );
}
