"use client";
import "@/styles/events/events-page.css";

import React, { useEffect, useRef, useState } from "react";
import { eventsWithResultType } from "@/constants/events";
import useDebounce from "@/hooks/use-debounce";
import { NextBtn, PrevBtn } from "@/components/carousel-helper";
import { VerticalLine } from "@/components/lines";
import Link from "next/link";
import {
  EventData,
  fetchEvents,
  FetchEventsParams,
  Pagination,
} from "@/lib/api";
import { toast } from "sonner";
import ResultCard, {
  ResultCardSkeleton,
} from "@/app/results/_components/result-card";
import { Circle, Loader, LoaderCircleIcon, Search } from "lucide-react";
import ResultsIcon from "@/app/results/_components/results-icon";
import { useRouter } from "next/navigation";
import ResultCarousel from "@/app/results/_components/result-carousel";
import { VITHackathons } from "@/constants/result";
import FadeIn from "@/components/ui/fade-in";

const ResultsPage = () => {
  const router = useRouter();
  const [data, setData] = useState<EventData[]>([]);
  const [search, setSearch] = useState<string>("");
  const debouncedSearchQuery = useDebounce(search, 500);
  const [selectedEventType, setSelectedEventType] = useState(
     "ALL"
  );
  const abortController = useRef<AbortController | null>(null);
  const [loading, setLoading] = useState(false);
  const [hackTab, setHackTab] = useState(0);
  const [pagination, setPagination] = useState<Pagination>({
    page:  1,
    totalPages: 1,
    limit: 9,
    total: 9,
  });

  const [pageRange, setPageRange] = useState(getPageRange(1, 1));

  const goToNextPage = () => {
    setPagination((prev) => ({
      ...prev,
      page: Math.min(prev.page + 1, prev.totalPages),
    }));
  };

  const goToPrevPage = () => {
    setPagination((prev) => ({
      ...prev,
      page: Math.max(prev.page - 1, 1),
    }));
  };

  const jumpToPage = (page: number) => {
    setPagination((prev) => ({
      ...prev,
      page: Math.max(1, Math.min(page, prev.totalPages)),
    }));
  };

  const fetchEventsData = async ({
    params,
    signal,
  }: {
    params?: FetchEventsParams;
    signal?: AbortSignal;
  }) => {
    setLoading(true);
    const res = await fetchEvents({ params, signal });
    if (!res) return;
    if (res.status === "error") {
      //TOAST
      setLoading(false);
      toast.error("Could not fetch events.");
      return;
    }
    // console.log(res);
    setData(res.data || []);
    setLoading(false);
    if (res.pagination) setPagination(res.pagination);
  };

  useEffect(() => {
    if (abortController.current) {
      abortController.current.abort();
    }

    abortController.current = new AbortController();
    (async () => {
      await fetchEventsData({
        signal: abortController.current?.signal,
        params: {
          page: pagination.page,
          limit: pagination.limit,
          search: debouncedSearchQuery,
          eventType: selectedEventType === "ALL" ? "hackathon,tech competition" : selectedEventType,
        },
      });
    })();
  }, [pagination, selectedEventType, debouncedSearchQuery]);

  useEffect(() => {
    setPageRange(getPageRange(pagination.page, pagination.totalPages));
  }, [pagination]);

  const onSelectEventType = (eventType: string) => {
    setPagination((prev) => ({ ...prev, page: 1 }));
    setSelectedEventType(eventType);
  };

  return (
    <div className={"w-full flex flex-col justify-center items-center "}>
      <div
        className={
          "w-wrapper-sm md:w-wrapper  flex items-center max-md:justify-center border border-border border-b-0 p-8"
        }
      >
        <ResultsIcon className={"w-80 h-24 max-md:w-60 max-md:h-20"} />
      </div>
      <div
        className={
          "w-wrapper-sm md:w-wrapper flex flex-col justify-center gap-7 max-md:gap-4 items-center max-md:justify-center border border-border border-t-0 pb-4 max-md:pb-2"
        }
      >
        <div className="w-full flex">
          {VITHackathons.map((hack, index) => (
            <div
              className={`w-full flex justify-center border-2 py-2 font-space_mono transition-all duration-300 ease-in-out 
                max-md:text-sm max-sm:text-xs px-2 cursor-default
                ${hackTab === index ? "text-black bg-white" : "text-white"}
              `}
              key={hack.name}
              onClick={setHackTab.bind(null, index)}
            >
              {hack.name}
            </div>
          ))}
        </div>
        <ResultCarousel
          // winners={VITHackathons[hackTab].winners}
          title={VITHackathons[hackTab].title}
          image={VITHackathons[hackTab].image}
          onClick={()=>{
            router.push(`/results/sw-event/${VITHackathons[hackTab].slug}`)
          }}
        />
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
        className={"w-wrapper-sm md:w-wrapper border border-border relative"}
      >
        <div className={"flex justify-between h-full w-full absolute"}>
          <VerticalLine className={"invisible"} />
          <VerticalLine className={"max-md:hidden"} />
          <VerticalLine className={"max-sm:hidden"} />
          <VerticalLine className={"invisible"} />
        </div>
        <Events events={data} loading={loading} />
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
    {eventsWithResultType.map((eventType, index) => (
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

const Events = ({
  events,
  loading = false,
}: {
  events: EventData[];
  loading?: boolean;
}) => {
  if (events.length === 0 && loading) {
    return (
      <div
        className={
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-8 max-md:gap-y-5 my-10 justify-items-center content-start place-content-start animate-pulse"
        }
      >
        {Array.from({ length: 6 }, (_, i) => i).map((_, index) => (
          <ResultCardSkeleton key={index} containerClass={"w-full flex"}>
            <div
              className={
                "w-full min-h-[20rem] max-sm:min-h-[5rem] bg-neutral-950 flex flex-grow justify-center items-center"
              }
            >
              <LoaderCircleIcon className={"animate-spin text-neutral-700"} />
            </div>
          </ResultCardSkeleton>
        ))}
      </div>
    );
  }
  return (
    <div
      className={
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-8 max-md:gap-y-5 my-10 justify-items-center content-start place-content-start"
      }
    >
      {events.map((event, index) => (
        <ResultCard
          containerClass={"max-md:w-full"}
          key={event._id}
          {...event}
        />
      ))}
    </div>
  );
};

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
        "bg-inherit placeholder:text-neutral-200 placeholder:text-base w-full outline-none tracking-wide max-md:text-sm"
      }
      placeholder={"SEARCH"}
      onChange={onInputChange}
    />
  </div>
);

export default ResultsPage;
