import React, {useEffect, useRef} from "react";
import "@/styles/events/event-card.css";
import Image from "next/image";
import EventImageContainer from "@/components/event-image";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {useInView, useAnimation, motion} from "motion/react";
import {EventData} from "@/lib/api";
import {getEventColor} from "@/constants/events";
import {NextBtn} from "@/components/carousel-helper";
import "@/styles/events/event-image.css"
import {HorizontalLine, VerticalLine} from "@/components/lines";
import { MdArrowOutward } from "react-icons/md";
import {LoaderCircleIcon} from "lucide-react";

export const ResultCardSkeleton = ({
  children,
  containerClass,
}: {
  children: React.ReactNode;
  containerClass?: string;
}) => {
  return (
    <div
      className={`w-full h-full flex flex-grow ${containerClass}`}>
      <div className={"event-card-border w-full"}>
        <div className={"event-card w-full"}>{children}</div>
      </div>
    </div>
  );
};

const ResultCardContainer = ({
  children,
  containerClass,
  id,
}: {
  children: React.ReactNode;
  containerClass?: string;
  id?: string;
}) => {
  const motionRef = useRef<HTMLDivElement | null>(null);
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
    <Link href={`/results/${id}`} className={"w-full"}>
      <motion.div
        className={`w-full h-full  ${containerClass}`}
        initial={{opacity: 0, scale: 0.9}}
        animate={controls}
        variants={{
          visible: {
            scale: 1,
            opacity: 1,
            transition: {duration: 0.5, ease: "easeOut"},
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

export interface ResultCardProps extends EventData {
  containerClass?: string,
  related?: boolean,
}

function truncateText(text: string, wordLimit: number): string {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
}

const ResultCard = (props: ResultCardProps) => {
  if (props.eventPoster === "") return;
  // console.log(props.eventName.toLowerCase() == "connectron" ? props: "")
  return (
    <ResultCardContainer containerClass={props.containerClass} id={props._id}>
      <div className={"flex justify-between items-center py-3 max-md:w-full max-md:py-2 px-4 max-md:px-2 max-md:gap-10 gap-2.5 w-full border-b-[0.5px] border-neutral-800"}>
        <div className={"flex items-center gap-1.5"}>
          <>
            {props.eventLogo.length > 0 && <Image
                src={props.eventLogo[0].trim()}
                height={24}
                width={24}
                className={"bg-black size-6 max-md:size-4"}
                alt={props.clubName}
            />}
            {props.isCollaborative && props.eventLogo.length > 1 && (
              <Image
                src={props.eventLogo[1].trim()}
                height={24}
                width={24}
                className={"bg-black size-6 max-md:size-4"}
                alt={props.clubName}
              />
            )}
          </>

          <p
            className={
              "text-[#B2B2B2] font-bold mt-0.5 text-xs md:text-sm uppercase line-clamp-1"
            }
          >
            {props.clubName}
            {props.isCollaborative && ", " + props.collaborativeWith[1]}
          </p>
        </div>
        <div>
          <p
            style={{color: getEventColor(props.eventType)}}
            className={cn(
              "font-space_mono font-semibold text-xs md:text-sm uppercase line-clamp-1",
              props.related && "hidden md:block"
            )}
          >
            {props.eventType}
          </p>
        </div>
      </div>
      <div className={"flex flex-grow flex-col max-md:items-center max-md:flex-row max-md:w-full"}>
        <div className={"max-md:w-1/5 min-w-24 relative event-image-gradient"}>
          <div
            className={
              "absolute md:pt-8 md:pr-8 md:pb-8 py-2.5 pr-2.5 w-full h-full flex flex-col place-content-around"
            }
          >
            {Array.from({length: 5}, (_, index) => (
              <HorizontalLine
                height={2}
                className={"bg-[#5C5C5C75]"}
                key={index}
              />
            ))}
          </div>
          <div
            className={
              "absolute md:pl-8 md:pr-8 md:pb-8 px-2.5 pb-2.5 w-full h-full flex justify-around"
            }
          >
            {Array.from({length: 8}, (_, index) => (
              <VerticalLine
                width={2}
                className={"bg-[#5C5C5C75]"}
                key={index}
              />
            ))}
          </div>
          <div className={"p-8 max-md:p-2.5 relative"}>
            <Image
              src={"/icons/arrow-br.svg"}
              alt={"arrow-bottom-right"}
              className={"absolute top-1 left-1 max-md:size-1 md:top-4 md:left-4"}
              width={4.6}
              height={4.6}
            />
            <Image
              src={"/icons/arrow-bl.svg"}
              alt={"arrow-bottom-left"}
              className={"absolute top-1 right-1 max-md:size-1 md:top-4 md:right-4"}
              width={4.6}
              height={4.6}
            />
            <Image
              src={"/icons/arrow-tr.svg"}
              alt={"arrow-top-right"}
              className={"absolute bottom-1 left-1 max-md:size-1 md:bottom-4 md:left-4"}
              width={4.6}
              height={4.6}
            />
            <Image
              src={"/icons/arrow-tl.svg"}
              alt={"arrow-top-left"}
              className={"absolute bottom-1 right-1 max-md:size-1 md:bottom-4 md:right-4"}
              width={4.6}
              height={4.6}
            />
            {props.eventPoster && <Image
                src={props.eventPoster.trim()}
                alt={props.eventName}
                width={800}
                height={400}
                loading={"eager"}
              // bg-black (for event posters with no bg)
                className={"shadow-2xl backdrop-blur-2xl w-full h-full aspect-video object-cover flex-shrink"}
            />}
          </div>
        </div>
        <div
          className={cn(
            "max-md:w-4/5 flex items-center justify-between gap-5 p-4 py-4 text-white",
            props.related && "p-2 md:p-4 py-4 md:py-6"
          )}
        >
          <p
            className={cn(
              "font-roboto text-base md:text-lg font-medium uppercase line-clamp-1 w-fit",
              props.related && "text-sm md:text-lg"
            )}
          >
            {props.eventName}
          </p>
          <div className={"w-6 flex items-center justify-center pt-1"}>
            <NextBtn className={"-rotate-45 size-5"} />
            {/*<MdArrowOutward className={"size-6 text-white"} />*/}
          </div>
          {/*<NextBtn className={"-rotate-45 min-h-6 h-6 w-6"}/>*/}
          {/*<p*/}
          {/*  className={cn(*/}
          {/*    "font-space_mono text-xs md:text-sm text-white/70 line-clamp-5 ",*/}
          {/*    props.related && "text-[0.6rem] md:text-sm"*/}
          {/*  )}*/}
          {/*>*/}
          {/*  {truncateText(props.eventDescription, 23)}*/}
          {/*</p>*/}
        </div>
      </div>
    </ResultCardContainer>
  );
};
export default ResultCard;
