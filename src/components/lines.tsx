import React from 'react'

interface VerticalLineProps {
    width?: number,
    className?: string
}

export const VerticalLine = ({
    width = 1,
    className
}: VerticalLineProps) => {
    return <div
        className={`bg-[#353539] h-full ${className}`}
        style={{
            width: width,
        }}
    >
    </div>
}

interface HorizontalLineProps {
    height?: number,
    className?: string
}

export const HorizontalLine = ({
    height = 1,
    className
}: HorizontalLineProps) => {
    return <div
        className={`bg-[#353539] w-full ${className}`}
        style={{
            height: height
        }}
    >
    </div>
}
