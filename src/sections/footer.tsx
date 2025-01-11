import React from 'react'
import "@/styles/footer/footer.css"
import {HorizontalLine} from "@/components/lines";
import Image from "next/image";
import {contactDetails, sections, socials} from "@/constants/footer";
import Link from "next/link";

const FooterContainer = ({
    children,
    className
}: {
    children: React.ReactNode,
    className?: string
})=>(
    <section className={'w-full px-20'}>
        <div className={'footer-border'}>
            <footer className={`footer ${className}`}>
                {children}
            </footer>
        </div>
    </section>
)

const Footer = () => {
    return (
        <FooterContainer className={"font-space_mono pb-5 text-neutral-200"}>
            <div className={"grid grid-cols-2 pl-10 pr-12 py-10"}>
                <div className={"flex flex-col justify-start"}>
                    <Image
                        src={"/images/yantra.svg"}
                        className={"w-60 h-24"}
                        height={91}
                        width={312}
                        alt={"Yantra-Logo"}
                    />
                </div>
                <div className={"flex justify-around items-start"}>
                    <div>
                        <p className={"mt-2 mb-4 footer-title text-lg font-semibold"}>Sections</p>
                        <div className={"flex flex-col items-start gap-3 text-sm"}>
                            {sections.map((value, index) => (
                                <p key={index}>{value}</p>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className={"mt-2 mb-4 footer-title text-lg font-semibold"}>Contact Us</p>
                        <div className={"flex flex-col items-start gap-3 text-sm"}>
                            {contactDetails.map((contact, index) => (
                                <div className={"flex gap-3"} key={index}>
                                    <Image
                                        src={contact.iconSrc}
                                        alt={contact.alt}
                                        className={"size-5"}
                                        width={20}
                                        height={20}
                                    />
                                    <p>{contact.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className={"mt-2 mb-4 footer-title text-lg font-semibold"}>Socials</p>
                        <div className={"flex flex-col items-start gap-3 text-sm"}>
                            {socials.map((social, index) => (
                                <Link className={"flex gap-3"} key={index} href={social.href} target={"_blank"}>
                                    <Image
                                        src={social.iconSrc}
                                        alt={social.text}
                                        className={"size-5"}
                                        width={20}
                                        height={20}
                                    />
                                    <p>{social.text}</p>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <div className={"my-2 px-8"}><HorizontalLine/></div>
            <div className={"flex justify-between text-xs px-8"}>
                <p>2025 © Vellore Institute of Technology, Vellore</p>
                <p>OFFICE OF STUDENTS’ WELFARE</p>
            </div>
        </FooterContainer>
    )
}
export default Footer
