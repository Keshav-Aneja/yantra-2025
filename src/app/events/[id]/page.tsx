"use client";

import { useParams } from "next/navigation";
import {getEventColor} from "@/constants/events";
import Image from "next/image";
import EventImageContainer from "@/components/event-image";
import EventCard from "@/components/event-card";
import Seemore from "@/components/seemore";
import { VerticalLine } from "@/components/lines";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {EventData, fetchEvent} from "@/lib/api";
import {toast} from "sonner";
import {LoaderCircleIcon} from "lucide-react";

function parseAndFormatDate(dateString: string) {
  const [datePart] = dateString.split(" ");

  // Convert to a Date object
  const [day, month, year] = datePart.split("/").map(Number);
  const dateObj = new Date(year, month - 1, day);

  // Format the date to "3 March 2025"
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(dateObj);
}

function parseTime(dateString: string){
  return dateString.split("     ")[1];
}

export default function EventPage() {
  const { id } = useParams<{ id: string }>();

  const [event, setEvent] = useState<EventData>();
  const [similarEvents, setSimilarEvents] = useState<EventData[]>([]);

  useEffect(() => {
    if (id) {
      (async ()=>{
        const res = await fetchEvent({id});
        if (!res) return;
        if (res.status === "error") {
          //TOAST
          toast.error("Something went wrong.");
          return;
        }
        setEvent(res.event);
        if (res.similarEvents) setSimilarEvents(res.similarEvents);
      })()
    }
  }, []);

  if (!event) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center bg-custom-gradient">
        <LoaderCircleIcon className={"size-10 animate-spin"} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black bg-custom-gradient">
      <div className="w-wrapper-sm md:w-wrapper mx-auto font-roboto border border-[#313135] border-b-0">
        <div className="grid grid-cols-2 grid-rows-1">
          <div className="border border-[#313135] p-4"></div>
          <div className="border border-[#313135] p-4"></div>
        </div>

        <div className="border border-[#313135] p-1 py-4 md:p-4">
          <h2 className="text-6xl max-md:text-2xl font-medium text-white font-armstrong px-6 py-3">
            {event.eventName}
          </h2>
          <h3
            style={{ color: getEventColor(event.eventType) }}
            className={`text-base max-md:text-xs relative -top-5 md:-top-3 font-bold font-space_mono px-6`}
          >
            {event.eventType}
          </h3>
        </div>

        <div className="border border-[#313135] p-2 py-3 md:p-4 text-white font-space_mono">
          <p className={`text-lg max-md:text-sm font-semibold px-6`}>
            EVENT DATE:{" "}
            <span className="font-normal text-base max-md:text-xs">
              {parseAndFormatDate(event.eventStart)}
            </span>
          </p>
        </div>

        <div className="border border-[#313135] p-2 py-3 md:p-4 text-white">
          <p className={`text-lg max-md:text-sm font-semibold px-6`}>
            EVENT TIME:{" "}
            <span className="font-normal text-base max-md:text-xs">
              {parseTime(event.eventStart)}
            </span>
          </p>
        </div>

        <div className="border border-[#313135] p-2 py-3 md:p-4 text-white">
          <p className={`text-lg max-md:text-sm font-semibold px-6`}>
            Venue:{" "}
            <span className="font-normal text-base max-md:text-xs">
              {event.venue}
            </span>
          </p>
        </div>

        <div className="border border-[#313135] p-2 py-3 md:p-4 text-white">
          <p className={`text-lg max-md:text-sm font-semibold px-6 flex flex-wrap gap-2`}>
            BY:{" "}
            {event.collaborativeWith.length > 0 && event.collaborativeWith.map((name, index) => (
              <span className="font-normal text-base max-md:text-xs">
                {name}{index !== event.collaborativeWith.length - 1 && ", "}
              </span>
            ))}
            {event.collaborativeWith.length <= 0 && (
              <span className="font-normal text-base max-md:text-xs">
                  {event.clubName}
              </span>
            )}
          </p>
        </div>

        <div className={"relative flex flex-col items-center"}>
          <VerticalLine className={"absolute h-full max-lg:hidden"} />
          <div className="grid grid-cols-2 grid-rows-1 max-lg:flex max-lg:flex-col">
            <div className="p-4 max-md:p-2 flex items-center justify-center">
              <EventImageContainer removeBg>
                <Image
                  src={event.eventPoster}
                  width={600}
                  height={600}
                  priority
                  alt=""
                />
              </EventImageContainer>
            </div>
            <div className="p-0 md:p-2 text-white">
              <p className="text-base max-md:text-xs font-space_mono font-normal leading-7 max-md:leading-4 p-4 max-md:p-2 m-4">
                {event.eventDescription}
              </p>
            </div>
          </div>

          <div className="w-full flex justify-center p-4 text-white text-center">
            <Link
              href="https://vtop.vit.ac.in"
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
            </Link>
          </div>
          <RelatedEvents events={similarEvents} />
        </div>
      </div>
    </div>
  );
}

const RelatedEvents = ({ events }: { events: EventData[] }) => (
  <div
    className={"w-full h-full max-md:border-t max-md:border-border max-md:mt-2"}
  >
    <div className={"p-4 md:p-8 pb-16  max-md:pb-8 flex gap-5"}>
      <Image
        src={"/icons/arrow-right-solid.svg"}
        height={11}
        width={8}
        alt={"arrow-right"}
      />
      <div
        className={
          "font-roboto_mono text-white text-4xl max-md:text-xl font-medium"
        }
      >
        {"RELATED EVENTS"}
      </div>
    </div>
    <div
      className={
        "lg:grid-cols-4 h-full w-full grid md:grid-cols-2 gap-2 max-md:grid-cols-2 max-md:grid-rows-2"
      }
    >
      {events.slice(0, 3).map((event) => (
        <EventCard {...event} key={event._id} related />
      ))}
      <div
        className={
          "w-full h-full border border-border flex justify-center items-center"
        }
      >
        <Seemore />
      </div>
    </div>
  </div>
);
