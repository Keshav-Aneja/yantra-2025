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
      <div className="w-full grid grid-cols-2 h-60 border-x border-border">
        <div className="w-full h-full border-r border-border flex flex-col justify-end">
          <div className={"p-8 pb-16 flex gap-5"}>
            <Image
              src={"/icons/arrow-right-solid.svg"}
              height={11}
              width={8}
              alt={"arrow-right"}
            />
            <div className={"font-roboto_mono text-white text-4xl font-medium"}>
              {related ? "RELATED EVENTS" : "OUR EVENTS"}
            </div>
          </div>
        </div>
        <div className="w-full h-full"></div>
      </div>
      <Carousel
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
        <div className="w-full grid grid-cols-2 h-60 border-x border-border">
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
            <div className={"flex justify-end gap-x-2.5 mr-5 my-5"}>
              <PrevBtn
                className={
                  "text-white disabled:text-[#353539] transition-all duration-150 delay-100 size-7"
                }
                onClick={onPrevBtnClick}
                disabled={prevBtnDisabled}
              />
              <NextBtn
                className={
                  "text-white disabled:text-[#353539] transition-all duration-150 delay-100 size-7"
                }
                onClick={onNextBtnClick}
                disabled={nextBtnDisabled}
              />
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
};
export default Events;
