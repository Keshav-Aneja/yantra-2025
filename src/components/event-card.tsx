import React, { useEffect, useRef } from "react";
import "@/styles/events/event-card.css";
import Image from "next/image";
import EventImageContainer from "@/components/event-image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useInView, useAnimation, motion } from "motion/react";
import { EventData } from "@/lib/api";
import { getEventColor } from "@/constants/events";

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
  id?: string;
}) => {
  const motionRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(motionRef, {
    once: false,
  });

  useEffect(() => {
    (async () => {
      if (inView) {
        await controls.start("visible");
      }
    })();
  }, [inView, controls]);

  return (
    <Link href={`/events/${id}`}>
      <motion.div
        className={`w-fit h-full  ${containerClass}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={controls}
        variants={{
          visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
          },
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

export interface EventCardProps extends EventData {
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

const EventCard = (props: EventCardProps) => {
  return (
    <EventCardContainer containerClass={props.containerClass} id={props._id}>
      <div className={"flex justify-between items-center py-3 px-4 gap-2"}>
        <div className={"flex items-center gap-1.5"}>
          {props.eventLogo[0] !== "" && <Image
            src={props.eventLogo[0].trim()}
            height={24}
            width={24}
            className={"bg-black size-6"}
            alt={props.clubName}
          />}
          <p
            className={
              "text-[#B2B2B2] font-bold mt-0.5 text-xs md:text-sm uppercase line-clamp-1"
            }
          >
            {props.clubName}
          </p>
        </div>
        <div>
          <p
            style={{ color: getEventColor(props.eventType) }}
            className={cn(
              "font-space_mono font-semibold text-xs md:text-sm uppercase line-clamp-1",
              props.related && "hidden md:block"
            )}
          >
            {props.eventType}
          </p>
        </div>
      </div>

      <EventImageContainer>
        {props.eventPoster !== "" && <Image
          src={props.eventPoster.trim()}
          alt={props.eventName}
          width={800}
          height={400}
          // bg-black (for event posters with no bg)
          className={"shadow-2xl backdrop-blur-2xl w-full h-full object-cover"}
        />}
      </EventImageContainer>

      <div
        className={cn(
          "flex flex-col p-4 py-6 space-y-2 text-white",
          props.related && "p-2 md:p-4 py-4 md:py-6"
        )}
      >
        <p
          className={cn(
            "font-roboto text-base md:text-lg font-medium uppercase line-clamp-1",
            props.related && "text-sm md:text-lg"
          )}
        >
          {props.eventName}
        </p>
        <p
          className={cn(
            "font-space_mono text-xs md:text-sm text-white/70 line-clamp-5 ",
            props.related && "text-[0.6rem] md:text-sm"
          )}
        >
          {truncateText(props.eventDescription, 23)}
        </p>
      </div>
    </EventCardContainer>
  );
};
export default EventCard;
