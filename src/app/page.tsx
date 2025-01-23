"use client"
import Image from "next/image";
import { VerticalLine } from "@/components/lines";
import React, {useEffect, useState} from "react";
import Events from "@/sections/events";
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
import ScrollProgress from "@/components/ui/scroll-progress";
import {EventData, fetchEvents} from "@/lib/api";
import {toast} from "sonner";

export default function Home() {
    const [events, setEvents] = useState<EventData[]>([]);

    useEffect(() => {
        (async ()=>{
            const res = await fetchEvents({
                params: {
                    limit: 4,
                    page: 1
                }
            });
            if (!res) return;
            if (res.status === "error") {
                //TOAST
                toast.error("Something went wrong. Could not fetch events.");
                return;
            }
            // console.log(res);
            setEvents(res.data || []);
        })()
    }, []);


  return (
      <div className="min-h-screen w-full overflow-x-hidden bg-black">
          <Navbar/>
          <ScrollProgress>
              <Hero/>
              <PrizePool/>
              <AboutSection/>
              <Timeline/>
              <div className="flex flex-col justify-center items-center">
                  <div
                      className={
                          " w-wrapper-sm md:w-wrapper flex flex-col items-center"
                      }
                  >
                      <Events events={events}/>
                      {/* <Sponsors sponsors={sponsors} /> */}
                  </div>
              </div>
              <Team/>
          </ScrollProgress>
          <Footer/>
      </div>
  );
}
