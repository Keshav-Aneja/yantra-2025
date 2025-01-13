import React from 'react'
import Image from "next/image";

const Seemore = () => {
    return (
        <div className={"size-44 max-md:size-64 flex flex-col justify-between items-center relative"}>
            <div className={"absolute size-full"}>
                <Image
                    src={"/icons/arrow-br.svg"}
                    alt={"arrow-bottom-right"}
                    className={"absolute -top-1 -left-1"}
                    width={4.6}
                    height={4.6}
                />
                <Image
                    src={"/icons/arrow-bl.svg"}
                    alt={"arrow-bottom-left"}
                    className={"absolute -top-1 -right-1"}
                    width={4.6}
                    height={4.6}
                />
                <Image
                    src={"/icons/arrow-tr.svg"}
                    alt={"arrow-top-right"}
                    className={"absolute -bottom-1 -left-1"}
                    width={4.6}
                    height={4.6}
                />
                <Image
                    src={"/icons/arrow-tl.svg"}
                    alt={"arrow-top-left"}
                    className={"absolute -bottom-1 -right-1"}
                    width={4.6}
                    height={4.6}
                />
            </div>
            <p className={"font-space_mono uppercase text-lg text-white font-light"}>{"OUR EVENTS"}</p>
            <Image
                src={"/icons/arrow-seemore.svg"}
                height={100}
                width={100}
                alt={"See More"}
                className={"size-16"}
            />
            <p className={"font-space_mono uppercase text-lg text-center text-white font-light"}>{"EXPLORE YANTRA'25"}</p>
        </div>
    )
}
export default Seemore
