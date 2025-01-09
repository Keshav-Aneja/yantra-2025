import React from 'react'
import "@/styles/events/event-card.css"
import Image from "next/image";
import EventImageContainer from "@/components/event-image";

interface Organisation {
    logo: string,
    name: string
}

interface Event {
    type: string,
    typeColor: string,
    image: string,
    name: string,
    description: string,
}

const EventCardContainer = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className={"w-fit h-fit max-w-80"}>
            <div className={"event-card-border"}>
                <div className={'event-card'}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export interface EventCardProps {
    organisation: Organisation,
    event: Event
}

const EventCard = ({
   organisation,
   event,
}: EventCardProps) => {
    return (
        <EventCardContainer>
            <div className={'flex justify-between items-center py-2 px-4'}>
                <div className={'flex items-center gap-1'}>
                    <Image
                        src={organisation.logo}
                        height={24}
                        width={24}
                        className={'bg-black size-6'}
                        alt={organisation.name}
                    />
                    <p className={"text-[#B2B2B2] font-bold mt-0.5 text-sm uppercase"}>{organisation.name}</p>
                </div>
                <div>
                    <p style={{color: event.typeColor}}
                       className={"font-space_mono font-semibold text-sm uppercase"}>{event.type}</p>
                </div>
            </div>

            <div>
                <EventImageContainer>
                    <Image
                        src={event.image}
                        alt={event.name}
                        width={286}
                        height={172}
                        className={'size-full shadow-2xl'}
                    />
                </EventImageContainer>
            </div>

            <div className={'flex flex-col p-4 space-y-2'}>
                <p className={'font-roboto text-lg font-semibold uppercase'}>{event.name}</p>
                <p className={'font-space_mono text-sm'}>{event.description}</p>
            </div>
        </EventCardContainer>
    )
}
export default EventCard
