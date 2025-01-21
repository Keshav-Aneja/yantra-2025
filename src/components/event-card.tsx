import React, {useEffect, useRef} from "react";
import "@/styles/events/event-card.css";
import Image from "next/image";
import EventImageContainer from "@/components/event-image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {useInView, useAnimation, motion} from "motion/react";

interface Organisation {
  logo: string;
  name: string;
}

interface Event {
  type: string;
  typeColor: string;
  image: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
}

const EventCardContainer = ({
  children,
  containerClass,
  id,
}: {
  children: React.ReactNode;
  containerClass?: string;
  id?: number;
}) => {

  const motionRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(motionRef, {
    once: true
  });

  useEffect(()=>{
    (async ()=>{
      if (inView){
        await controls.start("visible")
      }
    })()
  }, [inView, controls])

  return (
    <Link href={`/events/${id}`}>
      <motion.div
          className={`w-fit h-fit  ${containerClass}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls}
          variants={{
            visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
          }}
          ref={motionRef}
      >
        <div className={"event-card-border"}>
          <div className={"event-card"}>{children}</div>
        </div>
      </motion.div>
    </Link>
  );
};

export interface EventCardProps {
  id?: number;
  organisation: Organisation;
  event: Event;
  containerClass?: string;
  related?: boolean;
}

function truncateText(text: string, wordLimit: number): string {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
}

const EventCard = ({
  organisation,
  event,
  containerClass,
  id,
  related,
}: EventCardProps) => {
  return (
    <EventCardContainer containerClass={containerClass} id={id}>
      <div className={"flex justify-between items-center py-3 px-4"}>
        <div className={"flex items-center gap-1"}>
          <Image
            src={organisation.logo}
            height={24}
            width={24}
            className={"bg-black size-6"}
            alt={organisation.name}
          />
          <p
            className={
              "text-[#B2B2B2] font-bold mt-0.5 text-xs md:text-sm uppercase line-clamp-1"
            }
          >
            {organisation.name}
          </p>
        </div>
        <div>
          <p
            style={{ color: event.typeColor }}
            className={cn(
              "font-space_mono font-semibold text-xs md:text-sm uppercase line-clamp-1",
              related && "hidden md:block"
            )}
          >
            {event.type}
          </p>
        </div>
      </div>

      <div>
        <EventImageContainer>
          <Image
            src={event.image}
            alt={event.name}
            width={286}
            height={172}
            className={"size-full shadow-2xl"}
          />
        </EventImageContainer>
      </div>

      <div
        className={cn(
          "flex flex-col p-4 py-6 space-y-2 text-white",
          related && "p-2 md:p-4 py-4 md:py-6"
        )}
      >
        <p
          className={cn(
            "font-roboto text-base md:text-lg font-medium uppercase line-clamp-1",
            related && "text-sm md:text-lg"
          )}
        >
          {event.name}
        </p>
        <p
          className={cn(
            "font-space_mono text-xs md:text-sm text-white/70 line-clamp-5 ",
            related && "text-[0.6rem] md:text-sm"
          )}
        >
          {truncateText(event.description, 23)}
        </p>
      </div>
    </EventCardContainer>
  );
};
export default EventCard;
