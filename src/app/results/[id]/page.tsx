"use client";

import { useParams } from "next/navigation";
import {getEventColor} from "@/constants/events";
import Image from "next/image";
import EventImageContainer from "@/components/event-image";
import { VerticalLine } from "@/components/lines";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {EventData, fetchEvent} from "@/lib/api";
import {toast} from "sonner";
import {LoaderCircleIcon} from "lucide-react";
import { dummyResult, Result } from "@/constants/result";

function parseAndFormatDate(dateString: string) {
  const [datePart] = dateString.split(" ");

  const [day, month, year] = datePart.split("/").map(Number);
  const dateObj = new Date(year, month - 1, day);

  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(dateObj);
}

function parseTime(dateString: string){
  return dateString.split("     ")[1];
}

export default function EventResultsPage() {
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
    <div className="min-h-screen">
      <div className="w-wrapper-sm md:w-wrapper mx-auto font-roboto border border-[#313135] border-b max-md:mb-2.5">
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

        <div className={"relative flex flex-col items-center pb-10"}>
          <div className="p-4 max-md:p-2 flex items-center justify-center w-full">
            <EventImageContainer removeBg>
              <Image
                src={event.eventPoster}
                width={600}
                height={600}
                priority
                alt=""
                className={"object-fill w-full h-full"}
              />
            </EventImageContainer>
          </div>
          <div className="w-full text-white">
            {Object.entries(dummyResult).map(([position, winners], index)=>(
              <div className="flex flex-col lg:flex-row border border-neutral-600" key={position}>
                <div className="lg:w-1/3 w-full flex justify-center items-center border border-border">
                  <p className="text-lg max-md:text-base uppercase py-2">{position}</p>
                </div>
                <div className="lg:w-2/3 w-full flex flex-col max-md:border-t-2 max-md:border-neutral-600">
                  {winners.map(student=>(
                    <div className="flex flex-row border border-border max-md:text-sm">
                      <div className="w-1/2 px-2 text-center border-r border-border py-2">{student.name}</div>
                      <div className="w-1/2 px-2 text-center py-2">{student.regno}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

