"use client";

import { useState } from "react";
import EventCard, { EventCardProps } from "@/components/event-card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import usePrevNextButtons, {
  PrevBtn,
  NextBtn,
} from "@/components/carousel-helper";
import Link from "next/link";

interface EventsProps {
  events: EventCardProps[];
  related?: boolean;
}

const Events = ({ events, related }: EventsProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const { prevBtnDisabled, nextBtnDisabled, onNextBtnClick, onPrevBtnClick } =
    usePrevNextButtons(api);

  return (
    <section className={"h-full w-full"}>
      <div className="w-full grid grid-cols-2 h-32 md:h-60 border-x border-border">
        <div className="w-full h-full border-r border-border flex flex-col justify-end col-span-2 md:col-span-1">
          <div className={"p-4 md:p-8 pt-16 md:pb-16 flex gap-5"}>
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
              {related ? "RELATED EVENTS" : "OUR EVENTS"}
            </div>
          </div>
        </div>
        <div className="w-full h-full"></div>
      </div>
      <div className={"w-full border border-border p-0"}>
        <div
          className={
            "sm:grid grid-cols-2 lg:grid-cols-4 max-sm:flex max-sm:flex-col max-sm:gap-2 relative p-4 md:p-0"
          }
        >
          {events.slice(0, 4).map((eventCardProps, index) => (
            <EventCard key={index} {...eventCardProps} />
          ))}
          <Link href="/events">
            <button className="w-16 h-full --see-more-btn bg-gradient-to-r to-[#76C38F] from-[#A7C12C] absolute bottom-0 -right-20 max-sm:relative max-sm:right-0 max-sm:w-full max-sm:h-12">
              <h2 className=" -rotate-90 font-space_mono text-xl md:text-2xl font-semibold text-nowrap flex items-center justify-center max-sm:rotate-0">
                SEE MORE
              </h2>
            </button>
          </Link>
        </div>
      </div>
      {/*<Carousel
        opts={{
          slidesToScroll: 1,
          watchDrag: false,
          align: "start",
          startIndex: 0,
          duration: 40,
        }}
        setApi={setApi}
        className={"w-full -mt-6"}
      >
        <CarouselContent className={"ml-0"}>
          {events.map((eventCardProps, index) => (
            <CarouselItem key={index} className={"basis-1/4 px-0"}>
              <EventCard {...eventCardProps} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <Link href="/events">
          <button className="w-16 h-full --see-more-btn bg-gradient-to-r to-[#76C38F] from-[#A7C12C] absolute bottom-0 -right-20">
            <h2 className=" -rotate-90 font-space_mono text-2xl font-semibold text-nowrap flex items-center justify-center">
              SEE MORE
            </h2>
          </button>
        </Link>
      </Carousel>{" "}*/}
      {/* <div className="w-full grid grid-cols-2 h-60 border-x border-border">
        <div className="w-full h-full border-r border-border flex flex-col justify-end">
          {!related && (
            <div className={"p-8 flex gap-5"}>
              <Image
                src={"/icons/arrow-right-solid.svg"}
                height={11}
                width={8}
                alt={"arrow-right"}
              />
              <div
                className={"font-roboto_mono text-white text-4xl font-medium"}
              >
                SPONSORS
              </div>
            </div>
          )}
        </div>
        <div className="w-full h-full">
        </div>
      </div> */}
    </section>
  );
};
export default Events;
