"use client";
import "@/styles/events/events-page.css";

import React, { useEffect, useState } from "react";
import OurEvents from "@/app/events/_components/our-events";
import { events, eventTypes } from "@/constants/events";
import EventCard, { EventCardProps } from "@/components/event-card";
import { Search } from "lucide-react";
import useDebounce from "@/hooks/use-debounce";
import usePagination from "@/hooks/use-pagination";
import { NextBtn, PrevBtn } from "@/components/carousel-helper";
import { VerticalLine } from "@/components/lines";
import Link from "next/link";

const EventsPage = () => {
  const [data, setData] = useState<EventCardProps[]>(events);
  const [search, setSearch] = useState<string>("");
  const debouncedSearchQuery = useDebounce(search);
  const [selectedEventType, setSelectedEventType] = useState("ALL");
  const {
    goToPrevPage,
    goToNextPage,
    jumpToPage,
    pageData,
    currentPage,
    maxPages,
  } = usePagination(data, 9);
  const [pageRange, setPageRange] = useState(
    getPageRange(currentPage, maxPages)
  );

  useEffect(() => {
    setData(filterEvents(debouncedSearchQuery, events, selectedEventType));
  }, [selectedEventType, debouncedSearchQuery]);

  useEffect(() => {
    setPageRange(getPageRange(currentPage, maxPages));
  }, [currentPage, maxPages]);

  const onSelectEventType = (eventType: string) => {
    jumpToPage(1);
    setSelectedEventType(eventType);
  };

  return (
    <div
      className={
        "bg-custom-gradient w-full flex flex-col justify-center items-center "
      }
    >
      <div
        className={
          "w-wrapper max-md:w-wrapper-md flex items-center max-md:justify-center border border-border p-8"
        }
      >
        <OurEvents className={"w-80 h-24 max-md:w-60 max-md:h-20"} />
      </div>
      <div className={"max-md:w-wrapper-md w-wrapper relative"}>
        <div className="border border-white max-lg:border-b-0 lg:border-r-0 px-4 pr-8 py-3 text-white max-md:text-sm lg:absolute lg:top-0 lg:right-full font-space_mono text-xs">
          CATEGORIES
        </div>
        <EventTypeFilter
          selectedEventType={selectedEventType}
          onSelectEventType={onSelectEventType}
        />
        <SearchEvents onInputChange={(e) => setSearch(e.target.value)} />
      </div>
      <div
        className={
          "w-wrapper max-md:w-wrapper-md border border-border relative"
        }
      >
        <div className={"flex justify-between h-full w-full absolute"}>
          <VerticalLine className={"invisible"} />
          <VerticalLine className={"max-md:hidden"} />
          <VerticalLine className={"max-sm:hidden"} />
          <VerticalLine className={"invisible"} />
        </div>
        <Events events={pageData} />
        <div className={"flex justify-end mb-12"}>
          <div
            className={
              "grid grid-cols-5 w-fit py-4 px-4 gap-2 text-white select-none z-50"
            }
          >
            <div
              className={`flex justify-center items-center cursor-pointer ${
                currentPage == 1 && "invisible"
              }`}
            >
              <PrevBtn className={"size-3"} onClick={goToPrevPage} />
            </div>
            {pageRange.map((page) => (
              <Link
                href="#top"
                key={page}
                className={`
                               border  border-border size-6 text-sm cursor-pointer flex justify-center items-center font-space_mono
                               ${
                                 currentPage === page &&
                                 "bg-white text-background border-white"
                               }
                            `}
                onClick={() => jumpToPage(page)}
              >
                {page}
              </Link>
            ))}
            <div
              className={`flex justify-center items-center cursor-pointer ${
                currentPage == maxPages &&
                pageRange[pageRange.length - 1] == maxPages &&
                "invisible"
              }`}
            >
              <NextBtn className={"size-3"} onClick={goToNextPage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const getPageRange = (currentPage: number, totalPages: number) => {
  const start = Math.max(1, currentPage - 1);
  const end = Math.min(start + 2, totalPages);
  const range: number[] = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
};

const lowerContains = (data: string, query: string) => {
  return data.toLowerCase().includes(query.toLowerCase());
};

const lowerStartsWith = (data: string, query: string) => {
  return data.toLowerCase().startsWith(query.toLowerCase());
};

const filterEvents = (
  query: string | null,
  data: EventCardProps[],
  eventType: string = "All"
) => {
  let filteredData;
  if (eventType === "ALL") filteredData = data;
  else
    filteredData = events.filter(
      (eventCard) => eventCard.event.type === eventType
    );
  if (query === null || "") return filteredData;
  return filteredData.filter(
    (entry) =>
      lowerStartsWith(entry.event.name, query) ||
      lowerStartsWith(entry.event.type, query) ||
      lowerContains(entry.event.description, query) ||
      lowerStartsWith(entry.organisation.name, query)
  );
};

interface EventTypeFilter {
  selectedEventType: string;
  onSelectEventType: (eventType: string) => void;
}

const EventTypeFilter = ({
  selectedEventType,
  onSelectEventType,
}: EventTypeFilter) => (
  <div
    id="top"
    className={
      "flex gap-3 md:gap-4 flex-wrap px-3 md:px-4 py-3 md:py-6 border border-white"
    }
  >
    {eventTypes.map((eventType, index) => (
      <div
        key={index}
        className={`border p-1 px-2 text-xs font-space_mono cursor-pointer ${
          eventType === selectedEventType
            ? "border-white text-gradient font-semibold"
            : "border-border brightness-125 text-[#4B4B4B] hover:border-neutral-600 text-neutral-500"
        }`}
        onClick={() => onSelectEventType(eventType)}
      >
        {eventType}
      </div>
    ))}
  </div>
);

const Events = ({ events }: { events: EventCardProps[] }) => (
  <div
    className={
      "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-10 my-10 justify-items-center content-start place-content-start"
    }
  >
    {events.map(({ organisation, event }, index) => (
      <EventCard organisation={organisation} event={event} key={index} />
    ))}
  </div>
);

const SearchEvents = ({
  onInputChange,
}: {
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
}) => (
  <div
    className={
      "flex items-center border text-white border-white p-3 md:p-4 gap-3 md:gap-4"
    }
  >
    <Search className={"size-5 max-md:size-4"} />
    <input
      className={
        "bg-inherit placeholder:text-white w-full outline-none tracking-wide max-md:text-sm"
      }
      placeholder={"SEARCH"}
      onChange={onInputChange}
    />
  </div>
);

export default EventsPage;
