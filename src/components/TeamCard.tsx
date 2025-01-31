import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useAnimation, useInView, motion } from "motion/react";
interface Props {
  img: string;
  name: string;
  position?: string;
  title: string;
}
const TeamCard = ({ data }: { data: Props }) => {
  const motionRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(motionRef, {
    once: false,
  });

  useEffect(() => {
    (async () => {
      if (inView) {
        await controls.start("visible");
      }
    })();
  }, [inView, controls]);

  return (
    <motion.div
      className="w-full bg-white flex flex-col items-center justify-start gap-4 p-1 md:p-2 pt-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={controls}
      variants={{
        visible: {
          scale: 1,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
      ref={motionRef}
    >
      <div className="w-[90%] md:w-[80%] aspect-[0.9] overflow-hidden">
        <Image
          src={data.img}
          width={400}
          height={300}
          alt=""
          className="w-full object-cover h-full"
        />
      </div>
      <span className="flex items-start justify-center text-center gap-3 w-full  font-space_mono uppercase text-xs md:text-sm lg:text-base h-10">
        {/* <Image
          src="/icons/arrow-right-solid.svg"
          alt=""
          width={20}
          height={20}
          className=" w-[8px] invert h-auto mt-1"
        />{" "} */}
        {data.name}
      </span>
      <span className="w-full font-space_mono text-[0.6rem] md:text-sm text-center">
        {data.title}
      </span>
    </motion.div>
  );
};

export default TeamCard;
