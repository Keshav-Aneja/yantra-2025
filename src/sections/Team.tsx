import React from "react";
import Image from "next/image";
import TeamCard from "@/components/TeamCard";
const Team = () => {
  return (
    <div className="w-wrapper mx-auto border-x border-border" id="team">
      <div className="w-full grid grid-cols-2 h-60 ">
        <div className="w-full h-full border-r border-border flex flex-col justify-end">
          <div className={"p-8 flex gap-5"}>
            <Image
              src={"/icons/arrow-right-solid.svg"}
              height={11}
              width={8}
              alt={"arrow-right"}
            />
            <div className={"font-roboto_mono text-white text-4xl font-medium"}>
              OUR TEAM
            </div>
          </div>
        </div>
        <div className="w-full h-full"></div>
      </div>
      <div className="w-full grid grid-cols-4 gap-2 relative">
        {[1, 2, 3, 4].map((member, _i) => (
          <TeamCard key={_i} />
        ))}
        <button className="w-16 h-full --see-more-btn bg-gradient-to-r to-[#76C38F] from-[#A7C12C] absolute bottom-0 -right-20">
          <h2 className=" -rotate-90 font-space_mono text-2xl font-semibold text-nowrap flex items-center justify-center">
            SEE MORE
          </h2>
        </button>
      </div>
      <div className="w-full h-44 ">
        <div className="w-1/2 h-full border-r border-border"></div>
      </div>
      <div
        className="w-full py-6 h-fit font-roboto_mono text-center text-5xl font-semibold 
      "
        style={{
          background:
            "linear-gradient(328.79deg, #76C38F 1.55%, #60CF8C 53.61%, #A7C12C 109.03%)",
        }}
      >
        LEAVE YOUR MARK AT YANTRA
      </div>
      <div className="w-full h-20 mb-16 border-b border-border">
        <div className="w-1/2 h-full border-r border-border"></div>
      </div>
    </div>
  );
};

export default Team;
