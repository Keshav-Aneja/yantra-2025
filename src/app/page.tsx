import Image from "next/image";
import { VerticalLine } from "@/components/lines";
import React from "react";
import Events from "@/sections/events";
import { events } from "@/constants/events";
import Footer from "@/sections/footer";
import Navbar from "@/components/Navbar";
import AboutSection from "@/sections/About";
import Hero from "@/sections/Hero";
import Timeline from "@/sections/Timeline";
import SponsorCard from "@/components/sponsor-card";
import Sponsors from "@/sections/sponsors";
import { sponsors } from "@/constants/sponsors";
import PrizePool from "@/sections/PrizePool";
import Team from "@/sections/Team";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black">
      <Navbar />
      <Hero />
      <PrizePool />
      <AboutSection />
      <Timeline />
      <div className="flex flex-col justify-center items-center">
        <div
          className={
            "max-w-screen-xl w-wrapper-sm md:w-wrapper flex flex-col items-center"
          }
        >
          <Events events={events} />
          {/* <Sponsors sponsors={sponsors} /> */}
        </div>
      </div>
      <Team />
      <Footer />
    </div>
  );
}
