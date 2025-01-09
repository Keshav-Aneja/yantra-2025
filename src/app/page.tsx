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
import PrizePool from "@/sections/PrizePool";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-roboto">
      <Navbar />
      <Hero />
      <PrizePool/>
      <AboutSection />
      <Timeline/>
      <div className="w-full flex justify-center items-center mx-auto">
        <Events events={events} />
      </div>
      <Footer />
    </div>
  );
}
