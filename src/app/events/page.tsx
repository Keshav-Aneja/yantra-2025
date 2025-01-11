"use client"

import React, {useEffect, useState} from 'react'
import OurEvents from "@/app/events/_components/our-events";
import {events, eventTypes} from "@/constants/events";
import EventCard, {EventCardProps} from "@/components/event-card";
import {Search} from "lucide-react";
import useDebounce from "@/hooks/use-debounce";
import usePagination from "@/hooks/use-pagination";
import {NextBtn, PrevBtn} from "@/components/carousel-helper";
import {VerticalLine} from "@/components/lines";

const EventsPage = () => {
    const [ data, setData ] = useState<EventCardProps[]>(events);
    const [ search, setSearch ] = useState<string>('');
    const debouncedSearchQuery = useDebounce(search);
    const [ selectedEventType, setSelectedEventType ] = useState('ALL')
    const {
        goToPrevPage,
        goToNextPage,
        jumpToPage,
        pageData,
        currentPage,
        maxPages
    } = usePagination(data, 9);
    const [pageRange, setPageRange] = useState(getPageRange(currentPage, maxPages));

    useEffect(() => {
        setData(filterEvents(debouncedSearchQuery, events, selectedEventType));
    }, [selectedEventType, debouncedSearchQuery]);

    useEffect(() => {
        setPageRange(getPageRange(currentPage, maxPages));
    }, [currentPage, maxPages]);

    const onSelectEventType = (eventType: string) => {
        jumpToPage(1);
        setSelectedEventType(eventType);
    }

    return (
        <div className={"flex flex-col justify-center items-center"}>
            <div className={"w-wrapper flex items-center border border-border p-8"}>
                <OurEvents className={"w-80 h-24"} />
            </div>
            <div className={"w-wrapper"}>
                <EventTypeFilter selectedEventType={selectedEventType} onSelectEventType={onSelectEventType} />
                <div className={'flex items-center border text-white border-white p-4 gap-4'}>
                    <Search className={'size-5'} />
                    <input
                        className={"bg-inherit placeholder:text-white w-full outline-none tracking-wide"}
                        placeholder={"SEARCH"}
                        onChange={(e)=>setSearch(e.target.value)}
                    />
                </div>
            </div>
            <div className={'w-wrapper border border-border relative'}>
                <div className={"flex justify-between h-full w-full absolute"}>
                    <VerticalLine className={'invisible'} />
                    <VerticalLine />
                    <VerticalLine />
                    <VerticalLine className={'invisible'} />
                </div>
                <div className={'grid grid-cols-3 gap-x-0 gap-y-10 my-10 justify-items-center content-start place-content-start'}>
                    {pageData.map(({ organisation, event }, index)=>(
                        <EventCard organisation={organisation} event={event} key={index} />
                    ))}
                </div>
                <div className={'flex justify-end'}>
                    <div className={'grid grid-cols-5 w-fit py-4 px-4 gap-2 text-white select-none z-50'}>
                        <div className={`flex justify-center items-center cursor-pointer ${currentPage == 1 && 'invisible'}`}><PrevBtn className={'size-3'} onClick={goToPrevPage} /></div>
                        {pageRange.map(page=>(
                            <div key={page} className={`
                               border border-2 border-border size-6 text-sm cursor-pointer flex justify-center items-center font-space_mono
                               ${currentPage === page && "bg-white text-background border-white"}
                            `} onClick={()=>jumpToPage(page)}>{page}</div>
                        ))}
                        <div className={`flex justify-center items-center cursor-pointer ${currentPage == maxPages &&
                        pageRange[pageRange.length - 1] == maxPages && "invisible"}`}><NextBtn className={'size-3'} onClick={goToNextPage} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const getPageRange = (currentPage: number, totalPages: number) => {
    const start = Math.max(1, currentPage - 1);
    const end = Math.min(start + 2, totalPages);
    const range: number[] = [];
    for (let i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
};


const lowerContains = (data: string, query: string)=>{
    return data.toLowerCase().includes(query.toLowerCase());
}

const lowerStartsWith = (data: string, query: string)=>{
    return data.toLowerCase().startsWith(query.toLowerCase());
}

const filterEvents = (query: string | null, data: EventCardProps[], eventType: string = 'All') => {
    let filteredData ;
    if (eventType === 'ALL') filteredData = data;
    else filteredData = events.filter(
        eventCard => eventCard.event.type === eventType
    );
    if (query === null || '') return filteredData;
    return filteredData.filter(entry =>
        lowerStartsWith(entry.event.name, query) ||
        lowerStartsWith(entry.event.type, query) ||
        lowerContains(entry.event.description, query) ||
        lowerStartsWith(entry.organisation.name, query)
    )
}

interface EventTypeFilter {
    selectedEventType: string,
    onSelectEventType: (eventType: string) => void,
}

const EventTypeFilter = ({
    selectedEventType,
    onSelectEventType
}: EventTypeFilter) => (
    <div className={"flex gap-4 p-4 py-6 border border-white"}>
        {eventTypes.map((eventType, index) => (
            <div key={index} className={`border p-1 px-2 text-xs font-space_mono cursor-pointer ${
                eventType === selectedEventType
                    ? "border-white text-gradient font-semibold"
                    : "border-border text-[#4B4B4B] hover:border-neutral-600 text-neutral-500"
            }`}
                 onClick={() => onSelectEventType(eventType)}
            >
                {eventType}
            </div>
        ))}
    </div>
)


export default EventsPage
