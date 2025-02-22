"use client";

import { useParams } from "next/navigation";
import {getEventColor} from "@/constants/events";
import Image from "next/image";
import EventImageContainer from "@/components/event-image";
import { VerticalLine } from "@/components/lines";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {EventData, fetchEvent} from "@/lib/api";
import {toast} from "sonner";
import {LoaderCircleIcon} from "lucide-react";
import {centralHackResult, eventResults, Member, TeamResult} from "@/constants/results";

function parseAndFormatDate(dateString: string) {
  const [datePart] = dateString.split(" ");

  const [day, month, year] = datePart.split("/").map(Number);
  const dateObj = new Date(year, month - 1, day);

  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(dateObj);
}

function parseTime(dateString: string){
  return dateString.split("     ")[1];
}

export default function EventResultsPage() {
  const { id } = useParams<{ id: string }>();

  const eventResult = centralHackResult;

  return (
    <div className="min-h-screen">
      <div className="w-wrapper-sm md:w-wrapper mx-auto font-roboto border border-[#313135] border-b max-md:mb-2.5">
        <div className="grid grid-cols-2 grid-rows-1">
          <div className="border border-[#313135] p-4"></div>
          <div className="border border-[#313135] p-4"></div>
        </div>

        <div className="border border-[#313135] p-1 py-4 md:p-4">
          <h2 className="text-6xl max-md:text-2xl font-medium text-white font-armstrong px-6 py-3">
            {"YANTRA CENTRAL HACK"}
          </h2>
          <h3
            style={{ color: getEventColor("HACKATHON") }}
            className={`text-base max-md:text-xs relative -top-5 md:-top-3 font-bold font-space_mono px-6`}
          >
            {"HACKATHON"}
          </h3>
        </div>

        <div className="border border-[#313135] p-2 py-3 md:p-4 text-white font-space_mono">
          <p className={`text-lg max-md:text-sm font-semibold px-6`}>
            EVENT DATE:{" "}
            <span className="font-normal text-base max-md:text-xs">
              {"7 February 2025"}
            </span>
          </p>
        </div>

        <div className="border border-[#313135] p-2 py-3 md:p-4 text-white">
          <p className={`text-lg max-md:text-sm font-semibold px-6`}>
            EVENT TIME:{" "}
            <span className="font-normal text-base max-md:text-xs">
              {"06:00 PM"}
            </span>
          </p>
        </div>

        <div className="border border-[#313135] p-2 py-3 md:p-4 text-white">
          <p className={`text-lg max-md:text-sm font-semibold px-6`}>
            VENUE:{" "}
            <span className="font-normal text-base max-md:text-xs">
              {"Anna Auditorium"}
            </span>
          </p>
        </div>

        <div className="border border-[#313135] p-2 py-3 md:p-4 text-white">
          <p className={`text-lg max-md:text-sm font-semibold px-6 flex flex-wrap gap-2`}>
            BY:{" "}
            <span className="font-normal text-base max-md:text-xs">
                Office Of Students' Welfare
            </span>
          </p>
        </div>

        <div className={"relative flex flex-col items-center pb-10"}>
          <div className="p-4 max-md:p-2 flex items-center justify-center w-full">
            <EventImageContainer removeBg>
              <Image
                src={"/posters/central.webp"}
                width={600}
                height={600}
                priority
                alt=""
                className={"object-fill w-full h-full"}
              />
            </EventImageContainer>
          </div>
          <div className="w-full text-white">
            {Object.entries(eventResult.result).map(([position, teams], index)=>(
              <div className="flex flex-col lg:flex-row border border-neutral-600" key={position}>
                <div className="lg:w-1/3 w-full flex justify-center items-center border border-border">
                  <p className="text-lg max-md:text-base py-2 text-green-400 text-center">{position}</p>
                </div>
                {Array.isArray(teams) ? <div className={"lg:w-2/3 w-full flex flex-col"}>
                    {teams.map((team: TeamResult, index: number)=>(
                      <div className="w-full flex flex-col max-md:border-t-2 max-md:border-neutral-600" key={index}>
                        <div className={"px-2 py-2 w-full text-center text-sm font-semibold"}>{team.team}</div>
                        {team.members.map((student) => (
                          <div className="flex flex-row border border-border max-md:text-sm" key={student.name}>
                            <div className="w-1/2 px-2 text-center border-r border-border py-2">{student.name}</div>
                            <div className="w-1/2 px-2 text-center py-2">{student.regno}</div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div> :
                  <div className="lg:w-2/3 w-full flex flex-col max-md:border-t-2 max-md:border-neutral-600">
                    <div className={"px-2 py-2 w-full text-center text-sm font-semibold"}>{teams.team}</div>
                    {teams.members.map((student: Member) => (
                      <div className="flex flex-row border border-border max-md:text-sm" key={student.name}>
                        <div className="w-1/2 px-2 text-center border-r border-border py-2">{student.name}</div>
                        <div className="w-1/2 px-2 text-center py-2">{student.regno}</div>
                      </div>
                    ))}
                  </div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

