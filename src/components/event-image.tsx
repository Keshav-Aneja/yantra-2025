import React from "react";
import "@/styles/events/event-image.css";
import { HorizontalLine, VerticalLine } from "@/components/lines";
import Image from "next/image";

interface EventImageContainerProps {
  children: React.ReactNode;
  removeBg?: boolean;
}

export const EventImageContainer = ({
                                      children,
                                      removeBg,
                                    }: EventImageContainerProps) => {
  return (
    <div className={`${!removeBg && "event-image-gradient"} relative`}>
      {" "}
      {/* Gradient */}
      {!removeBg && (
        <>
          {" "}
          <div
            className={
              "absolute pt-8 pr-8 pb-8 w-full h-full flex flex-col place-content-around"
            }
          >
            {Array.from({ length: 5 }, (_, index) => (
              <HorizontalLine
                height={2}
                className={"bg-[#5C5C5C75]"}
                key={index}
              />
            ))}
          </div>
          <div
            className={
              "absolute pl-10 pr-8 pb-8 w-full h-full flex justify-around"
            }
          >
            {Array.from({ length: 8 }, (_, index) => (
              <VerticalLine
                width={2}
                className={"bg-[#5C5C5C75]"}
                key={index}
              />
            ))}
          </div>
        </>
      )}
      <Image
        src={"/icons/arrow-br.svg"}
        alt={"arrow-bottom-right"}
        className={"absolute top-5 left-5"}
        width={4.6}
        height={4.6}
      />
      <Image
        src={"/icons/arrow-bl.svg"}
        alt={"arrow-bottom-left"}
        className={"absolute top-5 right-5"}
        width={4.6}
        height={4.6}
      />
      <Image
        src={"/icons/arrow-tr.svg"}
        alt={"arrow-top-right"}
        className={"absolute bottom-5 left-5"}
        width={4.6}
        height={4.6}
      />
      <Image
        src={"/icons/arrow-tl.svg"}
        alt={"arrow-top-left"}
        className={"absolute bottom-5 right-5"}
        width={4.6}
        height={4.6}
      />
      <div
        className={
          "relative pt-8 px-8 pb-8 z-50 w-full aspect-[16/10] overflow-hidden"
        }
      >
        {children}
      </div>
    </div>
  );
};

export default EventImageContainer;