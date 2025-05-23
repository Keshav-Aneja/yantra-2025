import React from "react";
import Image from "next/image";
import TeamCard from "@/components/TeamCard";
import Link from "next/link";
import { team } from "@/constants/team";
const Team = () => {
  return (
    <div
      className="w-wrapper-sm md:w-wrapper mx-auto border-x border-border"
      id="team"
    >
      <div className="w-full grid grid-cols-2 h-32 md:h-60 ">
        <div className="w-full h-full border-r border-border flex col-span-2 md:col-span-1 flex-col justify-end">
          <div
            className={
              "p-4 md:p-8 max-md:p-4 flex gap-5 w-full relative top-6 md:top-0"
            }
          >
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
              OUR TEAM
            </div>
          </div>
        </div>
        <div className="w-full h-full"></div>
      </div>
      <div className="w-full grid grid-cols-4 gap-2 relative max-lg:grid-cols-2">
        {team.map((member, _i) => (
          <TeamCard key={_i} data={member} />
        ))}
        <Link href="/team" className="col-span-4 max-lg:col-span-2">
          <button className="w-16 h-full --see-more-btn bg-gradient-to-r to-[#76C38F] from-[#A7C12C] absolute bottom-0 -right-20 max-sm:relative max-sm:right-0 max-sm:w-full max-sm:h-12">
            <h2 className=" -rotate-90 font-space_mono text-xl md:text-2xl font-semibold text-nowrap flex items-center justify-center max-sm:rotate-0">
              SEE MORE
            </h2>
          </button>
        </Link>
      </div>
      <div className="w-full h-20 md:h-44 ">
        <div className="w-1/2 h-full border-r border-border"></div>
      </div>

      <Link href="https://vtop.vit.ac.in">
        <div
          className="w-full py-6 h-fit font-roboto_mono text-center text-5xl max-md:text-xl px-6 font-semibold
      "
          style={{
            background:
              "linear-gradient(328.79deg, #76C38F 1.55%, #60CF8C 53.61%, #A7C12C 109.03%)",
          }}
        >
          LEAVE YOUR MARK AT YANTRA
        </div>
      </Link>
      <div className="w-full h-12 md:h-20 mb-16 border-b border-border">
        <div className="w-1/2 h-full border-r border-border"></div>
      </div>
    </div>
  );
};

export default Team;
