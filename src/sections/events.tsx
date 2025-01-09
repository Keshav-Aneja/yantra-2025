import React from 'react'
import EventCard, {EventCardProps} from "@/components/event-card";
import Image from "next/image";

interface EventsProps {
    events: EventCardProps[]
}

const Events = ({
    events
}: EventsProps) => {
    return (
        <section className={'w-full h-full'}>
            <div className={"m-5 flex gap-5"}>
                <Image
                    src={"/icons/arrow-right-solid.svg"}
                    height={11}
                    width={8}
                    alt={'arrow-right'}
                />
                <div className={"font-roboto_mono text-4xl font-semibold"}>OUR EVENTS</div>
            </div>
            <div className={"flex"}>
                {events.map((eventCardProps, index)=>(
                    <EventCard key={index} {...eventCardProps} />
                ))}
            </div>
        </section>
    )
}
export default Events
