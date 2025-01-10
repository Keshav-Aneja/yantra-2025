"use client"

import {useState} from "react";
import EventCard, { EventCardProps } from "@/components/event-card";
import Image from "next/image";
import {Carousel, CarouselContent, CarouselItem, type CarouselApi} from "@/components/ui/carousel";
import usePrevNextButtons, {PrevBtn, NextBtn} from "@/components/carousel-helper";

interface EventsProps {
  events: EventCardProps[];
}

const Events = ({ events }: EventsProps) => {
    const [api, setApi] = useState<CarouselApi>();
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onNextBtnClick,
        onPrevBtnClick,
    } = usePrevNextButtons(api);

  return (
    <section className={"h-full my-12"}>
      <div className={"m-5 flex gap-5"}>
        <Image
          src={"/icons/arrow-right-solid.svg"}
          height={11}
          width={8}
          alt={"arrow-right"}
        />
        <div className={"font-roboto_mono text-white text-4xl font-semibold"}>
          OUR EVENTS
        </div>
      </div>
      <Carousel opts={{
          slidesToScroll: 1,
          watchDrag: false,
          align: "start",
          startIndex: 0,
          duration: 40,

      }}
        setApi={setApi}
        className={""}
      >
          <CarouselContent className={"ml-0"}>
              {events.map((eventCardProps, index) => (
                  <CarouselItem key={index} className={"basis-1/4 px-0"}><EventCard {...eventCardProps} /></CarouselItem>
              ))}
          </CarouselContent>
          <div className={"flex justify-end gap-x-2.5 mr-5 my-5"}>
            <PrevBtn className={'text-white disabled:text-[#353539] transition-all duration-150 delay-100 size-7'} onClick={onPrevBtnClick} disabled={prevBtnDisabled} />
            <NextBtn className={'text-white disabled:text-[#353539] transition-all duration-150 delay-100 size-7'} onClick={onNextBtnClick} disabled={nextBtnDisabled} />
          </div>
      </Carousel>
    </section>
  );
};
export default Events;
