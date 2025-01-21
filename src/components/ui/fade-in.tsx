"use client"

import {useInView, useAnimation, motion} from "motion/react";
import React, {useEffect, useRef} from "react";

const FadeIn = ({
    children,
    className,
}: {
    children: React.ReactNode,
    className?: string,
}) => {
    const motionRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const inView = useInView(motionRef, {
        once: false,
    });

    useEffect(()=>{
        if (inView) {
            controls.start("visible")
        } else {
            controls.start("hidden")
        }
    }, [inView, controls])

    return (
        <motion.div
            className={className}
            ref={motionRef}
            animate={controls}
            initial={"hidden"}
            variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
        >
            {children}
        </motion.div>
    )
}
export default FadeIn
