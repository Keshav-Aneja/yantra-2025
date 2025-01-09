import React from 'react'
import "@/styles/footer/footer.css"
import {HorizontalLine} from "@/components/lines";
import Image from "next/image";

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

const sections = [
    "About Us",
    "Timeline",
    "Main Hack",
    "Events",
    "Team"
]

const contactDetails = [
    {
        iconSrc: "/icons/phone.svg",
        alt: "call",
        text: "+91 81253 51715"
    },
    {
        iconSrc: "/icons/email.svg",
        alt: "email",
        text: "director.sw@vit.ac.in"
    },
    {
        iconSrc: "/icons/location.svg",
        alt: "address",
        text: "MB210"
    }
]

const Footer = () => {
    return (
        <FooterContainer className={"font-space_mono pb-5"}>
            <div className={"grid grid-cols-3 pl-8 py-10"}>
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
                        <p className={"mt-2 mb-4 footer-title text-lg"}>Sections</p>
                        <div className={"flex flex-col items-start gap-2 text-sm"}>
                            {sections.map((value, index)=>(
                                <p key={index}>{value}</p>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className={"mt-2 mb-4 footer-title text-lg"}>Contact Us</p>
                        <div className={"flex flex-col items-start gap-2 text-sm"}>
                            {contactDetails.map((contact, index)=>(
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

                </div>
                <div></div>
            </div>
            <div className={"my-2 px-8"}><HorizontalLine /></div>
            <div className={"flex justify-between text-xs px-8"}>
                <p>2025 © Vellore Institute of Technology, Vellore</p>
                <p>OFFICE OF STUDENTS’ WELFARE</p>
            </div>
        </FooterContainer>
    )
}
export default Footer
