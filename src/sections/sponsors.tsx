import React from "react";
import SponsorCard, { SponsorProps } from "@/components/sponsor-card";

const Sponsors = ({ sponsors }: { sponsors: SponsorProps[] }) => {
  return (
    <section className={"h-full w-full"}>
      <div className={"w-full h-full grid grid-cols-2 grid-rows-2"}>
        {sponsors.map((sponsor, index) => (
          <SponsorCard
            imageSrc={sponsor.imageSrc}
            alt={sponsor.alt}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};
export default Sponsors;
