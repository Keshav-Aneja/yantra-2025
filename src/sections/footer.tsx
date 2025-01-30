import React from "react";
import "@/styles/footer/footer.css";
import { HorizontalLine } from "@/components/lines";
import Image from "next/image";
import { contactDetails, sections, socials } from "@/constants/footer";
import Link from "next/link";

const FooterContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={"w-full px-20 max-md:px-5"}>
    <div className={"footer-border"}>
      <footer className={`footer ${className}`}>{children}</footer>
    </div>
  </section>
);

const Footer = () => {
  return (
    <FooterContainer className={"font-space_mono pb-5 text-neutral-200"}>
      <div
        className={
          "grid grid-cols-2 max-md:flex max-md:flex-col pl-10 pr-12 max-sm:px-4 py-20 max-md:py-5"
        }
      >
        <div
          className={
            "flex flex-col justify-start max-md:border-b max-md:border-border max-md:pb-10"
          }
        >
          <Image
            src={"/images/yantra.svg"}
            className={"w-60 h-24 max-md:w-48 max-md:h-20"}
            height={91}
            width={312}
            alt={"Yantra-Logo"}
          />
        </div>
        <div
          className={
            "flex justify-around max-md:justify-between items-start gap-4 max-md:grid max-md:grid-cols-2 max-md:mt-4 max-md:gap-5"
          }
        >
          <div className={"max-md:hidden"}>
            <p className={"mt-2 mb-4 footer-title text-lg font-semibold"}>
              Sections
            </p>
            <div className={"flex flex-col items-start gap-3 text-sm"}>
              {sections.map((value, index) => (
                <Link href={value.link} key={index}>
                  {value.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p
              className={
                "mt-2 mb-4 footer-title text-lg max-md:text-base font-semibold max-md:my-3"
              }
            >
              Contact Us
            </p>
            <div className={"flex flex-col items-start gap-3 text-sm"}>
              {contactDetails.map((contact, index) => (
                <Link href={contact.href} target={"_blank"} className={"flex gap-3"} key={index}>
                  <Image
                    src={contact.iconSrc}
                    alt={contact.alt}
                    className={"size-5 max-md:size-4"}
                    width={20}
                    height={20}
                  />
                  <p
                    className={
                      "max-md:text-xs w-full break-all overflow-visible whitespace-normal font-sans"
                    }
                  >
                    {contact.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p
              className={
                "mt-2 mb-4 max-md:my-3 footer-title text-lg max-md:text-base font-semibold"
              }
            >
              Socials
            </p>
            <div
              className={
                "flex flex-col max-md:grid max-md:grid-cols-3 w-fit items-start gap-3 max-md:gap-0 text-sm max-md:border-b max-md:border-border max-md:place-items-start max-md:pb-5"
              }
            >
              {socials.map((social, index) => (
                <Link
                  className={
                    "flex gap-3 w-fit h-fit max-md:border max-md:border-border max-md:p-2"
                  }
                  key={index}
                  href={social.href}
                  target={"_blank"}
                >
                  <Image
                    src={social.iconSrc}
                    alt={social.text}
                    className={"size-5 max-md:size-8 "}
                    width={20}
                    height={20}
                  />
                  <p className={"max-md:hidden"}>{social.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "flex justify-between items-center text-[0.6rem] md:text-xs md:border-t md:border-border mx-8 md:pt-4 max-md:flex-col max-md:text-center max-md:gap-4 max-md:mt-2"
        }
      >
        <p>2025 © Vellore Institute of Technology, Vellore</p>
        <p>OFFICE OF STUDENTS’ WELFARE</p>
      </div>
    </FooterContainer>
  );
};
export default Footer;
