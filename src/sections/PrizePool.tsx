"use client"

import Image from "next/image";
import {NumberTicker} from "@/components/ui/number-ticker";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "motion/react";
import {useEffect, useRef} from "react";
import Link from "next/link";

export default function PrizePool() {

  const motionRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(motionRef, {
    once: true
  });

  useEffect(()=>{
    (async ()=>{
      if (inView){
        await controls.start("visible")
      }
    })()
  }, [inView, controls])

  return (
    <div className="bg-black text-white w-wrapper-sm md:w-wrapper mx-auto">
      <div>
        <div className="text-center  border border-border border-t-0 py-12">
          <h2 className="text-lg md:text-2xl mb-4 font-roboto_mono font-semibold">
            PRIZE POOL WORTH
          </h2>
          <div className="text-4xl  md:text-7xl font-bold tracking-wider font-armstrong">
            <NumberTicker value={1000000} initial={100000} className={"text-white"} />/-
          </div>
        </div>
        <div className="w-full h-10 md:h-16 border-x border-border">
          <div className="w-1/2 h-full border-r border-border"></div>
        </div>
        <div className="border border-border py-8"
        >
          <motion.div
              className={"grid grid-cols-4 max-md:grid-cols-2 justify-items-center place-items-center p-4"}
              initial={{scale: 0}}
              animate={controls}
              variants={{
                hidden: {scale: 0},
                visible: {scale: 1, transition: {duration: 0.5, ease: "easeOut"}},
              }}
              ref={motionRef}
          >
            <Image
                src="/sdg.png"
                alt="UN Sustainable Development Goals"
                width={288}
                height={180}
                className="w-36 md:w-40 object-contain p-4"
            />
            <Image
                src="/innovation.png"
                alt="Institution's Innovation Council"
                width={288}
                height={180}
                className="w-40 md:w-48 object-contain p-4"
            />
            <Image
                src="/40.png"
                alt="40th Anniversary Logo"
                width={288}
                height={180}
                className="w-40 object-contain p-4"
            />
            <Link href={"https://interactnow.in"} target={"_blank"}>
              <Image
                  src={"/icons/interact.png"}
                  width={288}
                  height={180}
                  className={"w-40 md:w-52 object-contain p-4"}
                  alt={"interact"}
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
