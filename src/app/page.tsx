import Image from "next/image";
import {VerticalLine} from "@/components/lines";
import React from "react";
import Events from "@/sections/events";
import {events} from "@/constants/events";
import Footer from "@/sections/footer";
import Navbar from "@/components/Navbar";
import AboutSection from "@/sections/About";
import Hero from "@/sections/Hero";

export default function Home() {
    return (
  <div className={'minh-screen flex flex-col items-center bg-background'}>
          <Navbar />
      <Hero/>
      <AboutSection />
    <div className={'absolute w-full h-full max-w-screen-xl flex justify-between'}>
        <VerticalLine />
        <VerticalLine />
        <VerticalLine />
    </div>
    <div className={'w-full max-w-screen-xl min-h-screen relative'}>
        <Events events={events} />
    </div>
    <Footer />
  </div>
  );
}
