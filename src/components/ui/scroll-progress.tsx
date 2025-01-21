import React from 'react'
import {useScroll, motion} from "motion/react";

const ScrollProgress = ({
    children,
    color,
    height
}:{
    children: React.ReactNode,
    height?: number,
    color?: string,
}) => {
    const { scrollYProgress } = useScroll();
    return (
        <div>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: height || 5,
                    originX: 0,
                    zIndex: 99999,
                    backgroundColor: color || "#76C38F",
                }}
            />
            {children}
        </div>
    )
}
export default ScrollProgress
