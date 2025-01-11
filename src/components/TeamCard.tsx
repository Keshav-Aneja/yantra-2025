import React from "react";
import Image from "next/image";
const TeamCard = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center gap-4 p-3">
      <span className="flex items-center gap-3 w-full">
        <Image
          src="/icons/arrow-right-solid.svg"
          alt=""
          width={20}
          height={20}
          className=" w-[8px] invert h-auto"
        />{" "}
        <h2 className="font-space_mono uppercase">G Vishwanathan</h2>
      </span>
      <div className="w-[80%] aspect-[0.9] overflow-hidden">
        <Image
          src="/images/dummy-img.png"
          width={400}
          height={300}
          alt=""
          className="w-full object-cover h-full"
        />
      </div>
      <span className="w-full font-space_mono text-sm">PATRON</span>
    </div>
  );
};

export default TeamCard;
