import React from "react";
import Image from "next/image";
import SponsorCard, {SponsorProps} from "@/components/sponsor-card";


const Sponsors = ({
    sponsors
}: {
    sponsors: SponsorProps[]
}) => {
    return (
        <section className={"h-full w-full my-12"}>
            <div className={"m-5 flex gap-5"}>
                <Image
                    src={"/icons/arrow-right-solid.svg"}
                    height={11}
                    width={8}
                    alt={"arrow-right"}
                />
                <div className={"font-roboto_mono text-white text-4xl font-semibold"}>
                    OUR EVENTS
                </div>
            </div>
            <div className={"w-full h-full grid grid-cols-2 grid-rows-2"}>
                {sponsors.map((sponsor, index)=>(
                    <SponsorCard imageSrc={sponsor.imageSrc} alt={sponsor.alt} key={index} />
                ))}
            </div>
        </section>
    );
};
export default Sponsors;
