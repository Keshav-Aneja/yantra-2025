"use client";
import "@/styles/events/events-page.css";

import React, {useEffect, useRef, useState} from "react";
import OurEvents from "@/app/events/_components/our-events";
import { eventTypes } from "@/constants/events";
import EventCard from "@/components/event-card";
import { Search } from "lucide-react";
import useDebounce from "@/hooks/use-debounce";
import usePagination from "@/hooks/use-pagination";
import { NextBtn, PrevBtn } from "@/components/carousel-helper";
import { VerticalLine } from "@/components/lines";
import Link from "next/link";
import {EventData, fetchEvents, FetchEventsParams, Pagination} from "@/lib/api";
import {toast} from "sonner";

const EventsPage = () => {
  const [data, setData] = useState<EventData[]>([]);
  const [search, setSearch] = useState<string>("");
  const debouncedSearchQuery = useDebounce(search);
  const [selectedEventType, setSelectedEventType] = useState("ALL");
  const abortController = useRef<AbortController | null>(null);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    totalPages: 1,
    limit: 9,
    total: 9,
  })

  const [pageRange, setPageRange] = useState(
    getPageRange(1, 1)
  );

  const goToNextPage = () => {
    setPagination(prev => ({
      ...prev,
      page: Math.min(prev.page + 1, prev.totalPages),
    }))
  }

  const goToPrevPage = () => {
    setPagination(prev => ({
      ...prev,
      page: Math.max(prev.page - 1, 1),
    }))
  }

  const jumpToPage = (page: number) => {
    setPagination(prev => ({
      ...prev,
      page: Math.max(1, Math.min(page, prev.totalPages)),
    }))
  }

  const fetchEventsData = async ({
      params, signal
  }: {
    params?: FetchEventsParams,
    signal?: AbortSignal,
  })=>{
    const res = await fetchEvents({params, signal});
    if (!res) return;
    if (res.status === "error") {
      //TOAST
      toast.error("Something went wrong.");
      return;
    }
    // console.log(res);
    setData(res.data || []);
    if (res.pagination) setPagination(res.pagination);
  }

  useEffect(() => {
    if (abortController.current) {
      abortController.current.abort();
    }

    abortController.current = new AbortController();

    (async ()=>{
      await fetchEventsData({
        signal: abortController.current?.signal,
        params: {
          page: pagination.page,
          limit: pagination.limit,
          search: debouncedSearchQuery,
          eventType: selectedEventType === "ALL" ? "" : selectedEventType,
        }
      });
    })()
  }, [pagination, selectedEventType, debouncedSearchQuery]);

  useEffect(() => {
    setPageRange(getPageRange(pagination.page, pagination.totalPages));
  }, [pagination]);

  const onSelectEventType = (eventType: string) => {
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
          "w-wrapper-sm md:w-wrapper  flex items-center max-md:justify-center border border-border p-8"
        }
      >
        <OurEvents className={"w-80 h-24 max-md:w-60 max-md:h-20"} />
      </div>
      <div className={"w-wrapper-sm md:w-wrapper relative"}>
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
          "w-wrapper-sm md:w-wrapper border border-border relative"
        }
      >
        <div className={"flex justify-between h-full w-full absolute"}>
          <VerticalLine className={"invisible"} />
          <VerticalLine className={"max-md:hidden"} />
          <VerticalLine className={"max-sm:hidden"} />
          <VerticalLine className={"invisible"} />
        </div>
        <Events events={data} />
        <div className={"flex justify-end mb-12"}>
          <div
            className={
              "grid grid-cols-5 w-fit py-4 px-4 gap-2 text-white select-none z-50"
            }
          >
            <div
              className={`flex justify-center items-center cursor-pointer ${
                pagination.page == 1 && "invisible"
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
                                 pagination.page === page &&
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
                pagination.page == pagination.totalPages &&
                pageRange[pageRange.length - 1] == pagination.totalPages &&
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

const Events = ({ events }: { events: EventData[] }) => (
  <div
    className={
      "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-10 my-10 justify-items-center content-start place-content-start"
    }
  >
    {events.map((event, index) => (
      <EventCard
        {...event}
        key={event._id}
      />
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
