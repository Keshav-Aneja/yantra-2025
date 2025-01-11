import React from "react";
import "@/styles/sponsors/sponsor-logo.css";
import Image from "next/image";

export interface SponsorProps {
  imageSrc: string;
  alt: string;
}

const SponsorLogo = ({ imageSrc, alt }: SponsorProps) => {
  return (
    <div className={"relative"}>
      <div className={"logo-border-tl"}></div>
      <div className={"logo-border-br"}></div>
      <Image src={imageSrc} width={260} height={100} alt={alt} />
    </div>
  );
};

const SponsorCard = ({ imageSrc, alt }: SponsorProps) => {
  return (
    <div
      className={
        "w-full h-full relative flex justify-center items-center py-20 pt-28 border border-[#373737]"
      }
    >
      <div
        className={
          "absolute top-0 left-0 border border-[#373737] text-[#C18B2C] font-space_mono text-center px-6 py-4 border-t-0 border-l-0"
        }
      >
        GOLD SPONSOR
      </div>
      <SponsorLogo imageSrc={imageSrc} alt={alt} />
    </div>
  );
};
export default SponsorCard;
