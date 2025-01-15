import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
interface Props {
  className: string;
}
const TimelineHover = ({ className }: Props) => {
  return (
    <div
      className={cn("w-1/2 md:w-[25%] absolute z-[1000]  bg-white ", className)}
      style={{
        clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0% 100%, 0 10%)",
      }}
    >
      <span className="absolute bottom-2 md:bottom-4 left-2 md:left-4  z-50">
        {" "}
        <h1 className="text-black text-xs md:text-xl font-semibold font-roboto">
          WEEK INAUGURATION
        </h1>
        <p className="text-[0.6rem] md:text-xs ">
          Dolor esse do fugiat culpa laborum occaecat excepteur ipsum.{" "}
        </p>
      </span>
      <Image
        src={"/images/sample.png"}
        alt=""
        width={600}
        height={500}
        className="w-full h-full object-cover"
      />
      <Image
        src={"/images/gradient-timeline.png"}
        alt=""
        width={600}
        height={500}
        className="w-full h-full object-cover absolute bottom-0 left-0"
      />
    </div>
  );
};

export default TimelineHover;
