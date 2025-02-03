import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
interface Props {
  className: string;
  image: string;
  title: string;
  description: string;
}
const TimelineHover = ({ className, image, title, description }: Props) => {
  return (
    <div
      className={cn("w-2/3 md:w-[30%] absolute z-[1000]  bg-white ", className)}
      style={{
        clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0% 100%, 0 10%)",
      }}
    >
      <span className="absolute bottom-0 p-2 md:p-4 left-0  z-50">
        <h1 className="text-white text-xs md:text-xl font-semibold font-roboto uppercase">
          {title}
        </h1>
        <p className="text-[0.6rem] leading-3  md:text-xs text-white ">
          {description}
        </p>
      </span>
      <div className="w-full absolute bottom-0 left-0 h-full bg-gradient-to-t from-black to-transparent z-10"></div>
      <Image
        src={image}
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
