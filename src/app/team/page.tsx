"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/sections/footer";
import { useState } from "react";
import Image from "next/image";
import { faqs } from "@/constants/faq";
import { teamPageData } from "@/constants/team";
import TeamCard from "@/components/TeamCard";
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black bg-custom-gradient">
      <Navbar />
      <div className="w-wrapper-sm md:w-wrapper mx-auto font-roboto border border-[#313135] border-b-0">
        <div className="grid grid-cols-2 grid-rows-3">
          <div className="border border-[#313135] p-4"></div>
          <div className="border border-[#313135] p-4"></div>
          <div className="border border-[#313135] p-4 col-span-2 md:col-span-1 row-span-2 h-28 md:h-48">
            <Image
              src="/images/team-heading.webp"
              alt=""
              width={400}
              height={300}
              className="w-48 md:w-72 h-auto "
            />
            {/* <h2 className="text-4xl font-bold text-white px-6 py-3">FAQs</h2> */}
          </div>
          <div className="border border-[#313135] p-4 row-span-2 hidden md:block"></div>
        </div>

        <div className="w-full border-x border-border">
          {teamPageData.map((group, index) => (
            <div className="flex flex-col gap-6 mt-10" key={index}>
              <div className={"p-4 md:p-8 pb-1 md:pb-3 flex gap-5"}>
                <Image
                  src={"/icons/arrow-right-solid.svg"}
                  height={11}
                  width={8}
                  alt={"arrow-right"}
                />
                <div
                  className={
                    "font-roboto_mono text-white text-xl md:text-3xl font-medium"
                  }
                >
                  {group.title}
                </div>
              </div>
              <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-[2px]">
                {group.people.map((person, _i) => (
                  <TeamCard data={person} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 ">
          <div className="border border-[#313135] p-12"></div>
          <div className="border border-[#313135] p-12"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
